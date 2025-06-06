import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    let retries = 5;
    while (retries) {
      try {
        await this.$connect();
        console.log('✅ DB 연결 성공');
        break;
      } catch (e) {
        retries -= 1;
        console.error('❌ Prisma DB 연결 실패, 재시도 중...', retries);
        await new Promise(res => setTimeout(res, 3000));
        if (retries === 0) {
          console.error('🔥 Prisma DB 재시도 실패. 서버는 계속 뜨지만 DB는 연결 안됨.');
          return;
        }
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

# my-nest-app
`nestJS`, `Prisma`, `MySQL`, `Docker` 

초기 세팅 및 배포 연습 용 레포지토리

✅컨테이너 빌드∙실행
```bash
docker compose -f docker-compose.dev.yml up -d --build
```

✅컨테이너 초기화
```bash
docker-compose -f docker-compose.dev.yml down -v
docker volume prune -f  # 불안하면 확실히 다 지움
docker-compose -f docker-compose.dev.yml up --build
```

✅PrismaClientInitializationError

backend 컨테이너 안에서 실행
  - 처음 레포 클론했을 때
  - Prisma 모델 수정했을 때

```bash
npx prisma generate
```

✅프리즈마 스튜디오 실행하기
```bash
npx prisma studio --hostname 0.0.0.0
```
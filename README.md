# my-nest-app

`nestJS`, `Prisma`, `MySQL`, `Docker`

초기 세팅 및 배포 연습 용 레포지토리

## 로컬 개발 시

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

## docker-hub 이미지로 배포하기

✅EC2에서 사용할 도커 이미지 빌드, push

```bash
docker buildx build --platform linux/amd64 -t <dockerhub-id>/<docker-image-name>:latest . --push
```

이미지 내부 확인하기

```bash
docker run -it --rm 2shul/nest-app-deploy-test sh
```

✅EC2에서 도커 이미지 pull 하기

```bash
docker pull <dockerhub-id>/<docker-image-name>:latest
```

.env.production,
docker-compose.prod.yml 작성

✅컨테이너 실행

```bash
docker compose -f docker-compose.dev.yml up -d
```

필수 팁

```bash
# 죽어버린 컨테이너까지 확인
docker ps -a
# 로그 확인
docker log <container id>
```

```bash
# 모든 컨테이너 중지
docker stop $(docker ps -aq)
# 모든 컨테이너 삭제
docker rm $(docker ps -aq)
# 모든 볼륨 삭제
docker volume prune -f
# 모든 네트워크 삭제
docker network prune -f
# 안 쓰는 이미지 전체 삭제
docker image prune -a -f
```

```bash
# 사용하지 않는 리소스 청소 (사용 전에 검색하고 쓸 것)
docker system prune
docker system prune -a
docker system prune -a --volumes
```

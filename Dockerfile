# Base Stage
FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
COPY package*.json ./
RUN npm install

# Development Stage
FROM base AS dev
COPY . .
RUN npx prisma generate
CMD ["npm", "run", "start:dev"]

# Build Stage (Production)
FROM base AS build
COPY . .
RUN npx prisma generate
RUN npm run build

# Production Stage
FROM node:22-alpine AS prod
WORKDIR /app

# 복사 순서 중요함 (빌드 산출물 우선)
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/prisma ./prisma


# pm2 설치
RUN npm install -g pm2

# PM2로 서버 실행
CMD ["pm2-runtime", "ecosystem.config.js"]

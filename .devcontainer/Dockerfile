# ベースイメージとしてNode.jsを使用
FROM node:22-alpine

# RUN apt-get update && apt-get install -y \
#     zsh postgresql-client \
#     && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを設定
WORKDIR /app

RUN mkdir /backend

##########
# backend
##########
WORKDIR /app/backend

# # 依存関係をインストール
# RUN npm install yarn

RUN npm install express cors @prisma/client
RUN npm install -D typescript ts-node nodemon @types/node @types/express

# COPY ../app/backend .

##########
# frontend
##########
WORKDIR /app

RUN npx create-vite@latest frontend --template react-ts

# Viteサーバーを起動するポートを公開
EXPOSE 5173 3001

# COPY ../app/frontend .

# USER node
# # 開発サーバーを起動
# CMD ["npm", "run", "dev"]
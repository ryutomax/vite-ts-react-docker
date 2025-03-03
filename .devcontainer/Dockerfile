# ベースイメージとしてNode.jsを使用
FROM node:22

RUN apt-get update && apt-get install -y \
    zsh postgresql-client \
    && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

WORKDIR /usr/local/bin
RUN chmod 777 entrypoint.sh
RUN sed -i 's/\r$//' ./entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# 作業ディレクトリを設定
# WORKDIR /app

# RUN mkdir /backend

# ##########
# # backend
# ##########
# WORKDIR /app/backend

# COPY ./app/backend ./

# # # 依存関係をインストール
# RUN npm install yarn

# RUN yarn add express cors @prisma/client
# RUN yarn add -D typescript ts-node nodemon @types/node @types/express

##########
# frontend
##########
# WORKDIR /workspace

# RUN mkdir app

# WORKDIR /workspace/app

# RUN npx create-vite@latest frontend --template react-ts

# WORKDIR /workspace/app/frontend

# RUN npm install yarn

# RUN yarn install

# COPY ./app/frontend/ ./

# Viteサーバーを起動するポートを公開
EXPOSE 5173

# USER node
# # 開発サーバーを起動
# CMD ["npm", "run", "dev"]
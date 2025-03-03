#!/bin/sh

# backend
if [ ! -f "/workspace/app/backend/package.json" ]; then
  echo "Creating backend project..."
  cd /workspace/app/backend
  npm install yarn
  yarn add express cors @prisma/client
  yarn add -D typescript ts-node nodemon @types/node @types/express
fi

# frontend
if [ ! -f "/workspace/app/frontend/package.json" ]; then
  echo "Creating frontend project..."
  cd /workspace/app
  npx create-vite@latest frontend --template react-ts
  cp -r frontend/* /workspace/app/frontend/
  rm -rf frontend  # 一時的なディレクトリを削除
fi

cd /workspace/app/frontend
npm install yarn
yarn install

exec "$@"
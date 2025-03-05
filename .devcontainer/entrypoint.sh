#!/bin/sh

# backend
if [ ! -f "/workspace/app/backend/package.json" ]; then
  echo "Creating backend project..."
  cd /workspace/app/backend
  npm install yarn
  yarn add express cors @prisma/client
  yarn add -D typescript ts-node nodemon @types/node @types/express

  yes | npx prisma migrate dev --name init

  # add cmd to scripts in /workspace/app/backend/package.json
  sed -i '1s|{|{\n  "scripts": {\n    "dev": "nodemon ./src/server.ts"\n  },|' /workspace/app/backend/package.json
fi

# frontend
if [ ! -f "/workspace/app/frontend/package.json" ]; then
  echo "Creating frontend project..."
  cd /workspace
  yes | npx create-vite@latest frontend --template react-ts
  cp -r /workspace/frontend/* /workspace/app/frontend/
  rm -rf /workspace/frontend  # 一時的なディレクトリを削除

  cd /workspace/app/frontend
  npm install yarn
  yarn install

  # add args to vite cmd in /workspace/app/frontend/package.json
  sed -i 's|"dev": "vite"|"dev": "vite --host 0.0.0.0"|' /workspace/app/frontend/package.json
fi

echo "Finished setting up project."

echo "$@"
exec "$@"
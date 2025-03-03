# backend

cd app/backend
npm install yarn
yarn add express cors @prisma/client
yarn add -D typescript ts-node nodemon @types/node @types/express

### APIサーバー起動：
npx prisma migrate dev --name init

### /workspace/app/backend/package.json
```
  "scripts": {
    "dev": "nodemon src/server.ts"
  },
```
yarn dev

# frontend

cd app/

npx create-vite@latest frontend --template react-ts

cd app/frontend
npm install yarn
yarn install

yarn dev




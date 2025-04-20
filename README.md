# Fabrika test task  
  
## FrontEnd:  
Vite / React / TypeScript  
ReduxToolkit / axios / react-hook-form / zod  
Framer-motion  
Gravity UI  
  
### Для запуска клиента:  
```
npm install  
npm run dev
```
  
## BackEnd:  
NestJS / TypeScript  
Postgresql  
Prisma  
class-transformer  
class-validator  
  
### Для запуска сервера:  
```
npm install
npx prisma db push
npm start
```
  
## ВАЖНО:  
В .env файле в папке с сервером описаны три переменные  
```
DATABASE_URL
CLIENT_URL
SERVER_URL
```
  
В моем случае, я испольую postgresql локально, вам нужно будет поменять имя пользователя БД (у меня postgres) и пароль (у меня root), а так же создать базу под названием fabrika или поменять название БД в .env файле (DATABASE_URL)  
```
DATABASE_URL="postgresql://DB_USERNAME:DB_PASSWORD@localhost:5432/DB_NAME?schema=public"
```
  
Так же переменную CLIENT_URL, возможно, тоже надо будет поменять, у меня клиент старует на 5173-м порту, вам нужно будет ввести URL вашего клиента:
  
```
CLIENT_URL="http://localhost:ВАШ ПОРТ"
```
  
Сервер запускается на 3000-ом порту, но если у вас этот порт занят, то вам нужно будет поменять его так же в .env файле:
  
```
PORT=ваш порт, на котором будет работать сервер
```
    
После этих действий, нужно в терминале с корневой папкой сервера ввести команду:
```
npx prisma db push
```  
или (если prisma уже установлена на ваш пк)
```
prisma db push
```
  
После смены порта в .env файле, нужно будет поменять адресс сервера, на который стучит клиент:  
client > src > api > api.ts
  
```
export const $api = axios.create({
	baseURL: 'http://localhost:ваш порт, на котором будет работать сервер',
	withCredentials: true,
})
```

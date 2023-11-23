# Use a imagem oficial do Node.js
FROM node:14-alpine

# Configure o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Copie o arquivo package-lock.json para o diretório de trabalho (se existir)
COPY package-lock.json* .

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

RUN chmod -R 777 /app

# Construa o aplicativo React
RUN npm run build

# Exponha a porta 80 para o mundo exterior
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "start"]
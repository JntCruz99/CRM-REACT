# Use a imagem oficial do Node.js
FROM node:alpine

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

# Construa o aplicativo React
RUN npm run build

# Exponha a porta 80 para o mundo exterior
EXPOSE 80

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "start"]
# Usa imagem oficial com Node.js
FROM node:18

# Cria e entra no diretório da app dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (melhora cache)
COPY package*.json ./

# Instala as dependências
RUN npm install --legacy-peer-deps

# Copia o restante do projeto para dentro do container
COPY . .

# Gera os arquivos de produção
RUN npm run build

# Expõe a porta usada pelo Vite Preview
EXPOSE 3000

# Comando para iniciar o app em modo produção
CMD ["npm", "start"]


# Instala as dependências




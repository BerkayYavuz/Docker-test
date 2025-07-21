#1. Node tabanlı imajdan başla
FROM node:18

# 2. Uygulama dizinini oluştur
WORKDIR /app

#3. bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install

# 4. Uygulama dosyasını kopyala 
COPY . .

#5. Uygulamanın çalışacağı port
EXPOSE 3000

#6. Uygulama başlatma komutu
CMD ["node", "app.js"]

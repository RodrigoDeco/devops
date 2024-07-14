# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Ejecuta la aplicación Node.js
CMD ["node", "app.js"]

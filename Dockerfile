# Usar la imagen oficial de Node.js (el entorno estándar)
FROM node:18-alpine

# Crear el directorio donde vivirá tu proyecto dentro de la "pecera"
WORKDIR /app

# Copiar los archivos de configuración primero
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el resto de tu código
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para encender el proyecto
CMD ["npm", "run", "dev"]

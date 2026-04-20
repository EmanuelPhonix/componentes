# Etapa de desarrollo
FROM node:18-alpine

# Establecer directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json (si existe)
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto donde corre Vite (puerto 5173 por defecto)
EXPOSE 5173

# Comando por defecto: correr en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host", "--no-open"]

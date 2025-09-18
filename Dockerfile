# Stage 1: Build the Angular app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production --base-href=/ --output-path=./dist

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular files from previous stage
#COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
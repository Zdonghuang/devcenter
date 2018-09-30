FROM nginx
COPY ./demo/dist /usr/share/nginx/html
EXPOSE 80 443

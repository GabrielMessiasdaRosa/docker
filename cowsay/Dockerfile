FROM nginx:latest


COPY html /usr/share/nginx/html
ENTRYPOINT [ "./docker-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]

RUN echo "\n\
 _Cowsay :_____________ \n\
< Hello from BRAZIL!>\n\
 ----------------------- \n\
        \   ^__^\n\
         \  (oo)\_______\n\
            (__)\       )\/\\n\
                ||----w |\n\
                ||     ||\n\
\n\
"
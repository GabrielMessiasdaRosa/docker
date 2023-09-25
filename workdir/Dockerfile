### Dockerfile é o arquivo principal para construção da imagem do container 

## from é a imagem base para a construção da imagem do container

FROM nginx:latest

## USER é o usuário que vai executar os comandos RUN

USER motivado


## WORKDIR é o diretório de trabalho dentro do container
WORKDIR /app

RUN apt-get update && \
    apt-get install nano -y

## COPY copia arquivos do host para o container

COPY html/ /usr/share/nginx/html


## para gerar essa imagem docker basta executar o comando abaixo
## docker build -t nome_da_imagem:tag .
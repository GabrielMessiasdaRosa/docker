FROM php:latest

## WORKDIR DO PROJETO
WORKDIR /var/www


## Instalaçao de pacotes obrigatorios
RUN apt update && \
    apt install libzip-dev -y && \ 
    ## Instalaçao do pacote zip para o php ( tenho que ver como isso funciona melhor, parece interessante )
    docker-php-ext-install zip

## Instalaçao do PHP
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

## Criando o projeto laravel
RUN php composer.phar create-project laravel/laravel laravel

ENTRYPOINT [ "php", "laravel/artisan", "serve"]
CMD [ "--host=0.0.0.0" ]

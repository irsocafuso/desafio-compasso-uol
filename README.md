# desafio-compasso-uol

## Instalação no ubuntu:

1. Clonar o repositório (https://github.com/irsocafuso/desafio-compasso-uol)

        git clone https://github.com/irsocafuso/desafio-compasso-uol.git

2. Instalar o nvm(controle de versão do npm):

        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

3. Instalar o npm(utilizei --lts que instala a versão atual pelo nvm que é a (v14.17.1))

        nvm install --lts

4. Instalar o yarn(versão 1.22.5)

        npm install -g yarn

5. Instalar as dependencias com o yarn

        yarn install

6. Testar com o Jest

        yarn test

7. Iniciar versão de desenvolvimento [http://localhost:3000](http://localhost:3000)

        yarn start

8. Iniciar versão de produção no serve

        yarn global add serve
        export PATH="$PATH:$(yarn global bin)"
        yarn build
        serve -s build

## Bibliotecas Utilizadas

- Para navegação entre páginas foi utilizado: [react-router-dom](https://reactrouter.com/web/guides/quick-start)
  - Instalação: yarn add react-router-dom
  
- Para consumir os endpoints foi utilizado: [axios](https://axios-http.com/)
  - Instalação: yarn add axios
  
- Para facilitar a estilização da aplicação foi utilizado: [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
  - Instalação: yarn add react-bootstrap bootstrap@5.0.2

- Para utilizar icones externos foi utilizado: [fontawesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
  - Instalação: yarn add @fortawesome/fontawesome-svg-core
  - Instalação: yarn add @fortawesome/free-solid-svg-icons
  - Instalação: yarn add @fortawesome/react-fontawesome

- Para que Sass funcione na aplicação foi utilizado: [node-sass](https://github.com/sass/node-sass)
  - Instalação: npm install node-sass

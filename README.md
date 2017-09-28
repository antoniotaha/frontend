# Front-end

#### Requisitos:

- Versão do npm: 5.4.0 ou superior
- Versão do node: v8.5.0 ou superior

#### Como executar?

O projeto foi criado utilizando como task runner o NPM. Alguns scripts estão configurados no package.json.

##### Executar projeto
- Primeiramente é preciso instalar as dependências do projeto, através do comando npm install, onde está o arquivo package.json
- Para executar o projeto basta acessar a pasta onde está o arquivo package.json, dentro do projeto, e rodar o comando via terminal npm start
- Após o passo anterior o projeto estará rodando, configurado para acesso em http://localhost:3000

##### Executar testes

- Para executar os testes basta executar o comando npm test, e se necessário escolher digitar a tecla a para rodar todos os testes, conforme orientado na tela.

##### Checklist

- [X]  Pesquisar um usuário por username do github
- [X]  Fazer anotações de observação referente ao usuário pesquisado
- [X]  Paginação dos repositórios do usuário pesquisado
- [X]  Exibida uma página 404 para usuário não encontrado
- [X]  Testes com jest no front-end, cobrindo conceitos de teste de snapshot de componentes e de requisições da api

##### O que mais foi feito?

- Para a realização deste projeto foi adotado o framework de front-end React, devido ao seu poder de componentização. 
- Para estilizar as páginas foi utilizado SASS, usando recursos importantes que ele oferece para facilitar a vida do desenvolvedor front-end.
- Como framework de estilo para os componentes e páginas, foi utilizado o bulma, que é uma framework bem leve e modular, que nos permite selecionar somente aquilo que precisamos usar em nossa aplicação.
- Para realizar as requisições à api do Github foi utilizado o axios, que nos permite realizar requisições assíncronas.
- Para a realização dos testes foi utilizado o jest.
- Também foi utilizado um projeto conhecido por Create React App que nos permite rapidamente criar uma aplicação React, com a configuração necessária para colocar ela em execução. Esse projeto configura de modo mais otimizado possível
ferramentas como webpack, para rodar uma aplicação e ainda gerar seu build para deploy, com arquivos minificados.
- Foi usado a api React-Router para configuração de rotas na aplicação.





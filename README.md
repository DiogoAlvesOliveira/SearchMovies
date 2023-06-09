# Search Movies API
Projeto Search Movies - 04/04 à 10/04


_________

  
### ✨ Sobre o projeto:
O Search Movies API foi desenvolvido para ser comsumido no Search Movies Front.

## Técnologias usadas:

## Back-end:

* TypeScript
  1. API Rest
* NestJS
* TypeORM
* sqlite3

<h2 align="center"> Instruções para reproduzir o projeto</h2>

## Ambiente de local:

* Clonar repositório em sua máquina
* Importar em uma IDE de suapreferência
* Instalar
```bash
$ npm install
```
* Rodar a aplicação
```bash
$ npm run start
```
* Comsumir os endpoints que se iniciam com a url http://localhost:3003/movies/

<h2 align="center"> Endpoints</h2>

<h3> Verbo GET</h3>


* Busca por título de filme no serviço OMDBAPI
  1. Chamar API na url http://localhost:3003/movies/ + título do filme
  
##

* Busca por título favorito no banco de dados
  1. Chamar API na url http://localhost:3003/movies/favorite + título do filme
_________

<h3> Verbo POST</h3>

* Adiciona o título do filme aos meus favoritos no banco de dados
  1. Chamar API na url http://localhost:3003/movies/ passando no body o json title ex: { "title":"titulo do filme" }

_________

<h3> Verbo DELETE</h3>

* Remove o título do filme aos meus favoritos no banco de dados
  1. Chamar API na url http://localhost:3003/movies/ + título do filme

_________


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## License

Nest is [MIT licensed](LICENSE).

# App de Delivery (Trybe)

Aplicação web de delivery de bebidas com três perfis (cliente, vendedor e administrador), pedidos acompanhados **em tempo real** e API própria com banco de dados MySQL.

🔗 **Demonstração online:** _(link do Railway a ser adicionado)_

**Contas de teste** (já cadastradas na demonstração):

| Perfil | E-mail | Senha |
|---|---|---|
| Cliente | `zebirita@email.com` | `$#zebirita#$` |
| Vendedor | `fulana@deliveryapp.com` | `fulana@123` |
| Administrador | `adm@deliveryapp.com` | `--adm2@21!!--` |

## Contexto

Projeto final do módulo de back-end do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/), feito em **grupo (Grupo 4)** em julho e agosto de 2021, seguindo metodologia ágil: uma branch por funcionalidade, pull requests com revisão do grupo e testes automatizados de avaliação. O enunciado original está em [`docs/ENUNCIADO-TRYBE.md`](docs/ENUNCIADO-TRYBE.md).

Este repositório é uma cópia da branch do grupo (`main-group-4-sockets`, a mais completa, com o histórico de commits preservado) do repositório [VitorN200/sd-08-project-delivery-app](https://github.com/VitorN200/sd-08-project-delivery-app), que é um fork do repositório da turma. O trabalho de deploy (Dockerfile e ajustes de configuração) foi feito depois, em 2026.

## Funcionalidades

- **Cliente:** cadastro e login, lista de produtos, carrinho, finalização do pedido (vendedor, endereço e número), lista e detalhes dos pedidos, confirmação de entrega.
- **Vendedor:** lista de pedidos e detalhes, com mudança de status (Preparando → Em trânsito).
- **Administrador:** cadastro de novos usuários (cliente, vendedor ou administrador).
- **Tempo real:** a mudança de status feita pelo vendedor aparece para o cliente sem recarregar a página (Socket.IO).
- Autenticação com JWT e senhas armazenadas com hash.

## Minha contribuição

Trabalho em grupo: o repositório tem cerca de 160 commits na branch, de 7 pessoas; a maior parte do back-end de pedidos, das telas de pedidos e dos sockets foi feita por outros integrantes. A minha parte, pelo histórico de commits:

- **Front-end:** telas de **login** e **cadastro** com validação dos campos, integração com a API (geração do token e criação de usuário) e redirecionamento por perfil; tela de **gerenciamento do administrador**; camada de chamadas à API (`services/api.js`).
- **Back-end:** endpoint de **produtos**, cálculo do **preço total** do pedido, criação e atualização de **pedidos** (vendas), rota de **criação de usuário pelo administrador** com autenticação, ajustes de migrations e tratamento de erros.
- **Deploy (2026):** adaptação para publicar em um único serviço no Railway (ver abaixo).

## Tecnologias

- **Front-end:** React 17, React Router 5, Axios, styled-components, Socket.IO Client
- **Back-end:** Node.js, Express, Sequelize (migrations e seeders), MySQL, JWT, Joi, Socket.IO
- **Deploy:** Docker, Railway (aplicação + MySQL)

## Como executar localmente

Requisitos: Node 14+ e MySQL.

```bash
# Banco e API
cd back-end
cp .env.example .env    # ajuste as variáveis MYSQL_* (veja abaixo)
npm install
npm run db:reset        # cria o banco, as tabelas e os dados de exemplo
npm start               # http://localhost:3001

# Front-end (outro terminal)
cd front-end
npm install
npm start               # http://localhost:3000
```

Variáveis do banco: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DB_NAME`. Em desenvolvimento o front acessa a API em `http://localhost:3001`.

> Observação: o React 16/17 com `react-scripts` 4 em Node 17 ou superior precisa de `NODE_OPTIONS=--openssl-legacy-provider` para compilar.

## Deploy no Railway

O `Dockerfile` da raiz compila o front-end e a própria API o entrega junto com os dados (um serviço só, mais o MySQL). Na inicialização, `back-end/scripts/start-prod.sh` cria as tabelas e popula o banco somente na primeira vez.

Variáveis do serviço da aplicação no Railway (o banco usa as variáveis `MYSQL*` que o próprio MySQL do Railway fornece, por referência):

| Variável | Valor |
|---|---|
| `NODE_ENV` | `production` |
| `MYSQLHOST` | `${{MySQL.MYSQLHOST}}` |
| `MYSQLPORT` | `${{MySQL.MYSQLPORT}}` |
| `MYSQLUSER` | `${{MySQL.MYSQLUSER}}` |
| `MYSQLPASSWORD` | `${{MySQL.MYSQLPASSWORD}}` |
| `MYSQLDATABASE` | `${{MySQL.MYSQLDATABASE}}` |

## Reconhecimento

Projeto desenvolvido em grupo (Turma 8 da Trybe, Grupo 4). A autoria de cada commit está preservada no histórico do repositório.

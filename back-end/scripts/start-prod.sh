#!/bin/sh
# Inicialização em produção: cria/atualiza as tabelas, popula na 1ª vez e sobe a API.
set -e
cd "$(dirname "$0")/.."
npx sequelize-cli db:migrate
node scripts/seed-if-empty.js
exec node .

# Imagem única para o Railway: compila o front-end e a API o entrega junto com a API (um serviço só).
FROM node:16-slim

ENV NODE_ENV=production \
    SKIP_PREFLIGHT_CHECK=true \
    REACT_APP_API_URL="" \
    PUBLIC_URL_BASE=""

WORKDIR /app

# Front-end: instala e compila (REACT_APP_API_URL vazio = mesma origem da API)
COPY front-end/package*.json front-end/
RUN cd front-end && npm ci --no-audit --no-fund --production=false
COPY front-end front-end
RUN cd front-end && npm run build && rm -rf node_modules

# Back-end (sequelize-cli é necessário em produção para rodar as migrations)
COPY back-end/package*.json back-end/
RUN cd back-end && npm ci --no-audit --no-fund --production=false
COPY back-end back-end

EXPOSE 3001
CMD ["sh", "back-end/scripts/start-prod.sh"]

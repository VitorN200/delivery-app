// Popula o banco (usuários de exemplo e produtos) apenas na primeira execução.
const { execSync } = require('child_process');
const { User, sequelize } = require('../src/database/models');

(async () => {
  const total = await User.count();
  if (total === 0) {
    console.log('Banco vazio: executando seeders...');
    execSync('npx sequelize-cli db:seed:all', { stdio: 'inherit' });
  } else {
    console.log(`Banco já populado (${total} usuários): seeders ignorados.`);
  }
  await sequelize.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

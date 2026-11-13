require('dotenv').config();

const environment = process.env.NODE_ENV || "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

// Variáveis MYSQL_* (padrão do projeto) ou MYSQL* (as que o MySQL do Railway já fornece).
const database = process.env.MYSQLDATABASE
  || `${process.env.MYSQL_DB_NAME || 'delivery-app'}${suffix[environment] || suffix.test}`;

const options = {
  host: process.env.MYSQL_HOST || process.env.MYSQLHOST || 'mysql',
  port: process.env.MYSQL_PORT || process.env.MYSQLPORT || '3306',
  database,
  username: process.env.MYSQL_USER || process.env.MYSQLUSER || 'root',
  password: process.env.MYSQL_PASSWORD || process.env.MYSQLPASSWORD || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};

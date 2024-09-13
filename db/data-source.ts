import { ENVIRONMENTS } from 'src/config/environments';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: ENVIRONMENTS.DB_HOST,
  port: +ENVIRONMENTS.DB_PORT,
  database: ENVIRONMENTS.DB_DATABASE,
  username: ENVIRONMENTS.DB_USERNAME,
  password: ENVIRONMENTS.DB_PASSWORD,
  entities: ['dist/**/*entity.js'],
  migrations: ['dist/db/migrations/*js'],
  synchronize: +ENVIRONMENTS.TYPE_ORM_SYNCHORONIZE === 1,
  ...(+ENVIRONMENTS.TYPE_ORM_SSL
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {}),
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  if (client === 'postgres') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST'),
          port: env.int('DATABASE_PORT'),
          database: env('DATABASE_NAME'),
          user: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    };
  }

  // SQLite para desenvolvimento
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: '.tmp/data.db',
      },
      useNullAsDefault: true,
    },
  };
};

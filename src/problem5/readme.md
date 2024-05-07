# Readme
## Config enviroment:
1. Duplicate ```.env.sample``` file, then rename it to ```.env```
2. Edit ```DATABASE_URL``` to your database URL following the existing format.

## Run application:
1. Install packages: ```npm install```
2. Run application: ```npm start```

## Run Docker container:
1. Run ```docker-compose up -d```

## Update database:
I use Prisma in this project.
1. Go to ```prisma/schema.prisma``` and edit your configuration. Visit https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql
2. Run migrate command: ```npx prisma migrate dev --name [migration name]```
3. Run generate command: ```npx prisma generate``` (optional)

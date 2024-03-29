import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
  log: [
    {
      emit: 'stdout',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
});

export const { user } = prisma;
export default prisma;

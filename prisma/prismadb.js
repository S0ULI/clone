import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default prisma;

// const client = globalThis.prisma || new PrismaClient();
// if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

// export const testPrisma = new PrismaClient()

// export default client;

///////////
// const prismaClientSingleton = () => new PrismaClient()
// const globalForPrisma = globalThis
// globalForPrisma.prisma = globalForPrisma.prisma ||  prismaClientSingleton()

// const prisma = globalForPrisma.prisma || prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

import { PrismaClient } from '@prisma/client/';

const prisma = new PrismaClient();

export const createProduct = async (props) => {
  props = {
    slug,
    title,
    image,
    description,
    price,
    rate,
  };

  const product = await prisma.product.create({
    data: {
      slug,
      title,
      image,
      description,
      price,
      rate,
    },
  });

  return product;
};

export const getAllProducts = async () => {
    const products = await prisma.product.findMany({
        orderBy: [
            {
                price: 'desc'
            }
        ]
    })

    return products;
}

export const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {id : id}
    })
}

export const findProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where : {id: id},
        select: {
            id: true
        }
    })
    return
}
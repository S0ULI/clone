import prisma from './prismadb';



// create
//===== create
// create

// creating a product
export const createProduct = async (body) => {
  const productData = {
    slug: body.slug,
    title: body.title,
    image: body.image,
    description: body.description,
    price: body.price,
    rate: body.rate,
    category: body.category
  };
  const newProduct = await prisma.product.create({ data: productData });

  return newProduct;
};


// Read
//===== Read
// Read

// getting all the products
export const getAllProducts = async () => {
  const products = await prisma.product.findMany();

  // inclued inside find many
  // {
  //   include: {
  //     id: true,
  //     title: true,
  //     image: true,
  //     description: true,
  //     price: true,
  //     rate: true,
  //   }
  // }
  return products;
};

// getting a product by its id
export const getProductById = async (productId) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  return product;
};

// getting products by their category
export const getProductsByCategory = async (category) => {
  const products = await prisma.product.findMany({
    where: { category: { contains: category } },
  });

  return products;
}

// getting products by their title
export const getProductsByTitle = async (title) => {
  const products = await prisma.product.findMany({
    where: { title: { contains: title } },
  });
  
  return products;
};

// getting producst by their title in a cetagory
export const getProductsByTitleInCategory = async (category, title) => {
  const products = await prisma.product.findMany({
    where: { 
      category: { contains: category },
      title: { contains: title }
    },
  });
  
  return products;
}

// Updtae
//===== Updtae
// Updtae

// Update a Product
export const updateProduct = async (productId, body) => {
  const productData = {
    slug: body.slug,
    title: body.title,
    image: body.image,
    description: body.description,
    price: body.price,
    rate: body.rate,
    category: body.category
  };
  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data: productData,
  });
  return updatedProduct;
};


// Delete
//===== Delete
// Delete

// deleting a produt
export const deleteProduct = async (productId) => {
  await prisma.product.delete({ where: { id: productId } });
};
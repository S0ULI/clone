// deffinning Domain and Fetch Options

const domain = 'http://localhost:3000';

const getOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

// Defining Fetch Functions

// Create
//===== Create
// Create

// Create a Product
export const createProduct = async (ProductData) => {
  const res = await fetch(`${domain}/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ProductData),
  });
  if (!res.ok) {
    throw new Error('something wrong with creating profile in post');
  }
  const data = await res.json();

  return data;
};

// Read
//===== Read
// Read

// Get All Products
export const getAllProducts = async (category) => {
  if(category === 'all') {
    category = null
  }
  const res = await fetch(
    `${domain}/api/products?category=${category || ''}`,
    { next: { revalidate: 60 * 60 * 6 } },
    getOptions
  );
  if (!res.ok) {
    throw new Error('something wrong with fetching all data');
  }
  const data = await res.json();

  return data;
};

// Get Product by ID
export const getProductById = async (productId) => {
  const res = await fetch(
    `${domain}/api/products/${productId}`,
    { next: { revalidate: 60 * 60 * 6 } },
    getOptions
  );
  if (!res.ok) {
    throw new Error('something wrong with fetching product');
  }
  const data = await res.json();

  return data;
};

// Get Product By Title
export const getProductsBySearch = async (searchTerm) => {
  // if(!searchTerm) return
  const res = await fetch(`${domain}/api/search/${searchTerm}`, {method: 'GET'});
  if (!res.ok) {
    throw new Error('something wrong with fetching products');
  }
  const data = await res.json();

  return data;
};

// Get Product By Title in Category
export const getProductByTitleInCategry = async (category, productTitle) => {
  const res = await fetch(
    `${domain}/api/products?category=${category}&title=${productTitle}`,
    getOptions
  );
  if (!res.ok) {
    throw new Error(
      'something wrong with searching products by their title in category'
    );
  }
  const data = await res.json();

  return data;
};

// update
//===== update
// update

// updating a product
export const updateProduct = async (productId, productData) => {
  const res = await fetch(`${domain}/api/products/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    throw new Error('something wrong with updating produt in post');
  }

  const data = await res.json();

  return data;
};

// Delete
//===== Delete
// Delete

const deleteProduct = async (productId) => {
  const res = await fetch(`${domain}/api/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('something wrong with deleting produt in post');
  }

  const data = await res.json();

  return data;
};

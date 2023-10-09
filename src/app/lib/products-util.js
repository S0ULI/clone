const API_KEY = process.env.API_KEY;
const AUTH_KEY = process.env.AUTH_KEY;

const productsRoute = 'https://api.themoviedb.org/3';

const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`,
  },
};

// finding a product by its ID
// finding a product by its ID
// finding a product by its ID
export const getProductById = async (productId) => {
  const res = await fetch(
    `${productsRoute}/movie/${productId}?api_key=${API_KEY}`,
    { next: { revalidate: 60 * 60 * 24 } },
    fetchOptions
  );
  if (!res.ok) {
    throw new Error('something wrong with fetching detail page');
  }
  // Storing Data
  const data = await res.json();

  return data;
};


// fetching products by their name in searchbar
// fetching products by their name in searchbar
// fetching products by their name in searchbar
export const getProductBySearch = async (searchValue) => {
  if(!searchValue) return [];

  const res = await fetch(
    `${productsRoute}/search/movie?api_key=${API_KEY}&query=${searchValue}&include_adult=false`,
    fetchOptions
  );
  if (!res.ok) {
    throw new Error('something wrong with fetching search page');
  }

  // Storing Data
  const data = await res.json();

  return data;
};


// get titles by search keyword
// get titles by search keyword
// get titles by search keyword
export const getTitleBySearch = async (searchValue) => {
  if(!searchValue) return []

  const res = await fetch(
    `${productsRoute}/search/keyword?api_key=${API_KEY}&query=${searchValue}&page=1`,
    fetchOptions
  );
  if (!res.ok) {
    throw new Error('something wrong with fetching search page');
  }

  // Storing Data
  const data = await res.json();

  return data;
};

// Get All Function
// Get All Function
// Get All Function
export const getAllProducts = async (sort, page) => {
  const res = await fetch(
    `${productsRoute}/movie/${
      sort || 'popular'
    }?api_key=${API_KEY}&language=en-US&page=${page || '1'}`,
    { next: { revalidate: 60 * 60 * 24 } },
    fetchOptions
  );
  if (!res.ok) {
    throw new Error('something wrong with fetching all data');
  }

  // Storing Data
  const data = await res.json();

  return data;
};

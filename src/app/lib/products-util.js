const API_KEY = process.env.API_KEY;
const AUTH_KEY = process.env.AUTH_KEY;

const productsRoute = 'https://api.themoviedb.org/3/movie';

const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`,
  },
};

export const getAllProducts = async (sort, page) => {

  const res = await fetch(
    `${productsRoute}/${ sort || 'popular' }?api_key=${API_KEY}&language=en-US&page=${page || '1'}`,
    { next: { revalidate: 60 * 60 * 24 } },
    fetchOptions
  );
  const data = await res.json();

  return data;
};

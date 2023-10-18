// url => http://localhost:3000/api/search/:searchTerm

import { NextResponse } from "next/server";
import { getProductsBySearch } from "../../../../../prisma/products";

export const GET = async (req, { params }) => {
    console.log(params);
    try {
      const { searchTerm } = params;
  
      const products = await getProductsBySearch(searchTerm)
  
      if (!products) {
        return NextResponse.json(
          {
            message: 'product not found in Database',
          },
          { status: 404 }
        );
      }
  
      return NextResponse.json(products);
  
    } catch (err) {
      return NextResponse.json(
        {
          message: 'GET ERROR',
          ERROR: err,
        },
        { status: 500 }
      );
    }
  };
// url =>  http://localhost:3000/api/products/[productId]

import { NextResponse } from 'next/server';

import {
  deleteProduct,
  getProductById,
  updateProduct,
} from '../../../../../prisma/products';

// get deatailPage of a product
export const GET = async (req, { params }) => {
  try {
    const { productId } = params;

    const product = await getProductById(productId);

    if (!product) {
      return NextResponse.json(
        {
          message: 'product not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
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

// Update a Product
export const PATCH = async (req, { params }) => {
  try {
    const { productId } = params;
    const body = await req.json();

    const updatedProduct = await updateProduct(productId, body);

    if (!updatedProduct) {
      return NextResponse.json(
        {
          message: 'product not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct);
  } catch (err) {
    return NextResponse.json(
      {
        message: 'UPDATE Failed',
        ERROR: err,
      },
      { status: 500 }
    );
  }
};

// Delete a Product
export const DELETE = async (req, { params }) => {
  const { productId } = params;

  try {
    await deleteProduct(productId);
    return NextResponse.json('Product Have Been Deleted', { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: 'delete failed', ERRor: err },
      { status: 500 }
    );
  }
};

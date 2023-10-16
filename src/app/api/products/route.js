// url => http://localhost:3000/api/products

import { NextResponse } from 'next/server';

import { createProduct, getAllProducts, getProductsByCategory, getProductsByTitle } from '../../../../prisma/products'


// Create a Product
export const POST = async (req) => {
    try {
        const body = await req.json();
        const newProduct = await createProduct(body);
        return NextResponse.json(newProduct);

    } catch(err) {
        return NextResponse.json({
            message: 'Cant Post product to The Database',
            Error: err
        }, {status: 500})
    }
}

// Get Products of a Page
export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const searchTerm = searchParams.get('searchTerm')

    if(category){
        try {
            const products = await getProductsByCategory(category)
            return NextResponse.json(products)
        } catch(err) {
            return NextResponse.json({
                message: 'Cant Get Products By Category in Database',
                error : err
            }, {status: 500})
        }
    }
    if(searchTerm) {
        try {
            const products = await getProductsByTitle(searchTerm)
            return NextResponse.json(products)
        } catch(err) {
            return NextResponse.json({
                message: 'Cant Get Products By Title in Database',
                error : err
            }, {status: 500})
        }
    }

    try {
        const products = await getAllProducts()
        return NextResponse.json(products)

    } catch(err) {
        return NextResponse.json({
            message: 'Cant Get All Products in Database',
            error : err
        }, {status: 500})
    }
    
}
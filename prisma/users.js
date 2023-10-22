import prisma from './prismadb';

// Create
//////// Create
// Create

export const createUser = async (user) => {
    const userData = {
        email: user.email,
        password: user.password,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
    }
    
    const newProduct = await prisma.user.create({data: userData});

    return newProduct;
}

// Read
////// Read
// Read

export const getUserById = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    })

    return user;
}

export const getUserByEmail = async (userEmail) => {
    const user = await prisma.user.findUnique({
        where: { email: userEmail }
    })

    return user;
}

export const userExists = async (userEmail) => {
    if(!userEmail) return

    const user = await prisma.user.findUnique({
        where: {email: userEmail},
        select: { id: true }
    })

    return user
}


// Update
///// Update
// Update

export const updateUser = async (user, userEmail) => {
    const userData = {
        email: user.email,
        password: user.password,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar
    }
    
    const updatedUser = await prisma.user.update({
        where: { email: userEmail },
        data: userData
    });

    return updatedUser;
}
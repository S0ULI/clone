import { hash, compare } from "bcryptjs";

const domain = process.env.NEXT_PUBLIC_DOMAIN

export const hashPassword = async (pass) => {
    const hashedPass = await hash(pass, 12)
    return hashedPass;
}

export const passwordValidator = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword)
    return isValid
}

export const createUser = async (user) => {
    const res = await fetch(`/api/auth/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    if(!res.ok) {
        const text = await res.text();
        throw new Error(text)
    }
    const data = await res.json();

    return data;
}

export const updatePassword = async (userData) => {

    const { oldPassword, newPassword } = userData

    const newUserData = {
        oldPassword,
        newPassword
    }

    console.log(newUserData);

    const res = await fetch('/api/auth/users/update/password', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(newUserData)
    })
    if(!res.ok) {
        if (res.status === 400) {
            throw new BadRequestError('Bad Request');
        } else if (res.status === 401) {
            throw new UnauthorizedError('Unauthorized');
        } else if (res.status === 403) {
            throw new ForbiddenError('Forbidden');
        } else if (res.status === 404) {
            throw new NotFoundError('Not Found');
        } else if (res.status === 500) {
            throw new InternalServerError('Internal Server Error');
        } else {
            throw new Error('Unknown Error');
        }
    }
    const data = await res.json();

    return data;
}
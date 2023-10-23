'use client'

import { signOut } from "next-auth/react"

const LogoutButton = () => {

    const logoutHandler = async () => {
        const isOut = await signOut({callbackUrl: '/'})
    }

  return (
    <div className="mt-10">
        <button onClick={logoutHandler} className="bg-primary-color hover:bg-secondary-color transition-colors duration-300 rounded-xl px-4 py-2">Log out</button>
    </div>
  )
}

export default LogoutButton
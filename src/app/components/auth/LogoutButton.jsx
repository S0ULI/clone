'use client'

import { signOut } from "next-auth/react"

const LogoutButton = () => {

    const logoutHandler = async () => {
        const isOut = await signOut({callbackUrl: '/'})
    }

  return (
    <div>
        <button onClick={logoutHandler}>Log out</button>
    </div>
  )
}

export default LogoutButton
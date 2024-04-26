"use client"

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Toaster />
            <SessionProvider>
                {children}
            </SessionProvider>
        </>
    )
}

export default Provider
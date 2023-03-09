"use client"

import { createContext, useContext } from "react"

const MyContext = createContext("My Context")

export default function MyProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MyContext.Provider value="Your Context">
      <>{children}</>
    </MyContext.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(MyContext)

  if (context === undefined) {
    throw new Error("useMyContext must be used inside MyProvider")
  }
  return context
}

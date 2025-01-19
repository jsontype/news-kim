'use client'

import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router'

const ReactRouterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  // document is not defined에러 대책
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient ? (
        <BrowserRouter>{children}</BrowserRouter>
      ) : (
        <div>is Loading...</div>
      )}
    </>
  )
}

export default ReactRouterProvider

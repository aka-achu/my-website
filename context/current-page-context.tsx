import React, { useState, createContext, useContext } from "react"

interface ContextType {
  page: PageType
  setPage: React.Dispatch<React.SetStateAction<PageType | string>>
}

const CurrentPageContext = createContext<ContextType>(null)
CurrentPageContext.displayName = "CurrentPageContext"

export type PageType = "home" | "about" | "contact"

function CurrentPageProvider(props) {
  const [page, setPage] = useState<PageType | string>("home")

  return <CurrentPageContext.Provider value={{ page, setPage }} {...props} />
}

function usePageContext() {
  const context = useContext(CurrentPageContext)
  if (context === undefined) {
    throw new Error(`usePageContext must be used within an CurrentPageProvider`)
  }
  return context
}

export { CurrentPageProvider, usePageContext }

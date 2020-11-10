import * as React from "react"

interface ContextType {
  page: PageType
  setPage: React.Dispatch<React.SetStateAction<PageType | string>>
}

const CurrentPageContext = React.createContext<ContextType>(null)
CurrentPageContext.displayName = "CurrentPageContext"

export type PageType = "home" | "about" | "contact" | "skills"

function CurrentPageProvider(props) {
  const [page, setPage] = React.useState<PageType | string>("home")

  return <CurrentPageContext.Provider value={{ page, setPage }} {...props} />
}

function usePageContext() {
  const context = React.useContext(CurrentPageContext)
  if (context === undefined) {
    throw new Error(`usePageContext must be used within an CurrentPageProvider`)
  }
  return context
}

export { CurrentPageProvider, usePageContext }

import type { FC, ReactNode} from 'react'
import { createContext, useState } from 'react'

type LoginContextObject = {
  loggedIn: boolean,
  username: string,
}

type LoginContextType = {
  loggedIn: LoginContextObject,
  setLoggedIn: (loggedIn: LoginContextObject) => void
}

const LoginContext = createContext<LoginContextType>({
  loggedIn: {
    loggedIn: false,
    username: '',
  },
  setLoggedIn: () => {}})

type LoginContextProviderProps = {
  children: ReactNode
}

const LoginContextProvider: FC<LoginContextProviderProps> = ({children}) => {
  const [ loggedIn, setLoggedIn ] = useState({ loggedIn: false, username: '' })

  return(
    <LoginContext.Provider value={{
      loggedIn,
      setLoggedIn
    }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginContextProvider }

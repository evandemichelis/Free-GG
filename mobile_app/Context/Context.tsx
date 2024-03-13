import { createContext, useContext, useState } from 'react'

type Platform = 'All' | 'Browser' | 'PC'

type PlatformType = {
  platform: Platform
  setPlatform: (value: Platform) => void
}

const PlatformContext = createContext<PlatformType | null>(null)

const PlatformContextProvider = (props: { children: React.ReactNode }) => {
  const [platform, setPlatform] = useState<Platform>('All')

  return (
    <PlatformContext.Provider
      value={{
        platform,
        setPlatform
      }}
      {...props}
    />
  )
}

export const useMyContext = () => {
  const platform = useContext(PlatformContext)
  if (!platform) throw new Error('No platform context')
  return platform
}

const MyContextProvider = ({ children }: { children: React.ReactNode }) => (
  <PlatformContextProvider>{children}</PlatformContextProvider>
)

export default MyContextProvider

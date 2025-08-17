'use client'

import { createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({
  /** Put your mantine theme override here */
})

// This is a wrapper that can be used to pass components like <StoreProvider> to the children, 
// without having to touch the master app/layout.tsx.

export const Layout = ({ children } : { children: any }) => {

  return (
      <MantineProvider theme={theme}>
        <div className="p-8">
          {children}
        </div>
      </MantineProvider>
  )
}

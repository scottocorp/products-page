'use client'

// This is a wrapper that can be used to pass components like <StoreProvider> to the children, 
// without having to touch the master app/layout.tsx.

export const Layout = ({ children } : { children: any }) => {

  return (
    <div className="p-8">
      {children}
    </div>
  )
}

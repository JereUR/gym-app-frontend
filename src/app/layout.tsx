'use client'

import { Inter } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import AuthContextProvider from '@/components/context/AuthContext'
import NavBar from '@/components/NavBar'
import { usePathname } from 'next/navigation'
import SideBar from '@/components/dashboard/navbar/SideBar'
import TopBar from '@/components/dashboard/navbar/TopBar'
import ActivitiesContextProvider from '@/components/context/ActivitiesContext'
import Logo from '@/components/Logo'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const shouldRenderLayout = !pathname.startsWith('/panel-de-control')
  const recoverLayout =
    pathname.startsWith('/recover') || pathname.startsWith('/confirmation')

  if (recoverLayout) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <AuthContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <>
                <div className="p-4">
                  <Logo isSticky={false} />
                </div>
                {children}
                <Toaster />
              </>
            </ThemeProvider>
          </AuthContextProvider>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ActivitiesContextProvider>
              {shouldRenderLayout ? (
                <>
                  <NavBar />
                  {children}
                  <Toaster />
                </>
              ) : (
                <div className="flex min-h-screen">
                  <div className="w-1/4 xl:w-1/6 bg-black py-5">
                    <SideBar />
                  </div>
                  <div className="w-3/4 xl:w-5/6">
                    <TopBar />
                    {children}
                  </div>
                  <Toaster />
                </div>
              )}
            </ActivitiesContextProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}

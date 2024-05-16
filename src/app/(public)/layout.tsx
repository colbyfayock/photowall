import '@/app/globals.css';

import Nav from '@/components/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <Nav />
      <main>{ children }</main>
    </div>
  )
}

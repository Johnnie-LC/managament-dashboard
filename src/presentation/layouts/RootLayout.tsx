import { Outlet } from 'react-router'
import { Navbar } from '@components/Navbar'

export default function RootLayout() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 flex flex-col h-screen bg-gray-100">
        <section className="p-5 bg-blue-800 text-amber-50 text-xl border-b-10 border-orange-500">
          <h1>ABC Company</h1>
        </section>
        <Outlet />
      </main>
    </div>
  )
}

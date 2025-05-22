import { Navbar } from '../Pages/Navbar'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

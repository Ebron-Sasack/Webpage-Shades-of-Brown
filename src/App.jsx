import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "./Layout/RootLayout"
import { Home } from "./Pages/Home"
import { HomeLayout } from "./Layout/HomeLayout"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomeLayout />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

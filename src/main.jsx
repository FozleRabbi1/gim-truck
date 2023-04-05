import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ComponentFile/HomeFile/Home'
import Ditles from './ComponentFile/DitlesFile/Ditles'
import Dashbord from './ComponentFile/DashBoardFile/Dashbord'
import Contact from './ComponentFile/ContectFile/Contact'
import Users from './ComponentFile/UsersFile/Users'
import ShowUserInfo from './ComponentFile/UsersFile/ShowUserInfo'
import { data } from 'autoprefixer'
import Notfound from './ComponentFile/NotfoundFile/Notfound'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "ditles/", element: <Ditles ></Ditles>
      },
      { path: "dashbord", element: <Dashbord></Dashbord> },
      { path: "contact", element: <Contact></Contact> },
      {
        path: "users", element: <Users></Users>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "user/:userId", element: <ShowUserInfo></ShowUserInfo>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {path : "*", element : <Notfound></Notfound>}

    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)

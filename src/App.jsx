import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AppLayout from './components/AppLayout';
import ErrorPage from './pages/ErrorPage';

const App = () => {

  // Method-1
  const router = createBrowserRouter([
    {
      path:'/',
      errorElement:<ErrorPage/>,
      element:<AppLayout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/skills',
          element: <Skills />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  //Method-2
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/skills' element={<Skills/>}/>
  //       <Route path='/projects' element={<Projects/>}/>
  //       <Route path='/contact' element={<Contact/>}/>
  //     </Route>
  //   )
  // ) 

  return (
    <RouterProvider router={router} />
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageOne from './pages/pageOne/PageOne.jsx'
import PageTwo from './pages/pageTwo/PageTwo.jsx'
import PageThree from './pages/pageThree/PageThree.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<App />,
},{
  path:'/pageone',
  element:<PageOne/>,
},
{
  path:'/pagetwo',
  element:<PageTwo/>,
},
{
  path:'/pagethree',
  element:<PageThree/>,
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

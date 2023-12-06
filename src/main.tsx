import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.tsx'
// import './index.css'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/home",
    element:<Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)

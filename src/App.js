import './App.css'
import ProShow from './components/ProShow';
import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/proshows",
    element: <ProShow />,
  },
  {
    path:"/*",
    element:<ErrorPage/>,
  }
]);

function App() {
  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;

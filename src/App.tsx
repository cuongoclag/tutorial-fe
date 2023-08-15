import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import LayoutContainer from './components/layout/LayoutContainer';
import Teacher from "./pages/teacher/Teacher";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutContainer />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/teacher",
          element: <Teacher />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App

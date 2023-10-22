import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/login",
    element: <HomePage />
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

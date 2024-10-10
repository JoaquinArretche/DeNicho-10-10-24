import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Nosotros from './pages/Nosotros/Nosotros';
import Cart from './pages/Cart/Cart';
import PorfileUser from './pages/ProfileUser/ProfileUser';
import ProfileUser from './pages/ProfileUser/ProfileUser';
import RegisterForm from './pages/Register/Register';
import LoginForm from './pages/Login/Login';
import ProductPage from './pages/Product/Product';
import EntrepreneursPage from './pages/EntrepreneurPage/EntrepreneurPage';
import EntrepreneurProfile from './pages/EntrepreneurProfile/EntrepreneurProfile';
import CategoriesPage from './pages/Categories/Categories';

const Layout = () => {
  return (
    <body className='app'>
      <Navbar />
      <Outlet />
      <Footer />

    </body>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <ProductPage />
      },
      {
        path: "/nosotros",
        element: <Nosotros />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/perfil",
        element: <ProfileUser />
      },
      {
        path: "/registro",
        element: <RegisterForm />
      },
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path: "/emprendimientos",
        element: <EntrepreneursPage />
      },
      {
        path: "emprendimientos/:id",
        element: <EntrepreneurProfile />
      },
      {
        path: "categorias",
        element: <CategoriesPage />
      },

    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

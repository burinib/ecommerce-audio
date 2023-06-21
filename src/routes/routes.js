import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import ProductsListContainer from "../components/pages/productsList/ProductstListContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  /*  {
    id: "category",
    path: "/category/:categoryName",
    Element: CategoryContainer,
  }, */
  {
    id: "products",
    path: "/category/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
];

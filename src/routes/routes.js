import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import ProductsListContainer from "../components/pages/productsList/ProductstListContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },

  {
    id: "products",
    path: "/category/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "detail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
];

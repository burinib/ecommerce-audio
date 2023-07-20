import { Button, CardContent, Typography } from "@mui/material";
import img1 from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import img2 from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import img3 from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./CardTriple.css";

const CardTriple = () => {
  const products = [
    { id: 1, name: "HEADPHONES", image: img1, path: "/category/headphones" },
    { id: 2, name: "SPEAKERS", image: img2, path: "/category/speakers" },
    { id: 3, name: "EARPHONES", image: img3, path: "/category/earphones" },
  ];

  return (
    <div className="card-triple-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <CardContent className="card-content">
            <img
              src={product.image}
              alt={product.name}
              className="card-image"
            />
            <Typography>{product.name}</Typography>
            <Link to={product.path}>
              <Button sx={{ top: "25px" }}>
                SHOP
                <ArrowRightIcon />
              </Button>
            </Link>
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default CardTriple;

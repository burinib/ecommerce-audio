import { Button, Card, CardContent, Typography } from "@mui/material";
import img1 from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import img2 from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import img3 from "../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./CardTriple.css";

const CardTriple = () => {
  return (
    <div className="card-triple-container">
      <Card className="card">
        <CardContent className="card-content">
          <img src={img1} alt="Product 1" className="card-image" />
          <Typography>HEADPHONES</Typography>
          <Link to="/category/headphones">
            <Button>
              SHOP
              <ArrowRightIcon />
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent className="card-content">
          <img src={img2} alt="Product 2" className="card-image" />
          <Typography>SPEAKERS</Typography>
          <Link to="/category/speakers">
            <Button>
              SHOP
              <ArrowRightIcon />
            </Button>
          </Link>{" "}
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent className="card-content">
          <img src={img3} alt="Product 3" className="card-image" />
          <Typography>EARPHONES</Typography>
          <Link to="/category/earphones">
            <Button>
              SHOP
              <ArrowRightIcon />
            </Button>
          </Link>{" "}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardTriple;

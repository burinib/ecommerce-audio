import { Button, CardContent } from "@mui/material";
import headphones from "./../../../assets/cart/image-xx99-mark-two-headphones.jpg";
import headphones2 from "./../../../assets/cart/image-xx59-headphones.jpg";
import speaker from "./../../../assets/cart/image-zx7-speaker.jpg";
import "./AlsoLike.css";
import { Link } from "react-router-dom";

const AlsoLike = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <h2 className="also_tittle">YOU MAY ALSO LIKE</h2>
      <div className="also_container">
        <CardContent>
          <img className="also_img" src={headphones} alt="" />
          <h2 className="also_name_product">XX99 MARK II</h2>
          <div className="also_button">
            <Link to="/category/earphones">
              <Button variant="contained">SEE PRODUCT </Button>
            </Link>{" "}
          </div>
        </CardContent>
        <CardContent>
          <img className="also_img" src={headphones2} alt="" />
          <h2 className="also_name_product">XX59</h2>
          <div className="also_button">
            <Link to="/category/earphones">
              <Button variant="contained">SEE PRODUCT </Button>
            </Link>{" "}
          </div>
        </CardContent>
        <CardContent>
          <img className="also_img" src={speaker} alt="" />
          <h2 className="also_name_product">ZX7 SPEAKER</h2>
          <div className="also_button">
            <Link to="/category/speakers">
              <Button variant="contained">SEE PRODUCT </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default AlsoLike;

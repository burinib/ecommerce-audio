import "./Galerythird.css";

const GaleryThird = ({ product }) => {
  return (
    <div className="container_galery">
      <div className="column1">
        <img src={product?.gallery?.first} alt="" />
        <img src={product?.gallery?.second} alt="" />
      </div>
      <img src={product?.gallery?.third} alt="" />
    </div>
  );
};

export default GaleryThird;

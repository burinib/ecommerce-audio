const GaleryThird = ({ product }) => {
  return (
    <div>
      <div>
        <h1>galeri</h1>
        <img src={product?.gallery?.first} alt="" />
        <img src={product?.gallery?.second} alt="" />
        <img src={product?.gallery?.third} alt="" />
      </div>
    </div>
  );
};

export default GaleryThird;

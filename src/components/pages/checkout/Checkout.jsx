import { useState } from "react";
import "./Checkout.css";
import CustomModal from "../../common/customModal/CustomModal";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBuy = () => {
    // Aquí puedes agregar la lógica para procesar la compra
    // Puedes acceder a los datos del formulario a través de formData
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleBuy}>
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;

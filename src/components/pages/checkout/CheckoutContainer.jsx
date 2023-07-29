import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(import.meta.env.VITE_PUBLIC_KEY);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://back-mp.vercel.app/create_preference",
        [
          {
            title: "zapatilla nilo",
            unit_price: 15,
            quantity: 3,
          },
          {
            title: "zapatilla nilo",
            unit_price: 20,
            quantity: 2,
          },
        ]
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div>
      <Checkout />
      <button onClick={handleBuy}>Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default CheckoutContainer;

import { useState } from "react";
import Login from "./Login";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (data) => {
      console.log("Se envio", data);
      //conexion con firebase
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("deben ser caracteres")
        .email("no corresponde a un mail valido")
        .required("Este campo es obligatorio"),
      password: Yup.string("deben ser caracteres").required(
        "Este campo es obligatorio"
      ),
    }),
  });

  return (
    <div>
      <Login
        showPassword={showPassword}
        handleShow={handleShow}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default LoginContainer;

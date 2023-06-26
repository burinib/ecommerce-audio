import { useState } from "react";
import Register from "./Register";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log("Form submitted", data);
      // Aquí puedes realizar las acciones necesarias para registrar al usuario
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Este campo es obligatorio"),
      lastName: Yup.string().required("Este campo es obligatorio"),
      phone: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("No es un correo válido")
        .required("Este campo es obligatorio"),
      password: Yup.string().required("Este campo es obligatorio"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
        .required("Este campo es obligatorio"),
    }),
  });

  console.log(errors);

  return (
    <Register
      showPassword={showPassword}
      handleShow={handleShow}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default RegisterContainer;

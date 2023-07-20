import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Register.css";
import "../../common/custom/customComponent.js";
import { BotonNaranja } from "../../common/custom/customComponent.js";
import { register } from "../../../firebaseConfig";

const Register = ({
  showPassword,
  handleShow,
  handleSubmit,
  handleChange,
  errors,
}) => {
  const registrarme = async () => {
    let res = await register({
      email: "marta@gmail.com",
      password: "123456789",
    });
    console.log(res);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group">
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                onChange={handleChange}
                error={errors.firstName ? true : false}
                helperText={errors.firstName}
              />
            </div>
          </div>

          <div className="form-group">
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </div>

          <div className="form-group">
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                error={errors.password ? true : false}
                name="password"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShow}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="primary" />
                      ) : (
                        <Visibility color="primary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText error={errors.password ? true : false}>
                {errors.password}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="form-group">
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              error={errors.confirmPassword ? true : false}
              helperText={errors.confirmPassword}
            />
          </div>

          <div className="form-group">
            <div style={{ margin: "0 auto" }}>
              <BotonNaranja
                sx={{ alignItems: "center" }}
                type="submit"
                variant="contained"
                onClick={registrarme}
              >
                Register
              </BotonNaranja>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

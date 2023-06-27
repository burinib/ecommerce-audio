import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Login.css";

const Login = ({
  showPassword,
  handleShow,
  handleSubmit,
  handleChange,
  errors,
}) => {
  return (
    <div className="loginContainer">
      <div className="login-box">
        <div className="loginTittle">LOGIN</div>
        <form onSubmit={handleSubmit}>
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
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                error={errors.password ? true : false}
                name="password"
                onChange={handleChange}
                endAdornment={[
                  <InputAdornment position="end" key="password-adornment">
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
                  </InputAdornment>,
                ]}
                label="Password"
              />

              <FormHelperText error={errors.password ? true : false}>
                {errors.password}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="form-group">
            <Button type="submit" variant="contained">
              Ingresar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

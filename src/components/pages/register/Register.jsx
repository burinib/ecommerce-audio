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
import "./Register.css";

const Register = ({
  showPassword,
  handleShow,
  handleSubmit,
  handleChange,
  errors,
}) => {
  return (
    <div className="register-container">
      <div className="register-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="name-field">
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                onChange={handleChange}
                error={errors.firstName ? true : false}
                helperText={errors.firstName}
              />
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                onChange={handleChange}
                error={errors.lastName ? true : false}
                helperText={errors.lastName}
              />
            </div>
          </div>

          <div className="form-group">
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              onChange={handleChange}
              error={errors.phone ? true : false}
              helperText={errors.phone}
            />
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
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
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
            <Button type="submit" variant="contained">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

const Login = ({
  showPassword,
  handleShow,
  handleSubmit,
  handleChange,
  errors,
}) => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
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
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {errors.password}
          </FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained">
          Ingresar
        </Button>
      </form>
    </div>
  );
};

export default Login;

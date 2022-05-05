import { useState, useRef, useEffect, useContext } from "react";
import { Alert, Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import request from "../helpers/request";
import { GlobalContext } from "../context/GlobalProvider";

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const { setIsAdmin, myStorage } = useContext(GlobalContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await request.post("/admin/auth/login", user);
      const token = res.data.token;
      if (token.length > 0) {
        myStorage.setItem("adminToken", token);
      }
      setLoginError(false);
      navigate("/admin/books");
      setIsAdmin(true);
    } catch (err) {
      setLoginError(true);
    }
  };
  useEffect(() => {
    const token = myStorage.getItem("adminToken");
    if (token) {
      navigate("/admin/books");
    }
  }, [navigate, setIsAdmin, myStorage]);
  return (
    <>
      <Stack spacing={3} component="form" onSubmit={handleSubmit}>
        <Stack
          width="320px"
          spacing={2}
          sx={{ m: "20px auto", display: "flex", flexDirection: "column" }}
        >
          <TextField
            autoFocus
            size="small"
            placeholder="email"
            inputRef={emailRef}
          />
          <TextField
            size="small"
            type="password"
            min="6"
            placeholder="password"
            inputRef={passwordRef}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button variant="contained" color="info" onClick={() => navigate(-1)}>
            Wróć
          </Button>
        </Stack>
      </Stack>
      {loginError && (
        <Alert severity="error">Incorrect email or password</Alert>
      )}
    </>
  );
};

export default Login;

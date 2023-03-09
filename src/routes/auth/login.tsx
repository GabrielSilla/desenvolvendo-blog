import { Form } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";
import "./login.css";
import { useState } from "react";
import React from "react";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const tryLogin = () => {
    console.log(username, password);
  };

  return (
    <Form className="login-form">
        <div>
            <Typography variant="h5">
                Àrea do {"<Admin/>"}
            </Typography>
            <Stack width='300px' direction="column" spacing={2}>
              <Stack direction="column" spacing={1}>
                  <TextField label="Usuário" id="outlined-basic" type="text" margin="normal" variant="outlined"
                      onChange={(value) => setUsername(value.target.value)}
                  />
                  <TextField label="Senha" id="outlined-basic-2" type="password" margin="normal" variant="outlined"
                      onChange={(value) => setPassword(value.target.value)}
                  />
              </Stack>
              <Button style={{width: '100%'}} type="submit" variant="contained" onClick={tryLogin}>Entrar</Button>
            </Stack>
        </div>
    </Form>
  );
}
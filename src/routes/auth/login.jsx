import { Form } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const tryLogin = () => {
    console.log(username, password);
  };

  return (
    <Form className="login-form">
        <div>
            <Typography variant="h5" gutterBottom>
                Àrea do {"</Admin>"}
            </Typography>
            <div>
                <TextField style={{margin: 3}} label="Username" id="outlined-basic" type="text" margin="normal" variant="outlined"
                    onChange={(value) => setUsername(value.target.value)}
                />
                <TextField style={{margin: 3}} label="Password" id="outlined-basic" type="password" margin="normal" variant="outlined"
                    onChange={(value) => setPassword(value.target.value)}
                />
            </div>
            <Button style={{width: '100%', marginTop: 3}} type="submit" variant="outlined" onClick={tryLogin}>Entrar</Button>
        </div>
    </Form>
  );
}
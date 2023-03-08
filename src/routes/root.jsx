import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Divider, Typography } from "@mui/material";

export default function Root() {
  const navigate = useNavigate();
  let auth = true;

  useEffect(() => {
    if(!auth) navigate('/login');
  }, []);

  return (
  <div class="main-container">
    <Outlet />
    <Divider />
    <div className="footer-container">
      <div className="footer">
          <img src={"src/assets/img/simple-logo.png"} />
          <div className="footer-text">
              <Typography style={{fontWeight: 700}} variant="body1" color="text.primary">
                  2023, Desenvolvido por Gabriel Silla & Karina Silla.
              </Typography>
              <Typography variant="body2" color="text.primary">
                  Apoiando novas carreiras.
              </Typography>
          </div>
      </div>
      <div className="footer-end">
          <div className="footer-end-y"></div>
          <div className="footer-end-o"></div>
          <div className="footer-end-r"></div>
      </div>
    </div>
  </div>
  );
}
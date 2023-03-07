import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  let auth = true;

  useEffect(() => {
    if(!auth) navigate('/login');
  }, []);

  return (
  <>
    <Outlet />
  </>
  );
}
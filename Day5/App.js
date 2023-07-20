import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRouter from "./component/Router/PublicRouter";
import PrivateRouter from "./component//Router/PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { routerChanging } from "./redux/action/SigninAction";
import Payment from "./pages/Payment";

function App() {
  const isShow = useSelector((state) => state?.isSignIn?.isOpen);

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(routerChanging(true));
    }
  }, [isShow]);

  return (
    <div>
      {/* <NavbarComp />
      <Heros />
      <Modal />
      <Signin />
      <SignUp/> */}
      {isShow ? <PrivateRouter /> : <PublicRouter />}
      <Payment />
    </div>
  );
}
export default App;

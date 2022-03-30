import React from "react";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const responseGoogle = (res) => {
  console.log(
    `
    googleId: ${res.profileObj.googleId} \n 
    email: ${res.profileObj.email} \n 
    givenName: ${res.profileObj.givenName} \n 
    familyName: ${res.profileObj.familyName} \n 
    imageUrl: ${res.profileObj.imageUrl}`
  );
};

const Logout = () => {
  console.log("Logout сработал");
};

const Login = () => {
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <Button
            type="text"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <LoginOutlined /> Войти
          </Button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={Logout}
      ></GoogleLogout>

      <Button type="text">
        <LogoutOutlined /> Выйти
      </Button>
    </>
  );
};
export default Login;

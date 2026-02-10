/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import useLocalStorage from "context/localStorageContext/useLocalStorage";
import LOCAL_STORAGE_KEYS_DICTIONARY from "constants/localeStorageKeys";

export default function Auth() {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const { setItem } = useLocalStorage();

  useEffect(() => {
    if (token) {
      const userTokenInfo = jwtDecode(token);

      console.log("userTokenInfo", userTokenInfo);

      setUserInfo({
        name: `${userTokenInfo.given_name} ${userTokenInfo.family_name}`,
        email: userTokenInfo.email,
        picture: userTokenInfo.picture,
        token: "DUMMY_TOKEN",
      });
    }
  }, [token]);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.name) {
        setItem(LOCAL_STORAGE_KEYS_DICTIONARY.name, userInfo.name);
      }

      if (userInfo.email) {
        setItem(LOCAL_STORAGE_KEYS_DICTIONARY.email, userInfo.email);
      }

      if (userInfo.picture) {
        setItem(LOCAL_STORAGE_KEYS_DICTIONARY.picture, userInfo.picture);
      }

      if (userInfo.token) {
        setItem(LOCAL_STORAGE_KEYS_DICTIONARY.token, userInfo.token);
      }
    }
  }, [setItem, userInfo]);

  return (
    <div>
      <div>Auth Page</div>

      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <div>
          <GoogleLogin
            buttonText="Login with Google"
            cookiePolicy="single_host_origin"
            onSuccess={(response) => {
              setToken(response.credential);

              console.log("aboba");
              navigate("/admin");
            }}
            onError={() => console.log("Login Failed")}
          />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

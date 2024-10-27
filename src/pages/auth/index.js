import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import scopes from "constants/googleAuthScopes";

export default function Auth() {
  return (
    <div>
      <div>Auth Page</div>

      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <div>
          <GoogleLogin
            buttonText="Login with Google"
            cookiePolicy="single_host_origin"
            scope={scopes.join(" ")}
            onSuccess={(response) => console.log(response)}
            onError={() => console.log("Login Failed")}
          />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

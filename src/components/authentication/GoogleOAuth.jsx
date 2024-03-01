import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const GoogleOAuth = () => {
  const navigate = useNavigate("");
  
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      const response = await axios.post(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/google",
        {
          access_token: accessToken
        }
      );
      const { token } = response.data.data;

      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.log("Gagal untuk Login dengan Google");
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <Button onClick={() => loginWithGoogle()} variant="dark" className="fw-bold fs-3 d-flex align-items-center gap-2">
      <FcGoogle className="fs-2"/><span>Login with Google</span>
    </Button>
  );
};

export default GoogleOAuth;

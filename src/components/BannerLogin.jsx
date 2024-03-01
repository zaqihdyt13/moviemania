import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BannerLogin = () => {
  const navigate = useNavigate("");

  return (
    <div className="d-flex w-100 justify-content-center align-items-center mt-5 px-md-5">
      <div
        className="banner bg-dark d-flex flex-column w-100 justify-content-center align-items-center"
      >
        <h1 className="banner-title text-light mb-3 text-center">
          Login untuk mendapatkan akses lebih!
        </h1>
        <Button
          onClick={() => navigate("/login")}
          variant="warning"
          className="btn-banner text-dark fw-bold"
        >
          Login Disini
        </Button>
      </div>
    </div>
  );
};

export default BannerLogin;

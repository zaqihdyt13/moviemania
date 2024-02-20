import logo from "../images/logo.png";

const Hero = () => {
  return (
    <div className="p-0">
      <div className="hero-bg w-100 d-flex h-sm-100">
        <div className="hero-bg-filter w-100 h-100 d-flex">
          <div className="d-flex flex-wrap m-auto align-items-center justify-content-center">
            <img src={logo} alt="logo" />
            <div>
              <h1 className="text-warning text-sm-start text-center fw-bold fst-italic">
                M
                <span className="text-decoration-underline text-light fst-normal">
                  ovieMania
                </span>
              </h1>
              <p className="text-light text-center">
                Watch free movie with{" "}
                <span className="text-warning fw-bold fst-italic">
                  HD Quality
                </span>{" "}
                and all subtitle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

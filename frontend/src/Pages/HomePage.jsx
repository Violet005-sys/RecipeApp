import "../cssFiles/Wrapper.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const go = () => {
    navigate("/auth");
  };
  return (
    <div className="container-fluid">
      <div className="heroSection row">
        <img
          src="public\images\h5.png"
          alt="herosection"
          className="img-fluid"
        />
      </div>

      <div id="aboutSection">
        <div className="d-flex flex-row justify-content-between py-5">
          <div className="mx-5 " style={{ minWidth: "310px" }}>
            <img
              src="public\images\plainie.png"
              alt="herosection"
              className="img-fluid mb-5"
            />
          </div>
          <div className="mb-5 px-5" style={{ maxWidth: "910px" }}>
            <h3 className="display-3">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur, velit id consectetur placerat, urna neque semper
              neque, vel consectetur velit lacus non ipsum. Nulla facilisi. Sed
              malesuada nulla eget velit cursus, in iaculis mauris elementum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur, velit id consectetur placerat, urna neque semper
              neque, vel consectetur velit lacus non ipsum. Nulla facilisi. Sed
              malesuada nulla eget velit cursus, in iaculis mauris elementum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur, velit id consectetur placerat, urna neque semper
              neque, vel consectetur velit lacus non ipsum. Nulla facilisi. Sed
              malesuada nulla eget velit cursus, in iaculis mauris elementum.
            </p>
          </div>
        </div>
      </div>

      <div className="row" id="orderSection">
        <div className="col-6">
          <div className="text-l p-5">
            <h2 className="display-3">Make an Order</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur, velit id consectetur placerat, urna neque semper
              neque, vel consectetur velit lacus non ipsum. Nulla facilisi. Sed
              malesuada nulla eget velit cursus, in iaculis mauris elementum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur, velit id consectetur placerat, urna neque semper
              neque, vel consectetur velit lacus non ipsum. Nulla facilisi. Sed
              malesuada nulla eget velit cursus, in iaculis mauris elementum.
            </p>

            <a href="#" className="btn btn-light mb-5">
              Order Now
            </a>
          </div>
        </div>
      </div>

      <div className="newsLetter mt-5">
        <img
          src="public\images\newsle.png"
          alt="herosection"
          className="img-fluid"
        />
        <button className="newsBtn" onClick={() => go()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            fill="currentColor"
            className="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

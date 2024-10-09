import { useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";

export default function OrderSection() {
  // const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChangeTab = (value) => {
    setActive(value);
    setError(null);  
    setSuccess(null);  
  };

  // const handleLogin = () => {
  //   navigate('/TestSection');
  // };


  return (
    <>
      <div className="container">
        <div className="row rows justify-content-center align-items-center text-center">
          <div className="col-md-4">
              <div className="card w-100">
                Login
                <form>
                  <div className="mb-3 mt-3">
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                {error && <div className="alert alert-danger">{error}</div>}
                  <button className="btn btn-success w-100" type="submit">
                    Login
                  </button>
                  <div className="d-flex mt-3">
                    <hr className="border border-2 w-50 border-black" />
                    OR
                    <hr className="border border-2 w-50 border-black" />
                  </div>
                </div>
                </form>

                <div>
                  Don't have an account?{" "}
                  <a onClick={() => handleChangeTab(2)} href="#">
                    Sign Up
                  </a>{" "}
                  here
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

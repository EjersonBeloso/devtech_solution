import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { GrTechnology } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/admin");
  };

  return (
    <header className="header bg-light text-dark">
      <div className="logo fs-5 fw-bold mx-4">
        <GrTechnology className="link" />
        <Link to="/" className="link">
          DevTech Solution
        </Link>
      </div>
      <ul>
        {user ? (
          <div className="d-flex mx-4">
            <Link to="/add" className="link btn btn-dark text-light m-1">
              <IoIosAddCircleOutline /> Add Service
            </Link>
            <li>
              <button
                className="btn btn-dark text-light m-1"
                onClick={onLogout}
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </div>
        ) : (
          <>
            <li>
              <Link className="link" to="/admin">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link className="link" to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;

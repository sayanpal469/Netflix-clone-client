import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;

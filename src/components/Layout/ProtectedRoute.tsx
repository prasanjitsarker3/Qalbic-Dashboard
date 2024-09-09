import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";
import {
  TUser,
  logOut,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../Utlis/verifyToken";
import { useDispatch } from "react-redux";

type TProtect = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtect) => {
  const dispatch = useDispatch();
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  if (role !== undefined && role !== (user as TUser)?.role) {
    dispatch(logOut());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;

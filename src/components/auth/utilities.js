import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

export const RedirectToDashboardOnUser = (user) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
};

export const UseRedirectToDashboard = () => {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    navigate("/dashboard");
  };

  return redirectToDashboard;
};

export const UseHandleSignOut = () => {
    const { logOut } = UserAuth();
  
    const handleSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };
  
    return handleSignOut;
  };
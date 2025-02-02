import { Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const Unauthorized = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    // Optional: Auto-redirect after a few seconds
    const timer = setTimeout(() => {
      navigate(`/${user?.role}`);
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, user?.role]);

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#f8f9fa",
    }}
  >
    <div
      style={{
        maxWidth: "100%",
        marginBottom: "20px",
        width: "100%",
      }}
    >
      <img
        src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738523563/security-notice-enter-symbol-sign-white-backgroundvector-illustration_112413-20578_spwsau.jpg"
        alt="404 Not Found"
        style={{
          width: "100%",  // Make the image responsive
          maxWidth: "600px", // Limit the width of the image for larger screens
          height: "auto", // Maintain aspect ratio
          objectFit: "contain",
          
        }}
      />
    </div>
    <Button
      href="/"
      style={{
        backgroundColor: "#1890ff",
        borderColor: "#1890ff",
        color: "white",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "4px",
        marginTop: "20px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      Go Home
    </Button>
  </div>
  );
};

export default Unauthorized;

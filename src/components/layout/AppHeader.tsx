
import { Layout, Button, Image } from "antd";
import { useAppSelector} from "../../redux/hooks";
import {  TUser } from "../../redux/features/auth/authSlice";
import { NavLink, useNavigate } from "react-router"; // Corrected 'react-router' import
import { verifyToken } from "../../utils/verifyToken";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";  // For the hamburger and close icons
import "../../styles/AppHeader.css";  // Import the CSS file

const { Header } = Layout;

const AppHeader: React.FC<{ setSidebarVisible: (visible: boolean) => void, sidebarVisible: boolean }> = ({ setSidebarVisible, sidebarVisible }) => {

  const token = useAppSelector((state) => state.auth.token) as string;
  const navigate = useNavigate();

  // Ensure the token is valid before calling verifyToken
  let decodeT: TUser | null = null;
  if (token) {
    try {
      decodeT = verifyToken(token) as TUser;
    } catch (error) {
      console.error("Error verifying token:", error);
      // Handle invalid token case, e.g., log out the user or redirect to login
    }
  }

  const handleDashboardClick = async () => {
    if (decodeT) {
      navigate(`/${decodeT.role}`); // Navigate to the dashboard
    } else {
      // Optionally handle cases when decodeT is null
    }
  };

  const handleHamburgerClick = async () => {
    setSidebarVisible(true); // Open the sidebar
  };

  const handleCloseClick = () => {
    setSidebarVisible(false); // Close the sidebar
  };


  return (
    <Header className="ant-layout-header" style={{ height: '80px'}}>
      <div className="flex-container">
        {/* Logo and Nav */}
        <div className="flex-left">
          <NavLink to="/">
            <Image
              className="logo"
              height={60}
              preview={false}
              style={{ borderRadius: "50%" }}
              src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738346961/Black_Retro_Motorcycle_Circle_Logo_1_tuxsuh.png"
              alt="Logo"
            />
          </NavLink>

          {/* Navigation Links */}
          <NavLink to="/">
            <Button type="link" className="ant-btn-link">
              Home
            </Button>
          </NavLink>
          <NavLink to="/about">
            <Button type="link" className="ant-btn-link">
              About
            </Button>
          </NavLink>
          <NavLink to="/all-products">
            <Button type="link" className="ant-btn-link">
              All Products
            </Button>
          </NavLink>
          {token && decodeT && (
            <Button type="link" className="ant-btn-link" onClick={handleDashboardClick}>
              Dashboard
            </Button>
          )}
        </div>

        {/* Auth Section */}
        <div className="flex-right">
          {token ? (
            <div className="burger" style={{display: 'flex', gap: '10px'}} onClick={sidebarVisible ? handleCloseClick : handleHamburgerClick}>
            {sidebarVisible ? (
              <CloseOutlined style={{ fontSize: "24px", color: "#fff" }} />
            ) : (
              <MenuOutlined style={{ fontSize: "24px", color: "#fff" }} />
            )}
          </div>
          ) : (
            <div>
              <Button href="/login" type="default" shape="round" style={{ fontWeight: 600 }}>
                Login
              </Button>
            </div>
          )}
        </div>

  
      </div>
    </Header>
  );
};

export default AppHeader;

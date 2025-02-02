import Sider from "antd/es/layout/Sider";
import { adminPaths } from "../../routes/admin/AdminPaths";
import { customerPaths } from "../../routes/customer/CustomerPaths";
import { menuGenerator } from "../../utils/sidebarMenuGeneratoe";
import { Image, Menu } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetUserByEmailQuery } from "../../redux/features/admin/user.Api";

const userRole = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

const Sidebar: React.FC<{ visible: boolean; setVisible: (visible: boolean) => void }> = ({ visible }) => {
  // Fetch the current user
  const user = useAppSelector(selectCurrentUser);
  const {data: userData} = useGetUserByEmailQuery(user?.email);
 
  const role = user?.role || ""; // Default to empty string if the role is undefined

  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = menuGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.CUSTOMER:
      sidebarItems = menuGenerator(customerPaths, userRole.CUSTOMER);
      break;
    default:
      sidebarItems = menuGenerator([], null); // Fallback case with no role-based routes
      break;
  }

  return (
    <>
      {/* Sidebar component */}
      <Sider
        width={250}
        style={{
          position: "fixed", // Fixed position to float above other content
          top: 0, // Start from the top of the viewport
          left: 0, // Align to the left
          backgroundColor: "#001529", // Ant Design's default dark background color
          height: "100vh", // Full viewport height
          zIndex: 999, // Ensure it appears above other content
          transform: visible ? "translateX(0)" : "translateX(-100%)", // Smooth transition for showing/hiding
          transition: "transform 0.3s ease-in-out", // Add smooth sliding animation
        }}
      >
        {/* Header section with optional logo or title */}
        <div
          style={{
            color: "white",
            padding: "20px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Royal Garage
        </div>
        <div style={{
          textAlign: 'center',
          color: 'white'
        }}>
          <Image
          
          src={userData?.data?.image}
          style={{
            borderRadius: '100%',
            height: '120px',
            width: '120px'
          }}
          />

          <h3 style={{paddingTop: '10px'}} > {userData?.data?.name} </h3>
        </div>

        {/* Sidebar menu */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarItems}
          style={{ border: "none" }} // Clean up borders
        />
      </Sider>
    </>
  );
};

export default Sidebar;

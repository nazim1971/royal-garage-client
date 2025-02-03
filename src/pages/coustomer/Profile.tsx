import { Button, Card, Image, Input, message, Form } from "antd";
import PasswordChangeModel from "../../components/modal/PasswordChangeModel";
import { useGetUserByEmailQuery, useUpdateUserNameMutation } from "../../redux/features/admin/user.Api";
import { selectCurrentUser, TUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";

const Profile = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: Suser, refetch } = useGetUserByEmailQuery(user?.email);
  const [updateUserName] = useUpdateUserNameMutation(); // Mutation for updating the name

  const [openModal, setOpenModal] = useState(false); // Modal state
  const [isEditingName, setIsEditingName] = useState(false); // Toggle for name editing

  // Handle password change modal
  const handlePasswordChange = () => {
    setOpenModal(true);
  };

  // Handle name edit
  const handleEditName = () => {
    setIsEditingName(true);
  };

  // Handle name update
  const handleNameUpdate = async (values: { newName: string }) => {
    const { newName } = values;
    if (newName.trim()) {
      try {
        await updateUserName({ email: user?.email as string, userData: newName }).unwrap();
        message.success("Name updated successfully");
        setIsEditingName(false);
        refetch(); // Refetch user data after update
      } catch (error) {
        message.error("Failed to update name");
      }
    } else {
      message.warning("Name cannot be empty");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card
        style={{
          minWidth: 300,
          maxWidth: 600,
          textAlign: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Title */}
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          User Profile - Manage Account & Settings
        </h2>

        {/* Profile Image */}
        <Image
          src={Suser?.data?.image || "https://via.placeholder.com/120"}
          alt="User profile"
          width={120}
          height={120}
          style={{ borderRadius: "100%", marginBottom: "20px" }}
        />

        {/* User Info - Editable Name */}
        <div style={{ marginBottom: "20px" }}>
          <h3>
            Name:{" "}
            {isEditingName ? (
              <Form
                initialValues={{ newName: Suser?.data?.name }}
                onFinish={handleNameUpdate}
                layout="inline"
              >
                <Form.Item
                  name="newName"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    style={{ width: "70%" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                    Save
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button onClick={() => setIsEditingName(false)}>Cancel</Button>
                </Form.Item>
              </Form>
            ) : (
              Suser?.data?.name
            )}
          </h3>

          {!isEditingName && (
            <Button onClick={handleEditName} style={{ marginBottom: "10px" }}>
              Edit Name
            </Button>
          )}

          <h3>Email: {Suser?.data?.email}</h3>
        </div>

        {/* Change Password Button */}
        <Button type="primary" onClick={handlePasswordChange}>
          Change Password
        </Button>

        {/* Password Change Modal */}
        {Suser?.data && (
          <PasswordChangeModel
            user={Suser?.data} // Pass user data to the modal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        )}
      </Card>
    </div>
  );
};

export default Profile;

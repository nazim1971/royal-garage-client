import React, { useState } from 'react';
import { Button, Flex, Form, Input, message, Modal, Spin } from 'antd';
import { useResetUserPassMutation } from '../../redux/features/admin/user.Api';
import { TUser } from '../../redux/features/auth/authSlice';

// Props type definition for PasswordChangeModel component
interface PasswordChangeModelProps {
  open: boolean;
  onClose: () => void;
  user: TUser;
}

// Refactored PasswordChangeModel component
const PasswordChangeModel: React.FC<PasswordChangeModelProps> = ({ open, onClose, user }) => {
  const [form] = Form.useForm();  // Ant Design form instance
  const [loading, setLoading] = useState(false);  // To handle loading state
  const [resetPass] = useResetUserPassMutation();  // Mutation hook

  const onFinish = async (values: TUser) => {
    setLoading(true);  // Start loading spinner
    try {
      const userData: any = {
        email: user?.email,  // Pass the email
        currentPassword: values?.currentPassword,
        newPassword: values?.newPassword,
      };

   

      const res = await resetPass(userData) as any


      if (res?.error) {
        message.error(res.error?.data?.message || 'Failed to reset password.');
      } else {
        message.success(res.message || 'Password reset successfully!');
        form.resetFields();  // Reset form fields
        onClose();  // Close the modal
      }
    } catch (error) {
      message.error('An error occurred while resetting the password.');
    } finally {
      setLoading(false);  // Stop loading spinner
    }
  };

  return (
    <Modal
      title={'Change Password'}
      visible={open}
      onCancel={onClose}
      footer={null}  // Remove the default footer
    >

        <Flex>
            <p>Name: {user?.name} </p>
        </Flex>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Current Password"
          name="currentPassword"
          rules={[{ required: true, message: 'Please enter your current password' }]}
        >
          <Input.Password placeholder="Enter your current password" />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: 'Please enter a new password' }]}
        >
          <Input.Password placeholder="Enter your new password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={loading} block>
            {loading ? <Spin /> : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PasswordChangeModel;

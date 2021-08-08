import { useState } from 'react';
import AddUserStyle from '../styles/AddUser.module.css';
import { Form, Input, Button } from 'antd';

const AddUser = ({ length, handleAdd }) => {
  const [isModalOpen, setIsModalOpan] = useState(false);
  const addUser = () => {
    setIsModalOpan(!isModalOpen);
  };
  const onFinish = (e) => {
    const newUser = {
      key: new Date().getTime().toString(),
      name: e.username,
      email: e.email,
    };
    handleAdd(newUser);
  };
  return (
    <>
      <div className={AddUserStyle.adduserContainer}>
        <section>{length} users</section>
        {isModalOpen && (
          <Form className={AddUserStyle.userForm} onFinish={onFinish}>
            <Form.Item name="username">
              <Input placeholder="}User name"></Input>
            </Form.Item>
            <Form.Item name="email">
              <Input placeholder="Email"></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add User
              </Button>
            </Form.Item>
          </Form>
        )}
        <Button
          onClick={addUser}
          className={AddUserStyle.addButton}
          type="primary"
        >
          {isModalOpen ? 'Cancel' : 'Add User'}
        </Button>
      </div>
    </>
  );
};

export default AddUser;

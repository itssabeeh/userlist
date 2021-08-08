import ModalStyle from '../styles/Modal.module.css';
import { Form, Input, Button } from 'antd';

const Modal = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  };
  return (
    <div className={ModalStyle.modalContainer}>
      <Form className={ModalStyle.modalForm}>
        <Form.Item name="username">
          <Input placeholder="User name"></Input>
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
    </div>
  );
};

export default Modal;

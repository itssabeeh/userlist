import ModalStyle from '../styles/Modal.module.css';
import { Button } from 'antd';

const Modal = ({ length }) => {
  return (
    <div className={ModalStyle.modalContainer}>
      <section>{length} users</section>
      <Button className={ModalStyle.addButton} type="primary">
        Add User
      </Button>
    </div>
  );
};

export default Modal;

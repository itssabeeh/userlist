import { useState } from 'react';
import AddUserStyle from '../styles/AddUser.module.css';
import { Button } from 'antd';

const AddUser = ({
  length,
  user,
  handleChange,
  handleSubmit,
  isModalOpen,
  handleModal,
  isEdit,
}) => {
  return (
    <>
      <div className={AddUserStyle.adduserContainer}>
        <section>{length} Users</section>
        {isModalOpen && (
          <form onSubmit={handleSubmit}>
            <input
              className={AddUserStyle.inputStyle}
              required
              type="text"
              placeholder="User name"
              name="name"
              value={user.name}
              onChange={handleChange}
            ></input>
            <input
              className={AddUserStyle.inputStyle}
              required
              type="email"
              placeholder="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            ></input>
            <Button
              type="primary"
              htmlType="submit"
              className={AddUserStyle.innerButton}
            >
              {isEdit ? 'Edit' : 'Add User'}
            </Button>
          </form>
        )}
        <Button
          onClick={handleModal}
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

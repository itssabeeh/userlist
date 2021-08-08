import { useEffect, useState } from 'react';
import { Table, Row, Col } from 'antd';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import Modal from '../componets/Modal';
import AddUser from '../componets/AddUser';
const index = () => {
  const [users, setUsers] = useState([]);
  const handleDelete = (record) => {
    setUsers(users.filter((user) => user.key != record.key));
  };
  const handleEdit = (record) => {};
  const handleAdd = (newUser) => {
    setUsers([...users, newUser]);
  };
  const data = [
    { key: '1', name: 'sabeeh', email: 'itssabeeh@gmail.com' },
    { key: '2', name: 'noah', email: 'noah@gmail.com' },
    { key: '3', name: 'rabi', email: 'rabi@gmail.com' },
    { key: '4', name: 'kiran', email: 'kiran@gmail.com' },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (record) => (
        <a onClick={() => handleEdit(record)}>
          <MdModeEdit />
        </a>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (record) => (
        <a onClick={() => handleDelete(record)}>
          <MdDelete />
        </a>
      ),
    },
  ];
  useEffect(() => {
    setUsers(data);
  }, []);
  return (
    <div>
      <AddUser length={users.length} handleAdd={handleAdd} />
      <Table dataSource={users} columns={columns} />;
    </div>
  );
};
export default index;

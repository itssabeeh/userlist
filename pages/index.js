import { useEffect, useState } from 'react';
import { Table, Row, Col } from 'antd';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import AddUser from '../componets/AddUser';
const index = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [isModalOpen, setIsModalOpan] = useState(false);
  const handleModal = () => {
    if (isEdit && isModalOpen) {
      setEditId(null);
      setIsEdit(false);
      setUser({ ...user, name: '', email: '' });
    }
    setIsModalOpan(!isModalOpen);
  };

  const handleDelete = (record) => {
    setUsers(users.filter((user) => user.key != record.key));
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setUsers(
        users.map((person) => {
          if (person.key === editId) {
            return { ...person, name: user.name, email: user.email };
          }
          return person;
        })
      );
      handleModal();
    } else {
      setUsers([...users, user]);
    }
    setUser({ ...user, name: '', email: '' });
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
        <a
          onClick={() => {
            setIsEdit(true);
            setUser({ ...user, name: record.name, email: record.email });
            setIsModalOpan(true);
            setEditId(record.key);
          }}
        >
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
      <AddUser
        length={users.length}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
        handleModal={handleModal}
        isModalOpen={isModalOpen}
        isEdit={isEdit}
      />
      <Table dataSource={users} columns={columns} />;
    </div>
  );
};
export default index;

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Table, Button } from 'antd';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import indexStyle from '../styles/index.module.css';
import AddUser from '../componets/AddUser';

const Index = () => {
  const [user, setUser] = useState({
    key: '',
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
      setUser({
        key: '',
        name: '',
        email: '',
      });
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
      const newUser = { key: uuidv4(), name: user.name, email: user.email };
      setUsers([...users, newUser]);
    }
    setUser({ name: '', email: '' });
  };
  const data = [
    { key: 1, name: 'Skyller', email: 'skyller@gmail.com' },
    { key: 2, name: 'Tom', email: 'tom@gmail.com' },
    { key: 3, name: 'Elliot', email: 'elliot@gmail.com' },
    { key: 4, name: 'Jessy', email: 'jessy@gmail.com' },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '35%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '40%',
    },
    {
      title: 'Edit',
      key: 'edit',
      align: 'center',
      // eslint-disable-next-line react/display-name
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
      align: 'center',
      // eslint-disable-next-line react/display-name
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
    <div className={indexStyle.content}>
      <AddUser
        length={users.length}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
        handleModal={handleModal}
        isModalOpen={isModalOpen}
        isEdit={isEdit}
      />
      <div className={indexStyle.tableContainer}>
        <Table dataSource={users} columns={columns} />
        <div className={indexStyle.deleteAllBtn}>
          <Button onClick={() => setUsers([])} type="primary">
            Delete All
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Index;

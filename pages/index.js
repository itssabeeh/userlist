import Head from 'next/head';
import { useEffect, useState } from 'react';
const index = () => {
  const [users, setUsers] = useState([]);
  const data = [
    { name: 'sabeeh', email: 'itssabeeh@gmail.com' },
    { name: 'noah', email: 'noah@gmail.com' },
    { name: 'rabi', email: 'rabi@gmail.com' },
    { name: 'kiran', email: 'kiran@gmail.com' },
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
      dataIndex: 'edit',
      key: 'edit',
    },
    {
      title: 'Edit',  
      dataIndex: 'edit',
      key: 'edit',
    },
  ];
  useEffect(() => {
    setUsers(data);
  }, []);
  return (
    <div>
      {data.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};
export default index;

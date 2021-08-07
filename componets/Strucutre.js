import { Layout } from 'antd';
import Style from '../styles/Structure.module.css';
import 'antd/dist/antd.css';
const Strucutre = ({ children }) => {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout>
        <Header className={Style.header}>Users</Header>
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default Strucutre;

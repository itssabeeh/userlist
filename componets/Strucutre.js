import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Style from '../styles/Structure.module.css';

const Strucutre = ({ children }) => {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout className={Style.mainContaioner}>
        <Header className={Style.header}>Users</Header>
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default Strucutre;

<<<<<<< HEAD
import React from "react";
import {
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Image,
  Card,
  Avatar,
  Divider,
} from "antd";
import "antd/dist/antd.css";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

const { Meta } = Card;

=======
import React from 'react';
import { Button } from 'antd';
import './App.css';
import { Link } from 'react-router-dom';
>>>>>>> signin
// import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';

function Accueil(props) {
<<<<<<< HEAD
  return (
    <Layout>
      <Header className="header">header</Header>
      <Image width={50} src="reactapp/public/AGORA.png" />

      <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Accueil</Menu.Item>
        <Menu.Item key="2">Thématique</Menu.Item>
        <Menu.Item key="3">Profil</Menu.Item>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size={100}
        >
          Download
        </Button>
      </Menu>

      <Layout>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <div>
            main content
            <Card
              style={{ width: 800 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            ,
          </div>
          main content
        </Content>
        <Sider className="site-layout-background" width={200}>
          right sidebar
          <Divider orientation="left" plain>
            Theme
          </Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
        </Sider>
      </Layout>
      <Footer style={{ textAlign: "center" }}>footer</Footer>
    </Layout>
  );
=======
    return (
        <div>
            <div>Voici la page d'accueil!</div>
            <Button type="primary" >Boutton</Button>
            <Link to="inscription"> <Button type="primary" > Inscription </Button> </Link>
        </div>
    )
>>>>>>> signin
}

export default Accueil;

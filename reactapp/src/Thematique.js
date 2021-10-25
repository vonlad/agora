import React from "react";
import {
  Affix,
  Col,
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Image,
  Card,
  Avatar,
  Divider,
  Row,
  AutoComplete,
  Space
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

// import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';

function Thematique(props) {
  return (
      <>
    <Row justify="center" >
        <Col span="4">
        </Col>
        <Col span="16">
            <h1  style={{ backgroundColor: "#214C74", color: "white", width: "100%", textAlign: "center", height: 50, justifyContent: "center", }}>
                Thématiques
            </h1>
        </Col>
        <Col span="4">
        </Col>
        </Row>
        <Row justify="start" display="flex">
        <Card
                  
                  style={{ 
                  width: "100%", 
                  margin:'15px', 
                  display:'flex',
                  flexDirection: 'row',
                  justifyContent:'space-between'}}
                  cover={
                  <img alt="example" src="https://mcdn.wallpapersafari.com/medium/76/5/HJEso9.jpg" style={{width: 200}} />}
        >
        <div style={{justifyContent: "center", width: "100%"}}>
            <h3>titre</h3>
            <h3>description</h3>
        </div>
        </Card>

    </Row>
    </>
  );
}

export default Thematique;
import React, { useState } from 'react';
import './nouvelPublication.css'
import { Layout, Menu, Button, Image, Empty, Cascader, Input, Space} from 'antd';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const { Header, Footer, Sider, Content } = Layout;
const {Search} = Input;


function NouvelPublication(props) {

  const[titre, setTitre] = useState('');
  const[contenu, setContenu] = useState('');
  const[motCle, setMotCle] = useState([]);





  var postPublication = async () => {

    // const data = await fetch('/post-publication', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: `titrePublication=${titre}&contenuPublication=${contenu}`
    // })
    // const body = await data.json()

console.log('onclick front', titre, contenu)
  }



    const options = [
        {
          value: 'politique',
          label: 'politique',
          children: [
            {
              value: 'mairie',
              label: 'mairie',
            },
            {
              value: 'département',
              label: 'département',
            },
            {
              value: 'nation',
              label: 'nation',
            },
          ],
        },
        {
          value: 'sport',
          label: 'sport',
          children: [
            {
              value: 'foot',
              label: 'foot',
            },
            {
              value: 'baskeet',
              label: 'baskeet',
            },
            {
              value: 'tennis',
              label: 'tennis',
            },
          ],
        },
      ];
      
      function onChange(value) {
        console.log('ma value',value);
      }


      const onSearch = value => {
        var ajoutMotCle = [...motCle]
        console.log("ma value pour onsearch",value)
        setMotCle([ajoutMotCle.push(value)])
        console.log("ma nouvelle valeur de motcle",motCle)
      };
   
    return (
        <div style={{justifyContent: "center"}}>

            <Layout>
                <Header className="header">header</Header>
                <Image width={50} src="./image/AGORA.png" />
            </Layout>


            <Empty className="imageVide"></Empty>
            <div className="montimer">
            <span className="timer">heure/date</span>
            </div>
            <div className="maflex">
            <Cascader className="cascade" options={options} onChange={onChange} placeholder="Please select" />

            <Space direction="vertical">
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Ajouter un mot-clé"
                size="large"
                onSearch={onSearch}
              />
            </Space>


            </div>
            <Input className="description" placeholder="Votre titre" onChange={(e) => setTitre(e.target.value)} />
            <Input className="description" placeholder="Votre texte" onChange={(e) => setContenu(e.target.value)}/>
            <div className="monbouton">
            <Button className="bouton" onClick={() => postPublication()} >publier</Button>
            </div>

        </div>
      
      
    )
  }

  function mapStateToProps(state){
    return {token:state.token}
  }
  
  export default connect(
    mapStateToProps,
    null
   
)(NouvelPublication)
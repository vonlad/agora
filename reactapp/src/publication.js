import React, {useState, useEffect} from 'react';
import { Radio, Layout, Menu, Button, Image } from 'antd';



function Publication(props) {

    const { Header, Footer, Sider, Content } = Layout;
    const [selection, setSelection] = useState('');
    const [vote, setVote] = useState('');

    useEffect(() => {
      console.log(vote)
    },[vote])


   
    return (
      <div>
      <Layout>
      <Header className="header">header</Header>
      <Image width={50} src="reactapp/public/AGORA.png" />

      <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Accueil</Menu.Item>
        <Menu.Item key="2">Thématique</Menu.Item>
        <Menu.Item key="3">Profil</Menu.Item>
        <Button>
        </Button>
      </Menu>

      <Layout>
        <Content >

          <img src="../alaska.jpg" style={{width: "30%"}}/>

          <h1 style={{position:"absolute", backgroundColor: "#37A4B2", color:"white"}}>Que penseriez-vous d'annuler la dette publique ?</h1>

          <p>
Par Marion Simon-Rainaud
Publié le 18 févr. 2021 à 7:00Mis à jour le 18 févr. 2021 à 15:44
La sortie du tunnel pandémique semble encore lointaine, et pourtant, des voix s'élèvent déjà pour penser « l'après », et notamment sur le plan économique. En ce moment, la dette publique est des sujets qui alimentent le plus les plateaux télé, les fréquences radios et les colonnes des journaux.

Car, dans l'absolu, les chiffres inquiètent. La dette française* a littéralement explosé en 2020 en franchissant largement la barre symbolique des 100 % du PIB pour s'établir à près de 120 %, contre 98 % en 2019. En quarante ans, le poids de la dette a été multiplié par six, puisqu'il s'établissait à 20 % du PIB en 1980. « La France vit au-dessus de ses moyens », « la dette est un fardeau pour les générations futures », a-t-on l'habitude d'entendre. Mais la question peut se poser en d'autres termes : la capacité d'un pays à rembourser dépend de sa capacité à se faire financer dans les années futures, c'est-à-dire la possibilité d'emprunter à nouveau. Mais, derrière le débat des chiffres, se cachent en fait plusieurs visions de la dette, et par extension de la société.

        </p>
  
        
          
  
          <Radio.Group defaultValue="a" buttonStyle="solid" style={{ margin: 16, fontWeight: 'bold' }}>
            <Radio.Button style={{ margin: 16, backgroundColor: "#FFC806"}} value="J'Adore" onClick={(e) => setVote(e.target.value) }>J'Adore</Radio.Button>
            <Radio.Button style={{ margin: 16, backgroundColor: "#EDAC06"}} value="Je suis Pour" onClick={(e) => setVote(e.target.value)}>Je suis Pour</Radio.Button>
            <Radio.Button style={{ margin: 16, backgroundColor: "#DAA419"}} value="Je suis Mitigé(e)" onClick={(e) => setVote(e.target.value)}>Je suis Mitigé(e)</Radio.Button>
            <Radio.Button style={{ margin: 16, backgroundColor: "#BE833D"}} value="Je suis Contre" onClick={(e) => setVote(e.target.value)}>Je suis Contre</Radio.Button>
            <Radio.Button style={{ margin: 16, backgroundColor: "#966215"}} value="Je Déteste" onClick={(e) => setVote(e.target.value)}>Je Déteste</Radio.Button>
          </Radio.Group>
  
          </Content>
          </Layout>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>

          </div>
      
      
    )
  }
  
export default Publication;
  
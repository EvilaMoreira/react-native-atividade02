//Évila Corrêa Moreira - TADS 2019

import React from "react"; // Importação da biblioteca "React"
import styled from "styled-components/native";
import { Image } from 'react-native';


//Função Header para delimitar uma área para a organização dos componentes.
const Header = styled.View`
  flex-direction:row;
  background-color:#E87925;
  height:550px;
  width:400px;
  flex-wrap:wrap;
  justify-content:center;
`;

// Função Quadrado para delimitar componentes quadrados.
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width:180px
  height:180px;
  justify-content:center;
  align-items:center;
`;

//Função QuadradoMaior para delimitar o componente que abriga o link da imagem maior
const QuadradoGrande = styled.View`
  background-color: ${props => props.cor};
  width:360px
  height:180px;
  justify-content:center;
  align-items:center;
`;


//Função texto para a stylização do texto do cabeçalho da galeria.
const Texto = styled.Text`
  font-size: ${props => props.fonte};
  font-style: italic;
`;


//Função para delimitação da página
const Pagina = styled.View`
background-color:#F2B835;
align-items:center;  
justify-content:center;
flex:1;
`;

function App() { // Função principal
  return ( // Exibe na tela

    
    
    <Pagina>
    
    {/*Exibe informações do início da página*/}
     <Texto fonte="15">Galeria de imagens</Texto>
      <Texto fonte="20">Évila Corrêa Moreira</Texto>
      <Texto fonte="40">Gratulina: ótica sustentável</Texto>

     {/*Exibe as informações de dentro do Header*/}
    <Header>

 {/*Exibe as informações de dentro do quadrado*/}

      {/*Quadrado 1*/}
     <Quadrado cor="red">
     <Image source={require('./src/imagens/foto01.jpg')} 
          style={{width: 180, height: 180, backgroundColor: '#000'}}
        />
     </Quadrado>
     
      {/*Quadrado 2*/}
     <Quadrado cor="green">
     <Image source={require('./src/imagens/foto02.jpg')} 
          style={{width: 180, height: 180, backgroundColor: '#000'}}
        />
     </Quadrado>
     
      {/*Quadrado 3*/}
     <Quadrado cor="blue">
     <Image source={require('./src/imagens/foto03.jpg')} 
          style={{width: 180, height: 180, backgroundColor: '#000'}}
        />
     </Quadrado>
     
     
      {/*Quadrado 4*/}
     <Quadrado cor="pink">
     <Image source={require('./src/imagens/foto04.jpg')} 
          style={{width: 180, height: 180, backgroundColor: '#000'}}
        />
     </Quadrado>

    
      {/*Quadrado 5. Quadrado maior que abriga a imagem da URL.*/}
     <QuadradoGrande  cor="yellow">

     <Image source = {{uri:'https://allwood.com.br/wp-content/uploads/2017/11/3.jpg'}} //Utilização de URL para a exibição de imagem.
     style={{width: 360, height: 180, backgroundColor: '#000'}}
     />
  
     </QuadradoGrande>

     </Header>
    </Pagina>
  );
}

export default App;
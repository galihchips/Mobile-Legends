import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Thumbnail,
  Header,
  Button
} from 'native-base';


export default class HomeScreen extends Component {

  render() {
    return (
      <Container>
        <Content  style ={{  alignSelf : 'center' }}>
          <Thumbnail 
            large 
            source={{uri: 'https://www.yukdibaca.com/wp-content/uploads/2017/07/Logo-Mobile-Legend-Bang-Bang.png'}} 
            style ={{alignSelf : 'center', width : 300, height : 200}}
          />
          
          <Text style = {nbStyles.subtitle}>
            Welcome to
          </Text>
          <Text style = {nbStyles.subtitle}>
            Mobile Legends Heroes List
          </Text>
          <Button
          block
          style = {nbStyles.btn}
          onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text>START</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
const nbStyles = {
  subtitle : {
    textAlign : 'center'
  },
  btn : {
    marginTop : 20
  }
}
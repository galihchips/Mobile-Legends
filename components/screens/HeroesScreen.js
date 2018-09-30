import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Header,
  Icon,
  Thumbnail,
  Text
} from 'native-base';
import axios from 'axios';
import {
  TouchableOpacity
} from 'react-native';
import {
  createTabNavigator,
  createStackNavigator
} from 'react-navigation';

import ListHero from './ListHero';
export default class HeroesScreen extends Component {
   constructor(props) {
     super(props);
   
     this.state = {
      heroes : []
     };
   }
   ComponentDidMount(){
   axios.get('http://rest.learncode.academy/api/galih/heroes')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor : '#fff'}}>
        <Left />
        <Body  style ={{alignSelf:'center'}}>
          <Text>
            List of Heroes
          </Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => this.props.navigation.push('HeroAdd')}>
            <Text>Add Hero</Text>
          </TouchableOpacity>
        </Right>
      </Header>
        <Content>
          <List>
            {this.state.heroes.map((hero, key) => <ListHero key={key} hero={hero} />)}
          </List>
        </Content>
      </Container>
    );
  }
}

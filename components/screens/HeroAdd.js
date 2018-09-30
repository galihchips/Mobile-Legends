import React, {Component} from 'react';
import {
	Container,
	Content,
	Text,
	Form,
	Label,
	Input,
	Item
} from 'native-base';
import {
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
export default class HeroAdd extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nama : '',
	  	title : '',
	  	role : '',
	  	speciality : '',
	  	imageUri : ''
	  };
	}
	handleDone(){
		//const {nama, title, role, speciality, imageUri} = this.state;
		const self = this;
		axios({
		  method: 'post',
		  url: 'http://rest.learncode.academy/api/galih/heroes',
		  data: this.state
		}).then(() => {
			self.props.navigator.navigate('Heroes');
		});
	}
	render(){
		return (

			<Container>
				<Content>
					<Form>
			            <Item floatingLabel>
			              <Label>Username</Label>
			              <Input onChangeText={(text) => this.setState({nama : text})} />
			            </Item>
			            <Item floatingLabel>
			              <Label>ImageUri</Label>
			              <Input onChangeText={(text) => this.setState({imageUri : text})} />
			            </Item>
			            <Item floatingLabel>
			              <Label>Title</Label>
			              <Input onChangeText={(text) => this.setState({title : text})} />
			            </Item>
			            <Item floatingLabel>
			              <Label>Role</Label>
			              <Input onChangeText={(text) => this.setState({role : text})} />
			            </Item>
			            <Item floatingLabel>
			              <Label>Speciality</Label>
			              <Input onChangeText={(text) => this.setState({speciality : text})} />
			            </Item>
			        </Form>
			        <TouchableOpacity style= {{alignSelf:'center',marginTop: 40}} onPress={() => this.handleDone()}>
			            <Text>DONE</Text>
			        </TouchableOpacity>
				</Content>
			</Container>

			)
	}
}
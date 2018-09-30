import React from 'react';
import {
	ListItem,
	Thumbnail,
	Content,
	Body,
	Text
} from 'native-base';

export default class ListHero extends React.Component {
		render(){
			return (
				<ListItem thumbnail>      
	                <Thumbnail square source={{ uri: this.props.hero.imageURI }} />
	                  <Body>
	                    <Text>{this.props.hero.name}</Text>
	                    <Text note>{this.props.hero.title}</Text>
	                  </Body>
	            </ListItem>
		)
	}
}
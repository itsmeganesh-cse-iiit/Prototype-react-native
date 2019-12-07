import React, { Component } from 'react'
import {View,Text as TextNative} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,Toast,Body, Icon, Text,Root } from 'native-base';

export class NativeBase extends Component {
    render() {
     
        return (
            <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
            
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          
          <Text>
            This is Content Section
          </Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
        )
    }
}

export default NativeBase


import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default () => {

  const container = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

  const button = {
    padding: 16,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#4286f4',
    borderRadius: 3
  }

  const textBotton = {
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase'
  }

  async function showQuote() {
    let [{ quote } = {}] = await (await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')).json();
    
    alert(quote);
  }

  return (
    <View style={ container }>
      <Image source={ require('./imagem/logo.png') } />
      
      <TouchableOpacity style={ button } onPress={ showQuote }>
        <Text style={ textBotton }>Qual é a frase do dia?</Text>
      </TouchableOpacity>
    </View>
  )
}
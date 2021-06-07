import React, {Component} from 'react';
import {View,TextInput,Text, TouchableOpacity,Image } from 'react-native';
import Style from './Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Cadastro extends Component{

  state = {
    nome : null,
    numero : null,
    endereco : null,
    } 
  recebenome = (nome) => {
      this.setState({nome:nome});
      console.log(nome);
  }
  recebenumero = (numero) => {
    this.setState({numero:numero});
    console.log(numero);
  }
  recebeendereco = (endereco) => {
    this.setState({endereco:endereco});
    console.log(endereco);
  }
 
  salvarcontatos = () => {

    let {nome} = this.state;
    let {numero} = this.state;
    let {endereco} = this.state;

    AsyncStorage.getItem('Contatos').then((contatos) =>{
      if(contatos){
        contatos = JSON.parse(contatos);
      }else{
        contatos = [];

      }
      contatos.push({nome:nome ,numero:numero,endereco:endereco});
      console.log(contatos);
      AsyncStorage.setItem('Contatos',JSON.stringify(contatos));

     
  })

  }


    render(){
		return(
        <View style={Style.tela}>
      <Image
      style={Style.logo} 
      source={require('../assets/imgicontel.png')}
      />
            
		    <Text>Cadastrar Contato</Text>

            <TextInput
      
            onChangeText={this.recebenome}
            style={Style.contato}
            placeholder={'Nome do contato'}/>

           
            <TextInput
            onChangeText={this.recebenumero}
            style={Style.numero}
            placeholder={'Contato'}
            keyboardType="numeric"/> 
          
           
            <TextInput
          
            onChangeText={this.recebeendereco}
            style={Style.endereco}
            placeholder={'Endereço'} /> 

            <TouchableOpacity
            
              style={Style.botao}
              onPress={this.salvarcontatos}>
              <Text style={Style.textodobotao}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Style.botaodel}
              onPress={()=>this.setState({nome:'',telefone:'',endereco:''})}>
                <Text style={Style.textodobotaodel}>Cancelar</Text>
            </TouchableOpacity>
        
 

            </View>
            );
        }
     }

export default Cadastro;
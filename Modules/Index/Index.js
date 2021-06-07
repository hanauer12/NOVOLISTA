import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Navigator from '../../Navigator/Navigator';
import Styles from './Styles';

class Index extends Component {
  render(){
        return(
            <View style={Styles.container}>
            <Navigator/>
            </View>
 
     );
    }
};


export default Index;
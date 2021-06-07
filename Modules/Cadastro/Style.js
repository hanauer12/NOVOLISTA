import {ImageBackground, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    tela : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009ACD'

    },


    contato:{
        borderBottomWidth:1,
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 3,
        width: 300,
        backgroundColor: '#FFFFFF',
        padding: 10,
        fontSize : 15
    },
   
    numero:{
        borderBottomWidth:1,
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 3,
        width: 300,
        backgroundColor: '#FFFFFF',
        padding: 10,
        fontSize : 15
      
    },
    endereco:{
        borderBottomWidth:1,
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 3,
        width: 300,
        backgroundColor: '#FFFFFF',
        padding: 10,
        fontSize : 15
    },
    botao: {
        width: 300,
        height : 42,
        backgroundColor: '#00FF00',
        marginTop: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textodobotao: {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#00000F'
    },
    logo : {
        width:90,
        height:90,
    },
    botaodel: {
        width: 300,
        height : 42,
        backgroundColor: '#FF0000',
        marginTop: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textodobotaodel: {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#00000F'
    },
});


export default Style;
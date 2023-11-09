import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        backgroundColor:'#fff',
        width: Dimensions.get('window').width / 1.2,
        height:Dimensions.get('window').height / 5,
        margin:10,
        resizeMode:'cover'
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        margin:5,
        color:'#FFA500'
    },
    desc:{
        color:'#26577C',
        fontSize:15,
        padding:10,
        margin:5
    },
    button:{
        backgroundColor:'#FF0000',
        margin:10,
        padding:20,
        borderRadius:10
    },
    button_title:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    }
});

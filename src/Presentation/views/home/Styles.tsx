import {StyleSheet} from 'react-native';


    const Homestyles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: 'black',
        },
        ImageBackground: {
            width: '100%',
            height: '100%',
            opacity:0.7,
            bottom: '30%'
        },
        form:{
            width: '100%',
            height: '40%',
            backgroundColor:'white',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            padding:30
        },
        formText:{
            fontWeight: 'bold',
            fontSize:16
        },
        formIcon:{
            width: 25,
            height:25,
            marginTop:5
        },
        formTextInput:{
            flex:1,
            borderBottomWidth:1,
            borderBottomColor:'#AAAAAA',
            marginLeft:15
        },
        formInput:{
            flexDirection:'row',
            marginTop:30
        },
        formRegister:{
            flexDirection:'row',
            justifyContent:'center',
            marginTop:30
        },
        formRegisterText:{
            fontStyle:'italic',
            color: 'orange',
            borderBottomWidth:1,
            borderBottomColor:'orange',
            fontWeight:'bold',
            marginLeft:10
        },
        logoContainer:{
            position:'absolute',
            alignSelf:'center',
            top: '15%'
        },
        logoImage:{
            width: 100,
            height: 100,
        },
        logoText:{
            color:'white',
            textAlign:'center',
            fontSize: 20,
            marginTop:10,
            fontWeight: 'bold'
        },
        
    });


    export default Homestyles;
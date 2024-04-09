import React, {useState,useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image,View,Text,TextInput,ToastAndroid,StyleSheet, TouchableOpacity} from "react-native";
import {RoundedButton} from "../../components/RoundedButton";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import useViewModel from './ViewModel';
import { RootStackParamList } from "../../../../App";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from './Styles';
import { ProfileInfoScreen } from "../profile/info/ProfileInfo";

interface Props extends StackScreenProps <RootStackParamList,'HomeScreen'>{};

export const HomeScreen = ({navigation, route}:Props) =>{

const { email, password,errorMesage, onChange, login,user} = useViewModel();


useEffect(() =>{
    if(errorMesage !== ''){
        ToastAndroid.show(errorMesage,ToastAndroid.LONG);
    }

},[errorMesage])

useEffect (() =>{
    if(user?.id !== null && user?.id !== undefined) {
        navigation.replace('ProfileInfoScreen');
    }
},[user])
  
return (
    <View style={styles.container}>
        <Image 
            source={require('../../../../assets/chef.jpg')} 
            style={styles.ImageBackground}
        />
        <View style={styles.logoContainer}>
        <Image
            source={require('../../../../assets/logo.png')}
            style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
        </View>

        <View style={styles.form}>

        <Text style={styles.formText}>INGRESAR</Text>

        <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder='Correo Electrónico'
            keyboardtype="email-address"
            property="email"
            onChangeText={onChange}
            value={email}
        />

        <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder='Contraseña'
            keyboardtype="default"
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
        />


        <View style={{marginTop:30}}>

            <RoundedButton text='ENTRAR' onPress={() => login()}/>

        </View>

        <View style={styles.formRegister}>
            <Text>¿No tienes cuenta?</Text>
           {  <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.formRegisterText}>Regístrate</Text>
            </TouchableOpacity> }
       


        </View>

        </View>
    </View>
    );
}
    
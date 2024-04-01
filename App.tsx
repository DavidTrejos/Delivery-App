import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { HomeScreen } from './src/Presentation/views/home/Home';


//Config to define that the screen don´t pass any data. To solve the error of  not over load matches this call
export type RootStackParamList = {
  HomeScreen:undefined,
  RegisterScreen:undefined,
}

const Stack = createNativeStackNavigator <RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="RegisterScreen" 
        component={RegisterScreen} 
        options={{
          headerShown:true,
          title: 'Nuevo usuario'
        }}/> 
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
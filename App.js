import { useState } from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from "./Screen/Home" ;
import Detail from "./Screen/Detail"; 
  
const Stack = createNativeStackNavigator(); 
  
export default function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: { 
            backgroundColor: 'green', 
          }, 
          headerTintColor: '#fff', 
        }}> 
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Detail" component={Detail} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}
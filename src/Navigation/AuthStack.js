import React  from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from "../Screens/AuthScreens/SignUpScreen"
import SignInScreen from "../Screens/AuthScreens/SignInScreen"



const Stack = createStackNavigator();


const AuthStack = (props) => {



  return(
<Stack.Navigator>
 

  <Stack.Screen name="SignInPage" component={SignInScreen} options={{headerShown: false}} />
  <Stack.Screen name="SignUpPage" component={SignUpScreen} options={{headerShown: false}} /> 
 
  
</Stack.Navigator>
  )
}


export default AuthStack
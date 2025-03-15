import { StyleSheet, Text,View } from "react-native";
import RegisterScreens  from "../Screens/RegisterScreens"
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function HomeScreen() {


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreens} />
      <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen} />

    </Stack.Navigator>
  </NavigationContainer>

  )}
    const styles=StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
      }
    })
   

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text,View } from "react-native";
import RegisterScreens  from "../Screens/RegisterScreens"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <RegisterScreens/>
      <StatusBar style="auto"/>
    </View>

  )}
    const styles=StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
      }
    })
   

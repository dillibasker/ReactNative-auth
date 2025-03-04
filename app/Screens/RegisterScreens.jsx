import { useState } from "react";
import { StyleSheet, TextInput,Text,View,Button } from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth"
import auth from "../(tabs)/firebase"

const RegisterScreens = () => {
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

    const handleSubmit=()=>{
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            const user = userCredential.user;
        })
    }

  return (
    <View style={styles.container}>
        <Text style={styles.register}>Register</Text>
        <TextInput  placeholder="Email" style={styles.inputbox} onChangeText={setEmail}/>
        <TextInput  placeholder="Password" style={styles.inputbox} secureTextEntry ={true} onChangeText={setPassword}/>
        <Button style={styles.Button}>Register</Button>
        <Text>Already have an account </Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
    },
    inputbox:{
        borderRadius:5,
        borderColor:"black",
        borderWidth:2,
        marginVertical:10,
        padding:4,
        width:190
    },
    register:{
        fontWeight:500,
        padding:10,
        fontSize:30   
    },
    Button:{
        
    }
})

export default RegisterScreens
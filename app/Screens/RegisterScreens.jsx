import { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { register } from "../api"; // Import register function

const RegisterScreens = () => {
  const router = useRouter();// ✅ Get navigation object

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const username = "dilli";

  const handleSubmit = async () => {
    try {
      // Backend Registration
      const response = await register({ username, email, password });
      setMessage(response.data.message || "User registered successfully!");
    } catch (error) {
      setMessage(error.message || "Registration failed.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.register}>Login</Text>
      <TextInput 
        placeholder="Email"
        style={styles.inputbox} 
        onChangeText={setEmail}
        value={email} 
      />
      <TextInput 
        placeholder="Password" 
        style={styles.inputbox} 
        secureTextEntry={true} 
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      {message ? <Text>{message}</Text> : null}

      <TouchableOpacity onPress={() => router.push("/forgotpasswordscreen")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inputbox: {
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 10,
    padding: 8,
    width: 200,
  },
  register: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 30,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 15,
    color: "#007BFF",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default RegisterScreens;

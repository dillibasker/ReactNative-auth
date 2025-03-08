import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const API_URL = "http://192.168.21.136:5000/api/auth";

const ResetPasswordScreen = () => {
  const route = useRoute();
  const { token } = route.params; // Get token from navigation

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, { newPassword });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Reset failed. Token expired or invalid.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reset Password</Text>
      <TextInput 
        placeholder="Enter new password"
        style={styles.inputbox}
        secureTextEntry
        onChangeText={setNewPassword}
        value={newPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default ResetPasswordScreen;

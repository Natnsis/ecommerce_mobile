import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Send login request to the server
      const response = await fetch("http://10.16.203.90:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Login successful!");
        router.push("/home");
      } else if (response.status === 404) {
        Alert.alert("Error", "User not found. Please check your username.");
      } else if (response.status === 401) {
        Alert.alert("Error", "Invalid username or password.");
      } else {
        Alert.alert("Error", data.error || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Error",
        "Unable to connect to the server. Please try again later."
      );
    }
  };

  return (
    <View className="pt-10 bg-gray-100 justify-center items-center px-6">
      <Image
        source={require("./../assets/images/welcomer.jpg")}
        alt="Welcome Image"
        className="w-full h-52 mb-6 rounded-lg shadow-md"
        resizeMode="cover"
      />
      <Heading size="3xl" className="mb-5">
        Login
      </Heading>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full bg-white p-4 rounded-lg shadow-md mb-6"
      />

      <Button
        onPress={handleLogin}
        variant="solid"
        className="w-full mb-5"
        size="lg"
      >
        <ButtonText>Login</ButtonText>
      </Button>

      <View className="w-full flex-row items-center ">
        <Text className="min-w-60 ">Dont have an Account?</Text>
        <Button onPress={() => router.push("/register")} variant="link">
          <ButtonText>Register</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default Login;

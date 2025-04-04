import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send login request to the server
      const response = await fetch('http://10.16.202.144:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, navigate to the home page
        Alert.alert('Success', 'Login successful!');
        router.push('/home');
      } else if (response.status === 404) {
        // User not found
        Alert.alert('Error', 'User not found. Please check your username.');
      } else if (response.status === 401) {
        // Invalid credentials
        Alert.alert('Error', 'Invalid username or password.');
      } else {
        // Other errors
        Alert.alert('Error', data.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-6">
      <Text className="text-3xl font-extrabold text-primary mb-6">Login</Text>

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full bg-white p-4 rounded-lg shadow-md mb-6"
      />

      {/* Login Button */}
      <TouchableOpacity
        className="bg-primary py-4 rounded-lg shadow-md w-full mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold text-lg">Login</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text className="text-primary font-medium">
          Don't have an account? <Text className="underline">Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    router.push('/home'); // Navigate to the home page after login
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
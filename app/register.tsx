import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    try {
      // Send registration data to the server
      const response = await fetch('http://10.16.202.144:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          image,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Registration successful!');
        router.push('/login'); // Navigate to the login page after successful registration
      } else {
        Alert.alert('Error', data.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-6">
      <Text className="text-3xl font-extrabold text-primary mb-6">Register</Text>

      {/* Full Name Input */}
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      {/* Confirm Password Input */}
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      {/* Image URL Input */}
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        className="w-full bg-white p-4 rounded-lg shadow-md mb-6"
      />

      {/* Register Button */}
      <TouchableOpacity
        className="bg-primary py-4 rounded-lg shadow-md w-full mb-4"
        onPress={handleRegister}
      >
        <Text className="text-white text-center font-bold text-lg">Register</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text className="text-primary font-medium">
          Already have an account? <Text className="underline">Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
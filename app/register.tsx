import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Full Name:', fullName);
    console.log('Username:', username);
    console.log('Password:', password);
    router.push('/login'); // Navigate to the login page after registration
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
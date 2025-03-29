import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-6">
      {/* Welcome Image */}
      <Image
        source={require('../assets/images/assosa.jpg')}
        className="w-3/4 h-40 mb-6 rounded-lg shadow-md"
        resizeMode="cover"
      />

      {/* Welcome Text */}
      <Text className="text-4xl font-extrabold text-primary text-center">
        Welcome to Assosa E-Commerce
      </Text>
      <Text className="text-lg text-gray-600 text-center mt-4 font-medium">
        Discover and shop for your favorite products from the comfort of your home.
      </Text>

      {/* Buttons */}
      <View className="mt-8 w-full">
        <TouchableOpacity
          className="bg-primary py-4 rounded-lg shadow-md mb-4"
          onPress={() => router.push('/login')}
        >
          <Text className="text-white text-center font-bold text-lg">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 py-4 rounded-lg shadow-md"
          onPress={() => router.push('/register')}
        >
          <Text className="text-gray-800 text-center font-bold text-lg">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
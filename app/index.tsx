import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-100 px-6">
      {/* Welcome Image */}
      <View className="justify-center items-center mt-8">
        <Image
          source={require("./../assets/images/assosa.jpg")}
          alt="Welcome Image"
          className="w-3/4 h-40 mb-6 rounded-lg shadow-md"
          resizeMode="cover"
        />
      </View>

      {/* Welcome Text */}
      <Text className="text-4xl font-extrabold text-primary text-center">
        Welcome to Assosa E-Commerce
      </Text>
      <Text className="text-lg text-gray-600 text-center mt-4 font-medium">
        Discover and shop for your favorite products from the comfort of your
        home.
      </Text>

      {/* Descriptions */}
      <Text className="text-lg text-gray-800 mt-8 font-semibold">
        Why Shop With Us?
      </Text>
      <Text className="text-gray-600 mt-2">
        - Wide variety of products to choose from.
      </Text>
      <Text className="text-gray-600 mt-1">
        - Affordable prices and great deals.
      </Text>
      <Text className="text-gray-600 mt-1">
        - Fast and reliable delivery services.
      </Text>

      {/* Cards Section */}
      <View className="mt-8">
        <Text className="text-lg font-semibold text-gray-800 mb-4">
          Featured Categories
        </Text>
        <View className="flex-row justify-between">
          <View className="bg-white rounded-lg shadow-md p-4 w-[48%]">
            <Image
              source={require("./../assets/images/icon.png")}
              className="w-full h-20 rounded-md mb-2"
              resizeMode="cover"
            />
            <Text className="text-center font-bold text-gray-800">
              Electronics
            </Text>
          </View>
          <View className="bg-white rounded-lg shadow-md p-4 w-[48%]">
            <Image
              source={require("./../assets/images/logo.jpg")}
              className="w-full h-20 rounded-md mb-2"
              resizeMode="cover"
            />
            <Text className="text-center font-bold text-gray-800">Fashion</Text>
          </View>
        </View>
      </View>

      {/* Get Started Button */}
      <View className="mt-12">
        <TouchableOpacity
          className="bg-primary py-4 rounded-lg shadow-md"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-center font-bold text-lg">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Index;

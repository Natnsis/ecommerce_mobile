import React, { useState } from 'react';
import { View, Text, Image, FlatList, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';

const HomeTab = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const feedbacks = [
    { id: '1', name: 'John Doe', feedback: 'Amazing service! Fast delivery and great products.' },
    { id: '2', name: 'Jane Smith', feedback: 'I love shopping here. The prices are unbeatable!' },
    { id: '3', name: 'Michael Brown', feedback: 'Great customer support and quality items.' },
  ];

  const mostBoughtProducts = [
    {
      id: '1',
      name: 'Smartphone',
      price: '$100',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '2',
      name: 'T-Shirt',
      price: '$50',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '3',
      name: 'Microwave Oven',
      price: '$200',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
  ];

  const handleSendMessage = () => {
    if (!email || !message) {
      Alert.alert('Error', 'Please fill out both fields before sending your message.');
      return;
    }
    Alert.alert('Thank You!', 'Your message has been sent.');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 px-4 py-6">
      {/* Welcome Section */}
      <View className="items-center mb-6">
        <Image
          source={require('../../assets/images/assosa.jpg')} // Replace with your actual image
          className="w-full h-40 rounded-lg mb-4"
          resizeMode="cover"
        />
        <Text className="text-3xl font-extrabold text-primary text-center mb-2">
          Welcome to Assosa E-Commerce
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          Discover the best products and services in Assosa city. Shop from the comfort of your
          home and enjoy fast delivery and excellent customer service.
        </Text>
      </View>

      {/* Positive Feedback Section */}
      <View className="mb-6">
        <Text className="text-2xl font-bold text-primary mb-4">What Our Customers Say</Text>
        <FlatList
          data={feedbacks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-lg shadow-md mb-4">
              <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
              <Text className="text-gray-600">{item.feedback}</Text>
            </View>
          )}
        />
      </View>

      {/* Most Bought Products Section */}
      <View className="mb-6">
        <Text className="text-2xl font-bold text-primary mb-4">Most Bought Products</Text>
        <FlatList
          data={mostBoughtProducts}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-lg shadow-md mr-4">
              <Image
                source={{ uri: item.image }}
                className="w-32 h-32 rounded-lg mb-2"
                resizeMode="cover"
              />
              <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
              <Text className="text-primary font-bold">{item.price}</Text>
            </View>
          )}
        />
      </View>

      {/* Contact Us Section */}
      <View className="mb-6">
        <Text className="text-2xl font-bold text-primary mb-4">Contact Us</Text>
        {/* Email Input */}
        <TextInput
          placeholder="Your Email Address"
          value={email}
          onChangeText={setEmail}
          className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
        />
        {/* Message Text Area */}
        <TextInput
          placeholder="Write your message here..."
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={6}
          className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
          style={{ textAlignVertical: 'top', height: 120 }}
        />
        {/* Send Message Button */}
        <TouchableOpacity
          onPress={handleSendMessage}
          className="bg-primary py-4 rounded-lg shadow-md"
        >
          <Text className="text-white text-center font-bold text-lg">Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeTab;
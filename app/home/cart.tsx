import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const CartTab = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Smartphone',
      price: 100,
      status: 'Not Paid',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '2',
      name: 'T-Shirt',
      price: 50,
      status: 'Not Paid',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
  ]);

  // Handle payment status
  const handlePayNow = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: 'Paid' } : item
      )
    );
  };

  return (
    <View className="flex-1 bg-gray-100 px-4 py-6">
      {/* Title */}
      <Text className="text-3xl font-extrabold text-primary text-center mb-4">Your Cart</Text>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow-md mb-4">
            {/* Product Details */}
            <View className="flex-row items-center">
              {/* Product Image */}
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-lg mr-4"
                resizeMode="cover"
              />
              {/* Product Info */}
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                <Text className="text-primary font-bold">${item.price}</Text>
                <Text
                  className={`text-sm font-medium ${
                    item.status === 'Paid' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            {/* Pay Now Button */}
            {item.status === 'Not Paid' && (
              <TouchableOpacity
                onPress={() => handlePayNow(item.id)}
                className="bg-primary py-2 px-4 rounded-lg mt-4"
              >
                <Text className="text-white text-center font-bold">Pay Now</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-600 mt-4">Your cart is empty.</Text>
        }
      />
    </View>
  );
};

export default CartTab;
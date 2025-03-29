import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Smartphone',
      category: 'Electronics',
      price: '$100',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '2',
      name: 'T-Shirt',
      category: 'Clothing',
      price: '$50',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '3',
      name: 'Microwave Oven',
      category: 'Home Appliances',
      price: '$200',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '4',
      name: 'Laptop',
      category: 'Electronics',
      price: '$150',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: '5',
      name: 'Jeans',
      category: 'Clothing',
      price: '$30',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
  ]);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-gray-100 px-4 py-6">
      {/* Title */}
      <Text className="text-3xl font-extrabold text-primary text-center mb-4">Shop</Text>

      {/* Categories Dropdown */}
      <View className="mb-4">
        <Text className="text-lg font-medium text-gray-700 mb-2">Categories</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={{ backgroundColor: 'white', borderRadius: 8, padding: 8 }}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Electronics" value="Electronics" />
          <Picker.Item label="Clothing" value="Clothing" />
          <Picker.Item label="Home Appliances" value="Home Appliances" />
        </Picker>
      </View>

      {/* Search Input */}
      <View className="mb-4">
        <TextInput
          placeholder="Search for products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="w-full bg-white p-4 rounded-lg shadow-md"
        />
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow-md mb-4 flex-row items-center">
            {/* Product Image */}
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 rounded-lg mr-4"
              resizeMode="cover"
            />
            {/* Product Details */}
            <View>
              <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
              <Text className="text-gray-600">{item.category}</Text>
              <Text className="text-primary font-bold">{item.price}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-600 mt-4">No products found.</Text>
        }
      />
    </View>
  );
};

export default SearchTab;
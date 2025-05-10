import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Image, Alert } from "react-native";

const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://10.16.202.144:3001/api/products", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      Alert.alert("Error", "Unable to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-lg text-gray-600">Loading products...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 px-4 py-6">
      {/* Title */}
      <Text className="text-3xl font-extrabold text-primary text-center mb-4">
        Shop
      </Text>

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
        keyExtractor={(item) => item.pid.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow-md mb-4 flex-row items-center">
            {/* Product Image */}
            <Image
              source={{
                uri: `http://10.16.202.144:3001/uploads/${item.image}`,
              }}
              className="w-20 h-20 rounded-lg mr-4"
              resizeMode="cover"
            />
            {/* Product Details */}
            <View>
              <Text className="text-lg font-bold text-gray-800">
                {item.pname}
              </Text>
              <Text className="text-primary font-bold">${item.price}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-600 mt-4">
            No products found.
          </Text>
        }
      />
    </View>
  );
};

export default SearchTab;

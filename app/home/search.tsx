import { Button, ButtonText } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Image, Alert } from "react-native";

const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = async (productId: string | number) => {
    try {
      const response = await fetch("http://10.16.203.90:3001/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        Alert.alert("Success", "Product added to cart!");
      } else {
        const data = await response.json();
        Alert.alert("Error", data.error || "Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      Alert.alert(
        "Error",
        "Unable to connect to the server. Please try again later."
      );
    }
  };

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://10.16.203.90:3001/api/products", {
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

  const getImageSource = (category: string) => {
    switch (category.toLowerCase()) {
      case "accessories":
        return require("./../../assets/images/Accessories.jpg");
      case "cloths":
        return require("./../../assets/images/cloths.jpg");
      case "detergents":
        return require("./../../assets/images/detergentsImg.jpg");
      case "electronics":
        return require("./../../assets/images/electronicss.jpg");
      case "food":
        return require("./../../assets/images/foodImg.jpg");
      case "luxury":
        return require("./../../assets/images/luxurys.jpg");
      case "tools":
        return require("./../../assets/images/toolss.jpg");
      default:
        return require("./../../assets/images/assosa.jpg"); // Default image
    }
  };

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
          <View className="bg-white p-4 rounded-lg shadow-md mb-4 flex-row items-center justify-between">
            <Image
              source={getImageSource(item.category)}
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

            <Button onPress={() => addToCart(item.pid)}>
              <ButtonText>Add to Cart</ButtonText>
            </Button>
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

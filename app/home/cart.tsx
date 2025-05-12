import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, Alert } from "react-native";

const CartTab = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://10.16.203.90:3001/api/cart", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      console.log("Fetched cart items:", data.cartItems);
      setCartItems(data.cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      Alert.alert(
        "Error",
        "Unable to fetch cart items. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
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

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-lg text-gray-600">Loading cart items...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 px-4 py-6">
      {/* Title */}
      <Text className="text-3xl font-extrabold text-primary text-center mb-4">
        Your Cart
      </Text>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow-md mb-4">
            {/* Product Details */}
            <View className="flex-row items-center">
              {/* Product Image */}
              <Image
                source={getImageSource(item.category)}
                className="w-20 h-20 rounded-lg mr-4"
                resizeMode="cover"
              />
              {/* Product Info */}
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">
                  {item.pname}
                </Text>
                <Text className="text-primary font-bold">${item.price}</Text>
                <Text className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-600 mt-4">
            Your cart is empty.
          </Text>
        }
      />
    </View>
  );
};

export default CartTab;

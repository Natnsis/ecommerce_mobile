import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from "react-native";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://10.16.203.90:3001/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      if (data.length === 0) {
        Alert.alert("No Products", "No products available at the moment.");
      }
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      Alert.alert("Error", "Unable to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProduct = ({ item }) => {
    if (!item.pname || !item.price || !item.category) {
      return null; // Skip rendering if required fields are missing
    }

    return (
      <View
        className="bg-white p-4 rounded-lg shadow-md m-2"
        style={{
          flex: 1,
          maxWidth: "45%",
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
        }}
      >
        <Image
          source={getImageSource(item.category)}
          style={{
            width: "100%",
            height: 120,
            borderRadius: 8,
            marginBottom: 8,
          }}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#333",
            marginBottom: 4,
          }}
        >
          {item.pname}
        </Text>
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>
          ${item.price}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#4CAF50",
            paddingVertical: 8,
            borderRadius: 5,
          }}
          onPress={() => addToCart(item.pid)}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100 px-4 py-6">
      {loading ? (
        // Loading State
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text className="text-lg text-gray-600 mt-4">
            Loading products...
          </Text>
        </View>
      ) : (
        // Main Content
        <>
          {/* Welcome Section */}
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#4CAF50",
                textAlign: "center",
              }}
            >
              Welcome to Our Store!
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#555",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Discover the best products at unbeatable prices. Browse through
              our collection and find what you need today!
            </Text>
          </View>

          {/* Product List */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
            }}
          >
            Products
          </Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.pid.toString()}
            renderItem={renderProduct}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
          />

          {/* Contact Creators Section */}
          <View
            style={{
              marginTop: 30,
              padding: 20,
              backgroundColor: "#f9f9f9",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
              }}
            >
              Contact the Creators
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#555",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Have questions or feedback? Reach out to us on our social
              platforms!
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              {/* GitHub */}
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://github.com/your-profile")
                }
                style={{ marginHorizontal: 10 }}
              >
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                  }}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              {/* LinkedIn */}
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://linkedin.com/in/your-profile")
                }
                style={{ marginHorizontal: 10 }}
              >
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                  }}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              {/* Twitter */}
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://twitter.com/your-profile")
                }
                style={{ marginHorizontal: 10 }}
              >
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
                  }}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default HomePage;

import React from "react";
import { Tabs } from "expo-router";
import { Text, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

const HomeLayout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://10.16.203.90:3001/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        Alert.alert("Success", "You have been logged out.");
        router.push("/login");
      } else {
        const data = await response.json();
        Alert.alert(
          "Error",
          data.error || "Failed to log out. Please try again."
        );
      }
    } catch (error) {
      console.error("Logout error:", error);
      Alert.alert(
        "Error",
        "Unable to connect to the server. Please try again later."
      );
    }
  };

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout} style={{ marginRight: 16 }}>
            <Text style={{ color: "red", fontWeight: "bold" }}>Logout</Text>
          </TouchableOpacity>
        ),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => <Text>🔍</Text>,
        }}
      />

      {/* Cart Tab */}
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: () => <Text>🛒</Text>,
        }}
      />

      {/* Feedback Tab */}
      <Tabs.Screen
        name="feedback"
        options={{
          tabBarLabel: "Feedback",
          tabBarIcon: () => <Text>💬</Text>,
        }}
      />

      {/* Account Tab */}
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "Account",
          tabBarIcon: () => <Text>👤</Text>,
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;

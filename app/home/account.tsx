import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const AccountTab = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://10.16.203.90:3001/api/customers", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error("Error fetching user details:", error);
        Alert.alert(
          "Error",
          "Unable to fetch user details. Please try again later."
        );
      }
    };

    fetchUserDetails();
  }, []);

  const handleSaveChanges = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill out all fields before saving.");
      return;
    }

    try {
      const response = await fetch("http://10.16.203.90:3001/api/customers", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        Alert.alert("Success", "Your account details have been updated.");
        setIsEditing(false);
        setPassword("");
      } else {
        const data = await response.json();
        Alert.alert("Error", data.error || "Failed to update account details.");
      }
    } catch (error) {
      console.error("Error updating account details:", error);
      Alert.alert(
        "Error",
        "Unable to connect to the server. Please try again later."
      );
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setPassword("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9", padding: 16 }}>
      {/* Title */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Account Settings
      </Text>

      {/* Username Field */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>
        Username
      </Text>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        editable={isEditing}
        style={{
          backgroundColor: isEditing ? "#fff" : "#f0f0f0",
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#ddd",
          marginBottom: 16,
          color: isEditing ? "#000" : "#aaa",
        }}
      />

      {/* Password Field */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>
        Password
      </Text>
      <TextInput
        placeholder="Enter your new password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={isEditing}
        style={{
          backgroundColor: isEditing ? "#fff" : "#f0f0f0",
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#ddd",
          marginBottom: 24,
          color: isEditing ? "#000" : "#aaa",
        }}
      />

      {/* Buttons */}
      {isEditing ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={handleSaveChanges}
            style={{
              backgroundColor: "#4CAF50",
              padding: 16,
              borderRadius: 8,
              flex: 1,
              marginRight: 8,
            }}
          >
            <Text
              style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
            >
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCancel}
            style={{
              backgroundColor: "#ccc",
              padding: 16,
              borderRadius: 8,
              flex: 1,
              marginLeft: 8,
            }}
          >
            <Text
              style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setIsEditing(true)}
          style={{
            backgroundColor: "#4CAF50",
            padding: 16,
            borderRadius: 8,
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            Edit Account
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AccountTab;

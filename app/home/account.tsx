import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const AccountTab = () => {
  const [username, setUsername] = useState('current_username'); // Replace with actual username
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveChanges = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill out all fields before saving.');
      return;
    }
    Alert.alert('Success', 'Your account details have been updated.');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setPassword(''); // Clear password field
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 py-8">
      {/* Title */}
      <Text className="text-3xl font-extrabold text-primary text-center mb-6">Account</Text>

      {/* Username Field */}
      <Text className="text-lg font-medium text-gray-700 mb-2">Username</Text>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        editable={isEditing}
        className={`w-full bg-white p-4 rounded-lg shadow-md mb-4 ${
          isEditing ? 'text-gray-800' : 'text-gray-400'
        }`}
      />

      {/* Password Field */}
      <Text className="text-lg font-medium text-gray-700 mb-2">Password</Text>
      <TextInput
        placeholder="Enter your new password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={isEditing}
        className={`w-full bg-white p-4 rounded-lg shadow-md mb-6 ${
          isEditing ? 'text-gray-800' : 'text-gray-400'
        }`}
      />

      {/* Buttons */}
      {isEditing ? (
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={handleSaveChanges}
            className="bg-primary py-4 px-6 rounded-lg shadow-md flex-1 mr-2"
          >
            <Text className="text-white text-center font-bold text-lg">Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCancel}
            className="bg-gray-400 py-4 px-6 rounded-lg shadow-md flex-1 ml-2"
          >
            <Text className="text-white text-center font-bold text-lg">Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setIsEditing(true)}
          className="bg-primary py-4 rounded-lg shadow-md"
        >
          <Text className="text-white text-center font-bold text-lg">Edit Account</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AccountTab;
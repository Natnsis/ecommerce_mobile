import { Button, ButtonText } from "@/components/ui/button";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const FeedbackTab = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!topic || !description) {
      Alert.alert("Error", "Please fill out all fields before submitting.");
      return;
    }
    Alert.alert("Thank You!", "Your feedback has been submitted.");
    setTopic("");
    setDescription("");
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 py-8">
      <Text className="text-3xl font-extrabold text-primary text-center mb-6">
        Feedback
      </Text>

      <TextInput
        placeholder="Topic"
        value={topic}
        onChangeText={setTopic}
        className="w-full bg-white p-4 rounded-lg shadow-md mb-4"
      />

      <TextInput
        placeholder="Write your feedback here..."
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={10}
        className="w-full bg-white p-4 rounded-lg shadow-md mb-6 text-gray-800"
        style={{ textAlignVertical: "top", height: 150 }}
      />

      <Button onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </View>
  );
};

export default FeedbackTab;

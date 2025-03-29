import React from 'react';
import { Tabs } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const HomeLayout = () => {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push('/login')} // Navigate to the login page on logout
            style={{ marginRight: 16 }}
          >
            <Text style={{ color: 'red', fontWeight: 'bold' }}>Logout</Text>
          </TouchableOpacity>
        ),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Text>🔍</Text>,
        }}
      />

      {/* Cart Tab */}
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => <Text>🛒</Text>,
        }}
      />

      {/* Feedback Tab */}
      <Tabs.Screen
        name="feedback"
        options={{
          tabBarLabel: 'Feedback',
          tabBarIcon: () => <Text>💬</Text>,
        }}
      />

      {/* Account Tab */}
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Text>👤</Text>,
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
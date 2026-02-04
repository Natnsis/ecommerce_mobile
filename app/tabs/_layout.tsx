import { Tabs } from "expo-router";
import {
  HomeIcon,
  ShoppingCart,
  ListChevronsDownUpIcon,
  UserIcon,
} from "lucide-react-native";
import { Platform, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "#94A3B8",

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,
        },

        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: Platform.OS === "ios" ? 20 : 12,
          height: Platform.OS === "ios" ? 78 : 68,
          borderRadius: 28,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,

          // iOS shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.08,
          shadowRadius: 20,

          // Android shadow
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <HomeIcon
                size={focused ? 26 : 24}
                strokeWidth={focused ? 2.6 : 2}
                color={color}
              />
            </TabIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <ShoppingCart
                size={focused ? 26 : 24}
                strokeWidth={focused ? 2.6 : 2}
                color={color}
              />
            </TabIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <ListChevronsDownUpIcon
                size={focused ? 26 : 24}
                strokeWidth={focused ? 2.6 : 2}
                color={color}
              />
            </TabIcon>
          ),
        }}
      />

    </Tabs>
  );
}

function TabIcon({
  focused,
  children,
}: {
  focused: boolean;
  children: React.ReactNode;
}) {
  return (
    <View
      className={`items-center justify-center ${focused ? "-mt-1 scale-110" : "scale-100"
        }`}
    >
      {children}
    </View>
  );
}

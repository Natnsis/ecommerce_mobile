import React from "react";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";

const Index = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white px-5">
      <View className="justify-center items-center mt-8">
        <Image
          source={require("./../assets/images/assosa.jpg")}
          alt="Welcome Image"
          className="w-full h-52 mb-6 rounded-lg shadow-md"
          resizeMode="cover"
        />
      </View>
      <Heading size="2xl" className="text-center w-full">
        Welcome to Assosa E-Commerce
      </Heading>
      <Text size="sm" className="text-center">
        Discover and shop for your favorite products from the comfort of your
        home.
      </Text>
      <Card variant="outline" className="mt-5">
        <Text size="lg">Why Shop With Us?</Text>
        <Text size="md">- Wide variety of products to choose from.</Text>
        <Text size="md">- Affordable prices and great deals.</Text>
        <Text size="md">- Fast and reliable delivery services.</Text>
      </Card>

      <View className="mt-8">
        <Text size="xl">Featured Categories</Text>
        <View className="gap-5">
          <Card size="md" variant="filled" className="flex-row gap-1 w-full">
            <View className="w-1/3 bg-white p-2 rounded-md">
              <Image
                size="md"
                source={require("./../assets/images/cloths.jpg")}
                alt="image"
                resizeMode="cover"
                className="w-full"
              />
              <Heading size="sm" className="text-center">
                Cloths
              </Heading>
            </View>
            <View className="w-1/3 bg-white p-2 rounded-md">
              <Image
                size="md"
                source={require("./../assets/images/Accessories.jpg")}
                alt="image"
                resizeMode="cover"
                className="w-full"
              />
              <Heading size="sm" className="text-center">
                Accessorie
              </Heading>
            </View>
            <View className="w-1/3 bg-white p-2 rounded-md">
              <Image
                size="md"
                source={require("./../assets/images/detergentsImg.jpg")}
                alt="image"
                resizeMode="cover"
                className="w-full"
              />
              <Heading size="sm" className="text-center">
                Detergents
              </Heading>
            </View>
          </Card>

          <Card size="md" variant="filled" className="flex-row gap-1 w-full">
            <View className="w-1/3 bg-white p-2 rounded-md">
              <Image
                size="md"
                source={require("./../assets/images/electronicss.jpg")}
                alt="image"
                resizeMode="cover"
                className="w-full"
              />
              <Heading size="sm" className="text-center">
                Electronics
              </Heading>
            </View>
            <View className="w-1/3 bg-white p-2 rounded-md">
              <Image
                size="md"
                source={require("./../assets/images/foodImg.jpg")}
                alt="image"
                resizeMode="cover"
                className="w-full"
              />
              <Heading size="sm" className="text-center">
                Food
              </Heading>
            </View>
            <View className="w-1/3 bg-white p-2 rounded-md">
              <Image
                size="md"
                source={require("./../assets/images/luxurys.jpg")}
                alt="image"
                resizeMode="cover"
                className="w-full"
              />
              <Heading size="sm" className="text-center">
                Luxury
              </Heading>
            </View>
          </Card>

          <Card size="md" variant="filled" className="flex-row gap-1 w-full">
            <View className="w-1/3 bg-white p-2 rounded-md">
              <Image
                size="md"
                source={require("./../assets/images/toolss.jpg")}
                alt="image"
                resizeMode="cover"
                className="w-full"
              />
              <Heading size="sm" className="text-center">
                Tools
              </Heading>
            </View>
          </Card>
        </View>
      </View>

      <Button
        onPress={() => router.push("/login")}
        variant="solid"
        className="mt-12 w-full mb-5"
      >
        <ButtonText>Get Started</ButtonText>
      </Button>
    </ScrollView>
  );
};

export default Index;

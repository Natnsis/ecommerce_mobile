import { products } from "@/assets/constants/products"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { View, FlatList, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const cart = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <View className="flex-row w-full mt-5 justify-between">
          <View className="w-[75%]">
            <Text className="pl-1 text-lg">Products in your cart</Text>
          </View>
          <View className="mr-2">
            <Button
              size="sm"
              className="bg-[#E7000A]"
            >
              <Text className="text-xs">Checkout</Text>
            </Button>
          </View>
        </View>

        <View className="mt-5">
          <FlatList
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="border px-5 mb-2">
                <View className="flex-row justify-between items-center">
                  <View>
                    <Image
                      source={item.image}
                      className="h-[20vh] w-[20vw]"
                      resizeMode="cover" />
                  </View>

                  <View className="flex-1 mx-3">
                    <Text className="font-medium">{item.name}</Text>
                    <Text className="text-green-600">ETB {item.price}</Text>
                    {item.marketPrice && (
                      <Text className="text-gray-500 line-through">
                        ETB {item.marketPrice}
                      </Text>
                    )}
                  </View>

                  <View>
                    <Button>
                      <Text>Delete</Text>
                    </Button>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default cart

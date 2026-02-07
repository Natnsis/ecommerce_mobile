import { products } from "@/assets/constants/products"
import Header from "@/components/Header"
import { Text } from "@/components/ui/text"
import { Button } from "@/components/ui/button"
import { FlatList, Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const cart = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
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

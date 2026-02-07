import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView, View, FlatList, Image, Pressable, Dimensions } from "react-native"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Search } from "lucide-react-native";
import { products } from "@/assets/constants/products";
import { useRouter } from "expo-router";
import { Separator } from "@/components/ui/separator";

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const spacing = 12;

const Home = () => {
  const itemWidth = (screenWidth - spacing * (numColumns + 1)) / numColumns;
  const router = useRouter()

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View className="pt-3 flex-row justify-between px-3">
        <Avatar alt="Zach Nugent's Avatar" className="w-[15%]">
          <AvatarImage source={{ uri: 'https://github.com/mrzachnugent.png' }} />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar>
        <View className="w-[70%]">
          <Text className="text-center text-sm">Hello, Natnael</Text>
          <Text className="text-center text-xs text-gray-400">Today 25,Nov</Text>
        </View>
        <View className="w-15%">
          <ThemeToggle />
        </View>
      </View>

      {/* search part */}
      <View className="px-5 mt-5 flex-row w-[100%] items-center gap-2 justify-center">
        <Input
          className="w-[80%] rounded-full border-[#E7000A]"
          placeholder="search here"
        />
        <Button size="icon" className="bg-[#E7000A]">
          <Icon as={Search} className="text-primary-foreground" />
        </Button>
      </View>

      {/* filter part */}
      <View className="mt-5 px-3 gap-2">
        <Text className="text-xs">Filter by:</Text>
        <ScrollView horizontal >
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2] bg-[#E7000A]">
              <Text className="xs">
                All
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Electronics
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Fasion
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Home & Living
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Sport
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Stationary
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Toys
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Health & Wellness
              </Text>
            </Button>
          </View>
          <View className="pr-1">
            <Button
              size="sm"
              className="rounded-full h-[1/2]"
              variant="outline">
              <Text className="xs">
                Automotives
              </Text>
            </Button>
          </View>
        </ScrollView>
      </View>

      <View className="mt-5">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={{ padding: spacing }}
          columnWrapperStyle={{ justifyContent: "space-between", marginBottom: spacing }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`/`)}
              className="rounded-xl p-3 border dark:border-white"
              style={{ width: itemWidth }}
            >
              <Image
                source={item.image}
                className="w-full h-32 rounded-lg"
                resizeMode="contain"
              />
              <Text className="mt-2 font-semibold text-sm text-[#E7000A]">
                {item.name}
              </Text>
              <View className="flex-row items-center gap-2 mt-1">
                <Text className="font-bold">${item.price}</Text>
                <Text className="text-gray-400 line-through text-xs">
                  ${item.marketPrice}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView >
  )
}

export default Home

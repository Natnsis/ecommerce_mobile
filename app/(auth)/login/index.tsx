import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { Icon } from "@/components/ui/icon"
import { ArrowLeft } from "lucide-react-native"
import { View, Image, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SafeAreaView } from "react-native-safe-area-context"

const Login = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ backgroundColor: "#be2f1f", height: '100%' }}>
      <View className="px-4 pt-2">
        <Button
          size="icon"
          variant="ghost"
          className="w-10 h-10 rounded-full bg-muted/30"
          onPress={() => router.push("/")}
        >
          <Icon as={ArrowLeft} className="text-foreground" size={20} />
        </Button>
      </View>

      <View className="flex-col gap-2">
        <View className="flex-row justify-center">
          <Image
            source={require("@/assets/images/gebeya-logo.png")}
            style={{ width: 112, height: 112 }}
            resizeMode="contain"
          />
        </View>

        <View className="w-[100%] flex-col items-center">
          <Text className="text-2xl w-[100%] text-center">
            Welcome Back
          </Text>
          <Text className="text-xs text-center w-[70%] text-gray-300">
            Log in to check your cart, track orders, and discover the latest products
          </Text>
        </View>

        <View className="flex-col gap-2 px-5 mt-5">
          <View className="">
            <Input
              textContentType="emailAddress"
              placeholder="enter your email"
            />
          </View>

          <View className="">
            <Input
              textContentType="password"
              secureTextEntry
              placeholder="••••••••"
            />
          </View>

          <Button
            onPress={() => router.push("/tabs/home")}
          >
            <Text className="text-xs font-bold">
              Login
            </Text>
          </Button>
        </View>

        <View className="flex-row items-center px-5 my-5">
          <Separator className="flex-1 bg-border" />
          <Text className="mx-4 text-muted-foreground text-sm">or </Text>
          <Separator className="flex-1 bg-border" />
        </View>

        <View className="px-5">
          <Button
            variant="outline"
            onPress={() => router.push("/")}
          >
            <Image
              source={require("@/assets/images/google.png")}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
            <Text>
              Sign in with Google
            </Text>
          </Button>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-sm">
            Don't have an account?{" "}
            <Text
              className="text-primary font-medium underline text-sm"
              onPress={() => router.push("/register")}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

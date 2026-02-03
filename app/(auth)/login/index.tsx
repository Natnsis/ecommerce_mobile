import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { Icon } from "@/components/ui/icon"
import { ArrowLeft } from "lucide-react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Image, Dimensions } from "react-native"
import { useRouter } from "expo-router";
import { Input } from "@/components/ui/input"

const Login = () => {
  const { height } = Dimensions.get('window');
  const router = useRouter()
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#F0F0F0",
          height: height,
          width: '100%',
          padding: 5
        }}>
        <Button
          size="icon"
          variant="link"
          onPress={() => router.push("/")}
        >
          <Icon as={ArrowLeft} />
        </Button>
        <View className="flex-row justify-center">
          <Image
            source={require("@/assets/images/gebeya-logo.png")}
            style={{ width: "15%", height: height * 0.15 }}
          />
        </View>
        <View>
          <Text
            className="text-center text-3xl font-bold">
            Welcome Back
          </Text>
          <View className="flex-row items-center justify-center" >
            <Text className="text-xs text-center italic" style={{ width: '80%' }}>
              Log in to check your cart, track your orders, and discover the latest products
            </Text>
          </View>
          <View>
            <Input />
            <Input />
          </View>
        </View>
      </View >
    </SafeAreaView >
  )
}

export default Login 

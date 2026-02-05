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
    <SafeAreaView>
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

      <View >
        <View>
          <Image
            source={require("@/assets/images/gebeya-logo.png")}
            style={{ width: 112, height: 112 }}
            resizeMode="contain"
          />
        </View>

        <View>
          <Text className="text-3xl font-bold text-foreground text-center mb-3">
            Welcome Back
          </Text>
          <Text className="text-base text-muted-foreground text-center leading-relaxed max-w-sm">
            Log in to check your cart, track orders, and discover the latest products
          </Text>
        </View>

        <View>
          <View>
            <Text>Email</Text>
            <Input
              textContentType="emailAddress"
              placeholder="your@email.com"
            />
          </View>

          <View className="gap-2">
            <Text>Password</Text>
            <Input
              textContentType="password"
              secureTextEntry
              placeholder="••••••••"
            />
          </View>
        </View>

        <Button
          onPress={() => router.push("/tabs/home")}
        >
          <Text>
            Log In
          </Text>
        </Button>

        <View className="flex-row items-center my-6">
          <Separator className="flex-1 bg-border" />
          <Text className="mx-4 text-muted-foreground text-sm">or </Text>
          <Separator className="flex-1 bg-border" />
        </View>

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

        <View >
          <Text>
            Don't have an account?{" "}
            <Text
              className="text-primary font-medium underline"
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

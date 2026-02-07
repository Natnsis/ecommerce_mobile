import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { Icon } from "@/components/ui/icon"
import { ArrowLeft } from "lucide-react-native"
import { View, Image, useColorScheme } from "react-native"
import { useRouter } from "expo-router"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"

const Register = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const isDark = colorScheme === "dark"

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <LinearGradient
        colors={["#E7000A", "#192f6a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View className="px-4 pt-2">
          <Button
            size="icon"
            variant="ghost"
            className="w-10 h-10 rounded-full bg-muted/30"
            onPress={() => router.push("/")}
          >
            <Icon
              as={ArrowLeft}
              className={isDark ? "text-white" : "text-black"}
              size={20}
            />
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
            <Text
              className={`text-2xl w-[90%] text-center ${isDark ? "text-white" : "text-black"}`}
            >
              Join us and start Shopping
            </Text>
            <Text
              className={`text-xs text-center w-[70%] ${isDark ? "text-gray-300" : "text-gray-400"}`}
            >
              Create an account to track your orders, and get exclusive early access to our seasonal drops.
            </Text>
          </View>

          <View className="flex-col gap-2 px-5">
            <View className="gap-1">
              <Label
                htmlFor="email"
                className={isDark ? "text-white" : "text-black"}
              >
                Email
              </Label>
              <Input
                textContentType="emailAddress"
                placeholder="enter your email"
                id="email"
              />
            </View>

            <View className="gap-1">
              <Label
                htmlFor="password"
                className={isDark ? "text-white" : "text-black"}
              >
                Password
              </Label>
              <Input
                id="password"
                textContentType="password"
                secureTextEntry
                placeholder="••••••••"
              />
            </View>

            <Button
              onPress={() => router.push("/tabs/home")}
            >
              <Text className={isDark ? "text-xs font-bold text-black" : "text-xs font-bold text-white"} >
                Register
              </Text>
            </Button>
          </View>

          <View className="flex-row items-center px-5 my-5">
            <Separator className="flex-1 bg-border" />
            <Text className={`mx-4 text-sm w-[5vw] ${isDark ? "text-gray-300" : "text-muted-foreground"}`}>or</Text>
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
              <Text className={isDark ? "text-white" : "text-black"}>
                Sign in with Google
              </Text>
            </Button>
          </View>

          <View className="flex-row justify-center">
            <Text
              className={`text-xs w-[100%] text-center ${isDark ? "text-white" : "text-black"}`}
            >
              Already have an account?{" "}
              <Text
                className={`text-primary font-medium underline text-xs ${isDark ? "text-white" : "text-black"}`}
                onPress={() => router.push("/login")}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Register

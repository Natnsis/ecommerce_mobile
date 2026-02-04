import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { Icon } from "@/components/ui/icon"
import { ArrowLeft } from "lucide-react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { useRouter } from "expo-router"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const Register = () => {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
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

          <View className="flex-1 justify-center px-6 py-4">
            <View className="items-center">
              <Image
                source={require("@/assets/images/gebeya-logo.png")}
                style={{ width: 112, height: 112 }}
                resizeMode="contain"
              />
            </View>

            {/* Welcome text */}
            <View className="mb-10 items-center">
              <Text className="text-3xl font-bold text-foreground text-center mb-3">
                Join us and start shoping
              </Text>
              <Text className="text-base text-muted-foreground text-center leading-relaxed max-w-sm">
                Create an account to track your orders, save items to your wishlist, and get exclusive early access to our seasonal drops.
              </Text>
            </View>

            {/* Form fields */}
            <View className="gap-5 mb-7">
              <View className="gap-2">
                <Text className="text-sm font-medium text-foreground">Email</Text>
                <Input
                  textContentType="emailAddress"
                  className="h-14 rounded-xl border border-input bg-background px-4 text-base"
                  placeholder="your@email.com"
                />
              </View>

              <View className="gap-2">
                <Text className="text-sm font-medium text-foreground">Password</Text>
                <Input
                  textContentType="password"
                  secureTextEntry
                  className="h-14 rounded-xl border border-input bg-background px-4 text-base"
                  placeholder="••••••••"
                />
              </View>
            </View>

            <Button className="h-14 rounded-xl bg-primary mb-8">
              <Text className="text-lg font-semibold text-primary-foreground">
                Log In
              </Text>
            </Button>

            <View className="flex-row items-center my-6">
              <Separator className="flex-1 bg-border" />
              <Text className="mx-4 text-muted-foreground text-sm">or continue with</Text>
              <Separator className="flex-1 bg-border" />
            </View>

            <Button
              variant="outline"
              className="h-14 rounded-xl flex-row gap-3 border-border mb-6"
              onPress={() => {/* TODO: Add Google auth */ }}
            >
              <Image
                source={require("@/assets/images/google.png")}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
              <Text className="text-base font-medium text-foreground">
                Sign in with Google
              </Text>
            </Button>

            <View className="items-center mt-2">
              <Text className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Text
                  className="text-primary font-medium underline"
                  onPress={() => router.push("/login")}
                >
                  Sign in
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Register 

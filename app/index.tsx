import { SafeAreaProvider } from "react-native-safe-area-context"
import { ImageBackground, Dimensions, View } from "react-native"
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ChevronRight } from 'lucide-react-native';

const index = () => {
  const { height } = Dimensions.get('window');
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require('@/assets/images/landing.png')}
        style={{ width: '100%', height: height }}
      >
        <View className="w-full h-full flex flex-col justify-end p-5 gap-2">
          <Text variant="h1" className="text-white">Shop Smart. Live Better.</Text>
          <Text
            variant="p"
            className="text-sm text-white text-center px-10">
            Discover the latest products at unbeatable prices. From everyday essentials to exclusive finds, everything you love is just a tap away.
          </Text>
          <Button className="rounded-full">
            <Icon as={ChevronRight} className="text-primary-foreground" />
            <Text>Get Started</Text>
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  )
}

export default index

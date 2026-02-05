import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ImageBackground, Dimensions, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require('@/assets/images/landing.png')}
        style={{ width: '100%' }}>
        <View className="flex h-full w-full flex-col justify-end gap-2 p-5">
          <Text variant="h1" className="text-white">
            Shop Smart. Live Better.
          </Text>
          <Text variant="p" className="px-10 text-center text-sm text-white">
            Discover the latest products at unbeatable prices. From everyday essentials to exclusive
            finds, everything you love is just a tap away.
          </Text>
          <Button className="rounded-full" onPress={() => router.push('/login')}>
            <Icon as={ChevronRight} className="text-primary-foreground" />
            <Text>Get Started</Text>
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

export default index;

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { View } from 'react-native';
import { ThemeToggle } from "@/components/ThemeToggle";
import { Text } from '@/components/ui/text';

const Header = () => {
  return (
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
  )
}

export default Header

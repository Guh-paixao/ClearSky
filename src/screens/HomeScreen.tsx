import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';
import { Bolt, CloudUpload, Leaf, Plus, Wind } from "lucide-react-native";
import LottieView from "lottie-react-native";
import HorizontalScroll from "@/components/WeatherHorizontal";

import BG from '@/assets/gifs/sun_tomorrow_lake.gif';
import Sun from '@/assets/animations/sun.json';
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type HomeScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {

    return (
        <View className="flex-1 justify-center items-center bg-black">
            <StatusBar style="auto" />
            <SafeAreaView>
                <View className="flex-1 w-screen">
                    <View className="flex-row justify-between items-center m-6">
                        <View>
                            <Text className="font-nunito_semi_bold text-lg text-slate-100">01, <Text className="font-nunito_light text-slate-300">Jun 2024</Text></Text>
                            <Text className="font-nunito_semi_bold text-2xl text-slate-100">Castanhal, <Text className="font-nunito_light text-slate-300">Pará</Text></Text>
                        </View>
                        <View className="flex-row gap-6 justify-center items-center">
                            <TouchableOpacity onPress={() => navigation.navigate("SearchCity")}>
                                <Plus color="#F5F5F5" size={32} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Config")}>
                                <Bolt color="#F5F5F5" size={28} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex-row justify-center items-center gap-2">
                        <CloudUpload color="#A1A1AA" size={16} />
                        <Text className="font-nunito_light text-zinc-400 text-sm">Updated just now...</Text>
                    </View>

                    <View className="items-center">
                        <LottieView
                            source={Sun}
                            autoPlay
                            speed={0.1}
                            style={{
                                width: "50%",
                                height: "50%",
                            }}
                        />

                        <View className="items-center -mt-6">
                            <View className="flex-row justify-center">
                                <Text className=" text-slate-50 font-light text-9xl">27</Text>
                                <Text className=" text-slate-100 font-nunito_light text-4xl">°C</Text>
                            </View>
                            <Text className="text-orange-300 font-nunito_light text-2xl -mt-5">Sunny <Text className="font-nunito_regular">29°/31°</Text></Text>
                        </View>

                        <View className="mt-6 flex-row justify-center items-center gap-8">
                            <TouchableOpacity activeOpacity={0.5} className="flex-row justify-center items-center bg-zinc-400 py-2 px-3 rounded-full gap-2 opacity-70">
                                <Leaf color="#4ADE80" size={14} />
                                <Text className="font-nunito_semi_bold text-green-400">IQA 21</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} className="flex-row justify-center items-center bg-zinc-400 py-2 px-3 rounded-full gap-2 opacity-70">
                                <Wind color="#67E8F9" size={16} />
                                <Text className="font-nunito_semi_bold text-cyan-300">Wind 16</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <HorizontalScroll />

                </View >
            </SafeAreaView >
            <Image source={BG} autoplay contentFit="cover" style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1, opacity: 0.8 }} />
        </View >
    )
}
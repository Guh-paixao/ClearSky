import { ScrollView, View, Text } from "react-native";
import { CloudLightning, CloudRain, CloudSun, Cloudy, SunMedium } from "lucide-react-native";


export default function HorizontalScroll() {
    return (
        <View className="-mt-6">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View className="flex-row gap-6 px-6">
                    <View className="justify-center items-center gap-2">
                        <Text className="text-slate-300 font-nunito_light">Tuesday</Text>
                        <View className="flex-col justify-center items-center bg-zinc-500 w-28 h-32 rounded-2xl opacity-70">
                            <Cloudy color="#D9D9D9" size={32} />
                            <Text className="font-nunito_light text-slate-200">Cloudy</Text>
                            <Text className="font-nunito_light text-slate-300">29°</Text>
                        </View>
                    </View>

                    <View className="justify-center items-center gap-2">
                        <Text className="text-slate-300 font-nunito_light">Wednesday</Text>
                        <View className="flex-col justify-center items-center bg-zinc-500 w-28 h-32 rounded-2xl opacity-70">
                            <SunMedium color="#FFD700" size={32} />
                            <Text className="font-nunito_light text-yellow-300">Sunny</Text>
                            <Text className="font-nunito_light text-slate-300">30°</Text>
                        </View>
                    </View>

                    <View className="justify-center items-center gap-2">
                        <Text className="text-slate-300 font-nunito_light">Thursday</Text>
                        <View className="flex-col justify-center items-center bg-zinc-500 w-28 h-32 rounded-2xl opacity-70">
                            <CloudRain color="#38BDF8" size={32} />
                            <Text className="font-nunito_light text-sky-300">Rain</Text>
                            <Text className="font-nunito_light text-slate-300">28°</Text>
                        </View>
                    </View>

                    <View className="justify-center items-center gap-2">
                        <Text className="text-slate-300 font-nunito_light">Friday</Text>
                        <View className="flex-col justify-center items-center bg-zinc-500 w-28 h-32 rounded-2xl opacity-70">
                            <CloudLightning color="#A5B4FC" size={32} />
                            <Text className="font-nunito_light text-indigo-300">Storm</Text>
                            <Text className="font-nunito_light text-slate-300">30°</Text>
                        </View>
                    </View>

                    <View className="justify-center items-center gap-2">
                        <Text className="text-slate-300 font-nunito_light">Saturday</Text>
                        <View className="flex-col justify-center items-center bg-zinc-500 w-28 h-32 rounded-2xl opacity-70">
                            <CloudSun color="#FFD700" size={32} />
                            <Text className="font-nunito_light text-yellow-300">Sunny</Text>
                            <Text className="font-nunito_light text-slate-300">29°</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
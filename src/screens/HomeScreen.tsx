import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';
import { Bolt, CloudDownload, Leaf, Plus, Wind } from "lucide-react-native";
import LottieView from "lottie-react-native";
import HorizontalScroll from "@/components/WeatherHorizontal";

import Sun from '@/assets/animations/sun.json';
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import currentWeather from "@/api/current";
import { ReactNode, useEffect, useRef, useState } from "react";
import SelectBGWeather from "@/components/SelectorBGWeather";

import SkeletonWeatherBG from '@/assets/gifs/sun_tomorrow_lake.gif';


type HomeScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

type dateProps = {
    day: string;
    month: string;
    year: string;
}


export default function HomeScreen({ navigation }: HomeScreenProps) {
    const { dataCurrent, isLoading, refetch, isRefetching } = currentWeather();
    const [BG, setBG] = useState<ReactNode>();
    const [weatherBG, setWeatherBG] = useState<any>(undefined);
    const [updated, setUpdated] = useState<boolean>();
    const [date, setDate] = useState<dateProps>();
    const [localTime, setLocalTime] = useState<number>(new Date().getHours());
    const isFirstRender = useRef(true);

    useEffect(() => {
        setDate({
            day: new Date().toLocaleDateString("en-US", { day: "numeric" }),
            month: new Date().toLocaleDateString("en-US", { month: "short" }),
            year: new Date().toLocaleDateString("en-US", { year: "numeric" }),
        });

        setBackground();
    }, [dataCurrent]);


    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setBackground();
        if (isRefetching) setUpdated(true);
        setTimeout(() => setUpdated(false), 5000);
    }, [isRefetching]);



    async function setBackground() {
        let bg = await SelectBGWeather({ localTime: localTime as number, currentWeather: dataCurrent?.current?.condition?.text as string })

        setBG(
            <Image
                source={bg}
                autoplay
                contentFit="cover"
                style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1, opacity: 0.6 }}
            />
        );

        setWeatherBG(bg);
    }


    return (
        weatherBG ?
            <View className="flex-1 justify-center items-center bg-black">
                <StatusBar style="auto" />
                <SafeAreaView>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefetching}
                                onRefresh={refetch}
                            />
                        }
                    >
                        <View className="flex-1 justify-between  h-screen">
                            <View>
                                <View className="flex-row justify-between items-center m-6">
                                    <View>
                                        <Text className="font-nunito_semi_bold text-lg text-slate-100">{date?.day}, <Text className="font-nunito_light text-slate-300">{date?.month} {date?.year}</Text></Text>
                                        <Text className="font-nunito_semi_bold text-2xl text-slate-100">{dataCurrent?.location.name}, <Text className="font-nunito_light text-slate-300">{dataCurrent?.location.region}</Text></Text>
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

                                {updated &&
                                    <View className="flex-row justify-center items-center gap-2">
                                        <CloudDownload color="#A1A1AA" size={16} />
                                        <Text className="font-nunito_light text-zinc-400 text-sm">Updated just now...</Text>
                                    </View>}
                            </View>

                            <View className="gap-16 items-center justify-center">
                                <View className="items-center">
                                    <View className="flex-row justify-center">
                                        <Text className=" text-slate-50 font-light text-9xl">{dataCurrent?.current?.temp_c.toFixed(0)}</Text>
                                        <Text className=" text-slate-100 font-nunito_light text-4xl">°C</Text>
                                    </View>
                                    <Text className="text-orange-400 font-nunito_light text-2xl -mt-5">{dataCurrent?.current?.condition?.text}</Text>
                                </View>

                                <View className="mt-6 flex-row justify-center items-center gap-8">
                                    <TouchableOpacity activeOpacity={0.5} className="flex-row justify-center items-center bg-zinc-400 py-2 px-3 rounded-full gap-2 opacity-70">
                                        <Leaf color="#4ADE80" size={14} />
                                        <Text className="font-nunito_semi_bold text-green-400">IQA 20</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} className="flex-row justify-center items-center bg-zinc-400 py-2 px-3 rounded-full gap-2 opacity-70">
                                        <Wind color="#67E8F9" size={16} />
                                        <Text className="font-nunito_semi_bold text-cyan-300">Wind 16</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <HorizontalScroll />
                        </View>

                    </ScrollView>
                </SafeAreaView>
                {BG}
            </View>

            :

            <View className="flex-1 bg-black">
                <StatusBar style="auto" />
                <Image
                    source={SkeletonWeatherBG}
                    autoplay
                    contentFit="cover"
                    blurRadius={10}
                    style={{ width: "100%", height: "100%" }}
                />
            </View>
    )
}
import CitiesList from "@/components/CitiesList";
import { StatusBar } from "expo-status-bar";
import { ArrowBigLeft, ArrowLeft, Search } from "lucide-react-native";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function SearchCityScreen() {
    return (
        <View className="flex-1 bg-slate-950 gap-8">
            <View className="mt-16 px-6 gap-8">
                <ArrowLeft size={32} color='#FFF' />
                <Text className="text-white text-3xl self-center font-nunito_semi_bold mt-4">Search City</Text>
            </View>

            <View className="flex-row items-center px-4 gap-0 bg-slate-800 rounded-s-full mx-8 rounded-full">
                <Search size={24} color='#D9D9D9' />
                <TextInput className="bg-slate-800 text-white px-4 py-3 placeholder:text-gray-300" placeholder="Search City" />
            </View>

            <CitiesList />
        </View>
    )
}
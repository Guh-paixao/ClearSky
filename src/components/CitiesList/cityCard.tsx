import currentWeather from "@/api/current";
import { TouchableOpacity, Text } from "react-native";


export default function CityCard({ city }: { city: string }) {
    const { dataCurrent, isLoading, refetch, isRefetching } = currentWeather();
    
    return (
        <TouchableOpacity className="py-8 px-4 mx-8 rounded-3xl bg-sky-400">
            <Text className="text-white font-nunito_regular text-xl">{city}</Text>
            
        </TouchableOpacity>
    )
}
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { currentWeatherType } from "@/types/weatherTypes";
import { AxiosPromise } from "axios";

async function getCurrentWeather(): AxiosPromise<currentWeatherType> {
    const response = await api.get<currentWeatherType>("/current.json", {
        params: {
            q: "Castanhal",
            lang: "pt",
            key: process.env.EXPO_PUBLIC_API_KEY,
            // aqi: "yes",
        },
    });
    return response;
}

export default function currentWeather() {
    const query = useQuery({
        queryFn: getCurrentWeather,
        queryKey: ["currentWeather"],
    });

    return query;
}
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { currentWeatherType } from "@/types/weatherTypes";
import { AxiosPromise } from "axios";

type WeatherType = {
    city: string;
    lang: string;
    AirQuality?: boolean;
}

async function getCurrentWeather({ city, lang, AirQuality }: WeatherType = { city: "Castanhal", lang: "en", AirQuality: false }): AxiosPromise<currentWeatherType> {
    const response = await api.get<currentWeatherType>("/current.json", {
        params: {
            q: "Castanhal",
            lang: "en",
            key: process.env.EXPO_PUBLIC_API_KEY,
            // aqi: "yes",
        },
    });
    return response;
}

export default function currentWeather({ city, lang, AirQuality }: WeatherType = { city: "Castanhal", lang: "en", AirQuality: false }) {
    const query = useQuery({
        queryFn: () => getCurrentWeather({ city, lang, AirQuality }),
        queryKey: ["currentWeather", city, lang, AirQuality],
    });

    return {
        ...query,
        dataCurrent: query.data?.data,
    }
}
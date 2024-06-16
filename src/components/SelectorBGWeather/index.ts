import invern from '@/assets/gifs/invern.gif';
import invernBridge from '@/assets/gifs/invern_bridge.gif';
import invernFoca from '@/assets/gifs/invern_foca.gif';

import rainCity from '@/assets/gifs/rainCity.gif';
import rainMountains from '@/assets/gifs/rainMontans.gif';
import rainBoat from '@/assets/gifs/rain_barco.gif';
import rainLightHouse from '@/assets/gifs/rain_farol.gif';

import nightAurora from '@/assets/gifs/night_aurora.gif';
import nightShip from '@/assets/gifs/night_navio.gif';
import nightWheel from '@/assets/gifs/night_rheel.gif';

import sunCalm from '@/assets/gifs/sunCalm.gif';
import sunCity from '@/assets/gifs/sunCity.gif';

import sunTomorrowCity from '@/assets/gifs/sun_tomorrow_city.gif';
import sunTomorrowLake from '@/assets/gifs/sun_tomorrow_lake.gif';
import sunTomorrowMountains from '@/assets/gifs/sun_Tomorrow_montains.gif';



export default function SelectBGWeather({ localTime, currentWeather }: { localTime: number, currentWeather: string }) {
    if (!currentWeather) return;
    if (currentWeather === 'Patchy rain possible' || currentWeather === 'Patchy sleet possible' || currentWeather === 'Patchy light drizzle' || currentWeather === 'Light drizzle' || currentWeather === 'Freezing drizzle' || currentWeather === 'Heavy freezing drizzle' || currentWeather === 'Patchy light rain' || currentWeather === 'Light rain' || currentWeather === 'Moderate rain at times' || currentWeather === 'Moderate rain' || currentWeather === 'Heavy rain at times' || currentWeather === 'Heavy rain' || currentWeather === 'Light freezing rain' || currentWeather === 'Heavy rain' || currentWeather === 'Moderate or heavy freezing rain' || currentWeather === 'Light rain shower' || currentWeather === 'Moderate or heavy rain shower' || currentWeather === 'Torrential rain shower') {
        const gifsRain = [
            rainCity,
            rainMountains,
            rainBoat,
            rainLightHouse
        ];
        return gifsRain[Math.floor(Math.random() * gifsRain.length)];
    }

    if (currentWeather === 'Patchy snow possible' || currentWeather === 'Patchy sleet possible' || currentWeather === 'Patchy light snow' || currentWeather === 'Light snow' || currentWeather === 'Patchy moderate snow' || currentWeather === 'Moderate snow' || currentWeather === 'Patchy heavy snow' || currentWeather === 'Heavy snow' || currentWeather === 'Ice pellets' || currentWeather === 'Light snow showers' || currentWeather === 'Moderate or heavy snow showers' || currentWeather === 'Light showers of ice pellets' || currentWeather === 'Moderate or heavy showers of ice pellets' || currentWeather === 'Blizzard') {

        const gifsCloudy = [
            invern,
            invernBridge,
            invernFoca
        ];
        return gifsCloudy[Math.floor(Math.random() * gifsCloudy.length)];
    }

    switch (true) {
        case (localTime >= 6 && localTime < 12):
            const gifsMorning = [
                sunCalm,
                sunCity
            ];

            return gifsMorning[Math.floor(Math.random() * gifsMorning.length)];
        case (localTime >= 12 && localTime < 19):
            const gifsTomorrow = [
                sunTomorrowCity,
                sunTomorrowLake,
                sunTomorrowMountains
            ];

            return gifsTomorrow[Math.floor(Math.random() * gifsTomorrow.length)];
        case (localTime >= 19 || localTime < 24):
            const gifsNight = [
                nightShip,
                nightWheel
            ];

            return gifsNight[Math.floor(Math.random() * gifsNight.length)];
        case (localTime >= 24 || localTime < 6):
            const gifsDawn = [
                nightAurora,
                nightShip
            ];

            return gifsDawn[Math.floor(Math.random() * gifsDawn.length)];
    }

}
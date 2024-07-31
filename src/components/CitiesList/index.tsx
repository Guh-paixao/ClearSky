import { FlashList } from "@shopify/flash-list";
import CityCard from "./cityCard";


export default function CitiesList() {
    return (
        <FlashList
            data={DATA}
            renderItem={({ item }) => <CityCard city={item.city} />}
            estimatedItemSize={200}
        />
    );
};

const DATA = [
    {
        city: "Castanhal"
    }
];
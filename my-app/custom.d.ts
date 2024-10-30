type responseItemType = {
    id: string,
    name: string,
};

type WeatherDetailType = {
    zipcode: string,
    weather: string,
    temp?: number,
};

interface WeatherQueryInterface {
    zipcode: string;
}
interface WeatherProps {
    weather: string;
}
interface LayoutProps {
    children: React.ReactNode;
}
interface ErrorProps {
    error: Error;
    reset: () => void;
}
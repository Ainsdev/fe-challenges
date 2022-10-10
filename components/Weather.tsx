import { Card, Divider, Text } from '@geist-ui/core'

interface WeatherProps {
    day: number,
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    description: string;
}

const WeatherCard: React.FC<WeatherProps> = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <Card width="400px" hoverable >
            <Card.Content>
                <Text b my={0}>{days[props.day]}</Text>
                <Text h3 my={0}>{props.temp}°</Text>
            </Card.Content>
            <Divider h="1px" my={0} />
            <Card.Content>
                    <Text b my={0}>Min: {props.temp_min}°</Text>
                    <br />
                    <Text b my={0}>Max: {props.temp_min}°</Text>
                    <br />
                    <Text b my={0}>Humidity: {props.humidity}%</Text>
                    <br />
                    <Text type='secondary' my={0}>{props.description}</Text>
            </Card.Content>
        </Card>
    )
}

export default WeatherCard
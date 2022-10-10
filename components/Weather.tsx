import { Card, Divider, Text } from '@geist-ui/core'

interface WeatherProps {
    day: number
    temp: number
    humidity: number
    weather: string
}

const WeatherCard: React.FC<WeatherProps> = (props) => {
    return (
        <Card width="400px">
            <Card.Content>
                <Text b my={0}>Description</Text>
            </Card.Content>
            <Divider h="1px" my={0} />
            <Card.Content>
                <Text>The Object constructor creates an object wrapper for the given value.</Text>
                <Text>When called in a non-constructor context, Object behaves identically to</Text>
            </Card.Content>
        </Card>
    )
}

export default WeatherCard
import type { NextPage } from 'next'
import React, { useState } from 'react';
import { Layout } from '../layouts/Layout'
import { Select, Grid, Loading } from '@geist-ui/core'
import WeatherCard from '../components/Weather';


const WeatherPage: NextPage<any> = ({ data }) => {
    const [weather, setweather] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<[boolean,boolean]>([false,false]);
    const day = new Date().getDay();
    //
    const fetchWeather = async (city: string) => {
        setLoading([true,false]);
        const res = await fetch(`api/${city}`)
        const data = await res.json()
        const fiveDays = data.list.filter((item: any, index: number) => index % 8 === 0)
        setweather(fiveDays)
        setLoading([false,true]);
    }
    return (
        <Layout title='Weather' link='https://drive.google.com/file/d/1MBoFiw7Ybbml4NKDfsTrcl-U6Buwlsag/view?usp=sharing'>
            <h2 onClick={() => fetchWeather('santiago')}>Select a city:</h2>
            <section>
                <Select placeholder="Choose a city" onChange={(val => fetchWeather(val as string))}>
                    <Select.Option value="santiago">Santiago</Select.Option>
                    <Select.Option value="buenos%20aires">Buenos Aires</Select.Option>
                    <Select.Option value="lima">Lima</Select.Option>
                    <Select.Option value="bogota">Bogota</Select.Option>
                </Select>
            </section>
            {
                loading[0] == true && loading[1] == false ?
                    <Loading marginTop={5}/> :
                    <Grid.Container gap={2} justify='center' height='100%' marginTop={2}>
                        {
                            weather.map((item: any, index: number) => {
                                return <Grid key={item.id} md={6} ><WeatherCard day={day + index} temp={item.main.temp} humidity={item.main.humidity} temp_min={item.main.temp_min} temp_max={item.main.temp_max} description={item.weather[0].description} /></Grid>
                            })}
                    </Grid.Container>
            }
        </Layout>
    )
}

export default WeatherPage

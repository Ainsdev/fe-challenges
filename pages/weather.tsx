import type { NextPage } from 'next'
import React, { useState } from 'react';
import { Layout } from '../layouts/Layout'
import { Select, Grid } from '@geist-ui/core'
import WeatherCard from '../components/Weather';


const WeatherPage: NextPage = () => {
    const [city, setcity] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <Layout title='Weather' link='https://drive.google.com/file/d/1MBoFiw7Ybbml4NKDfsTrcl-U6Buwlsag/view?usp=sharing'>
            <h1>Select a city:</h1>
            <section>
                <Select placeholder="Choose a city" onChange={(val => setcity(val as string))}>
                    <Select.Option value="santiago">Santiago</Select.Option>
                    <Select.Option value="buenos%20aires">Buenos Aires</Select.Option>
                    <Select.Option value="lima">Lima</Select.Option>
                    <Select.Option value="bogota">Bogota</Select.Option>
                </Select>
            </section>
            <Grid.Container gap={2} justify='center' height='100%'>
                <Grid md={6} ><WeatherCard day={0} temp={0} humidity={0} weather={''} /></Grid>
                <Grid md={6} ><WeatherCard day={0} temp={0} humidity={0} weather={''} /></Grid>
                <Grid md={6} ><WeatherCard day={0} temp={0} humidity={0} weather={''} /></Grid>
                <Grid md={6} ><WeatherCard day={0} temp={0} humidity={0} weather={''} /></Grid>
                <Grid md={6} ><WeatherCard day={0} temp={0} humidity={0} weather={''} /></Grid>
            </Grid.Container>
        </Layout>
    )
}

export default WeatherPage
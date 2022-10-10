import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function Weather(req: NextApiRequest, res: NextApiResponse) {
    const { city } = req.query;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(error);
    }

}


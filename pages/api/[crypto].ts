import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function Crypto(req: NextApiRequest, res: NextApiResponse) {
    const { currency } = req.query;
    const url = `https://api.exchange.cryptomkt.com/api/3/public/currency/${currency}`;
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(error);
    }

}
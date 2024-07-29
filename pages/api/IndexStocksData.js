export default async function handler(req, res) {
    const apiUrl = 'https://api.niftytrader.in/api/NIndex/IndexStocksData';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
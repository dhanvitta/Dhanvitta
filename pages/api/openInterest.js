export default async function handler(req, res) {
    const { symbol } = req.body;
    console.log(req.body)
    const apiUrl = `https://api.niftytrader.in/api/FinNiftyOI/niftyoichange?reqType=${symbol}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // console.log(data?.resultData?.data)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

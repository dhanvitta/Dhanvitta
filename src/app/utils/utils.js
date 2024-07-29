export const fetcher = async (url, method = 'GET', options = {}) => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: method === 'POST' ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

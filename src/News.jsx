import React, { useState, useEffect } from 'react';
import { FiAlertCircle, FiClock, FiFileText } from "react-icons/fi";
import Header from './Components/Header';

function MyComponent() {

    const [data, setData] = useState(null);
    const [sentimentsList, setSentimentsList] = useState([]);
    const cacheKey = 'newsData';

    let apikey = import.meta.env.VITE_NEWS_API_KEY


    useEffect(() => {
        // Check if data is already in cache
        const cachedData = JSON.parse(localStorage.getItem(cacheKey));
        if (cachedData && Date.now() - cachedData.timestamp < 60 * 60 * 1000) {
            setData(cachedData.data);
        } else {
            async function fetchData() {
                const category = 'business';
                const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=100&apikey=${apikey}`;

                const response = await fetch(url);
                const data = await response.json();
                setData(data);

                // Save data to cache
                const cacheData = { data, timestamp: Date.now() };
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            }

            fetchData();
        }
    }, []);

    useEffect(() => {
        if (data && data.articles) {
            const sentimentPromises = data.articles.map(async (article) => {
                const sentiment = await detectSentiment(article.title);
                return sentiment;
            });

            Promise.all(sentimentPromises)
                .then((sentiments) => {
                    setSentimentsList(sentiments);
                })
                .catch((error) => {
                    console.error("Error fetching sentiments:", error);
                });
        }
    }, [data]);

    const detectSentiment = async (text) => {
        const encodedText = encodeURIComponent(text);
        const url = `https://sentiverse.vercel.app/api/v1/sentiment/${encodedText}`;
        console.log(encodeURIComponent(text))
        const response = await fetch(url);
        const data = await response.json();
        const emotion = data.data?.emotion;
        return emotion;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const colSpan = Math.floor(Math.random() * 3) + 1;
    return (
        <React.Fragment>
            <Header />
            <div className='bg-gray-50 w-11/12 m-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8'>
                {data?.articles?.map((data, id) => {
                    return (
                        <div className={`col-span-${colSpan} relative group  shadow-sm overflow-hidden border border-gray-100  transform-gpu cursor-pointer hover:border-gray-300 p-6  flex flex-row items-start rounded-xl min-w-24 bg-white`} key={id}>
                            {/* <div className='border-2 border-blue-500 h-8 w-1 bg-blue-500 rounded-full'></div> */}

                            <div className='flex flex-col items-start'>
                                <img src={data?.image} className="h-36 w-full rounded-lg object-cover object-center group-hover:grayscale-0 bg-gray-800 flex items-center justify-center" height="24" width={2} alt={"image"} onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://fakeimg.pl/350x200/?text=${data?.source.name}&font=lobster`;
                                }} />

                                <div className='flex flex-row flex-wrap items-center justify-start mt-6 mb-2 '>
                                    <div className='flex flex-row w-full'>
                                        <div className='flex flex-row items-center'>
                                            <FiClock className='text-sm text-gray-500' />
                                            <h1 className='text-sm text-gray-400 font-normal ml-1 '>{data?.publishedAt.split('T')[0]}</h1>
                                        </div>
                                        <div className='flex flex-row items-center ml-4'>
                                            <FiFileText className='text-sm text-gray-500' />
                                            <h1 className='text-sm text-gray-400 font-normal ml-1'>{data?.source.name}</h1>
                                        </div>
                                    </div>

                                    <div className='flex flex-row w-full my-2'>

                                        <div className='flex flex-row items-center '>
                                            <FiAlertCircle className='text-sm text-gray-500' />
                                            {sentimentsList[id] == 'Positive' ? (
                                                <h1 className='text-sm text-emerald-500 font-normal ml-1'>{sentimentsList[id]}</h1>

                                            ) : (
                                                sentimentsList[id] == 'Neutral' ? (
                                                    <h1 className='text-sm text-yellow-500 font-normal ml-1'>{sentimentsList[id]}</h1>
                                                ) : (
                                                    <h1 className='text-sm text-red-500 font-normal ml-1'>{sentimentsList[id]}</h1>
                                                )

                                            )}
                                        </div>
                                    </div>

                                </div>

                                <div className='flex flex-row items-start justify-between'>
                                    <div className='flex flex-col items-start justify-start '>
                                        <h1 className='text-md text-gray-800 font-medium group-hover:text-blue-500'>{data?.title}</h1>
                                        {/* <h1 className='text-sm text-gray-500 font-normal line-clamp-2 leading-relaxed '>{data?.description}</h1> */}
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
}

export default MyComponent;
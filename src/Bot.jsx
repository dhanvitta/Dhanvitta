import React, { useState } from 'react';
import { FiTarget, FiSend } from "react-icons/fi";
import Header from './Components/Header';

const Bot = () => {
    const systemMessage = `Welcome to StockSignals! \n
   Your go-to source for stock market insights 📈. 
   I'm your friendly chatbot 🤖, ready to help with all your stock-related queries. \n \n
   Let's get started! 🌟`;

    const [requestMessage, setRequestMessage] = useState('');
    const [response, setResponse] = useState(systemMessage);


    const handleRequest = async () => {
        // const stockKeywords = ['stock', 'finance', 'market'];
        // const containsStockKeywords = stockKeywords.some(keyword => requestMessage.toLowerCase().includes(keyword.toLowerCase()));
        // if (containsStockKeywords) {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': `${JSON.stringify(import.meta.env.VITE_BOT_API_KEY)}`,
                'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: requestMessage },
                    { role: 'system', content: `greet the user with level of experience in stocks and finance suggest the user with keywords based on experience in human natural way. and dont respond to other topics ` },
                    { role: 'user', content: requestMessage }
                ]
            })
        };

        try {
            const response = await fetch('https://openai80.p.rapidapi.com/chat/completions', options);
            const data = await response.json();
            console.log(data);
            const generatedAnswer = data.choices[0]?.message?.content;
            setResponse(generatedAnswer);
        } catch (error) {
            console.error('Failed to call RapidAPI:', error);
            setResponse('');
        }
        // } else {
        //   setResponse('');
        // }

    }

    return (
        <React.Fragment>
            <Header />
            <div className='flex items-center justify-center w-full h-auto mt-8'>
                <div className='mx-auto h-auto w-96 bg-white border rounded-lg'>
                    {response && (
                        <div className='p-6 '>
                            <div className='  flex flex-col items-start justify-start relative'>
                                <span className='top-[-12px] left-[-12px] absolute  h-6 w-6 rounded-full border-2 border-gray-100 ring-2 ring-blue-500  flex items-center justify-center bg-blue-500 '>
                                    <FiTarget className='m-0 p-0 stroke-2 w-6 h-6 stroke-white animate-pulse' />
                                </span>
                                <p className='text-sm font-normal whitespace-normal break-words leading-normal  bg-gray-100 p-4  rounded-lg'> {response}</p></div>
                        </div>

                    )
                    }

                    <div className='p-4 bg-gray-50 border-t flex items-center justify-center  sticky bottom-0'>
                        <input
                            className='border border-gray-500 rounded-lg p-2 px-4 w-full text-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                            type="text"
                            value={requestMessage}
                            onChange={(e) => setRequestMessage(e.target.value)}
                        />
                        <button className='bg-slate-700 p-3 ml-4 border group hover:ring-4 hover:ring-slate-500 border-slate-500 rounded-full flex items-center justify-center text-white transition duration-150 ease-in-out' onClick={handleRequest}><FiSend className=' rotate-[40deg]  stroke-white ' /></button>
                    </div>

                </div >
            </div>
        </React.Fragment>
    );
};

export default Bot;

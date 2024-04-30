import React, { useRef, useEffect, useState, useCallback } from 'react'
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';

function SectionDetails() {

    const learnPoints = [
        {
            title: 'Gain Confidence and Trade Successfully',
            description: 'Access the latest market trends and insights.',
            ref: useRef(null)
        },
        {
            title: 'Learn Faster and Smarter',
            description: 'Get real-time suggestions for effective learning and faster progress.',
            ref: useRef(null)
        },
        {
            title: 'Save Time and Maximize ROI',
            description: 'Stay updated on market trends and achieve better returns on investments.',
            ref: useRef(null)
        },
        {
            title: 'Connect and Succeed with Community',
            description: 'Join a supportive community of traders and experts to achieve your trading goals.',
            ref: useRef(null)
        },
        {
            title: 'Achieve Trading Goals ',
            description: 'Learn everything you need to succeed in the stock market and achieve your trading goals.',
            ref: useRef(null)
        },
        {
            title: 'And Much More ',
            description: 'Achieve your trading goals.',
            ref: useRef(null)
        },
    ]


    const initialNodes = [
        {
            id: '1',
            data: { label: 'Stock Market' },
            position: { x: 200, y: 0 },
            type: 'input',
        },
        {
            id: '2',
            data: { label: 'Cash Market' },
            position: { x: 100, y: 100 },
        },
        {
            id: '3',
            data: { label: 'Shares' },
            position: { x: 200, y: 200 },
        },
        {
            id: '4',
            data: { label: 'Equity Derivative Market' },
            position: { x: 400, y: 100 },
        },
        {
            id: '5',
            data: { label: 'Futures' },
            position: { x: 300, y: 250 },
        },
        {
            id: '6',
            data: { label: 'Options' },
            position: { x: 500, y: 250 },
        },
        {
            id: '7',
            data: { label: 'Put Option | Call Option' },
            position: { x: 400, y: 350 },
        },
        {
            id: '8',
            data: { label: 'Buying' },
            position: { x: 300, y: 500 },
        },
        {
            id: '9',
            data: { label: 'Selling' },
            position: { x: 500, y: 500 },
        },
        {
            id: '10',
            data: { label: 'Scalp Trading' },
            position: { x: 400, y: 600 },
        },
    ];

    const initialEdges = [
        {
            id: '1-2', source: '1', target: '2', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '1-4', source: '1', target: '4', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '4-5', source: '4', target: '5', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '4-6', source: '4', target: '6', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '5-7', source: '5', target: '7', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '6-7', source: '6', target: '7', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '7-8', source: '7', target: '8', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '7-9', source: '7', target: '9', label: '', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, type: 'bezier'
        },
        {
            id: '8-10', source: '8', target: '10', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, label: 'Strategy Used', type: 'bezier'
        },
        {
            id: '8-10', source: '8', target: '10', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, label: 'Strategy Used', type: 'bezier'
        },
        {
            id: '9-10', source: '9', target: '10', style: {
                strokeWidth: 2,
                stroke: '#3b82f6',
            }, label: 'Strategy Used', type: 'bezier'
        },
    ];


    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );


    return (
        <div className='w-11/12 mx-auto my-28 py-8 flex flex-col bg-blue-50 rounded-3xl px-1 sm:px-2 md:px-8 lg:px-8 xl:px-8'>


            <div className=' rounded-2xl px-6 py-12 flex flex-col items-start justify-start '>

                <div className='px-0 mb-12'>
                    <h1 className='text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl  font-medium leading-normal text-slate-600 mb-8 flex flex-row items-center  ' >We <span className='px-5 py-3 mx-4 bg-blue-100 text-blue-400 w-fit rounded-2xl'>Provide</span></h1>

                    <div className='grid grid-cols-3 flex-wrap gap-4 '>
                        <div className='p-8 flex flex-col items-start justify-start bg-blue-100 rounded-2xl '>
                            <h1 className='  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold leading-normal text-gray-700  flex flex-col ' > Simple Learning Experience</h1>
                            <h3 className='mt-2  text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-gray-600 flex flex-col '>
                                Our course material, designed to be straightforward and easy to grasp.
                            </h3>
                        </div>

                        <div className='p-8 flex flex-col items-start justify-start bg-blue-100 rounded-2xl '>
                            <h1 className='  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold leading-normal text-gray-700  flex flex-col ' > Clear and Concise Content</h1>
                            <h3 className='mt-2  text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-gray-600 flex flex-col '>
                                Say goodbye to confusion with our streamlined approach. We focus on what matters most, avoiding complex jargon and unnecessary details.
                            </h3>
                        </div>

                        <div className='p-8 flex flex-col items-start justify-start bg-blue-100 rounded-2xl '>
                            <h1 className='  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold leading-normal text-gray-700  flex flex-col ' > Faster Mastery</h1>
                            <h3 className='mt-2  text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-gray-600 flex flex-col '>
                                Get ready to become proficient in less time. Our course is structured for efficient learning, so you can start applying your new skills sooner.
                            </h3>
                        </div>

                        <div className='p-8 flex flex-col items-start justify-start bg-blue-100 rounded-2xl '>
                            <h1 className='  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold leading-normal text-gray-700  flex flex-col ' > Exclusive Benefits</h1>
                            <h3 className='mt-2  text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-gray-600 flex flex-col '>
                                Unlock special discounts and perks for future programs and features. From live webinars to advanced trading tools, we&apos;ve got you covered.
                            </h3>
                        </div>

                        <div className='p-8 flex flex-col items-start justify-start bg-blue-100 rounded-2xl '>
                            <h1 className='  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold leading-normal text-gray-700  flex flex-col ' > Certification</h1>
                            <h3 className='mt-2  text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-gray-600 flex flex-col '>
                                Receive a prestigious certificate from Dhanvitta upon completing the course, showcasing your expertise in options trading.
                            </h3>
                        </div>
                        <div className='p-8 flex flex-col items-start justify-start bg-blue-100 rounded-2xl '>
                            <h1 className='  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold leading-normal text-gray-700  flex flex-col ' > Unlimited Access</h1>
                            <h3 className='mt-2  text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-gray-600 flex flex-col '>
                                Enjoy unrestricted access to course materials. Whether you&apos;re a quick learner or need more time to review, you can proceed at your own pace.
                            </h3>
                        </div>

                    </div>



                </div>

                <div className='px-0 my-12'>
                    <h1 className='text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl  font-medium leading-normal text-slate-600 mb-8 flex flex-row items-center  ' >You will <span className='px-5 py-3 mx-4 bg-blue-100 text-blue-400 w-fit rounded-2xl'>Learn</span></h1>

                    <div className='flex flex-wrap gap-4'>
                        <h1 className='py-4 px-7 bg-blue-100 rounded-2xl text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-blue-400  flex flex-col text-center ' > How to make trading setup</h1>
                        <h1 className='py-4 px-7 bg-blue-100 rounded-2xl text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-blue-400  flex flex-col text-center ' >  Extra effective trading strategies</h1>
                        <h1 className='py-4 px-7 bg-blue-100 rounded-2xl text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-blue-400  flex flex-col text-center ' > Risk management</h1>

                        <h1 className='py-4 px-7 bg-blue-100 rounded-2xl text-md xs:text-md sm:text-md md:text-md lg:text-md xl:text-md font-normal leading-normal text-blue-400  flex flex-col text-center ' > Scalp Trading</h1>
                    </div>

                    <div className='h-96 w-full my-12 p-2'>
                        <ReactFlow
                            nodes={nodes}
                            onNodesChange={onNodesChange}
                            edges={edges}
                            onEdgesChange={onEdgesChange}
                            fitView
                            minZoom={0.6}
                        >
                            <Background />
                            <Controls />
                        </ReactFlow>
                    </div>

                </div>

                <div className='px-0 mt-12'>
                    <h1 className='text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl  font-medium leading-normal text-slate-600 mb-8 flex flex-row items-center  ' >And <span className='px-5 py-3 mx-4 bg-blue-100 text-blue-400 w-fit rounded-2xl'>Gain</span></h1>
                    <h1 className='text-2xl xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-normal leading-8 text-slate-600 ' >The precise knowledge necessary to excel as a successful scalp trader in <span className=" text-blue-400 ">Options buying</span> within the equity derivatives segment.</h1>


                </div>
            </div>
            {/* <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 py-12 z-10 sticky top-0 bg-white '>
                {
                    learnPoints.map(({ title, description, ref } = item, id) => (
                        <div className={`sticky top-28  m-0 p-4 rounded-xl bg-white  `} key={id} ref={(el) => (learnPoints[id].ref = el)} >
                            <div className=' z-0 top-8 left-8 p-8 h-12 w-12 bg-yellow-300 text-slate-900 flex items-center justify-center font-extrabold text-;g rounded-r-3xl mb-2  shadow-sm' >{id + 1}</div>
                            <h1 className='mt-8 text-md font-semibold text-md mb-2 text-slate-900'>{title}</h1>
                            <p className='text-sm text-gray-600 bg-white'>{description}</p>

                        </div>
                    ))

                }
            </div> */}

        </div>
    )
}

export default SectionDetails
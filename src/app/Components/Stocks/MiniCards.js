
function MiniCards({ keyName, value }) {

    keyName == 'symbol_name' ? keyName = "Symbol" : null
    keyName == 'prev_price' ? keyName = "Previous Price" : null
    keyName == 'last_trade_price' ? keyName = "Last Trade Price" : null
    keyName == 'created_at' ? keyName = "Created At" : null

    return (
        <div className='flex flex-col py-4 px-6  '>
            <h1 className='text-sm font-normal text-gray-600 mb-1'>{keyName}</h1>
            <h1 className='text-md font-medium text-gray-900'>{value}</h1>
        </div>
    )
}

export default MiniCards
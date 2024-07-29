
function MiniCards({ keyName, value }) {

    keyName == 'symbol_name' ? keyName = "Symbol" : null
    keyName == 'prev_price' ? keyName = "Previous price" : null
    keyName == 'last_trade_price' ? keyName = "Last trade price" : null
    keyName == 'change_value' ? keyName = "Change value" : null
    keyName == 'change_per' ? keyName = "Change per" : null
    keyName === 'created_at' && (keyName = 'Created At', value = value.split('T')[0]);

    return (
        <div className='flex flex-col '>
            <h1 className='text-xs font-normal text-slate-500 mb-1 capitalize'>{keyName}</h1>
            <h1 className='text-md font-medium text-slate-700' style={{ color: value === "Bullish" ? '#10b981' : value === "Bearish" ? '#ef4444' : 'var(--font-color)' }}>{value}</h1>
        </div>
    )
}

export default MiniCards
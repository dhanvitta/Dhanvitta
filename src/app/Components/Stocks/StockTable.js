import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const StockTable = ({ data = [] }) => {
    const [rows, setRows] = useState([]);

    // Helper function to calculate total CE and PE OI
    const getTotalCePeOi = (oiData) => {
        let ce = 0, pe = 0;
        oiData.forEach(d => {
            ce += d.calls_change_oi || 0;
            pe += d.puts_change_oi || 0;
        });
        return [ce, pe];
    };

    // Helper function to convert timestamp to IST
    const convertToIST = (timestamp) => {
        const myDate = new Date(timestamp);
        let hours = myDate.getHours().toString().padStart(2, '0');
        let minutes = myDate.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    useEffect(() => {
        const newRows = data.map((item, i) => {
            const oidata = item.data;

            if (!oidata) {
                return null; // filter out invalid data
            }

            let [tce, tpe] = getTotalCePeOi(oidata);
            let prevTce = 0, prevTpe = 0;

            if (i > 0) {
                const prevOidata = data[i - 1].data;
                if (prevOidata) {
                    [prevTce, prevTpe] = getTotalCePeOi(prevOidata);
                }
            }

            const ceChange = tce - prevTce;
            const peChange = tpe - prevTpe;
            const timestamp = convertToIST(item.timestamp);
            let signal = "NEUTRAL";

            if (ceChange > 0 && peChange < 0) {
                signal = "SELL";
            } else if (ceChange < 0 && peChange > 0) {
                signal = "BUY";
            }

            return {
                timestamp,
                ltp: item.strike_price,
                ceChange,
                peChange,
                signal
            };
        }).filter(row => row !== null); // filter out invalid rows

        setRows(newRows);
    }, [data]);

    const columns = [
        { name: 'Timestamp', selector: row => row.timestamp, sortable: true },
        { name: 'LTP', selector: row => row.ltp, sortable: true },
        {
            name: 'Change in Calls',
            selector: row => row.ceChange.toLocaleString('en-IN'),
            sortable: true,
            cell: row => <span style={{ color: row.ceChange > row.peChange ? 'var(--call)' : 'var(--put)' }}>{row.ceChange.toLocaleString('en-IN')}</span>
        },
        {
            name: 'Change in Puts',
            selector: row => row.peChange.toLocaleString('en-IN'),
            sortable: true,
            cell: row => <span style={{ color: row.ceChange > row.peChange ? 'var(--call)' : 'var(--put)' }}>{row.peChange.toLocaleString('en-IN')}</span>
        },
        { name: 'Direction', selector: row => row.signal, sortable: true }
    ];

    return (
        <DataTable
            columns={columns}
            data={rows}
            pagination
        />
    );
};

export default StockTable;

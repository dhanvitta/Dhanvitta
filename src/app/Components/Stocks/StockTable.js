import React, { useEffect } from 'react';

const StockTable = ({ data }) => {

    useEffect(() => {
        populatetable(data);
    }, [data]);

    const get_total_ce_pe_oi = (oidata) => {
        let ce = 0, pe = 0;
        oidata.forEach(d => {
            ce += d.calls_change_oi;
            pe += d.puts_change_oi;
        });
        return [ce, pe];
    };

    const populatetable = (data) => {
        let rows = document.getElementById('oirows');
        rows.innerHTML = '';

        const index = localStorage.getItem('index');
        const oi_scan = [];

        for (let i = 0; i < data.length; i++) {
            let [prev_tce, prev_tpe] = [0, 0];
            let oidata = index === 'niftyoichangedata' ? data[i].niftyoi : data[i].bankniftyoi;

            if (!oidata) {
                console.error("Missing or invalid niftyoi/bankniftyoi data for item:", data[i]);
                continue;
            }

            let [tce, tpe] = get_total_ce_pe_oi(oidata);

            if (i > 0) {
                let prev_oidata = index === 'niftyoichangedata' ? data[i - 1].niftyoi : data[i - 1].bankniftyoi;
                if (!prev_oidata) {
                    console.error("Missing or invalid niftyoi/bankniftyoi data for previous item:", data[i - 1]);
                    continue;
                }
                [prev_tce, prev_tpe] = get_total_ce_pe_oi(prev_oidata);
            }

            let ce_change = tce - prev_tce;
            let pe_change = tpe - prev_tpe;
            let timestamp = converttoist(data[i].timestamp);
            let signal = "NEUTRAL";

            if (ce_change > 0 && pe_change < 0) {
                signal = "SELL";
            } else if (ce_change < 0 && pe_change > 0) {
                signal = "BUY";
            }

            oi_scan.push({
                'index': index === 'niftyoichangedata' ? 'NIFTY' : 'BANKNIFTY',
                'timestamp': timestamp,
                'signal': signal,
                'difference': ce_change - pe_change
            });

            var temp = `<tr>
                <td>${timestamp}</td>
                <td>${data[i].cmp}</td>
                <td style="color:var(--${ce_change > pe_change ? "call" : "put"});">${ce_change.toLocaleString('en-IN')}</td>
                <td style="color:var(--${ce_change > pe_change ? "call" : "put"});">${pe_change.toLocaleString('en-IN')}</td>
                <td>${signal}</td>
            </tr>`;
            rows.insertAdjacentHTML('afterend', temp);
        }


        // scanner(oi_scan.slice(-2));
    };

    const converttoist = (mytime) => {
        var myDate = new Date(mytime);
        let hours = myDate.getHours().toString().padStart(2, '0');
        let minutes = myDate.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>CMP</th>
                        <th>CE Change</th>
                        <th>PE Change</th>
                        <th>Signal</th>
                    </tr>
                </thead>
                <tbody id="oirows"></tbody>
            </table>
        </div>
    );
};

export default StockTable;

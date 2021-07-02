import React from 'react';
import { useEffect, useState } from 'react';

import Chart from 'react-apexcharts';

var api_key = process.env.REACT_APP_API_KEY_YAHOO;

const chart = {
	series: [
		{
			data: [],
		},
	],
	options: {
		chart: {
			type: 'candlestick',
		},
		title: {
			text: 'CandleStick Chart',
			align: 'left',
		},
		xaxis: {
			type: 'datetime',
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
	},
};

const round = number => {
	return number ? +number.toFixed(2) : null;
};
export default function StockChart({ ticker }) {
	async function getStocks() {
		const response = await fetch(
			`https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/${
				ticker ? ticker : 'FB'
			}`,
			{
				method: 'GET',
        params: {range: 'max', region: 'US', events: 'div,split'},
				headers: {
					'x-rapidapi-key': api_key,
					'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com',
				},
			}
		);
		return response.json();
	}

	const [series, setSeries] = useState([
		{
			data: [],
		},
	]);

	useEffect(() => {
		let timeoutId;
		async function update() {
			try {
				const data = await getStocks();
        const ticker = data.chart.result[0];
				const quote = ticker.indicators.quote[0];
				const prices = ticker.timestamp.map((timestamp, index) => ({
					x: new Date(timestamp * 1000),
					// O, H, L, C
					y: [quote.open[index], quote.high[index], quote.low[index], quote.close[index]].map(round),
				}));

				setSeries([
					{
						data: prices,
					},
				]);
			} catch (error) {
				console.log(error);
			}
			timeoutId = setTimeout(update, 60000);
		}
		update();
		// cleanUp function, stop calling the function over and over agian
		return () => {
			clearTimeout(timeoutId);
		};
	}, [ticker]);

	return (
		<>
			<Chart className="chart" options={chart.options} series={series} type="candlestick" width="100%" />
		</>
	);
}
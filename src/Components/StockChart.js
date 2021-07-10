import React from 'react';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Input from '../Components/input/Input';

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


export default function StockChart({ ticker, setTicker }) {
	const handleInput = (event) => {
		setTicker(event.target.value);
	};

	async function getStocks() {
		const response = await fetch(
			`https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/${ticker === " " ? "fb" : ticker }`,
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
		// let timeoutId;
		async function update() {
			try {
				const data = await getStocks();
        const ticker = data.chart.result[0];
				const quote = ticker.indicators.quote[0];
				const symbol = data.chart.result[0].meta.symbol;
				const price = data.chart.result[0].meta.regularMarketPrice;
				const prevPrice = data.chart.result[0].meta.chartPreviousClose;
				const prices = ticker.timestamp.map((timestamp, index) => ({
					x: new Date(timestamp * 1000),
					// O, H, L, C
					y: [quote.open[index], quote.high[index], quote.low[index], quote.close[index]].map(round),
				}));

				setSeries([
					{
						data: prices, symbol, price, prevPrice
					},
				]);
			} catch (error) {
				console.log(error);
			}
			// timeoutId = setTimeout(update, 60000);
		}
		update();
		// cleanUp function, stop calling the function over and over agian
		return () => {
			// clearTimeout(timeoutId);
		};
	}, [ticker]);

	var chartSymbol = series[0].symbol;
	var chartPrice = series[0].price;
	var prevPrice = series[0].prevPrice;
	return (
		<>
			<Input handleInput={handleInput} ticker={ticker} chartPrice={chartPrice} />

		<div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
			<h2>{chartSymbol}</h2>
			{prevPrice < chartPrice ? <h3 style={{color:"green"}}>{chartPrice + '💲'}</h3> : <h3 style={{color:"red"}}>{chartPrice + '🔻'}</h3>  }
		</div>
			<Chart className="chart" options={chart.options} series={series} type="candlestick" width="100%" />
		</>
	);
}
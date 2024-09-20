import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const timeSeries = [
	{
		keyword: "DIGITAL_CURRENCY_DAILY",
		key: "Time Series (Daily)",
		label: "1 day",
		value: 1
	},
	{
		keyword: "DIGITAL_CURRENCY_WEEKLY",
		key: "Weekly Time Series ",
		label: "1 week",
		value: 7
	},
	{
		keyword: "DIGITAL_CURRENCY_MONTHLY",
		key: "Monthly Time Series",
		label: "1 Month",
		value: 30
	},
];

const CoinChart = () => {

	const series = [
		{
			data: [
				[1724221371714, 59610.0192052268],
				[1724224175187, 59688.748544614],
				[1724227952333, 59505.2090645369],
				[1724232038650, 59341.3236849858],
				[1724234426320, 59272.9410389614],
				[1724238929362, 59433.15898376],
				[1724242230849, 59398.1420051605],
				[1724246282896, 59517.041838715],
				[1724249399324, 59931.7599413069],
				[1724252788285, 59518.1328840643],
				[1724256939721, 59500.585638116],
				[1724259740568, 59834.7441877429],
				[1724263464131, 59944.1339303113],
				[1724267458930, 60792.8199082421],
				[1724271534240, 61524.4742060068],
				[1724274934181, 61014.7190019864],
				[1724278227580, 61350.0644624038],
				[1724281586484, 61196.4166737635],
				[1724286055587, 61108.9303232901],
				[1724289285792, 60975.498730854],
				[1724293228213, 60889.6955567273],
				[1724296904602, 60320.4600146999],
				[1724300663120, 60615.2577549569],
				[1724304244799, 60795.2844305788],
				[1724307338558, 60935.9948431305],
				[1724310453797, 60842.7214650401],
				[1724314707083, 60894.2320830159],
				[1724317439026, 60958.8240539646],
				[1724321823984, 60932.0235929734],
				[1724324803000, 61211.0452616947],
				[1724328032421, 61376.737400191],
				[1724332083766, 60862.1799447078],
				[1724335262209, 60901.3518917281],
				[1724339490180, 60755.2402476203],
				[1724342428549, 60289.4458114512],
				[1724346197793, 60318.6132940644],
				[1724350524800, 60300.5588808103],
				[1724353490988, 60394.1250914517],
				[1724356988674, 60308.2853732258],
				[1724361560653, 60517.9067058922],
				[1724364974661, 60532.1569904518],
				[1724368796760, 60383.6600587123],
				[1724372348459, 60519.4866193277]
			],
		},
	];

	const options = {
		chart: {
			id: "area-datetime",
			type: "area",
			height: 350,
			zoom: {
				autoScaleYaxis: true
			}
		},
		dataLabels: {
			enabled: false
		},
		xaxis: {
			type: "datetime",
			tickAmount: 6
		},
		colors: ["#758AA2"],
		markers: {
			colors: ["#fff"],
			strokeColor: "#fff",
			size: 0,
			strokeWidth: 1,
			style: "hollow"
		},
		tooltip: {
			theme: "dark"
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.9,
				opacityTo: 0.3,
				stops: [0, 100]
			}
		},
		grid: {
			borderColor: "#47535E",
			strokeDashArray: 4,
			show: true
		}
	};

	const [activeLabel, setActiveLabel] = useState('1 day');

	const handleActiveLabel = (label) => {
		setActiveLabel(label)
	};

	return (
		<div>
			<div className="space-x-3">
				{timeSeries.map((item) => <Button variant = {activeLabel == item.label ? "default" : "outline"} onClick = {() => handleActiveLabel(item.label)} key = {item.label}>
					{item.label}
				</Button>)}
			</div>
			<div id="chart-timelines">
				<ReactApexChart options={options} series={series} height={450} type="area"/>

			</div>
		</div>
	)
}

export default CoinChart
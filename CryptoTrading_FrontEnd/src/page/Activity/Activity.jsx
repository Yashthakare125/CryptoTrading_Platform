import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const Activity = () => {
	return (
		<div className="p-5 lg:px-20">
			<h1 className="font-bold text-3xl pb-5">Activity</h1>
			<Table className="border">
				<TableHeader>
					<TableRow>
						<TableHead className="py-5 text-center">DATE & TIME</TableHead>
						<TableHead className="text-center">TRADED PAIR</TableHead>
						<TableHead className="text-center">BUY PRICE</TableHead>
						<TableHead className="text-center">SELL PRICE</TableHead>
						<TableHead className="text-center">ORDER TYPE</TableHead>
						<TableHead className="text-center">PROFIT/LOSS</TableHead>
						<TableHead className="text-center">VALUE</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
						<TableRow key={index}>
							<TableCell className="text-center">
								<p>2024/05/31</p>
								<p className="text-gray-400">12:39:32</p>
							</TableCell>
							<TableCell className="font-medium flex justify-center items-center gap-2 text-center">
								<Avatar className="-z-50">
									<AvatarImage src="https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400" />
								</Avatar>
								<span>Bitcoin</span>
							</TableCell>
							<TableCell className="text-center">43345279494</TableCell>
							<TableCell className="text-center">1260709241842</TableCell>
							<TableCell className="text-center">2.94112%</TableCell>
							<TableCell className="text-center">63813</TableCell>
							<TableCell className="text-center">345</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default Activity

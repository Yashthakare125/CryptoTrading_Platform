import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const Portfolio = () => {
	return (
		<div className="p-5 lg:px-20">
			<h1 className = "font-bold text-3xl pb-5">Portfolio</h1>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="">ASSET</TableHead>
						<TableHead>PRICE</TableHead>
						<TableHead>UNIT</TableHead>
						<TableHead>CHANGE</TableHead>
						<TableHead>CHANGE %</TableHead>
						<TableHead className ="text-right">VALUE</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
						<TableRow kye={index}>
							<TableCell className="font-medium flex items-center gap-2">
								<Avatar className='-z-50'>
									<AvatarImage src="https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400" />
								</Avatar>
								<span>Bitcoin</span>
							</TableCell>
							<TableCell>BTC</TableCell>
							<TableCell>43345279494</TableCell>
							<TableCell>1260709241842</TableCell>
							<TableCell>2.94112%</TableCell>
							<TableCell className="text-right">63813</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default Portfolio
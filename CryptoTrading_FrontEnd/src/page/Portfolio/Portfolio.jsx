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
						<TableHead className = "pl-12 text-left">ASSET</TableHead>
						<TableHead className = "text-center">PRICE</TableHead>
						<TableHead className = "text-center">UNIT</TableHead>
						<TableHead className = "text-center">CHANGE</TableHead>
						<TableHead className = "text-center">CHANGE %</TableHead>
						<TableHead className = "text-center">VALUE</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
						<TableRow kye={index}>
							<TableCell className="font-medium justify-start flex items-center gap-2">
								<Avatar className='-z-50'>
									<AvatarImage src="https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400" />
								</Avatar>
								<span>Bitcoin</span>
							</TableCell>
							<TableCell className="text-center">BTC</TableCell>
							<TableCell className="text-center">43345279494</TableCell>
							<TableCell className="text-center">1260709241842</TableCell>
							<TableCell className="text-center">2.94112 %</TableCell>
							<TableCell className="text-center">63813</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default Portfolio
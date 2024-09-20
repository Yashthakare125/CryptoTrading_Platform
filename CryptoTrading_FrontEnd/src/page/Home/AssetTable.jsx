import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const AssetTable = () => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">COIN</TableHead>
					<TableHead>SYMBOL</TableHead>
					<TableHead>VOLUME</TableHead>
					<TableHead>MARKET CAP</TableHead>
					<TableHead>24H</TableHead>
					<TableHead className="text-right">PRICE</TableHead>
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
	)
}

export default AssetTable
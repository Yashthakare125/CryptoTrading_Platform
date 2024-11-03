import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AssetTable = ({ coin, category }) => {
	const navigate = useNavigate();

	return (
		<Table style={{ height: '100%', width: '100%' }}>
			<ScrollArea className={`${category=="all" ? "h-[77.3vh]" : "h-[82vh]"}`}>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[200px]">COIN</TableHead> {/* Increased width */}
						<TableHead className="w-[100px]">SYMBOL</TableHead> {/* Increased width */}
						<TableHead className="w-[200px]">VOLUME</TableHead> {/* Increased width */}
						<TableHead className="w-[200px]">MARKET CAP</TableHead> {/* Increased width */}
						<TableHead className="w-[150px]">24H</TableHead> {/* Increased width */}
						<TableHead className="w-[150px] text-right">PRICE</TableHead> {/* Increased width */}
					</TableRow>
				</TableHeader>
				<TableBody>
					{coin.map((item) => (
						<TableRow onClick={() => navigate(`/market/${item.id}/`)} key={item.id}>
							<TableCell className="font-medium flex items-center gap-2">
								<Avatar className='-z-50'>
									<AvatarImage
										src={item.image}
										className="items-center pr-2"
										style={{
											width: '40px',
											height: '40px',
											objectFit: 'cover',
											borderRadius: '50%'
										}}
									/>
								</Avatar>
								<span>{item.name}</span>
							</TableCell>
							<TableCell>{item.symbol.toUpperCase()}</TableCell>
							<TableCell>{item.total_volume}</TableCell>
							<TableCell>{item.market_cap}</TableCell>
							<TableCell>{item.price_change_percentage_24h}%</TableCell>
							<TableCell className="text-right">${item.current_price}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</ScrollArea>
		</Table>
	);
}

export default AssetTable;

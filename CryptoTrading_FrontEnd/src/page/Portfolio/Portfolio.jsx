import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getUserAssets } from '@/State/Asset/Action'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Portfolio = () => {

	const dispatch = useDispatch();


	const {asset} = useSelector(store => store);

	useEffect(() => {
		dispatch(getUserAssets(localStorage.getItem("jwt")))
	}, [])

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
					{asset.userAssets.map((item, index) =>
						<TableRow kye={index}>
							<TableCell className="font-medium justify-start flex items-center gap-2">
								<Avatar className='-z-50'>
									<AvatarImage className="h-6" src={item.coin.image} />
								</Avatar>
								<span>{item.coin.name}</span>
							</TableCell>
							<TableCell className="text-center">{item.coin.symbol.toUpperCase()}</TableCell>
							<TableCell className="text-center">{item.quantity}</TableCell>
							<TableCell className="text-center">{item.coin.price_change_24h}</TableCell>
							<TableCell className="text-center">{item.coin.price_change_percentage_24h}</TableCell>
							<TableCell className="text-center">{item.coin.total_volume}</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default Portfolio
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getAllOrdersForUser } from '@/State/Order/Action'
import { calculateProfit } from '@/utils/calculateProfit'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Activity = () => {
	const dispatch = useDispatch()

	const {order} = useSelector(store => store)

	useEffect(() => {
		dispatch(getAllOrdersForUser({ jwt: localStorage.getItem("jwt") }))
	}, [])


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
					{order.orders.map((item, index) =>
						<TableRow key={index}>
							<TableCell className="text-center">
								<p>2024/05/31</p>
								<p className="text-gray-400">12:39:32</p>
							</TableCell>
							<TableCell className="font-medium flex justify-center items-center gap-2 text-center pt-4">
								<Avatar className="-z-50">
									<AvatarImage className="h-6" src={item.orderItem.coin.image} />
								</Avatar>
								<span>{item.orderItem.coin.name}</span>
							</TableCell>
							<TableCell className="text-center">$ {item.orderItem.buyPrice}</TableCell>
							<TableCell className="text-center">{item.orderItem.sellPrice == 0 ? "-" : `$ ${item.orderItem.sellPrice}`}</TableCell>
							<TableCell className="text-center">{item.orderType}</TableCell>
							<TableCell className="text-center">{calculateProfit(item)}</TableCell>
							<TableCell className="text-center">{item.price}</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default Activity

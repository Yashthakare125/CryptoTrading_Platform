import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { addItemToWatchlist, getUserWatchlist } from '@/State/Watchlist/Action'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Watchlist = () => {

	const {watchlist} = useSelector(store => store)

	const handleRemoveFromWatchlist = (value) => {
		console.log(value);
		dispatch(addItemToWatchlist({
			coinId: value,
			jwt: localStorage.getItem("jwt")
		}));
	}

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserWatchlist(localStorage.getItem("jwt")))
	},[])


	return (
		<div className="p-5 lg:px-20">
			<h1 className="font-bold text-3xl pb-5">Watchlist</h1>
			<Table className="border">
				<TableHeader>
					<TableRow>
						<TableHead className="text-center py-5">COIN</TableHead>
						<TableHead className="text-center">SYMBOL</TableHead>
						<TableHead className="text-center">VOLUME</TableHead>
						<TableHead className="text-center">MARKET CAP</TableHead>
						<TableHead className="text-center">24H</TableHead>
						<TableHead className="text-center">PRICE</TableHead>
						<TableHead className="text-center text-red-800">REMOVE</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{watchlist.items.map((item, index) =>
						<TableRow kye={index}>
							<TableCell className="text-center font-medium justify-center flex items-center gap-2 pt-3">
								<Avatar className='-z-50'>
									<AvatarImage className="h-8" src={item.image} />
								</Avatar>
								<span>{item.name}</span>
							</TableCell>
							<TableCell className="text-center">{item.symbol.toUpperCase()}</TableCell>
							<TableCell className="text-center">{item.total_volume}</TableCell>
							<TableCell className="text-center">{item.market_cap}</TableCell>
							<TableCell className="text-center">{item.market_cap_change_percentage_24h}%</TableCell>
							<TableCell className="text-center">$ {item.current_price}</TableCell>
							<TableCell className="text-center">
								<Button variant="ghost" onClick={() => handleRemoveFromWatchlist(item.id)} size="icon" className="h-10 w-10">
									<BookmarkFilledIcon className='w-6 h-6' />
								</Button>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default Watchlist
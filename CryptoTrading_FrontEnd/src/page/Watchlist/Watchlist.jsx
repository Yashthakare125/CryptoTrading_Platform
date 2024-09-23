import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const Watchlist = () => {

	const handleRemoveFromWatchlist = (value) => {
		console.log(value);
	}

  return (
	  <div className="p-5 lg:px-20">
		  <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
		  <Table className="border">
			  <TableHeader>
				  <TableRow>
					  <TableHead className="text-center py-5">COIN</TableHead>
					  <TableHead className= "text-center">SYMBOL</TableHead>
					  <TableHead className= "text-center">VOLUME</TableHead>
					  <TableHead className= "text-center">MARKET CAP</TableHead>
					  <TableHead className= "text-center">24H</TableHead>
					  <TableHead className= "text-center">PRICE</TableHead>
					  <TableHead className="text-center text-red-800">REMOVE</TableHead>
				  </TableRow>
			  </TableHeader>
			  <TableBody>
				  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
					  <TableRow kye={index}>
						  <TableCell className="text-center font-medium justify-center flex items-center gap-2">
							  <Avatar className='-z-50'>
								  <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400" />
							  </Avatar>
							  <span>Bitcoin</span>
						  </TableCell>
						  <TableCell className="text-center">BTC</TableCell>
						  <TableCell className="text-center">43345279494</TableCell>
						  <TableCell className="text-center">1260709241842</TableCell>
						  <TableCell className="text-center">2.94112%</TableCell>
						  <TableCell className="text-center">63813</TableCell>
						  <TableCell className="text-center">
							<Button variant = "ghost" onClick = {() => handleRemoveFromWatchlist(item.id)} size="icon" className="h-10 w-10">
								<BookmarkFilledIcon className='w-6 h-6'/>
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
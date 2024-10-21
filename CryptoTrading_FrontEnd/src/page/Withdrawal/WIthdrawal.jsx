import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const Withdrawal = () => {
  return (
	  <div className="p-5 lg:px-20">
		  <h1 className="font-bold text-3xl pb-5">Withdrawals</h1>
		  <Table className="border">
			  <TableHeader>
				  <TableRow>
					  <TableHead className="py-5 text-center">DATE</TableHead>
					  <TableHead className="text-center">METHOD</TableHead>
					  <TableHead className="text-center">AMOUNT</TableHead>
					  <TableHead className="text-center">STATUS</TableHead>
				  </TableRow>
			  </TableHeader>
			  <TableBody>
				  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
					  <TableRow key={index}>
						  <TableCell className="text-center">
							  <p>2024/05/31</p>
						  </TableCell>
						  <TableCell className="text-center">Net Banking</TableCell>
						  <TableCell className="text-center">$63000</TableCell>
						  <TableCell className="text-center">Success</TableCell>
					  </TableRow>
				  )}
			  </TableBody>
		  </Table>
	  </div>  )
}

export default Withdrawal
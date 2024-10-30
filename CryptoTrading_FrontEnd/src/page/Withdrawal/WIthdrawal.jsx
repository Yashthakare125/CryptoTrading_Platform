import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getWithdrawalHistory } from '@/State/Withdrawal/Action';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Withdrawal = () => {

	const dispatch = useDispatch();
	const { wallet, withdrawal } = useSelector(store => store);
  
	useEffect(() => {
        dispatch(getWithdrawalHistory(localStorage.getItem("jwt")));
    }, []);

	const formatDate = (dateString) => {
		const options = { day: 'numeric', month: 'long', year: 'numeric' };
		const date = new Date(dateString); // Convert the string to a Date object
		return date.toLocaleDateString('en-US', options); // Format to "October 30, 2024"
	};

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
				  {withdrawal.history.map((item, index) =>
					  <TableRow key={index}>
						  <TableCell className="text-center">
							  <p>{formatDate(item.date)}</p>
						  </TableCell>
						  <TableCell className="text-center">Net Banking</TableCell>
						  <TableCell className="text-center">${item.amount}</TableCell>
						  <TableCell className="text-center">{item.status}</TableCell>
					  </TableRow>
				  )}
			  </TableBody>
		  </Table>
	  </div>  )
}

export default Withdrawal
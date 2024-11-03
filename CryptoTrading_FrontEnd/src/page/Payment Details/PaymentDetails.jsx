// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
// import React, { useEffect } from 'react'
// import PaymentDetailsForm from './PaymentDetailsForm'
// import { useDispatch, useSelector } from 'react-redux'
// import { getPaymentDetails } from '@/State/Withdrawal/Action'

// const PaymentDetails = () => {
// 	const {withdrawal} = useSelector(store => store);
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(getPaymentDetails({jwt: localStorage.getItem('jwt')}));
// 	},[])

// 	return (
// 		<div className="px-20">
// 			<h1 className='text-3xl font-bold py-10'>PaymentDetails</h1>
// 			{withdrawal.paymentDetails ? 
// 			<Card>
// 				<CardHeader>
// 					<CardTitle>{withdrawal.paymentDetails.bankName}</CardTitle>
// 					<CardDescription>{withdrawal.paymentDetails.accountNumber}</CardDescription>
// 				</CardHeader>
// 				<CardContent>
// 					<div className="flex items-center">
// 						<p className='w-32'>A/C Holder</p>
// 						<p className='text-gray-400'>{withdrawal.paymentDetails.accountHolderName}</p>
// 					</div>
// 					<div className='flex items-center'>
// 						<p className='w-32'>IFSC</p>
// 						<p className="text-gray-400">{withdrawal.paymentDetails.ifsc}</p>
// 					</div>
// 				</CardContent>
// 			</Card> 

// 			:  //else part for {true ? card : dialog}
			
// 			<Dialog>
// 				<DialogTrigger>
// 					<Button className="py-6">Add Payment Details</Button>
// 				</DialogTrigger>
// 				<DialogContent>
// 					<DialogHeader>
// 						<DialogTitle>Payment Details</DialogTitle>
// 						<PaymentDetailsForm/>
// 					</DialogHeader>
// 				</DialogContent>
// 			</Dialog>
// 		}
// 		</div>
// 	)
// }

// export default PaymentDetails


import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { useEffect, useState } from 'react'
import PaymentDetailsForm from './PaymentDetailsForm'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentDetails } from '@/State/Withdrawal/Action'

const PaymentDetails = () => {
	const { withdrawal } = useSelector(store => store);
	const dispatch = useDispatch();
	const [showFullAccountNumber, setShowFullAccountNumber] = useState(false);

	useEffect(() => {
		dispatch(getPaymentDetails({ jwt: localStorage.getItem('jwt') }));
	}, [dispatch]);

	const toggleAccountNumber = () => {
		setShowFullAccountNumber(!showFullAccountNumber); 
	};

	return (
		<div className="px-20">
			<h1 className='text-3xl font-bold py-10'>Payment Details</h1>
			{withdrawal.paymentDetails ?
				<Card>
					<CardHeader>
						<CardTitle>{withdrawal.paymentDetails.bankName}</CardTitle>
						<CardDescription>
							{showFullAccountNumber
								? withdrawal.paymentDetails.accountNumber
								: `*******${withdrawal.paymentDetails.accountNumber.slice(-4)}`
							}
							<Button onClick={toggleAccountNumber} className="ml-2">
								{showFullAccountNumber ? 'Hide' : 'Show'} Account Number
							</Button>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center">
							<p className='w-32'>A/C Holder</p>
							<p className='text-gray-400'>{withdrawal.paymentDetails.accountHolderName}</p>
						</div>
						<div className='flex items-center'>
							<p className='w-32'>IFSC</p>
							<p className="text-gray-400">{withdrawal.paymentDetails.ifsc}</p>
						</div>
					</CardContent>
				</Card>
				:
				<Dialog>
					<DialogTrigger>
						<Button className="py-6">Add Payment Details</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Payment Details</DialogTitle>
							<PaymentDetailsForm />
						</DialogHeader>
					</DialogContent>
				</Dialog>
			}
		</div>
	)
}

export default PaymentDetails;

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import PaymentDetailsForm from './PaymentDetailsForm'

const PaymentDetails = () => {
	return (
		<div className="px-20">
			<h1 className='text-3xl font-bold py-10'>PaymentDetails</h1>
			{true ? 
			<Card>
				<CardHeader>
					<CardTitle>HDFC Bank</CardTitle>
					<CardDescription>************5691</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center">
						<p className='w-32'>A/C Holder</p>
						<p className='text-gray-400'>RASIUT</p>
					</div>
					<div className='flex items-center'>
						<p className='w-32'>IFSC</p>
						<p className="text-gray-400">HDFC0012</p>
					</div>
				</CardContent>
			</Card> 

			:  //else part for {true ? card : dialog}
			
			<Dialog>
				<DialogTrigger>
					<Button className="py-6">Add Payment Details</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Payment Details</DialogTitle>
						<PaymentDetailsForm/>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		}
		</div>
	)
}

export default PaymentDetails
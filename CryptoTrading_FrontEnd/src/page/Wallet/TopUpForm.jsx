import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { RadioGroupItem } from '@radix-ui/react-radio-group';
import React, { useState } from 'react'

const TopUpForm = () => {

	const [amount, setAmount] = useState('');
	const handleChange = (e) => {
		setAmount(e.target.value);
	};

	const [paymentMethod, setpaymentMethod] = useState("RAZORPAY")
	const handlePaymentMethod = (value) => {
		setpaymentMethod(value);
	};
	
	const handleSubmit = () => {
		console.log(amount, paymentMethod);
	};

	return (
		<div className="pt-10 space-y-5">
			<div>
				<h1 className="pb-1">Enter Amount</h1>
				<Input onChange={handleChange} value={amount} className="py-7 text-lg" placeholder="$999" />
			</div>
			<div>
				<h1 className='pb-1'>Select Payment Method</h1>
				<RadioGroup onValueChange={(value) => handlePaymentMethod(value) } className="flex" defaultValue="RAZORPAY">
					<div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
						{/* <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="RAZORPAY" id="r1"/> */}
						<RadioGroupItem className="h-9 w-9" value="RAZORPAY" id="r1" >
							<DotFilledIcon />
						</RadioGroupItem>
						<Label htmlFor="r1">
							<div className='bg-white rounded-md px-5 py-2 w-32'>
								<img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png" />
							</div>
						</Label>
					</div>
					<div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
						{/* <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="RAZORPAY" id="r1"/> */}
						<RadioGroupItem className="h-9 w-9" value="STRIPE" id="r2" >
							<DotFilledIcon />
						</RadioGroupItem>
						<Label htmlFor="r2">
							<div className='bg-white rounded-md px-5 py-1 w-32'>
								<img className="h-8"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png" />
							</div>
						</Label>
					</div>
				</RadioGroup>
			</div>
			<Button onClick={handleSubmit} className="w-full py-7">
				Submit
			</Button>
		</div>
	)
}

export default TopUpForm
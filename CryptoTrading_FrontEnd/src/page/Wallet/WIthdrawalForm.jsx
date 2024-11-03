import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { withdrawalRequest } from '@/State/Withdrawal/Action';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import { EyeIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function WithdrawalForm() {
	const [amount, setAmount] = useState('');

	const dispatch = useDispatch();
	const { wallet, withdrawal } = useSelector(store => store);

	const handleChange = (e) => {
		setAmount(e.target.value);
	};

	const handleSubmit = () => {
		dispatch(withdrawalRequest({amount, jwt: localStorage.getItem('jwt')}));
		console.log(amount);
	};

	const [toggleAccountNumber, settoggleAccountNumber] = useState(false)
	const toggleAccountNumberHandler = () => {
		settoggleAccountNumber(!toggleAccountNumber);
	};
	return (
		<div className="pt-10 space-y-5">
			<div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
				<p>Available Balance</p>
				<p>$2901</p>

			</div>
			<div className='flex flex-col items-center'>
				<h1>Enter Withdrawal Amount</h1>
				<div className="flex items-center justify-center">
					<Input onChange={handleChange} value={amount} className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center" placeholder="$9999" type="number" />
				</div>
			</div>
			<div className=''>
				<p className='pb-2'>Transfer To</p>
				<div className='flex items-center gap-5 border px-5 py-2 rounded-md'>
					<img className='h-8 w-8' src="https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_1280.png" alt="" />
					<div>
						<p className='text-xl font-bold'>{withdrawal.paymentDetails?.bankName}</p>
						<div className="flex flex-row">
							<p className='text-xs pr-3'>
								{toggleAccountNumber ? `*******${withdrawal.paymentDetails.accountNumber.slice(-4)}` : withdrawal.paymentDetails?.accountNumber}
							</p>
							{
								toggleAccountNumber 
									?
									<EyeIcon className="h-4" onClick={toggleAccountNumberHandler}></EyeIcon>
									:
									<EyeClosedIcon className="h-4" onClick={toggleAccountNumberHandler}></EyeClosedIcon>
							}
						</div>
					</div>
				</div>
			</div>
			<DialogClose className='w-full'>
				<Button onClick={handleSubmit} className="w-full py-7 text-xl">
					Withdraw
				</Button>
			</DialogClose>
		</div>
	);
}

export default WithdrawalForm
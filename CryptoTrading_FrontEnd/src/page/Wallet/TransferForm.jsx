import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input'
import { transferMoney } from '@/State/Wallet/Action';
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TransferForm = () => {
	const dispatch = useDispatch();
	const { wallet } = useSelector(store => store);

	const [formData, setformData] = useState({
		amount: '',
		walletId: '',
		purpose: ''
	});
	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	}
	const handleSubmit = (e) => {
		dispatch(transferMoney({
			jwt: localStorage.getItem("jwt"),
			walletId: formData.walletId,
			reqData: {
				amount: formData.amount,
				purpose: formData.purpose
			}
		}))
		console.log(formData);
	}
	return (
		<div className="pt-10 space-y-5">
			<div>
				<h1 className="pb-1">Enter Amount</h1>
				<Input name="amount" onChange={handleChange} value={FormData.amount} className="py-7" placeholder="$9999" />
			</div>
			<div>
				<h1 className="pb-1">Wallet ID</h1>
				<Input name="walletId" onChange={handleChange} value={FormData.walletId} className="py-7" placeholder="#ABCD1234" />
			</div>
			<div>
				<h1 className="pb-1">Purpose</h1>
				<Input name="purpose" onChange={handleChange} value={FormData.purpose} className="py-7" placeholder="Gift" />
			</div>
			<DialogClose className="w-full">
				<Button onClick={handleSubmit} className="w-full py-7">
					Submit
				</Button>
			</DialogClose>
		</div>
	)
}

export default TransferForm
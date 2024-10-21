import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

function ForgotPassswordForm() {
	const form = useForm({
		resolver: "",
		defaultValues: {
			email: ""
		}
	})
	const onSubmit = (data) => {
		console.log(data)
	}
	return (
		<div>
			<h1 className="text-xl font-bold text-center pb-3">Recover your account</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>E-Mail</FormLabel>
								<FormControl>
									<Input className="border w-full border-gray-700 p-5" placeholder="rasiut04@gmail.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full py-5">Submit</Button>
				</form>
			</Form>
		</div>
	)
}

export default ForgotPassswordForm
import React from 'react'
import "./Auth.css"
import SignUpForm from './SignUpForm'
import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import ForgotPassswordForm from './ForgotPasswordForm';

function Auth() {
	const navigate = useNavigate()
	const location = useLocation()
	return (
		<div className='h-screen relative authContainer'>
			<div className='absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50'>
				<div className='bgBlur py-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-auto min-h-[20rem] max-h-screen w-auto min-w-[30rem] max-w-screen rounded-md z-50 bg-black bg-opacity-70 shadow-2xl shadow-white px-10'>
					<h1 className='text-6xl font-bold pb-9'>CryptiFy</h1>

					{
						location.pathname == "/signup"
							?
							<section className="w-full">
								<SignUpForm />
								<div className='flex item-center justify-center'>
									<span className="pt-1.5">Already have account?</span>
									<Button onClick={() => navigate("/signin")} variant="ghost">
										Sign In
									</Button>
								</div>
							</section>
							:
							location.pathname == "/forgot-password"
								?
								<section className="w-full">
									<ForgotPassswordForm />
									<div className='flex item-center justify-center'>
										<span className="pt-1.5">Back to login?</span>
										<Button onClick={() => navigate("/signin")} variant="ghost">
											Sign In
										</Button>
									</div>
								</section>
								:
								<section className="w-full">
									<SignInForm />
									<div className='flex item-center justify-center'>
										<Button onClick={() => navigate("/signup")} variant="ghost">
											Sign Up
										</Button>
									</div>
									<div className='flex item-center justify-center mt-5'>
										<Button className="w-full py-5" onClick={() => navigate("/forgot-password")} variant="outline">
											Forgot Password
										</Button>
									</div>
								</section>

					}
				</div>
			</div>
		</div>
	)
}

export default Auth
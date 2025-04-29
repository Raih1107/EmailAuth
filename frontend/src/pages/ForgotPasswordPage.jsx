import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import Input from '../components/Input';
import { ArrowLeft, Loader, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gradient-to-br from-slate-900/70 via-slate-800/80 to-slate-900/70 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-700'
		>
			<div className="p-8">
				<h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 text-transparent bg-clip-text">
					Forgot Password
				</h2>

				{!isSubmitted ? (
					<form onSubmit={handleSubmit}>
						<p className="text-sm text-gray-400 mb-6 text-center">
							Enter your email address to receive a password reset link.
						</p>
						<Input
							icon={Mail}
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='w-full mt-4 py-3 px-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200'
							type='submit'
						>
							{isLoading ? (
								<Loader className='size-6 animate-spin mx-auto' />
							) : (
								"Send Reset Link"
							)}
						</motion.button>
					</form>
				) : (
					<div className='text-center'>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", stiffness: 500, damping: 30 }}
							className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'
						>
							<Mail className='h-8 w-8 text-white' />
						</motion.div>
						<p className='text-gray-300 text-sm'>
							If an account exists for <span className="text-sky-400 font-medium">{email}</span>, you will receive a password reset link shortly.
						</p>
					</div>
				)}
			</div>

			<div className="px-8 py-4 bg-slate-950/80 border-t border-slate-700 flex justify-center">
				<Link
					to={"/login"}
					className="text-sm text-sky-400 hover:underline flex items-center transition-colors"
				>
					<ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
				</Link>
			</div>
		</motion.div>
	);
};

export default ForgotPasswordPage;

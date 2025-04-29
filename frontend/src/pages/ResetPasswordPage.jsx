import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Input';
import { KeySquare } from 'lucide-react';
import toast from 'react-hot-toast';

const ResetPasswordPage = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const { resetPassword, error, isLoading, message } = useAuthStore();
	const { token } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error('Passwords do not match');
			return;
		}
		try {
			await resetPassword(token, password);
			toast.success('Password reset successfully, redirecting to login page...');
			setTimeout(() => navigate('/login'), 2000);
		} catch (error) {
			console.error(error);
			toast.error(error.message || 'Error resetting password');
		}
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
					Reset Password
				</h2>

				{error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
				{message && <p className="text-green-500 text-sm mb-4 text-center">{message}</p>}

				<form onSubmit={handleSubmit}>
					<Input
						icon={KeySquare}
						type="password"
						placeholder="New Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<Input
						icon={KeySquare}
						type="password"
						placeholder="Confirm New Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full mt-4 py-3 px-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? 'Resetting...' : 'Set New Password'}
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};

export default ResetPasswordPage;

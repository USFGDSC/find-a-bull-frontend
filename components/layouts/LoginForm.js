'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
	uNumber: z
		.string()
		.min(1, 'U-number is required')
		.regex(/^\d+$/, 'U-number must be numeric'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const LoginForm = () => {
	const [uNumber, setUNumber] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data) => {
		console.log('Form Data:', data);
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<Card className="w-full max-w-md p-8 bg-primary-background shadow-lg rounded-lg">
				{/* Header Section */}
				<div className="text-center mb-8 text-primary-foreground">
					<h1 className="text-3xl font-bold">Find-a-Bull</h1>
				</div>

				{/* Main Form Section */}
				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label className="block text-primary-foreground font-[family-name:var(--font-geist-mono)]">
							U-number
						</label>
						<Input
							className="w-full mt-1 border-gray-300 rounded-md text-primary-foreground"
							type="text"
							placeholder="Enter your U-number"
							{...register('uNumber')}
						/>
						{errors.uNumber && (
							<p className="mt-1 text-red-600 text-sm">
								{errors.uNumber.message}
							</p>
						)}
					</div>

					<div>
						<label className="block text-primary-foreground font-[family-name:var(--font-geist-mono)]">
							Password
						</label>
						<div className="flex w-full max-w-sm items-center space-x-2 relative">
							<Input
								className="w-full mt-1 border-gray-300 rounded-md text-primary-foreground"
								type={passwordVisible ? 'text' : 'password'}
								placeholder="Enter your password"
								{...register('password')}
							/>
							<button
								type="button"
								className="absolute right-3 top-3"
								onClick={() => setPasswordVisible(!passwordVisible)}
							>
								{passwordVisible ? (
									<EyeOff className="w-5 h-5 text-gray-500" />
								) : (
									<Eye className="w-5 h-5 text-gray-500" />
								)}
							</button>
						</div>
						{errors.password && (
							<p className="mt-1 text-red-600 text-sm">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="flex items-center mt-8">
						<Checkbox className="mr-2" />
						<label className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-sm">
							remember me
						</label>
					</div>

					<Button className="w-full bg-green-950 text-white" type="submit">
						Login
					</Button>

					{/* Error Message Placeholder */}
					<p className="mt-2 text-red-600 text-center text-sm">
						{/* Error message will go here */}
					</p>
				</form>

				{/* Footer Section */}
				<div className="flex justify-between mt-4">
					<a
						href="/forgot-password"
						className="text-primary-foreground hover:underline text-sm"
					>
						Forgot Password?
					</a>
					<a
						href="/create-account"
						className="text-primary-foreground hover:underline text-sm"
					>
						Create an Account
					</a>
				</div>
			</Card>
		</div>
	);
};

export default LoginForm;

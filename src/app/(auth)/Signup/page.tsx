'use client'

import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [acceptTerms, setAcceptTerms] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            setIsLoading(false)
            return
        }

        if (!acceptTerms) {
            alert('Please accept the terms and conditions!')
            setIsLoading(false)
            return
        }

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log('Sign up attempt:', formData)
        setIsLoading(false)
    }

    const passwordsMatch = formData.password === formData.confirmPassword
    const passwordValid = formData.password.length >= 8

    return (
        <div className="min-h-screen transition-colors duration-300"
            style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-lg">
                    {/* Sign Up Card */}
                    <div
                        className="rounded-2xl shadow-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-3xl"
                        style={{ backgroundColor: 'var(--back)' }}
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: 'var(--background)' }}>
                                <User className="w-8 h-8" />
                            </div>
                            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                            <p className="opacity-70">Join us today and get started</p>
                        </div>

                        {/* Sign Up Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* First Name */}
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium block">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            style={{ backgroundColor: 'var(--background)' }}
                                            placeholder="First name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium block">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            style={{ backgroundColor: 'var(--background)' }}
                                            placeholder="Last name"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium block">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        style={{ backgroundColor: 'var(--background)' }}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium block">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        style={{ backgroundColor: 'var(--background)' }}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium block">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.password && !passwordValid
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : 'border-transparent focus:border-blue-500'
                                            }`}
                                        style={{ backgroundColor: 'var(--background)' }}
                                        placeholder="Create a password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-80 transition-opacity"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {formData.password && !passwordValid && (
                                    <p className="text-red-500 text-sm">Password must be at least 8 characters long</p>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="text-sm font-medium block">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.confirmPassword && !passwordsMatch
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : 'border-transparent focus:border-blue-500'
                                            }`}
                                        style={{ backgroundColor: 'var(--background)' }}
                                        placeholder="Confirm your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-80 transition-opacity"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {formData.confirmPassword && !passwordsMatch && (
                                    <p className="text-red-500 text-sm">Passwords do not match</p>
                                )}
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                    className="mt-1 rounded border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="acceptTerms" className="text-sm cursor-pointer">
                                    I agree to the{' '}
                                    <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                                        Terms of Service
                                    </a>
                                    {' '}and{' '}
                                    <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading || !passwordValid || !passwordsMatch || !acceptTerms}
                                className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                style={{ backgroundColor: isLoading ? 'var(--WhenHover)' : undefined }}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Creating Account...</span>
                                    </div>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t opacity-20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 opacity-70" style={{ backgroundColor: 'var(--back)' }}>
                                    Or sign up with
                                </span>
                            </div>
                        </div>

                        {/* Social Sign Up Buttons */}
                        <div className="space-y-3">
                            <button
                                type="button"
                                className="w-full py-3 px-4 border border-gray-300 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
                                style={{ backgroundColor: 'var(--background)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--WhenHover)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span>Sign up with Google</span>
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center mt-8">
                            <p className="text-sm opacity-70">
                                Already have an account?{' '}
                                <button onClick={() => { router.push('/Login') }} className="text-blue-500 hover:text-blue-600 font-semibold transition-colors cursor-pointer">
                                    Login here
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
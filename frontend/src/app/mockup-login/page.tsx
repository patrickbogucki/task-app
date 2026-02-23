export default function LoginMockup() {
    return (
        <div className="flex min-h-screen bg-neutral-light">
            {/* Left Pane - Colorful Branding Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-brand-red text-brand-dark flex-col justify-between p-12 relative overflow-hidden">
                {/* Subtle decorative background circle */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

                <div className="relative z-10 flex items-center space-x-3">
                    <div className="bg-brand-dark rounded-lg p-2.5 flex items-center justify-center shadow-md">
                        <svg className="w-8 h-8 text-neutral-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">TaskApp</span>
                </div>

                <div className="relative z-10 max-w-lg mt-auto mb-auto">
                    <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-6">
                        Streamline your retail operations.
                    </h1>
                    <p className="text-lg text-brand-dark mb-10 leading-relaxed font-semibold">
                        Manage tasks, communicate with your team, and track compliance across all your store locations in one perfectly synced platform.
                    </p>

                    <div className="flex items-center space-x-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-red-400 border-2 border-brand-dark flex items-center justify-center font-bold text-xs text-brand-dark shadow-sm">HQ</div>
                            <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-brand-dark flex items-center justify-center font-bold text-xs text-brand-dark shadow-sm">SL</div>
                            <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-brand-dark flex items-center justify-center font-bold text-xs text-brand-dark shadow-sm">ED</div>
                        </div>
                        <span className="text-sm font-bold text-brand-dark">Trusted by over 500+ locations</span>
                    </div>
                </div>
            </div>

            {/* Right Pane - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-neutral-warm relative">
                <div className="mx-auto w-full max-w-sm lg:max-w-md relative z-10">
                    {/* Mobile Logo (visible only on small screens) */}
                    <div className="lg:hidden flex items-center space-x-3 mb-8">
                        <div className="bg-brand-red rounded-lg p-2.5 flex items-center justify-center shadow-md">
                            <svg className="w-6 h-6 text-neutral-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-brand-dark">TaskApp</span>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-brand-dark">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-neutral-dark">
                            Please enter your details to sign in
                        </p>
                    </div>

                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
                                Email address
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="name@company.com"
                                    className="block w-full appearance-none rounded-md border border-neutral-medium px-4 py-3 text-brand-dark placeholder-neutral-dark focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red sm:text-sm bg-neutral-light shadow-sm transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-brand-dark mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="••••••••"
                                    className="block w-full appearance-none rounded-md border border-neutral-medium px-4 py-3 text-brand-dark placeholder-neutral-dark focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red sm:text-sm bg-neutral-light shadow-sm transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-neutral-medium text-brand-red focus:ring-brand-red bg-neutral-light"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-brown">
                                    Remember me for 30 days
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-semibold text-brand-red hover:text-red-700 hover:underline decoration-2 underline-offset-4">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center items-center space-x-2 rounded-md border border-transparent bg-brand-red py-3 px-4 text-sm font-bold text-neutral-warm shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-all transform active:scale-[0.98]"
                            >
                                <span>Sign in to account</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </form>

                    {/* Demo Roles Section */}
                    <div className="mt-10 relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-neutral-medium gap-2"></div>
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-neutral-warm px-6 text-neutral-dark">Or quick login (Demo)</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-neutral-medium bg-neutral-light px-4 py-2.5 text-sm font-medium text-brand-brown shadow-sm hover:bg-neutral-medium transition-colors">
                            HQ Admin
                        </button>
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-neutral-medium bg-neutral-light px-4 py-2.5 text-sm font-medium text-brand-brown shadow-sm hover:bg-neutral-medium transition-colors">
                            Store Lead
                        </button>
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-neutral-medium bg-neutral-light px-4 py-2.5 text-sm font-medium text-brand-brown shadow-sm hover:bg-neutral-medium transition-colors col-span-2 hover:border-brand-red">
                            Educator
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

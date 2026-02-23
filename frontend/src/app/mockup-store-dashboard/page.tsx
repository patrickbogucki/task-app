import React from 'react';

export default function StoreLeadDashboardMockup() {
    return (
        <div className="min-h-screen bg-neutral-light flex font-sans">

            {/* Sidebar Navigation */}
            <aside className="w-64 bg-brand-dark text-neutral-warm flex flex-col hidden md:flex">
                {/* Brand/Logo Area */}
                <div className="h-16 flex items-center px-6 border-b border-neutral-dark/30">
                    <div className="bg-brand-red rounded p-1.5 mr-3">
                        <svg className="w-5 h-5 text-neutral-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="font-bold text-lg tracking-tight">TaskApp <span className="text-brand-brown font-black text-xs uppercase ml-1 px-1.5 py-0.5 rounded-full bg-brand-brown/20">Store</span></span>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <a href="#" className="flex items-center px-3 py-2.5 bg-brand-red/10 text-brand-red rounded-lg font-medium">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        My Store Hub
                    </a>
                    <a href="#" className="flex items-center justify-between px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                            HQ Inbox
                        </div>
                        <span className="bg-brand-red text-neutral-warm text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        My Team
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                        Store Tasks
                    </a>
                </nav>

                {/* User Profile Footer */}
                <div className="p-4 border-t border-neutral-dark/30">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-brown flex items-center justify-center text-sm font-bold">SM</div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-neutral-warm">Sarah Manager</p>
                            <p className="text-xs text-neutral-medium">Store #0142 (Seattle)</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-neutral-warm border-b border-neutral-medium flex items-center justify-between px-8 z-10">
                    <h1 className="text-xl font-bold text-brand-dark">Store #0142 Dashboard</h1>

                    <div className="flex items-center space-x-6">
                        <div className="hidden sm:flex items-center px-3 py-1.5 bg-brand-brown/10 text-brand-brown rounded-md text-sm font-medium border border-brand-brown/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                            Store Open (9AM - 9PM)
                        </div>

                        {/* Notifications */}
                        <button className="relative text-neutral-dark hover:text-brand-dark">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-brand-red ring-2 ring-neutral-warm"></span>
                        </button>

                        {/* Create Task Button */}
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-brand-dark bg-neutral-light border-neutral-medium hover:bg-neutral-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-medium">
                            <svg className="-ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            New Store Task
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column: Urgent Inbox (2/3 width) */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Urgent Action Card */}
                            <div className="bg-brand-red text-brand-dark rounded-xl shadow-md overflow-hidden relative border border-red-700">
                                <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
                                <div className="p-6 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <span className="bg-brand-dark text-neutral-warm text-xs font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">Overdue Action Required</span>
                                            <span className="text-sm font-bold ml-3 text-red-900">Due Yesterday</span>
                                        </div>
                                        <h2 className="text-2xl font-extrabold mb-1">Backroom Safety Audit</h2>
                                        <p className="text-brand-dark/80 font-medium">Standard checklist submission required.</p>
                                    </div>
                                    <button className="mt-4 md:mt-0 px-6 py-2.5 bg-brand-dark text-neutral-warm font-bold rounded-lg shadow-sm hover:bg-black transition-colors shrink-0">
                                        Start Audit Now
                                    </button>
                                </div>
                            </div>

                            {/* HQ Inbox Section */}
                            <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-neutral-medium bg-neutral-light/50 flex justify-between items-center">
                                    <div className="flex items-center text-brand-dark font-bold text-lg">
                                        <svg className="w-5 h-5 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                                        HQ Inbox (Needs Attention)
                                    </div>
                                    <span className="text-sm text-neutral-dark font-medium">3 Unread Tasks</span>
                                </div>

                                <ul className="divide-y divide-neutral-medium">
                                    {/* Task Item 1 - Unread/New */}
                                    <li className="p-5 hover:bg-neutral-light/30 transition-colors flex items-start group">
                                        <div className="mt-1 flex-shrink-0 relative">
                                            <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                            <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-brand-red ring-2 ring-neutral-warm"></span>
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-red transition-colors">Q3 Visual Merchandising Update</h3>
                                                <span className="text-xs font-semibold text-brand-red whitespace-nowrap bg-brand-red/5 px-2 py-1 rounded border border-brand-red/10">Due Today, 5:00 PM</span>
                                            </div>
                                            <p className="text-sm text-neutral-dark mt-1 line-clamp-1">Please update the front window displays with the new Q3 promotional materials delivered this week. Follow the attached planogram.</p>
                                            <div className="mt-3 flex items-center justify-between">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-light border border-neutral-medium text-neutral-dark">
                                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                                                    1 Attachment
                                                </span>
                                                <button className="text-xs font-bold text-brand-dark border border-neutral-medium rounded px-3 py-1 hover:bg-neutral-medium/20 transition-colors">Open Task</button>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Task Item 2 - Unread Acknowledgment */}
                                    <li className="p-5 hover:bg-neutral-light/30 transition-colors flex items-start group">
                                        <div className="mt-1 flex-shrink-0 relative">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                                            </div>
                                            <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-brand-red ring-2 ring-neutral-warm"></span>
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-red transition-colors">Holiday Promo Deployment Protocol</h3>
                                                <span className="text-xs font-semibold text-neutral-dark whitespace-nowrap">Due Oct 15</span>
                                            </div>
                                            <p className="text-sm text-neutral-dark mt-1 line-clamp-1">Acknowledge reading the updated holiday deployment protocols for front-of-house staff.</p>
                                            <div className="mt-3 flex items-center justify-between">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-light border border-neutral-medium text-neutral-dark">
                                                    Read Receipt Required
                                                </span>
                                                <button className="text-xs font-bold text-brand-dark border border-neutral-medium rounded px-3 py-1 hover:bg-neutral-medium/20 transition-colors">Open Task</button>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Task Item 3 - In Progress */}
                                    <li className="p-5 hover:bg-neutral-light/30 transition-colors flex items-start bg-neutral-light/20">
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-brand-brown/10 border border-brand-brown/30 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-base font-bold text-brand-dark">Quarterly Inventory Prep</h3>
                                                <span className="text-xs font-semibold text-brand-brown bg-brand-brown/5 px-2 py-1 rounded border border-brand-brown/10">In Progress</span>
                                            </div>
                                            <p className="text-sm text-neutral-dark mt-1 line-clamp-1">Complete the pre-inventory checklist for the backroom and sales floor.</p>
                                            <div className="mt-3 flex items-center justify-between">
                                                <div className="flex items-center w-full max-w-[200px]">
                                                    <div className="w-full bg-neutral-medium rounded-full h-1.5 mr-3">
                                                        <div className="bg-brand-brown h-1.5 rounded-full" style={{ width: '60%' }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-neutral-dark">60%</span>
                                                </div>
                                                <button className="text-xs font-bold text-brand-dark border border-neutral-medium rounded px-3 py-1 hover:bg-neutral-medium/20 transition-colors">Resume</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-neutral-light border-t border-neutral-medium p-3 text-center">
                                    <button className="text-sm font-bold text-brand-dark hover:text-brand-red transition-colors">View All Completed Tasks →</button>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Today's Overview & Team Status (1/3 width) */}
                        <div className="space-y-8">

                            {/* Team Status Card */}
                            <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-neutral-medium bg-neutral-light/50">
                                    <h3 className="text-sm font-bold text-brand-dark tracking-wide uppercase">Team Task Status (Today)</h3>
                                </div>
                                <div className="p-5">

                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-3xl font-extrabold text-brand-dark">18</p>
                                            <p className="text-xs text-neutral-dark font-medium mt-1">Total Assigned Tasks</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-extrabold text-emerald-600">12</p>
                                            <p className="text-xs text-neutral-dark font-medium mt-1">Completed</p>
                                        </div>
                                    </div>

                                    <div className="w-full bg-neutral-medium rounded-full h-2 mb-6 overflow-hidden flex">
                                        <div className="bg-emerald-500 h-2" style={{ width: '66%' }}></div>
                                        <div className="bg-brand-red h-2" style={{ width: '10%' }}></div>
                                        <div className="bg-brand-brown/40 h-2" style={{ width: '24%' }}></div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="flex items-center text-neutral-dark"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> Completed</span>
                                            <span className="font-bold text-brand-dark">12 (66%)</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="flex items-center text-neutral-dark"><span className="w-2 h-2 rounded-full bg-brand-brown/40 mr-2"></span> To Do</span>
                                            <span className="font-bold text-brand-dark">4 (24%)</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="flex items-center text-neutral-dark"><span className="w-2 h-2 rounded-full bg-brand-red mr-2"></span> Overdue</span>
                                            <span className="font-bold text-brand-red">2 (10%)</span>
                                        </div>
                                    </div>

                                    <button className="mt-6 w-full py-2 border border-neutral-medium rounded-md font-bold text-sm text-brand-dark hover:bg-neutral-light/50 transition-colors">
                                        View Team Workload
                                    </button>

                                </div>
                            </div>

                            {/* Delegated Tasks Overview */}
                            <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-neutral-medium bg-neutral-light/50 flex justify-between items-center">
                                    <h3 className="text-sm font-bold text-brand-dark tracking-wide uppercase">Delegated by Me</h3>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">4 Active</span>
                                </div>
                                <div className="divide-y divide-neutral-medium">
                                    <div className="p-4 hover:bg-neutral-light/50">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-sm font-bold text-brand-dark">Morning Restock</p>
                                            <span className="text-xs text-neutral-dark">Due 10AM</span>
                                        </div>
                                        <p className="text-xs text-neutral-dark mb-2">Assigned to: <span className="font-medium text-brand-dark">Mike T.</span></p>
                                        <div className="flex items-center text-emerald-600 text-xs font-bold">
                                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            Completed
                                        </div>
                                    </div>
                                    <div className="p-4 hover:bg-neutral-light/50">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-sm font-bold text-brand-dark">Window Display Q3</p>
                                            <span className="text-xs text-brand-red font-bold">Due 5PM</span>
                                        </div>
                                        <p className="text-xs text-neutral-dark mb-2">Assigned to: <span className="font-medium text-brand-dark">Jessica L.</span></p>
                                        <div className="flex items-center text-brand-brown text-xs font-bold">
                                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            In Progress
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

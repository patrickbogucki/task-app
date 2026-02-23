import React from 'react';

export default function HQDashboardMockup() {
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
                    <span className="font-bold text-lg tracking-tight">TaskApp <span className="text-brand-red font-black text-xs uppercase ml-1 px-1.5 py-0.5 rounded-full bg-brand-red/20">HQ</span></span>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <a href="#" className="flex items-center px-3 py-2.5 bg-brand-red/10 text-brand-red rounded-lg font-medium">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                        All Tasks
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        Locations
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        Directory
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        Reports
                    </a>
                </nav>

                {/* User Profile Footer */}
                <div className="p-4 border-t border-neutral-dark/30">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-sm font-bold">JD</div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-neutral-warm">Jane Director</p>
                            <p className="text-xs text-neutral-medium">Regional Ops Lead</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-neutral-warm border-b border-neutral-medium flex items-center justify-between px-8 z-10">
                    <h1 className="text-xl font-bold text-brand-dark">Dashboard Overview</h1>

                    <div className="flex items-center space-x-6">
                        {/* Search */}
                        <div className="relative hidden sm:block">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                            <input type="text" placeholder="Search tasks, stores..." className="block w-64 pl-10 pr-3 py-2 border border-neutral-medium rounded-md leading-5 bg-neutral-light placeholder-neutral-dark text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red sm:text-sm" />
                        </div>

                        {/* Notifications */}
                        <button className="relative text-neutral-dark hover:text-brand-dark">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-brand-red ring-2 ring-neutral-warm"></span>
                        </button>

                        {/* Create Task Button */}
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-neutral-warm bg-brand-red hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red">
                            <svg className="-ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            Create New Task
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Content */}
                <div className="flex-1 overflow-y-auto p-8">

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">Active Tasks (HQ)</p>
                                <div className="p-2 bg-blue-50 rounded-lg"><svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg></div>
                            </div>
                            <p className="text-3xl font-extrabold text-brand-dark mt-4">24</p>
                            <div className="mt-2 text-sm">
                                <span className="text-emerald-600 font-medium whitespace-nowrap"><svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>12%</span>
                                <span className="text-neutral-dark ml-2">vs last week</span>
                            </div>
                        </div>

                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">Avg. Completion Rate</p>
                                <div className="p-2 bg-emerald-50 rounded-lg"><svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                            </div>
                            <p className="text-3xl font-extrabold text-brand-dark mt-4">86%</p>
                            <div className="mt-2 text-sm">
                                <span className="text-emerald-600 font-medium whitespace-nowrap"><svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>2.4%</span>
                                <span className="text-neutral-dark ml-2">vs last week</span>
                            </div>
                        </div>

                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">Stores Behind Schedule</p>
                                <div className="p-2 bg-brand-red/10 rounded-lg"><svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                            </div>
                            <p className="text-3xl font-extrabold text-brand-dark mt-4">3</p>
                            <div className="mt-2 text-sm">
                                <span className="text-brand-red font-medium whitespace-nowrap"><svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>1 store</span>
                                <span className="text-neutral-dark ml-2">vs last week</span>
                            </div>
                        </div>

                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">Submissions Pending Review</p>
                                <div className="p-2 bg-brand-brown/10 rounded-lg"><svg className="w-5 h-5 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div>
                            </div>
                            <p className="text-3xl font-extrabold text-brand-dark mt-4">12</p>
                            <div className="mt-2 text-sm">
                                <a href="#" className="font-medium text-brand-red hover:underline decoration-brand-red/40 underline-offset-4">View submissions →</a>
                            </div>
                        </div>
                    </div>

                    {/* Active Campaign / Tasks Tracking Table */}
                    <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden mb-8">
                        <div className="px-6 py-5 border-b border-neutral-medium flex items-center justify-between bg-neutral-light/50">
                            <div>
                                <h3 className="text-lg font-bold text-brand-dark">Active HQ Objectives</h3>
                                <p className="text-sm text-neutral-dark mt-1">Track store compliance across all open campaigns.</p>
                            </div>
                            <button className="text-sm font-medium text-brand-dark border border-neutral-medium bg-neutral-warm hover:bg-neutral-light px-3 py-1.5 rounded-md transition-colors">
                                View All
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-neutral-medium">
                                <thead className="bg-neutral-light">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-dark uppercase tracking-wider">Campaign / Task Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-dark uppercase tracking-wider">Due Date</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-dark uppercase tracking-wider">Target Role</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-dark uppercase tracking-wider">Compliance</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-neutral-dark uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-neutral-warm divide-y divide-neutral-medium">
                                    <tr className="hover:bg-neutral-light/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Q3 Visual Merchandising Update</p>
                                                    <p className="text-xs text-neutral-dark">Requires photo proof</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark">
                                            Today, 5:00 PM
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-brand-brown/10 text-brand-brown">
                                                Store Lead
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="w-full bg-neutral-medium rounded-full h-2.5 max-w-[120px] mb-1">
                                                <div className="bg-brand-red h-2.5 rounded-full" style={{ width: '45%' }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-neutral-dark">45/100 Stores</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FFF4E5] text-[#8A5200] border border-[#FFD599]">
                                                In Progress
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-neutral-light/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Backroom Safety Audit</p>
                                                    <p className="text-xs text-neutral-dark">Standard checklist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-red font-medium">
                                            Yesterday
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neutral-dark/20 text-brand-dark">
                                                Manager
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="w-full bg-neutral-medium rounded-full h-2.5 max-w-[120px] mb-1">
                                                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '97%' }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-neutral-dark">97/100 Stores</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FFEBEB] text-[#B91C1C] border border-[#FECACA]">
                                                Overdue Action
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-neutral-light/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Holiday Promo Deployment</p>
                                                    <p className="text-xs text-neutral-dark">Reading acknowledgement</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark">
                                            Oct 15, 2026
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                All Educators
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="w-full bg-neutral-medium rounded-full h-2.5 max-w-[120px] mb-1">
                                                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-neutral-dark">100/100 Stores</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-neutral-light px-6 py-3 border-t border-neutral-medium flex items-center justify-between sm:px-6">
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-neutral-dark">
                                        Showing <span className="font-medium text-brand-dark">1</span> to <span className="font-medium text-brand-dark">3</span> of <span className="font-medium text-brand-dark">24</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-medium bg-neutral-warm text-sm font-medium text-neutral-dark hover:bg-neutral-light">
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a href="#" aria-current="page" className="z-10 bg-brand-red/10 border-brand-red text-brand-red relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
                                        <a href="#" className="bg-neutral-warm border-neutral-medium text-neutral-dark hover:bg-neutral-light relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-medium bg-neutral-warm text-sm font-medium text-neutral-dark hover:bg-neutral-light">
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Underperforming Locations Section (Bottom split) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm p-6">
                            <h3 className="text-lg font-bold text-brand-dark mb-4">Location Watchlist (Low Compliance)</h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'Store #0142 - Seattle', lead: 'Sarah Jenkins', score: '32%', trend: 'down' },
                                    { name: 'Store #0881 - Chicago', lead: 'Marcus Chen', score: '45%', trend: 'down' },
                                    { name: 'Store #1042 - Miami', lead: 'David Alvara', score: '52%', trend: 'flat' }
                                ].map((store, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-neutral-light rounded-lg border border-neutral-medium">
                                        <div className="flex items-center">
                                            <div className="bg-brand-brown/10 p-2 rounded-md mr-3">
                                                <svg className="w-5 h-5 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-brand-dark">{store.name}</p>
                                                <p className="text-xs text-neutral-dark">Lead: {store.lead}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-brand-red">{store.score}</p>
                                            <button className="text-xs font-medium text-brand-dark hover:text-brand-red underline decoration-brand-dark/30 underline-offset-2 mt-0.5">Contact Lead</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <svg className="w-32 h-32 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-brand-dark mb-2 relative z-10">Need to broadcast an update?</h3>
                            <p className="text-sm text-neutral-dark mb-6 max-w-sm relative z-10">Send a priority task or read-receipt announcement to all locations instantly.</p>
                            <div className="space-y-3 relative z-10">
                                <button className="w-full text-left px-4 py-3 bg-neutral-light border border-neutral-medium rounded-lg hover:border-brand-red hover:shadow-sm transition-all group flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Create Action Required Task</p>
                                        <p className="text-xs text-neutral-dark mt-0.5">Requires photo or form submission</p>
                                    </div>
                                    <svg className="w-5 h-5 text-neutral-medium group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                                <button className="w-full text-left px-4 py-3 bg-neutral-light border border-neutral-medium rounded-lg hover:border-brand-red hover:shadow-sm transition-all group flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Send Acknowledgement Notice</p>
                                        <p className="text-xs text-neutral-dark mt-0.5">Requires "Mark as Read" click only</p>
                                    </div>
                                    <svg className="w-5 h-5 text-neutral-medium group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

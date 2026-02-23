import React from 'react';

export default function EducatorDashboardMockup() {
    return (
        <div className="min-h-screen bg-neutral-light flex flex-col font-sans">

            {/* Mobile-First Header Navigation */}
            <header className="bg-brand-dark text-neutral-warm shadow-md z-10">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center">
                        <div className="bg-brand-red rounded p-1.5 mr-2">
                            <svg className="w-5 h-5 text-neutral-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg tracking-tight">TaskApp</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative text-neutral-light hover:text-neutral-warm">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-brand-red ring-2 ring-brand-dark"></span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-neutral-medium flex items-center justify-center text-sm font-bold text-brand-dark border-2 border-transparent">
                            JL
                        </div>
                    </div>
                </div>

                {/* Mobile Tabs */}
                <div className="flex border-t border-neutral-dark/30 px-2">
                    <button className="flex-1 py-3 text-sm font-bold border-b-2 border-brand-red text-neutral-warm">
                        My Tasks
                    </button>
                    <button className="flex-1 py-3 text-sm font-bold border-b-2 border-transparent text-neutral-medium hover:text-neutral-light">
                        Team Chat
                    </button>
                    <button className="flex-1 py-3 text-sm font-bold border-b-2 border-transparent text-neutral-medium hover:text-neutral-light">
                        Schedule
                    </button>
                </div>
            </header>

            {/* Main Content Area (Mobile Container) */}
            <main className="flex-1 overflow-y-auto bg-neutral-light">
                <div className="max-w-md mx-auto w-full p-4 space-y-6 pb-20">

                    {/* Daily Greeting & Status */}
                    <div>
                        <h1 className="text-2xl font-extrabold text-brand-dark">Good morning, Jessica!</h1>
                        <p className="text-sm text-neutral-dark font-medium mt-1">You have <span className="text-brand-red font-bold">2 priority tasks</span> for your shift today.</p>
                    </div>

                    {/* Progress Summary Card */}
                    <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-brand-dark uppercase tracking-wider">Shift Progress</span>
                            <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">1 of 4 Done</span>
                        </div>
                        <div className="w-full bg-neutral-medium rounded-full h-2.5 mb-2">
                            <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                    </div>

                    {/* Priority Action Tasks */}
                    <div>
                        <h2 className="text-sm font-bold text-neutral-dark uppercase tracking-wider mb-3">Priority Actions</h2>
                        <div className="space-y-3">

                            {/* Priority Task 1: Assigned by Store Lead */}
                            <div className="bg-neutral-warm rounded-xl border border-red-200 shadow-sm overflow-hidden relative group cursor-pointer">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"></div>
                                <div className="p-4 pl-5">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-base font-bold text-brand-dark pr-6">Window Display Q3</h3>
                                        <span className="shrink-0 bg-red-100 text-red-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-red-200">
                                            Due 5PM
                                        </span>
                                    </div>
                                    <p className="text-xs text-neutral-dark mb-3 line-clamp-1">Install new vinyls and mannequins. Photo required.</p>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center text-brand-dark font-medium">
                                            <div className="w-5 h-5 rounded-full bg-brand-brown/20 flex items-center justify-center mr-1.5 border border-brand-brown/30 text-[8px] font-bold text-brand-brown">SM</div>
                                            From: Sarah M.
                                        </div>
                                        <span className="font-bold text-brand-red">Not Started</span>
                                    </div>
                                </div>
                            </div>

                            {/* Priority Task 2: Standard Store Operation */}
                            <div className="bg-neutral-warm rounded-xl border border-red-200 shadow-sm overflow-hidden relative group cursor-pointer">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"></div>
                                <div className="p-4 pl-5">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-base font-bold text-brand-dark pr-6">Morning Fitting Room Clear</h3>
                                        <span className="shrink-0 bg-red-100 text-red-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-red-200">
                                            Due 11AM
                                        </span>
                                    </div>
                                    <p className="text-xs text-neutral-dark mb-3 line-clamp-1">Clear all items, sweep floors, check mirrors.</p>
                                    <div className="flex items-start md:items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="bg-[#FFEBEB] p-2 rounded mr-3 mt-1 md:mt-0">
                                                <svg className="w-5 h-5 text-[#B91C1C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-brand-dark mb-0.5" style={{ fontFamily: 'var(--font-geist-sans)' }}>Overdue: Q3 Display Confirmation</p>
                                                <p className="text-sm text-neutral-dark mb-2">Store Manager requested confirmation 2 days ago.</p>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FFEBEB] text-[#B91C1C] border border-[#FECACA]">
                                                    Action Required
                                                </span>
                                            </div>
                                        </div>
                                        <button className="mt-3 md:mt-0 text-sm font-semibold text-brand-red hover:underline whitespace-nowrap">
                                            Acknowledge Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Later in Shift container */}
                    <div>
                        <h2 className="text-sm font-bold text-neutral-dark uppercase tracking-wider mb-3">Later Today</h2>
                        <div className="space-y-3">

                            {/* Standard Task - In Progress */}
                            <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden relative cursor-pointer opacity-75">
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-base font-bold text-brand-dark">Restock Denim Wall (Men&apos;s)</h3>
                                        <span className="shrink-0 text-neutral-dark text-xs font-bold">
                                            Due 3PM
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center text-xs">
                                        <div className="w-full bg-neutral-medium rounded-full h-1.5 mr-3 flex-1">
                                            <div className="bg-brand-brown h-1.5 rounded-full" style={{ width: '40%' }}></div>
                                        </div>
                                        <span className="font-bold text-brand-brown whitespace-nowrap">40% Complete</span>
                                    </div>
                                </div>
                            </div>

                            {/* Standard Task - Unread Info */}
                            <div className="bg-neutral-light rounded-xl border-2 border-dashed border-neutral-medium shadow-sm overflow-hidden relative cursor-pointer">
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-base font-bold text-brand-dark">Read: Fall Dress Code Updates</h3>
                                        <span className="block h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0 mt-1"></span>
                                    </div>
                                    <p className="text-xs text-neutral-dark mt-1">Quick 2-minute read required by end of week.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Completed Section (Collapsed) */}
                    <button className="w-full bg-neutral-warm border border-neutral-medium rounded-xl p-3 flex justify-between items-center text-sm font-bold text-brand-dark shadow-sm">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Completed (1)
                        </div>
                        <svg className="w-4 h-4 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>

                </div>
            </main>

        </div>
    );
}

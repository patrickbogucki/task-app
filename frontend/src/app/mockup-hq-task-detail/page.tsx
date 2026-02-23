import React from 'react';

export default function HQTaskDetailMockup() {
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
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 bg-brand-red/10 text-brand-red rounded-lg font-medium">
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
                <header className="h-16 bg-neutral-warm border-b border-neutral-medium flex items-center justify-between px-8 z-10 shrink-0">
                    <div className="flex items-center">
                        <a href="#" className="text-neutral-dark hover:text-brand-dark mr-4">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </a>
                        <div className="flex items-center space-x-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FFF4E5] text-[#8A5200] border border-[#FFD599]">
                                In Progress
                            </span>
                            <h1 className="text-xl font-bold text-brand-dark">Q3 Visual Merchandising Update</h1>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button className="text-sm font-semibold text-neutral-dark hover:text-brand-dark px-3 py-2 border border-neutral-medium rounded-md bg-neutral-light">
                            Edit Task
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-brand-dark bg-brand-red/10 border-brand-red hover:bg-brand-red/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red">
                            <svg className="-ml-1 mr-2 h-4 w-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            Remind Overdue Stores
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Content */}
                <div className="flex-1 overflow-y-auto p-8 relative">

                    <div className="flex flex-col xl:flex-row gap-8">

                        {/* Left Column: Task Details & Instructions */}
                        <div className="flex-1 space-y-8">

                            {/* Stats Summary Card */}
                            <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm p-6">
                                <h3 className="text-sm font-bold text-neutral-dark uppercase tracking-wider mb-5">Campaign Progression</h3>

                                <div className="flex items-end justify-between mb-2">
                                    <div>
                                        <span className="text-4xl font-extrabold text-brand-dark">45</span>
                                        <span className="text-xl font-medium text-neutral-dark"> / 100 Stores</span>
                                    </div>
                                    <span className="text-sm font-bold text-brand-red bg-brand-red/10 px-2 py-1 rounded">45% Completed</span>
                                </div>

                                <div className="w-full bg-neutral-medium rounded-full h-3 mb-6 overflow-hidden">
                                    <div className="bg-emerald-500 h-3" style={{ width: '45%' }}></div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 border-t border-neutral-medium pt-5">
                                    <div>
                                        <p className="text-sm text-neutral-dark">Completed</p>
                                        <p className="text-xl font-bold text-brand-dark">45</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-dark">In Progress / Unread</p>
                                        <p className="text-xl font-bold text-brand-dark">42</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-brand-red font-medium">Overdue Action</p>
                                        <p className="text-xl font-bold text-brand-red">13</p>
                                    </div>
                                </div>
                            </div>

                            {/* Task Details Card */}
                            <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-neutral-medium bg-neutral-light/50 flex justify-between items-center">
                                    <h3 className="text-sm font-bold text-neutral-dark uppercase tracking-wider">Instructions & Details</h3>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-6 mb-8 bg-neutral-light p-4 rounded-lg border border-neutral-medium">
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1">Target Role</p>
                                            <p className="text-sm font-bold text-brand-dark">Store Lead</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1">Due Date</p>
                                            <p className="text-sm font-bold text-brand-dark">Today, 5:00 PM</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1">Created By</p>
                                            <p className="text-sm font-bold text-brand-dark flex items-center">
                                                <div className="w-5 h-5 rounded-full bg-brand-red text-[8px] flex items-center justify-center text-neutral-warm mr-2">JD</div>
                                                Jane Director
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1">Requirements</p>
                                            <p className="text-sm font-bold text-brand-dark">Photo Submission</p>
                                        </div>
                                    </div>

                                    <div className="prose prose-sm max-w-none text-brand-dark">
                                        <p className="font-semibold text-base mb-2">Please update the front window displays with the new Q3 promotional materials delivered this week.</p>
                                        <p>Follow the attached planogram exactly. The primary focus is the new "Fall Forward" campaign.</p>
                                        <ul className="mt-4 space-y-1">
                                            <li>Remove all summer signage (store in back room or discard if damaged).</li>
                                            <li>Install the large vinyl cling on the primary entrance door.</li>
                                            <li>Ensure lighting is directed at the mannequins, not the signage.</li>
                                        </ul>
                                        <p className="mt-4 text-brand-red font-medium">You must upload a clear photo of the completed window display from the outside of the store to complete this task.</p>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-neutral-medium">
                                        <h4 className="text-sm font-bold text-brand-dark mb-3">Attachments (1)</h4>
                                        <div className="flex items-center p-3 border border-neutral-medium rounded-lg bg-neutral-light hover:border-brand-red transition-colors cursor-pointer max-w-sm">
                                            <div className="p-2 bg-brand-red/10 rounded mr-3">
                                                <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-brand-dark">fall-planogram-q3.pdf</p>
                                                <p className="text-xs text-neutral-dark">2.4 MB</p>
                                            </div>
                                            <div className="ml-auto">
                                                <svg className="w-5 h-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Store Compliance Table */}
                        <div className="xl:w-2/5 flex flex-col">
                            <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden flex-1 flex flex-col">
                                <div className="px-6 py-4 border-b border-neutral-medium bg-neutral-light/50 flex items-center justify-between">
                                    <h3 className="text-sm font-bold text-neutral-dark uppercase tracking-wider">Store Status</h3>
                                    <div className="relative">
                                        <input type="text" placeholder="Filter stores..." className="block w-48 pl-3 pr-3 py-1.5 border border-neutral-medium rounded-md text-brand-dark placeholder-neutral-dark focus:outline-none focus:ring-1 focus:ring-brand-red text-xs bg-neutral-light" />
                                    </div>
                                </div>

                                {/* Store List */}
                                <div className="overflow-y-auto max-h-[600px] flex-1">
                                    <ul className="divide-y divide-neutral-medium">
                                        <li className="p-4 hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Store #0142 - Seattle</p>
                                                    <p className="text-xs text-neutral-dark">Lead: Sarah Jenkins</p>
                                                </div>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                                                    Completed
                                                </span>
                                            </div>
                                            <div className="mt-2 text-xs text-neutral-dark flex items-center text-brand-red hidden group-hover:flex">
                                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                View Submission
                                            </div>
                                        </li>
                                        <li className="p-4 hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Store #0221 - Portland</p>
                                                    <p className="text-xs text-neutral-dark">Lead: James Miller</p>
                                                </div>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                                                    Completed
                                                </span>
                                            </div>
                                        </li>
                                        <li className="p-4 hover:bg-neutral-light/50 transition-colors cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Store #0881 - Chicago</p>
                                                    <p className="text-xs text-neutral-dark">Lead: Marcus Chen</p>
                                                </div>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FFEBEB] text-[#B91C1C] border border-[#FECACA]">
                                                    Overdue
                                                </span>
                                            </div>
                                        </li>
                                        <li className="p-4 hover:bg-neutral-light/50 transition-colors cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Store #1042 - Miami</p>
                                                    <p className="text-xs text-neutral-dark">Lead: David Alvara</p>
                                                </div>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FFF4E5] text-[#8A5200] border border-[#FFD599]">
                                                    Acknowledged
                                                </span>
                                            </div>
                                            <div className="mt-1 w-full bg-neutral-medium rounded-full h-1.5 max-w-[100px]">
                                                <div className="bg-brand-brown h-1.5 rounded-full" style={{ width: '50%' }}></div>
                                            </div>
                                        </li>
                                        <li className="p-4 hover:bg-neutral-light/50 transition-colors cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Store #0554 - Austin</p>
                                                    <p className="text-xs text-neutral-dark">Lead: Elena Rodriguez</p>
                                                </div>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-medium/50 text-neutral-dark border border-neutral-medium border-dashed">
                                                    Unread
                                                </span>
                                            </div>
                                        </li>
                                        <li className="p-4 hover:bg-neutral-light/50 transition-colors cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark">Store #0339 - Denver</p>
                                                    <p className="text-xs text-neutral-dark">Lead: Thomas Wright</p>
                                                </div>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FFEBEB] text-[#B91C1C] border border-[#FECACA]">
                                                    Overdue
                                                </span>
                                            </div>
                                        </li>
                                        {/* More mock items could go here */}
                                    </ul>
                                </div>
                                <div className="p-3 border-t border-neutral-medium bg-neutral-light text-center">
                                    <button className="text-xs font-bold text-brand-dark hover:text-brand-red">Load More Stores</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

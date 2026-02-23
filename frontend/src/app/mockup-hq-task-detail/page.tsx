import React from 'react';

export default function HQTaskDetailMockup() {
    return (
        <div className="min-h-screen bg-brand-dark flex font-sans p-2 md:p-3">

            {/* Sidebar Navigation */}
            <aside className="w-64 bg-brand-dark text-neutral-warm flex flex-col hidden md:flex rounded-l-[2rem]">
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
            <main className="flex-1 flex flex-col overflow-hidden bg-neutral-light rounded-[2rem] shadow-[0_0_40px_rgba(255,100,100,0.15)] ring-1 ring-neutral-medium/50 relative z-10">
                {/* Top Header */}
                <header className="h-16 bg-neutral-warm border-b border-neutral-medium flex items-center justify-between px-8 z-20 shrink-0 rounded-t-[2rem]">
                    <div className="flex items-center">
                        <a href="#" className="text-neutral-dark hover:text-brand-dark mr-4 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </a>
                        <div className="flex items-center space-x-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-[#C0DDFF] text-blue-900 border border-blue-200">
                                In Progress
                            </span>
                            <h1 className="text-xl font-bold text-brand-dark">Q3 Visual Merchandising Update</h1>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="text-sm font-semibold text-neutral-dark hover:text-brand-dark px-4 py-2 border border-neutral-medium rounded-full bg-neutral-light hover:bg-neutral-medium/10 transition-colors">
                            Edit Task
                        </button>
                        <button className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full shadow-sm text-brand-dark bg-brand-red/10 border-brand-red/20 hover:bg-brand-red hover:text-neutral-warm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-all duration-200 group">
                            <svg className="-ml-1 mr-2 h-4 w-4 text-brand-red group-hover:text-neutral-warm transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            Remind Overdue Stores
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Content */}
                <div className="flex-1 overflow-y-auto p-8 relative z-10">

                    <div className="flex flex-col xl:flex-row gap-8">

                        {/* Left Column: Task Details & Instructions */}
                        <div className="flex-1 space-y-8">

                            {/* Stats Summary Card */}
                            <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium shadow-md shadow-neutral-dark/5 p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-sm font-bold text-neutral-dark uppercase tracking-wider">Campaign Progression</h3>
                                </div>

                                <div className="flex items-end justify-between mb-3">
                                    <div>
                                        <span className="text-5xl font-extrabold text-brand-dark tracking-tight">45</span>
                                        <span className="text-xl font-bold text-neutral-dark ml-1"> / 100 Stores</span>
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-wider text-[#142A0E] bg-[#F3FED7] px-3 py-1.5 rounded-lg border border-[#E1EDB9]">45% Completed</span>
                                </div>

                                <div className="w-full bg-neutral-medium/50 rounded-full h-4 mb-8 overflow-hidden shadow-inner">
                                    <div className="bg-[#142A0E] h-4 rounded-full" style={{ width: '45%' }}></div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 border-t border-neutral-medium pt-6">
                                    <div>
                                        <p className="text-sm text-neutral-dark font-medium mb-1">Completed</p>
                                        <p className="text-2xl font-bold text-brand-dark">45</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-dark font-medium mb-1">In Progress / Unread</p>
                                        <p className="text-2xl font-bold text-brand-dark">42</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#524A43] font-bold mb-1">Overdue Action</p>
                                        <p className="text-2xl font-black text-[#524A43] bg-[#F4FF8E] inline-block px-2 py-0.5 rounded-md -ml-2">13</p>
                                    </div>
                                </div>
                            </div>

                            {/* Task Details Card */}
                            <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium shadow-md shadow-neutral-dark/5 overflow-hidden">
                                <div className="px-8 py-5 border-b border-neutral-medium bg-neutral-light/50 flex justify-between items-center">
                                    <h3 className="text-sm font-bold text-neutral-dark uppercase tracking-wider">Instructions & Details</h3>
                                </div>
                                <div className="p-8">
                                    <div className="grid grid-cols-2 gap-6 mb-8 bg-neutral-light p-6 rounded-2xl border border-neutral-medium shadow-inner">
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1 font-medium">Target Role</p>
                                            <p className="text-sm font-bold text-brand-dark">Store Lead</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1 font-medium">Due Date</p>
                                            <p className="text-sm font-bold text-brand-dark">Today, 5:00 PM</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1 font-medium">Created By</p>
                                            <div className="text-sm font-bold text-brand-dark flex items-center mt-1">
                                                <div className="w-6 h-6 rounded-full bg-brand-red text-[10px] flex items-center justify-center text-neutral-warm mr-2 font-black">JD</div>
                                                Jane Director
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-dark mb-1 font-medium">Requirements</p>
                                            <p className="text-sm font-bold text-brand-dark">Photo Submission</p>
                                        </div>
                                    </div>

                                    <div className="prose prose-sm max-w-none text-brand-dark leading-relaxed">
                                        <p className="font-bold text-lg mb-3">Please update the front window displays with the new Q3 promotional materials delivered this week.</p>
                                        <p>Follow the attached planogram exactly. The primary focus is the new &quot;Fall Forward&quot; campaign.</p>
                                        <ul className="mt-4 space-y-2 list-disc pl-5">
                                            <li>Remove all summer signage (store in back room or discard if damaged).</li>
                                            <li>Install the large vinyl cling on the primary entrance door.</li>
                                            <li>Ensure lighting is directed at the mannequins, not the signage.</li>
                                        </ul>
                                        <div className="mt-6 p-4 bg-brand-red/10 rounded-xl border border-brand-red/20 text-brand-dark">
                                            <p className="font-bold flex items-center text-brand-red">
                                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                You must upload a clear photo of the completed window display from the outside of the store to complete this task.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-neutral-medium">
                                        <h4 className="text-sm font-bold text-brand-dark mb-4 uppercase tracking-wider">Attachments (1)</h4>
                                        <div className="flex items-center p-4 border border-neutral-medium rounded-2xl bg-neutral-light hover:border-brand-red/50 hover:shadow-md transition-all duration-200 cursor-pointer max-w-sm group">
                                            <div className="p-2.5 bg-brand-red/10 rounded-xl mr-4 group-hover:bg-brand-red transition-colors">
                                                <svg className="w-6 h-6 text-brand-red group-hover:text-neutral-warm transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">fall-planogram-q3.pdf</p>
                                                <p className="text-xs text-neutral-dark mt-0.5 font-medium">2.4 MB</p>
                                            </div>
                                            <div className="ml-auto bg-neutral-warm p-1.5 rounded-lg group-hover:bg-brand-red/10 transition-colors">
                                                <svg className="w-5 h-5 text-neutral-dark group-hover:text-brand-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Store Compliance Table */}
                        <div className="xl:w-2/5 flex flex-col">
                            <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium shadow-md shadow-neutral-dark/5 overflow-hidden flex-1 flex flex-col">
                                <div className="px-8 py-5 border-b border-neutral-medium bg-neutral-light/50 flex items-center justify-between">
                                    <h3 className="text-sm font-bold text-neutral-dark uppercase tracking-wider">Store Status</h3>
                                    <div className="relative">
                                        <input type="text" placeholder="Filter stores..." className="block w-56 pl-4 pr-3 py-2 border border-neutral-medium rounded-full text-brand-dark placeholder-neutral-dark focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red text-sm bg-neutral-light transition-all duration-200 outline-none" />
                                    </div>
                                </div>

                                {/* Store List */}
                                <div className="overflow-y-auto max-h-[700px] flex-1">
                                    <ul className="divide-y divide-neutral-medium">
                                        <li className="p-5 hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Store #0142 - Seattle</p>
                                                    <p className="text-xs text-neutral-dark mt-0.5">Lead: Sarah Jenkins</p>
                                                </div>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F3FED7] text-[#142A0E] border border-[#E1EDB9]">
                                                    Completed
                                                </span>
                                            </div>
                                            <div className="mt-3 text-xs font-bold text-brand-red flex items-center hidden group-hover:flex bg-brand-red/5 p-2 rounded-lg border border-brand-red/10 w-fit">
                                                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                View Photo Submission
                                            </div>
                                        </li>
                                        <li className="p-5 hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Store #0221 - Portland</p>
                                                    <p className="text-xs text-neutral-dark mt-0.5">Lead: James Miller</p>
                                                </div>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F3FED7] text-[#142A0E] border border-[#E1EDB9]">
                                                    Completed
                                                </span>
                                            </div>
                                        </li>
                                        <li className="p-5 hover:bg-brand-red/5 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Store #0881 - Chicago</p>
                                                    <p className="text-xs text-neutral-dark mt-0.5">Lead: Marcus Chen</p>
                                                </div>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F4FF8E] text-[#524A43] border border-[#DEE87E]">
                                                    Overdue
                                                </span>
                                            </div>
                                        </li>
                                        <li className="p-5 hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Store #1042 - Miami</p>
                                                    <p className="text-xs text-neutral-dark mt-0.5">Lead: David Alvara</p>
                                                </div>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#C0DDFF] text-blue-900 border border-blue-200">
                                                    In Progress
                                                </span>
                                            </div>
                                            <div className="mt-3 w-full bg-neutral-medium/50 rounded-full h-2 max-w-[120px] overflow-hidden">
                                                <div className="bg-blue-800 h-2 rounded-full" style={{ width: '50%' }}></div>
                                            </div>
                                        </li>
                                        <li className="p-5 hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Store #0554 - Austin</p>
                                                    <p className="text-xs text-neutral-dark mt-0.5">Lead: Elena Rodriguez</p>
                                                </div>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-neutral-medium/30 text-neutral-dark border border-neutral-medium border-dashed">
                                                    Unread
                                                </span>
                                            </div>
                                        </li>
                                        <li className="p-5 hover:bg-brand-red/5 transition-colors cursor-pointer group">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Store #0339 - Denver</p>
                                                    <p className="text-xs text-neutral-dark mt-0.5">Lead: Thomas Wright</p>
                                                </div>
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F4FF8E] text-[#524A43] border border-[#DEE87E]">
                                                    Overdue
                                                </span>
                                            </div>
                                        </li>
                                        {/* More mock items could go here */}
                                    </ul>
                                </div>
                                <div className="p-4 border-t border-neutral-medium bg-neutral-light/50 text-center hover:bg-neutral-light cursor-pointer transition-colors group">
                                    <button className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Load More Stores...</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

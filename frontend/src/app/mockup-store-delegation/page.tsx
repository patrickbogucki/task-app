import React from 'react';

export default function StoreLeadDelegationMockup() {
    return (
        <div className="min-h-screen bg-neutral-light flex font-sans">

            {/* Background Dashboard (Blurred/Dimmed out) */}
            <div className="flex-1 flex pointer-events-none filter blur-sm opacity-50">
                <aside className="w-64 bg-brand-dark text-neutral-warm flex flex-col hidden md:flex">
                    <div className="h-16 flex items-center px-6 border-b border-neutral-dark/30">
                        <div className="bg-brand-red rounded p-1.5 mr-3">
                            <svg className="w-5 h-5 text-neutral-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg tracking-tight">TaskApp <span className="text-brand-brown font-black text-xs uppercase ml-1 px-1.5 py-0.5 rounded-full bg-brand-brown/20">Store</span></span>
                    </div>
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        <a href="#" className="flex items-center px-3 py-2.5 bg-brand-red/10 text-brand-red rounded-lg font-medium">Dashboard</a>
                    </nav>
                </aside>

                <main className="flex-1 flex flex-col">
                    <header className="h-16 bg-neutral-warm border-b border-neutral-medium px-8"></header>
                    <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="h-64 bg-brand-red rounded-xl border border-red-700"></div>
                            <div className="h-96 bg-neutral-warm rounded-xl border border-neutral-medium"></div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Modal Overlay Background */}
            <div className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-40 flex items-center justify-center p-4 sm:p-6 shadow-2xl">

                {/* Delegation Modal */}
                <div className="bg-neutral-warm rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">

                    {/* Modal Header */}
                    <div className="px-6 py-4 border-b border-neutral-medium bg-neutral-light flex justify-between items-center shrink-0">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center mr-3 border border-brand-red/20">
                                <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-brand-dark leading-tight">Delegate Task</h2>
                                <p className="text-xs text-neutral-dark font-medium mt-0.5">Assign this HQ action to a store team member.</p>
                            </div>
                        </div>
                        <button className="text-neutral-dark hover:text-brand-dark bg-neutral-medium/10 hover:bg-neutral-medium/30 rounded-full p-2 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Modal Body (Scrollable) */}
                    <div className="flex-1 p-6 overflow-y-auto space-y-6">

                        {/* Task Context Banner */}
                        <div className="bg-neutral-light border border-neutral-medium rounded-lg p-4 flex gap-4">
                            <div className="shrink-0 p-2 bg-brand-brown/10 rounded border border-brand-brown/20 h-fit">
                                <svg className="w-6 h-6 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-brand-dark">Quarterly Inventory Prep</h3>
                                <p className="text-xs text-neutral-dark mt-1 line-clamp-2">Complete the pre-inventory checklist for the backroom and sales floor. Requires final photo submission of the completed staging area.</p>
                                <div className="mt-2 flex items-center space-x-3 text-xs font-bold text-neutral-dark">
                                    <span className="text-brand-red">Due: Tomorrow, 9PM</span>
                                    <span>•</span>
                                    <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg> 2 Files</span>
                                </div>
                            </div>
                        </div>

                        {/* Team Selection */}
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <label className="block text-sm font-bold text-brand-dark">Select Assignee <span className="text-brand-red">*</span></label>
                                <button className="text-xs font-semibold text-brand-red hover:underline underline-offset-2">Filter by Availability</button>
                            </div>

                            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 border border-neutral-medium rounded-lg p-2 bg-neutral-light">
                                {/* Selected User */}
                                <label className="flex items-center p-3 border-2 border-brand-red bg-brand-red/5 rounded-md cursor-pointer transition-colors shadow-sm">
                                    <input type="radio" name="assignee" className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium" defaultChecked />
                                    <div className="ml-3 flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-brand-brown/20 flex items-center justify-center text-xs font-bold text-brand-brown mr-3 border border-brand-brown/30">MT</div>
                                            <div>
                                                <p className="text-sm font-bold text-brand-dark">Mike Torres</p>
                                                <p className="text-xs text-neutral-dark font-medium">Senior Educator</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                                            On Shift Now
                                        </span>
                                    </div>
                                </label>

                                {/* Unselected User */}
                                <label className="flex items-center p-3 border border-transparent hover:border-neutral-medium hover:bg-neutral-warm rounded-md cursor-pointer transition-colors">
                                    <input type="radio" name="assignee" className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium" />
                                    <div className="ml-3 flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-neutral-medium flex items-center justify-center text-xs font-bold text-brand-dark mr-3">JL</div>
                                            <div>
                                                <p className="text-sm font-bold text-brand-dark">Jessica Lee</p>
                                                <p className="text-xs text-neutral-dark font-medium">Educator</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-neutral-medium/30 text-neutral-dark">
                                            Shift starts 2PM
                                        </span>
                                    </div>
                                </label>

                                {/* Unselected User */}
                                <label className="flex items-center p-3 border border-transparent hover:border-neutral-medium hover:bg-neutral-warm rounded-md cursor-pointer transition-colors">
                                    <input type="radio" name="assignee" className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium" />
                                    <div className="ml-3 flex items-center justify-between w-full opacity-60">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-neutral-medium flex items-center justify-center text-xs font-bold text-brand-dark mr-3">DW</div>
                                            <div>
                                                <p className="text-sm font-bold text-brand-dark">David Wallace</p>
                                                <p className="text-xs text-neutral-dark font-medium">Educator</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-800">
                                            Off / Leave
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Delegation Note */}
                        <div>
                            <label htmlFor="note" className="block text-sm font-bold text-brand-dark mb-1">Delegation Note (Optional)</label>
                            <textarea id="note" rows={3} placeholder="Add a note for your team member..." className="block w-full rounded-md border border-neutral-medium px-4 py-3 text-brand-dark placeholder-neutral-dark focus:border-brand-red focus:ring-1 focus:ring-brand-red bg-neutral-light sm:text-sm shadow-inner"></textarea>
                            <p className="text-xs text-neutral-dark mt-1.5 font-medium">This note will appear at the top of their task view.</p>
                        </div>

                        {/* Advanced Settings */}
                        <div className="pt-4 border-t border-neutral-medium">
                            <label className="flex items-center p-3 border border-neutral-medium rounded-lg cursor-pointer bg-neutral-light hover:bg-neutral-warm transition-colors group">
                                <input type="checkbox" className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium rounded" defaultChecked />
                                <div className="ml-3 flex-1 flex justify-between items-center">
                                    <span className="block text-sm font-bold text-brand-dark">Require my approval before closing</span>
                                    <span className="text-xs font-medium text-neutral-dark border-l border-neutral-medium pl-3 ml-3">HQ will not see completion until you approve.</span>
                                </div>
                            </label>
                        </div>

                    </div>

                    {/* Modal Footer / Actions */}
                    <div className="px-6 py-4 border-t border-neutral-medium bg-neutral-light flex items-center justify-end space-x-3 shrink-0">
                        <button className="px-4 py-2 border border-neutral-medium text-sm font-bold rounded-md shadow-sm text-brand-dark bg-neutral-warm hover:bg-neutral-medium/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark transition-colors">
                            Cancel
                        </button>
                        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-bold rounded-md shadow-sm text-neutral-warm bg-brand-dark hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark transition-colors">
                            <svg className="-ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            Delegate to Mike
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

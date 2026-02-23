import React from 'react';

export default function HQCreateTaskMockup() {
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
                <header className="h-16 bg-neutral-warm border-b border-neutral-medium flex items-center justify-between px-8 z-10">
                    <div className="flex items-center">
                        <a href="#" className="text-neutral-dark hover:text-brand-dark mr-4">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </a>
                        <h1 className="text-xl font-bold text-brand-dark">Create New Campaign</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="text-sm font-semibold text-neutral-dark hover:text-brand-dark px-4 py-2">
                            Save as Draft
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-neutral-warm bg-brand-red hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red">
                            <svg className="-ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            Publish Task
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Content - Form */}
                <div className="flex-1 overflow-y-auto p-8 lg:px-12">

                    <div className="max-w-4xl mx-auto space-y-8 pb-12">

                        {/* Form Section: Basics */}
                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-neutral-medium bg-neutral-light/50">
                                <h2 className="text-lg font-bold text-brand-dark">Task Details</h2>
                                <p className="text-sm text-neutral-dark mt-0.5">Core information about the objective.</p>
                            </div>
                            <div className="p-6 space-y-6">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-bold text-brand-dark mb-1">Campaign Title <span className="text-brand-red">*</span></label>
                                    <input type="text" id="title" placeholder="e.g. Q4 Front Window Display Update" className="block w-full rounded-md border border-neutral-medium px-4 py-2 text-brand-dark placeholder-neutral-dark focus:border-brand-red focus:ring-1 focus:ring-brand-red bg-neutral-light sm:text-sm shadow-inner" />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-bold text-brand-dark mb-1">Description & Instructions <span className="text-brand-red">*</span></label>
                                    <textarea id="description" rows={4} placeholder="Provide detailed instructions for the stores..." className="block w-full rounded-md border border-neutral-medium px-4 py-3 text-brand-dark placeholder-neutral-dark focus:border-brand-red focus:ring-1 focus:ring-brand-red bg-neutral-light sm:text-sm shadow-inner"></textarea>
                                    <div className="mt-2 flex justify-between items-center text-xs text-neutral-dark">
                                        <span>Supports markdown formatting</span>
                                        <button className="text-brand-dark font-medium underline">Preview</button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-2">Attachments (Optional)</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-medium border-dashed rounded-md hover:bg-neutral-light/50 transition-colors cursor-pointer">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-neutral-dark" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-neutral-dark justify-center">
                                                <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-brand-red hover:text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-red">
                                                    <span>Upload a file</span>
                                                </span>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-neutral-dark">
                                                PDF, PNG, JPG up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section: Targeting */}
                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-neutral-medium bg-neutral-light/50">
                                <h2 className="text-lg font-bold text-brand-dark">Audience Targeting</h2>
                                <p className="text-sm text-neutral-dark mt-0.5">Who needs to complete this task?</p>
                            </div>
                            <div className="p-6 space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="role" className="block text-sm font-bold text-brand-dark mb-1">Assigned Role</label>
                                        <select id="role" className="block w-full rounded-md border border-neutral-medium px-4 py-2 text-brand-dark focus:border-brand-red focus:ring-1 focus:ring-brand-red bg-neutral-light sm:text-sm shadow-sm">
                                            <option>Store Lead (Level 2)</option>
                                            <option>Educator (Level 1)</option>
                                            <option>All Staff</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="locations" className="block text-sm font-bold text-brand-dark mb-1">Target Locations</label>
                                        <select id="locations" className="block w-full rounded-md border border-neutral-medium px-4 py-2 text-brand-dark focus:border-brand-red focus:ring-1 focus:ring-brand-red bg-neutral-light sm:text-sm shadow-sm">
                                            <option>All Locations (Global)</option>
                                            <option>North America Region</option>
                                            <option>Custom Selection (Choose Stores)...</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-neutral-medium">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="allow-delegation" name="allow-delegation" type="checkbox" defaultChecked className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium rounded" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="allow-delegation" className="font-bold text-brand-dark">Allow Delegation</label>
                                            <p className="text-neutral-dark mt-0.5">Store Leads can delegate this task to Educators at their location.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section: Requirements & Timeline */}
                        <div className="bg-neutral-warm rounded-xl border border-neutral-medium shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-neutral-medium bg-neutral-light/50">
                                <h2 className="text-lg font-bold text-brand-dark">Requirements & Timeline</h2>
                                <p className="text-sm text-neutral-dark mt-0.5">Set expectations for completion.</p>
                            </div>
                            <div className="p-6 space-y-8">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-brand-dark mb-1">Priority Level</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            <button type="button" className="py-2 border border-neutral-medium text-brand-dark bg-neutral-light hover:bg-neutral-medium/30 font-medium text-sm rounded-md transition-colors">Low</button>
                                            <button type="button" className="py-2 border-2 border-brand-red text-brand-red bg-brand-red/5 font-bold text-sm rounded-md shadow-sm">Normal</button>
                                            <button type="button" className="py-2 border border-brand-red/20 text-brand-red hover:bg-brand-red/10 font-medium text-sm rounded-md transition-colors relative overflow-hidden group">
                                                <span className="relative z-10">High Alert</span>
                                                <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors"></div>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="due-date" className="block text-sm font-bold text-brand-dark mb-1">Due Date & Time <span className="text-brand-red">*</span></label>
                                        <div className="flex relative items-center">
                                            <input type="datetime-local" id="due-date" className="block w-full rounded-md border border-neutral-medium pl-4 pr-10 py-2 text-brand-dark focus:border-brand-red focus:ring-1 focus:ring-brand-red bg-neutral-light sm:text-sm shadow-inner" />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <svg className="h-5 w-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-3">Completion Requirements</label>
                                    <div className="space-y-3">
                                        <label className="flex items-center p-3 border border-brand-red bg-brand-red/5 rounded-lg cursor-pointer">
                                            <input type="radio" name="req" className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium" defaultChecked />
                                            <span className="ml-3 block text-sm font-bold text-brand-dark">Acknowledge & Mark Complete <span className="text-xs font-normal text-neutral-dark ml-2">(Standard)</span></span>
                                        </label>
                                        <label className="flex items-center p-3 border border-neutral-medium hover:border-brand-dark hover:bg-neutral-light/50 transition-colors rounded-lg cursor-pointer">
                                            <input type="radio" name="req" className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium" />
                                            <span className="ml-3 block text-sm font-bold text-brand-dark">Photo Submission Required <span className="text-xs font-normal text-neutral-dark ml-2">(Visual Verification)</span></span>
                                        </label>
                                        <label className="flex items-center p-3 border border-neutral-medium hover:border-brand-dark hover:bg-neutral-light/50 transition-colors rounded-lg cursor-pointer">
                                            <input type="radio" name="req" className="h-4 w-4 text-brand-red focus:ring-brand-red border-neutral-medium" />
                                            <span className="ml-3 block text-sm font-bold text-brand-dark">Checklist Required <span className="text-xs font-normal text-neutral-dark ml-2">(Requires builder setup next)</span></span>
                                        </label>
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

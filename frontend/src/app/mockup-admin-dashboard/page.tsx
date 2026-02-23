import React from 'react';

export default function AdminDashboardMockup() {
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
                    <span className="font-bold text-lg tracking-tight">TaskApp <span className="text-brand-red font-black text-xs uppercase ml-1 px-1.5 py-0.5 rounded-full bg-brand-red/20">Admin</span></span>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <a href="#" className="flex items-center px-3 py-2.5 bg-brand-red/10 text-brand-red rounded-lg font-medium">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        System Overview
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        User Management
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        Locations
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        Roles &amp; Permissions
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 text-neutral-medium hover:text-neutral-warm hover:bg-neutral-dark/30 rounded-lg font-medium transition-colors">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Audit Log
                    </a>
                </nav>

                {/* User Profile Footer */}
                <div className="p-4 border-t border-neutral-dark/30">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-sm font-bold text-neutral-warm">SA</div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-neutral-warm">Super Admin</p>
                            <p className="text-xs text-neutral-medium">System Administrator</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden bg-neutral-light rounded-[2rem] shadow-[0_0_40px_rgba(255,100,100,0.15)] ring-1 ring-neutral-medium/50 relative z-10">
                {/* Top Header */}
                <header className="h-16 bg-neutral-warm border-b border-neutral-medium flex items-center justify-between px-8 z-20 shrink-0 rounded-t-[2rem]">
                    <h1 className="text-xl font-bold text-brand-dark">System Administration</h1>

                    <div className="flex items-center space-x-4">
                        <button className="relative text-neutral-dark hover:text-brand-dark transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </button>
                        <button className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full shadow-sm text-neutral-warm bg-brand-red hover:bg-[#E03E3E] hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-all duration-200">
                            <svg className="-ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                            Add User
                        </button>
                    </div>
                </header>

                {/* Scrollable Main Content */}
                <div className="flex-1 overflow-y-auto p-8 relative z-10">

                    {/* System Health KPIs */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium p-6 shadow-md shadow-neutral-dark/5 hover:-translate-y-1 transition-transform duration-200">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">Total Users</p>
                                <div className="p-2 bg-[#C0DDFF]/30 rounded-xl"><svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
                            </div>
                            <p className="text-4xl font-extrabold text-brand-dark mt-4 tracking-tight">347</p>
                            <div className="mt-2 text-sm">
                                <span className="text-[#142A0E] font-medium whitespace-nowrap bg-[#F3FED7] px-1.5 py-0.5 rounded-md">+18 this month</span>
                            </div>
                        </div>

                        <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium p-6 shadow-md shadow-neutral-dark/5 hover:-translate-y-1 transition-transform duration-200">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">Active Locations</p>
                                <div className="p-2 bg-[#F3FED7] rounded-xl"><svg className="w-5 h-5 text-[#142A0E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                            </div>
                            <p className="text-4xl font-extrabold text-brand-dark mt-4 tracking-tight">12</p>
                            <div className="mt-2 text-sm">
                                <span className="text-neutral-dark">All regions operational</span>
                            </div>
                        </div>

                        <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium p-6 shadow-md shadow-neutral-dark/5 hover:-translate-y-1 transition-transform duration-200">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">Pending Invitations</p>
                                <div className="p-2 bg-[#F4FF8E] rounded-xl"><svg className="w-5 h-5 text-[#524A43]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                            </div>
                            <p className="text-4xl font-extrabold text-brand-dark mt-4 tracking-tight">5</p>
                            <div className="mt-2 text-sm">
                                <a href="#" className="font-bold text-brand-red hover:text-red-700 transition-colors">Resend All →</a>
                            </div>
                        </div>

                        <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium p-6 shadow-md shadow-neutral-dark/5 hover:-translate-y-1 transition-transform duration-200">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-neutral-dark">System Uptime</p>
                                <div className="p-2 bg-brand-red/10 rounded-xl"><svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                            </div>
                            <p className="text-4xl font-extrabold text-brand-dark mt-4 tracking-tight">99.9%</p>
                            <div className="mt-2 text-sm">
                                <span className="text-[#142A0E] font-medium whitespace-nowrap bg-[#F3FED7] px-1.5 py-0.5 rounded-md">Last 30 days</span>
                            </div>
                        </div>
                    </div>

                    {/* User Management Table */}
                    <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium shadow-md shadow-neutral-dark/5 overflow-hidden mb-8">
                        <div className="px-8 py-5 border-b border-neutral-medium flex items-center justify-between bg-neutral-light/50">
                            <div>
                                <h3 className="text-lg font-bold text-brand-dark">User Management</h3>
                                <p className="text-sm text-neutral-dark mt-0.5">Manage roles, permissions, and access across all locations.</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-4 w-4 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </div>
                                    <input type="text" placeholder="Search users..." className="block w-56 pl-10 pr-3 py-2 border border-neutral-medium rounded-full leading-5 bg-neutral-light placeholder-neutral-dark text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red sm:text-sm transition-all duration-200 outline-none" />
                                </div>
                                <button className="text-sm font-medium text-brand-dark border border-neutral-medium bg-neutral-warm hover:bg-neutral-light px-4 py-2 rounded-full transition-colors duration-200 shadow-sm">
                                    Export CSV
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-neutral-medium">
                                <thead className="bg-neutral-light/70">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-neutral-dark uppercase tracking-wider">User</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-neutral-dark uppercase tracking-wider">Role</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-neutral-dark uppercase tracking-wider">Location</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-neutral-dark uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-neutral-dark uppercase tracking-wider">Last Active</th>
                                        <th className="px-6 py-3 text-right text-xs font-bold text-neutral-dark uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-neutral-warm divide-y divide-neutral-medium">
                                    <tr className="hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-[10px] font-black text-neutral-warm mr-3">JD</div>
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Jane Director</p>
                                                    <p className="text-xs text-neutral-dark">jane@company.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20">
                                                HQ Director
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark font-medium">Headquarters</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F3FED7] text-[#142A0E] border border-[#E1EDB9]">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark font-medium">Just now</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="text-xs font-bold text-brand-dark hover:text-brand-red transition-colors">Edit</button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-9 h-9 rounded-full bg-brand-brown flex items-center justify-center text-[10px] font-black text-neutral-warm mr-3">SJ</div>
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Sarah Jenkins</p>
                                                    <p className="text-xs text-neutral-dark">sarah.j@company.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-brand-brown/10 text-brand-brown">
                                                Store Lead
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark font-medium">Store #0142 (Seattle)</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F3FED7] text-[#142A0E] border border-[#E1EDB9]">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark font-medium">2 hours ago</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="text-xs font-bold text-brand-dark hover:text-brand-red transition-colors">Edit</button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-9 h-9 rounded-full bg-neutral-medium flex items-center justify-center text-[10px] font-black text-brand-dark mr-3">MT</div>
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Mike Torres</p>
                                                    <p className="text-xs text-neutral-dark">mike.t@company.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-brand-dark/10 text-brand-dark border border-neutral-medium/50">
                                                Educator
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark font-medium">Store #0142 (Seattle)</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F3FED7] text-[#142A0E] border border-[#E1EDB9]">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark font-medium">Today, 9:15 AM</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="text-xs font-bold text-brand-dark hover:text-brand-red transition-colors">Edit</button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-9 h-9 rounded-full bg-neutral-medium flex items-center justify-center text-[10px] font-black text-brand-dark mr-3">ER</div>
                                                <div>
                                                    <p className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors">Elena Rodriguez</p>
                                                    <p className="text-xs text-neutral-dark">elena.r@company.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-brand-brown/10 text-brand-brown">
                                                Store Lead
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark font-medium">Store #0554 (Austin)</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-[#F4FF8E] text-[#524A43] border border-[#DEE87E]">
                                                Pending Invite
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark font-medium">Never</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="text-xs font-bold text-brand-red hover:underline decoration-brand-red/40 underline-offset-2 transition-all">Resend</button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-neutral-light/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-9 h-9 rounded-full bg-neutral-medium/50 flex items-center justify-center text-[10px] font-bold text-neutral-dark mr-3">DW</div>
                                                <div>
                                                    <p className="text-sm font-bold text-neutral-dark group-hover:text-brand-red transition-colors">David Wallace</p>
                                                    <p className="text-xs text-neutral-dark">david.w@company.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-brand-dark/10 text-brand-dark border border-neutral-medium/50">
                                                Educator
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark font-medium">Store #0221 (Portland)</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-black tracking-wider bg-neutral-medium/30 text-neutral-dark border border-neutral-medium border-dashed">
                                                Deactivated
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark font-medium">3 weeks ago</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="text-xs font-bold text-brand-dark hover:text-brand-red transition-colors">Reactivate</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 border-t border-neutral-medium bg-neutral-light/50 flex justify-between items-center">
                            <span className="text-sm text-neutral-dark font-medium">Showing 5 of 347 users</span>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1.5 border border-neutral-medium rounded-full text-sm font-bold text-neutral-dark hover:bg-neutral-medium/20 transition-colors">Previous</button>
                                <button className="px-3 py-1.5 border border-neutral-medium rounded-full text-sm font-bold text-brand-dark bg-neutral-warm hover:bg-neutral-medium/20 transition-colors">1</button>
                                <button className="px-3 py-1.5 border border-neutral-medium rounded-full text-sm font-bold text-neutral-dark hover:bg-neutral-medium/20 transition-colors">2</button>
                                <button className="px-3 py-1.5 border border-neutral-medium rounded-full text-sm font-bold text-neutral-dark hover:bg-neutral-medium/20 transition-colors">3</button>
                                <button className="px-3 py-1.5 border border-neutral-medium rounded-full text-sm font-bold text-neutral-dark hover:bg-neutral-medium/20 transition-colors">Next</button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Recent Activity + Quick Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Recent Audit Log */}
                        <div className="bg-neutral-warm rounded-[2rem] border border-neutral-medium shadow-md shadow-neutral-dark/5 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-brand-dark">Recent Activity</h3>
                                <button className="text-sm font-bold text-brand-red hover:text-red-700 transition-colors">View Full Log →</button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { action: 'User Created', detail: 'Elena Rodriguez added to Store #0554', time: '2 min ago', icon: 'user-add' },
                                    { action: 'Role Changed', detail: 'Mike Torres promoted to Senior Educator', time: '1 hour ago', icon: 'shield' },
                                    { action: 'Location Added', detail: 'Store #1099 (Nashville) registered', time: '3 hours ago', icon: 'building' },
                                    { action: 'User Deactivated', detail: 'David Wallace marked as inactive', time: 'Yesterday', icon: 'user-remove' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start p-4 bg-neutral-light rounded-2xl border border-neutral-medium hover:border-brand-red/30 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                                        <div className="p-2.5 bg-brand-dark/5 rounded-xl mr-4 shrink-0 group-hover:bg-brand-red/10 transition-colors">
                                            <svg className="w-5 h-5 text-brand-dark group-hover:text-brand-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-brand-dark">{item.action}</p>
                                            <p className="text-xs text-neutral-dark mt-0.5 truncate">{item.detail}</p>
                                        </div>
                                        <span className="text-xs text-neutral-dark font-medium whitespace-nowrap ml-4">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* System Quick Actions */}
                        <div className="bg-brand-dark rounded-[2rem] border border-brand-brown shadow-xl p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-110">
                                <svg className="w-48 h-48 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-warm mb-3 relative z-10">System Administration</h3>
                            <p className="text-sm text-neutral-medium mb-8 max-w-sm relative z-10 leading-relaxed">Manage global system settings, integrations, and security policies.</p>
                            <div className="space-y-4 relative z-10">
                                <button className="w-full text-left px-5 py-4 bg-neutral-light border-2 border-transparent rounded-[1.25rem] hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/10 transition-all duration-200 group/btn flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-brand-dark group-hover/btn:text-brand-red transition-colors">Bulk Import Users</p>
                                        <p className="text-xs text-neutral-dark mt-1">Upload a CSV to onboard multiple team members</p>
                                    </div>
                                    <div className="bg-brand-red/10 p-2 rounded-full group-hover/btn:bg-brand-red group-hover/btn:text-neutral-warm transition-colors">
                                        <svg className="w-5 h-5 text-brand-red group-hover/btn:text-neutral-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </button>
                                <button className="w-full text-left px-5 py-4 bg-brand-brown border-2 border-brand-brown hover:border-neutral-medium/30 rounded-[1.25rem] transition-all duration-200 group/btn flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-neutral-warm group-hover/btn:text-white transition-colors">Security &amp; Password Policies</p>
                                        <p className="text-xs text-neutral-medium mt-1">Configure MFA, session timeouts, and password rules</p>
                                    </div>
                                    <div className="bg-brand-dark/50 p-2 rounded-full group-hover/btn:bg-neutral-dark/50 transition-colors">
                                        <svg className="w-5 h-5 text-neutral-medium group-hover/btn:text-neutral-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

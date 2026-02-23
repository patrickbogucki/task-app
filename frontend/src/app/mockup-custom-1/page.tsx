// Custom Palette Option 1: "Brand Bold"
// This option uses the strong red (#ff4646) as the primary brand color for impact,
// and the light neutral (#efeeec) for the app background, keeping the cards white for high contrast.

export default function CustomMockupOne() {
    return (
        <div className="flex h-screen w-full font-sans text-[#140F0F]" style={{ backgroundColor: '#EFEEEC' }}>
            {/* Sidebar */}
            <aside className="w-64 border-r border-[#C8C2B8]/40 bg-white flex flex-col hidden md:flex">
                <div className="p-4 border-b border-[#C8C2B8]/40">
                    <h2 className="text-lg font-bold tracking-tight text-[#FF4646]">TaskApp</h2>
                </div>
                <nav className="flex-1 p-3 space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-[#FF4646]/10 text-[#FF4646]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-[#7F746C] hover:bg-[#FDFDF8] hover:text-[#140F0F] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        My Tasks
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-[#7F746C] hover:bg-[#FDFDF8] hover:text-[#140F0F] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        Store Team
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-14 bg-white border-b border-[#C8C2B8]/40 flex items-center justify-between px-4 lg:px-6">
                    <div className="flex items-center gap-2">
                        <div className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </div>
                        <h1 className="text-sm font-semibold text-[#140F0F]">HQ Tasks Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="h-9 px-4 text-xs font-medium text-white bg-[#FF4646] hover:opacity-90 rounded-md transition-opacity shadow-sm">
                            Create Task
                        </button>
                        <div className="w-8 h-8 rounded-full bg-[#2B1F1E] text-white flex items-center justify-center text-xs font-medium shadow-sm">
                            PB
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-auto p-4 lg:p-6">
                    <div className="max-w-6xl mx-auto space-y-6">

                        {/* Stats Row Compact */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Total Open", value: "24" },
                                { label: "Pending Acknowledgment", value: "8" },
                                { label: "Due Today", value: "3", alert: true },
                                { label: "Completed Weekly", value: "112" },
                            ].map((stat, i) => (
                                <div key={i} className="p-4 rounded-xl border border-[#C8C2B8]/30 bg-white shadow-sm flex flex-col gap-1">
                                    <span className="text-xs font-medium text-[#7F746C] uppercase tracking-wider">{stat.label}</span>
                                    <span className={`text-2xl font-bold ${stat.alert ? 'text-[#FF4646]' : 'text-[#140F0F]'}`}>{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Task List Table */}
                        <div className="rounded-xl border border-[#C8C2B8]/30 bg-white shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-[#C8C2B8]/20 flex items-center justify-between bg-[#FDFDF8]/50">
                                <div>
                                    <h3 className="text-sm font-semibold text-[#140F0F]">Active Store Tasks</h3>
                                    <p className="text-xs text-[#7F746C] mt-1">Manage and delegate assignments from HQ.</p>
                                </div>
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2.5 top-2.5 h-4 w-4 text-[#C8C2B8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                    <input
                                        type="text"
                                        placeholder="Search tasks..."
                                        className="h-9 w-[250px] rounded-md border border-[#C8C2B8] pl-9 pr-3 text-sm outline-none focus:border-[#FF4646] focus:ring-1 focus:ring-[#FF4646] transition-all bg-white"
                                    />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-[#FDFDF8] text-xs text-[#7F746C] font-medium border-b border-[#C8C2B8]/20">
                                        <tr>
                                            <th className="px-4 py-3 font-medium">Task / Title</th>
                                            <th className="px-4 py-3 font-medium">Status</th>
                                            <th className="px-4 py-3 font-medium">Progress</th>
                                            <th className="px-4 py-3 font-medium hidden md:table-cell">Due Date</th>
                                            <th className="px-4 py-3 font-medium text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { title: "Q3 Promotional Setup", date: "Today", status: "ACKNOWLEDGED", progress: "3/5", stateType: 'success' },
                                            { title: "Weekly Inventory Count", date: "Tomorrow", status: "IN PROGRESS", progress: "1/1", stateType: 'warning' },
                                            { title: "New Hire Onboarding (Sarah)", date: "Aug 24", status: "NEW", progress: "0/3", stateType: 'info' },
                                            { title: "Store Cleanliness Audit", date: "Aug 25", status: "NEW", progress: "0/1", stateType: 'info' },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-[#EFEEEC] hover:bg-[#FDFDF8] transition-colors last:border-0">
                                                <td className="px-4 py-3">
                                                    <div className="font-medium text-[#140F0F]">{row.title}</div>
                                                    <div className="text-xs text-[#7F746C] mt-0.5">Assigned by HQ</div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase" style={{
                                                        backgroundColor: row.stateType === 'info' ? '#C0DDFF' : row.stateType === 'warning' ? '#F4FF8E' : '#F3FED7',
                                                        color: row.stateType === 'info' ? '#140F0F' : row.stateType === 'warning' ? '#2B1F1E' : '#142A0E'
                                                    }}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-1.5 w-16 bg-[#EFEEEC] rounded-full overflow-hidden">
                                                            <div className="h-full bg-[#140F0F] rounded-full" style={{ width: `${(parseInt(row.progress.split('/')[0]) / parseInt(row.progress.split('/')[1])) * 100}%` }}></div>
                                                        </div>
                                                        <span className="text-xs font-medium text-[#7F746C]">{row.progress}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-[#7F746C] hidden md:table-cell">
                                                    <span className={row.date === 'Today' ? 'text-[#FF4646] font-semibold' : ''}>{row.date}</span>
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <button className="p-1 text-[#C8C2B8] hover:text-[#140F0F] rounded-md hover:bg-[#EFEEEC] transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

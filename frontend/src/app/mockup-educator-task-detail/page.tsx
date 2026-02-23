import React from 'react';

export default function EducatorTaskDetailMockup() {
    return (
        <div className="min-h-screen bg-neutral-light flex flex-col font-sans">

            {/* Mobile-First Header Navigation (Back button focus) */}
            <header className="bg-neutral-warm border-b border-neutral-medium z-10 sticky top-0">
                <div className="flex items-center justify-between px-4 py-3">
                    <button className="flex items-center text-brand-dark hover:text-brand-red p-1 -ml-1">
                        <svg className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        <span className="font-bold text-sm">Back</span>
                    </button>
                    <span className="font-bold text-sm text-neutral-dark uppercase tracking-widest mr-8">Task Details</span>
                    <div></div> {/* Empty div for flex spacing */}
                </div>
            </header>

            {/* Main Content Area (Mobile Container) */}
            <main className="flex-1 overflow-y-auto bg-neutral-light">
                <div className="max-w-md mx-auto w-full px-4 py-6 space-y-8 pb-32"> {/* Extra padding bottom for fixed action bar */}

                    {/* Task Header Details */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <h1 className="text-2xl font-extrabold text-brand-dark leading-tight">Window Display Q3</h1>
                            <div className="shrink-0 bg-red-100 text-red-800 text-xs font-bold uppercase px-2.5 py-1 rounded border border-red-200 mt-1">
                                Due 5PM
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm font-medium">
                            <div className="flex items-center text-neutral-dark">
                                <div className="w-6 h-6 rounded-full bg-brand-brown/20 flex items-center justify-center mr-2 border border-brand-brown/30 text-[10px] font-bold text-brand-brown">SM</div>
                                Sarah M.
                            </div>
                            <div className="text-neutral-medium">•</div>
                            <div className="flex items-center text-neutral-dark">
                                <svg className="w-4 h-4 mr-1 text-neutral-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Est. 30m
                            </div>
                        </div>
                    </div>

                    {/* Store Lead's Note */}
                    <div className="bg-[#FFF4E5] border border-[#FFD599] rounded-lg p-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-brown"></div>
                        <div className="flex items-start">
                            <svg className="w-5 h-5 text-brand-brown mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                            <div>
                                <p className="text-xs font-bold text-brand-brown uppercase tracking-wider mb-1">Note from Sarah (Store Lead)</p>
                                <p className="text-sm text-brand-dark font-medium leading-relaxed">Hey Jess, please make sure the lighting is hitting the main mannequin exactly like the diagram shows. Text me if the vinyl doesn&apos;t stick.</p>
                            </div>
                        </div>
                    </div>

                    {/* Headquarters Instructions */}
                    <div className="pt-2">
                        <h2 className="text-sm font-bold text-neutral-dark uppercase tracking-wider mb-4 border-b border-neutral-medium pb-2">HQ Instructions</h2>

                        <div className="prose prose-sm font-medium text-brand-dark leading-relaxed">
                            <p>Please update the front window displays with the new Q3 promotional materials delivered this week.</p>
                            <p>Follow the attached planogram exactly. The primary focus is the new &quot;Fall Forward&quot; campaign.</p>
                            <ul className="mt-4 space-y-2 list-disc pl-4 text-neutral-dark">
                                <li><strong className="text-brand-dark">Remove</strong> all summer signage.</li>
                                <li><strong className="text-brand-dark">Install</strong> the large vinyl cling on the primary entrance door.</li>
                                <li><strong className="text-brand-dark">Adjust</strong> lighting to focus on apparel, not signage.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Attachments */}
                    <div>
                        <h2 className="text-sm font-bold text-neutral-dark uppercase tracking-wider mb-3">Attachments & References</h2>
                        <button className="w-full flex items-center p-3 border border-neutral-medium rounded-lg bg-neutral-warm hover:bg-neutral-light transition-colors text-left active:scale-[0.98]">
                            <div className="p-2.5 bg-brand-red/10 rounded mr-3">
                                <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-brand-dark">q3-fall-planogram-v2.pdf</p>
                                <p className="text-xs text-neutral-dark mt-0.5">PDF • 2.4 MB</p>
                            </div>
                            <svg className="w-5 h-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* Action Required Section */}
                    <div className="border-t border-neutral-medium pt-8">
                        <div className="bg-brand-dark rounded-xl p-5 text-neutral-warm shadow-md">
                            <div className="flex items-center mb-4 text-brand-red">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <h2 className="text-sm font-bold text-neutral-light uppercase tracking-wider">Action Required</h2>
                            </div>

                            <p className="text-base font-medium mb-4">You must upload a clear photo of the completed window display from the outside of the store.</p>

                            <button className="w-full py-4 bg-brand-red text-neutral-warm font-bold rounded-lg shadow-sm hover:bg-red-700 transition-colors flex justify-center items-center text-lg active:bg-red-800">
                                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Take Photo
                            </button>
                            <p className="text-center text-xs text-neutral-medium mt-3 font-medium">This requires approval from Sarah M.</p>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
}

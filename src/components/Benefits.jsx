import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Benefits = () => {
    return (
        <section id="benefits" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Stop struggling with <br />
                            <span className="text-brand-600">outdated workflows.</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            We understand the frustrations of legacy systems. That's why we built a solution that puts you back in control.
                        </p>

                        <div className="space-y-4">
                            {/* Pain Points vs Solutions */}
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-4">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-red-900">The Old Way</h4>
                                    <p className="text-red-700 text-sm">Complex manual setups, slow loading times, and constant maintenance headaches.</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-green-50 border border-green-100 flex items-start gap-4 shadow-lg shadow-green-100 transform translate-x-4">
                                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-green-900">Our Solution</h4>
                                    <p className="text-green-700 text-sm">Automated deployment, instant optimization, and zero-config maintenance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <ul className="space-y-3">
                                {["99.9% Uptime Guarantee", "24/7 Dedicated Support", "Seamless API Integration"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
                                            <CheckCircle size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="relative rounded-2xl bg-gray-900 p-8 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>

                            <div className="relative z-10 text-white space-y-6">
                                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Metric</p>
                                        <p className="text-xl font-bold">Conversion</p>
                                    </div>
                                    <div className="text-green-400 font-bold">+127%</div>
                                </div>

                                <div className="space-y-2">
                                    <div className="bg-gray-800 rounded-full h-2 w-full overflow-hidden">
                                        <div className="bg-brand-500 h-full w-[75%] rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>Current</span>
                                        <span>Target</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm">
                                        <p className="text-gray-400 text-xs mb-1">Users</p>
                                        <p className="text-2xl font-bold">14.2k</p>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm">
                                        <p className="text-gray-400 text-xs mb-1">Revenue</p>
                                        <p className="text-2xl font-bold text-brand-400">$84k</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;

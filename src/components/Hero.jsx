import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-100/50 blur-3xl opacity-70"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-6 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            New Features Available
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            Build your next idea <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">
                                faster and better.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Create stunning landing pages with our modern React components.
                            Optimized for performance and designed for conversion.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 flex items-center justify-center gap-2 group">
                                Get Started Free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-700 font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                Watch Demo
                            </button>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200`}></div>
                                ))}
                            </div>
                            <p>Trusted by 10,000+ developers</p>
                        </div>
                    </div>

                    {/* Visual Content / Illustration */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                        <div className="relative rounded-2xl bg-white p-2 shadow-2xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-400 rounded-3xl blur opacity-20 -z-10"></div>
                            <div className="aspect-[4/3] rounded-xl bg-gray-50 relative overflow-hidden flex items-center justify-center group">
                                {/* Placeholder UI Illustration */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

                                {/* Mock UI Elements */}
                                <div className="w-[80%] h-[70%] bg-white rounded-lg shadow-lg relative z-10 p-4 transition-transform group-hover:scale-[1.02] duration-500">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-20 bg-brand-50 rounded-md w-full animate-pulse"></div>
                                        <div className="flex gap-3">
                                            <div className="h-20 bg-gray-100 rounded-md w-1/2"></div>
                                            <div className="h-20 bg-gray-100 rounded-md w-1/2"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute -right-4 top-10 bg-white p-3 rounded-lg shadow-xl animate-bounce duration-[3000ms] border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-bold text-gray-700">98% Score</span>
                                    </div>
                                </div>

                                <div className="absolute -left-4 bottom-10 bg-white p-3 rounded-lg shadow-xl animate-bounce delay-700 duration-[4000ms] border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xs">A+</div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-gray-700">Performance</span>
                                            <span className="text-[10px] text-gray-500">Optimized</span>
                                        </div>
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

export default Hero;

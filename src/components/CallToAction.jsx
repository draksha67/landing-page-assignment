import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl bg-brand-600 px-6 py-20 text-center overflow-hidden shadow-2xl shadow-brand-500/30">

                    {/* Background Patterns */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] rounded-full bg-brand-500 opacity-30 blur-3xl"></div>
                        <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-indigo-500 opacity-30 blur-3xl"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Ready to start your next project?
                        </h2>
                        <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto">
                            Join thousands of developers building the future of the web with our modern components.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-600 font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                                Get Started Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-brand-400 text-white font-bold text-lg hover:bg-brand-700 hover:border-brand-700 transition-colors">
                                Contact Sales
                            </button>
                        </div>

                        <p className="text-brand-200 text-sm mt-8">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

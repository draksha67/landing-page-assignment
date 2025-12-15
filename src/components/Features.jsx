import React from 'react';
import { Smartphone, Zap, Shield, Layout, Globe, BarChart } from 'lucide-react';

const features = [
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Mobile First Design",
        description: "Fully responsive layouts that look perfect on any device, from phones to ultra-wide monitors."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Lightning Fast",
        description: "Optimized for speed with lightweight code and efficient rendering to keep users engaged."
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Secure & Reliable",
        description: "Built with security best practices to protect your data and your users' privacy."
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Modern UI/UX",
        description: "Clean aesthetics with plenty of whitespace and intuitive interfaces for better usability."
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Reach",
        description: "Ready for localization and internationalization to reach a worldwide audience."
    },
    {
        icon: <BarChart className="w-6 h-6" />,
        title: "Analytics Ready",
        description: "Easy integration with popular analytics tools to track performance and conversions."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Everything you need strictly built for performance
                    </h2>
                    <p className="text-xl text-gray-600">
                        Our platform offers a comprehensive suite of tools designed to elevate your digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

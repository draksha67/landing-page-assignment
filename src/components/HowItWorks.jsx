import React from 'react';

const steps = [
    {
        number: "01",
        title: "Create Account",
        description: "Sign up in seconds and get immediate access to our dashboard."
    },
    {
        number: "02",
        title: "Customize",
        description: "Configure your preferences and tailor the experience to your needs."
    },
    {
        number: "03",
        title: "Launch",
        description: "Deploy your project with a single click and watch it grow."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-600">
                        Get up and running in three simple steps.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center bg-white md:bg-transparent p-6 rounded-2xl md:p-0 shadow-sm md:shadow-none">
                            <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-white shadow-lg z-10">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

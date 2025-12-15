import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager",
        content: "This platform has completely transformed how we handle our landing pages. The speed and design quality are unmatched.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Startup Founder",
        content: "I was able to get my MVP landing page up in hours instead of days. The components are so easy to customize.",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Marketing Director",
        content: "The conversion improvements we've seen since switching are incredible. Highly recommend to any marketing team.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by creators worldwide
                    </h2>
                    <p className="text-lg text-gray-600">
                        Hear from the people who use our product every day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center font-bold text-brand-700">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

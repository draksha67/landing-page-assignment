import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-xl">
                                L
                            </div>
                            <span className="font-bold text-xl text-gray-900">Landing<span className="text-brand-600">Page</span></span>
                        </a>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Making web development faster, easier, and more beautiful for everyone.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Changelog</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} LandingPage Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-gray-900">Privacy</a>
                        <a href="#" className="hover:text-gray-900">Terms</a>
                        <a href="#" className="hover:text-gray-900">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

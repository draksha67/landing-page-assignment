import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Benefits />
                <Testimonials />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}

export default App;

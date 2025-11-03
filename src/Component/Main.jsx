import React from 'react';

// Navbar Component
const Navbar = () => (
  <header className="bg-white shadow-md sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <h1 className="text-2xl font-bold text-indigo-600">
        LaunchPad 🚀
      </h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium">Features</a>
        <a href="#pricing" className="text-gray-600 hover:text-indigo-600 font-medium">Pricing</a>
        <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</a>
      </nav>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
        Sign Up
      </button>
    </div>
  </header>
);

// Hero Section Component
const Hero = () => (
  <section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl">
        The simplest way to <span className="text-indigo-600">launch your product</span>.
      </h2>
      <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
        Stop worrying about complex setups. LaunchPad gives you all the tools you need, instantly.
      </p>
      <div className="mt-10 flex justify-center space-x-4">
        <button className="bg-indigo-600 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
          Get Started Free
        </button>
        <button className="bg-white text-indigo-600 text-lg px-8 py-3 border border-indigo-600 rounded-xl hover:bg-indigo-50 transition duration-300">
          See a Demo
        </button>
      </div>
      {/* Placeholder for an image or product screenshot */}
      <div className="mt-16">
        
      </div>
    </div>
  </section>
);

// Features Section Component
const Features = () => {
    const features = [
        { title: 'Blazing Fast', description: 'Optimized for speed, giving your users a seamless experience.', icon: '⚡️' },
        { title: 'Fully Responsive', description: 'Looks amazing on desktops, tablets, and phones alike.', icon: '📱' },
        { title: 'Zero Setup', description: 'Go from sign-up to launch in less than 5 minutes.', icon: '⏱️' },
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                    Features Designed For You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => (
    <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-bold text-indigo-400 mb-4">LaunchPad</p>
            <div className="flex justify-center space-x-6 text-sm">
                <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
                <a href="#" className="hover:text-indigo-400">Terms of Service</a>
                <a href="mailto:support@launchpad.com" className="hover:text-indigo-400">Support</a>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} LaunchPad Inc. All rights reserved.
            </p>
        </div>
    </footer>
);

// Main App Component
function LandingPage() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
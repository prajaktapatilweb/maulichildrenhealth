// pages/index.js
import Head from 'next/head';

export default function Demo() {
    return (
        <>
            <Head>
                <title>Your Brand</title>
            </Head>

            {/* Navbar */}
            <header className="bg-[#520000] text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Your Brand</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li className="hover:text-[#fcb950] cursor-pointer">Home</li>
                        <li className="hover:text-[#fcb950] cursor-pointer">Services</li>
                        <li className="hover:text-[#fcb950] cursor-pointer">Contact</li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-[#fdf5f2] text-center py-20">
                <h2 className="text-4xl font-bold text-[#520000] mb-4">Welcome to Our Clinic</h2>
                <p className="text-lg text-[#333] mb-6">Gentle, caring pediatric dentistry you can trust.</p>
                <button className="bg-[#fcb950] text-[#520000] px-6 py-3 rounded-full hover:bg-[#ffcb66] transition">
                    Book an Appointment
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-[#520000] text-white text-center p-4 mt-10">
                <p>&copy; 2025 Your Brand. All rights reserved.</p>
            </footer>
        </>
    );
}

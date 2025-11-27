import React, { useState } from 'react';
import {
    Menu, X, MapPin, Calendar, DollarSign, Clock, Trophy, ChevronDown, ChevronUp, User, CreditCard, Hotel, FileText
} from 'lucide-react';

// --- Components ---

const Navigation = ({ activePage, setActivePage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'schedule', label: 'Tentative Schedule' },
        { id: 'meet-info', label: 'Meet Information' },
        { id: 'parent-info', label: 'Parent Information' },
        { id: 'regional-info', label: 'Regional Information' },
    ];

    return (
        <nav className="bg-red-900 text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Title Area */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => setActivePage('home')}>
                        <img src="/usag-logo.png" alt="USAG" className="h-12 w-12 object-contain" />
                        <div className="flex flex-col">
                            <span className="font-bold text-sm tracking-wider">USAG</span>
                            <span className="font-bold text-xs italic">2026 State Meet</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button key={item.id} onClick={() => setActivePage(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activePage === item.id
                                            ? 'bg-white text-red-900'
                                            : 'text-white hover:bg-red-800'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 px-4 py-2 rounded-md text-sm font-bold shadow-sm ml-4 transition-transform transform hover:scale-105">
                                REGISTER
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="bg-red-800 inline-flex items-center justify-center p-2 rounded-md text-gray-200
                    hover:text-white hover:bg-red-700 focus:outline-none"
                        >
                            {isMobileMenuOpen ?
                                <X size={24} /> :
                                <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-red-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <button key={item.id} onClick={() => {
                                setActivePage(item.id);
                                setIsMobileMenuOpen(false);
                            }}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activePage === item.id
                                        ? 'bg-white text-red-900'
                                        : 'text-white hover:bg-red-700'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            className="w-full text-center mt-4 bg-yellow-500 text-red-900 px-3 py-3 rounded-md text-base font-bold">
                            REGISTER NOW
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2024 Competition Events by C.O. All Rights Reserved.</p>
        </div>
    </footer>
);

// --- Page Views ---

const HomeView = ({ setActivePage }) => (
    <div className="flex flex-col">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-[500px] md:h-[600px] overflow-hidden">
            {/* Hero Image */}
            <div className="absolute inset-0 bg-cover" style={{
                backgroundImage: "url('/USAG-2026-Hero.jpg')",
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                opacity: '0.6'
            }}></div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-red-900/90"></div>

            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-end">
                <div className="text-right text-white max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tight mb-4 drop-shadow-lg">
                        2026 GEORGIA USAG
                        <br />
                        LEVEL 6-10 STATE MEET
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
                        Dalton Convention Center
                        <br />
                        <span className="font-semibold text-yellow-400">March 27-29, 2026</span>
                    </p>
                    <div className="flex justify-end space-x-4">
                        <button onClick={() => setActivePage('meet-info')}
                            className="bg-white text-red-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition
                        shadow-lg">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Quick Links Grid */}
        <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {[
                { icon: FileText, title: 'Registration', desc: 'USAG Reservation', color: 'bg-red-700', url: 'https://members.usagym.org/app/AddMeetRegistration.html?id=95397&ClubID=930019' },
                { icon: MapPin, title: 'Facility Info', desc: 'Directions & Parking', color: 'bg-red-800', url: 'https://daltonconventioncenter.com/' },
                { icon: Hotel, title: 'Hotels', desc: 'Book Your Stay', color: 'bg-red-700', url: 'https://bit.ly/4nO37ct' },
                { icon: CreditCard, title: 'Payment', desc: 'MeetMaker', color: 'bg-red-800', url: 'https://www.meetmaker.com/meetdetails?eid=9384' },
            ].map((item, idx) => (
                <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className={`${item.color} text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition
            transform hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center no-underline`}>
                    <item.icon size={32} className="mb-3 text-yellow-400" />
                    <h3 className="text-lg font-bold uppercase">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.desc}</p>
                </a>
            ))}
        </div>

        {/* Intro Content */}
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the State Championships</h2>
            <p className="text-gray-600 leading-relaxed">
                We are excited to host the 2026 Georgia USAG Level 6-10 State Meet at the beautiful Dalton Convention
                Center.
                Please use the navigation above to find the tentative schedule, qualification standards, and parent
                information.
            </p>
        </div>
    </div>
);

const MeetInfoView = () => (
    <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-red-900 uppercase tracking-wide">Meet Information</h1>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-red-900 p-6 flex flex-col items-start">
                <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-full mr-4">
                        <MapPin className="text-red-900" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Location</h2>
                </div>
                <p className="text-lg font-semibold text-gray-700">Dalton Convention Center</p>
                <p className="text-gray-500 mb-6">2211 Dug Gap Battle Rd, Dalton, GA 30720</p>
                <button
                    className="mt-auto w-full bg-gray-100 text-gray-700 py-2 rounded font-medium hover:bg-gray-200 transition">
                    View Map & Directions
                </button>
            </div>

            {/* Dates Card */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-red-900 p-6 flex flex-col items-start">
                <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-full mr-4">
                        <Calendar className="text-red-900" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Dates</h2>
                </div>
                <p className="text-xl font-bold text-red-900">March 27 - 29, 2026</p>
                <p className="text-gray-600 mt-2">Friday through Sunday</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deadlines Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                    <Clock className="text-red-900 mr-2" size={20} />
                    <h3 className="text-lg font-bold text-gray-800">Important Deadlines</h3>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Entry Deadline</p>
                        <p className="font-medium">Monday, March 2, 2026</p>
                    </div>
                    <div className="border-t pt-2">
                        <p className="text-xs text-gray-500 uppercase font-semibold">Scratch Deadline</p>
                        <p className="font-medium">Monday, March 16, 2026</p>
                    </div>
                </div>
            </div>

            {/* Fees Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                    <DollarSign className="text-red-900 mr-2" size={20} />
                    <h3 className="text-lg font-bold text-gray-800">Entry Fees</h3>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">Athlete Entry</span>
                        <span className="font-bold text-gray-900">$125</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">Team Entry</span>
                        <span className="font-bold text-gray-900">$60</span>
                    </div>
                </div>
            </div>

            {/* Late Policy Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-red-100">
                <div className="flex items-center mb-4">
                    <div className="bg-red-900 text-white text-xs px-2 py-1 rounded uppercase font-bold">Policy</div>
                    <h3 className="text-lg font-bold text-gray-800 ml-2">Late Fees</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                    Late fees apply to any entries received after March 2, 2026.
                </p>
                <div className="text-center bg-red-50 py-3 rounded-lg border border-red-100">
                    <span className="block text-xs text-red-600 uppercase font-bold">Late Fee Amount</span>
                    <span className="text-xl font-bold text-red-900">$50 <span className="text-sm font-normal">per
                        athlete</span></span>
                </div>
            </div>
        </div>
    </div>
);

const RegionalInfoView = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggle = (idx) => {
        setOpenSection(openSection === idx ? null : idx);
    };

    const sections = [
        {
            title: "Qualification Standards",
            icon: Trophy,
            content: (
                <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between border-b pb-2">
                        <span>Level 9/10 Qualification to Regionals (AA)</span>
                        <span className="font-bold">35.00</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Level 9 Event Specialist</span>
                        <span className="font-bold">9.50</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Level 10 Event Specialist</span>
                        <span className="font-bold">9.25</span>
                    </li>
                    <li className="pt-2 bg-blue-50 p-4 rounded text-sm text-blue-800">
                        <strong>Level 6/7/8 Qualification to Regionals:</strong>
                        <div className="mt-2 space-y-1">
                            <div className="flex justify-between">
                                <span>Level 6</span>
                                <span className="font-bold">76 athletes</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Level 7</span>
                                <span className="font-bold">76 athletes</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Level 8</span>
                                <span className="font-bold">91 athletes</span>
                            </div>
                        </div>
                        <p className="mt-2 text-xs">Athletes will qualify based on all-around score regardless of age group.</p>
                    </li>
                </ul>
            )
        },
        {
            title: "Level 9/10 Regional Meet Details",
            icon: Calendar,
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-xs uppercase text-gray-500 font-bold">Date</p>
                            <p className="font-semibold">April 10-12, 2026</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-xs uppercase text-gray-500 font-bold">Location</p>
                            <p className="font-semibold">Bradenton Area Conv. Center</p>
                            <p className="text-sm text-gray-600">Bradenton, FL</p>
                        </div>
                    </div>
                    <p className="text-sm italic text-gray-500">Hosted by Tampa Bay Turners</p>
                </div>
            )
        },
        {
            title: "Level 6-8 Regional Meet Details",
            icon: MapPin,
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-xs uppercase text-gray-500 font-bold">Date</p>
                            <p className="font-semibold">April 17-19, 2026</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-xs uppercase text-gray-500 font-bold">Location</p>
                            <p className="font-semibold">Gas South Convention Center</p>
                            <p className="text-sm text-gray-600">Duluth, GA</p>
                        </div>
                    </div>
                    <p className="text-sm italic text-gray-500">Hosted by Gymnastix Training Center</p>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold text-center text-red-900 mb-8">Regional Information</h1>
            <div className="space-y-4">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-white shadow rounded-lg overflow-hidden border border-gray-100">
                        <button onClick={() => toggle(idx)}
                            className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition"
                        >
                            <div className="flex items-center">
                                <section.icon className="text-red-800 mr-3" size={20} />
                                <span className="font-bold text-lg text-gray-800">{section.title}</span>
                            </div>
                            {openSection === idx ?
                                <ChevronUp className="text-gray-400" /> :
                                <ChevronDown className="text-gray-400" />}
                        </button>
                        {openSection === idx && (
                            <div className="p-5 border-t border-gray-100 animate-fadeIn">
                                {section.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">Regional Entry Deadline</h3>
                <p className="text-sm text-yellow-900">
                    All entries must be completed no later than midnight on <strong>Monday, March 30, 2026</strong>.
                    Level 9/10 Registration is paid by GA-USAG for qualified athletes.
                </p>
            </div>
        </div>
    );
};

const ScheduleView = () => (
    <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-center text-red-900 mb-4">Tentative Schedule</h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
            The exact schedule will be posted by Monday, March 9, 2026. This schedule is subject to change based on final
            registration numbers.
        </p>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b">
                <div className="p-6 text-center hover:bg-gray-50">
                    <h3 className="text-xl font-bold text-red-900 mb-2">Friday</h3>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">March 27, 2026</p>
                    <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        Capital Cup USAG Level 8
                    </div>
                </div>
                <div className="p-6 text-center hover:bg-gray-50">
                    <h3 className="text-xl font-bold text-red-900 mb-2">Saturday</h3>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">March 28, 2026</p>
                    <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        USAG Level 9 & 10
                    </div>
                </div>
                <div className="p-6 text-center hover:bg-gray-50">
                    <h3 className="text-xl font-bold text-red-900 mb-2">Sunday</h3>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">March 29, 2026</p>
                    <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        USAG Level 6 & 7
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ParentInfoView = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-center text-red-900 mb-10">Parent Information</h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-red-900">
            <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <CreditCard className="mr-2 text-red-800" size={20} /> Admission Fees
                </h2>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">CASH ONLY</span>
            </div>

            <div className="divide-y">
                {[
                    { type: 'Adult (13+)', price: '$20', note: 'per day' },
                    { type: 'Child (6-12)', price: '$10', note: 'per day' },
                    { type: 'Senior (60+)', price: '$10', note: 'per day' },
                    { type: 'Children 5 & Under', price: 'Free', note: '' },
                ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center px-6 py-4 hover:bg-gray-50">
                        <span className="font-medium text-gray-700">{item.type}</span>
                        <div className="text-right">
                            <span className="block font-bold text-xl text-gray-900">{item.price}</span>
                            {item.note && <span className="text-xs text-gray-400">{item.note}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const App = () => {
    const [activePage, setActivePage] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Simple Router Switch
    const renderContent = () => {
        switch (activePage) {
            case 'home': return <HomeView setActivePage={setActivePage} />;
            case 'meet-info': return <MeetInfoView />;
            case 'schedule': return <ScheduleView />;
            case 'regional-info': return <RegionalInfoView />;
            case 'parent-info': return <ParentInfoView />;
            default: return <HomeView setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            <Navigation activePage={activePage} setActivePage={setActivePage} isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <main className="flex-grow">
                {renderContent()}
            </main>

            <Footer />
        </div>
    );
};

export default App;
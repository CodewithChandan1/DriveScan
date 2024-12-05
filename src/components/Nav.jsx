import { Megaphone } from 'lucide-react';
import { Button } from './Button';

export function Header() {
    return (
        <header className="flex justify-between items-center py-6 px-8">
            <div className="flex items-center gap-2">
                <Megaphone className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-xl">Welkin</span>
            </div>
            {/* <nav className="hidden md:flex items-center gap-8">
                <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
                <a href="#login" className="text-gray-600 hover:text-gray-900">Log in</a>
                <Button>Register</Button>
            </div> */}
        </header>
    );
}
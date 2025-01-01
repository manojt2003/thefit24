import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '../common/Logo';

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-4">
              Transform your body and mind with our world-class fitness facilities and expert trainers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/thefit24.in?igsh=MXQ1dDcxaGF5Mm5hZA==" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Classes', 'Trainers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Classes</h3>
            <ul className="space-y-2">
              {['Cross Fit','Strength Training', 'Yoga', 'Boxing', 'Cardio'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Saturday: 5:00 AM - 10:00 PM</li>
              <li>Sunday: 6:00 AM - 2:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TheFit24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
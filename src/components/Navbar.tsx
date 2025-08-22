import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled ? 'bg-white shadow-md' : 'bg-black'
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex-shrink-0 flex flex-col leading-none">
            <Link to="/" className="flex flex-col">
              <span
                className={cn(
                  'text-2xl sm:text-3xl font-bold tracking-tight font-sans transition-colors duration-300',
                  isScrolled ? 'text-black' : 'text-white'
                )}
              >
                Done.
              </span>
              <span
                className={cn(
                  'text-xs sm:text-sm font-medium font-sans tracking-wide',
                  isScrolled ? 'text-gray-600' : 'text-gray-300'
                )}
              >
                Concierge Service Munich
              </span>
            </Link>
          </div>

          {/* Навигация десктоп */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationMenu className={cn(isScrolled ? '' : 'text-white')}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      to="/"
                      className={cn(
                        isScrolled
                          ? 'text-gray-700 hover:text-black'
                          : 'text-white hover:text-white bg-transparent hover:bg-gray-800'
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={cn(
                      'px-4 py-2 rounded-md text-sm transition-colors',
                      isScrolled
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    )}
                  >
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                'focus:outline-none',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 pt-2">
          <div className="space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 font-medium hover:underline">
              Home
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-gray-700 font-medium hover:underline"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

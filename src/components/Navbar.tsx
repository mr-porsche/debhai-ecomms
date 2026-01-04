import { Menu, ShoppingCart, Sun, X } from 'lucide-react';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import { Search } from './layout/Search';

interface HeaderProps {
  onCartClick: () => void;
  onCategoriesClick: () => void;
}

export const Navbar = ({ onCartClick, onCategoriesClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemsCount = 11;

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 gap-4'>
          {/* Logo */}
          <div className='flex items-center gap-2 shrink-0 cursor-pointer'>
            <img src={Logo} alt='Debhai' className='h-16 w-auto' />
          </div>

          {/* Search Bar - DESKTOP */}
          <div className='hidden md:flex flex-1 max-w-2xl'>
            <Search />
          </div>

          {/* ACTIONS */}
          <div className='flex items-center gap-2 sm:gap-4'>
            <button
              className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
              aria-label='Toggle theme'
            >
              <Sun />
            </button>

            {/* Mobile Menu */}
            <button
              className='md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6 text-gray-700 dark:text-gray-200' />
              ) : (
                <Menu className='w-6 h-6 text-gray-700 dark:text-gray-200' />
              )}
            </button>

            {/* Categories Button - DESKTOP */}
            <button
              className='hidden md:block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
              onClick={onCategoriesClick}
            >
              Categories
            </button>

            {/* CART */}
            <button
              className='relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
              aria-label='View cart'
              onClick={onCartClick}
            >
              <ShoppingCart className='w-6 h-6 text-gray-700 dark:text-gray-200' />
              {cartItemsCount > 0 && (
                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                  {cartItemsCount > 10 ? '10+' : cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className='md:hidden pb-4'>
          <Search />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
          <div className='px-4 py-2'>
            <button
              onClick={() => {
                onCategoriesClick();
                setIsMobileMenuOpen(false);
              }}
              className='w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-200'
            >
              Categories
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

import { Menu, Moon, ShoppingCart, Sun, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '../assets/logo.png';
import { SearchInput } from './layout/SearchInput';
import { useTheme } from '@/hooks/useTheme';

interface NavbarProps {
  onCartClick: () => void;
  onCategoriesClick: () => void;
  onLogoClick: () => void;
}

export const Navbar = ({ onCartClick, onCategoriesClick, onLogoClick }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { theme, toggleTheme } = useTheme();

  // Should come from global state later
  const cartItemsCount = 11;

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className='sticky top-0 z-50 bg-background border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between gap-4'>
          {/* Logo */}
          <button
            onClick={onLogoClick}
            aria-label='Go to home'
            className='flex items-center shrink-0 focus:outline-none'
          >
            <img src={Logo} alt='Debhai' className='h-16 w-auto' />
          </button>

          {/* Desktop Search */}
          <div className='hidden md:flex flex-1 max-w-2xl'>
            <SearchInput value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Actions */}
          <div className='flex items-center gap-2 sm:gap-4'>
            <button
              onClick={toggleTheme}
              aria-label='Toggle theme'
              className='p-2 rounded-lg
                text-foreground
                hover:bg-muted
                transition-colors'
            >
              {theme === 'dark' ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
            </button>

            {/* Categories (Desktop) */}
            <button
              onClick={onCategoriesClick}
              className='
                hidden md:inline-flex items-center
                px-4 py-2 rounded-lg
                text-sm font-medium
                text-foreground
                hover:bg-muted
                transition-colors
              '
            >
              Categories
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              aria-label='View cart'
              className='relative p-2 rounded-lg
                text-foreground
                hover:bg-muted
                transition-colors'
            >
              <ShoppingCart className='w-6 h-6' />

              {cartItemsCount > 0 && (
                <span
                  className='absolute -top-1 -right-1
                    min-w-5 h-5 px-1
                    rounded-full
                    bg-destructive
                    text-primary-foreground
                    text-xs
                    flex items-center justify-center
                  '
                >
                  {cartItemsCount > 9 ? '9+' : cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              aria-label='Toggle mobile menu'
              className='md:hidden p-2 rounded-lg
                text-foreground
                hover:bg-muted
                transition-colors'
            >
              {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className='md:hidden pb-4'>
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden border-t border-border bg-background'>
          <div className='px-4 py-2'>
            <button
              onClick={() => {
                onCategoriesClick();
                setIsMobileMenuOpen(false);
              }}
              className='w-full text-left px-4 py-3 rounded-lg
                text-foreground
                hover:bg-muted
                transition-colors
              '
            >
              Categories
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

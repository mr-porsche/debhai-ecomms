import { Search } from 'lucide-react';
import { memo } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput = memo(
  ({
    value,
    onChange,
    placeholder = 'Search for products, brands and more...',
    className = '',
  }: SearchInputProps) => {
    return (
      <div className={`relative w-full ${className}`}>
        <Search
          className='absolute left-3 top-1/2 -translate-y-1/2
            h-5 w-5 text-muted-foreground'
        />

        <input
          type='text'
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className='w-full h-10 pl-10 pr-4 rounded-lg
            bg-background
            border border-input
            text-foreground
            placeholder:text-muted-foreground
            focus:outline-none
            focus:ring-2 focus:ring-ring
            focus:border-transparent'
        />
      </div>
    );
  }
);

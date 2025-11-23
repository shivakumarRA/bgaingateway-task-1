import React from 'react';
import Button from '../shared/Button';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-[1920px] mx-auto px-[106px] py-8 flex items-center justify-between">
      <div className="text-[42.67px] font-bold text-brown-500">Collers</div>
      <nav className="flex items-center gap-[21px]">
        <a href="#" className="px-[10.67px] py-4 text-base font-medium text-brown-500 hover:opacity-80 transition">
          Products
        </a>
        <a href="#" className="px-[10.67px] py-4 text-base font-medium text-brown-500 hover:opacity-80 transition">
          Solutions
        </a>
        <a href="#" className="px-[10.67px] py-4 text-base font-medium text-brown-500 hover:opacity-80 transition">
          Pricing
        </a>
        <a href="#" className="px-[10.67px] py-4 text-base font-medium text-brown-500 hover:opacity-80 transition">
          Resources
        </a>
        <a href="#" className="px-[10.67px] py-4 text-base font-medium text-brown-500 hover:opacity-80 transition">
          Log In
        </a>
        <Button variant="primary" size="sm">
          Sign up now
        </Button>
      </nav>
    </header>
  );
};

export default Header;


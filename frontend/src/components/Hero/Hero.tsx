import React from 'react';
import Button from '../shared/Button';
import Icon from '../shared/Icon';

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-[106px] py-[106px] flex items-center gap-[106px]">
      <div className="flex-1 flex flex-col gap-16 max-w-[952px]">
        <div className="flex flex-col gap-[42.67px]">
          <h1 className="text-[72px] leading-[1.1] font-extrabold text-slate-900">Collectible Sneakers</h1>
          <p className="text-lg leading-[1.6] text-slate-900">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="flex items-center gap-5">
            <Button variant="primary" size="md">
              Sign up now
            </Button>
            <button className="px-[10.67px] py-4 flex items-center gap-[10.67px] rounded-[10.67px] text-base font-medium text-brown-500 hover:opacity-80 transition">
              <Icon name="play" size={32} />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="w-[648px] h-[564px] relative flex-shrink-0">
        <div className="absolute top-[68px] left-[68px] w-[489px] h-[496px] bg-yellow-400 rounded-[66px]"></div>
        <img 
          src="/images/hero-sneaker-3da2e0.png" 
          alt="Collectible Sneakers" 
          className="w-full h-[517px] object-cover rounded-[66px] relative z-10"
          onError={(e) => {
            console.error('Image failed to load:', e.currentTarget.src);
          }}
        />
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import Button from '../shared/Button';
import Icon from '../shared/Icon';

const WhyJoinUs: React.FC = () => {
  const benefits = [
    'Est et in pharetra magna adipiscing ornare aliquam.',
    'Tellus arcu sed consequat ac velit ut eu blandit.',
    'Ullamcorper ornare in et egestas dolor orci.',
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[106px] py-[213px]">
      <div className="bg-white rounded-[40px] shadow-xl p-[106px] flex items-start gap-[106px] relative overflow-visible">
        <div className="flex-1 flex flex-col gap-8 max-w-[693px]">
          <h2 className="text-[56px] leading-[1.1] text-slate-900 font-extrabold">Why join us</h2>
          <ul className="flex flex-col gap-5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-[10.67px]">
                <Icon name="check" size={32} className="flex-shrink-0 mt-1" />
                <span className="text-xl leading-[1.8] text-slate-900">{benefit}</span>
              </li>
            ))}
          </ul>
          <Button variant="primary" size="md" className="w-fit mt-2">
            Sign up now
          </Button>
        </div>
        <div className="flex-1 relative flex-shrink-0 overflow-visible">
          <div className="w-[693px] h-[466px] bg-white border-[6px] border-white rounded-[26px] shadow-xl overflow-hidden relative z-10">
            <div className="w-full h-12 bg-gray-200 flex items-center gap-2 px-5">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{backgroundImage: 'url(/images/product-1.png)'}}
            ></div>
          </div>
          <div className="absolute bottom-[-57px] right-[-57px] w-[113px] h-[114px] bg-green-700 opacity-75 rounded-[66px] z-0 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;


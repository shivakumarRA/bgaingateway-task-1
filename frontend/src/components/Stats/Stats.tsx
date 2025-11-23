import React from 'react';

const Stats: React.FC = () => {
  return (
    <section 
      className="w-full max-w-[1920px] mx-auto px-[106px] py-[106px] relative flex flex-col items-center justify-center" 
      style={{height: '956px'}}
    >
      <div 
        className="absolute top-[56px] left-[261px] w-[1398px] h-[844px] bg-cover bg-center rounded-[40px]" 
        style={{backgroundImage: 'url(/images/stats-background.png)'}}
      ></div>
      <div className="relative z-10 flex flex-col items-center gap-[106px]">
        <div className="flex flex-col items-center gap-[42px]">
          <div className="text-[96px] leading-[1.1] text-[#FFFBEB] font-extrabold text-center">11,658,467</div>
          <div className="text-[56px] leading-[1.1] text-[#FFFBEB] font-extrabold text-center">Shoes Collected</div>
        </div>
        <div className="relative">
          <div className="absolute top-[333px] left-[149px] w-[42px] h-[42px] bg-yellow-200 rounded-full border-4 border-yellow-400"></div>
          <div className="absolute top-[262px] left-[4px] w-[333px] bg-white rounded-[6px] shadow-xl p-5">
            <p className="text-sm leading-[1.4] text-slate-900">Emma Simpson collected one pair of Cool Shoes.</p>
            <div className="absolute bottom-[-8px] left-[159px] w-4 h-4 bg-white transform rotate-45"></div>
          </div>
          <img 
            src="/images/sneaker-collection.png" 
            alt="Sneaker Collection" 
            className="w-[341px] h-[266px] rounded-[13px] shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;


import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  decorationColor: string;
  decorationPosition: { top: string; left: string; width: string; height: string };
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Nibh viverra',
      description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
      icon: (
        <svg viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="14" width="37" height="47" stroke="#78350F" strokeWidth="2"/>
          <rect x="58" y="10" width="16" height="27" fill="#78350F"/>
          <rect x="10" y="10" width="17" height="27" fill="#78350F"/>
          <rect x="30" y="61" width="25" height="9" fill="#78350F"/>
        </svg>
      ),
      decorationColor: 'bg-blue-700',
      decorationPosition: { top: '-56px', left: '18px', width: '113px', height: '113px' },
    },
    {
      title: 'Cursus amet',
      description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
      icon: (
        <svg viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="42" cy="42" r="28" stroke="#78350F" strokeWidth="2"/>
          <path d="M28 42L38 52L56 34" stroke="#78350F" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      decorationColor: 'bg-green-700',
      decorationPosition: { top: '-20px', left: '14px', width: '70px', height: '70px' },
    },
    {
      title: 'Ipsum fermentum',
      description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
      icon: (
        <svg viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="24" width="71" height="53" rx="5" fill="#78350F"/>
          <rect x="30" y="8" width="24" height="12" rx="2" fill="white"/>
        </svg>
      ),
      decorationColor: 'bg-purple-600',
      decorationPosition: { top: '2px', left: '55px', width: '60px', height: '60px' },
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[106px] py-[106px] flex flex-col items-center gap-[106px]">
      <div className="w-full max-w-[1706px] flex gap-[106px]">
        {features.map((feature, index) => (
          <div key={index} className="flex-1 relative">
            <div 
              className={`absolute ${feature.decorationColor} opacity-50 rounded-[13px]`}
              style={{
                top: feature.decorationPosition.top,
                left: feature.decorationPosition.left,
                width: feature.decorationPosition.width,
                height: feature.decorationPosition.height,
              }}
            ></div>
            <div className="flex flex-col gap-[13px]">
              <div className="w-[85px] h-[85px] mb-5">{feature.icon}</div>
              <h3 className="text-xl leading-[1.1] font-medium text-slate-900">{feature.title}</h3>
              <p className="text-lg leading-[1.6] text-slate-900">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;


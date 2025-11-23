import React from 'react';
import Icon from '../shared/Icon';

const GrowCollection: React.FC = () => {
  const features = [
    { name: 'Bibendum tellus', icon: 'search' as const, hasArrow: true },
    { name: 'Cras eget', icon: 'shield' as const },
    { name: 'Dolor pharetra', icon: 'rocket' as const },
    { name: 'Amet, fringilla', icon: 'screen' as const },
    { name: 'Amet nibh', icon: 'podcast' as const },
    { name: 'Sed velit', icon: 'settings' as const },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[106px] py-[106px] pb-[170px] relative overflow-hidden">
      <div 
        className="absolute bottom-0 left-0 w-full h-[912px] bg-cover bg-center opacity-10 pointer-events-none" 
        style={{backgroundImage: 'url(/images/stats-background.png)'}}
      ></div>
      <div className="relative z-10 flex flex-col gap-[106px]">
        <div className="flex flex-col gap-[42px] max-w-[1706px]">
          <h2 className="text-[56px] leading-[1.1] text-slate-900 font-extrabold">Grow your collection</h2>
          <p className="text-lg leading-[1.6] text-slate-900 max-w-[1706px]">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
            <br /><br />
            Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>
        
        <div className="flex gap-[13px] relative">
          <div className="flex-1 flex flex-col gap-5 max-w-[341px]">
            {features.map((feature, index) => (
              <button 
                key={index}
                className={`w-full px-5 py-5 bg-white rounded-[10.67px] flex items-center gap-5 text-xl font-medium text-slate-900 hover:shadow-lg transition ${feature.hasArrow ? 'shadow-md' : ''}`}
              >
                <Icon name={feature.icon} size={32} />
                <span className="flex-1 text-left">{feature.name}</span>
                {feature.hasArrow && <Icon name="arrow-right" size={32} />}
              </button>
            ))}
          </div>
          <div className="flex-1 relative" style={{height: '754px'}}>
            <div className="absolute top-0 left-0 w-[1012px] h-[601px] bg-white border-[6px] border-white rounded-[26px] shadow-xl overflow-hidden">
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
            <div className="absolute top-[140px] left-[125px] w-[1012px] h-[601px] bg-white border-[6px] border-white rounded-[26px] shadow-xl overflow-hidden z-10">
              <div className="w-full h-12 bg-gray-200 flex items-center gap-2 px-5">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{backgroundImage: 'url(/images/product-2.png)'}}
              ></div>
            </div>
            <div 
              className="absolute top-[269px] left-[834px] w-[341px] h-[381px] bg-cover bg-center rounded-[13px] border-[6px] border-white shadow-xl z-20" 
              style={{backgroundImage: 'url(/images/sneaker-collection.png)'}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowCollection;


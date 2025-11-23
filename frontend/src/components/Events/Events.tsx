import React from 'react';
import Button from '../shared/Button';
import Icon from '../shared/Icon';

interface Event {
  id: number;
  category: string;
  title: string;
  image: string;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      category: 'Ipsum',
      title: 'Varius est diam',
      image: '/images/article-1.png',
    },
    {
      id: 2,
      category: 'Purus',
      title: 'Diam felis tempus',
      image: '/images/article-2.png',
    },
    {
      id: 3,
      category: 'Urna',
      title: 'Vel nulla varius',
      image: '/images/article-3.png',
    },
    {
      id: 4,
      category: 'Vitae',
      title: 'Amet tristique a',
      image: '/images/product-1.png',
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto relative">
      <div className="bg-[#FEF3C7] px-[106px] py-[106px] flex flex-col gap-[106px]">
        <div className="flex items-center justify-between">
          <h2 className="text-[56px] leading-[1.1] text-slate-900 font-extrabold">Amazing events</h2>
          <button className="px-0 py-4 flex items-center gap-3 text-base font-medium text-brown-500 hover:opacity-80 transition">
            Explore Articles
            <Icon name="arrow-right" size={32} />
          </button>
        </div>
        
        <div className="flex gap-8">
          {events.map((event) => (
            <div key={event.id} className="w-[402px] bg-white rounded-[13px] shadow-md overflow-hidden">
              <div className="p-8 flex flex-col gap-5">
                <div className="text-base leading-[1.1] font-medium text-slate-900">{event.category}</div>
                <h3 className="text-2xl leading-[1.1] font-bold text-slate-900">{event.title}</h3>
              </div>
              <div 
                className="w-full h-[300px] bg-cover bg-center rounded-[13px]" 
                style={{backgroundImage: `url(${event.image})`}}
              ></div>
              <div className="p-5">
                <button className="w-full px-0 py-4 flex items-center justify-center gap-3 text-base font-medium text-brown-500 hover:opacity-80 transition">
                  Buy Tickets
                  <Icon name="arrow-right" size={32} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-slate-900 px-[106px] py-[106px] flex items-center justify-between">
        <h2 className="text-[56px] leading-[1.1] text-white font-extrabold">Collect More Sneakers Today</h2>
        <Button variant="secondary" size="lg">
          Sign up now
        </Button>
      </div>
    </section>
  );
};

export default Events;


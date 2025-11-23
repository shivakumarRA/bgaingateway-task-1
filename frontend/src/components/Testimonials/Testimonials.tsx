import React from 'react';

interface Testimonial {
  id: number;
  company: string;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      company: 'kontrastr',
      text: 'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
      name: 'Ralph Edwards',
      role: 'Product Designer',
      avatar: '/images/avatar-1.png',
    },
    {
      id: 2,
      company: 'Zoomerr',
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      name: 'Hellen Jummy',
      role: 'Team Lead',
      avatar: '/images/avatar-2.png',
    },
    {
      id: 3,
      company: 'SHELLS',
      text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
      name: 'Hellena John',
      role: 'Co-founder',
      avatar: '/images/avatar-3.png',
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[106px] py-[106px] relative overflow-hidden">
      <div className="absolute top-[242px] left-[53px] w-[1813px] h-[561px] bg-yellow-200 z-0"></div>
      <div className="relative z-10 flex flex-col gap-[106px]">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[56px] leading-[1.1] text-slate-900 font-extrabold">Because they love us</h2>
          <div className="flex gap-8">
            <button className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex gap-8 w-full overflow-x-auto pb-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-[512px] flex-shrink-0 bg-white border border-gray-200 rounded-[26px] shadow-md p-[42px]">
              <div className="mb-5 pb-5 border-b border-gray-200">
                <div className="text-2xl leading-[1.1] font-bold text-slate-600">{testimonial.company}</div>
              </div>
              <p className="text-2xl leading-[1.6] text-black mb-5">{testimonial.text}</p>
              <div className="flex items-center gap-5 pt-5">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-[85px] h-[85px] rounded-full object-cover flex-shrink-0" 
                />
                <div className="flex flex-col">
                  <div className="text-lg leading-[1.6] font-normal text-black">{testimonial.name}</div>
                  <div className="text-base leading-[1.4] text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from 'react';
import Button from '../shared/Button';
import Icon from '../shared/Icon';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: '/images/product-1.png',
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    },
    {
      id: 2,
      image: '/images/product-2.png',
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    },
    {
      id: 3,
      image: '/images/product-3.png',
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[106px] py-[106px] flex flex-col gap-[106px] bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-[56px] leading-[1.1] text-white font-extrabold">The best of the best</h2>
        <Button variant="secondary" size="lg">
          Sign up now
        </Button>
      </div>
      
      <div className="flex gap-[64px]">
        {products.map((product) => (
          <div key={product.id} className="w-[526px] bg-slate-900 border border-slate-900 rounded-[13px] shadow-lg overflow-hidden">
            <div 
              className="w-full h-[400px] bg-cover bg-center" 
              style={{backgroundImage: `url(${product.image})`}}
            ></div>
            <div className="p-[42px] flex flex-col gap-5">
              <h3 className="text-2xl leading-[1.1] font-bold text-white">{product.title}</h3>
              <p className="text-lg leading-[1.6] text-white">{product.description}</p>
              <Button variant="secondary" size="md" className="w-full" icon={<Icon name="cart" />}>
                Buy Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;


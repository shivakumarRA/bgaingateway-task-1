import React from 'react';
import Icon from '../shared/Icon';

interface Article {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Articles: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      image: '/images/article-1.png',
      title: 'Congue velit risus',
      description: 'Nunc gravida semper tellus neque scelerisque eget tincidunt in.',
    },
    {
      id: 2,
      image: '/images/article-2.png',
      title: 'Ut mauris',
      description: 'Phasellus venenatis massa bibendum posuere dictum tristique.',
    },
    {
      id: 3,
      image: '/images/article-3.png',
      title: 'Aliquam tortor nunc',
      description: 'Leo mollis fermentum praesent in condimentum id velit purus in.',
    },
    {
      id: 4,
      image: '/images/article-4.png',
      title: 'Fusce non morbi',
      description: 'In sed bibendum metus pretium cursus tellus pharetra.',
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-[106px] py-[106px] flex flex-col gap-[106px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[56px] leading-[1.1] text-slate-900 font-extrabold">Articles by Collectors</h2>
        <button className="px-0 py-4 flex items-center gap-3 text-base font-medium text-brown-500 hover:opacity-80 transition">
          More Articles
          <Icon name="arrow-right" size={32} />
        </button>
      </div>
      
      <div className="flex gap-8">
        {articles.map((article) => (
          <div key={article.id} className="w-[402px] bg-white border border-gray-200 rounded-[13px] shadow-md overflow-hidden">
            <div 
              className="w-full h-[300px] bg-cover bg-center" 
              style={{backgroundImage: `url(${article.image})`}}
            ></div>
            <div className="p-[42px] flex flex-col gap-5">
              <h3 className="text-2xl leading-[1.1] font-bold text-slate-900">{article.title}</h3>
              <p className="text-lg leading-[1.6] text-slate-900">{article.description}</p>
              <button className="px-0 py-4 flex items-center gap-3 text-base font-medium text-brown-500 hover:opacity-80 transition">
                Read article
                <Icon name="arrow-right" size={32} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;


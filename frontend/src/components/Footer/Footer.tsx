import React from 'react';
import Icon from '../shared/Icon';

const Footer: React.FC = () => {
  const footerLinks = {
    product: ['Pricing', 'Overview', 'Browse', 'Accessibility', 'Five'],
    solutions: ['Brainstorming', 'Ideation', 'Wireframing', 'Research', 'Design'],
    support: ['Contact Us', 'Developers', 'Documentation', 'Integrations', 'Reports'],
  };

  return (
    <footer className="w-full max-w-[1920px] mx-auto px-[106px] py-16 bg-slate-900">
      <div className="border-b border-slate-600 pb-16 mb-8">
        <div className="flex gap-16">
          {/* Column 1 - Product */}
          <div className="flex-1">
            <h4 className="text-base leading-[1.1] font-medium text-white mb-4">Product</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base leading-[1.4] text-gray-200 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Solutions */}
          <div className="flex-1">
            <h4 className="text-base leading-[1.1] font-medium text-white mb-4">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base leading-[1.4] text-gray-200 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="flex-1">
            <h4 className="text-base leading-[1.1] font-medium text-white mb-4">Support</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base leading-[1.4] text-gray-200 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get the App */}
          <div className="flex-1">
            <h4 className="text-base leading-[1.1] font-medium text-white mb-4">Get the App</h4>
            <div className="flex flex-col gap-3 mb-16">
              <div className="w-[160px] h-[53px] bg-white rounded"></div>
              <div className="w-[180px] h-[53px] bg-white rounded"></div>
            </div>
            <div className="mb-4">
              <h5 className="text-base leading-[1.1] font-medium text-gray-200 mb-4">Follow Us</h5>
              <div className="flex gap-5">
                {[1, 2, 3, 4].map((item) => (
                  <a key={item} href="#" className="w-8 h-8">
                    <svg viewBox="0 0 32 32" fill="currentColor" className="text-gray-200 hover:text-white transition">
                      <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 25c-6.1 0-11-4.9-11-11S9.9 5 16 5s11 4.9 11 11-4.9 11-11 11z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-base leading-[1.4] text-gray-200">Collers @ 2023. All rights reserved.</p>
        <div className="flex items-center gap-10">
          <a href="#" className="text-base leading-[1.4] text-gray-200 hover:text-white transition">Terms</a>
          <a href="#" className="text-base leading-[1.4] text-gray-200 hover:text-white transition">Privacy</a>
          <a href="#" className="text-base leading-[1.4] text-gray-200 hover:text-white transition">Contact</a>
          <div className="flex items-center gap-3">
            <Icon name="world" size={32} className="text-white" />
            <span className="text-base leading-[1.4] text-gray-200">EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


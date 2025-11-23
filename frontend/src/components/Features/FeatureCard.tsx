import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  decorationColor: string;
  decorationStyle: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  decorationColor,
  decorationStyle,
}) => {
  return (
    <div className="flex-1 relative">
      <div 
        className={`absolute ${decorationColor} opacity-50 rounded-[13px]`}
        style={decorationStyle}
      ></div>
      <div className="flex flex-col gap-[13px]">
        <div className="w-[85px] h-[85px] mb-5">{icon}</div>
        <h3 className="text-xl leading-[1.1] font-medium text-slate-900">{title}</h3>
        <p className="text-lg leading-[1.6] text-slate-900">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;


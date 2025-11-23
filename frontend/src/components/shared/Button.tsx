import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon,
  iconPosition = 'right',
}) => {
  const baseStyles = 'rounded-[10.67px] font-medium transition flex items-center justify-center';
  
  const variantStyles = {
    primary: 'border-2 border-brown-500 text-brown-500 hover:bg-brown-500 hover:text-white',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-slate-900',
    outline: 'border-2 border-brown-500 text-brown-500 hover:bg-brown-500 hover:text-white',
    ghost: 'text-brown-500 hover:opacity-80',
  };

  const sizeStyles = {
    sm: 'px-[10.67px] py-4 text-base',
    md: 'px-[21px] py-[21px] text-xl',
    lg: 'px-8 py-[26px] text-2xl font-bold',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {icon && iconPosition === 'left' && <span className="mr-3">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-3">{icon}</span>}
    </button>
  );
};

export default Button;


const variants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  warning: 'bg-yellow-400 text-gray-900',
  danger: 'bg-red-500 text-white',
};

export default function Badge({
  children,
  variant = 'primary',
  className = '',
}) {
  return (
    <span className={`
      inline-block px-3 py-1 text-sm rounded-full
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}
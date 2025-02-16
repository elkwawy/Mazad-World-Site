const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  outline: "border border-gray-300 hover:bg-gray-50",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        rounded-full font-medium transition-colors
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

/*
          <Button>Primary Button</Button>

          <Button variant="secondary"> Secondary Button </Button>

          <Button variant="outline"> Outline Button </Button>

          <Button size="lg" variant="primary"> Large Button </Button>

          <Button size="sm" variant="secondary"> Small Button </Button>

          </Button>Custom Red Button</Button>

*/

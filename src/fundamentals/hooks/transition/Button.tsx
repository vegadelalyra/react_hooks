export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({
  disabled,
  onClick,
  title,
//   variant,
//   size,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
    //   className={button({ variant, size })}
      >
      {title}
    </button>
  );
}

import classes from './Button.module.css';

interface IButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  ariaLabel?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className={[classes.Container, props.className ? props.className : '']
        .join(' ')
        .trim()}
      onClick={props.onClick}
      style={props.style}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};

export default Button;

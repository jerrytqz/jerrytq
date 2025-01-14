import buttonClasses from '../Button/Button.module.css';
import linkClasses from './LinkButton.module.css';

interface LinkButtonProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <a
      className={[
        buttonClasses.Container,
        linkClasses.Container,
        props.className ? props.className : '',
      ]
        .join(' ')
        .trim()}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};

export default LinkButton;

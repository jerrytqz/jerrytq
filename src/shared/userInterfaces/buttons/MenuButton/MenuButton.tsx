import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button/Button';
import classes from './MenuButton.module.css';

interface MenuButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <Button
      className={[classes.Container, props.className ? props.className : '']
        .join(' ')
        .trim()}
      onClick={props.onClick}
      ariaLabel={props.ariaLabel}
    >
      <FontAwesomeIcon icon={faBars} className={classes.BarsIcon} fixedWidth />
    </Button>
  );
};

export default MenuButton;

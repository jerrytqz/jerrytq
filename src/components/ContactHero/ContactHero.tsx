import NetworkBackground from '../backgrounds/NetworkBackground/NetworkBackground';
import classes from './ContactHero.module.css';

const ContactHero: React.FC = () => {
  return (
    <section className={classes.Container}>
      <NetworkBackground />
      <header className={classes.Header}>
        <h1 className={[classes.Title, classes.Min768Block].join(' ')}>
          Contact Me!
        </h1>
        <h1 className={[classes.Title, classes.Min768None].join(' ')}>
          Contact
        </h1>
      </header>
    </section>
  );
};

export default ContactHero;

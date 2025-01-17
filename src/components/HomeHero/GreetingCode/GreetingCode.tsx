import { useEffect, useRef, useState } from 'react';

import classes from './GreetingCode.module.css';

const WRITE_DELAY = 50;
const DELETE_DELAY = 50;
const START_WRITE_DELAY = 150;
const START_DELETE_DELAY = 5000;
const COMMANDS = [
  'System.out.println("Hello World!");',
  'print("I love programming!")',
  'std::cout << "I like watching anime!";',
  'printf("I also like playing video games!");',
  "console.log('Chocolate is my favorite food!');",
];

const GreetingCode: React.FC = () => {
  const command = useRef<HTMLElement | null>(null);
  const lineNumber = useRef<HTMLElement | null>(null);
  const [typingBarBlink, setTypingBarBlink] = useState(false);

  useEffect(() => {
    const commandCurrent = command.current;
    const lineNumberCurrent = lineNumber.current;

    let writeTimeout: NodeJS.Timeout | null = null;
    let deleteTimeout: NodeJS.Timeout | null = null;
    let startWriteTimeout: NodeJS.Timeout | null = null;
    let startDeleteTimeout: NodeJS.Timeout | null = null;

    const typeWriter = (i: number, j: number, lineNumber: number): void => {
      if (i < COMMANDS[j].length) {
        if (commandCurrent) commandCurrent.textContent += COMMANDS[j].charAt(i);
        writeTimeout = setTimeout(
          () => typeWriter(++i, j, lineNumber),
          WRITE_DELAY,
        );
      } else {
        setTypingBarBlink(true);
        startDeleteTimeout = setTimeout(
          () => typeDeleter(i, j, lineNumber),
          START_DELETE_DELAY,
        );
      }
    };

    const typeDeleter = (i: number, j: number, lineNumber: number): void => {
      setTypingBarBlink(false);
      if (i > 0) {
        if (commandCurrent)
          commandCurrent.textContent = COMMANDS[j].slice(0, i - 1);
        deleteTimeout = setTimeout(
          () => typeDeleter(--i, j, lineNumber),
          DELETE_DELAY,
        );
      } else {
        const newLineNumber =
          lineNumber === COMMANDS.length ? 1 : lineNumber + 1;
        if (lineNumberCurrent)
          lineNumberCurrent.textContent = newLineNumber.toString();
        startWriteTimeout = setTimeout(
          () =>
            typeWriter(i, j === COMMANDS.length - 1 ? 0 : ++j, newLineNumber),
          START_WRITE_DELAY,
        );
      }
    };

    typeWriter(0, 0, 1);

    return () => {
      if (writeTimeout) clearTimeout(writeTimeout);
      if (deleteTimeout) clearTimeout(deleteTimeout);
      if (startWriteTimeout) clearTimeout(startWriteTimeout);
      if (startDeleteTimeout) clearTimeout(startDeleteTimeout);
      if (commandCurrent) commandCurrent.textContent = '';
      if (lineNumberCurrent) lineNumberCurrent.textContent = '1';
    };
  }, []);

  return (
    <pre className={classes.CommandContainer}>
      <code className={classes.LineNumber} ref={lineNumber} />
      <code className={classes.Command} ref={command}>
        1
      </code>
      <div
        className={`${classes.TypingBar} ${typingBarBlink ? classes.Blink : ''}`.trim()}
      />
    </pre>
  );
};

export default GreetingCode;

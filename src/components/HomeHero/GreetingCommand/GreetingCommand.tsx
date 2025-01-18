import { useEffect, useRef, useState } from 'react';

import classes from './GreetingCommand.module.css';

const WRITE_DELAY = 50;
const DELETE_DELAY = 50;
const START_WRITE_DELAY = 100;
const START_DELETE_DELAY = 5000;
const COMMANDS = [
  'System.out.println("Hello World!");',
  'print("I love programming!")',
  'std::cout << "I like watching anime!";',
  'printf("I also like playing video games!");',
  "console.log('Chocolate is my favorite food!');",
];

const GreetingCommand: React.FC = () => {
  const commandRef = useRef<HTMLElement | null>(null);
  const lineNumberRef = useRef<HTMLElement | null>(null);
  const [typingBarBlink, setTypingBarBlink] = useState(false);

  useEffect(() => {
    const command = commandRef.current;
    const lineNumber = lineNumberRef.current;

    let writeTimeout: NodeJS.Timeout | null = null;
    let deleteTimeout: NodeJS.Timeout | null = null;
    let startWriteTimeout: NodeJS.Timeout | null = null;
    let startDeleteTimeout: NodeJS.Timeout | null = null;

    const typeWriter = (i: number, j: number, lineNum: number) => {
      if (i < COMMANDS[j].length) {
        if (command) command.textContent += COMMANDS[j].charAt(i);
        writeTimeout = setTimeout(
          () => typeWriter(++i, j, lineNum),
          WRITE_DELAY,
        );
      } else {
        setTypingBarBlink(true);
        startDeleteTimeout = setTimeout(
          () => typeDeleter(i, j, lineNum),
          START_DELETE_DELAY,
        );
      }
    };

    const typeDeleter = (i: number, j: number, lineNum: number) => {
      setTypingBarBlink(false);
      if (i > 0) {
        if (command) command.textContent = COMMANDS[j].slice(0, i - 1);
        deleteTimeout = setTimeout(
          () => typeDeleter(--i, j, lineNum),
          DELETE_DELAY,
        );
      } else {
        const newLineNum = lineNum === COMMANDS.length ? 1 : lineNum + 1;
        if (lineNumber) lineNumber.textContent = newLineNum.toString();
        startWriteTimeout = setTimeout(
          () => typeWriter(i, j === COMMANDS.length - 1 ? 0 : ++j, newLineNum),
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
      if (command) command.textContent = '';
      if (lineNumber) lineNumber.textContent = '1';
    };
  }, []);

  return (
    <pre className={classes.Container}>
      <code className={classes.LineNumber} ref={lineNumberRef}>
        1
      </code>
      <code className={classes.Command} ref={commandRef} />
      <div
        className={`${classes.TypingBar} ${typingBarBlink ? classes.Blink : ''}`.trim()}
      />
    </pre>
  );
};

export default GreetingCommand;

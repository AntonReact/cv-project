// returns all the keys(classNames) that has true value
const parseObjectIntoArray = (object: Record<string, boolean>): Array<string> => Object.keys(object).filter((key) => object[key]);

// parses an array with any value into array of string
const parseArrayIntoClassNames = (array: Array<any>): Array<string> => array.reduce((acc, className) => {
  switch (true) {
    case !className: return acc;
    case Array.isArray(className): return [
      ...acc,
      ...parseArrayIntoClassNames(className),
    ];
    case typeof className === 'object': return [
      ...acc,
      ...parseObjectIntoArray(className),
    ];
    case typeof className === 'string': return [
      ...acc,
      className,
    ];
    default: return acc;
  }
}, []);

function clsx(...args: Array<any>): string {
  const classNames: Array<string> = parseArrayIntoClassNames(args);

  return classNames.join(' ');
}

export default clsx;

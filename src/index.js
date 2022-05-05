/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = 0;

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
    let str = string.split("");
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
      if (i % 2) {
        newStr.push(str[i].toUpperCase());
      } else {
        newStr.push(str[i].toLowerCase());
      }
    }
    return newStr;
  };

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, value) {
    if (action === 'uppercase') {
        return value.toUpperCase();
    } else if (action === 'lowercase') {
        return value.toLowerCase();
    } else if (action === 'fence') {
        return fenceString(value);
    } else if (action === 'capitalize') {
        return capitalizeString(value);
    } else {
        return value;
    }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (const value of string) {
        console.log(value);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
};
/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    while (true) {
        consoleLoggerWordsFor(string);
        break
    }
};
/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    let newString = string.split('');
    newString.forEach(element => {
        console.log(element);
    });
};

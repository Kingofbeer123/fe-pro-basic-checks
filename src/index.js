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
    return newStr.join("");
  };

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = 0;

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
export const consoleLoggerWordsForOf = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = 0;

import React from "react";

export const replaceWordWithElement = (
  text: string,
  targetWord: string,
  replacementWord: string,
  Element: React.ElementType
) => {
  const words = text.split(" ");

  const replacedWords = words.map((word, i) => {
    if (word.toLowerCase() === targetWord.toLowerCase()) {
      return <Element key={i}>{replacementWord} </Element>;
    } else {
      return <span key={i}>{word} </span>;
    }
  });

  return replacedWords;
};

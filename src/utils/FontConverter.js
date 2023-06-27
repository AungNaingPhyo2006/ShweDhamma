import Rabbit from 'rabbit-node';

export const convertZawgyiToUnicode = zawgyiText => {
  const unicodeText = Rabbit.zg2uni(zawgyiText);
  return unicodeText;
};

export const convertUnicodeToZawgyi = uiText => {
  const zawgyiText = Rabbit.uni2zg(uiText);
  return zawgyiText;
};

// const txt = convertZawgyiToUnicode('ပဌာန္း ေဒသနာေတာ္');
// console.log(txt);

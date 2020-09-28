let cyrillicToTranslit = require('cyrillic-to-translit-js');

class RegExpCyrl extends RegExp {
  constructor(pattern, flags) {
    pattern = cyrillicToTranslit.transform(pattern);
    super(pattern, flags);
  }

  static match(str, regexp) {
    str = argsProcess(str, regexp);
    const match = strMatch(str, regexp);
    return match;
  }

  static search(str, regexp={}) {
    str = argsProcess(str, regexp);
    const search = strSearch(str, regexp);
    return search;
  } 

  match(str) {
    const regexp = this;
    str = argsProcess(str, regexp);
    const match = strMatch(str, regexp);
    return match;
  }

  search(str) {
    const regexp = this;
    str = argsProcess(str, regexp);
    const search = strSearch(str, regexp);
    return search;
  }
}

function strMatch(str, regexp) {
  const match = str.match(regexp);
  if(match !== null) {
    match[0] = cyrillicToTranslit.reverse(match[0]);
    match.input = cyrillicToTranslit.reverse(match.input);
  }
  return match;
}

function strSearch(str, regexp) {
  const search = str.search(regexp);
  return search;
}

function argsProcess(str, regexp) {
  if(typeof str != 'string') throw new Error('First argument must be a string');
  if(typeof regexp != 'object') throw new Error('Second argument must be a regexp');

  str = cyrillicToTranslit.transform(str);
  return str;
}

module.exports = (preset='ru') => {
  cyrillicToTranslit = cyrillicToTranslit({ preset: preset });
  return RegExpCyrl;
};
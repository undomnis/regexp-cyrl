# regexp-cyrl

Аllows you to take full advantage of the capabilities of regular expressions with Cyrillic symbols<br>

# Usage

```
const regExpCyrlCreator = require('regexp-cyrl');

const RegExpCyrl = regExpCyrlCreator('ru'); // 'ru' or 'uk' parameter. By default 'ru';

const string = 'Привет мир!';
const regexp = new RegExpCyrl('^привет\\b', 'i');

const match = RegExpCyrl.match(string, regexp);
// or
const match = regexp.match(string);

console.dir(match); // [ 'Привет', index: 0, input: 'Привет мир!', groups: undefined ]
```

# Why is it needed?

By default, RegEx symbols like `\b` or `\B` don't support Cyrillic characters.<br><br>

Example:

```
  const string = 'Привет мир!';
  const regexp = new RegExp('^привет\\b', 'i');

  const match = string.match(regexp);

  console.dir(match) // null
```
With RegExpCyrl:

```
  const RegExpCyrl = require('regexp-cyrl')();

  const string = 'Привет мир!';
  const regexp = new RegExpCyrl('^привет\\b', 'i');

  const match = regexp.match(string); 

  console.dir(match); // [ 'Привет', index: 0, input: 'Привет мир!', groups: undefined ]
```

# Methods

- .match(string)
- .search(string)

### Static methods:

- RegExpCyrl.match(string, regexp)
- RegExpCyrl.search(string, regexp)
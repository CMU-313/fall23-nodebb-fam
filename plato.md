(base) Jadons-MacBook-Air:fall23-nodebb-fam cglankwa$ sudo npm install -g plato
Password:
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.

added 165 packages in 6s

6 packages are looking for funding
  run `npm fund` for details

(base) Jadons-MacBook-Air:fall23-nodebb-fam cglankwa$ plato -r -d report src
Error reading file src/cli/index.js:  SyntaxError: 'return' outside of function (101:4)
SyntaxError: 'return' outside of function (101:4)
    at pp$5.raise (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:4454:13)
    at pp$1.parseReturnStatement (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:2066:10)
    at pp$1.parseStatement (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:1848:19)
    at Parser.parseStatement (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:5910:22)
    at pp$1.parseBlockBody (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:2268:21)
    at pp$1.parseBlock (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:2247:8)
    at pp$1.parseStatement (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:1868:19)
    at Parser.parseStatement (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:5910:22)
    at pp$1.parseIfStatement (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:2059:26)
    at pp$1.parseStatement (/usr/local/lib/node_modules/plato/node_modules/babylon/lib/index.js:1846:19)
Done!


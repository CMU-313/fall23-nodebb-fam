__report = {"info":{"file":"src/upgrades/1.4.0/sorted_set_for_pinned_topics.js","fileShort":"src/upgrades/1.4.0/sorted_set_for_pinned_topics.js","fileSafe":"src_upgrades_1_4_0_sorted_set_for_pinned_topics_js","link":"files/src_upgrades_1_4_0_sorted_set_for_pinned_topics_js/index.html"},"complexity":{"methodAggregate":{"cyclomatic":2,"cyclomaticDensity":11.111,"halstead":{"bugs":0.342,"difficulty":11.127,"effort":11407.336,"length":169,"time":633.741,"vocabulary":67,"volume":1025.169,"operands":{"distinct":55,"total":102,"identifiers":["__stripped__"]},"operators":{"distinct":12,"total":67,"identifiers":["__stripped__"]}},"params":8,"sloc":{"logical":18,"physical":34}},"settings":{"commonjs":true,"forin":false,"logicalor":true,"switchcase":true,"trycatch":false,"newmi":true},"classes":[],"dependencies":[{"line":4,"path":"async","type":"cjs"},{"line":5,"path":"winston","type":"cjs"},{"line":6,"path":"../../database","type":"cjs"},{"line":12,"path":"../../topics","type":"cjs"},{"line":13,"path":"../../batch","type":"cjs"}],"errors":[],"lineEnd":34,"lineStart":1,"maintainability":81.59,"methods":[{"cyclomatic":1,"cyclomaticDensity":33.333,"halstead":{"bugs":0.025,"difficulty":3.438,"effort":254.405,"length":20,"time":14.134,"vocabulary":13,"volume":74.009,"operands":{"distinct":8,"total":11,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":9,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":3,"physical":23},"errors":[],"lineEnd":33,"lineStart":11,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.016,"difficulty":2.25,"effort":104.86,"length":13,"time":5.826,"vocabulary":12,"volume":46.605,"operands":{"distinct":8,"total":9,"identifiers":["__stripped__"]},"operators":{"distinct":4,"total":4,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":1,"physical":19},"errors":[],"lineEnd":32,"lineStart":14,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":50,"halstead":{"bugs":0.026,"difficulty":6,"effort":473.215,"length":22,"time":26.29,"vocabulary":12,"volume":78.869,"operands":{"distinct":6,"total":12,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":10,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":4,"physical":17},"errors":[],"lineEnd":31,"lineStart":15,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.009,"difficulty":1.8,"effort":48.6,"length":9,"time":2.7,"vocabulary":8,"volume":27,"operands":{"distinct":5,"total":6,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":3,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":20,"lineStart":20,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":50,"halstead":{"bugs":0.097,"difficulty":3.316,"effort":961.125,"length":65,"time":53.396,"vocabulary":22,"volume":289.863,"operands":{"distinct":19,"total":42,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":23,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":2,"physical":9},"errors":[],"lineEnd":30,"lineStart":22,"name":"<anonymous>"}],"methodAverage":{"cyclomatic":1.2,"cyclomaticDensity":46.667,"halstead":{"bugs":0.034,"difficulty":3.361,"effort":368.441,"length":25.8,"time":20.469,"vocabulary":13.4,"volume":103.269,"operands":{"distinct":9.2,"total":16},"operators":{"distinct":4.2,"total":9.8}},"params":1.6,"sloc":{"logical":2,"physical":13.8}},"module":"src/upgrades/1.4.0/sorted_set_for_pinned_topics.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":4,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":5,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":6,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":12,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":13,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":14,"column":56,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":15,"column":93,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":20,"column":46,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":22,"column":56,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":23,"column":37,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":26,"column":54,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":27,"column":57,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":28,"column":57,"message":"'template literal syntax' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":4,"column":15,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":5,"column":17,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":6,"column":12,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":12,"column":24,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":13,"column":23,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":8,"column":1,"message":"'module' is not defined.","source":"'{a}' is not defined."}]}}
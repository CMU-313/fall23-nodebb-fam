__report = {"info":{"file":"src/middleware/admin.js","fileShort":"src/middleware/admin.js","fileSafe":"src_middleware_admin_js","link":"files/src_middleware_admin_js/index.html"},"complexity":{"methodAggregate":{"cyclomatic":22,"cyclomaticDensity":16.923,"halstead":{"bugs":2.441,"difficulty":39.061,"effort":286002.639,"length":950,"time":15889.035,"vocabulary":209,"volume":7321.991,"operands":{"distinct":181,"total":505,"identifiers":["__stripped__"]},"operators":{"distinct":28,"total":445,"identifiers":["__stripped__"]}},"params":16,"sloc":{"logical":130,"physical":176}},"settings":{"commonjs":true,"forin":false,"logicalor":true,"switchcase":true,"trycatch":false,"newmi":true},"classes":[],"dependencies":[{"line":3,"path":"winston","type":"cjs"},{"line":4,"path":"jsesc","type":"cjs"},{"line":5,"path":"nconf","type":"cjs"},{"line":6,"path":"semver","type":"cjs"},{"line":8,"path":"../user","type":"cjs"},{"line":9,"path":"../meta","type":"cjs"},{"line":10,"path":"../plugins","type":"cjs"},{"line":11,"path":"../privileges","type":"cjs"},{"line":12,"path":"../utils","type":"cjs"},{"line":13,"path":"../admin/versions","type":"cjs"},{"line":14,"path":"./helpers","type":"cjs"},{"line":17,"path":"../controllers/api","type":"cjs"},{"line":18,"path":"../controllers/helpers","type":"cjs"},{"line":26,"path":"./index","type":"cjs"}],"errors":[],"lineEnd":176,"lineStart":1,"maintainability":57.631,"methods":[{"cyclomatic":2,"cyclomaticDensity":40,"halstead":{"bugs":0.056,"difficulty":3.833,"effort":646.128,"length":39,"time":35.896,"vocabulary":20,"volume":168.555,"operands":{"distinct":15,"total":23,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":16,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":5,"physical":9},"errors":[],"lineEnd":31,"lineStart":23,"name":"<anonymous>"},{"cyclomatic":7,"cyclomaticDensity":12.727,"halstead":{"bugs":0.911,"difficulty":16.739,"effort":45723.532,"length":406,"time":2540.196,"vocabulary":106,"volume":2731.536,"operands":{"distinct":92,"total":220,"identifiers":["__stripped__"]},"operators":{"distinct":14,"total":186,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":55,"physical":64},"errors":[],"lineEnd":96,"lineStart":33,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.024,"difficulty":2.75,"effort":197.173,"length":20,"time":10.954,"vocabulary":12,"volume":71.699,"operands":{"distinct":8,"total":11,"identifiers":["__stripped__"]},"operators":{"distinct":4,"total":9,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":58,"lineStart":56,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.005,"difficulty":0.625,"effort":10.158,"length":7,"time":0.564,"vocabulary":5,"volume":16.253,"operands":{"distinct":4,"total":5,"identifiers":["__stripped__"]},"operators":{"distinct":1,"total":2,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":83,"lineStart":83,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":50,"halstead":{"bugs":0.021,"difficulty":4.083,"effort":256.872,"length":17,"time":14.271,"vocabulary":13,"volume":62.907,"operands":{"distinct":6,"total":7,"identifiers":["__stripped__"]},"operators":{"distinct":7,"total":10,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":2,"physical":4},"errors":[],"lineEnd":101,"lineStart":98,"name":"getAdminScripts"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.003,"difficulty":1.5,"effort":15,"length":5,"time":0.833,"vocabulary":4,"volume":10,"operands":{"distinct":2,"total":3,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":1,"physical":1},"errors":[],"lineEnd":100,"lineStart":100,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":16.667,"halstead":{"bugs":0.029,"difficulty":4.278,"effort":376.444,"length":22,"time":20.914,"vocabulary":16,"volume":88,"operands":{"distinct":9,"total":11,"identifiers":["__stripped__"]},"operators":{"distinct":7,"total":11,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":6,"physical":9},"errors":[],"lineEnd":111,"lineStart":103,"name":"getLatestVersion"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.013,"difficulty":2,"effort":76.078,"length":12,"time":4.227,"vocabulary":9,"volume":38.039,"operands":{"distinct":6,"total":8,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":4,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":115,"lineStart":113,"name":"<anonymous>"},{"cyclomatic":15,"cyclomaticDensity":40.541,"halstead":{"bugs":0.635,"difficulty":28.603,"effort":54453.58,"length":302,"time":3025.199,"vocabulary":79,"volume":1903.742,"operands":{"distinct":58,"total":158,"identifiers":["__stripped__"]},"operators":{"distinct":21,"total":144,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":37,"physical":60},"errors":[],"lineEnd":176,"lineStart":117,"name":"<anonymous>"}],"methodAverage":{"cyclomatic":3.333,"cyclomaticDensity":51.104,"halstead":{"bugs":0.189,"difficulty":7.157,"effort":11306.107,"length":92.222,"time":628.117,"vocabulary":29.333,"volume":565.637,"operands":{"distinct":22.222,"total":49.556},"operators":{"distinct":7.111,"total":42.667}},"params":1.778,"sloc":{"logical":12,"physical":17.111}},"module":"src/middleware/admin.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":3,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":4,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":5,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":6,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":8,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":9,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":10,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":11,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":12,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":13,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":14,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":16,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":21,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":23,"column":64,"message":"Expected '(' and instead saw '{'.","source":"Expected '{a}' and instead saw '{b}'."},{"severity":"error","line":24,"column":8,"message":"Expected ')' to match '{' from line 23 and instead saw '.'.","source":"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."},{"severity":"error","line":24,"column":8,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":24,"column":40,"message":"Expected ')' and instead saw ';'.","source":"Expected '{a}' and instead saw '{b}'."},{"severity":"error","line":24,"column":41,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":26,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":26,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":29,"column":30,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":30,"column":11,"message":"Unrecoverable syntax error. (17% scanned).","source":"Unrecoverable syntax error."}]}}
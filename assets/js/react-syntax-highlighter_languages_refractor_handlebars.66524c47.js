(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3846,3047],{82834:function(e,n,t){"use strict";var a=t(93205);function r(e){e.register(a),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=r,r.displayName="handlebars",r.aliases=[]},93205:function(e){"use strict";function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,s){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof s&&!s(e))return e;for(var r,o=i.length;-1!==t.code.indexOf(r=n(a,o));)++o;return i[o]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,s=Object.keys(t.tokenStack);!function i(o){for(var l=0;l<o.length&&!(r>=s.length);l++){var u=o[l];if("string"==typeof u||u.content&&"string"==typeof u.content){var c=s[r],p=t.tokenStack[c],g="string"==typeof u?u:u.content,f=n(a,c),d=g.indexOf(f);if(d>-1){++r;var k=g.substring(0,d),b=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,i([k])),m.push(b),h&&m.push.apply(m,i([h])),"string"==typeof u?o.splice.apply(o,[l,1].concat(m)):u.content=m}}else u.content&&i(u.content)}return o}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
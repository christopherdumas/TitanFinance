function hex_md5(e){return rstr2hex(rstr_md5(str2rstr_utf8(e)))}function b64_md5(e){return rstr2b64(rstr_md5(str2rstr_utf8(e)))}function any_md5(e,t){return rstr2any(rstr_md5(str2rstr_utf8(e)),t)}function hex_hmac_md5(e,t){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(e),str2rstr_utf8(t)))}function b64_hmac_md5(e,t){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(e),str2rstr_utf8(t)))}function any_hmac_md5(e,t,n){return rstr2any(rstr_hmac_md5(str2rstr_utf8(e),str2rstr_utf8(t)),n)}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function rstr_md5(e){return binl2rstr(binl_md5(rstr2binl(e),e.length*8))}function rstr_hmac_md5(e,t){var n=rstr2binl(e);if(n.length>16)n=binl_md5(n,e.length*8);var r=Array(16),i=Array(16);for(var s=0;s<16;s++){r[s]=n[s]^909522486;i[s]=n[s]^1549556828}var o=binl_md5(r.concat(rstr2binl(t)),512+t.length*8);return binl2rstr(binl_md5(i.concat(o),512+128))}function rstr2hex(e){try{hexcase}catch(t){hexcase=0}var n=hexcase?"0123456789ABCDEF":"0123456789abcdef";var r="";var i;for(var s=0;s<e.length;s++){i=e.charCodeAt(s);r+=n.charAt(i>>>4&15)+n.charAt(i&15)}return r}function rstr2b64(e){try{b64pad}catch(t){b64pad=""}var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var r="";var i=e.length;for(var s=0;s<i;s+=3){var o=e.charCodeAt(s)<<16|(s+1<i?e.charCodeAt(s+1)<<8:0)|(s+2<i?e.charCodeAt(s+2):0);for(var u=0;u<4;u++){if(s*8+u*6>e.length*8)r+=b64pad;else r+=n.charAt(o>>>6*(3-u)&63)}}return r}function rstr2any(e,t){var n=t.length;var r,i,s,o,u;var a=Array(Math.ceil(e.length/2));for(r=0;r<a.length;r++){a[r]=e.charCodeAt(r*2)<<8|e.charCodeAt(r*2+1)}var f=Math.ceil(e.length*8/(Math.log(t.length)/Math.log(2)));var l=Array(f);for(i=0;i<f;i++){u=Array();o=0;for(r=0;r<a.length;r++){o=(o<<16)+a[r];s=Math.floor(o/n);o-=s*n;if(u.length>0||s>0)u[u.length]=s}l[i]=o;a=u}var c="";for(r=l.length-1;r>=0;r--)c+=t.charAt(l[r]);return c}function str2rstr_utf8(e){var t="";var n=-1;var r,i;while(++n<e.length){r=e.charCodeAt(n);i=n+1<e.length?e.charCodeAt(n+1):0;if(55296<=r&&r<=56319&&56320<=i&&i<=57343){r=65536+((r&1023)<<10)+(i&1023);n++}if(r<=127)t+=String.fromCharCode(r);else if(r<=2047)t+=String.fromCharCode(192|r>>>6&31,128|r&63);else if(r<=65535)t+=String.fromCharCode(224|r>>>12&15,128|r>>>6&63,128|r&63);else if(r<=2097151)t+=String.fromCharCode(240|r>>>18&7,128|r>>>12&63,128|r>>>6&63,128|r&63)}return t}function str2rstr_utf16le(e){var t="";for(var n=0;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)&255,e.charCodeAt(n)>>>8&255);return t}function str2rstr_utf16be(e){var t="";for(var n=0;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)>>>8&255,e.charCodeAt(n)&255);return t}function rstr2binl(e){var t=Array(e.length>>2);for(var n=0;n<t.length;n++)t[n]=0;for(var n=0;n<e.length*8;n+=8)t[n>>5]|=(e.charCodeAt(n/8)&255)<<n%32;return t}function binl2rstr(e){var t="";for(var n=0;n<e.length*32;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function binl_md5(e,t){e[t>>5]|=128<<t%32;e[(t+64>>>9<<4)+14]=t;var n=1732584193;var r=-271733879;var i=-1732584194;var s=271733878;for(var o=0;o<e.length;o+=16){var u=n;var a=r;var f=i;var l=s;n=md5_ff(n,r,i,s,e[o+0],7,-680876936);s=md5_ff(s,n,r,i,e[o+1],12,-389564586);i=md5_ff(i,s,n,r,e[o+2],17,606105819);r=md5_ff(r,i,s,n,e[o+3],22,-1044525330);n=md5_ff(n,r,i,s,e[o+4],7,-176418897);s=md5_ff(s,n,r,i,e[o+5],12,1200080426);i=md5_ff(i,s,n,r,e[o+6],17,-1473231341);r=md5_ff(r,i,s,n,e[o+7],22,-45705983);n=md5_ff(n,r,i,s,e[o+8],7,1770035416);s=md5_ff(s,n,r,i,e[o+9],12,-1958414417);i=md5_ff(i,s,n,r,e[o+10],17,-42063);r=md5_ff(r,i,s,n,e[o+11],22,-1990404162);n=md5_ff(n,r,i,s,e[o+12],7,1804603682);s=md5_ff(s,n,r,i,e[o+13],12,-40341101);i=md5_ff(i,s,n,r,e[o+14],17,-1502002290);r=md5_ff(r,i,s,n,e[o+15],22,1236535329);n=md5_gg(n,r,i,s,e[o+1],5,-165796510);s=md5_gg(s,n,r,i,e[o+6],9,-1069501632);i=md5_gg(i,s,n,r,e[o+11],14,643717713);r=md5_gg(r,i,s,n,e[o+0],20,-373897302);n=md5_gg(n,r,i,s,e[o+5],5,-701558691);s=md5_gg(s,n,r,i,e[o+10],9,38016083);i=md5_gg(i,s,n,r,e[o+15],14,-660478335);r=md5_gg(r,i,s,n,e[o+4],20,-405537848);n=md5_gg(n,r,i,s,e[o+9],5,568446438);s=md5_gg(s,n,r,i,e[o+14],9,-1019803690);i=md5_gg(i,s,n,r,e[o+3],14,-187363961);r=md5_gg(r,i,s,n,e[o+8],20,1163531501);n=md5_gg(n,r,i,s,e[o+13],5,-1444681467);s=md5_gg(s,n,r,i,e[o+2],9,-51403784);i=md5_gg(i,s,n,r,e[o+7],14,1735328473);r=md5_gg(r,i,s,n,e[o+12],20,-1926607734);n=md5_hh(n,r,i,s,e[o+5],4,-378558);s=md5_hh(s,n,r,i,e[o+8],11,-2022574463);i=md5_hh(i,s,n,r,e[o+11],16,1839030562);r=md5_hh(r,i,s,n,e[o+14],23,-35309556);n=md5_hh(n,r,i,s,e[o+1],4,-1530992060);s=md5_hh(s,n,r,i,e[o+4],11,1272893353);i=md5_hh(i,s,n,r,e[o+7],16,-155497632);r=md5_hh(r,i,s,n,e[o+10],23,-1094730640);n=md5_hh(n,r,i,s,e[o+13],4,681279174);s=md5_hh(s,n,r,i,e[o+0],11,-358537222);i=md5_hh(i,s,n,r,e[o+3],16,-722521979);r=md5_hh(r,i,s,n,e[o+6],23,76029189);n=md5_hh(n,r,i,s,e[o+9],4,-640364487);s=md5_hh(s,n,r,i,e[o+12],11,-421815835);i=md5_hh(i,s,n,r,e[o+15],16,530742520);r=md5_hh(r,i,s,n,e[o+2],23,-995338651);n=md5_ii(n,r,i,s,e[o+0],6,-198630844);s=md5_ii(s,n,r,i,e[o+7],10,1126891415);i=md5_ii(i,s,n,r,e[o+14],15,-1416354905);r=md5_ii(r,i,s,n,e[o+5],21,-57434055);n=md5_ii(n,r,i,s,e[o+12],6,1700485571);s=md5_ii(s,n,r,i,e[o+3],10,-1894986606);i=md5_ii(i,s,n,r,e[o+10],15,-1051523);r=md5_ii(r,i,s,n,e[o+1],21,-2054922799);n=md5_ii(n,r,i,s,e[o+8],6,1873313359);s=md5_ii(s,n,r,i,e[o+15],10,-30611744);i=md5_ii(i,s,n,r,e[o+6],15,-1560198380);r=md5_ii(r,i,s,n,e[o+13],21,1309151649);n=md5_ii(n,r,i,s,e[o+4],6,-145523070);s=md5_ii(s,n,r,i,e[o+11],10,-1120210379);i=md5_ii(i,s,n,r,e[o+2],15,718787259);r=md5_ii(r,i,s,n,e[o+9],21,-343485551);n=safe_add(n,u);r=safe_add(r,a);i=safe_add(i,f);s=safe_add(s,l)}return Array(n,r,i,s)}function md5_cmn(e,t,n,r,i,s){return safe_add(bit_rol(safe_add(safe_add(t,e),safe_add(r,s)),i),n)}function md5_ff(e,t,n,r,i,s,o){return md5_cmn(t&n|~t&r,e,t,i,s,o)}function md5_gg(e,t,n,r,i,s,o){return md5_cmn(t&r|n&~r,e,t,i,s,o)}function md5_hh(e,t,n,r,i,s,o){return md5_cmn(t^n^r,e,t,i,s,o)}function md5_ii(e,t,n,r,i,s,o){return md5_cmn(n^(t|~r),e,t,i,s,o)}function safe_add(e,t){var n=(e&65535)+(t&65535);var r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function bit_rol(e,t){return e<<t|e>>>32-t}var hexcase=0;var b64pad=""

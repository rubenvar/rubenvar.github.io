!function(){var t=document.getElementById("hex"),c=document.getElementById("convert"),n=document.getElementById("result"),a=document.getElementById("reset"),e=/^(#)?[a-fA-F0-9]{3}$|^(#)?[a-fA-F0-9]{4}$|^(#)?[a-fA-F0-9]{6}$|^(#)?[a-fA-F0-9]{8}$/;c.addEventListener("click",(function(){var c=t.value.split(",").map((function(t){return t.replace(/ /g,"")})).map((function(t){return t.replace(/\n/g,"")})).filter((function(t){return""!==t})).map((function(t){return function(t){if(!e.test(t))throw new Error("".concat(t," not valid (╯°□°）╯︵ ┻━┻"));var c,n,a,o,r=t.replace("#",""),i=r.length,l=4===i||8===i;if(6===i||8===i)c=+"0x".concat(r[0]).concat(r[1]),n=+"0x".concat(r[2]).concat(r[3]),a=+"0x".concat(r[4]).concat(r[5]),l&&(o=+"0x".concat(r[6]).concat(r[7]));else{if(3!==i&&4!==i)throw new Error("".concat(t," not valid (╯°□°）╯︵ ┻━┻"));c=+"0x".concat(r[0]).concat(r[0]),n=+"0x".concat(r[1]).concat(r[1]),a=+"0x".concat(r[2]).concat(r[2]),l&&(o=+"0x".concat(r[3]).concat(r[3]))}c/=255,n/=255,a/=255,l&&(o=(o/255).toFixed(2));var u,d=Math.min(c,n,a),f=Math.max(c,n,a),v=f-d;0===v?u=0:f===c?u=(n-a)/v%6:f===n?u=(a-c)/v+2:f===a&&(u=(c-n)/v+4),(u=Math.round(60*u))<0&&(u+=360);var m=(f+d)/2,x=0===v?0:v/(1-Math.abs(2*m-1));return m=+(100*m).toFixed(0),x=+(100*x).toFixed(0),l?"hsla(".concat(u,", ").concat(x,"%, ").concat(m,"%, ").concat(o,")"):"hsl(".concat(u,", ").concat(x,"%, ").concat(m,"%)")}(t)})).join("\n");n.value=c,n.style.borderColor=c})),a.addEventListener("click",(function(){t.value="",n.value=""}))}();
//# sourceMappingURL=index.60c83100.js.map
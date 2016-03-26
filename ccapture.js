function download(m,l,g){function c(d){var e=d.split(/[:;,]/),d=e[1],e=("base64"==e[2]?atob:decodeURIComponent)(e.pop()),h=e.length,a=0,w=new Uint8Array(h);for(a;a<h;++a)w[a]=e.charCodeAt(a);return new f([w],{type:d})}function k(e,h){if("download"in j)return j.href=e,j.setAttribute("download",d),j.innerHTML="downloading...",j.style.display="none",b.body.appendChild(j),setTimeout(function(){j.click();b.body.removeChild(j);!0===h&&setTimeout(function(){i.URL.revokeObjectURL(j.href)},250)},66),!0;var a=
b.createElement("iframe");b.body.appendChild(a);h||(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,o));a.src=e;setTimeout(function(){b.body.removeChild(a)},333)}var i=window,o="application/octet-stream",g=g||o,b=document,j=b.createElement("a"),a=function(d){return""+d},f=i.Blob||i.MozBlob||i.WebKitBlob||a,h=i.MSBlobBuilder||i.WebKitBlobBuilder||i.BlobBuilder,d=l||"download",e;"true"===""+this&&(m=[m,g],g=m[0],m=m[1]);if((""+m).match(/^data\:[\w+\-]+\/[\w+\-]+[,;]/))return navigator.msSaveBlob?navigator.msSaveBlob(c(m),
d):k(m);try{e=m instanceof f?m:new f([m],{type:g})}catch(w){h&&(e=new h,e.append([m]),e=e.getBlob(g))}if(navigator.msSaveBlob)return navigator.msSaveBlob(e,d);if(i.URL)k(i.URL.createObjectURL(e),!0);else{if("string"===typeof e||e.constructor===a)try{return k("data:"+g+";base64,"+i.btoa(e))}catch(Y){return k("data:"+g+","+encodeURIComponent(e))}l=new FileReader;l.onload=function(){k(this.result)};l.readAsDataURL(e)}return!0};window.Whammy=function(){function m(h,d){for(var e=l(h),e=[{id:440786851,data:[{data:1,id:17030},{data:1,id:17143},{data:4,id:17138},{data:8,id:17139},{data:"webm",id:17026},{data:2,id:17031},{data:2,id:17029}]},{id:408125543,data:[{id:357149030,data:[{data:1E6,id:2807729},{data:"whammy",id:19840},{data:"whammy",id:22337},{data:a(e.duration),id:17545}]},{id:374648427,data:[{id:174,data:[{data:1,id:215},{data:1,id:29637},{data:0,id:156},{data:"und",id:2274716},{data:"V_VP8",id:134},{data:"VP8",id:2459272},
{data:1,id:131},{id:224,data:[{data:e.width,id:176},{data:e.height,id:186}]}]}]},{id:475249515,data:[]}]}],w=e[1],b=w.data[2],i=0,c=0;i<h.length;){var f={id:187,data:[{data:Math.round(c),id:179},{id:183,data:[{data:1,id:247},{data:0,size:8,id:241}]}]};b.data.push(f);var j=[],f=0;do j.push(h[i]),f+=h[i].duration,i++;while(i<h.length&&3E4>f);var g=0,j={id:524531317,data:[{data:Math.round(c),id:231}].concat(j.map(function(d){var e=o({discardable:0,frame:d.data.slice(4),invisible:0,keyframe:1,lacing:0,
trackNum:1,timecode:Math.round(g)});g+=d.duration;return{data:e,id:163}}))};w.data.push(j);c+=f}for(c=i=0;c<w.data.length;c++)3<=c&&(b.data[c-3].data[1].data[1].data=i),f=k([w.data[c]],d),i+=f.size||f.byteLength||f.length,2!=c&&(w.data[c]=f);return k(e,d)}function l(h){for(var d=h[0].width,e=h[0].height,a=h[0].duration,b=1;b<h.length;b++){if(h[b].width!=d)throw"Frame "+(b+1)+" has a different width";if(h[b].height!=e)throw"Frame "+(b+1)+" has a different height";if(0>h[b].duration||32767<h[b].duration)throw"Frame "+
(b+1)+" has a weird duration (must be between 0 and 32767)";a+=h[b].duration}return{duration:a,width:d,height:e}}function g(h){for(var d=[];0<h;)d.push(h&255),h>>=8;return new Uint8Array(d.reverse())}function c(h){for(var d=[],h=(h.length%8?Array(9-h.length%8).join("0"):"")+h,e=0;e<h.length;e+=8)d.push(parseInt(h.substr(e,8),2));return new Uint8Array(d)}function k(h,d){for(var e=[],a=0;a<h.length;a++)if("id"in h[a]){var b=h[a].data;"object"==typeof b&&(b=k(b,d));if("number"==typeof b)if("size"in h[a]){for(var f=
h[a].size,j=new Uint8Array(f),f=f-1;0<=f;f--)j[f]=b&255,b>>=8;b=j}else b=c(b.toString(2));if("string"==typeof b){j=new Uint8Array(b.length);for(f=0;f<b.length;f++)j[f]=b.charCodeAt(f);b=j}for(var f=b.size||b.byteLength||b.length,j=0,o=56;0<o;o-=7)if(f>Math.pow(2,o)-2){j=o/7;break}f=f.toString(2);o=Array(8*(j+1)+1).join("0");j=Array(j+1).join("0")+1;f=o.substr(0,o.length-f.length-j.length)+f;j+=f;e.push(g(h[a].id));e.push(c(j));e.push(b)}else e.push(h[a]);return d?(e=i(e),new Uint8Array(e)):new Blob(e,
{type:"video/webm"})}function i(h,d){null==d&&(d=[]);for(var e=0;e<h.length;e++)"object"==typeof h[e]?i(h[e],d):d.push(h[e]);return d}function o(h){var d=0;h.keyframe&&(d|=128);h.invisible&&(d|=8);h.lacing&&(d|=h.lacing<<1);h.discardable&&(d|=1);if(127<h.trackNum)throw"TrackNumber > 127 not supported";return[h.trackNum|128,h.timecode>>8,h.timecode&255,d].map(function(d){return String.fromCharCode(d)}).join("")+h.frame}function b(h){for(var d=h.RIFF[0].WEBP[0],e=d.indexOf("\u009d\u0001*"),a=0,b=[];4>
a;a++)b[a]=d.charCodeAt(e+3+a);a=b[1]<<8|b[0];e=a&16383;a=b[3]<<8|b[2];return{width:e,height:a&16383,data:d,riff:h}}function j(h){for(var d=0,e={};d<h.length;){var a=h.substr(d,4);e[a]=e[a]||[];if("RIFF"==a||"LIST"==a){var b=parseInt(h.substr(d+4,4).split("").map(function(d){d=d.charCodeAt(0).toString(2);return Array(8-d.length+1).join("0")+d}).join(""),2),f=h.substr(d+4+4,b),d=d+(8+b);e[a].push(j(f))}else"WEBP"==a?e[a].push(h.substr(d+8)):e[a].push(h.substr(d+4)),d=h.length}return e}function a(a){return[].slice.call(new Uint8Array((new Float64Array([a])).buffer),
0).map(function(d){return String.fromCharCode(d)}).reverse().join("")}function f(a,d){this.frames=[];this.duration=1E3/a;this.quality=d||0.8}f.prototype.add=function(a,d){if("undefined"!=typeof d&&this.duration)throw"you can't pass a duration if the fps is set";if("undefined"==typeof d&&!this.duration)throw"if you don't have the fps set, you need to have durations here.";a.canvas&&(a=a.canvas);if(a.toDataURL)a=a.getContext("2d").getImageData(0,0,a.width,a.height);else if("string"!=typeof a)throw"frame must be a a HTMLCanvasElement, a CanvasRenderingContext2D or a DataURI formatted string";
if("string"===typeof a&&!/^data:image\/webp;base64,/ig.test(a))throw"Input must be formatted properly as a base64 encoded DataURI of type image/webp";this.frames.push({image:a,duration:d||this.duration})};f.prototype.encodeFrames=function(a){if(this.frames[0].image instanceof ImageData){var d=this.frames,e=document.createElement("canvas"),b=e.getContext("2d");e.width=this.frames[0].image.width;e.height=this.frames[0].image.height;var f=function(j){var c=d[j];b.putImageData(c.image,0,0);c.image=e.toDataURL("image/webp",
this.quality);j<d.length-1?setTimeout(function(){f(j+1)},1):a()}.bind(this);f(0)}else a()};f.prototype.compile=function(a,d){this.encodeFrames(function(){var e=new m(this.frames.map(function(d){var a=b(j(atob(d.image.slice(23))));a.duration=d.duration;return a}),a);d(e)}.bind(this))};return{Video:f,fromImageArray:function(a,d,e){return m(a.map(function(a){a=b(j(atob(a.slice(23))));a.duration=1E3/d;return a}),e)},toWebM:m}}();(function(){function m(g){var c,k=new Uint8Array(g);for(c=0;c<g;c+=1)k[c]=0;return k}var l="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,+,/".split(",");window.utils={};window.utils.clean=m;window.utils.pad=function(g,c,k){g=g.toString(k||8);return"000000000000".substr(g.length+12-c)+g};window.utils.extend=function(g,c,k,i){c=m((parseInt((c+k)/i)+1)*i);c.set(g);return c};window.utils.stringToUint8=function(g,c,k){var i,
o,c=c||m(g.length),k=k||0;for(i=0,o=g.length;i<o;i+=1)c[k]=g.charCodeAt(i),k+=1;return c};window.utils.uint8ToBase64=function(g){var c,k=g.length%3,i="",o;for(c=0,o=g.length-k;c<o;c+=3)k=(g[c]<<16)+(g[c+1]<<8)+g[c+2],i+=l[k>>18&63]+l[k>>12&63]+l[k>>6&63]+l[k&63];switch(i.length%4){case 1:i+="=";break;case 2:i+="=="}return i}})();
(function(){var m=window.utils,l;l=[{field:"fileName",length:100},{field:"fileMode",length:8},{field:"uid",length:8},{field:"gid",length:8},{field:"fileSize",length:12},{field:"mtime",length:12},{field:"checksum",length:8},{field:"type",length:1},{field:"linkName",length:100},{field:"ustar",length:8},{field:"owner",length:32},{field:"group",length:32},{field:"majorNumber",length:8},{field:"minorNumber",length:8},{field:"filenamePrefix",length:155},{field:"padding",length:12}];window.header={};window.header.structure=
l;window.header.format=function(g,c){var k=m.clean(512),i=0;l.forEach(function(c){var b=g[c.field]||"",j,a;for(j=0,a=b.length;j<a;j+=1)k[i]=b.charCodeAt(j),i+=1;i+=c.length-j});return"function"===typeof c?c(k,i):k}})();
(function(){function m(i){this.written=0;k=(i||20)*c;this.out=g.clean(k);this.blocks=[];this.length=0}var l=window.header,g=window.utils,c=512,k;m.prototype.append=function(i,k,b){var j,a,f,h,d,e;if("string"===typeof k)k=g.stringToUint8(k);else if(k.constructor!==Uint8Array.prototype.constructor)throw"Invalid input type. You gave me: "+k.constructor.toString().match(/function\s*([$A-Za-z_][0-9A-Za-z_]*)\s*\(/)[1];"function"===typeof b&&(b={});b=b||{};f=b.mode||511;h=b.mtime||Math.floor(+new Date/
1E3);d=b.uid||0;e=b.gid||0;j={fileName:i,fileMode:g.pad(f,7),uid:g.pad(d,7),gid:g.pad(e,7),fileSize:g.pad(k.length,11),mtime:g.pad(h,11),checksum:"        ",type:"0",ustar:"ustar  ",owner:b.owner||"",group:b.group||""};a=0;Object.keys(j).forEach(function(d){var e=j[d],b;for(d=0,b=e.length;d<b;d+=1)a+=e.charCodeAt(d)});j.checksum=g.pad(a,6)+"\x00 ";i=l.format(j);b=Math.ceil(i.length/c)*c;f=Math.ceil(k.length/c)*c;this.blocks.push({header:i,input:k,headerLength:b,inputLength:f})};m.prototype.save=function(){var i=
[],k=[],b=0,j=Math.pow(2,20),a=[];this.blocks.forEach(function(f){b+f.headerLength+f.inputLength>j&&(k.push({blocks:a,length:b}),a=[],b=0);a.push(f);b+=f.headerLength+f.inputLength});k.push({blocks:a,length:b});k.forEach(function(a){var b=new Uint8Array(a.length),d=0;a.blocks.forEach(function(a){b.set(a.header,d);d+=a.headerLength;b.set(a.input,d);d+=a.inputLength});i.push(b)});i.push(new Uint8Array(2*c));return new Blob(i,{type:"octet/stream"})};m.prototype.clear=function(){this.written=0;this.out=
g.clean(k)};window.Tar=m})();(function(m){function l(c,k){if({}.hasOwnProperty.call(l.cache,c))return l.cache[c];var i=l.resolve(c);if(!i)throw Error("Failed to resolve module "+c);var g={id:c,require:l,filename:c,exports:{},loaded:!1,parent:k,children:[]};k&&k.children.push(g);var b=c.slice(0,c.lastIndexOf("/")+1);return l.cache[c]=g.exports,i.call(g.exports,g,g.exports,b,c),g.loaded=!0,l.cache[c]=g.exports}l.modules={};l.cache={};l.resolve=function(c){return{}.hasOwnProperty.call(l.modules,c)?l.modules[c]:void 0};l.define=
function(c,k){l.modules[c]=k};var g=function(c){return c="/",{title:"browser",version:"v0.10.26",browser:!0,env:{},argv:[],nextTick:m.setImmediate||function(c){setTimeout(c,0)},cwd:function(){return c},chdir:function(k){c=k}}}();l.define("/gif.coffee",function(c){function k(a,b){function d(){this.constructor=a}for(var e in b)({}).hasOwnProperty.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a}var i,g,b,j,a;b=l("events",c).EventEmitter;i=l("/browser.coffee",
c);a=function(a){function b(a){var e,f;this.running=!1;this.options={};this.frames=[];this.freeWorkers=[];this.activeWorkers=[];this.setOptions(a);for(e in g)f=g[e],null!=this.options[e]||(this.options[e]=f)}return k(b,a),g={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null},j={delay:500,copy:!1},b.prototype.setOption=function(a,b){return this.options[a]=b,null!=this._canvas&&("width"===a||"height"===a)?this._canvas[a]=b:void 0},b.prototype.setOptions=
function(a){var b,f,h=[];for(b in a)({}).hasOwnProperty.call(a,b)&&(f=a[b],h.push(this.setOption(b,f)));return h},b.prototype.addFrame=function(a,b){var f,h;null==b&&(b={});f={};f.transparent=this.options.transparent;for(h in j)f[h]=b[h]||j[h];if(null!=this.options.width||this.setOption("width",a.width),null!=this.options.height||this.setOption("height",a.height),"undefined"!==typeof ImageData&&null!=ImageData&&a instanceof ImageData)f.data=a.data;else if("undefined"!==typeof CanvasRenderingContext2D&&
null!=CanvasRenderingContext2D&&a instanceof CanvasRenderingContext2D||"undefined"!==typeof WebGLRenderingContext&&null!=WebGLRenderingContext&&a instanceof WebGLRenderingContext)b.copy?f.data=this.getContextData(a):f.context=a;else if(null!=a.childNodes)b.copy?f.data=this.getImageData(a):f.image=a;else throw Error("Invalid image");return this.frames.push(f)},b.prototype.render=function(){var a;if(this.running)throw Error("Already running");if(!(null!=this.options.width&&null!=this.options.height))throw Error("Width and height must be set prior to rendering");
this.running=!0;this.nextFrame=0;this.finishedFrames=0;this.imageParts=function(a){for(var b=0,d=function(){var a;a=[];for(var b=0;0<=this.frames.length?b<this.frames.length:b>this.frames.length;0<=this.frames.length?++b:--b)a.push(b);return a}.apply(this,arguments).length;b<d;++b)a.push(null);return a}.call(this,[]);a=this.spawnWorkers();for(var b=0,f=function(){var b;b=[];for(var e=0;0<=a?e<a:e>a;0<=a?++e:--e)b.push(e);return b}.apply(this,arguments).length;b<f;++b)this.renderNextFrame();return this.emit("start"),
this.emit("progress",0)},b.prototype.abort=function(){for(var a;!(a=this.activeWorkers.shift(),null==a);){console.log("killing active worker");a.terminate()}return this.running=!1,this.emit("abort")},b.prototype.spawnWorkers=function(){var a;return a=Math.min(this.options.workers,this.frames.length),function(){var b;b=[];for(var f=this.freeWorkers.length;this.freeWorkers.length<=a?f<a:f>a;this.freeWorkers.length<=a?++f:--f)b.push(f);return b}.apply(this,arguments).forEach(function(a){return function(b){var d;
return console.log("spawning worker "+b),d=new Worker(a.options.workerScript),d.onmessage=function(a){return function(b){return a.activeWorkers.splice(a.activeWorkers.indexOf(d),1),a.freeWorkers.push(d),a.frameFinished(b.data)}}(a),a.freeWorkers.push(d)}}(this)),a},b.prototype.frameFinished=function(a){console.log("frame "+a.index+" finished - "+this.activeWorkers.length+" active");this.finishedFrames++;this.emit("progress",this.finishedFrames/this.frames.length);this.imageParts[a.index]=a;a:{for(var a=
this.imageParts,b=0,f=a.length;b<f;++b)if(b in a&&null===a[b]){a=!0;break a}a=!1}return a?this.renderNextFrame():this.finishRendering()},b.prototype.finishRendering=function(){var a,b,f,h,c,j,i;a=c=0;for(j=this.imageParts.length;a<j;++a)b=this.imageParts[a],c+=(b.data.length-1)*b.pageSize+b.cursor;c+=b.pageSize-b.cursor;console.log("rendering finished - filesize "+Math.round(c/1E3)+"kb");a=new Uint8Array(c);j=0;c=0;for(var k=this.imageParts.length;c<k;++c){b=this.imageParts[c];for(var g=0,l=b.data.length;g<
l;++g)i=b.data[g],f=g,a.set(i,j),f===b.data.length-1?j+=b.cursor:j+=b.pageSize}return h=new Blob([a],{type:"image/gif"}),this.emit("finished",h,a)},b.prototype.renderNextFrame=function(){var a,b,f;if(0===this.freeWorkers.length)throw Error("No free workers");return this.nextFrame>=this.frames.length?void 0:(a=this.frames[this.nextFrame++],f=this.freeWorkers.shift(),b=this.getTask(a),console.log("starting frame "+(b.index+1)+" of "+this.frames.length),this.activeWorkers.push(f),f.postMessage(b))},
b.prototype.getContextData=function(a){return a.getImageData(0,0,this.options.width,this.options.height).data},b.prototype.getImageData=function(a){var b;return null!=this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),b=this._canvas.getContext("2d"),b.setFill=this.options.background,b.fillRect(0,0,this.options.width,this.options.height),b.drawImage(a,0,0),this.getContextData(b)},b.prototype.getTask=function(a){var b,
f;if(b=this.frames.indexOf(a),f={index:b,last:b===this.frames.length-1,delay:a.delay,transparent:a.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,repeat:this.options.repeat,canTransfer:"chrome"===i.name},null!=a.data)f.data=a.data;else if(null!=a.context)f.data=this.getContextData(a.context);else if(null!=a.image)f.data=this.getImageData(a.image);else throw Error("Invalid frame");return f},b}(b);c.exports=a});l.define("/browser.coffee",function(c){var g,
i,l,b,j;b=navigator.userAgent.toLowerCase();l=navigator.platform.toLowerCase();j=b.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0];i="ie"===j[1]&&document.documentMode;g={name:"version"===j[1]?j[3]:j[1],version:i||parseFloat("opera"===j[1]&&j[4]?j[4]:j[2]),platform:{name:b.match(/ip(?:ad|od|hone)/)?"ios":(b.match(/(?:webos|android)/)||l.match(/mac|win|linux/)||["other"])[0]}};g[g.name]=!0;g[g.name+parseInt(g.version,10)]=!0;
g.platform[g.platform.name]=!0;c.exports=g});l.define("events",function(c,k){g.EventEmitter||(g.EventEmitter=function(){});var i=k.EventEmitter=g.EventEmitter,l="function"===typeof Array.isArray?Array.isArray:function(b){return"[object Array]"===Object.prototype.toString.call(b)};i.prototype.setMaxListeners=function(b){this._events||(this._events={});this._events.maxListeners=b};i.prototype.emit=function(b){if("error"===b&&(!this._events||!this._events.error||l(this._events.error)&&!this._events.error.length))throw arguments[1]instanceof
Error?arguments[1]:Error("Uncaught, unspecified 'error' event.");if(!this._events)return!1;var c=this._events[b];if(!c)return!1;if("function"!=typeof c){if(l(c)){for(var a=Array.prototype.slice.call(arguments,1),c=c.slice(),f=0,h=c.length;f<h;f++)c[f].apply(this,a);return!0}return!1}switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),c.apply(this,a)}return!0};
i.prototype.addListener=function(b,c){if("function"!==typeof c)throw Error("addListener only takes instances of Function");if(this._events||(this._events={}),this.emit("newListener",b,c),!this._events[b])this._events[b]=c;else if(l(this._events[b])){if(!this._events[b].warned){var a;void 0!==this._events.maxListeners?a=this._events.maxListeners:a=10;a&&0<a&&this._events[b].length>a&&(this._events[b].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
this._events[b].length),console.trace())}this._events[b].push(c)}else this._events[b]=[this._events[b],c];return this};i.prototype.on=i.prototype.addListener;i.prototype.once=function(b,c){var a=this;return a.on(b,function h(){a.removeListener(b,h);c.apply(this,arguments)}),this};i.prototype.removeListener=function(b,c){if("function"!==typeof c)throw Error("removeListener only takes instances of Function");if(!this._events||!this._events[b])return this;var a=this._events[b];if(l(a)){var f=a.indexOf(c);
if(0>f)return this;a.splice(f,1);0==a.length&&delete this._events[b]}else this._events[b]===c&&delete this._events[b];return this};i.prototype.removeAllListeners=function(b){return b&&this._events&&this._events[b]&&(this._events[b]=null),this};i.prototype.listeners=function(b){return this._events||(this._events={}),this._events[b]||(this._events[b]=[]),l(this._events[b])||(this._events[b]=[this._events[b]]),this._events[b]}});m.GIF=l("/gif.coffee")}).call(this,this);(function(){function m(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}function l(a){var b={};this.settings=a;this.on=function(a,c){b[a]=c};this.emit=function(a){var c=b[a];c&&c.apply(null,Array.prototype.slice.call(arguments,1))};this.filename=a.name||m();this.mimeType=this.extension=""}function g(a){l.call(this,a);this.extension=".tar";this.mimeType="application/x-tar";this.fileExtension="";this.tape=null;
this.count=0}function c(a){g.call(this,a);this.type="image/png";this.fileExtension=".png"}function k(a){g.call(this,a);this.type="image/jpeg";this.fileExtension=".jpg";this.quality=a.quality/100||0.8}function i(a){"image/webp"!==document.createElement("canvas").toDataURL("image/webp").substr(5,10)&&console.log("WebP not supported - try another export format");l.call(this,a);a.quality=a.quality/100||0.8;this.extension=".webm";this.mimeType="video/webm";this.baseFilename=this.filename;this.frames=[];
this.part=1}function o(a){l.call(this,a);a.quality=a.quality/100||0.8;this.encoder=new FFMpegServer.Video(a);this.encoder.on("process",function(){this.emit("process")}.bind(this));this.encoder.on("finished",function(a,b){var c=this.callback;c&&(this.callback=void 0,c(a,b))}.bind(this));this.encoder.on("progress",function(a){if(this.settings.onProgress)this.settings.onProgress(a)}.bind(this));this.encoder.on("error",function(a){alert(JSON.stringify(a,null,2))}.bind(this))}function b(a){l.call(this,
a);a.quality=31-(30*a.quality/100||10);a.workers=a.workers||4;this.extension=".gif";this.mimeType="image/gif";this.canvas=document.createElement("canvas");this.ctx=this.canvas.getContext("2d");this.sizeSet=!1;this.encoder=new GIF({workers:a.workers,quality:a.quality,workerScript:a.workersPath+"gif.worker.js"});this.encoder.on("progress",function(a){if(this.settings.onProgress)this.settings.onProgress(a)}.bind(this));this.encoder.on("finished",function(a){var b=this.callback;b&&(this.callback=void 0,
b(a))}.bind(this))}"gc"in window||(window.gc=function(){});HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(a,b,c){for(var c=atob(this.toDataURL(b,c).split(",")[1]),d=c.length,e=new Uint8Array(d),g=0;g<d;g++)e[g]=c.charCodeAt(g);a(new Blob([e],{type:b||"image/png"}))}});(function(){!1=="performance"in window&&(window.performance={});Date.now=Date.now||function(){return(new Date).getTime()};if(!1=="now"in window.performance){var a=Date.now();
performance.timing&&performance.timing.navigationStart&&(a=performance.timing.navigationStart);window.performance.now=function(){return Date.now()-a}}})();var j=window.Date.now();l.prototype.start=function(){};l.prototype.stop=function(){};l.prototype.add=function(){};l.prototype.save=function(){};l.prototype.dispose=function(){};l.prototype.safeToProceed=function(){return!0};l.prototype.step=function(){console.log("Step not set!")};g.prototype=Object.create(l.prototype);g.prototype.start=function(){this.dispose()};
g.prototype.add=function(a){var b=new FileReader;b.onload=function(){this.tape.append(("0000000"+this.count).slice(-7)+this.fileExtension,new Uint8Array(b.result));this.count++;this.step()}.bind(this);b.readAsArrayBuffer(a)};g.prototype.save=function(a){a(this.tape.save())};g.prototype.dispose=function(){this.tape=new Tar;this.count=0};c.prototype=Object.create(g.prototype);c.prototype.add=function(a){a.toBlob(function(a){g.prototype.add.call(this,a)}.bind(this),this.type)};k.prototype=Object.create(g.prototype);
k.prototype.add=function(a){a.toBlob(function(a){g.prototype.add.call(this,a)}.bind(this),this.type,this.quality)};i.prototype=Object.create(l.prototype);i.prototype.start=function(){this.dispose()};i.prototype.add=function(a){this.frames.push(a.toDataURL("image/webp",this.quality));0<this.settings.autoSaveTime&&this.frames.length/this.settings.framerate>=this.settings.autoSaveTime?this.save(function(a){this.filename=this.baseFilename+"-part-"+("0000000"+this.part).slice(-7);download(a,this.filename+
this.extension,this.mimeType);this.dispose();this.part++;this.filename=this.baseFilename+"-part-"+("0000000"+this.part).slice(-7);this.step()}.bind(this)):this.step()};i.prototype.save=function(a){if(this.frames.length){var b=Whammy.fromImageArray(this.frames,this.settings.framerate),b=new Blob([b],{type:"octet/stream"});a(b)}};i.prototype.dispose=function(){this.frames=[]};o.prototype=Object.create(l.prototype);o.prototype.start=function(){this.encoder.start(this.settings)};o.prototype.add=function(a){this.encoder.add(a)};
o.prototype.save=function(a){this.callback=a;this.encoder.end()};o.prototype.safeToProceed=function(){return this.encoder.safeToProceed()};b.prototype=Object.create(l.prototype);b.prototype.add=function(a){this.sizeSet||(this.encoder.setOption("width",a.width),this.encoder.setOption("height",a.height),this.sizeSet=!0);this.canvas.width=a.width;this.canvas.height=a.height;this.ctx.drawImage(a,0,0);this.encoder.addFrame(this.ctx,{copy:!0,delay:this.settings.step});this.step()};b.prototype.save=function(a){this.callback=
a;this.encoder.render()};window.CCapture=function(a){function f(){function a(){this._hooked||(this._hooked=!0,this._hookedTime=this.currentTime||0,this.pause(),L.push(this));return this._hookedTime+n.startTime}t("Capturer start");D=window.Date.now();u=D+n.startTime;E=window.performance.now();F=E+n.startTime;window.Date.prototype.getTime=function(){return u};window.Date.now=function(){return u};window.setTimeout=function(a,b){var c={callback:a,time:b,triggerTime:u+b};x.push(c);t("Timeout set to "+
c.time);return c};window.clearTimeout=function(a){for(var b=0;b<x.length;b++)x[b]==a&&(x.splice(b,1),t("Timeout cleared"))};window.setInterval=function(a,b){var c={callback:a,time:b,triggerTime:u+b};y.push(c);t("Interval set to "+c.time);return c};window.clearInterval=function(){t("clear Interval");return null};window.requestAnimationFrame=function(a){G.push(a)};window.performance.now=function(){return F};Object.defineProperty(HTMLVideoElement.prototype,"currentTime",{get:a});Object.defineProperty(HTMLAudioElement.prototype,
"currentTime",{get:a})}function g(){H=!1;q.stop();t("Capturer stop");window.setTimeout=B;window.setInterval=S;window.clearTimeout=T;window.requestAnimationFrame=U;window.Date.prototype.getTime=V;window.Date.now=W;window.performance.now=X}function d(){B(J,0,void 0)}function e(){var a=v/n.framerate;if(n.frameLimit&&v>=n.frameLimit||n.timeLimit&&a>=n.timeLimit)g(),K();var b=new Date(null);b.setSeconds(a);s.textContent=2<n.motionBlurFrames?"CCapture "+n.format+" | "+v+" frames ("+z+" inter) | "+b.toISOString().substr(11,
8):"CCapture "+n.format+" | "+v+" frames | "+b.toISOString().substr(11,8)}function l(a){if(r.width!==a.width||r.height!==a.height)r.width=a.width,r.height=a.height,p=new Uint16Array(4*r.height*r.width),C.fillStyle="#0",C.fillRect(0,0,r.width,r.height)}function m(a){C.drawImage(a,0,0);A=C.getImageData(0,0,r.width,r.height);for(a=0;a<p.length;a+=4)p[a]+=A.data[a],p[a+1]+=A.data[a+1],p[a+2]+=A.data[a+2];z++}function Q(){for(var a=A.data,b=0;b<p.length;b+=4)a[b]=2*p[b]/n.motionBlurFrames,a[b+1]=2*p[b+
1]/n.motionBlurFrames,a[b+2]=2*p[b+2]/n.motionBlurFrames;C.putImageData(A,0,0);q.add(r);v++;z=0;t("Full MB Frame! "+v+" "+u);for(b=0;b<p.length;b+=4)p[b]=0,p[b+1]=0,p[b+2]=0;gc()}function I(a){if(H)if(a instanceof SVGElement){var b=window.devicePixelRatio,c=a.clientWidth,f=a.clientHeight,a='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+c+" "+f+'" width="'+c*b+'" height="'+f*b+'">'+a.innerHTML+"</svg>",e=new Image;e.src="data:image/svg+xml,"+escape(a);e.onload=function(){var a=
document.createElement("canvas");a.width=e.width;a.height=e.height;var b=a.getContext("2d");b.fillStyle="#ffffff";b.fillRect(0,0,a.width,a.height);b.drawImage(e,0,0);I(a)}}else 2<n.motionBlurFrames?(l(a),m(a),z>=0.5*n.motionBlurFrames?Q():d()):(q.add(a),v++,t("Full Frame! "+v))}function J(){var a=(v+z/n.motionBlurFrames)*(1E3/n.framerate);u=D+a;F=E+a;L.forEach(function(b){b._hookedTime=a/1E3});e();t("Frame: "+v+" "+z);for(var b=0;b<x.length;b++)u>=x[b].triggerTime&&(B(x[b].callback,0,void 0),x.splice(b,
1));for(b=0;b<y.length;b++)u>=y[b].triggerTime&&(B(y[b].callback,0,void 0),y[b].triggerTime+=y[b].time);G.forEach(function(a){B(a,0,u-j)});G=[]}function K(a){a||(a=function(a){download(a,q.filename+q.extension,q.mimeType);return!1});q.save(a)}function t(a){M&&console.log(a)}function R(a){var b=N[a];b&&b.apply(null,Array.prototype.slice.call(arguments,1))}var n=a||{},M,u,D,F,E,q,x=[],y=[],v=0,z=0,G=[],H=!1,N={};n.framerate=n.framerate||60;n.motionBlurFrames=2*(n.motionBlurFrames||1);M=n.verbose||!1;
n.step=1E3/n.framerate;n.timeLimit=n.timeLimit||0;n.frameLimit=n.frameLimit||0;n.startTime=n.startTime||0;var s=document.createElement("div");s.style.position="absolute";s.style.left=s.style.top=0;s.style.backgroundColor="black";s.style.fontFamily="monospace";s.style.fontSize="11px";s.style.padding="5px";s.style.color="red";s.style.zIndex=1E5;document.body.appendChild(s);var r=document.createElement("canvas"),C=r.getContext("2d"),p,A;t("Step is set to "+n.step+"ms");var a={gif:b,webm:i,ffmpegserver:o,
png:c,jpg:k},O=a[n.format];if(!O)throw"Error: Incorrect or missing format: Valid formats are "+Object.keys(a).join(", ");q=new O(n);q.step=d;q.on("process",J);q.on("progress",function(a){R("progress",a)});!1=="performance"in window&&(window.performance={});Date.now=Date.now||function(){return(new Date).getTime()};if(!1=="now"in window.performance){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart);window.performance.now=function(){return Date.now()-
P}}var B=window.setTimeout,S=window.setInterval,T=window.clearTimeout,U=window.requestAnimationFrame,W=window.Date.now,X=window.performance.now,V=window.Date.prototype.getTime,L=[];return{start:function(){f();q.start();H=!0},capture:I,stop:g,save:K,on:function(a,b){N[a]=b}}}})();
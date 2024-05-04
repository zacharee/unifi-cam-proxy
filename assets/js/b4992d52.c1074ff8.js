"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[704],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1601:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},p="RTSP",s={unversionedId:"dev/configuration/rtsp",id:"dev/configuration/rtsp",title:"RTSP",description:"Nothing changed between latest version and development version",source:"@site/docs/dev/configuration/rtsp.md",sourceDirName:"dev/configuration",slug:"/dev/configuration/rtsp",permalink:"/dev/configuration/rtsp",editUrl:"https://github.com/zacharee/unifi-cam-proxy/tree/main/docs/docs/dev/configuration/rtsp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/dev"},next:{title:"Frigate",permalink:"/dev/configuration/frigate"}},l=[{value:"Hardware Acceleration",id:"hardware-acceleration",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rtsp"},"RTSP"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Nothing changed between latest version and development version"))),(0,o.kt)("p",null,"Most generic cameras are supported via the RTSP integration.\nDepending on your camera, you might need specific flags to make live-streaming smoother.\nCheck for your specific camera model in the docs before trying this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"unifi-cam-proxy -H {NVR IP} -i {Camera IP} -c /client.pem -t {Adoption token} \\\n  rtsp \\\n  -s {rtsp stream}\n")),(0,o.kt)("h2",{id:"hardware-acceleration"},"Hardware Acceleration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sg"},"unifi-cam-proxy -H {NVR IP} -i {Camera IP} -c /client.pem -t {Adoption token} \\\n  rtsp \\\n  -s {rtsp stream} \\\n  --ffmpeg-args='-hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format yuv420p'\n")))}d.isMDXComponent=!0}}]);
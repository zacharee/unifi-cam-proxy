"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[510],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8708:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:2},s="Frigate",p={unversionedId:"dev/configuration/frigate",id:"dev/configuration/frigate",title:"Frigate",description:"If your camera model is not listed specifically below, try the following:",source:"@site/docs/dev/configuration/frigate.md",sourceDirName:"dev/configuration",slug:"/dev/configuration/frigate",permalink:"/dev/configuration/frigate",editUrl:"https://github.com/zacharee/unifi-cam-proxy/tree/main/docs/docs/dev/configuration/frigate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"RTSP",permalink:"/dev/configuration/rtsp"},next:{title:"Amcrest",permalink:"/dev/configuration/amcrest"}},u=[{value:"Options",id:"options",children:[],level:2}],l={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frigate"},"Frigate"),(0,o.kt)("p",null,"If your camera model is not listed specifically below, try the following:"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports full time recording"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Supports motion events"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports smart detection")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"unifi-cam-proxy --mac '{unique MAC}' -H {NVR IP} -i {camera IP} -c /client.pem -t {Adoption token} \\\n    frigate \\\n    -s {rtsp source} \\\n    --mqtt-host {mqtt host} \\\n    --mqtt-username {mqtt username} \\\n    --mqtt-password {mqtt password} \\\n    --frigate-camera {Name of camera in frigate}\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"optional arguments:\n  --ffmpeg-args FFMPEG_ARGS, -f FFMPEG_ARGS\n                        Transcoding args for `ffmpeg -i <src> <args> <dst>`\n  --rtsp-transport {tcp,udp,http,udp_multicast}\n                        RTSP transport protocol used by stream\n  --source SOURCE, -s SOURCE\n                        Stream source\n  --http-api HTTP_API   Specify a port number to enable the HTTP API (default: disabled)\n  --snapshot-url SNAPSHOT_URL, -i SNAPSHOT_URL\n                        HTTP endpoint to fetch snapshot image from\n  --mqtt-host MQTT_HOST\n                        MQTT server\n  --mqtt-port MQTT_PORT\n                        MQTT port\n  --mqtt-username MQTT_USERNAME\n                        MQTT username\n  --mqtt-password MQTT_PASSWORD\n                        MQTT password\n  --mqtt-prefix MQTT_PREFIX\n                        Topic prefix\n  --frigate-camera FRIGATE_CAMERA\n                        Name of camera in frigate\n")))}m.isMDXComponent=!0}}]);
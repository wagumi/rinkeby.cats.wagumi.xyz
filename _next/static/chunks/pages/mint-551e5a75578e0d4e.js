(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{3039:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mint",function(){return n(649)}])},649:function(t,r,n){"use strict";n.r(r),n.d(r,{MintPage:function(){return w},default:function(){return N}});var e=n(2322),a=n(1708),o=n(4196),c=n(8926),i=n(2784),l=function(t){return(0,o.uT)(t,"totalSupply").toString()};function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,a,o=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);c=!0);}catch(l){i=!0,a=l}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return s(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(t){var r=t.contract,n=u((0,o.rL)(),1)[0],a=(0,o.KQ)(),c=l(r);return(0,i.useEffect)((function(){console.log("balance: ".concat(a)),console.log("block: ".concat(n))})),(0,e.jsxs)("div",{className:"py-3 w-full max-w-xl text-white",children:[(0,e.jsxs)("h1",{className:"px-3 mx-auto mt-3 text-3xl font-medium text-center ",children:[c.toString()," / 1000"]}),(0,e.jsx)("div",{className:"my-5 mx-3 w-full max-w-sm sm:max-w-xl md:max-w-3xl h-9 bg-gray-300",children:(0,e.jsx)("div",{className:"h-full text-xs leading-none text-white bg-green-400",style:{width:"".concat(Number(c.toString())/1e3*100,"%")}})})]})};function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function d(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,a,o=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);c=!0);}catch(l){i=!0,a=l}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return m(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(t){var r=t.contract,n=t.name,a=t.image,o=t.tokenId;return(0,e.jsxs)("div",{className:"my-3",children:[(0,e.jsx)("h3",{className:"text-6xl text-center",children:n}),(0,e.jsx)("img",{className:"mt-3 w-[300px] h-[300px]",src:a,alt:n}),(0,e.jsx)("a",{href:"https://".concat("testnets.","opensea.io/assets/").concat(r.address,"/").concat(o),className:"mt-6 text-2xl underline hover:bg-gray-600 hover:cursor-pointer",target:"_blank",rel:"noreferrer",children:"View on opensea"})]})},y=function(t){var r=t.transaction,n=t.contract,a=t.tokenId,c=(0,o.BX)(r);return(0,i.useEffect)((function(){console.log(c)})),(0,e.jsx)(h,{contract:n,name:"#".concat(a),image:"https://cats.wagumi.xyz/".concat(a),tokenId:a})},x=function(t){var r=t.contract,n=d((0,o.S0)(r,"mint"),2),a=(n[0],n[1]),c=(a.loading,a.data),s=l(r);return 0!==(0,o.mM)(r).toNumber()?(0,e.jsx)("div",{children:(0,e.jsx)("h2",{className:"text-4xl text-center text-green-600",children:"Minted already !!!"})}):c?(0,e.jsx)(i.Suspense,{fallback:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"my-2 text-2xl",children:"Minting..."}),(0,e.jsxs)("div",{className:"my-3",children:["Please check"," ",(0,e.jsx)("a",{className:"underline",target:"_blank",rel:"noopener noreferrer",href:"https://etherscan.io/address/0x6144D927EE371de7e7f8221b596F3432E7A8e6D9",children:"here"})," ","for more information"]})]}),children:(0,e.jsx)("div",{children:(0,e.jsx)(y,{contract:r,tokenId:Number(s),transaction:c})})}):(0,e.jsx)("div",{className:"py-6"})},p=n(1858),g=n(4435),b=n(7092);function v(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function j(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"===typeof t)return v(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(){console.log("preview");var t=(0,o.cq)(a.WagumiCatsRinkebyDeployment.address,j(o.xG).concat(["function mint()"]));return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g.m,{title:"WAGUMI Cats \ud83d\udc3e".concat("Testnet!!!")}),(0,e.jsx)(f,{contract:t}),(0,e.jsx)(x,{contract:t}),(0,e.jsx)(c.d,{}),(0,e.jsx)(p.w,{discord:b.Vs,github:b.Kd,twitter:b.N$})]})},N=w}},function(t){t.O(0,[525,573,354,774,888,179],(function(){return r=3039,t(t.s=r);var r}));var r=t.O();_N_E=r}]);
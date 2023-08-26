import{u as i}from"./upload-ad14d1ed.js";import{_ as s}from"./index-131de447.js";import{F as e,c as t,C as o}from"./@ant-design-e3afa51c.js";import{H as n,I as l,K as a,c as r,M as d,N as c,q as m,L as p,m as u,F as g,P as h,Q as y,J as f,R as j}from"./@vue-014d4595.js";import"./axios-439bb6d9.js";import"./ant-design-vue-e34d11a1.js";import"./@babel-f3180b7b.js";import"./dom-align-8ffb71ea.js";import"./resize-observer-polyfill-ad543aa3.js";import"./lodash-es-40484ae7.js";import"./@ctrl-4982d949.js";import"./@emotion-e00a17c0.js";import"./stylis-b6f45693.js";import"./vue-types-6bcea8eb.js";import"./vue-router-381ad7f6.js";import"./vuex-a17f6cb9.js";const b={class:"d-icon"},v={key:0},D={key:1},L={key:2},k=["src"];const F={class:"dir-management"},C={class:"d-btn"},w={class:"directory"},_=["onClick"],P={class:"d-txt text-ellipsis"};const x=s({name:"ImgList",components:{DirIcon:s({components:{FolderOpenFilled:e,FileFilled:t,CloudDownloadOutlined:o},props:{url:String,type:String,name:String},computed:{urlType(){let i=0;if(this.url){const s=this.url.split(".").slice(-1).join();"jpg"==s||"png"==s||"gif"==s?i=1:"mp3"==s||"wma"==s||"cda"==s||"wav"==s?i=2:"mp4"!=s&&"ogg"!=s&&"webm"!=s||(i=3)}return i}},methods:{downloadUrl(i){var s=document.createElement("a");s.href=i,s.style="visibility:hidden",s.download=this.name,document.body.appendChild(s),s.click(),document.body.removeChild(s)}}},[["render",function(i,s,e,t,o,m){const p=n("FolderOpenFilled"),u=n("FileFilled"),g=n("CloudDownloadOutlined");return l(),a("div",b,["dir"===e.type?(l(),a("span",v,[r(p)])):d("",!0),"file"===e.type&&0===m.urlType?(l(),a("span",D,[r(u)])):d("",!0),"file"===e.type&&1===m.urlType?(l(),a("span",L,[c("img",{class:"img",src:e.url},null,8,k),c("i",{class:"down-btn",onClick:s[0]||(s[0]=i=>m.downloadUrl(e.url))},[r(g)])])):d("",!0)])}],["__scopeId","data-v-708b49d8"]])},data:()=>({dirList:[],dirProcess:[],isLoading:!1}),mounted(){this.initData()},methods:{initData(){this.getDirList()},handleDir(i){if(console.log(i),-1!==i.name.indexOf("."))return;this.dirProcess.push(i.name);const s=this.dirProcess.join("/");this.getDirList(s)},getDirList(s){if(this.isLoading)return;this.isLoading=!0;(async()=>{const e=await i.getImgList(s);console.log(e),this.dirList=e||[],this.isLoading=!1})()},handleFileDir(i){this.dirProcess=-1===i?[]:this.dirProcess.slice(0,i+1);const s=this.dirProcess.join("/");this.getDirList(s)}}},[["render",function(i,s,e,t,o,d){const b=n("a-breadcrumb-item"),v=n("a-breadcrumb"),D=n("dir-icon"),L=m("loading");return l(),a("div",F,[c("div",C,[c("span",{class:"btn",onClick:s[0]||(s[0]=(...i)=>d.initData&&d.initData(...i))},"重新获取")]),r(v,null,{default:p((()=>[r(b,{onClick:s[1]||(s[1]=i=>d.handleFileDir(-1))},{default:p((()=>[y("files")])),_:1}),(l(!0),a(g,null,h(o.dirProcess,((i,s)=>(l(),f(b,{key:s,onClick:i=>d.handleFileDir(s)},{default:p((()=>[y(j(i),1)])),_:2},1032,["onClick"])))),128))])),_:1}),u((l(),a("div",w,[(l(!0),a(g,null,h(o.dirList,((i,s)=>(l(),a("div",{class:"d-item",onClick:s=>d.handleDir(i)},[r(D,{url:i.download_url,type:i.type,name:i.name},null,8,["url","type","name"]),c("div",P,j(i.name),1)],8,_)))),256))])),[[L,o.isLoading]])])}],["__scopeId","data-v-ba08b199"]]);export{x as default};

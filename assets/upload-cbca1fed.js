import{a as t}from"./axios-439bb6d9.js";const e="seoinaam163/files",n="ghp_QNJWMPye8h",o="J4btihh5SCCsevp4ijnj2FjKxf",a={getBase64(t){const e=new FileReader;return new Promise((n=>{e.onload=function(t){const e=t.target.result;n(e.split(",")[1])},e.readAsDataURL(t)}))},uploadGit:async(a,s)=>{var i,p;const l=new Date,r=`${l.getFullYear()}/${l.getMonth()+1}/${l.getTime()}${(null==s?void 0:s.split(".").pop())||".png"}`,c="https://api.github.com/repos/"+e+"/contents/"+r,u={branch:"main",message:"upload",content:a,path:r},h={Authorization:`token ${n}${o}`,"Content-Type":"application/json; charset=utf-8"},d=await t.put(c,u,{headers:h});return console.log(d),null==(p=null==(i=null==d?void 0:d.data)?void 0:i.content)?void 0:p.download_url},getImgList:async a=>{const s=`https://api.github.com/repos/${e}/contents/${a||""}`,i={Authorization:`token ${n}${o}`,"Content-Type":"application/json; charset=utf-8",Accept:"application/vnd.github.v3+json"},p=await t.get(s,{},{headers:i});return console.log(p),200===p.status?p.data:""}};export{a as u};

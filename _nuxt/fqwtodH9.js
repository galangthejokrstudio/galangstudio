import{_ as w}from"./DwbTdv3S.js";import{d as b,L as C,x as N,K as B,I as t,c as _,e as v,f as s,t as l,i as u,w as m,g as V,J as A,h as f,q as p,C as L,N as $}from"./CsJ6bLng.js";import{u as x}from"./OLK0mV55.js";const q={key:0,class:"flex flex-row flex-wrap border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border-gray-200 rounded-lg p-6 gap-3"},D={class:"flex flex-col justify-between"},E={class:"space-y-2 max-w-40"},I={class:"font-bold text-2xl dark:text-white tracking-tight"},O={class:"text-gray-700 italic dark:text-gray-300"},R=b({__name:"Recommendation",async setup(j){let a,r;const{data:e}=([a,r]=C(()=>x("featured",()=>p("/dir").where({featured:{$exists:!0}}).only(["title","description","_path","card_image"]).findOne())),a=await a,r(),a);N();const g=B(()=>e.value);return(F,o)=>{var n,c,i,d;const y=w,h=L,k=$;return t(g)?(_(),v("div",q,[s("div",D,[s("div",E,[s("p",I,l((n=t(e))==null?void 0:n.title),1),s("p",O,l((c=t(e))==null?void 0:c.description),1)]),u(h,{class:"mt-3",to:t(e)._path},{default:m(()=>[u(y,{icon:"tabler:click"},{default:m(()=>o[0]||(o[0]=[V("Learn More")])),_:1})]),_:1},8,["to"])]),(i=t(e))!=null&&i.card_image?(_(),A(k,{key:0,class:"rounded-lg h-40",src:(d=t(e))==null?void 0:d.card_image},null,8,["src"])):f("",!0)])):f("",!0)}}});function S(){return x("featured-listing",()=>p("/dir").where({_extension:"md",featured:!0}).findOne())}export{R as _,S as u};

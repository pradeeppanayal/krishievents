import{_ as r,o,c as n,a as t,h as i,F as h,l as u,t as s,b as d}from"./index-c374139d.js";const k={props:["items","readonly"],data(){return{}}},w={key:0,class:"table"},$=t("th",{scope:"col"},"Name",-1),b=t("th",{scope:"col"},"Designation",-1),D=t("th",{scope:"col"},"University/College",-1),f=t("th",{scope:"col"},"Brief",-1),B={key:0,scope:"col"},F={key:0},C=["onClick"];function S(e,_,l,v,y,g){return l.items&&l.items.length>0?(o(),n("table",w,[t("thead",null,[t("tr",null,[$,b,D,f,l.readonly?i("",!0):(o(),n("th",B,"Action"))])]),t("tbody",null,[(o(!0),n(h,null,u(l.items,c=>(o(),n("tr",null,[t("td",null,s(c.name),1),t("td",null,s(c.designation),1),t("td",null,s(c.university),1),t("td",null,s(c.brief),1),l.readonly?i("",!0):(o(),n("td",F,[t("span",{class:"inline-icon material-symbols-outlined btn text-danger",title:"Remove",onClick:m=>e.$emit("remove",c)},"delete",8,C)]))]))),256))])])):i("",!0)}const N=r(k,[["render",S]]),A={props:["items","readonly"],data(){return{}}},E={key:0,class:"table"},T=t("th",{scope:"col"},"Category",-1),x=t("th",{scope:"col"},"Amount",-1),L=t("th",{scope:"col"},"Seats",-1),M=t("th",{scope:"col"},"Last Date",-1),P={key:0,scope:"col"},R={key:0},O=["onClick"];function U(e,_,l,v,y,g){return l.items&&l.items.length>0?(o(),n("table",E,[t("thead",null,[t("tr",null,[T,x,L,M,l.readonly?i("",!0):(o(),n("th",P,"Action"))])]),t("tbody",null,[(o(!0),n(h,null,u(l.items,c=>(o(),n("tr",null,[t("td",null,s(c.category),1),t("td",null,s(c.amount),1),t("td",null,s(c.seats),1),t("td",null,s(c.dueDate),1),l.readonly?i("",!0):(o(),n("td",R,[t("span",{class:"inline-icon material-symbols-outlined btn text-danger",title:"Remove",onClick:m=>e.$emit("remove",c)},"delete",8,O)]))]))),256))])])):i("",!0)}const a=r(A,[["render",U]]),V=t("div",null,[t("h5",null,"Basic Details")],-1),G=t("hr",null,null,-1),j={class:"row py-2"},z=t("div",{class:"col-2"},"Title",-1),H={class:"col"},I={class:"row py-2"},q=t("div",{class:"col-2"},"Brochure",-1),J={class:"col"},K={class:"row py-2"},Q=t("div",{class:"col-2"},"Start Date",-1),W={class:"col"},X={class:"row py-2"},Y=t("div",{class:"col-2"},"End Date",-1),Z={class:"col"},p=t("div",{class:"row py-2"},[t("div",{class:"col-2"},"Duration"),t("div",{class:"col"},"1 Hr")],-1),tt={class:"row py-2"},et=t("div",{class:"col-2"},"Mode",-1),st={class:"col"},ot={class:"row py-2"},nt=t("div",{class:"col-2"},"Fee Type",-1),lt={class:"col"},ct=t("div",{class:"py-3"},null,-1),it=t("div",null,[t("h5",null,"Organizer Details")],-1),dt=t("hr",null,null,-1),at={class:"row py-2"},_t=t("div",{class:"col-2"},"Name",-1),rt={class:"col"},ht={class:"row py-2"},ut=t("div",{class:"col-2"},"Contact",-1),vt={class:"col"},yt={class:"row py-2"},gt=t("div",{class:"col-2"},"E-mail",-1),mt={class:"col"},kt={class:"row py-2"},wt=t("div",{class:"col-2"},"Designation",-1),$t={class:"col"},bt={class:"row py-2"},Dt=t("div",{class:"col-2"},"Degree",-1),ft={class:"col"},Bt={class:"row py-2"},Ft=t("div",{class:"col-2"},"University/College",-1),Ct={class:"col"},St=t("div",{class:"py-3"},null,-1),Nt=t("div",null,[t("h5",null,"Billing Details")],-1),At=t("hr",null,null,-1),Et={class:"row py-2"},Tt=t("div",{class:"col-2"},"Billing Name",-1),xt={class:"col"},Lt={class:"row py-2"},Mt=t("div",{class:"col-2"},"Billing Address",-1),Pt={class:"col"},Rt={class:"row py-2"},Ot=t("div",{class:"col-2"},"Billing State",-1),Ut={class:"col"},Vt={class:"row py-2"},Gt=t("div",{class:"col-2"},"Billing GST",-1),jt={class:"col"},zt=t("div",{class:"py-3"},null,-1),Ht=t("div",null,[t("h5",null,"Location")],-1),It=t("hr",null,null,-1),qt={class:"row py-2"},Jt=t("div",{class:"col-2"},"Meetink Link",-1),Kt={class:"col"},Qt={class:"row py-2"},Wt=t("div",{class:"col-2"},"Offline Address",-1),Xt={class:"col"},Yt={class:"row py-2"},Zt=t("div",{class:"col-2"},"Instructions",-1),pt={class:"col"},te=t("div",{class:"py-3"},null,-1),ee=t("div",null,[t("h5",null,"Speakers")],-1),se=t("hr",null,null,-1),oe=t("div",{class:"py-3"},null,-1),ne=t("div",null,[t("h5",null,"Fee Details")],-1),le=t("hr",null,null,-1),ce={key:0},ie=t("h6",null,"Early Entry Fee",-1),de={key:1},ae=t("h6",null,"Regular Entry Fee",-1),_e={key:2},re=t("h6",null,"Late Entry Fee",-1),he=t("div",{class:"py-3"},null,-1),ue=t("div",null,[t("h5",null,"Event Package")],-1),ve=t("hr",null,null,-1),ye={class:"row py-2"},ge=t("div",{class:"col-2"},"Package Name",-1),me={class:"col"},ke=t("div",{class:"row py-2"},[t("div",{class:"col-2"},"Package Payment"),t("div",{class:"col"},"1118.00")],-1),we={props:["currentevent"],data(){return{}},watch:{}},be=Object.assign(we,{__name:"ReviewBody",setup(e){return(_,l)=>(o(),n("div",null,[V,G,t("div",j,[z,t("div",H,s(e.currentevent.title),1)]),t("div",I,[q,t("div",J,s(e.currentevent.borcher??"File"),1)]),t("div",K,[Q,t("div",W,s(e.currentevent.startDate),1)]),t("div",X,[Y,t("div",Z,s(e.currentevent.endDate),1)]),p,t("div",tt,[et,t("div",st,s(e.currentevent.mode),1)]),t("div",ot,[nt,t("div",lt,s(e.currentevent.paymentMethod),1)]),ct,it,dt,t("div",at,[_t,t("div",rt,s(e.currentevent.orgName),1)]),t("div",ht,[ut,t("div",vt,s(e.currentevent.orgContact),1)]),t("div",yt,[gt,t("div",mt,s(e.currentevent.orgMail),1)]),t("div",kt,[wt,t("div",$t,s(e.currentevent.orgDesignation),1)]),t("div",bt,[Dt,t("div",ft,s(e.currentevent.orgDegree),1)]),t("div",Bt,[Ft,t("div",Ct,s(e.currentevent.orgUniversity),1)]),St,Nt,At,t("div",Et,[Tt,t("div",xt,s(e.currentevent.billingName),1)]),t("div",Lt,[Mt,t("div",Pt,s(e.currentevent.billingAddress),1)]),t("div",Rt,[Ot,t("div",Ut,s(e.currentevent.billingState),1)]),t("div",Vt,[Gt,t("div",jt,s(e.currentevent.billingGST),1)]),zt,Ht,It,t("div",qt,[Jt,t("div",Kt,s(e.currentevent.onlineAddress),1)]),t("div",Qt,[Wt,t("div",Xt,s(e.currentevent.offlineAddress),1)]),t("div",Yt,[Zt,t("div",pt,s(e.currentevent.instructions),1)]),te,ee,se,d(N,{items:e.currentevent.speakers,readonly:"true"},null,8,["items"]),oe,ne,le,e.currentevent.earlyBirds?(o(),n("div",ce,[ie,d(a,{readonly:"true",items:e.currentevent.earlyBirds},null,8,["items"])])):i("",!0),e.currentevent.regularFee?(o(),n("div",de,[ae,d(a,{readonly:"true",items:e.currentevent.regularFee},null,8,["items"])])):i("",!0),e.currentevent.lateBirds?(o(),n("div",_e,[re,d(a,{readonly:"true",items:e.currentevent.lateBirds},null,8,["items"])])):i("",!0),he,ue,ve,t("div",ye,[ge,t("div",me,s(e.currentevent.package),1)]),ke]))}});export{a as F,N as S,be as _};

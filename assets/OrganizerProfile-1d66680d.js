import{o,g as n,w as i,a as e,e as d,t as r,n as s,i as c,j as p,c as m,h as u}from"./index-b2dc6b4f.js";import{O as h}from"./OrganizerTemplate-86bbdbf6.js";const f={class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},_={class:"h2",style:{width:"100%"}},b={class:"form-floating mb-3"},y=["readonly"],v=e("label",{for:"floatingInput"},"Name",-1),g={class:"form-floating mb-3"},w=["readonly"],C=e("label",{for:"floatingInput"},"Email address",-1),P={class:"form-floating mb-3"},k=["readonly"],D=e("label",{for:"Contact"},"Contact",-1),N={class:"form-floating mb-3"},B=["readonly"],I=e("label",{for:"Contact"},"Highest Degree Qualified",-1),O={class:"form-floating mb-3"},j=e("label",{for:"floatingInput"},"University / Institute",-1),z={class:"form-floating mb-3"},E=["readonly"],S=e("label",{for:"Contact"},"Designation",-1),V={class:"form-floating mb-3"},H=["readonly"],R=e("label",{for:"Contact"},"Date of birth",-1),T=e("div",{class:"py-3"},null,-1),Q=e("div",null,[e("h5",null,"Reset Password"),e("hr")],-1),U={class:"form-floating mb-3"},$=["readonly"],q=e("label",{for:"floatingPassword"},"Password",-1),A={class:"form-floating mb-3"},F=["readonly"],G=e("label",{for:"floatingPassword"},"Confirm Password",-1),J={key:0,class:"form-floating text-end"},K=e("input",{type:"button",class:"btn btn-success",value:"Save Changes"},null,-1),L=[K],M={data(){return{editenabled:!1,inputclass:"form-control-plaintext"}},watch:{editenabled(l){this.inputclass=l?"form-control":"form-control-plaintext"}},methods:{}},Z=Object.assign(M,{__name:"OrganizerProfile",setup(l){return(t,a)=>(o(),n(h,{selectedmenu:"Profile"},{default:i(()=>[e("div",f,[e("h1",_,[d("Profile "),e("span",{class:"inline-icon material-symbols-outlined btn",onClick:a[0]||(a[0]=W=>t.editenabled=!t.editenabled),style:{float:"right"}},r(t.editenabled?"close":"edit"),1)])]),e("div",b,[e("input",{type:"Name",class:s(t.inputclass),readonly:!t.editenabled,value:"Pradeep CH",placeholder:"name@example.com"},null,10,y),v]),e("div",g,[e("input",{type:"Email",class:s(t.inputclass),readonly:!t.editenabled,value:"Pradeep@gmail.com",placeholder:"name@example.com"},null,10,w),C]),e("div",P,[e("input",{type:"number",class:s(t.inputclass),readonly:!t.editenabled,value:"1234567890",placeholder:"name@example.com"},null,10,k),D]),e("div",N,[e("input",{type:"text",class:s(t.inputclass),readonly:!t.editenabled,value:"",placeholder:"name@example.com"},null,10,B),I]),e("div",O,[e("input",{type:"text",class:s(t.inputclass),readonly:"",value:"",placeholder:"name@example.com"},null,2),j]),e("div",z,[e("input",{type:"text",class:s(t.inputclass),readonly:!t.editenabled,value:"",placeholder:"name@example.com"},null,10,E),S]),e("div",V,[e("input",{type:"date",class:s(t.inputclass),readonly:!t.editenabled,value:"",placeholder:"name@example.com"},null,10,H),R]),c(e("div",null,[T,Q,e("div",U,[e("input",{type:"password",class:s(t.inputclass),readonly:!t.editenabled,value:"",placeholder:"Password"},null,10,$),q]),e("div",A,[e("input",{type:"password",class:s(t.inputclass),readonly:!t.editenabled,value:"",placeholder:"Re-enter password"},null,10,F),G])],512),[[p,t.editenabled]]),t.editenabled?(o(),m("div",J,L)):u("",!0)]),_:1}))}});export{Z as default};

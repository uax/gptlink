var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{r as d,E as r,d as n,n as c,h as u,i as p,c as m,f as v,w as b,b as f,u as h,s as g,v as k,m as w,o as _,I as y,j as x,bc as V,bb as T,e as P,aA as S}from"./vendor.619b4049.js";import{c as C,d as I}from"./index.3d225aa2.js";import{u as D}from"./useDialog.509a327c.js";import{u as U}from"./useBasicForm.5b487d24.js";import{a as j,U as O,_ as R}from"./index.19e8c00a.js";const q=e=>({register:G,invite:z,share:z}[e]),F=[{field:"platform",component:"Input",label:"服务应用：",slot:"platform",show:!1},{field:"status",component:"Input",label:"状态：",required:!0,defaultValue:"2",show:!1},{field:"package_id",component:"ApiSelect",label:"套餐：",componentProps:{style:{width:"100%"},api:j().chatGPT.packageList,resultField:"data",labelField:"name",valueField:"id"},required:!0}],G=[{field:"name",component:"Input",label:"任务事件：",componentProps:{disabled:!0}},...F],z=[{field:"name",component:"Input",label:"任务事件：",componentProps:{disabled:!0}},{field:"title",component:"Input",label:"标题",required:!0,slot:"title"},{field:"desc",component:"Input",label:"描述",required:!0,slot:"desc"},...F,{field:"share_image",component:"Upload",label:"图片：",componentProps:{maxSize:5,maxCount:1,mode:"upload",httpRequest:O},defaultValue:"",show:!1,colProps:{span:24}}],A=()=>{const e=d(null);return{taskData:e,onGetTaskInfo:()=>{const a=["getTaskRegister","getTaskInvite","getTaskShare"];Promise.all([...a.map((e=>j().chatGPT[e]().then((({data:e})=>Array.isArray(e)?{status:2}:e)).catch((e=>{}))))]).then((a=>{e.value={register:a[0],invite:a[1],share:a[2]}}))},handleSaveTask:(a,t,s,l)=>{j().chatGPT[t](a).then((({data:a})=>{r.success("保存成功"),e.value,l&&l(a)})).catch((e=>{}))},handleUpdateTaskStatus:e=>{j().chatGPT.updateTaskStatus({type:e}).then((()=>{r.success("保存成功")})).catch((e=>{}))}}};const E=e=>(g("data-v-6f01d252"),e=e(),k(),e),B={class:"package"},H=E((()=>f("p",{class:"desc"},"用户任务中心，显示名称信息，10字以内",-1))),L=E((()=>f("p",{class:"desc"},"当前任务描述，30字以内",-1)));var M=R(n({__name:"createDialog",props:{formType:{type:String,default:"register"},modelValue:{type:[Boolean],default:!1},editData:{type:[Array],default:()=>null}},emits:["update:modelValue","reload","saveSuccess"],setup(e,{expose:r,emit:n}){const g=e,k=d([]),{handleSaveTask:w}=A(),{register:_,validate:y,setFieldsValue:x,resetFields:V,setProps:T}=U({schemas:q(g.formType)}),P={register:"新用户注册",invite:"邀请好友",share:"每日分享"},S=c((()=>P[g.formType])),{getEditId:j,getEdit:O,handlePopup:R}=D({props:g,emit:n,watchShow:e=>{g.editData&&setTimeout((()=>{const{status:e,share_image:d}=g.editData;var r;x((r=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&o(e,t,a[t]);return e})({},g.editData),a(r,t({status:e,share_image:d?[{url:d}]:""}))))}),100)}}),F=async()=>{const e={H5:"h5",PC:"pc","小程序":"mini"},a=await y();a.platform=k.value.map((a=>e[a])),a.type={"新用户注册":"register","邀请朋友":"invite","每日分享":"share"}[a.name],a.share_image&&a.share_image[0]?a.share_image=a.share_image[0].url:a.share_image="",w(a,{register:"savaTaskRegister",invite:"savaTaskInvite",share:"savaTaskShare"}[g.formType],g.formType,(e=>{G(),n("saveSuccess",e)}))},G=()=>{R(!1),V()},z=e=>{k.value=e};return r({handleCheckSchema:()=>{const e=q(g.formType);setTimeout((()=>{T({schemas:e}),x({name:S.value,package_id:""})}),100)}}),(a,t)=>{const s=u("el-checkbox"),l=u("el-checkbox-group"),i=u("el-input");return p(),m("div",null,[v(h(I),{"dialog-props":{title:"任务配置",modelValue:e.modelValue,showClose:!0,width:"700px"},scrollBarProps:{maxHeight:500},center:"",top:"10vh",onCancel:G,onSubmit:F},{default:b((()=>[f("div",B,[v(h(C),{onRegister:h(_)},{platform:b((({model:e,field:a})=>[v(l,{modelValue:e[a],"onUpdate:modelValue":t=>e[a]=t,onChange:z},{default:b((()=>[v(s,{label:"H5"}),v(s,{label:"PC"}),v(s,{label:"小程序"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),title:b((({model:e,field:a})=>[v(i,{modelValue:e[a],"onUpdate:modelValue":t=>e[a]=t,placeholder:"请输入标题",maxlength:"10"},null,8,["modelValue","onUpdate:modelValue"]),H])),desc:b((({model:e,field:a})=>[v(i,{modelValue:e[a],"onUpdate:modelValue":t=>e[a]=t,autosize:{minRows:2,maxRows:4},placeholder:"请输入描述",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"]),L])),_:1},8,["onRegister"])])])),_:1},8,["dialog-props"])])}}}),[["__scopeId","data-v-6f01d252"]]);const J=e=>(g("data-v-1e545640"),e=e(),k(),e),K={class:"cb-page task"},N={class:"task-warp cb-m-b-15 cb-flex"},Q={class:"task-avatar"},W={class:"cb-flex-1"},X={class:"cb-flex cb-row-between cb-m-b-10"},Y=J((()=>f("span",{class:"task-name"},"新用户注册",-1))),Z=J((()=>f("div",{class:"task-desc cb-double-line"}," 新用户注册成功后，即给该用户账户充值相应套餐。 ",-1))),$={class:"task-btn cb-flex cb-row-around"},ee={class:"task-warp cb-m-b-15 cb-flex"},ae={class:"task-avatar"},te={class:"cb-flex-1"},se={class:"cb-flex cb-row-between cb-m-b-10"},le=J((()=>f("span",{class:"task-name"},"邀请好友",-1))),ie=J((()=>f("div",{class:"task-desc cb-double-line"}," 用户发出邀请链接，新用户通过转发邀请链接注册成功，即给该用户账户充值相应套餐 ",-1))),oe={class:"task-btn cb-flex cb-row-around"},de={class:"task-warp cb-m-b-15 cb-flex"},re={class:"task-avatar"},ne={class:"cb-flex-1"},ce={class:"cb-flex cb-row-between cb-m-b-10"},ue=J((()=>f("span",{class:"task-name"},"每日分享",-1))),pe=J((()=>f("div",{class:"task-desc cb-double-line"}," 用户发起分享，每日（0：00 - 23：59）多次发起分享，只给该用户账户充值1次相应套餐 ",-1))),me={class:"task-btn cb-flex cb-row-around"};var ve=R(n({__name:"index",setup(e){const{openEdit:a,editData:t,showDialog:s}=D({}),{taskData:l,onGetTaskInfo:i,handleSaveTask:o,handleUpdateTaskStatus:n}=A(),c=w(),g=d("register"),k=d(null),C=(e,t)=>{g.value=e,setTimeout((()=>{h(k).handleCheckSchema(),a(t)}),200)},I=e=>{c.push({path:"/marketing/marketingManager/list",query:{type:e}})},U=(e,a)=>{if(a)return r.error("前往任务配置，配置完成后再开启任务哦！");n(e)},j=e=>{l.value[g.value]=e};return _((()=>{i()})),(e,a)=>{const i=u("el-icon"),o=u("el-switch"),d=u("el-divider"),r=u("el-card"),n=u("el-col"),c=u("el-row");return p(),m("div",K,[h(l)?(p(),y(r,{key:0,header:"任务中心"},{default:b((()=>[v(c,null,{default:b((()=>[v(n,{span:8},{default:b((()=>[v(r,{shadow:"never"},{default:b((()=>[f("div",N,[f("div",Q,[v(i,{size:26,color:"#fff"},{default:b((()=>[v(h(x))])),_:1})]),f("div",W,[f("div",X,[Y,v(o,{modelValue:h(l).register.status,"onUpdate:modelValue":a[0]||(a[0]=e=>h(l).register.status=e),"active-value":1,"inactive-value":2,disabled:!h(l).register.id,onClick:a[1]||(a[1]=e=>U("register",!h(l).register.id))},null,8,["modelValue","disabled"])]),Z])]),v(d,{"border-style":"dashed"}),f("div",$,[f("div",{class:"text",onClick:a[2]||(a[2]=e=>I("register"))},"查看记录"),v(d,{direction:"vertical"}),f("div",{class:"text",onClick:a[3]||(a[3]=e=>C("register",h(l).register))},"任务配置")])])),_:1})])),_:1}),v(n,{span:8},{default:b((()=>[v(r,{shadow:"never"},{default:b((()=>[f("div",ee,[f("div",ae,[v(i,{size:26,color:"#fff"},{default:b((()=>[v(h(V))])),_:1})]),f("div",te,[f("div",se,[le,v(o,{modelValue:h(l).invite.status,"onUpdate:modelValue":a[4]||(a[4]=e=>h(l).invite.status=e),"active-value":1,"inactive-value":2,disabled:!h(l).invite.id,onClick:a[5]||(a[5]=e=>U("invite",!h(l).register.id))},null,8,["modelValue","disabled"])]),ie])]),v(d,{"border-style":"dashed"}),f("div",oe,[f("div",{class:"text",onClick:a[6]||(a[6]=e=>I("invite"))},"查看记录"),v(d,{direction:"vertical"}),f("div",{class:"text",onClick:a[7]||(a[7]=e=>C("invite",h(l).invite))},"任务配置")])])),_:1})])),_:1}),v(n,{span:8},{default:b((()=>[v(r,{shadow:"never"},{default:b((()=>[f("div",de,[f("div",re,[v(i,{size:26,color:"#fff"},{default:b((()=>[v(h(T))])),_:1})]),f("div",ne,[f("div",ce,[ue,v(o,{modelValue:h(l).share.status,"onUpdate:modelValue":a[8]||(a[8]=e=>h(l).share.status=e),"active-value":1,"inactive-value":2,disabled:!h(l).share.id,onClick:a[9]||(a[9]=e=>U("share",!h(l).register.id))},null,8,["modelValue","disabled"])]),pe])]),v(d,{"border-style":"dashed"}),f("div",me,[f("div",{class:"text",onClick:a[10]||(a[10]=e=>I("share"))},"查看记录"),v(d,{direction:"vertical"}),f("div",{class:"text",onClick:a[11]||(a[11]=e=>C("share",h(l).share))},"任务配置")])])),_:1})])),_:1})])),_:1})])),_:1})):P("",!0),v(M,{modelValue:h(s),"onUpdate:modelValue":a[12]||(a[12]=e=>S(s)?s.value=e:null),editData:h(t),formType:g.value,onSaveSuccess:j,ref_key:"createDialogRef",ref:k},null,8,["modelValue","editData","formType"])])}}}),[["__scopeId","data-v-1e545640"]]);export{ve as default};

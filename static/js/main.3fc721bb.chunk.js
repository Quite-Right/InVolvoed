(this["webpackJsonpvolvo-hack"]=this["webpackJsonpvolvo-hack"]||[]).push([[0],{366:function(e,n,t){},372:function(e,n,t){},373:function(e,n,t){},381:function(e,n,t){},382:function(e,n,t){},383:function(e,n,t){},384:function(e,n,t){},389:function(e,n){},390:function(e,n){},398:function(e,n){},399:function(e,n){},400:function(e,n){},401:function(e,n){},402:function(e,n,t){},403:function(e,n,t){},404:function(e,n,t){},511:function(e,n,t){},512:function(e,n,t){},513:function(e,n,t){},514:function(e,n,t){},518:function(e,n,t){},519:function(e,n,t){},520:function(e,n,t){},522:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),i=t(67),a=t.n(i),o=(t(372),t(25)),s=(t(373),t(41)),u=t(78),l=t(332),d=t(137),O="ROTATE_RIGHT",f="ROTATION_STOP",b="ROTATE_LEFT",j="CHANGE_CAR_COLOR",p=function(){return{type:O}},g=function(){return{type:b}},h=function(){return{type:f}},v=t(6),m=t.n(v),F=t(15),x=function(e){return e.scene.rotation},C=function(e){return e.scene.color},R=function(e){return e.car.lock},N=function(e){return e.car.climatization},y=function(e){return e.car.engine},E=function(e){return e.car.honk},w=function(e){return e.car.flash},S=function(e){return e.configurator.actionsState},k=function(e){return e.language.code},T="LOCK_CAR ",_=" UNLOCK_CAR",U="LOCK_CAR_START",D="LOCK_CAR_COMPLETE",L="LOCK_CAR_ERROR",A="UNSET_LOCK_CAR_ERROR",P=function(){return{type:D}},I=function(e){return{type:L,payload:e}},M=function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,n){setTimeout((function(){e()}),1e3)}));case 3:t.sent,r({type:_}),r(P()),e&&e(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),r(P()),r(I(t.t0)),n&&n();case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,n){setTimeout((function(){e()}),1e3)}));case 3:t.sent,r({type:T}),r(P()),e&&e(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),r(P()),r(I(t.t0)),n&&n();case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},W=function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r,c){var i,a,o,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=c(),a=R(i),o=a.isLocked,s=a.error,r({type:U}),s&&r({type:A}),r(o?M(e,n):G(e,n));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},H="CLIMATIZATION_ON",z="CLIMATIZATION_OFF",B="CLIMATIZATION_TOGGLE_START",K="CLIMATIZATION_TOGGLE_COMPLETE",V="CLIMATIZATION_ERROR",Z="UNSET_CLIMATIZATION_ERROR",q=function(){return{type:K}},J=function(e){return{type:V,payload:e}},$=function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,n){setTimeout((function(){e()}),1e3)}));case 3:t.sent,r({type:z}),r(q()),e&&e(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),r(q()),r(J(t.t0)),n&&n();case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,n){setTimeout((function(){e()}),1e3)}));case 3:t.sent,r({type:H}),r(q()),e&&e(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),r(q()),r(J(t.t0)),n&&n();case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},X="ENGINE_ON",Y="ENGINE_OFF",ee="ENGINE_TOGGLE_START",ne="ENGINE_TOGGLE_COMPLETE",te="ENGINE_ERROR",re="UNSET_ENGINE_ERROR",ce=function(){return{type:ne}},ie=function(e){return{type:te,payload:e}},ae=function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,n){setTimeout((function(){e()}),1e3)}));case 3:t.sent,r({type:Y}),r(ce()),e&&e(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),r(ce()),r(ie(t.t0)),n&&n();case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},oe=function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,n){setTimeout((function(){e()}),1e3)}));case 3:t.sent,r({type:X}),r(ce()),e&&e(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),r(ce()),r(ie(t.t0)),n&&n();case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},se="HONK_TOGGLE_START",ue="HONK_TOGGLE_COMPLETE",le="HONK_ERROR",de="UNSET_HONK_ERROR",Oe=function(){return{type:ue}},fe=function(e){return{type:le,payload:e}},be="FLASH_TOGGLE_START",je="FLASH_TOGGLE_COMPLETE",pe="FLASH_ERROR",ge="UNSET_FLASH_ERROR",he="HONK_AND_FLASH_TOGGLE_START",ve="HONK_AND_FLASH_TOGGLE_COMPLETE",me="HONK_AND_FLASH_ERROR",Fe="UNSET_HONK_AND_FLASH_ERROR",xe="SET_LANGUAGE_CODE",Ce=["start","\u0441\u0442\u0430\u0440\u0442"],Re=["stop","\u0441\u0442\u043e\u043f"],Ne=["hola","\u0445\u043e\u043b\u0430"],ye=["chow","\u0441iao","\u0447\u0430\u043e"],Ee=["open","\u043e\u0442\u043a\u0440\u043e\u0439"],we=["close","\u0437\u0430\u043a\u0440\u043e\u0439"],Se="raised_hand",ke="swipe_center_position",Te="swipe_right_position",_e="swipe_left_position",Ue="grey",De={rotation:0,color:{b:.13285456597805023,g:.0010034418664872646,r:0}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:return Object(o.a)(Object(o.a)({},e),{},{rotation:2});case b:return Object(o.a)(Object(o.a)({},e),{},{rotation:-2});case f:return Object(o.a)(Object(o.a)({},e),{},{rotation:0});case j:return Object(o.a)(Object(o.a)({},e),{},{color:n.payload});default:return e}},Ae={isLocked:!0,inProcess:!1,error:null},Pe={inProcess:!1,error:null,isTurnedOn:!1},Ie={inProcess:!1,error:null,isTurnedOn:!1},Me={inProcess:!1,error:null},Ge={inProcess:!1,error:null},We={inProcess:!1,error:null},He=Object(d.b)({lock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case U:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!0});case D:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!1});case L:return Object(o.a)(Object(o.a)({},e),{},{error:n.payload});case T:return Object(o.a)(Object(o.a)({},e),{},{isLocked:!0});case _:return Object(o.a)(Object(o.a)({},e),{},{isLocked:!1});case A:return Object(o.a)(Object(o.a)({},e),{},{error:null});default:return e}},climatization:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!0});case K:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!1});case V:return Object(o.a)(Object(o.a)({},e),{},{error:n.payload});case H:return Object(o.a)(Object(o.a)({},e),{},{isTurnedOn:!0});case z:return Object(o.a)(Object(o.a)({},e),{},{isTurnedOn:!1});case Z:return Object(o.a)(Object(o.a)({},e),{},{error:null});default:return e}},engine:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ee:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!0});case ne:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!1});case te:return Object(o.a)(Object(o.a)({},e),{},{error:n.payload});case X:return Object(o.a)(Object(o.a)({},e),{},{isTurnedOn:!0});case Y:return Object(o.a)(Object(o.a)({},e),{},{isTurnedOn:!1});case re:return Object(o.a)(Object(o.a)({},e),{},{error:null});default:return e}},honk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case se:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!0});case ue:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!1});case le:return Object(o.a)(Object(o.a)({},e),{},{error:n.payload});case de:return Object(o.a)(Object(o.a)({},e),{},{error:null});default:return e}},flash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case be:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!0});case je:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!1});case pe:return Object(o.a)(Object(o.a)({},e),{},{error:n.payload});case ge:return Object(o.a)(Object(o.a)({},e),{},{error:null});default:return e}},honkAndFlash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case he:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!0});case ve:return Object(o.a)(Object(o.a)({},e),{},{inProcess:!1});case me:return Object(o.a)(Object(o.a)({},e),{},{error:n.payload});case Fe:return Object(o.a)(Object(o.a)({},e),{},{error:null});default:return e}}}),ze="SAVE_CONFIGURATOR_ACTIONS_STATE",Be=function(e){return{type:ze,payload:e}},Ke={actionsState:{}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,n=arguments.length>1?arguments[1]:void 0;return n.type===ze?Object(o.a)(Object(o.a)({},e),{},{actionsState:Object(o.a)({},n.payload)}):e},Ze={code:"EN"},qe=Object(d.b)({scene:Le,car:He,configurator:Ve,language:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,n=arguments.length>1?arguments[1]:void 0;return n.type===xe?Object(o.a)(Object(o.a)({},e),{},{code:n.payload}):e}}),Je=t(333),$e=Object(d.c)(qe,Object(d.a)(Je.a)),Qe=t(526),Xe=t(527),Ye=t(26),en=function(){var e=Object(Qe.a)().progress;return Object(Ye.jsxs)(Xe.a,{center:!0,children:[e," % loaded"]})},nn=t(51),tn=t(532),rn=t(531),cn=t(21),an=t(7),on=t(528),sn=t(530),un=t(336),ln=t(13),dn=function(e){var n=e.r,t=e.g,r=e.b,c=255/Math.max.apply(Math,[n,t,r]);return"rgb(".concat(n*c,", ").concat(t*c,", ").concat(r*c,")")},On=t(1),fn=t(8),bn=function(){function e(n){Object(On.a)(this,e),this.repetitions=0,this.action=n.bind(this)}return Object(fn.a)(e,[{key:"play",value:function(){this.action(),this.repetitions+=1}}]),e}(),jn=function(e){var n=e.includes("Wheel"),t=e.includes("Window"),r=e.includes("Trunk"),c=0;return t?c+=0:!n&&!r&&!t?c+=5:r?c+=10:n&&(c+=15),e.includes("Left")||(c+=1),e.includes("Front")||(c+=2),c},pn=t(337),gn={configurator:{FrontLeftWindow:{EN:"Open front left window",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u0435 \u043b\u0435\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"},FrontRightWindow:{EN:"Open front right window",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u0435 \u043f\u0440\u0430\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"},BackLeftWindow:{EN:"Open back left window",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u0434\u043d\u0435\u0435 \u043b\u0435\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"},BackRightWindow:{EN:"Open back right window",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u0434\u043d\u0435\u0435 \u043f\u0440\u0430\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"},FrontLeftDoor:{EN:"Open front left door",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u043d\u044e\u044e \u043b\u0435\u0432\u0443\u044e \u0434\u0432\u0435\u0440\u044c"},FrontRightDoor:{EN:"Open front right door",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u043d\u044e\u044e \u043f\u0440\u0430\u0432\u0443\u044e \u0434\u0432\u0435\u0440\u044c"},BackLeftDoor:{EN:"Open back left door",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u0434\u043d\u044e\u044e \u043b\u0435\u0432\u0443\u044e \u0434\u0432\u0435\u0440\u044c"},BackRightDoor:{EN:"Open back right door",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u0434\u043d\u044e\u044e \u043f\u0440\u0430\u0432\u0443\u044e \u0434\u0432\u0435\u0440\u044c"},FrontLeftWheelTire:{EN:"Deflate front left wheel",RU:"\u0421\u0434\u0443\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u0435 \u043b\u0435\u0432\u043e\u0435 \u043a\u043e\u043b\u0435\u0441\u043e"},FrontRightWheelTire:{EN:"Deflate front right wheel",RU:"\u0421\u0434\u0443\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u043d\u0435\u0435 \u043f\u0440\u0430\u0432\u043e\u0435 \u043a\u043e\u043b\u0435\u0441\u043e"},BackLeftWheelTire:{EN:"Deflate back left wheel",RU:"\u0421\u0434\u0443\u0442\u044c \u0437\u0430\u0434\u043d\u0435\u0435 \u043b\u0435\u0432\u043e\u0435 \u043a\u043e\u043b\u0435\u0441\u043e"},BackRightWheelTire:{EN:"Deflate back right wheel",RU:"\u0421\u0434\u0443\u0442\u044c \u0437\u0430\u0434\u043d\u0435\u0435 \u043f\u0440\u0430\u0432\u043e\u0435 \u043a\u043e\u043b\u0435\u0441\u043e"},Trunk:{EN:"Open the trunk",RU:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0431\u0430\u0433\u0430\u0436\u043d\u0438\u043a"},SaveButton:{EN:"Save",RU:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},Title:{EN:"Car state configurator",RU:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043c\u0430\u0448\u0438\u043d\u044b"}},alerts:{car:{CloseSuccess:{EN:"Car closed",RU:"\u041c\u0430\u0448\u0438\u043d\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0430"},OpenSuccess:{EN:"Car opened",RU:"\u041c\u0430\u0448\u0438\u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430"},ClimatizationOnSuccess:{EN:"Climatization turned on",RU:"\u041a\u043b\u0438\u043c\u0430\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d"},ClimatizationOffSuccess:{EN:"Climatization turned off",RU:"\u041a\u043b\u0438\u043c\u0430\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d"},StartSuccess:{EN:"Engine started",RU:"\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d"},StopSuccess:{EN:"Engine stopped",RU:"\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d"},HonkSuccess:{EN:"Signal played successfully\n",RU:"\u0421\u0438\u0433\u043d\u0430\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d"},FlashSuccess:{EN:"Signal played successfully\n",RU:"\u0421\u0438\u0433\u043d\u0430\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d"},StandardFailure:{EN:"Error occurred",RU:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"}}},voice:{reactions:{start:{EN:"Engine started",RU:"\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d"},stop:{EN:"Engine stopped",RU:"\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d"},open:{EN:"Car opened",RU:"\u041c\u0430\u0448\u0438\u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430"},close:{EN:"Car closed",RU:"\u041c\u0430\u0448\u0438\u043d\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0430"},hola:{EN:"how can I help you",RU:"\u0427\u0435\u043c \u044f \u043c\u043e\u0433\u0443 \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0447\u044c"},chao:{EN:"Chao",RU:"\u0427\u0430\u043e"},noMatch:{EN:"I didn't understand your command could you repeat it please",RU:"\u042f \u043d\u0435 \u043f\u043e\u043d\u044f\u043b \u0432\u0430\u0448\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0432\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0435\u0435"}}}},hn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EN";return Object(pn.get)(gn,"".concat(e,".").concat(n),null)},vn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EN",t="configurator.".concat(e.replace("Toggle",""));return t.includes("Window")&&(t=t.replace("Door","")),hn(t,n)},mn=t(529),Fn="./auto35.gltf";function xn(e){var n=e.color,t=e.dispatch,c=e.actionsState,i=e.lang,a=Object(r.useRef)(),o=Object(nn.c)(un.a,Fn),s=o.scene,u=o.materials,l=o.animations,d=o.nodes,O=Object(r.useState)([void 0,void 0]),f=Object(an.a)(O,2),b=Object(an.a)(f[0],2),j=b[0],p=b[1],g=f[1],h=Object(on.a)(l,s),v=h.clips,m=h.mixer,F=Object(r.useState)(),x=Object(an.a)(F,2),C=x[0],R=x[1],N=Object(r.useState)(!0),y=Object(an.a)(N,2),E=y[0],w=y[1],S=Object(r.useState)(!0),k=Object(an.a)(S,2),T=k[0],_=k[1];return Object(r.useEffect)((function(){console.log(u),n&&(u.MetallicBlue.color=n)}),[n]),Object(r.useEffect)((function(){if(d){console.log(d,u);["Sphere"].forEach((function(e){var n=d[e];n&&(n.visible=!1)}))}}),[]),Object(r.useEffect)((function(){var e={},n=u.glass,t=n.clone(),r=u.Rubber_Rough,c=r.clone();g((function(e){var n=Object(cn.a)(e);return n[0]=c,n[1]=t,n})),v.forEach((function(r,c){var i=r.clone(),a=s.children.find((function(e){return e.name===r.name.replace("Open","").replace("Window","")}));if(a){console.log(a);var o=m.clipAction(i,a);o.clampWhenFinished=!0,o.setLoop(ln.LoopPingPong),o.repetitions=0,e[r.name.replace("Open","Toggle")]=new bn((function(){var e,c,i,a,s,u;r.name.includes("Window")&&(console.log(r.name),this.repetitions%2===0&&(null===(e=d[r.name.replace("Open","")])||void 0===e||null===(c=e.children[0])||void 0===c||null===(i=c.children[0])||void 0===i?void 0:i.material)?(console.log(1),d[r.name.replace("Open","")].children[0].children[0].material=t):(null===(a=d[r.name.replace("Open","")])||void 0===a||null===(s=a.children[0])||void 0===s||null===(u=s.children[0])||void 0===u?void 0:u.material)&&(d[r.name.replace("Open","")].children[0].children[0].material=n));o.play(),o.paused=!1,o.repetitions+=1}))}})),Object.keys(d).forEach((function(n){n.includes("WheelTire")&&(e["Toggle".concat(n)]=new bn((function(){this.repetitions%2===0?d[n].material=c:d[n].material=r})))})),R(e)}),[]),Object(r.useEffect)((function(){if(C){var e={};Object.keys(C).forEach((function(n){e[n]={label:vn(n,i),order:jn(n),repetitions:0}})),t(Be(e))}}),[C,i]),Object(r.useEffect)((function(){Object.keys(c).forEach((function(e){C[e].repetitions%2!==c[e].repetitions%2&&C[e].play()}))}),[c,C]),Object(mn.a)((function(){E?(j.color.r+=.025,j.color.r>=.5&&w(!1)):(j.color.r-=.025,j.color.r<=0&&w(!0)),T?(p.color.r+=1.5,p.color.r>=30&&_(!1)):(p.color.r-=1.5,p.color.r<=1&&_(!0))}),j&&p?70:0),Object(Ye.jsx)("primitive",{object:o.scene,scale:1,ref:a})}sn.a.preload(Fn);var Cn=t(49),Rn=t.n(Cn),Nn=t(58),yn=t(53),En=(t(381),function(){var e=Object(s.c)(x),n=Object(s.b)();return Object(Ye.jsxs)(Ye.Fragment,{children:[Object(Ye.jsx)("div",{className:Rn()("arrow-container","arrow-container_left"),onClick:function(){n(g())},children:Object(Ye.jsx)(Nn.a,{color:Ue,icon:yn.b,size:"2x"})}),Object(Ye.jsx)("div",{className:Rn()("arrow-container","arrow-container_right"),onClick:function(){n(p())},children:Object(Ye.jsx)(Nn.a,{color:Ue,icon:yn.c,size:"2x"})}),0!==e&&Object(Ye.jsx)("div",{onClick:function(){n(h())},className:Rn()("rotation-stop-container"),children:Object(Ye.jsx)(Nn.a,{color:Ue,icon:yn.k,size:"2x"})})]})}),wn=(t(382),function(){var e=Object(s.c)(x),n=Object(s.c)(C),t=Object(s.b)(),c=Object(s.c)(S),i=Object(s.c)(k);return Object(Ye.jsxs)("div",{className:"scene-container",children:[Object(Ye.jsx)(nn.a,{id:"three-scene",children:Object(Ye.jsxs)(r.Suspense,{fallback:Object(Ye.jsx)(en,{}),children:[Object(Ye.jsx)(xn,{color:n,dispatch:t,actionsState:c,lang:i}),Object(Ye.jsx)(tn.a,{target:new ln.Vector3(0,3,0),enablePan:!1,autoRotate:!!e,autoRotateSpeed:e,maxDistance:12,minDistance:7,maxPolarAngle:-2*Math.PI,minPolarAngle:Math.PI/2,maxAzimuthAngle:0}),Object(Ye.jsx)(rn.a,{files:"./cube.hdr",background:!0})]})}),Object(Ye.jsx)(En,{})]})}),Sn=(t(383),t(261)),kn=t.n(Sn),Tn=(t(384),function(){var e=Object(s.c)(k),n=Object(r.useState)(null),t=Object(an.a)(n,2),c=t[0],i=t[1],a=Object(r.useState)(!1),o=Object(an.a)(a,2),u=o[0],l=o[1],d=window.speechSynthesis,O=Object(s.b)(),f=Object(s.c)(R);f.isLocked,f.inProcess;return Object(r.useEffect)((function(){c&&u&&(c.stop(),l(!1));try{var n=new(window.SpeechRecognition||window.webkitSpeechRecognition);n.interimResults=!0,n.lang="RU"===e?"ru-Ru":"en-US",n.continuous=!0;var t=null,r=function(r){var c=r.results[r.resultIndex],i=c.isFinal?c[0].transcript:null;if(i){console.log(i);var o=kn.a.findBestMatch(i.toLowerCase(),[].concat(Object(cn.a)(Ce),Object(cn.a)(Re),Object(cn.a)(we),Object(cn.a)(Ee),Object(cn.a)(ye))),s=o.bestMatch;if(console.log(o),s.rating>.7){var u=s.target;if(Ce.includes(u)){O(oe((function(){var n=new SpeechSynthesisUtterance(hn("voice.reactions.start",e));d.speak(n)}),(function(n){var t=new SpeechSynthesisUtterance(hn("alerts.car.StandardFailure",e));console.log(n),d.speak(t)})))}else if(Re.includes(u)){O(ae((function(){var n=new SpeechSynthesisUtterance(hn("voice.reactions.stop",e));d.speak(n)}),(function(n){var t=new SpeechSynthesisUtterance(hn("alerts.car.StandardFailure",e));console.log(n),d.speak(t)})))}else if(we.includes(u)){O(G((function(){var n=new SpeechSynthesisUtterance(hn("voice.reactions.close",e));d.speak(n)}),(function(n){var t=new SpeechSynthesisUtterance(hn("alerts.car.StandardFailure",e));console.log(n),d.speak(t)})))}else if(Ee.includes(u)){O(M((function(){var n=new SpeechSynthesisUtterance(hn("voice.reactions.open",e));d.speak(n)}),(function(n){var t=new SpeechSynthesisUtterance(hn("alerts.car.StandardFailure",e));console.log(n),d.speak(t)})))}else if(ye.includes(u)){var l=new SpeechSynthesisUtterance(hn("voice.reactions.chao",e));d.speak(l)}n.onresult=a,t&&clearTimeout(t)}else{var f=new SpeechSynthesisUtterance(hn("voice.reactions.noMatch",e));d.speak(f),t&&(clearTimeout(t),t=setTimeout((function(){n.onresult=a;var t=new SpeechSynthesisUtterance(hn("voice.reactions.noMatch",e));d.speak(t)}),5e3))}}},a=function(t){var c=t.results[t.resultIndex],i=c.isFinal?c[0].transcript:null;if(i&&kn.a.findBestMatch(i.toLowerCase(),Object(cn.a)(Ne)).bestMatch.rating>.7){var a=new SpeechSynthesisUtterance("".concat(function(e){var n=(new Date).getHours();return n>=5&&n<=11?"RU"===e?"\u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e":"Good morning":n>=12&&n<=17?"RU"===e?"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c":"Good day":n>=17&&n<=23?"RU"===e?"\u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440":"Good evening":"RU"===e?"\u0414\u043e\u0431\u0440\u043e\u0439 \u043d\u043e\u0447\u0438":"Good night"}(e)," ").concat(hn("voice.reactions.hola",e)));d.speak(a),n.onresult=r}};n.onresult=a,i(n)}catch(o){}}),[e]),window.webkitSpeechRecognition||window.SpeechRecognition?Object(Ye.jsx)("div",{onClick:function(){u&&c?(c.stop(),l(!1)):c&&(c.start(),l(!0))},className:Rn()("mic-container",u&&"mic-container_active"),children:Object(Ye.jsx)(Nn.a,{color:"grey",icon:u?yn.i:yn.j})}):Object(Ye.jsx)(Ye.Fragment,{})}),_n=(t(521),t(359)),Un=t(360),Dn=t.n(Un),Ln=t(27),An=(t(402),new Ln.GestureDescription(Se));An.addCurl(Ln.Finger.Thumb,Ln.FingerCurl.NoCurl,1),An.addDirection(Ln.Finger.Thumb,Ln.FingerDirection.VerticalUp,1),An.addDirection(Ln.Finger.Thumb,Ln.FingerDirection.DiagonalUpRight,.8),An.addDirection(Ln.Finger.Thumb,Ln.FingerDirection.DiagonalUpLeft,.8),An.addCurl(Ln.Finger.Index,Ln.FingerCurl.NoCurl,1),An.addDirection(Ln.Finger.Index,Ln.FingerDirection.VerticalUp,1),An.addDirection(Ln.Finger.Index,Ln.FingerDirection.DiagonalUpRight,.5),An.addDirection(Ln.Finger.Index,Ln.FingerDirection.DiagonalUpLeft,.5),An.addCurl(Ln.Finger.Middle,Ln.FingerCurl.NoCurl,1),An.addDirection(Ln.Finger.Middle,Ln.FingerDirection.VerticalUp,1),An.addDirection(Ln.Finger.Middle,Ln.FingerDirection.DiagonalUpRight,.5),An.addDirection(Ln.Finger.Middle,Ln.FingerDirection.DiagonalUpLeft,.5),An.addCurl(Ln.Finger.Ring,Ln.FingerCurl.NoCurl,1),An.addDirection(Ln.Finger.Ring,Ln.FingerDirection.VerticalUp,1),An.addDirection(Ln.Finger.Ring,Ln.FingerDirection.DiagonalUpRight,.5),An.addDirection(Ln.Finger.Ring,Ln.FingerDirection.DiagonalUpLeft,.5),An.addCurl(Ln.Finger.Pinky,Ln.FingerCurl.NoCurl,1),An.addDirection(Ln.Finger.Pinky,Ln.FingerDirection.VerticalUp,1),An.addDirection(Ln.Finger.Pinky,Ln.FingerDirection.DiagonalUpRight,.5),An.addDirection(Ln.Finger.Pinky,Ln.FingerDirection.DiagonalUpLeft,.5);var Pn=new Ln.GestureDescription(ke);Pn.addCurl(Ln.Finger.Thumb,Ln.FingerCurl.FullCurl,1),Pn.addCurl(Ln.Finger.Index,Ln.FingerCurl.NoCurl,1),Pn.addDirection(Ln.Finger.Index,Ln.FingerDirection.VerticalUp,1),Pn.addCurl(Ln.Finger.Middle,Ln.FingerCurl.NoCurl,1),Pn.addDirection(Ln.Finger.Middle,Ln.FingerDirection.VerticalUp,1),Pn.addCurl(Ln.Finger.Ring,Ln.FingerCurl.FullCurl,1),Pn.addCurl(Ln.Finger.Pinky,Ln.FingerCurl.FullCurl,1),Pn.setWeight(Ln.Finger.Index,2),Pn.setWeight(Ln.Finger.Middle,2);var In=new Ln.GestureDescription(Te);In.addCurl(Ln.Finger.Thumb,Ln.FingerCurl.FullCurl,1),In.addCurl(Ln.Finger.Index,Ln.FingerCurl.NoCurl,1),In.addDirection(Ln.Finger.Index,Ln.FingerDirection.DiagonalUpRight,1),In.addCurl(Ln.Finger.Middle,Ln.FingerCurl.NoCurl,1),In.addDirection(Ln.Finger.Middle,Ln.FingerDirection.DiagonalUpRight,1),In.addCurl(Ln.Finger.Ring,Ln.FingerCurl.FullCurl,1),In.addCurl(Ln.Finger.Pinky,Ln.FingerCurl.FullCurl,1),In.setWeight(Ln.Finger.Index,2),In.setWeight(Ln.Finger.Middle,2);var Mn=new Ln.GestureDescription(_e);Mn.addCurl(Ln.Finger.Thumb,Ln.FingerCurl.FullCurl,1),Mn.addCurl(Ln.Finger.Index,Ln.FingerCurl.NoCurl,1),Mn.addDirection(Ln.Finger.Index,Ln.FingerDirection.DiagonalUpLeft,1),Mn.addCurl(Ln.Finger.Middle,Ln.FingerCurl.NoCurl,1),Mn.addDirection(Ln.Finger.Middle,Ln.FingerDirection.DiagonalUpLeft,1),Mn.addCurl(Ln.Finger.Ring,Ln.FingerCurl.FullCurl,1),Mn.addCurl(Ln.Finger.Pinky,Ln.FingerCurl.FullCurl,1),Mn.setWeight(Ln.Finger.Index,2),Mn.setWeight(Ln.Finger.Middle,2);var Gn=function(){var e=Object(s.b)(),n=Object(r.useState)(!1),t=Object(an.a)(n,2),c=t[0],a=t[1],o=Object(r.useState)(!1),u=Object(an.a)(o,2),l=u[0],d=u[1],O=Object(r.useState)(null),f=Object(an.a)(O,2),b=f[0],j=f[1],v=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=function(){var e=Object(F.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_n.a();case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var x=function(){var n=Object(F.a)(m.a.mark((function n(t){var r,c,i,a,o,s,u,l,d,O;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof v.current||null===v.current||4!==v.current.video.readyState){n.next=15;break}return r=v.current.video,c=r.videoWidth,i=r.videoHeight,v.current.video.width=c,v.current.video.height=i,n.next=8,t.estimateHands(r);case 8:if(!((a=n.sent).length>0)){n.next=15;break}return o=new Ln.GestureEstimator([An,Pn,In,Mn]),n.next=13,o.estimate(a[0].landmarks,8);case 13:void 0!==(s=n.sent).gestures&&s.gestures.length>0&&(u=s.gestures.map((function(e){return e.confidence})),l=u.indexOf(Math.max.apply(null,u)),d=s.gestures[l].name,O=null===b||void 0===b?void 0:b.gestureName,console.log(d),d===Se?e(h()):(console.log("swipe"),b?b.gestureName===d?console.log("same"):(console.log("not same"),Date.now()-b.timestamp<=1500&&(console.log("inner not same"),O===_e&&d===ke||O===ke&&d===Te||O===_e&&d===Te?(console.log("rotateRight"),e(p())):(O===Te&&d===ke||O===ke&&d===_e||O===Te&&d===_e)&&(console.log("rotateLeft"),e(g())))):console.log("!lastGesture"),j({gestureName:d,timestamp:Date.now()})));case 15:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),C=function(){var e=Object(F.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l&&a(!c);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(mn.a)((function(){return x(l)}),c?300:null),Object(Ye.jsxs)(Ye.Fragment,{children:[c&&Object(i.createPortal)(Object(Ye.jsx)("div",{className:"gesture-recognition-container",children:Object(Ye.jsx)(Dn.a,{ref:v,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,top:0,textAlign:"center",zindex:9,width:320,height:240}})}),document.querySelector(".App")),Object(Ye.jsx)("div",{className:Rn()("video-button-container",c&&"video-button-container",!l&&"video-button-container_disabled"),onClick:l?C:void 0,children:Object(Ye.jsx)(Nn.a,{color:"grey",icon:c?yn.p:yn.q})})]})},Wn=t(533);t(403);function Hn(){var e=Object(s.b)(),n=Object(s.c)(R),t=Object(s.c)(k),r=Object(u.d)(),c=n.isLocked,i=n.inProcess;return Object(Ye.jsx)("div",{onClick:function(){if(!i){e(W((function(){r.success(hn(c?"alerts.car.OpenSuccess":"alerts.car.CloseSuccess",t))}),(function(e){r.error(hn("alerts.car.StandardFailure",t)),console.error(e)})))}},className:Rn()("lock-container"),children:Object(Ye.jsx)(Nn.a,{color:"grey",icon:c?yn.h:yn.o})})}t(404);var zn=t(367),Bn=function(){var e=Object(s.b)(),n=Object(s.c)(C);console.log(n);var t=Object(r.useState)(!1),c=Object(an.a)(t,2),i=c[0],a=c[1];return Object(Ye.jsxs)(Ye.Fragment,{children:[Object(Ye.jsx)("div",{onClick:function(e){a((function(e){return!e}))},className:Rn()("change-color-button"),style:{backgroundColor:dn(n)}}),i&&Object(Ye.jsx)(zn.a,{className:"change-color__sketch-picker",color:{r:255*n.r,g:255*n.g,b:255*n.b},onChangeComplete:function(n){console.log(n),e(function(e){return{type:j,payload:e}}({r:n.rgb.r/255,g:n.rgb.g/255,b:n.rgb.b/255}))},disableAlpha:!0})]})};t(511);function Kn(){var e=Object(s.b)(),n=Object(s.c)(N),t=Object(s.c)(k),r=Object(u.d)(),c=n.isTurnedOn,i=n.inProcess;return Object(Ye.jsx)("div",{onClick:function(){if(!i){e(function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r,c){var i,a,o,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=c(),a=N(i),o=a.isTurnedOn,s=a.error,r({type:B}),s&&r({type:Z}),r(o?$(e,n):Q(e,n));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}((function(){r.success(hn(c?"alerts.car.ClimatizationOffSuccess":"alerts.car.ClimatizationOnSuccess",t))}),(function(e){r.error(hn("alerts.car.StandardFailure",t)),console.error(e)})))}},className:Rn()("climatization-container"),children:Object(Ye.jsx)(Nn.a,{color:c?"red":Ue,icon:c?yn.m:yn.l})})}t(512);function Vn(){var e=Object(s.b)(),n=Object(s.c)(y),t=Object(s.c)(k),r=Object(u.d)(),c=n.isTurnedOn,i=n.inProcess;return Object(Ye.jsx)("div",{onClick:function(){if(!i){e(function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r,c){var i,a,o,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=c(),a=y(i),o=a.error,s=a.isTurnedOn,r({type:ee}),o&&r({type:re}),r(s?ae(e,n):oe(e,n));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}((function(){r.success(hn(c?"alerts.car.StopSuccess":"alerts.car.StartSuccess",t))}),(function(e){r.error(hn("alerts.car.StandardFailure",t)),console.error(e)})))}},className:Rn()("engine-container"),children:Object(Ye.jsx)(Nn.a,{color:c?"#1aaa1a":Ue,icon:yn.f})})}t(513);function Zn(){var e=Object(s.b)(),n=Object(s.c)(E),t=Object(u.d)(),c=n.inProcess,i=Object(r.useMemo)((function(){return new Audio("./honk.mp3")}),[]),a=Object(s.c)(k);return Object(Ye.jsx)("div",{onClick:function(){if(!c){e(function(e,n){return function(){var t=Object(F.a)(m.a.mark((function t(r,c){var i,a,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c(),a=E(i),o=a.error,r({type:se}),o&&r({type:de}),t.prev=4,t.next=7,new Promise((function(e,n){setTimeout((function(){e()}),1e3)}));case 7:t.sent,r(Oe()),e&&e(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),r(Oe()),r(fe(t.t0)),n&&n();case 17:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e,n){return t.apply(this,arguments)}}()}((function(){t.success(hn("alerts.car.HonkSuccess",a)),i.play()}),(function(e){t.error(hn("alerts.car.StandardFailure",a)),console.error(e)})))}},className:Rn()("honk-container"),children:Object(Ye.jsx)(Nn.a,{color:"grey",icon:yn.a})})}t(514);function qn(){var e=Object(s.b)(),n=Object(s.c)(w),t=Object(u.d)(),r=n.inProcess,c=Object(s.c)(k);return Object(Ye.jsx)("div",{onClick:function(){if(!r){e(W((function(){t.success(hn("alerts.car.FlashSuccess",c))}),(function(e){t.error(hn("alerts.car.StandardFailure",c)),console.error(e)})))}},className:Rn()("flash-container"),children:Object(Ye.jsx)(Nn.a,{color:Ue,icon:yn.g})})}var Jn=t(44),$n=t(365),Qn=t.n($n),Xn=(t(518),t(330),t(519),function(e){var n=e.onClick,t=e.children,r=e.className;return Object(Ye.jsx)("div",{className:Rn()(["button",r]),onClick:n,children:t})});function Yn(){var e=Object(s.b)(),n=Object(s.c)(S),t=Object(s.c)(k),c=Object(r.useState)(!1),i=Object(an.a)(c,2),a=i[0],u=i[1],l=Object(r.useState)({}),d=Object(an.a)(l,2),O=d[0],f=d[1];Object(r.useEffect)((function(){f(Object(o.a)({},n))}),[a,n]);return Object(Ye.jsxs)(Ye.Fragment,{children:[Object(Ye.jsx)("div",{onClick:function(){u((function(e){return!e}))},className:Rn()("configurator-button"),children:Object(Ye.jsx)(Nn.a,{color:Ue,icon:yn.d})}),Object(Ye.jsxs)("div",{className:Rn()(["configurator-container",a&&"configurator-container_opened"]),children:[Object(Ye.jsxs)("div",{className:"configurator-container__header",children:[Object(Ye.jsx)("div",{className:"configurator-container__title",children:hn("configurator.Title",t)}),Object(Ye.jsx)("div",{className:"configurator-close-button",onClick:function(){return u(!1)},children:Object(Ye.jsx)(Nn.a,{icon:yn.n,color:"red",size:"2x",swapOpacity:!0})})]}),Object(Ye.jsx)("div",{className:"configurator-container__main",children:Object.keys(O).sort((function(e,n){return O[e].order-O[n].order})).map((function(e){return Object(Ye.jsxs)("div",{className:"configurator-toggle-container",children:[Object(Ye.jsx)("div",{className:"configurator-toggle-label",children:O[e].label}),Object(Ye.jsx)("div",{className:"configurator-toggle",children:Object(Ye.jsx)(Qn.a,{checked:O[e].repetitions%2===1,icons:!1,onChange:function(){f((function(n){return Object(o.a)(Object(o.a)({},n),{},Object(Jn.a)({},e,Object(o.a)(Object(o.a)({},n[e]),{},{repetitions:n[e].repetitions+1})))}))}})})]},e)}))}),Object(Ye.jsx)(Xn,{onClick:function(){e(Be(O))},className:"configurator-save-button",children:hn("configurator.SaveButton",t)})]})]})}t(520);function et(){var e=Object(s.b)(),n=Object(s.c)(k);return Object(Ye.jsx)("div",{onClick:function(){e({type:xe,payload:"RU"===n?"EN":"RU"})},className:Rn()("language-button"),children:n})}var nt=t(366),tt=t.n(nt);function rt(){Object(s.b)(),Object(s.c)(k);var e=Object(r.useState)(!0),n=Object(an.a)(e,2),t=n[0],c=n[1];return Object(Ye.jsxs)(Ye.Fragment,{children:[Object(Ye.jsx)("div",{onClick:function(){c((function(e){return!e}))},className:Rn()("info-button"),children:Object(Ye.jsx)(Nn.a,{color:"grey",icon:yn.e})}),Object(i.createPortal)(Object(Ye.jsx)("div",{className:Rn()(["info-container",t&&"info-container_active"]),children:Object(Ye.jsx)("div",{className:tt.a})}),document.body)]})}function ct(){var e=Object(Wn.a)(),n=Object(r.useState)({hasMic:!1,hasVideo:!1}),t=Object(an.a)(n,2),c=t[0],i=c.hasMic,a=c.hasVideo,o=t[1];return Object(r.useEffect)((function(){var n;console.log(e.devices);var t=!1,r=!1;null===e||void 0===e||null===(n=e.devices)||void 0===n||n.forEach((function(e){"audioinput"===e.kind?t=!0:"videoinput"===e.kind?r=!0:console.log(e.kind)})),o({hasMic:t,hasVideo:r})}),[e]),Object(Ye.jsxs)("div",{className:"button-group",children:[Object(Ye.jsx)(rt,{}),Object(Ye.jsx)(Yn,{}),i&&Object(Ye.jsx)(Tn,{}),a&&Object(Ye.jsx)(Gn,{}),Object(Ye.jsx)(Vn,{}),Object(Ye.jsx)(Hn,{}),Object(Ye.jsx)(Kn,{}),Object(Ye.jsx)(Zn,{}),Object(Ye.jsx)(qn,{}),Object(Ye.jsx)(et,{}),Object(Ye.jsx)(Bn,{})]})}var it={position:u.b.BOTTOM_CENTER,timeout:3e3,offset:"10px",transition:u.c.SCALE};function at(){return Object(Ye.jsx)(s.a,{store:$e,children:Object(Ye.jsx)(u.a,Object(o.a)(Object(o.a)({template:l.a},it),{},{children:Object(Ye.jsxs)("div",{className:"App",children:[Object(Ye.jsx)(wn,{}),Object(Ye.jsx)(ct,{})]})}))})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(Ye.jsx)(c.a.StrictMode,{children:Object(Ye.jsx)(at,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[522,1,2]]]);
//# sourceMappingURL=main.3fc721bb.chunk.js.map
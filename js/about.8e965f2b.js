(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(t,e,a){var s=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var n,r,o=String(i(e)),l=s(a),c=o.length;return l<0||l>=c?t?"":void 0:(n=o.charCodeAt(l),n<55296||n>56319||l+1===c||(r=o.charCodeAt(l+1))<56320||r>57343?t?o.charAt(l):n:t?o.slice(l,l+2):r-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var s=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var s=a("2aba"),i=a("32e9"),n=a("79e5"),r=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),d=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var f=o(t),p=!n(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),m=p?!n(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[f](""),!e}):void 0;if(!p||!m||"replace"===t&&!d||"split"===t&&!u){var g=/./[f],h=a(r,f,""[t],function(t,e,a,s,i){return e.exec===l?p&&!i?{done:!0,value:g.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),v=h[0],_=h[1];s(String.prototype,t,v),i(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},2269:function(t,e,a){"use strict";var s=a("d281"),i=a.n(s);i.a},"2b18":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex column"},[""!=t.imageUrl&&0==t.uploading?a("img",{staticStyle:{width:"50%"},attrs:{src:t.imageUrl}}):t._e(),""==t.imageUrl&&""!=t.url?a("img",{staticStyle:{width:"50%"},attrs:{src:t.url}}):t._e(),1==t.uploading?a("span",{staticClass:"flex align-center"},[a("fa",{attrs:{icon:"sync-alt",spin:""}}),a("span",{staticClass:"margin-left-small"},[t._v("Please wait")])],1):t._e(),a("input",{ref:"fileupload",staticClass:"wide",attrs:{type:"file",accept:"image/x-png,image/gif,image/jpeg",required:t.required},on:{change:function(e){t.uploadFile()}}})])},i=[],n=a("bc3a"),r=a.n(n),o={props:{url:{type:String,default:""},required:{type:Boolean,default:!1}},data:function(){return{imageUrl:"",file:null,uploading:!1}},methods:{uploadFile:function(){var t=this;if(this.uploading=!0,this.file=this.$refs.fileupload.files[0],null!=this.file){var e=new FormData;e.append("image",this.file),r.a.post("/_system/php/functions/ftpupload.php",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e),e.data.success?(t.imageUrl=e.data.data,t.uploading=!1):console.log("Error in File Upload")}).catch(function(t){console.error(t)})}}}},l=o,c=a("2877"),d=Object(c["a"])(l,s,i,!1,null,null,null);d.options.__file="fileupload.vue";var u,f,p=d.exports,m={components:{fileupload:p},data:function(){return{params:{},visible:!1}},methods:{toggle:function(){this.visible=!this.visible},show:function(t){this.visible=!0,this.params=t}}},g=m,h=(a("7200"),Object(c["a"])(g,u,f,!1,null,"e4d62aa4",null));h.options.__file="modal.vue";e["a"]=h.exports},"2c6f":function(t,e,a){"use strict";var s=a("c36e"),i=a.n(s);i.a},"37b7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$store.getters.isAuthenticated?a("div",[a("a",{staticClass:"padding",attrs:{id:"notification-button",tabindex:"1"}},[a("fa",{attrs:{icon:"bell"}}),t.$store.getters.notifications.every(function(t){return 1==t.isRead})?t._e():a("div",{attrs:{id:"unread"}},[a("span",[t._v(t._s(t.$store.getters.notifications.filter(function(t){return 0==t.isRead}).length))])]),a("div",{staticClass:"card flex column",attrs:{id:"context",tabindex:"1"}},[a("ul",{staticClass:"links remove-list-style"},t._l(t.$store.getters.notifications,function(e){return a("div",[a("li",{class:{"notification-unread":!e.isRead}},[a("a",{staticClass:"padding wide inline-block",staticStyle:{"border-radius":"0"},on:{click:function(a){t.$store.dispatch("markAsRead",e.notification_id),t.$refs.notification.show(e)}}},[a("strong",{staticClass:"padding-bottom-small"},[t._v(t._s(e.notification_message))]),a("h4",[t._v(t._s(e.created))])])])])}),0)])],1),a("modal",{ref:"notification",inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:t.toggle}})]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"card fixed-center-medium-plus flex column five-large seven-medium twelve-small max-high fixed-fill-small",attrs:{id:"modal"}},[a("div",{staticClass:"flex justify-space-between align-center wide"},[a("h2",{staticClass:"padding"},[t._v("Notification")]),a("a",{staticClass:"padding",on:{click:t.toggle}},[a("fa",{attrs:{icon:"times"}})],1)]),a("hr"),a("div",{staticClass:"padding overflow-auto"},[a("h4",[t._v(t._s(t.params.created))]),a("br"),a("span",[t._v(t._s(t.params.notification_message))])])])])],1)},staticRenderFns:[]}})],1):t._e()},i=[],n=a("2b18"),r={mounted:function(){console.log("NBxx: Checking if has userId.."),null!=this.$store.getters.userId?(console.log("Yes, User id is "+this.$store.getters.userId),console.log("calling loadNotifications from mounted() NB"),this.$store.dispatch("loadNotifications")):console.log("Not authenticated as of the moment")},components:{modal:n["a"]}},o=r,l=(a("a618"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,"552c251e",null);c.options.__file="notification-button.vue";e["a"]=c.exports},"520a":function(t,e,a){"use strict";var s=a("0bfb"),i=RegExp.prototype.exec,n=String.prototype.replace,r=i,o="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],d=l||c;d&&(r=function(t){var e,a,r,d,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",s.call(u))),l&&(e=u[o]),r=i.call(u,t),l&&r&&(u[o]=u.global?r.index+r[0].length:e),c&&r&&r.length>1&&n.call(r[0],a,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(r[d]=void 0)}),r}),t.exports=r},"5a83":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"wide center-child",staticStyle:{height:"calc(100vh - 5rem)"}},[a("div",{staticClass:"grid wide"},[a("h1",{staticClass:"banner-text start-2 span-10 start-7-medium-plus span-5-medium-plus text-center-small margin-bottom"},[t._v("Every Picture Tells A Story")]),a("router-link",{staticClass:"home-button book start-3 span-8 start-7-medium-plus span-2-medium-plus primary text-center",attrs:{to:"/book"}},[t._v("Book Now")]),a("router-link",{staticClass:"home-button start-3 span-8 start-9-medium-plus span-2-medium-plus flat flex align-center justify-center bold",attrs:{to:"/dashboard"}},[a("span",{staticClass:"margin-right-small"},[t._v("My bookings")]),a("fa",{attrs:{icon:"angle-right"}})],1)],1)])])},i=[],n=(a("924d"),a("2877")),r={},o=Object(n["a"])(r,s,i,!1,null,"c372261a",null);o.options.__file="home-home.vue";e["default"]=o.exports},"5de7":function(t,e,a){},"5f1b":function(t,e,a){"use strict";var s=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"6c41":function(t,e,a){},7200:function(t,e,a){"use strict";var s=a("ff30"),i=a.n(s);i.a},7277:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"light",attrs:{id:"dashboard"}},[a("transition",{attrs:{name:"slide-down",appear:""}},[a("nav",{staticClass:"fixed top wide flex align-center justify-space-between padding-x-small shadow z-nav",staticStyle:{"min-height":"5rem","will-change":"transform"}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"menu hide-large center-child"},[a("a",{staticClass:"padding inline-block",attrs:{href:"#"},on:{click:function(e){t.$refs.dashboarddrawer.toggle()}}},[a("fa",{attrs:{icon:"bars"}})],1)]),a("div",{staticClass:"menu show-large center-child"},[a("router-link",{staticClass:"padding inline-block",attrs:{to:"/"}},[a("fa",{staticClass:"margin-right",attrs:{icon:"arrow-left"}}),a("span",[t._v("Back to Home")])],1)],1),a("div",{staticClass:"center-child"},[a("span",{staticClass:"padding"},[a("strong",[t._v("My Dashboard")])])])]),a("div",{staticClass:"center-child"},[a("notification-button"),a("account-button")],1)])]),a("div",{staticClass:"flex high",staticStyle:{"padding-top":"5rem"}},[a("transition",{attrs:{name:"slide-right",appear:""}},[a("aside",{staticClass:"shadow show-large padding-top padding-right",staticStyle:{"min-width":"15rem","will-change":"transform"}},[a("ul",{staticClass:"remove-list-style"},[a("li",[a("router-link",{staticClass:"padding inline-block wide",class:{active:"/dashboard"==t.$route.path||"/dashboard/bookings"==t.$route.path},staticStyle:{"border-radius":"0 2rem 2rem 0"},attrs:{to:"/dashboard/bookings"}},[a("fa",{staticClass:"margin-right",attrs:{icon:"book","fixed-width":""}}),a("span",[t._v("Bookings")])],1)],1),a("li",[a("router-link",{staticClass:"padding inline-block wide",class:{active:"/dashboard/orders"==t.$route.path},staticStyle:{"border-radius":"0 2rem 2rem 0"},attrs:{to:"/dashboard/orders"}},[a("fa",{staticClass:"margin-right",attrs:{icon:"shopping-cart","fixed-width":""}}),a("span",[t._v("Orders")])],1)],1)])])]),a("main",{staticClass:"wide"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},i=[],n=(a("cadf"),a("551c"),a("097d"),a("d563")),r=a("37b7"),o={components:{"account-button":n["a"],"notification-button":r["a"]},mounted:function(){console.log("calling loadCurrentUser from Dashboard.vue"),this.$store.dispatch("loadCurrentUser")}},l=o,c=a("2877"),d=Object(c["a"])(l,s,i,!1,null,null,null);d.options.__file="Dashboard.vue";e["default"]=d.exports},"850e":function(t,e,a){},"8bf3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"book"}},[a("nav",{staticClass:"flex justify-space-between margin"},[a("span",[a("a",{staticClass:"padding inline-block",on:{click:function(e){t.$router.push("/")}}},[a("fa",{attrs:{icon:"home"}}),a("span",{staticClass:"margin-left-small hide-small"},[t._v("Back to Home")])],1)]),a("span",[t._v("Progress")]),a("span",[t._v("Total")])]),a("div",{staticClass:"padding-large"},[a("transition",{attrs:{name:"switch-up",mode:"out-in",appear:""}},[a("h3",{key:t.$route.path,staticClass:"margin-bottom-small will-change text-center-medium-plus"},[t._v("Step "+t._s(t.step))])]),a("transition",{attrs:{name:"switch-up-delayed",mode:"out-in",appear:""}},[a("h1",{key:t.$route.path,staticClass:"text-center-medium-plus will-change"},[t._v(t._s(t.title))])])],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticStyle:{"transition-delay":"0.3s"}})],1)],1)},i=[],n=(a("6762"),a("2fdb"),a("cadf"),a("551c"),a("097d"),{mounted:function(){console.log("calling loadCurrentUser from Book.vue"),this.$store.dispatch("loadCurrentUser")},created:function(){this.$store.dispatch("loadCategories"),this.$store.dispatch("loadPackages"),this.$store.dispatch("loadThemes"),this.$store.dispatch("loadAddons"),this.$store.dispatch("loadInclusions"),this.$store.dispatch("loadBlockedDates"),this.$store.dispatch("loadBlockedDays")},computed:{step:function(){return this.$route.path.includes("category")?1:this.$route.path.includes("package")?2:this.$route.path.includes("theme")?3:this.$route.path.includes("addon")?4:this.$route.path.includes("schedule")?5:this.$route.path.includes("summary")?6:void 0},title:function(){if(this.$route.path.includes("category"))return"Select a Category";if(this.$route.path.includes("package"))return"Choose a Package";if(this.$route.path.includes("addon"))return"Choose Addons";if(this.$route.path.includes("schedule"))return"Choose a Schedule";if(this.$route.path.includes("summary"))return"Summary";var t=this.$store.getters.booking.package.package_themes;return this.$route.path.includes("theme")?"Choose "+t+" Theme"+(t>1?"s":""):void 0}}}),r=n,o=(a("9f0d"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,null,null);l.options.__file="Book.vue";e["default"]=l.exports},"8d9a":function(t,e,a){},"924d":function(t,e,a){"use strict";var s=a("850e"),i=a.n(s);i.a},"9de2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blank padding-large"},[a("h1",[t._v("404")]),a("h2",[t._v("Page "+t._s(t.$route.path)+" not found")]),a("br"),a("a",{on:{click:function(e){t.$router.go(-1)}}},[a("fa",{staticClass:"margin-right",attrs:{icon:"arrow-left"}}),a("span",[t._v("Back to Previous Page")])],1)])},i=[],n=a("2877"),r={},o=Object(n["a"])(r,s,i,!1,null,null,null);o.options.__file="Blank.vue";e["default"]=o.exports},"9f0d":function(t,e,a){"use strict";var s=a("8d9a"),i=a.n(s);i.a},a481:function(t,e,a){"use strict";var s=a("cb7c"),i=a("4bf8"),n=a("9def"),r=a("4588"),o=a("0390"),l=a("5f1b"),c=Math.max,d=Math.min,u=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,g){return[function(s,i){var n=t(this),r=void 0==s?void 0:s[e];return void 0!==r?r.call(s,n,i):a.call(String(n),s,i)},function(t,e){var i=g(a,t,this,e);if(i.done)return i.value;var u=s(t),f=String(this),p="function"===typeof e;p||(e=String(e));var v=u.global;if(v){var _=u.unicode;u.lastIndex=0}var b=[];while(1){var C=l(u,f);if(null===C)break;if(b.push(C),!v)break;var k=String(C[0]);""===k&&(u.lastIndex=o(f,n(u.lastIndex),_))}for(var x="",w=0,y=0;y<b.length;y++){C=b[y];for(var $=String(C[0]),S=c(d(r(C.index),f.length),0),P=[],E=1;E<C.length;E++)P.push(m(C[E]));var O=C.groups;if(p){var T=[$].concat(P,S,f);void 0!==O&&T.push(O);var j=String(e.apply(void 0,T))}else j=h($,f,S,P,O,e);S>=w&&(x+=f.slice(w,S)+j,w=S+$.length)}return x+f.slice(w)}];function h(t,e,s,n,r,o){var l=s+t.length,c=n.length,d=p;return void 0!==r&&(r=i(r),d=f),a.call(o,d,function(a,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(l);case"<":o=r[i.slice(1,-1)];break;default:var d=+i;if(0===d)return i;if(d>c){var f=u(d/10);return 0===f?i:f<=c?void 0===n[f-1]?i.charAt(1):n[f-1]+i.charAt(1):i}o=n[d-1]}return void 0===o?"":o})}})},a618:function(t,e,a){"use strict";var s=a("5de7"),i=a.n(s);i.a},b0c5:function(t,e,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"fb-customerchat",attrs:{page_id:"746988385642006",theme_color:"#3676e8"}}),a("transition",{attrs:{name:"slide-down",appear:""}},[a("nav",{staticClass:"sticky wide flex justify-space-between padding-x-small",staticStyle:{"min-height":"5rem"}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"menu hide-large center-child"},[a("a",{staticClass:"padding inline-block",attrs:{href:"#"},on:{click:function(e){t.$refs.homedrawer.toggle()}}},[a("fa",{attrs:{icon:"bars"}})],1)]),a("div",{staticClass:"logo show-medium-plus center-child padding-x-medium"},[a("strong",[t._v("Remember Them Little")])]),a("ul",{staticClass:"links remove-list-style show-large flex center-child-child"},[a("li",[a("router-link",{staticClass:"padding",class:{active:"/"==t.$route.path},attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{staticClass:"padding",class:{active:"/services"==t.$route.path},attrs:{to:"/services"}},[t._v("Services")])],1),a("li",[a("router-link",{staticClass:"padding",class:{active:"/gallery"==t.$route.path},attrs:{to:"/gallery"}},[t._v("Gallery")])],1),a("li",[a("router-link",{staticClass:"padding",class:{active:"/contact"==t.$route.path},attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),a("div",{staticClass:"flex center-child"},[null!=t.$store.getters.userId?a("notification-button"):t._e(),t.$store.getters.isAuthenticated?a("account-button"):t._e(),a("sign-in-button")],1)])]),a("main",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("drawer",{ref:"homedrawer",staticClass:"fixed top",attrs:{visible:!1,alias:"home-drawer"}},[a("div",{staticClass:"padding"},[a("ul",{staticClass:"links remove-list-style flex column"},[a("li",[a("router-link",{staticClass:"padding inline-block wide",class:{active:"/"==t.$route.path},attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{staticClass:"padding inline-block wide",class:{active:"/services"==t.$route.path},attrs:{to:"/services"}},[t._v("Services")])],1),a("li",[a("router-link",{staticClass:"padding inline-block wide",class:{active:"/gallery"==t.$route.path},attrs:{to:"/gallery"}},[t._v("Gallery")])],1),a("li",[a("router-link",{staticClass:"padding inline-block wide",class:{active:"/contact"==t.$route.path},attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:t.toggle}})]),a("transition",{attrs:{name:"slide-right"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticClass:"fixed high left",attrs:{id:"drawer"}},[t._t("default")],2)])],1)},r=[],o={props:["visible","alias"],data:function(){return{shown:this.visible}},methods:{toggle:function(){this.shown=!this.shown}}},l=o,c=(a("c17d"),a("2877")),d=Object(c["a"])(l,n,r,!1,null,"8aa66c28",null);d.options.__file="drawer.vue";var u=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0===Object.keys(t.$store.state.user).length?a("div",{staticClass:"center-child",attrs:{id:"sign-in-button"}},["LOADING"==t.$store.state.authLoadingStatus?a("span",{staticClass:"center-child-child"},[a("span",{staticClass:"padding"},[a("fa",{attrs:{icon:"sync-alt",spin:""}})],1)]):a("span",{staticClass:"center-child-child"},[a("a",{staticClass:"padding",attrs:{id:"real-sign",href:"#",tabindex:"0"}},[a("span",[t._v("Login")]),a("fa",{staticClass:"margin-left-small",attrs:{icon:"sign-in-alt"}}),a("div",{staticClass:"card padding flex column",staticStyle:{"min-width":"15rem"},attrs:{id:"context",tabindex:"1"}},[a("ul",{staticClass:"links remove-list-style flex column"},[a("li",[a("a",{staticClass:"padding block",on:{click:function(e){t.$store.dispatch("facebookSignIn")}}},[t._v("Login with Facebook")])]),a("li",[a("a",{staticClass:"padding block",on:{click:function(e){t.$refs.smsModal.show()}}},[t._v("Login with SMS")])])])])],1)]),a("modal",{ref:"smsModal",inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade",appear:""}},[t.visible?a("div",{staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:t.toggle}}):t._e()]),a("transition",{attrs:{name:"center-scale",appear:""}},[t.visible?a("div",{staticClass:"card fixed-center flex column five-large seven-medium twelve-small max-high",attrs:{id:"modal"}},[a("div",{staticClass:"flex justify-space-between align-center wide"},[a("h2",{staticClass:"padding"},[t._v("SMS Sign In")]),a("a",{staticClass:"padding",on:{click:t.toggle}},[a("fa",{attrs:{icon:"times"}})],1)]),a("hr"),a("div",{staticClass:"padding overflow-auto"},[a("form",{on:{submit:function(e){e.preventDefault(),t.$parent.sendSmsToPhone(e)}}},[a("fieldset",[a("legend",[t._v("Enter your Mobile Number")]),a("div",{staticClass:"flex align-center justify-center"},[a("span",[t._v("+63")]),a("input",{attrs:{type:"number",id:"phone",name:"phone",required:"",placeholder:"XXXXXXXXXX",min:"9000000000",max:"9999999999",step:"1"}}),a("button",{attrs:{type:"submit",id:"sms-sign-in"}},[t._v("Send Code")])])])]),a("form",{on:{submit:function(e){e.preventDefault(),t.$parent.checkCode(e)}}},[a("fieldset",[a("legend",[t._v("Enter the code below")]),a("div",{staticClass:"flex align-center justify-center"},[a("input",{attrs:{type:"text",placeholder:"XXXXXX",id:"code",name:"code",required:""}}),a("br"),a("button",{attrs:{type:"submit"}},[t._v("Confirm")])])])])])]):t._e()])],1)},staticRenderFns:[]}})],1):t._e()},p=[],m=a("2b18"),g={components:{modal:m["a"]},methods:{sendSmsToPhone:function(t){var e="+63"+t.target.elements.phone.value;this.$store.dispatch("smsSignIn",e)},checkCode:function(t){var e=t.target.elements.code.value;this.$store.dispatch("smsSignInCheckCode",e)}}},h=g,v=(a("2269"),Object(c["a"])(h,f,p,!1,null,"60a6efd6",null));v.options.__file="sign-in-button.vue";var _=v.exports,b=a("d563"),C=a("37b7"),k={name:"home",components:{drawer:u,"sign-in-button":_,"account-button":b["a"],"notification-button":C["a"]},mounted:function(){console.log("calling loadCurrentUser from Home.vue"),this.$store.dispatch("loadCurrentUser")}},x=k,w=Object(c["a"])(x,s,i,!1,null,null,null);w.options.__file="Home.vue";e["default"]=w.exports},c17d:function(t,e,a){"use strict";var s=a("6c41"),i=a.n(s);i.a},c36e:function(t,e,a){},d281:function(t,e,a){},d563:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0!=Object.keys(t.$store.state.user).length?a("a",{staticClass:"padding-x padding-y-small flex align-center relative",attrs:{id:"account-button",tabindex:"0"}},[a("clazy-load",{attrs:{src:t.$store.state.user.photoURL}},[a("img",{staticClass:"smallimg margin-right-small category_image",attrs:{src:t.$store.state.user.photoURL}}),a("div",{staticClass:"smallimg margin-right-small category_image animated-background",attrs:{slot:"placeholder"},slot:"placeholder"})]),a("fa",{attrs:{icon:"angle-down"}}),a("div",{staticClass:"card padding flex column",staticStyle:{"min-width":"15rem"},attrs:{id:"context",tabindex:"1"}},[a("div",{staticClass:"padding-x padding-y-small flex align-center relative"},[a("clazy-load",{attrs:{src:t.$store.state.user.photoURL}},[a("img",{staticClass:"smallimg margin-right category_image",attrs:{src:t.$store.state.user.photoURL}}),a("div",{staticClass:"smallimg margin-right category_image animated-background",attrs:{slot:"placeholder"},slot:"placeholder"})]),a("h3",[t._v(t._s(t.$store.state.account_name))])],1),a("ul",{staticClass:"links remove-list-style flex column"},[a("li",[t.$store.getters.isAdmin?a("a",{staticClass:"padding block",attrs:{href:"/admin"}},[t._v("Admin Console")]):t._e()]),a("li",[a("router-link",{staticClass:"padding block",class:{active:"/account"==t.$route.path},attrs:{to:"/account"}},[t._v("My Account")])],1),a("li",[a("router-link",{staticClass:"padding block",class:{active:"/help"==t.$route.path},attrs:{to:"/help"}},[t._v("Help")])],1),a("li",[a("a",{staticClass:"padding block",attrs:{href:"#"},on:{click:function(e){t.$store.dispatch("signOut"),t.$router.push("/")}}},[t._v("Logout")])])])])],1):t._e()},i=[],n={},r=n,o=(a("2c6f"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,"4f8f0156",null);l.options.__file="account-button.vue";e["a"]=l.exports},eeab:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"padding-large",staticStyle:{height:"100%"}},[a("div",{staticClass:"flex justify-space-between align-center"},[a("h2",[t._v("My Bookings")]),a("button",{staticClass:"primary padding",on:{click:function(e){t.$router.push("/book")}}},[a("fa",{attrs:{icon:"plus"}}),a("span",{staticClass:"margin-left-small"},[t._v("New Booking")])],1)]),a("div",{staticClass:"margin-y"},[t._l(t.$store.getters.myBookings,function(e){return a("div",{staticClass:"card padding flex justify-space-between align-center margin-bottom-small"},[a("div",{staticClass:"flex"},[a("div",[a("h5",[t._v("DATE")]),a("br"),a("span",[t._v(t._s(e.booking_date))])]),a("div",{staticClass:"margin-left-large"},[a("h5",[t._v("STATUS")]),a("br"),a("transition",{attrs:{name:"switch-up",mode:"out-in"}},[a("span",{key:e.booking_status},[t._v(t._s(e.booking_status))])])],1)]),a("div",[a("button",{on:{click:function(a){t.logg("trying to show.."),t.$refs.booking.show(e),t.logg("should be shown")}}},[t._v("View")]),"COMPLETED"==e.booking_status?a("button",{staticClass:"margin-left-small primary",on:{click:function(a){t.$refs.orderPrints.show(e)}}},[t._v("Order Prints")]):t._e()])])}),0==t.$store.getters.myBookings.length?a("span",[t._v("No bookings to show.")]):t._e()],2)]),a("modal",{ref:"booking",inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(t){t.preventDefault()}}},[a("transition",{attrs:{name:"fade",appear:""}},[t.visible?a("div",{staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:t.toggle}}):t._e()]),a("transition",{attrs:{name:"center-scale",appear:""}},[t.visible?a("div",{staticClass:"card fixed-center flex column five-large seven-medium twelve-small max-high",attrs:{id:"modal"}},[a("div",{staticClass:"flex justify-space-between align-center wide"},[a("h2",{staticClass:"padding"},[t._v("Booking Details")]),a("a",{staticClass:"padding",on:{click:t.toggle}},[a("fa",{attrs:{icon:"times"}})],1)]),a("hr"),a("div",{staticClass:"padding overflow-auto"},[a("table",{staticClass:"wide"},[a("tr",[a("td",[t._v("Schedule")]),a("td",[t._v(t._s(t.params.booking_date))])]),a("tr",[a("td",[t._v("Status")]),a("td",[t._v(t._s(t.params.booking_status))])]),a("tr",[a("td",[t._v("Total Price")]),a("td",[t._v(t._s(t.params.booking_total_price))])]),a("tr",[a("td",[t._v("Payment Slip")]),a("td",["AWAITING_PAYMENT"==t.params.booking_status?a("fileupload",{ref:"fileupload"}):a("img",{attrs:{src:t.params.booking_deposit_slip}})],1)])]),a("form",[a("fieldset",[a("details",[a("summary",[t._v("Themes")]),a("br"),a("div",{staticClass:"grid grid-auto"},t._l(t.$parent.catchParse(t.params.booking_themes),function(e){return a("img",{staticStyle:{width:"100%","border-radius":"0.5rem"},attrs:{src:t.$store.getters.themes.find(function(t){return t.theme_id==e}).theme_image}})}),0)])])]),a("form",[a("fieldset",[a("details",[a("summary",[t._v("Package Details")]),a("br"),a("table",{staticClass:"wide"},[a("tr",[a("td",[t._v("Package Name")]),a("td",[t._v(t._s(t.$parent.catchParse(t.params.package).package_name))])]),a("tr",[a("td",[t._v("Package Description")]),a("td",[t._v(t._s(t.$parent.catchParse(t.params.package)["package_description"]))])]),a("tr",[a("td",[t._v("Duration")]),a("td",[t._v(t._s(t.$parent.catchParse(t.params.package)["package_minutes"]))])]),a("tr",[a("td",[t._v("Addons")]),a("td",[a("ul",t._l(t.$parent.catchParse(t.params.booking_addons),function(e){return a("li",[a("span",[t._v(t._s(e.addon_type)+" : "+t._s(e.addon_description)+" (P "+t._s(e.addon_price)+")")])])}),0)])])])])])]),a("br"),a("div",{staticClass:"flex"},["AWAITING_PAYMENT"==t.params.booking_status?a("button",{staticClass:"flex-grow",attrs:{type:"submit"},on:{click:function(e){t.$parent.submitPayment(t.params.booking_id),t.visible=!1}}},[t._v("Submit Payment")]):t._e()])])]):t._e()])],1)},staticRenderFns:[]}}),a("modal",{ref:"orderPrints",inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(t){t.preventDefault()}}},[a("transition",{attrs:{name:"fade",appear:""}},[t.visible?a("div",{staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:t.toggle}}):t._e()]),a("transition",{attrs:{name:"center-scale",appear:""}},[t.visible?a("div",{staticClass:"card fixed-center flex column five-large seven-medium twelve-small max-high",attrs:{id:"modal"}},[a("div",{staticClass:"flex justify-space-between align-center wide"},[a("h2",{staticClass:"padding"},[t._v("Order Prints")]),a("a",{staticClass:"padding",on:{click:t.toggle}},[a("fa",{attrs:{icon:"times"}})],1)]),a("hr"),a("div",{staticClass:"padding overflow-auto"},[a("form",{on:{submit:function(e){e.preventDefault(),t.$store.dispatch("placeOrder",e),t.visible=!1}}},[a("input",{attrs:{type:"hidden",name:"booking_id"},domProps:{value:t.params.booking_id}}),a("table",{staticClass:"wide"},t._l(t.$parent.catchParse(t.params.booking_addons),function(e,s){return"PRINT"==e.addon_type&&("PACKAGE"!=e.addon_source&&"BOOKING"!=e.addon_source||1!=t.params.booking_addons_isordered)?a("tr",[a("td",[a("span",{staticClass:"bold"},[t._v(t._s(e.addon_description)+" Print")]),a("br"),a("span",[t._v("("+t._s("PACKAGE"==e.addon_source?"Free from Package":"BOOKING"==e.addon_source?"Addon":"P"+e.addon_price)+")")])]),a("td",[a("input",{staticStyle:{"padding-left":"1rem"},attrs:{type:"text",addon:JSON.stringify(e),placeholder:"Filename of Photo",name:"addon"+s}})])]):t._e()}),0),a("br"),a("div",{staticClass:"flex"},[a("select",{ref:"selectedPrint"},t._l(t.$store.getters.addons.filter(function(t){return"PRINT"==t.addon_type}),function(e){return a("option",{domProps:{value:JSON.stringify(e)}},[t._v(t._s(e.addon_description))])}),0),a("button",{on:{click:function(e){e.preventDefault(),t.params.booking_addons=t.$parent.catchParse(t.params.booking_addons),t.params.booking_addons.push(t.$parent.catchParse(t.$refs.selectedPrint.value)),t.params.booking_addons=JSON.stringify(t.params.booking_addons)}}},[t._v("Add more prints")])]),a("span",[t._v("Total: Php "+t._s(t.$parent.getTotalPrice(t.params.booking_addons)))]),a("button",{staticClass:"wide primary justify-center",attrs:{type:"submit"}},[t._v("Place Order")])])])]):t._e()])],1)},staticRenderFns:[]}})],1)},i=[],n=(a("ac6a"),a("a481"),a("cadf"),a("551c"),a("097d"),a("2b18")),r={components:{modal:n["a"]},created:function(){this.$store.dispatch("getUserBookings",this.$store.getters.userId),this.$store.dispatch("loadThemes"),this.$store.dispatch("loadAddons")},methods:{catchParse:function(t){try{return JSON.parse(t.replace(/\n/g,"<br>"))}catch(e){console.error("catchParse: Error - can't parse "+t)}},logg:function(t){console.log(t)},submitPayment:function(t){console.log("Called Submit Payment"),console.log("imageurl:"+this.imageUrl);var e=new FormData;e.append("booking_id",t),e.append("deposit_slip",this.imageUrl),this.$store.dispatch("submitPayment",e)},getTotalPrice:function(t){var e=this.catchParse(t).filter(function(t){return"BOOKING"!=t.addon_source&&"PACKAGE"!=t.addon_source}).map(function(t){return t.addon_price}),a=0;return e.forEach(function(t){a+=t}),a}},computed:{imageUrl:function(){try{return this.$refs.booking.$refs.fileupload.imageUrl}catch(t){return""}}}},o=r,l=a("2877"),c=Object(l["a"])(o,s,i,!1,null,null,null);c.options.__file="dashboard-bookings.vue";e["default"]=c.exports},ef72:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"padding-large",staticStyle:{height:"100%"}},[t._m(0),a("div",{staticClass:"margin-y"},[t._l(t.$store.state.myOrders,function(e){return a("div",{staticClass:"card padding flex justify-space-between align-center margin-bottom-small"},[a("div",{staticClass:"flex"},[a("div",[a("h5",[t._v("DATE")]),a("br"),a("span",[t._v(t._s(e.order_created))])]),a("div",{staticClass:"margin-left-large"},[a("h5",[t._v("STATUS")]),a("br"),a("span",[t._v(t._s(e.order_status))])])]),a("div",[a("button",{on:{click:function(a){t.$refs.order.show(e)}}},[t._v("View Details")])])])}),0==t.$store.getters.myOrders.length?a("span",[t._v("No orders to show.")]):t._e()],2),a("modal",{ref:"order",inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:t.toggle}}):t._e()]),a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"card fixed-center flex column five-large seven-medium twelve-small max-high",attrs:{id:"modal"}},[a("div",{staticClass:"flex justify-space-between align-center wide"},[a("h2",{staticClass:"padding"},[t._v("Order Details")]),a("a",{staticClass:"padding",on:{click:t.toggle}},[a("fa",{attrs:{icon:"times"}})],1)]),a("hr"),a("div",{staticClass:"padding overflow-auto"},[a("table",{staticClass:"wide"},[a("thead",[a("tr",[a("th",[t._v("Print Size")]),a("th",[t._v("Filename")]),a("th",[t._v("Price")])])]),a("tbody",t._l(JSON.parse(t.params.order_list),function(e){return a("tr",[a("td",[t._v(t._s(e.addon.addon_description))]),a("td",[t._v(t._s(e.filename))]),a("td",[t._v(t._s(e.addon.addon_price))])])}),0)])])]):t._e()])],1)},staticRenderFns:[]}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("My Orders")])])}],n=(a("cadf"),a("551c"),a("097d"),a("2b18")),r={components:{modal:n["a"]},created:function(){this.$store.dispatch("getUserOrders",this.$store.getters.userId)}},o=r,l=a("2877"),c=Object(l["a"])(o,s,i,!1,null,null,null);c.options.__file="dashboard-orders.vue";e["default"]=c.exports},ff30:function(t,e,a){}}]);
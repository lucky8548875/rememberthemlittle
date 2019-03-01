(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c4d03b4"],{"2b18":function(e,t,a){"use strict";a("cadf"),a("551c"),a("097d");var i,s,r={props:["steps"],data:function(){return{step:1}},methods:{next:function(){this.step<this.steps&&this.step++},previous:function(){this.step>1&&this.step--}}},n=r,l=a("2877"),o=Object(l["a"])(n,i,s,!1,null,null,null);o.options.__file="stepper.vue";var c=o.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex column"},[""!=e.imageUrl&&0==e.uploading?a("img",{staticStyle:{width:"50%"},attrs:{src:e.imageUrl}}):e._e(),""==e.imageUrl&&""!=e.url?a("img",{staticStyle:{width:"50%"},attrs:{src:e.url}}):e._e(),1==e.uploading?a("span",{staticClass:"flex align-center"},[a("fa",{attrs:{icon:"sync-alt",spin:""}}),a("span",{staticClass:"margin-left-small"},[e._v("Please wait")])],1):e._e(),a("input",{ref:"fileupload",staticClass:"wide",attrs:{type:"file",accept:"image/x-png,image/gif,image/jpeg",required:e.required},on:{change:function(t){e.uploadFile()}}})])},p=[],u=a("bc3a"),g=a.n(u),m={props:{url:{type:String,default:""},required:{type:Boolean,default:!1}},data:function(){return{imageUrl:"",file:null,uploading:!1}},methods:{uploadFile:function(){var e=this;if(this.uploading=!0,this.file=this.$refs.fileupload.files[0],null!=this.file){var t=new FormData;t.append("image",this.file),g.a.post("/_system/php/functions/ftpupload.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),t.data.success?(e.imageUrl=t.data.data,e.uploading=!1,e.$emit("saveUrl",t.data.data)):console.log("Error in File Upload")}).catch(function(e){console.error(e)})}}}},v=m,f=Object(l["a"])(v,d,p,!1,null,null,null);f.options.__file="fileupload.vue";var y,_,h=f.exports,b={components:{fileupload:h,stepper:c},data:function(){return{params:{},visible:!1}},methods:{toggle:function(){this.visible=!this.visible},show:function(e){this.visible=!0,this.params=e}}},C=b,w=(a("371d"),Object(l["a"])(C,y,_,!1,null,"4da6ce68",null));w.options.__file="modal.vue";t["a"]=w.exports},"371d":function(e,t,a){"use strict";var i=a("d1e8"),s=a.n(i);s.a},"3fc2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"padding-large",staticStyle:{"padding-top":"7rem"}},[a("div",{staticClass:"flex wide justify-space-between"},[e._m(0),a("div",[a("button",{on:{click:function(t){e.$refs.newcategory.show()}}},[e._v("New Category")])])]),a("table",{staticClass:"wide"},e._l(e.$store.getters.categories,function(t){return a("tr",[a("td",[a("h3",{staticClass:"margin-bottom-small"},[e._v(e._s(t.category_name))]),a("span",[e._v(e._s(t.category_description))])]),a("td",[a("button",{staticClass:"float-right",on:{click:function(a){e.$refs.editcategory.show(t)}}},[e._v("Edit")])])])}),0),a("modal",{ref:"newcategory",inlineTemplate:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:e.toggle}})]),a("transition",{attrs:{name:"center-scale"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"card fixed-center flex column five-large seven-medium twelve-small max-high",attrs:{id:"modal"}},[a("div",{staticClass:"flex justify-space-between align-center wide"},[a("h2",{staticClass:"padding"},[e._v("New Category")]),a("a",{staticClass:"padding",on:{click:e.toggle}},[a("fa",{attrs:{icon:"times"}})],1)]),a("hr"),a("div",{staticClass:"padding overflow-auto"},[a("form",{staticClass:"flex column",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){t.preventDefault(),e.$parent.prepareAddCategory(t),e.visible=!1}}},[a("label",[e._v("Category Name")]),a("input",{attrs:{type:"text",name:"category_name",value:""}}),a("label",[e._v("Category Description")]),a("input",{attrs:{type:"text",name:"category_description",value:""}}),a("label",[e._v("Image")]),a("fileupload",{ref:"fileupload",attrs:{url:""}}),a("label",[a("input",{attrs:{type:"checkbox",name:"category_active",value:""}}),a("span",[e._v("Active")])]),a("div",[a("button",{on:{click:function(t){t.preventDefault(),e.visible=!1}}},[e._v("Cancel")]),a("button",[e._v("Add Category")])])],1)])])])],1)},staticRenderFns:[]}}),a("modal",{ref:"editcategory",inlineTemplate:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"fixed-fill",attrs:{id:"backdrop"},on:{click:e.toggle}})]),a("transition",{attrs:{name:"center-scale"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"card fixed-center flex column five-large seven-medium twelve-small max-high",attrs:{id:"modal"}},[a("div",{staticClass:"flex justify-space-between align-center wide"},[a("h2",{staticClass:"padding"},[e._v("Edit Category")]),a("a",{staticClass:"padding",on:{click:e.toggle}},[a("fa",{attrs:{icon:"times"}})],1)]),a("hr"),a("div",{staticClass:"padding overflow-auto"},[a("form",{staticClass:"flex column",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){t.preventDefault(),e.$parent.prepareEditCategory(t),e.visible=!1}}},[a("input",{attrs:{type:"hidden",name:"category_id"},domProps:{value:e.params.category_id}}),a("label",[e._v("Category Name")]),a("input",{attrs:{type:"text",name:"category_name"},domProps:{value:e.params.category_name}}),a("label",[e._v("Category Description")]),a("input",{attrs:{name:"category_description"},domProps:{value:e.params.category_description}}),a("label",[e._v("Image")]),a("fileupload",{key:e.params.category_id,ref:"fileupload",attrs:{url:e.params.category_image}}),a("label",{staticClass:"padding-y"},[a("input",{staticClass:"margin-right-small",attrs:{type:"checkbox",name:"category_active"},domProps:{checked:e.params.category_active}}),a("span",[e._v("Active")])]),a("div",[a("button",{on:{click:function(t){t.preventDefault(),e.$store.dispatch("deleteCategory",e.params.category_id),e.visible=!1}}},[e._v("Delete")]),a("button",{attrs:{type:"submit"}},[e._v("Update Category")])])],1)])])])],1)},staticRenderFns:[]}})],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Categories")])])}],r=a("2b18"),n={components:{modal:r["a"]},methods:{prepareEditCategory:function(e){console.log("Prepare Edit Category Called");var t=this.$refs.editcategory.$refs.fileupload.imageUrl,a=this.$refs.editcategory.$refs.fileupload.url,i="";i=""==t?a:t;var s=e.target.elements,r=s.category_id.value,n=s.category_name.value,l=s.category_description.value,o=i,c=s.category_active.checked?1:0,d=new FormData;d.append("category_id",r),d.append("category_name",n),d.append("category_description",l),d.append("category_image",o),d.append("category_active",c),this.$store.dispatch("editCategory",d)},prepareAddCategory:function(e){console.log("Prepare Add Category Called");var t=this.$refs.newcategory.$refs.fileupload.imageUrl,a=e.target.elements,i=a.category_name.value,s=a.category_description.value,r=t,n=a.category_active.checked?1:0,l=new FormData;l.append("category_name",i),l.append("category_description",s),l.append("category_image",r),l.append("category_active",n),this.$store.dispatch("addCategory",l)}}},l=n,o=a("2877"),c=Object(o["a"])(l,i,s,!1,null,null,null);c.options.__file="admin-categories.vue";t["default"]=c.exports},d1e8:function(e,t,a){}}]);
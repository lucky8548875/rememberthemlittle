(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bdd2e7a"],{"1c26":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"package"}},[o("div",{staticClass:"packages_container padding-top-large"},e._l(e.$store.getters.packages.filter(function(t){return t.category_id==e.$store.getters.selectedCategoryId&&t.package_active}),function(t){return o("div",{staticClass:"package",style:{border:t.package_promo?"2px solid #ffb712":"0"}},[o("h3",{staticClass:"package_name margin-bottom",staticStyle:{"font-weight":"bold"}},[e._v(e._s(t.package_name))]),o("h4",{staticClass:"package_price margin-bottom",staticStyle:{"font-weight":"bold"}},[e._v("Php "+e._s(t.package_price))]),o("p",{staticClass:"package_description margin-bottom",domProps:{innerHTML:e._s(t.package_description.replace(new RegExp("\n","g"),"<br>"))}}),o("a",{staticClass:"choose_package text-center",on:{click:function(o){e.choosePackage(t)}}},[e._v("Choose Package")]),t.package_promo?o("div",{staticClass:"promonote"},[e._v("Promo!")]):e._e()])}),0)])},s=[],i=(o("7514"),{methods:{choosePackage:function(e){this.$store.dispatch("setBookingPackage",e);var t=[];for(var o in this.$store.getters.inclusions)if(this.$store.getters.inclusions[o].package_id==e.package_id){console.log("Compatible addon: "+this.$store.getters.inclusions[o].addon_id);var a=this.getAddon(this.$store.getters.inclusions[o].addon_id);console.log("Found: "+a.addon_description);var s={addon_id:a.addon_id,addon_type:a.addon_type,addon_description:a.addon_description,addon_price:0,addon_source:"PACKAGE"};t.push(s)}this.$store.commit("setBookingAddons",t),this.$router.push("/book/theme")},getAddon:function(e){return this.$store.getters.addons.find(function(t){return t.addon_id==e})}}}),n=i,c=(o("9d24"),o("2877")),d=Object(c["a"])(n,a,s,!1,null,"059b5202",null);d.options.__file="book-package.vue";t["default"]=d.exports},"9d24":function(e,t,o){"use strict";var a=o("e603"),s=o.n(a);s.a},e603:function(e,t,o){}}]);
webpackJsonp([9],{eJle:function(t,e){},ep2l:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"msg",data:function(){var t=this;return{info:{input:""},total:0,columns:[{title:"Item",key:"item",render:function(e,i){var n=i.row.item;return e("Input",{props:{value:n},style:{outline:0},on:{"on-change":function(t){n=t.target.value},"on-enter":function(){t.handleSave(i.row),console.log("回车事件Item",i.row),t.$emit("input",event.target.value),console.log("input",event.target.value)}}})}},{title:"Descritpion",key:"descritpion",render:function(t,e){var i=e.row.descritpion;return t("Input",{props:{value:i},on:{"on-change":function(t){i=t.target.value}}})}},{title:"Order Quantity",key:"orderQuantity",render:function(t,e){var i=e.row.orderQuantity;return t("Input",{props:{value:i},on:{"on-change":function(t){i=t.target.value}}})}},{title:"Sales Uinit",key:"salesUinit",render:function(t,e){var i=e.row.salesUinit;return t("Input",{props:{value:i},on:{"on-change":function(t){i=t.target.value}}})}},{title:"high Level Item",key:"highLevelItem",render:function(t,e){var i=e.row.highLevelItem;return t("Input",{props:{value:i},on:{"on-change":function(t){i=t.target.value}}})}},{title:"Net Price",key:"netPrice",render:function(t,e){var i=e.row.netPrice;return t("Input",{props:{value:i},on:{"on-change":function(t){i=t.target.value}}})}},{title:"Amount",key:"amount",render:function(t,e){var i=e.row.amount;return t("Input",{props:{value:i},on:{"on-change":function(t){i=t.target.value}}})}}],data:[{item:10,descritpion:"Lenovo小新Air15IKBRCI78550U8G25610H",orderQuantity:"",salesUinit:"EA",highLevelItem:"",netPrice:"$100",amount:"$1,000",$isEdit:!1},{item:20,descritpion:"NoteBook TP X240 8G 256 W8PD",orderQuantity:"",salesUinit:"EA",highLevelItem:"",netPrice:"$1,000",amount:"$1,000",$isEdit:!1},{item:30,descritpion:"NoteBook TP X250 8G 256 W8PD",orderQuantity:"",salesUinit:"EA",highLevelItem:"",netPrice:"$1,000",amount:"$1,000",$isEdit:!1},{item:40,descritpion:"NoteBook TP X260 8G 256 W8PD",orderQuantity:"",salesUinit:"EA",highLevelItem:"",netPrice:"$1,000",amount:"$1,000",$isEdit:!1}]}},methods:{handleEdit:function(t){this.$set(t,"$isEdit",!0)},handleSave:function(t){this.$set(t,"$isEdit",!1)},clear:function(){alert("Clear")},search:function(){alert("Search")},addOk:function(){console.log(111)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"loui-search-filed",staticStyle:{"margin-bottom":"20px",padding:"10px 36px 10px 0"}},[i("Button",{attrs:{icon:"md-add",type:"primary"}},[t._v("Download")]),t._v(" "),i("Button",{attrs:{icon:"ios-settings",type:"primary"}},[t._v("Download")]),t._v(" "),i("Button",{attrs:{icon:"ios-download-outline",type:"primary"}},[t._v("Download")])],1),t._v(" "),i("div",{staticClass:"loui-search-filed"},[i("div",{staticClass:"loui-search-filed-text"},[t._v("Sales Order Creation")]),t._v(" "),i("Form",{attrs:{model:t.info,"label-position":"right",inline:""}},[i("FormItem",{attrs:{label:"Type","label-width":150}},[i("Select",{staticStyle:{width:"250px"},attrs:{clearable:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}},[i("Option",{attrs:{value:""}},[t._v("全部")]),t._v(" "),i("Option",{attrs:{value:0}},[t._v("1")]),t._v(" "),i("Option",{attrs:{value:1}},[t._v("2")])],1)],1),t._v(" "),i("FormItem",{attrs:{label:"Order ID","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Customer PO","label-width":150}},[i("Input",{staticStyle:{width:"250px"},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Sold-To Party","label-width":150}},[i("Input",{staticStyle:{width:"250px"},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Partner Number","label-width":150}},[i("Input",{staticStyle:{width:"250px"},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Sold-To Party Address","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Sales Area","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Order Reason","label-width":150}},[i("Input",{staticStyle:{width:"250px"},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Status","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Rejection Status","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Credit Status","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Posting Date","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Request. Deliv. Date","label-width":150}},[i("Input",{staticStyle:{width:"250px"},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Created At","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Net Value","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Tax Amount","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Gross Value","label-width":150}},[i("Input",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:t.info.input,callback:function(e){t.$set(t.info,"input",e)},expression:"info.input"}})],1)],1)],1),t._v(" "),i("div",{staticStyle:{both:"clear"}}),t._v(" "),i("Table",{staticStyle:{"margin-bottom":"20px"},attrs:{columns:t.columns,data:t.data}})],1)},staticRenderFns:[]};var o=i("VU/8")(n,a,!1,function(t){i("eJle")},"data-v-529cbbf4",null);e.default=o.exports}});
//# sourceMappingURL=9.fc840bdc6ce1ea68478e.js.map
(function(e){function t(t){for(var n,l,r=t[0],o=t[1],c=t[2],u=0,h=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&h.push(i[l][0]),i[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={app:0},s=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("8bbf"),i=a.n(n),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-admin-table",class:{"vue-admin-table-padded":e.padded},attrs:{id:e.tableId}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showToolbar,expression:"showToolbar"}],staticClass:"toolbar"},[a("div",{staticClass:"flex"},[e._l(e.actions,(function(t,n){return a("div",{key:n},[a("admin-table-action-button",{attrs:{label:t.label,icon:t.icon,action:t.action,actions:t.actions,ids:e.checks,enabled:!!e.checks.length},on:{reload:e.reload}})],1)})),e.search&&!e.tableData.length?a("div",{staticClass:"flex-grow texticon search icon clearable"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"text fullwidth",attrs:{type:"text",autocomplete:"off",placeholder:e.searchPlaceholderText},domProps:{value:e.searchTerm},on:{input:[function(t){t.target.composing||(e.searchTerm=t.target.value)},e.handleSearch]}}),a("div",{staticClass:"clear hidden",attrs:{title:e.searchClearTitle}})]):e._e()],2)]),a("div",{class:{"content-pane":e.fullPage}},[this.isEmpty?a("div",{staticClass:"zilch"},[a("p",[e._v(e._s(e.emptyMessage))])]):e._e(),a("div",{staticClass:"tableview",class:{loading:e.isLoading,hidden:this.isEmpty}},[a("div",{staticClass:"tablepane vue-admin-tablepane"},[a("vuetable",{ref:"vuetable",attrs:{"append-params":e.appendParams,"api-mode":!!e.apiUrl,"api-url":e.apiUrl,css:e.tableCss,data:e.tableData,"detail-row-component":e.detailRow,fields:e.fields,"per-page":e.perPage,"pagination-path":"pagination"},on:{"vuetable:loaded":e.init,"vuetable:loading":e.loading,"vuetable:pagination-data":e.onPaginationData},scopedSlots:e._u([{key:"checkbox",fn:function(t){return[a("admin-table-checkbox",{attrs:{id:t.rowData.id,checks:e.checks},on:{addCheck:e.addCheck,removeCheck:e.removeCheck}})]}},{key:"title",fn:function(t){return[void 0!==t.rowData.status?a("span",{staticClass:"status",class:{enabled:t.rowData.status}}):e._e(),t.rowData.url?a("a",{staticClass:"cell-bold",attrs:{href:t.rowData.url}},[e._v(e._s(t.rowData.title))]):e._e(),t.rowData.url?e._e():a("span",{staticClass:"cell-bold"},[e._v(e._s(t.rowData.title))])]}},{key:"handle",fn:function(t){return[a("code",[e._v(e._s(t.rowData.handle))])]}},{key:"menu",fn:function(t){return[t.rowData.menu.showItems?[a("a",{attrs:{href:t.rowData.menu.url}},[e._v(e._s(t.rowData.menu.label)+" ("+e._s(t.rowData.menu.items.length)+")")]),a("a",{staticClass:"menubtn",attrs:{title:t.rowData.menu.label}}),a("div",{staticClass:"menu"},[a("ul",e._l(t.rowData.menu.items,(function(t,n){return a("li",{key:n},[a("a",{attrs:{href:t.url}},[e._v(e._s(t.label))])])})),0)])]:[a("a",{attrs:{href:t.rowData.menu.url}},[e._v(e._s(t.rowData.menu.label))])]]}},{key:"detail",fn:function(t){return[t.rowData.detail.content?a("div",{staticStyle:{cursor:"pointer"},domProps:{innerHTML:e._s(t.rowData.detail.handle)},on:{click:function(a){return e.handleDetailRow(t.rowData.id)}}}):e._e()]}},{key:"reorder",fn:function(t){return[a("i",{staticClass:"move icon vue-table-move-handle",class:{disabled:!e.canReorder},attrs:{"data-id":t.rowData.id}})]}},{key:"delete",fn:function(t){return[void 0==t.rowData._showDelete||1==t.rowData._showDelete?a("admin-table-delete-button",{attrs:{id:t.rowData.id,name:t.rowData.title,"success-message":e.deleteSuccessMessage,"confirmation-message":e.deleteConfirmationMessage,"fail-message":e.deleteFailMessage,"action-url":e.deleteAction,disabled:!e.canDelete},on:{reload:function(a){return e.remove(t.rowIndex)}}}):e._e()]}}])})],1),a("admin-table-pagination",{ref:"pagination",attrs:{itemLabels:e.itemLabels},on:{"vuetable-pagination:change-page":e.onChangePage}})],1)])])},l=[],r=(a("386d"),a("a481"),a("6b54"),a("ac6a"),a("75fc")),o=(a("c5f6"),a("c3d0")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.tablePagination?a("div",{staticClass:"vue-admin-table-pagination flex pagination"},[a("div",{staticClass:"page-link",class:[e.isOnFirstPage?"disabled":""],attrs:{"data-icon":"leftangle",title:"Previous Page"},on:{click:function(t){return e.loadPage("prev")}}}),a("div",{staticClass:"page-link",class:[e.isOnLastPage?"disabled":""],attrs:{"data-icon":"rightangle",title:"Next Page"},on:{click:function(t){return e.loadPage("next")}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.tablePagination,expression:"tablePagination"}],staticClass:"page-info"},[e._v(e._s(e.tablePagination.from)+"-"+e._s(e.tablePagination.to)+" of "+e._s(e.paginationTotal)+" "+e._s(e.countWording))])]):e._e()},d=[],u=a("eb37"),h={name:"AdminTablePagination",mixins:[u["a"]],props:{itemLabels:{type:Object,default:function(){return{singular:Craft.t("app","Item"),plural:Craft.t("app","Items")}}}},computed:{countWording:function(){return 1==this.tablePagination.total?this.itemLabels.singular:this.itemLabels.plural},paginationTotal:function(){return this.tablePagination&&this.tablePagination.total?Craft.formatNumber(this.tablePagination.total):0}}},f=h,p=(a("5dba"),a("2877")),b=Object(p["a"])(f,c,d,!1,null,null,null),m=b.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"delete icon",class:{disabled:e.disabled},attrs:{title:e._f("t")("Delete","app"),role:"button",href:"#"},on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}})},v=[],C=(a("7f7f"),a("cebe")),k=a.n(C),y={name:"AdminTableDeleteButton",props:{actionUrl:String,confirmationMessage:String,disabled:Boolean,failMessage:String,id:[Number,String],name:String,successMessage:String},data:function(){return{}},computed:{success:function(){var e=void 0!==this.successMessage?Craft.t("site",this.successMessage,{name:this.name}):Craft.t("app","“{name}” deleted.",{name:this.name});return Craft.escapeHtml(e)},confirm:function(){var e=void 0!==this.confirmationMessage?Craft.t("site",this.confirmationMessage,{name:this.name}):Craft.t("app","Are you sure you want to delete “{name}”?",{name:this.name});return Craft.escapeHtml(e)},failed:function(){var e=void 0!==this.failMessage?Craft.t("site",this.failMessage,{name:this.name}):Craft.t("app","Couldn’t delete “{name}”.",{name:this.name});return Craft.escapeHtml(e)}},methods:{confirmDelete:function(){return confirm(this.confirm)},handleClick:function(){var e=this;!this.disabled&&this.confirmDelete()&&k.a.post(Craft.getActionUrl(this.actionUrl),{id:this.id},{headers:{"X-CSRF-Token":Craft.csrfTokenValue}}).then((function(t){t.data&&void 0!==t.data.success&&t.data.success?(Craft.cp.displayNotice(e.success),e.$emit("reload")):Craft.cp.displayError(e.failed)}))}}},w=y,_=Object(p["a"])(w,g,v,!1,null,"17492936",null),S=_.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"checkbox",class:{checked:e.isChecked},attrs:{title:e.title},on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}})},P=[],x={name:"AdminTableCheckbox",props:{id:Number,selectAll:Boolean,checks:Array},data:function(){return{}},computed:{isChecked:function(){return-1!==this.checks.indexOf(this.id)},title:function(){return Craft.escapeHtml(Craft.t("app","Select"))}},methods:{handleClick:function(){this.isChecked?this.$emit("removeCheck",this.id):this.$emit("addCheck",this.id)}}},A=x,M=Object(p["a"])(A,D,P,!1,null,"3bbf8e67",null),T=M.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{ref:"form",attrs:{method:"post"}},[a("input",{attrs:{type:"hidden",name:e.tokenName},domProps:{value:e.tokenValue}}),a("input",{attrs:{type:"hidden",name:"action"},domProps:{value:e.action}}),a("input",{attrs:{type:"hidden",name:e.param},domProps:{value:e.value}}),e._l(e.ids,(function(e,t){return a("input",{key:t,attrs:{type:"hidden",name:"ids[]"},domProps:{value:e}})})),a("div",{ref:"button",staticClass:"btn menubtn",attrs:{"data-icon":e.icon}},[e._v(e._s(e.label))]),e.actions.length?a("div",{staticClass:"menu"},[a("ul",{staticClass:"padded"},e._l(e.actions,(function(t,n){return a("li",{key:n},[a("a",{class:{error:void 0!==t.error&&t.error,disabled:void 0!==t.allowMultiple&&!t.allowMultiple&&e.hasMultipleSelected},attrs:{href:"#","data-param":t.param,"data-value":t.value,"data-ajax":t.ajax},on:{click:function(a){a.preventDefault(),(void 0===t.allowMultiple||t.allowMultiple||!e.hasMultipleSelected)&&e.handleClick(t.param,t.value,t.action,t.ajax)}}},[t.status?a("span",{class:"status "+t.status}):e._e(),e._v(e._s(t.label)+"\n        ")])])})),0)]):e._e()],2)},j=[],L={name:"AdminTableActionButton",props:{action:String,actions:Array,enabled:Boolean,ids:Array,label:String,icon:String},data:function(){return{button:null,tokenName:Craft.csrfTokenName,tokenValue:Craft.csrfTokenValue,param:"",value:""}},methods:{handleClick:function(e,t,a,n){var i=this;if(n){var s={ids:this.ids};s[e]=t,Craft.postActionRequest(a,s,(function(e){e.success&&Craft.cp.displayNotice(Craft.escapeHtml(Craft.t("app","Updated."))),i.$emit("reload")}))}else this.action=a,this.param=e,this.value=t,this.$nextTick((function(){i.$refs.form.submit()}))}},computed:{hasMultipleSelected:function(){return this.ids.length>1}},watch:{enabled:function(){this.enabled?(this.button.removeClass("disabled"),this.button.data("menubtn").enable()):(this.button.addClass("disabled"),this.button.data("menubtn").disable())}},mounted:function(){var e=this;this.$nextTick((function(){Craft.initUiElements(e.$refs.form),e.button=$(e.$refs.button),e.button.data("menubtn").disable(),e.button.addClass("disabled")}))}},E=L,N=Object(p["a"])(E,O,j,!1,null,"6e2d3578",null),B=N.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.rowData.detail.content?a("div",{domProps:{innerHTML:e._s(e.rowData.detail.content)}}):e._e()},I=[],H={name:"AdminTableDeleteButton",props:{rowData:{type:Object,required:!0},rowIndex:{type:Number},options:{type:Object}},data:function(){return{}}},F=H,U=Object(p["a"])(F,R,I,!1,null,"7c9832a1",null),V=U.exports,q=a("aa47"),J=a("2ef0"),W={components:{Vuetable:o["a"],AdminTablePagination:m,AdminTableCheckbox:T,AdminTableDeleteButton:S,AdminTableActionButton:B},props:{container:{type:String},actions:{type:Array,default:function(){return[]}},allowMultipleSelections:{type:Boolean,default:!0},checkboxes:{type:Boolean,default:!1},columns:{type:Array,default:function(){return[]}},deleteAction:{type:String,default:null},deleteCallback:{type:Function},deleteConfirmationMessage:{type:String},deleteFailMessage:{type:String},deleteSuccessMessage:{type:String},emptyMessage:{type:String,default:Craft.t("app","No data available.")},fullPage:{type:Boolean,default:!1},itemLabels:{type:Object,default:function(){return{singular:Craft.t("app","Item"),plural:Craft.t("app","Items")}}},minItems:{type:Number},padded:{type:Boolean,default:!1},perPage:{type:Number,default:40},reorderAction:{type:String},reorderSuccessMessage:{type:String,default:Craft.t("app","Items reordered.")},reorderFailMessage:{type:String,default:Craft.t("app","Couldn’t reorder items.")},search:{type:Boolean,default:!1},searchPlaceholder:{type:String,default:Craft.t("app","Search")},tableData:{type:Array,default:function(){return[]}},tableDataEndpoint:{type:String}},data:function(){return{checks:[],currentPage:1,detailRow:V,dragging:!1,isEmpty:!1,isLoading:!0,searchClearTitle:Craft.escapeHtml(Craft.t("app","Clear")),searchTerm:null,selectAll:null,sortable:null,tableBodySelector:".vuetable-body",tableClass:"data fullwidth"}},methods:{init:function(){var e=this,t=this.$el.querySelector(this.tableBodySelector);this.canReorder&&(this.sortable=q["a"].create(t,{animation:150,handle:".move.icon",ghostClass:"vue-admin-table-drag",onSort:this.handleReorder,onStart:this.startReorder,onEnd:this.endReorder})),this.isEmpty=!this.$refs.vuetable.tableData.length,this.$nextTick((function(){e.$refs.vuetable&&(e.selectAll=e.$refs.vuetable.$el.querySelector(".selectallcontainer"),e.selectAll&&e.allowMultipleSelections&&e.selectAll.addEventListener("click",e.handleSelectAll))})),this.isLoading=!1},loading:function(){this.isLoading=!0},startReorder:function(){this.dragging=!0},endReorder:function(){this.dragging=!1},handleReorder:function(e){var t=this,a=Object(r["a"])(e.target.querySelectorAll(".vue-table-move-handle"));if(a.length){var n=Object(J["map"])(a,(function(e){return e.dataset.id})),i={ids:JSON.stringify(n),startPosition:1+(this.currentPage>1?(this.currentPage-1)*this.perPage:0)};Craft.postActionRequest(this.reorderAction,i,(function(e){e&&e.success&&Craft.cp.displayNotice(Craft.escapeHtml(t.reorderSuccessMessage))}))}else Craft.cp.displayError(Craft.escapeHtml(this.reorderFailMessage))},addCheck:function(e){-1===this.checks.indexOf(e)&&(this.checks.length>=1&&!this.allowMultipleSelections&&(this.checks=[]),this.checks.push(e)),this.$emit("onSelect",this.checks)},removeCheck:function(e){var t=this.checks.indexOf(e);t>=0&&this.checks.splice(t,1),this.$emit("onSelect",this.checks)},handleSearch:Object(J["debounce"])((function(){this.$refs.vuetable&&this.$refs.vuetable.gotoPage(1),this.reload()}),350),handleSelectAll:function(){var e=this,t=this.$refs.vuetable.tableData;this.checks.length!=t.length?t.forEach((function(t){e.addCheck(t.id)})):this.checks=[],this.$emit("onSelect",this.checks)},handleDetailRow:function(e){this.$refs.vuetable.toggleDetailRow(e)},deselectAll:function(){this.checks=[],this.$emit("onSelect",this.checks)},reload:function(){this.isLoading=!0,this.deselectAll(),this.$refs.vuetable.reload()},remove:function(e){this.isLoading=!0,this.apiUrl?(this.deselectAll(),this.$refs.vuetable.reload()):(Vue.delete(this.$refs.vuetable.tableData,e),this.$refs.vuetable.refresh()),this.deleteCallback&&"[object Function]"==={}.toString.call(this.deleteCallback)&&this.deleteCallback(),this.isLoading=!1},onPaginationData:function(e){this.currentPage=e.current_page,this.$refs.pagination.setPaginationData(e),this.deselectAll()},onChangePage:function(e){this.$refs.vuetable.changePage(e),this.deselectAll()}},computed:{tableId:function(){return this.container?this.container.replace(/[#.]/g,""):""},apiUrl:function(){return this.tableDataEndpoint?Craft.getActionUrl(this.tableDataEndpoint):""},appendParams:function(){return this.searchTerm?{search:this.searchTerm}:{}},canDelete:function(){return!(this.minItems&&this.$refs.vuetable.tableData.length<=this.minItems)},canReorder:function(){return this.$refs.vuetable.tableData.length>1&&this.reorderAction&&this.$el.querySelector(this.tableBodySelector)&&!this.$refs.vuetable.tablePagination},fields:function(){var e=this,t=[];if(this.checkboxes){var a="";this.allowMultipleSelections&&(a='<div class="checkbox-cell selectallcontainer" role="checkbox" tabindex="0" aria-checked="false"><div class="checkbox"></div></div>'),t.push({name:"__slot:checkbox",titleClass:"thin",title:a,dataClass:"checkbox-cell"})}var n=Object(J["map"])(this.columns,(function(t){return e.reorderAction&&t.hasOwnProperty("sortField")&&delete t.sortField,t.title=Craft.escapeHtml(t.title),t}));return t=[].concat(Object(r["a"])(t),Object(r["a"])(n)),this.reorderAction&&t.push({name:"__slot:reorder",title:"",titleClass:"thin"}),this.deleteAction&&t.push({name:"__slot:delete",titleClass:"thin"}),t},searchPlaceholderText:function(){return Craft.escapeHtml(this.searchPlaceholder)},showToolbar:function(){return this.actions.length||this.search&&!this.tableData.length},tableCss:function(){var e=this.tableClass;return this.dragging&&(e+=" vue-admin-table-dragging"),{ascendingClass:"ordered asc",descendingClass:"ordered desc",sortableIcon:"orderable",handleIcon:"move icon",loadingClass:"loading",tableClass:e}}},watch:{checks:function(){if(this.selectAll){var e=this.selectAll.querySelector(".checkbox");this.checks.length&&this.checks.length==this.$refs.vuetable.tableData.length?(e.classList.add("checked"),e.classList.remove("indeterminate")):this.checks.length&&this.checks.length!=this.$refs.vuetable.tableData.length?(e.classList.remove("checked"),e.classList.add("indeterminate")):(e.classList.remove("checked"),e.classList.remove("indeterminate"))}}}},z=W,G=(a("5c0b"),Object(p["a"])(z,s,l,!1,null,null,null)),X=G.exports;function K(e,t,a){return Craft.t(t,e,a)}i.a.filter("t",K),Craft.VueAdminTable=Garnish.Base.extend({init:function(e){this.setSettings(e,Craft.VueAdminTable.defaults);var t=this.settings;return new i.a({components:{App:X},data:function(){return{}},render:function(e){return e(X,{props:t})}}).$mount(this.settings.container)}},{defaults:{actions:[],checkboxes:!1,columns:[],container:null,deleteAction:null,reorderAction:null,reorderSuccessMessage:Craft.t("app","Items reordered."),reorderFailMessage:Craft.t("app","Couldn’t reorder items."),search:!1,searchPlaceholder:Craft.t("app","Search"),tableData:[],tableDataEndpoint:null}})},"5c0b":function(e,t,a){"use strict";var n=a("e332"),i=a.n(n);i.a},"5dba":function(e,t,a){"use strict";var n=a("bb1a"),i=a.n(n);i.a},"8bbf":function(e,t){e.exports=Vue},bb1a:function(e,t,a){},cebe:function(e,t){e.exports=axios},e332:function(e,t,a){}});
//# sourceMappingURL=app.js.map
// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48884 = arguments.length;
var i__4731__auto___48885 = (0);
while(true){
if((i__4731__auto___48885 < len__4730__auto___48884)){
args__4736__auto__.push((arguments[i__4731__auto___48885]));

var G__48886 = (i__4731__auto___48885 + (1));
i__4731__auto___48885 = G__48886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__48876_48887 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__48877_48888 = null;
var count__48878_48889 = (0);
var i__48879_48890 = (0);
while(true){
if((i__48879_48890 < count__48878_48889)){
var k_48891 = cljs.core._nth.call(null,chunk__48877_48888,i__48879_48890);
e.setAttribute(cljs.core.name.call(null,k_48891),cljs.core.get.call(null,attrs,k_48891));


var G__48892 = seq__48876_48887;
var G__48893 = chunk__48877_48888;
var G__48894 = count__48878_48889;
var G__48895 = (i__48879_48890 + (1));
seq__48876_48887 = G__48892;
chunk__48877_48888 = G__48893;
count__48878_48889 = G__48894;
i__48879_48890 = G__48895;
continue;
} else {
var temp__5457__auto___48896 = cljs.core.seq.call(null,seq__48876_48887);
if(temp__5457__auto___48896){
var seq__48876_48897__$1 = temp__5457__auto___48896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48876_48897__$1)){
var c__4550__auto___48898 = cljs.core.chunk_first.call(null,seq__48876_48897__$1);
var G__48899 = cljs.core.chunk_rest.call(null,seq__48876_48897__$1);
var G__48900 = c__4550__auto___48898;
var G__48901 = cljs.core.count.call(null,c__4550__auto___48898);
var G__48902 = (0);
seq__48876_48887 = G__48899;
chunk__48877_48888 = G__48900;
count__48878_48889 = G__48901;
i__48879_48890 = G__48902;
continue;
} else {
var k_48903 = cljs.core.first.call(null,seq__48876_48897__$1);
e.setAttribute(cljs.core.name.call(null,k_48903),cljs.core.get.call(null,attrs,k_48903));


var G__48904 = cljs.core.next.call(null,seq__48876_48897__$1);
var G__48905 = null;
var G__48906 = (0);
var G__48907 = (0);
seq__48876_48887 = G__48904;
chunk__48877_48888 = G__48905;
count__48878_48889 = G__48906;
i__48879_48890 = G__48907;
continue;
}
} else {
}
}
break;
}

var seq__48880_48908 = cljs.core.seq.call(null,children);
var chunk__48881_48909 = null;
var count__48882_48910 = (0);
var i__48883_48911 = (0);
while(true){
if((i__48883_48911 < count__48882_48910)){
var ch_48912 = cljs.core._nth.call(null,chunk__48881_48909,i__48883_48911);
e.appendChild(ch_48912);


var G__48913 = seq__48880_48908;
var G__48914 = chunk__48881_48909;
var G__48915 = count__48882_48910;
var G__48916 = (i__48883_48911 + (1));
seq__48880_48908 = G__48913;
chunk__48881_48909 = G__48914;
count__48882_48910 = G__48915;
i__48883_48911 = G__48916;
continue;
} else {
var temp__5457__auto___48917 = cljs.core.seq.call(null,seq__48880_48908);
if(temp__5457__auto___48917){
var seq__48880_48918__$1 = temp__5457__auto___48917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48880_48918__$1)){
var c__4550__auto___48919 = cljs.core.chunk_first.call(null,seq__48880_48918__$1);
var G__48920 = cljs.core.chunk_rest.call(null,seq__48880_48918__$1);
var G__48921 = c__4550__auto___48919;
var G__48922 = cljs.core.count.call(null,c__4550__auto___48919);
var G__48923 = (0);
seq__48880_48908 = G__48920;
chunk__48881_48909 = G__48921;
count__48882_48910 = G__48922;
i__48883_48911 = G__48923;
continue;
} else {
var ch_48924 = cljs.core.first.call(null,seq__48880_48918__$1);
e.appendChild(ch_48924);


var G__48925 = cljs.core.next.call(null,seq__48880_48918__$1);
var G__48926 = null;
var G__48927 = (0);
var G__48928 = (0);
seq__48880_48908 = G__48925;
chunk__48881_48909 = G__48926;
count__48882_48910 = G__48927;
i__48883_48911 = G__48928;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq48873){
var G__48874 = cljs.core.first.call(null,seq48873);
var seq48873__$1 = cljs.core.next.call(null,seq48873);
var G__48875 = cljs.core.first.call(null,seq48873__$1);
var seq48873__$2 = cljs.core.next.call(null,seq48873__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48874,G__48875,seq48873__$2);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_48929 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_48929.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_48929.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_48929.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_48929);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__48930,st_map){
var map__48931 = p__48930;
var map__48931__$1 = (((((!((map__48931 == null))))?(((((map__48931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48931):map__48931);
var container_el = cljs.core.get.call(null,map__48931__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__48931,map__48931__$1,container_el){
return (function (p__48933){
var vec__48934 = p__48933;
var k = cljs.core.nth.call(null,vec__48934,(0),null);
var v = cljs.core.nth.call(null,vec__48934,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__48931,map__48931__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__48937,dom_str){
var map__48938 = p__48937;
var map__48938__$1 = (((((!((map__48938 == null))))?(((((map__48938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48938):map__48938);
var c = map__48938__$1;
var content_area_el = cljs.core.get.call(null,map__48938__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__48940){
var map__48941 = p__48940;
var map__48941__$1 = (((((!((map__48941 == null))))?(((((map__48941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48941):map__48941);
var content_area_el = cljs.core.get.call(null,map__48941__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_48958){
var state_val_48959 = (state_48958[(1)]);
if((state_val_48959 === (1))){
var inst_48943 = (state_48958[(7)]);
var inst_48943__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48944 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48945 = ["10px","10px","100%","68px","1.0"];
var inst_48946 = cljs.core.PersistentHashMap.fromArrays(inst_48944,inst_48945);
var inst_48947 = cljs.core.merge.call(null,inst_48946,style);
var inst_48948 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48943__$1,inst_48947);
var inst_48949 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48943__$1,msg);
var inst_48950 = cljs.core.async.timeout.call(null,(300));
var state_48958__$1 = (function (){var statearr_48960 = state_48958;
(statearr_48960[(8)] = inst_48948);

(statearr_48960[(7)] = inst_48943__$1);

(statearr_48960[(9)] = inst_48949);

return statearr_48960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48958__$1,(2),inst_48950);
} else {
if((state_val_48959 === (2))){
var inst_48943 = (state_48958[(7)]);
var inst_48952 = (state_48958[(2)]);
var inst_48953 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_48954 = ["auto"];
var inst_48955 = cljs.core.PersistentHashMap.fromArrays(inst_48953,inst_48954);
var inst_48956 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48943,inst_48955);
var state_48958__$1 = (function (){var statearr_48961 = state_48958;
(statearr_48961[(10)] = inst_48952);

return statearr_48961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48958__$1,inst_48956);
} else {
return null;
}
}
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto____0 = (function (){
var statearr_48962 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48962[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto__);

(statearr_48962[(1)] = (1));

return statearr_48962;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto____1 = (function (state_48958){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_48958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e48963){if((e48963 instanceof Object)){
var ex__38765__auto__ = e48963;
var statearr_48964_48966 = state_48958;
(statearr_48964_48966[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48967 = state_48958;
state_48958 = G__48967;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto__ = function(state_48958){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto____1.call(this,state_48958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_48965 = f__38929__auto__.call(null);
(statearr_48965[(6)] = c__38928__auto__);

return statearr_48965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__48969 = arguments.length;
switch (G__48969) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__48971){
var map__48972 = p__48971;
var map__48972__$1 = (((((!((map__48972 == null))))?(((((map__48972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48972):map__48972);
var file = cljs.core.get.call(null,map__48972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48972__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48972__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4131__auto__ = file;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__48974){
var vec__48975 = p__48974;
var typ = cljs.core.nth.call(null,vec__48975,(0),null);
var line_number = cljs.core.nth.call(null,vec__48975,(1),null);
var line = cljs.core.nth.call(null,vec__48975,(2),null);
var pred__48978 = cljs.core._EQ_;
var expr__48979 = typ;
if(cljs.core.truth_(pred__48978.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__48979))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__48978.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__48979))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__48978.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__48979))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error))));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__48981_SHARP_){
return cljs.core.update_in.call(null,p1__48981_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__48982_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__48982_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__48985){
var map__48986 = p__48985;
var map__48986__$1 = (((((!((map__48986 == null))))?(((((map__48986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48986):map__48986);
var exception = map__48986__$1;
var message = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4120__auto__ = file;
if(cljs.core.truth_(and__4120__auto__)){
return line;
} else {
return and__4120__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48986,map__48986__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__48983_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48983_SHARP_),"</div>"].join('');
});})(last_message,map__48986,map__48986__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):""),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__48986,map__48986__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__48984_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__48984_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__48984_SHARP_)))].join('');
});})(last_message,map__48986,map__48986__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__48988){
var map__48989 = p__48988;
var map__48989__$1 = (((((!((map__48989 == null))))?(((((map__48989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48989):map__48989);
var file = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__48992 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__48992__$1 = (((((!((map__48992 == null))))?(((((map__48992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48992):map__48992);
var head = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__48995){
var map__48996 = p__48995;
var map__48996__$1 = (((((!((map__48996 == null))))?(((((map__48996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48996):map__48996);
var warning_data = map__48996__$1;
var file = cljs.core.get.call(null,map__48996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48996__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48996__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__48996__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__48996__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4120__auto__ = file;
if(cljs.core.truth_(and__4120__auto__)){
return line;
} else {
return and__4120__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48996,map__48996__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__48994_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48994_SHARP_),"</div>"].join('');
});})(last_message,map__48996,map__48996__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__48998 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__48998__$1 = (((((!((map__48998 == null))))?(((((map__48998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48998):map__48998);
var head = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__49000){
var map__49001 = p__49000;
var map__49001__$1 = (((((!((map__49001 == null))))?(((((map__49001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49001):map__49001);
var warning_data = map__49001__$1;
var message = cljs.core.get.call(null,map__49001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__49001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49001__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49001__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49003 = message;
var G__49003__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49003)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49003);
var G__49003__$2 = (cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49003__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__49003__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49003__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__49003__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__49004){
var map__49005 = p__49004;
var map__49005__$1 = (((((!((map__49005 == null))))?(((((map__49005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49005):map__49005);
var warning_data = map__49005__$1;
var message = cljs.core.get.call(null,map__49005__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__49005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49005__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49005__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__49007 = figwheel.client.heads_up.ensure_container.call(null);
var map__49007__$1 = (((((!((map__49007 == null))))?(((((map__49007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49007):map__49007);
var content_area_el = cljs.core.get.call(null,map__49007__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_49026){
var state_val_49027 = (state_49026[(1)]);
if((state_val_49027 === (1))){
var inst_49009 = (state_49026[(7)]);
var inst_49009__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49010 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49011 = ["0.0"];
var inst_49012 = cljs.core.PersistentHashMap.fromArrays(inst_49010,inst_49011);
var inst_49013 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49009__$1,inst_49012);
var inst_49014 = cljs.core.async.timeout.call(null,(300));
var state_49026__$1 = (function (){var statearr_49028 = state_49026;
(statearr_49028[(7)] = inst_49009__$1);

(statearr_49028[(8)] = inst_49013);

return statearr_49028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49026__$1,(2),inst_49014);
} else {
if((state_val_49027 === (2))){
var inst_49009 = (state_49026[(7)]);
var inst_49016 = (state_49026[(2)]);
var inst_49017 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_49018 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_49019 = cljs.core.PersistentHashMap.fromArrays(inst_49017,inst_49018);
var inst_49020 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49009,inst_49019);
var inst_49021 = cljs.core.async.timeout.call(null,(200));
var state_49026__$1 = (function (){var statearr_49029 = state_49026;
(statearr_49029[(9)] = inst_49016);

(statearr_49029[(10)] = inst_49020);

return statearr_49029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49026__$1,(3),inst_49021);
} else {
if((state_val_49027 === (3))){
var inst_49009 = (state_49026[(7)]);
var inst_49023 = (state_49026[(2)]);
var inst_49024 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49009,"");
var state_49026__$1 = (function (){var statearr_49030 = state_49026;
(statearr_49030[(11)] = inst_49023);

return statearr_49030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49026__$1,inst_49024);
} else {
return null;
}
}
}
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__38762__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__38762__auto____0 = (function (){
var statearr_49031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49031[(0)] = figwheel$client$heads_up$clear_$_state_machine__38762__auto__);

(statearr_49031[(1)] = (1));

return statearr_49031;
});
var figwheel$client$heads_up$clear_$_state_machine__38762__auto____1 = (function (state_49026){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_49026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e49032){if((e49032 instanceof Object)){
var ex__38765__auto__ = e49032;
var statearr_49033_49035 = state_49026;
(statearr_49033_49035[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49036 = state_49026;
state_49026 = G__49036;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__38762__auto__ = function(state_49026){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__38762__auto____1.call(this,state_49026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__38762__auto____0;
figwheel$client$heads_up$clear_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__38762__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_49034 = f__38929__auto__.call(null);
(statearr_49034[(6)] = c__38928__auto__);

return statearr_49034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_49047){
var state_val_49048 = (state_49047[(1)]);
if((state_val_49048 === (1))){
var inst_49037 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49047__$1,(2),inst_49037);
} else {
if((state_val_49048 === (2))){
var inst_49039 = (state_49047[(2)]);
var inst_49040 = cljs.core.async.timeout.call(null,(400));
var state_49047__$1 = (function (){var statearr_49049 = state_49047;
(statearr_49049[(7)] = inst_49039);

return statearr_49049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49047__$1,(3),inst_49040);
} else {
if((state_val_49048 === (3))){
var inst_49042 = (state_49047[(2)]);
var inst_49043 = figwheel.client.heads_up.clear.call(null);
var state_49047__$1 = (function (){var statearr_49050 = state_49047;
(statearr_49050[(8)] = inst_49042);

return statearr_49050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49047__$1,(4),inst_49043);
} else {
if((state_val_49048 === (4))){
var inst_49045 = (state_49047[(2)]);
var state_49047__$1 = state_49047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49047__$1,inst_49045);
} else {
return null;
}
}
}
}
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto____0 = (function (){
var statearr_49051 = [null,null,null,null,null,null,null,null,null];
(statearr_49051[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto__);

(statearr_49051[(1)] = (1));

return statearr_49051;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto____1 = (function (state_49047){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_49047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e49052){if((e49052 instanceof Object)){
var ex__38765__auto__ = e49052;
var statearr_49053_49055 = state_49047;
(statearr_49053_49055[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49056 = state_49047;
state_49047 = G__49056;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto__ = function(state_49047){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto____1.call(this,state_49047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_49054 = f__38929__auto__.call(null);
(statearr_49054[(6)] = c__38928__auto__);

return statearr_49054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1561561435416

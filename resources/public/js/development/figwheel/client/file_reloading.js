// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46198_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46198_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__46199 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46200 = null;
var count__46201 = (0);
var i__46202 = (0);
while(true){
if((i__46202 < count__46201)){
var n = cljs.core._nth.call(null,chunk__46200,i__46202);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__46203 = seq__46199;
var G__46204 = chunk__46200;
var G__46205 = count__46201;
var G__46206 = (i__46202 + (1));
seq__46199 = G__46203;
chunk__46200 = G__46204;
count__46201 = G__46205;
i__46202 = G__46206;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46199);
if(temp__5457__auto__){
var seq__46199__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46199__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46199__$1);
var G__46207 = cljs.core.chunk_rest.call(null,seq__46199__$1);
var G__46208 = c__4550__auto__;
var G__46209 = cljs.core.count.call(null,c__4550__auto__);
var G__46210 = (0);
seq__46199 = G__46207;
chunk__46200 = G__46208;
count__46201 = G__46209;
i__46202 = G__46210;
continue;
} else {
var n = cljs.core.first.call(null,seq__46199__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__46211 = cljs.core.next.call(null,seq__46199__$1);
var G__46212 = null;
var G__46213 = (0);
var G__46214 = (0);
seq__46199 = G__46211;
chunk__46200 = G__46212;
count__46201 = G__46213;
i__46202 = G__46214;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__46215){
var vec__46216 = p__46215;
var _ = cljs.core.nth.call(null,vec__46216,(0),null);
var v = cljs.core.nth.call(null,vec__46216,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__46219){
var vec__46220 = p__46219;
var k = cljs.core.nth.call(null,vec__46220,(0),null);
var v = cljs.core.nth.call(null,vec__46220,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__46232_46240 = cljs.core.seq.call(null,deps);
var chunk__46233_46241 = null;
var count__46234_46242 = (0);
var i__46235_46243 = (0);
while(true){
if((i__46235_46243 < count__46234_46242)){
var dep_46244 = cljs.core._nth.call(null,chunk__46233_46241,i__46235_46243);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_46244;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_46244));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_46244,(depth + (1)),state);
} else {
}


var G__46245 = seq__46232_46240;
var G__46246 = chunk__46233_46241;
var G__46247 = count__46234_46242;
var G__46248 = (i__46235_46243 + (1));
seq__46232_46240 = G__46245;
chunk__46233_46241 = G__46246;
count__46234_46242 = G__46247;
i__46235_46243 = G__46248;
continue;
} else {
var temp__5457__auto___46249 = cljs.core.seq.call(null,seq__46232_46240);
if(temp__5457__auto___46249){
var seq__46232_46250__$1 = temp__5457__auto___46249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46232_46250__$1)){
var c__4550__auto___46251 = cljs.core.chunk_first.call(null,seq__46232_46250__$1);
var G__46252 = cljs.core.chunk_rest.call(null,seq__46232_46250__$1);
var G__46253 = c__4550__auto___46251;
var G__46254 = cljs.core.count.call(null,c__4550__auto___46251);
var G__46255 = (0);
seq__46232_46240 = G__46252;
chunk__46233_46241 = G__46253;
count__46234_46242 = G__46254;
i__46235_46243 = G__46255;
continue;
} else {
var dep_46256 = cljs.core.first.call(null,seq__46232_46250__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_46256;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_46256));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_46256,(depth + (1)),state);
} else {
}


var G__46257 = cljs.core.next.call(null,seq__46232_46250__$1);
var G__46258 = null;
var G__46259 = (0);
var G__46260 = (0);
seq__46232_46240 = G__46257;
chunk__46233_46241 = G__46258;
count__46234_46242 = G__46259;
i__46235_46243 = G__46260;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46236){
var vec__46237 = p__46236;
var seq__46238 = cljs.core.seq.call(null,vec__46237);
var first__46239 = cljs.core.first.call(null,seq__46238);
var seq__46238__$1 = cljs.core.next.call(null,seq__46238);
var x = first__46239;
var xs = seq__46238__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46237,seq__46238,first__46239,seq__46238__$1,x,xs,get_deps__$1){
return (function (p1__46223_SHARP_){
return clojure.set.difference.call(null,p1__46223_SHARP_,x);
});})(vec__46237,seq__46238,first__46239,seq__46238__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__46261 = cljs.core.seq.call(null,provides);
var chunk__46262 = null;
var count__46263 = (0);
var i__46264 = (0);
while(true){
if((i__46264 < count__46263)){
var prov = cljs.core._nth.call(null,chunk__46262,i__46264);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46273_46281 = cljs.core.seq.call(null,requires);
var chunk__46274_46282 = null;
var count__46275_46283 = (0);
var i__46276_46284 = (0);
while(true){
if((i__46276_46284 < count__46275_46283)){
var req_46285 = cljs.core._nth.call(null,chunk__46274_46282,i__46276_46284);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46285,prov);


var G__46286 = seq__46273_46281;
var G__46287 = chunk__46274_46282;
var G__46288 = count__46275_46283;
var G__46289 = (i__46276_46284 + (1));
seq__46273_46281 = G__46286;
chunk__46274_46282 = G__46287;
count__46275_46283 = G__46288;
i__46276_46284 = G__46289;
continue;
} else {
var temp__5457__auto___46290 = cljs.core.seq.call(null,seq__46273_46281);
if(temp__5457__auto___46290){
var seq__46273_46291__$1 = temp__5457__auto___46290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46273_46291__$1)){
var c__4550__auto___46292 = cljs.core.chunk_first.call(null,seq__46273_46291__$1);
var G__46293 = cljs.core.chunk_rest.call(null,seq__46273_46291__$1);
var G__46294 = c__4550__auto___46292;
var G__46295 = cljs.core.count.call(null,c__4550__auto___46292);
var G__46296 = (0);
seq__46273_46281 = G__46293;
chunk__46274_46282 = G__46294;
count__46275_46283 = G__46295;
i__46276_46284 = G__46296;
continue;
} else {
var req_46297 = cljs.core.first.call(null,seq__46273_46291__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46297,prov);


var G__46298 = cljs.core.next.call(null,seq__46273_46291__$1);
var G__46299 = null;
var G__46300 = (0);
var G__46301 = (0);
seq__46273_46281 = G__46298;
chunk__46274_46282 = G__46299;
count__46275_46283 = G__46300;
i__46276_46284 = G__46301;
continue;
}
} else {
}
}
break;
}


var G__46302 = seq__46261;
var G__46303 = chunk__46262;
var G__46304 = count__46263;
var G__46305 = (i__46264 + (1));
seq__46261 = G__46302;
chunk__46262 = G__46303;
count__46263 = G__46304;
i__46264 = G__46305;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46261);
if(temp__5457__auto__){
var seq__46261__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46261__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46261__$1);
var G__46306 = cljs.core.chunk_rest.call(null,seq__46261__$1);
var G__46307 = c__4550__auto__;
var G__46308 = cljs.core.count.call(null,c__4550__auto__);
var G__46309 = (0);
seq__46261 = G__46306;
chunk__46262 = G__46307;
count__46263 = G__46308;
i__46264 = G__46309;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46261__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46277_46310 = cljs.core.seq.call(null,requires);
var chunk__46278_46311 = null;
var count__46279_46312 = (0);
var i__46280_46313 = (0);
while(true){
if((i__46280_46313 < count__46279_46312)){
var req_46314 = cljs.core._nth.call(null,chunk__46278_46311,i__46280_46313);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46314,prov);


var G__46315 = seq__46277_46310;
var G__46316 = chunk__46278_46311;
var G__46317 = count__46279_46312;
var G__46318 = (i__46280_46313 + (1));
seq__46277_46310 = G__46315;
chunk__46278_46311 = G__46316;
count__46279_46312 = G__46317;
i__46280_46313 = G__46318;
continue;
} else {
var temp__5457__auto___46319__$1 = cljs.core.seq.call(null,seq__46277_46310);
if(temp__5457__auto___46319__$1){
var seq__46277_46320__$1 = temp__5457__auto___46319__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46277_46320__$1)){
var c__4550__auto___46321 = cljs.core.chunk_first.call(null,seq__46277_46320__$1);
var G__46322 = cljs.core.chunk_rest.call(null,seq__46277_46320__$1);
var G__46323 = c__4550__auto___46321;
var G__46324 = cljs.core.count.call(null,c__4550__auto___46321);
var G__46325 = (0);
seq__46277_46310 = G__46322;
chunk__46278_46311 = G__46323;
count__46279_46312 = G__46324;
i__46280_46313 = G__46325;
continue;
} else {
var req_46326 = cljs.core.first.call(null,seq__46277_46320__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46326,prov);


var G__46327 = cljs.core.next.call(null,seq__46277_46320__$1);
var G__46328 = null;
var G__46329 = (0);
var G__46330 = (0);
seq__46277_46310 = G__46327;
chunk__46278_46311 = G__46328;
count__46279_46312 = G__46329;
i__46280_46313 = G__46330;
continue;
}
} else {
}
}
break;
}


var G__46331 = cljs.core.next.call(null,seq__46261__$1);
var G__46332 = null;
var G__46333 = (0);
var G__46334 = (0);
seq__46261 = G__46331;
chunk__46262 = G__46332;
count__46263 = G__46333;
i__46264 = G__46334;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__46335_46339 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46336_46340 = null;
var count__46337_46341 = (0);
var i__46338_46342 = (0);
while(true){
if((i__46338_46342 < count__46337_46341)){
var ns_46343 = cljs.core._nth.call(null,chunk__46336_46340,i__46338_46342);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46343);


var G__46344 = seq__46335_46339;
var G__46345 = chunk__46336_46340;
var G__46346 = count__46337_46341;
var G__46347 = (i__46338_46342 + (1));
seq__46335_46339 = G__46344;
chunk__46336_46340 = G__46345;
count__46337_46341 = G__46346;
i__46338_46342 = G__46347;
continue;
} else {
var temp__5457__auto___46348 = cljs.core.seq.call(null,seq__46335_46339);
if(temp__5457__auto___46348){
var seq__46335_46349__$1 = temp__5457__auto___46348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46335_46349__$1)){
var c__4550__auto___46350 = cljs.core.chunk_first.call(null,seq__46335_46349__$1);
var G__46351 = cljs.core.chunk_rest.call(null,seq__46335_46349__$1);
var G__46352 = c__4550__auto___46350;
var G__46353 = cljs.core.count.call(null,c__4550__auto___46350);
var G__46354 = (0);
seq__46335_46339 = G__46351;
chunk__46336_46340 = G__46352;
count__46337_46341 = G__46353;
i__46338_46342 = G__46354;
continue;
} else {
var ns_46355 = cljs.core.first.call(null,seq__46335_46349__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46355);


var G__46356 = cljs.core.next.call(null,seq__46335_46349__$1);
var G__46357 = null;
var G__46358 = (0);
var G__46359 = (0);
seq__46335_46339 = G__46356;
chunk__46336_46340 = G__46357;
count__46337_46341 = G__46358;
i__46338_46342 = G__46359;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__46360__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46361__i = 0, G__46361__a = new Array(arguments.length -  0);
while (G__46361__i < G__46361__a.length) {G__46361__a[G__46361__i] = arguments[G__46361__i + 0]; ++G__46361__i;}
  args = new cljs.core.IndexedSeq(G__46361__a,0,null);
} 
return G__46360__delegate.call(this,args);};
G__46360.cljs$lang$maxFixedArity = 0;
G__46360.cljs$lang$applyTo = (function (arglist__46362){
var args = cljs.core.seq(arglist__46362);
return G__46360__delegate(args);
});
G__46360.cljs$core$IFn$_invoke$arity$variadic = G__46360__delegate;
return G__46360;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__46363_SHARP_,p2__46364_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46363_SHARP_)),p2__46364_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__46365_SHARP_,p2__46366_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46365_SHARP_),p2__46366_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__46367 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__46367.addCallback(((function (G__46367){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__46367))
);

G__46367.addErrback(((function (G__46367){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__46367))
);

return G__46367;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46368){if((e46368 instanceof Error)){
var e = e46368;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46368;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46369){if((e46369 instanceof Error)){
var e = e46369;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46369;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46370 = cljs.core._EQ_;
var expr__46371 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46370.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46371))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__46370.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46371))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__46370.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46371))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__46370,expr__46371){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46370,expr__46371))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46373,callback){
var map__46374 = p__46373;
var map__46374__$1 = (((((!((map__46374 == null))))?(((((map__46374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46374):map__46374);
var file_msg = map__46374__$1;
var request_url = cljs.core.get.call(null,map__46374__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__46374,map__46374__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46374,map__46374__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_46412){
var state_val_46413 = (state_46412[(1)]);
if((state_val_46413 === (7))){
var inst_46408 = (state_46412[(2)]);
var state_46412__$1 = state_46412;
var statearr_46414_46440 = state_46412__$1;
(statearr_46414_46440[(2)] = inst_46408);

(statearr_46414_46440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (1))){
var state_46412__$1 = state_46412;
var statearr_46415_46441 = state_46412__$1;
(statearr_46415_46441[(2)] = null);

(statearr_46415_46441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (4))){
var inst_46378 = (state_46412[(7)]);
var inst_46378__$1 = (state_46412[(2)]);
var state_46412__$1 = (function (){var statearr_46416 = state_46412;
(statearr_46416[(7)] = inst_46378__$1);

return statearr_46416;
})();
if(cljs.core.truth_(inst_46378__$1)){
var statearr_46417_46442 = state_46412__$1;
(statearr_46417_46442[(1)] = (5));

} else {
var statearr_46418_46443 = state_46412__$1;
(statearr_46418_46443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (15))){
var inst_46391 = (state_46412[(8)]);
var inst_46393 = (state_46412[(9)]);
var inst_46395 = inst_46393.call(null,inst_46391);
var state_46412__$1 = state_46412;
var statearr_46419_46444 = state_46412__$1;
(statearr_46419_46444[(2)] = inst_46395);

(statearr_46419_46444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (13))){
var inst_46402 = (state_46412[(2)]);
var state_46412__$1 = state_46412;
var statearr_46420_46445 = state_46412__$1;
(statearr_46420_46445[(2)] = inst_46402);

(statearr_46420_46445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (6))){
var state_46412__$1 = state_46412;
var statearr_46421_46446 = state_46412__$1;
(statearr_46421_46446[(2)] = null);

(statearr_46421_46446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (17))){
var inst_46399 = (state_46412[(2)]);
var state_46412__$1 = state_46412;
var statearr_46422_46447 = state_46412__$1;
(statearr_46422_46447[(2)] = inst_46399);

(statearr_46422_46447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (3))){
var inst_46410 = (state_46412[(2)]);
var state_46412__$1 = state_46412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46412__$1,inst_46410);
} else {
if((state_val_46413 === (12))){
var state_46412__$1 = state_46412;
var statearr_46423_46448 = state_46412__$1;
(statearr_46423_46448[(2)] = null);

(statearr_46423_46448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (2))){
var state_46412__$1 = state_46412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46412__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46413 === (11))){
var inst_46383 = (state_46412[(10)]);
var inst_46389 = figwheel.client.file_reloading.blocking_load.call(null,inst_46383);
var state_46412__$1 = state_46412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46412__$1,(14),inst_46389);
} else {
if((state_val_46413 === (9))){
var inst_46383 = (state_46412[(10)]);
var state_46412__$1 = state_46412;
if(cljs.core.truth_(inst_46383)){
var statearr_46424_46449 = state_46412__$1;
(statearr_46424_46449[(1)] = (11));

} else {
var statearr_46425_46450 = state_46412__$1;
(statearr_46425_46450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (5))){
var inst_46378 = (state_46412[(7)]);
var inst_46384 = (state_46412[(11)]);
var inst_46383 = cljs.core.nth.call(null,inst_46378,(0),null);
var inst_46384__$1 = cljs.core.nth.call(null,inst_46378,(1),null);
var state_46412__$1 = (function (){var statearr_46426 = state_46412;
(statearr_46426[(11)] = inst_46384__$1);

(statearr_46426[(10)] = inst_46383);

return statearr_46426;
})();
if(cljs.core.truth_(inst_46384__$1)){
var statearr_46427_46451 = state_46412__$1;
(statearr_46427_46451[(1)] = (8));

} else {
var statearr_46428_46452 = state_46412__$1;
(statearr_46428_46452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (14))){
var inst_46383 = (state_46412[(10)]);
var inst_46393 = (state_46412[(9)]);
var inst_46391 = (state_46412[(2)]);
var inst_46392 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46393__$1 = cljs.core.get.call(null,inst_46392,inst_46383);
var state_46412__$1 = (function (){var statearr_46429 = state_46412;
(statearr_46429[(8)] = inst_46391);

(statearr_46429[(9)] = inst_46393__$1);

return statearr_46429;
})();
if(cljs.core.truth_(inst_46393__$1)){
var statearr_46430_46453 = state_46412__$1;
(statearr_46430_46453[(1)] = (15));

} else {
var statearr_46431_46454 = state_46412__$1;
(statearr_46431_46454[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (16))){
var inst_46391 = (state_46412[(8)]);
var inst_46397 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46391);
var state_46412__$1 = state_46412;
var statearr_46432_46455 = state_46412__$1;
(statearr_46432_46455[(2)] = inst_46397);

(statearr_46432_46455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (10))){
var inst_46404 = (state_46412[(2)]);
var state_46412__$1 = (function (){var statearr_46433 = state_46412;
(statearr_46433[(12)] = inst_46404);

return statearr_46433;
})();
var statearr_46434_46456 = state_46412__$1;
(statearr_46434_46456[(2)] = null);

(statearr_46434_46456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46413 === (8))){
var inst_46384 = (state_46412[(11)]);
var inst_46386 = eval(inst_46384);
var state_46412__$1 = state_46412;
var statearr_46435_46457 = state_46412__$1;
(statearr_46435_46457[(2)] = inst_46386);

(statearr_46435_46457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38762__auto__ = null;
var figwheel$client$file_reloading$state_machine__38762__auto____0 = (function (){
var statearr_46436 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46436[(0)] = figwheel$client$file_reloading$state_machine__38762__auto__);

(statearr_46436[(1)] = (1));

return statearr_46436;
});
var figwheel$client$file_reloading$state_machine__38762__auto____1 = (function (state_46412){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_46412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e46437){if((e46437 instanceof Object)){
var ex__38765__auto__ = e46437;
var statearr_46438_46458 = state_46412;
(statearr_46438_46458[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46459 = state_46412;
state_46412 = G__46459;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38762__auto__ = function(state_46412){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38762__auto____1.call(this,state_46412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38762__auto____0;
figwheel$client$file_reloading$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38762__auto____1;
return figwheel$client$file_reloading$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_46439 = f__38929__auto__.call(null);
(statearr_46439[(6)] = c__38928__auto__);

return statearr_46439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__46461 = arguments.length;
switch (G__46461) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46463,callback){
var map__46464 = p__46463;
var map__46464__$1 = (((((!((map__46464 == null))))?(((((map__46464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46464):map__46464);
var file_msg = map__46464__$1;
var namespace = cljs.core.get.call(null,map__46464__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46464,map__46464__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46464,map__46464__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46466){
var map__46467 = p__46466;
var map__46467__$1 = (((((!((map__46467 == null))))?(((((map__46467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46467):map__46467);
var file_msg = map__46467__$1;
var namespace = cljs.core.get.call(null,map__46467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46469){
var map__46470 = p__46469;
var map__46470__$1 = (((((!((map__46470 == null))))?(((((map__46470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46470):map__46470);
var file_msg = map__46470__$1;
var namespace = cljs.core.get.call(null,map__46470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46472,callback){
var map__46473 = p__46472;
var map__46473__$1 = (((((!((map__46473 == null))))?(((((map__46473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46473):map__46473);
var file_msg = map__46473__$1;
var request_url = cljs.core.get.call(null,map__46473__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46473__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__38928__auto___46523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___46523,out){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___46523,out){
return (function (state_46508){
var state_val_46509 = (state_46508[(1)]);
if((state_val_46509 === (1))){
var inst_46482 = cljs.core.seq.call(null,files);
var inst_46483 = cljs.core.first.call(null,inst_46482);
var inst_46484 = cljs.core.next.call(null,inst_46482);
var inst_46485 = files;
var state_46508__$1 = (function (){var statearr_46510 = state_46508;
(statearr_46510[(7)] = inst_46484);

(statearr_46510[(8)] = inst_46483);

(statearr_46510[(9)] = inst_46485);

return statearr_46510;
})();
var statearr_46511_46524 = state_46508__$1;
(statearr_46511_46524[(2)] = null);

(statearr_46511_46524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46509 === (2))){
var inst_46491 = (state_46508[(10)]);
var inst_46485 = (state_46508[(9)]);
var inst_46490 = cljs.core.seq.call(null,inst_46485);
var inst_46491__$1 = cljs.core.first.call(null,inst_46490);
var inst_46492 = cljs.core.next.call(null,inst_46490);
var inst_46493 = (inst_46491__$1 == null);
var inst_46494 = cljs.core.not.call(null,inst_46493);
var state_46508__$1 = (function (){var statearr_46512 = state_46508;
(statearr_46512[(11)] = inst_46492);

(statearr_46512[(10)] = inst_46491__$1);

return statearr_46512;
})();
if(inst_46494){
var statearr_46513_46525 = state_46508__$1;
(statearr_46513_46525[(1)] = (4));

} else {
var statearr_46514_46526 = state_46508__$1;
(statearr_46514_46526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46509 === (3))){
var inst_46506 = (state_46508[(2)]);
var state_46508__$1 = state_46508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46508__$1,inst_46506);
} else {
if((state_val_46509 === (4))){
var inst_46491 = (state_46508[(10)]);
var inst_46496 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46491);
var state_46508__$1 = state_46508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46508__$1,(7),inst_46496);
} else {
if((state_val_46509 === (5))){
var inst_46502 = cljs.core.async.close_BANG_.call(null,out);
var state_46508__$1 = state_46508;
var statearr_46515_46527 = state_46508__$1;
(statearr_46515_46527[(2)] = inst_46502);

(statearr_46515_46527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46509 === (6))){
var inst_46504 = (state_46508[(2)]);
var state_46508__$1 = state_46508;
var statearr_46516_46528 = state_46508__$1;
(statearr_46516_46528[(2)] = inst_46504);

(statearr_46516_46528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46509 === (7))){
var inst_46492 = (state_46508[(11)]);
var inst_46498 = (state_46508[(2)]);
var inst_46499 = cljs.core.async.put_BANG_.call(null,out,inst_46498);
var inst_46485 = inst_46492;
var state_46508__$1 = (function (){var statearr_46517 = state_46508;
(statearr_46517[(12)] = inst_46499);

(statearr_46517[(9)] = inst_46485);

return statearr_46517;
})();
var statearr_46518_46529 = state_46508__$1;
(statearr_46518_46529[(2)] = null);

(statearr_46518_46529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__38928__auto___46523,out))
;
return ((function (switch__38761__auto__,c__38928__auto___46523,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto____0 = (function (){
var statearr_46519 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46519[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto__);

(statearr_46519[(1)] = (1));

return statearr_46519;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto____1 = (function (state_46508){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_46508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e46520){if((e46520 instanceof Object)){
var ex__38765__auto__ = e46520;
var statearr_46521_46530 = state_46508;
(statearr_46521_46530[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46531 = state_46508;
state_46508 = G__46531;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto__ = function(state_46508){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto____1.call(this,state_46508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___46523,out))
})();
var state__38930__auto__ = (function (){var statearr_46522 = f__38929__auto__.call(null);
(statearr_46522[(6)] = c__38928__auto___46523);

return statearr_46522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___46523,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46532,opts){
var map__46533 = p__46532;
var map__46533__$1 = (((((!((map__46533 == null))))?(((((map__46533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46533):map__46533);
var eval_body = cljs.core.get.call(null,map__46533__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46533__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46535){var e = e46535;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__46536_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46536_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__46537){
var vec__46538 = p__46537;
var k = cljs.core.nth.call(null,vec__46538,(0),null);
var v = cljs.core.nth.call(null,vec__46538,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46541){
var vec__46542 = p__46541;
var k = cljs.core.nth.call(null,vec__46542,(0),null);
var v = cljs.core.nth.call(null,vec__46542,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46548,p__46549){
var map__46550 = p__46548;
var map__46550__$1 = (((((!((map__46550 == null))))?(((((map__46550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46550):map__46550);
var opts = map__46550__$1;
var before_jsload = cljs.core.get.call(null,map__46550__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46550__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46550__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46551 = p__46549;
var map__46551__$1 = (((((!((map__46551 == null))))?(((((map__46551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46551):map__46551);
var msg = map__46551__$1;
var files = cljs.core.get.call(null,map__46551__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46551__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46551__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46705){
var state_val_46706 = (state_46705[(1)]);
if((state_val_46706 === (7))){
var inst_46565 = (state_46705[(7)]);
var inst_46566 = (state_46705[(8)]);
var inst_46567 = (state_46705[(9)]);
var inst_46568 = (state_46705[(10)]);
var inst_46573 = cljs.core._nth.call(null,inst_46566,inst_46568);
var inst_46574 = figwheel.client.file_reloading.eval_body.call(null,inst_46573,opts);
var inst_46575 = (inst_46568 + (1));
var tmp46707 = inst_46565;
var tmp46708 = inst_46566;
var tmp46709 = inst_46567;
var inst_46565__$1 = tmp46707;
var inst_46566__$1 = tmp46708;
var inst_46567__$1 = tmp46709;
var inst_46568__$1 = inst_46575;
var state_46705__$1 = (function (){var statearr_46710 = state_46705;
(statearr_46710[(11)] = inst_46574);

(statearr_46710[(7)] = inst_46565__$1);

(statearr_46710[(8)] = inst_46566__$1);

(statearr_46710[(9)] = inst_46567__$1);

(statearr_46710[(10)] = inst_46568__$1);

return statearr_46710;
})();
var statearr_46711_46794 = state_46705__$1;
(statearr_46711_46794[(2)] = null);

(statearr_46711_46794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (20))){
var inst_46608 = (state_46705[(12)]);
var inst_46616 = figwheel.client.file_reloading.sort_files.call(null,inst_46608);
var state_46705__$1 = state_46705;
var statearr_46712_46795 = state_46705__$1;
(statearr_46712_46795[(2)] = inst_46616);

(statearr_46712_46795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (27))){
var state_46705__$1 = state_46705;
var statearr_46713_46796 = state_46705__$1;
(statearr_46713_46796[(2)] = null);

(statearr_46713_46796[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (1))){
var inst_46557 = (state_46705[(13)]);
var inst_46554 = before_jsload.call(null,files);
var inst_46555 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46556 = (function (){return ((function (inst_46557,inst_46554,inst_46555,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46545_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46545_SHARP_);
});
;})(inst_46557,inst_46554,inst_46555,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46557__$1 = cljs.core.filter.call(null,inst_46556,files);
var inst_46558 = cljs.core.not_empty.call(null,inst_46557__$1);
var state_46705__$1 = (function (){var statearr_46714 = state_46705;
(statearr_46714[(14)] = inst_46554);

(statearr_46714[(13)] = inst_46557__$1);

(statearr_46714[(15)] = inst_46555);

return statearr_46714;
})();
if(cljs.core.truth_(inst_46558)){
var statearr_46715_46797 = state_46705__$1;
(statearr_46715_46797[(1)] = (2));

} else {
var statearr_46716_46798 = state_46705__$1;
(statearr_46716_46798[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (24))){
var state_46705__$1 = state_46705;
var statearr_46717_46799 = state_46705__$1;
(statearr_46717_46799[(2)] = null);

(statearr_46717_46799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (39))){
var inst_46658 = (state_46705[(16)]);
var state_46705__$1 = state_46705;
var statearr_46718_46800 = state_46705__$1;
(statearr_46718_46800[(2)] = inst_46658);

(statearr_46718_46800[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (46))){
var inst_46700 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46719_46801 = state_46705__$1;
(statearr_46719_46801[(2)] = inst_46700);

(statearr_46719_46801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (4))){
var inst_46602 = (state_46705[(2)]);
var inst_46603 = cljs.core.List.EMPTY;
var inst_46604 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46603);
var inst_46605 = (function (){return ((function (inst_46602,inst_46603,inst_46604,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46546_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46546_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46546_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46546_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_46602,inst_46603,inst_46604,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46606 = cljs.core.filter.call(null,inst_46605,files);
var inst_46607 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46608 = cljs.core.concat.call(null,inst_46606,inst_46607);
var state_46705__$1 = (function (){var statearr_46720 = state_46705;
(statearr_46720[(17)] = inst_46604);

(statearr_46720[(18)] = inst_46602);

(statearr_46720[(12)] = inst_46608);

return statearr_46720;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46721_46802 = state_46705__$1;
(statearr_46721_46802[(1)] = (16));

} else {
var statearr_46722_46803 = state_46705__$1;
(statearr_46722_46803[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (15))){
var inst_46592 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46723_46804 = state_46705__$1;
(statearr_46723_46804[(2)] = inst_46592);

(statearr_46723_46804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (21))){
var inst_46618 = (state_46705[(19)]);
var inst_46618__$1 = (state_46705[(2)]);
var inst_46619 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46618__$1);
var state_46705__$1 = (function (){var statearr_46724 = state_46705;
(statearr_46724[(19)] = inst_46618__$1);

return statearr_46724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46705__$1,(22),inst_46619);
} else {
if((state_val_46706 === (31))){
var inst_46703 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46705__$1,inst_46703);
} else {
if((state_val_46706 === (32))){
var inst_46658 = (state_46705[(16)]);
var inst_46663 = inst_46658.cljs$lang$protocol_mask$partition0$;
var inst_46664 = (inst_46663 & (64));
var inst_46665 = inst_46658.cljs$core$ISeq$;
var inst_46666 = (cljs.core.PROTOCOL_SENTINEL === inst_46665);
var inst_46667 = ((inst_46664) || (inst_46666));
var state_46705__$1 = state_46705;
if(cljs.core.truth_(inst_46667)){
var statearr_46725_46805 = state_46705__$1;
(statearr_46725_46805[(1)] = (35));

} else {
var statearr_46726_46806 = state_46705__$1;
(statearr_46726_46806[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (40))){
var inst_46680 = (state_46705[(20)]);
var inst_46679 = (state_46705[(2)]);
var inst_46680__$1 = cljs.core.get.call(null,inst_46679,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46681 = cljs.core.get.call(null,inst_46679,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46682 = cljs.core.not_empty.call(null,inst_46680__$1);
var state_46705__$1 = (function (){var statearr_46727 = state_46705;
(statearr_46727[(20)] = inst_46680__$1);

(statearr_46727[(21)] = inst_46681);

return statearr_46727;
})();
if(cljs.core.truth_(inst_46682)){
var statearr_46728_46807 = state_46705__$1;
(statearr_46728_46807[(1)] = (41));

} else {
var statearr_46729_46808 = state_46705__$1;
(statearr_46729_46808[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (33))){
var state_46705__$1 = state_46705;
var statearr_46730_46809 = state_46705__$1;
(statearr_46730_46809[(2)] = false);

(statearr_46730_46809[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (13))){
var inst_46578 = (state_46705[(22)]);
var inst_46582 = cljs.core.chunk_first.call(null,inst_46578);
var inst_46583 = cljs.core.chunk_rest.call(null,inst_46578);
var inst_46584 = cljs.core.count.call(null,inst_46582);
var inst_46565 = inst_46583;
var inst_46566 = inst_46582;
var inst_46567 = inst_46584;
var inst_46568 = (0);
var state_46705__$1 = (function (){var statearr_46731 = state_46705;
(statearr_46731[(7)] = inst_46565);

(statearr_46731[(8)] = inst_46566);

(statearr_46731[(9)] = inst_46567);

(statearr_46731[(10)] = inst_46568);

return statearr_46731;
})();
var statearr_46732_46810 = state_46705__$1;
(statearr_46732_46810[(2)] = null);

(statearr_46732_46810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (22))){
var inst_46622 = (state_46705[(23)]);
var inst_46618 = (state_46705[(19)]);
var inst_46626 = (state_46705[(24)]);
var inst_46621 = (state_46705[(25)]);
var inst_46621__$1 = (state_46705[(2)]);
var inst_46622__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46621__$1);
var inst_46623 = (function (){var all_files = inst_46618;
var res_SINGLEQUOTE_ = inst_46621__$1;
var res = inst_46622__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46622,inst_46618,inst_46626,inst_46621,inst_46621__$1,inst_46622__$1,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46547_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46547_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46622,inst_46618,inst_46626,inst_46621,inst_46621__$1,inst_46622__$1,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46624 = cljs.core.filter.call(null,inst_46623,inst_46621__$1);
var inst_46625 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46626__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46625);
var inst_46627 = cljs.core.not_empty.call(null,inst_46626__$1);
var state_46705__$1 = (function (){var statearr_46733 = state_46705;
(statearr_46733[(23)] = inst_46622__$1);

(statearr_46733[(24)] = inst_46626__$1);

(statearr_46733[(25)] = inst_46621__$1);

(statearr_46733[(26)] = inst_46624);

return statearr_46733;
})();
if(cljs.core.truth_(inst_46627)){
var statearr_46734_46811 = state_46705__$1;
(statearr_46734_46811[(1)] = (23));

} else {
var statearr_46735_46812 = state_46705__$1;
(statearr_46735_46812[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (36))){
var state_46705__$1 = state_46705;
var statearr_46736_46813 = state_46705__$1;
(statearr_46736_46813[(2)] = false);

(statearr_46736_46813[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (41))){
var inst_46680 = (state_46705[(20)]);
var inst_46684 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46685 = cljs.core.map.call(null,inst_46684,inst_46680);
var inst_46686 = cljs.core.pr_str.call(null,inst_46685);
var inst_46687 = ["figwheel-no-load meta-data: ",inst_46686].join('');
var inst_46688 = figwheel.client.utils.log.call(null,inst_46687);
var state_46705__$1 = state_46705;
var statearr_46737_46814 = state_46705__$1;
(statearr_46737_46814[(2)] = inst_46688);

(statearr_46737_46814[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (43))){
var inst_46681 = (state_46705[(21)]);
var inst_46691 = (state_46705[(2)]);
var inst_46692 = cljs.core.not_empty.call(null,inst_46681);
var state_46705__$1 = (function (){var statearr_46738 = state_46705;
(statearr_46738[(27)] = inst_46691);

return statearr_46738;
})();
if(cljs.core.truth_(inst_46692)){
var statearr_46739_46815 = state_46705__$1;
(statearr_46739_46815[(1)] = (44));

} else {
var statearr_46740_46816 = state_46705__$1;
(statearr_46740_46816[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (29))){
var inst_46658 = (state_46705[(16)]);
var inst_46622 = (state_46705[(23)]);
var inst_46618 = (state_46705[(19)]);
var inst_46626 = (state_46705[(24)]);
var inst_46621 = (state_46705[(25)]);
var inst_46624 = (state_46705[(26)]);
var inst_46654 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46657 = (function (){var all_files = inst_46618;
var res_SINGLEQUOTE_ = inst_46621;
var res = inst_46622;
var files_not_loaded = inst_46624;
var dependencies_that_loaded = inst_46626;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46658,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46654,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46656){
var map__46741 = p__46656;
var map__46741__$1 = (((((!((map__46741 == null))))?(((((map__46741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46741):map__46741);
var namespace = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46658,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46654,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46658__$1 = cljs.core.group_by.call(null,inst_46657,inst_46624);
var inst_46660 = (inst_46658__$1 == null);
var inst_46661 = cljs.core.not.call(null,inst_46660);
var state_46705__$1 = (function (){var statearr_46743 = state_46705;
(statearr_46743[(16)] = inst_46658__$1);

(statearr_46743[(28)] = inst_46654);

return statearr_46743;
})();
if(inst_46661){
var statearr_46744_46817 = state_46705__$1;
(statearr_46744_46817[(1)] = (32));

} else {
var statearr_46745_46818 = state_46705__$1;
(statearr_46745_46818[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (44))){
var inst_46681 = (state_46705[(21)]);
var inst_46694 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46681);
var inst_46695 = cljs.core.pr_str.call(null,inst_46694);
var inst_46696 = ["not required: ",inst_46695].join('');
var inst_46697 = figwheel.client.utils.log.call(null,inst_46696);
var state_46705__$1 = state_46705;
var statearr_46746_46819 = state_46705__$1;
(statearr_46746_46819[(2)] = inst_46697);

(statearr_46746_46819[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (6))){
var inst_46599 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46747_46820 = state_46705__$1;
(statearr_46747_46820[(2)] = inst_46599);

(statearr_46747_46820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (28))){
var inst_46624 = (state_46705[(26)]);
var inst_46651 = (state_46705[(2)]);
var inst_46652 = cljs.core.not_empty.call(null,inst_46624);
var state_46705__$1 = (function (){var statearr_46748 = state_46705;
(statearr_46748[(29)] = inst_46651);

return statearr_46748;
})();
if(cljs.core.truth_(inst_46652)){
var statearr_46749_46821 = state_46705__$1;
(statearr_46749_46821[(1)] = (29));

} else {
var statearr_46750_46822 = state_46705__$1;
(statearr_46750_46822[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (25))){
var inst_46622 = (state_46705[(23)]);
var inst_46638 = (state_46705[(2)]);
var inst_46639 = cljs.core.not_empty.call(null,inst_46622);
var state_46705__$1 = (function (){var statearr_46751 = state_46705;
(statearr_46751[(30)] = inst_46638);

return statearr_46751;
})();
if(cljs.core.truth_(inst_46639)){
var statearr_46752_46823 = state_46705__$1;
(statearr_46752_46823[(1)] = (26));

} else {
var statearr_46753_46824 = state_46705__$1;
(statearr_46753_46824[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (34))){
var inst_46674 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
if(cljs.core.truth_(inst_46674)){
var statearr_46754_46825 = state_46705__$1;
(statearr_46754_46825[(1)] = (38));

} else {
var statearr_46755_46826 = state_46705__$1;
(statearr_46755_46826[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (17))){
var state_46705__$1 = state_46705;
var statearr_46756_46827 = state_46705__$1;
(statearr_46756_46827[(2)] = recompile_dependents);

(statearr_46756_46827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (3))){
var state_46705__$1 = state_46705;
var statearr_46757_46828 = state_46705__$1;
(statearr_46757_46828[(2)] = null);

(statearr_46757_46828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (12))){
var inst_46595 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46758_46829 = state_46705__$1;
(statearr_46758_46829[(2)] = inst_46595);

(statearr_46758_46829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (2))){
var inst_46557 = (state_46705[(13)]);
var inst_46564 = cljs.core.seq.call(null,inst_46557);
var inst_46565 = inst_46564;
var inst_46566 = null;
var inst_46567 = (0);
var inst_46568 = (0);
var state_46705__$1 = (function (){var statearr_46759 = state_46705;
(statearr_46759[(7)] = inst_46565);

(statearr_46759[(8)] = inst_46566);

(statearr_46759[(9)] = inst_46567);

(statearr_46759[(10)] = inst_46568);

return statearr_46759;
})();
var statearr_46760_46830 = state_46705__$1;
(statearr_46760_46830[(2)] = null);

(statearr_46760_46830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (23))){
var inst_46622 = (state_46705[(23)]);
var inst_46618 = (state_46705[(19)]);
var inst_46626 = (state_46705[(24)]);
var inst_46621 = (state_46705[(25)]);
var inst_46624 = (state_46705[(26)]);
var inst_46629 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46631 = (function (){var all_files = inst_46618;
var res_SINGLEQUOTE_ = inst_46621;
var res = inst_46622;
var files_not_loaded = inst_46624;
var dependencies_that_loaded = inst_46626;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46629,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46630){
var map__46761 = p__46630;
var map__46761__$1 = (((((!((map__46761 == null))))?(((((map__46761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46761):map__46761);
var request_url = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46629,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46632 = cljs.core.reverse.call(null,inst_46626);
var inst_46633 = cljs.core.map.call(null,inst_46631,inst_46632);
var inst_46634 = cljs.core.pr_str.call(null,inst_46633);
var inst_46635 = figwheel.client.utils.log.call(null,inst_46634);
var state_46705__$1 = (function (){var statearr_46763 = state_46705;
(statearr_46763[(31)] = inst_46629);

return statearr_46763;
})();
var statearr_46764_46831 = state_46705__$1;
(statearr_46764_46831[(2)] = inst_46635);

(statearr_46764_46831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (35))){
var state_46705__$1 = state_46705;
var statearr_46765_46832 = state_46705__$1;
(statearr_46765_46832[(2)] = true);

(statearr_46765_46832[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (19))){
var inst_46608 = (state_46705[(12)]);
var inst_46614 = figwheel.client.file_reloading.expand_files.call(null,inst_46608);
var state_46705__$1 = state_46705;
var statearr_46766_46833 = state_46705__$1;
(statearr_46766_46833[(2)] = inst_46614);

(statearr_46766_46833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (11))){
var state_46705__$1 = state_46705;
var statearr_46767_46834 = state_46705__$1;
(statearr_46767_46834[(2)] = null);

(statearr_46767_46834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (9))){
var inst_46597 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46768_46835 = state_46705__$1;
(statearr_46768_46835[(2)] = inst_46597);

(statearr_46768_46835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (5))){
var inst_46567 = (state_46705[(9)]);
var inst_46568 = (state_46705[(10)]);
var inst_46570 = (inst_46568 < inst_46567);
var inst_46571 = inst_46570;
var state_46705__$1 = state_46705;
if(cljs.core.truth_(inst_46571)){
var statearr_46769_46836 = state_46705__$1;
(statearr_46769_46836[(1)] = (7));

} else {
var statearr_46770_46837 = state_46705__$1;
(statearr_46770_46837[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (14))){
var inst_46578 = (state_46705[(22)]);
var inst_46587 = cljs.core.first.call(null,inst_46578);
var inst_46588 = figwheel.client.file_reloading.eval_body.call(null,inst_46587,opts);
var inst_46589 = cljs.core.next.call(null,inst_46578);
var inst_46565 = inst_46589;
var inst_46566 = null;
var inst_46567 = (0);
var inst_46568 = (0);
var state_46705__$1 = (function (){var statearr_46771 = state_46705;
(statearr_46771[(7)] = inst_46565);

(statearr_46771[(8)] = inst_46566);

(statearr_46771[(9)] = inst_46567);

(statearr_46771[(10)] = inst_46568);

(statearr_46771[(32)] = inst_46588);

return statearr_46771;
})();
var statearr_46772_46838 = state_46705__$1;
(statearr_46772_46838[(2)] = null);

(statearr_46772_46838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (45))){
var state_46705__$1 = state_46705;
var statearr_46773_46839 = state_46705__$1;
(statearr_46773_46839[(2)] = null);

(statearr_46773_46839[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (26))){
var inst_46622 = (state_46705[(23)]);
var inst_46618 = (state_46705[(19)]);
var inst_46626 = (state_46705[(24)]);
var inst_46621 = (state_46705[(25)]);
var inst_46624 = (state_46705[(26)]);
var inst_46641 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46643 = (function (){var all_files = inst_46618;
var res_SINGLEQUOTE_ = inst_46621;
var res = inst_46622;
var files_not_loaded = inst_46624;
var dependencies_that_loaded = inst_46626;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46641,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46642){
var map__46774 = p__46642;
var map__46774__$1 = (((((!((map__46774 == null))))?(((((map__46774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46774):map__46774);
var namespace = cljs.core.get.call(null,map__46774__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46641,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46644 = cljs.core.map.call(null,inst_46643,inst_46622);
var inst_46645 = cljs.core.pr_str.call(null,inst_46644);
var inst_46646 = figwheel.client.utils.log.call(null,inst_46645);
var inst_46647 = (function (){var all_files = inst_46618;
var res_SINGLEQUOTE_ = inst_46621;
var res = inst_46622;
var files_not_loaded = inst_46624;
var dependencies_that_loaded = inst_46626;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46641,inst_46643,inst_46644,inst_46645,inst_46646,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46622,inst_46618,inst_46626,inst_46621,inst_46624,inst_46641,inst_46643,inst_46644,inst_46645,inst_46646,state_val_46706,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46648 = setTimeout(inst_46647,(10));
var state_46705__$1 = (function (){var statearr_46776 = state_46705;
(statearr_46776[(33)] = inst_46641);

(statearr_46776[(34)] = inst_46646);

return statearr_46776;
})();
var statearr_46777_46840 = state_46705__$1;
(statearr_46777_46840[(2)] = inst_46648);

(statearr_46777_46840[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (16))){
var state_46705__$1 = state_46705;
var statearr_46778_46841 = state_46705__$1;
(statearr_46778_46841[(2)] = reload_dependents);

(statearr_46778_46841[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (38))){
var inst_46658 = (state_46705[(16)]);
var inst_46676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46658);
var state_46705__$1 = state_46705;
var statearr_46779_46842 = state_46705__$1;
(statearr_46779_46842[(2)] = inst_46676);

(statearr_46779_46842[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (30))){
var state_46705__$1 = state_46705;
var statearr_46780_46843 = state_46705__$1;
(statearr_46780_46843[(2)] = null);

(statearr_46780_46843[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (10))){
var inst_46578 = (state_46705[(22)]);
var inst_46580 = cljs.core.chunked_seq_QMARK_.call(null,inst_46578);
var state_46705__$1 = state_46705;
if(inst_46580){
var statearr_46781_46844 = state_46705__$1;
(statearr_46781_46844[(1)] = (13));

} else {
var statearr_46782_46845 = state_46705__$1;
(statearr_46782_46845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (18))){
var inst_46612 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
if(cljs.core.truth_(inst_46612)){
var statearr_46783_46846 = state_46705__$1;
(statearr_46783_46846[(1)] = (19));

} else {
var statearr_46784_46847 = state_46705__$1;
(statearr_46784_46847[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (42))){
var state_46705__$1 = state_46705;
var statearr_46785_46848 = state_46705__$1;
(statearr_46785_46848[(2)] = null);

(statearr_46785_46848[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (37))){
var inst_46671 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46786_46849 = state_46705__$1;
(statearr_46786_46849[(2)] = inst_46671);

(statearr_46786_46849[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (8))){
var inst_46578 = (state_46705[(22)]);
var inst_46565 = (state_46705[(7)]);
var inst_46578__$1 = cljs.core.seq.call(null,inst_46565);
var state_46705__$1 = (function (){var statearr_46787 = state_46705;
(statearr_46787[(22)] = inst_46578__$1);

return statearr_46787;
})();
if(inst_46578__$1){
var statearr_46788_46850 = state_46705__$1;
(statearr_46788_46850[(1)] = (10));

} else {
var statearr_46789_46851 = state_46705__$1;
(statearr_46789_46851[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38761__auto__,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto____0 = (function (){
var statearr_46790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46790[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto__);

(statearr_46790[(1)] = (1));

return statearr_46790;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto____1 = (function (state_46705){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_46705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e46791){if((e46791 instanceof Object)){
var ex__38765__auto__ = e46791;
var statearr_46792_46852 = state_46705;
(statearr_46792_46852[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46853 = state_46705;
state_46705 = G__46853;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto__ = function(state_46705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto____1.call(this,state_46705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38930__auto__ = (function (){var statearr_46793 = f__38929__auto__.call(null);
(statearr_46793[(6)] = c__38928__auto__);

return statearr_46793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__,map__46550,map__46550__$1,opts,before_jsload,on_jsload,reload_dependents,map__46551,map__46551__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38928__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46856,link){
var map__46857 = p__46856;
var map__46857__$1 = (((((!((map__46857 == null))))?(((((map__46857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46857):map__46857);
var file = cljs.core.get.call(null,map__46857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__46857,map__46857__$1,file){
return (function (p1__46854_SHARP_,p2__46855_SHARP_){
if(cljs.core._EQ_.call(null,p1__46854_SHARP_,p2__46855_SHARP_)){
return p1__46854_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__46857,map__46857__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46860){
var map__46861 = p__46860;
var map__46861__$1 = (((((!((map__46861 == null))))?(((((map__46861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46861):map__46861);
var match_length = cljs.core.get.call(null,map__46861__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46861__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46859_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46859_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46863_SHARP_,p2__46864_SHARP_){
return cljs.core.assoc.call(null,p1__46863_SHARP_,cljs.core.get.call(null,p2__46864_SHARP_,key),p2__46864_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_46865 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46865);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46865);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46866,p__46867){
var map__46868 = p__46866;
var map__46868__$1 = (((((!((map__46868 == null))))?(((((map__46868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46868):map__46868);
var on_cssload = cljs.core.get.call(null,map__46868__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46869 = p__46867;
var map__46869__$1 = (((((!((map__46869 == null))))?(((((map__46869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46869):map__46869);
var files_msg = map__46869__$1;
var files = cljs.core.get.call(null,map__46869__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1561561432605

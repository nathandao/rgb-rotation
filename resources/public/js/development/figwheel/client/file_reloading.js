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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36033_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36033_SHARP_));
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
var seq__36034 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36035 = null;
var count__36036 = (0);
var i__36037 = (0);
while(true){
if((i__36037 < count__36036)){
var n = cljs.core._nth.call(null,chunk__36035,i__36037);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36038 = seq__36034;
var G__36039 = chunk__36035;
var G__36040 = count__36036;
var G__36041 = (i__36037 + (1));
seq__36034 = G__36038;
chunk__36035 = G__36039;
count__36036 = G__36040;
i__36037 = G__36041;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36034);
if(temp__5457__auto__){
var seq__36034__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36034__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36034__$1);
var G__36042 = cljs.core.chunk_rest.call(null,seq__36034__$1);
var G__36043 = c__4550__auto__;
var G__36044 = cljs.core.count.call(null,c__4550__auto__);
var G__36045 = (0);
seq__36034 = G__36042;
chunk__36035 = G__36043;
count__36036 = G__36044;
i__36037 = G__36045;
continue;
} else {
var n = cljs.core.first.call(null,seq__36034__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36046 = cljs.core.next.call(null,seq__36034__$1);
var G__36047 = null;
var G__36048 = (0);
var G__36049 = (0);
seq__36034 = G__36046;
chunk__36035 = G__36047;
count__36036 = G__36048;
i__36037 = G__36049;
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
return cljs.core.some.call(null,(function (p__36050){
var vec__36051 = p__36050;
var _ = cljs.core.nth.call(null,vec__36051,(0),null);
var v = cljs.core.nth.call(null,vec__36051,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__36054){
var vec__36055 = p__36054;
var k = cljs.core.nth.call(null,vec__36055,(0),null);
var v = cljs.core.nth.call(null,vec__36055,(1),null);
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

var seq__36067_36075 = cljs.core.seq.call(null,deps);
var chunk__36068_36076 = null;
var count__36069_36077 = (0);
var i__36070_36078 = (0);
while(true){
if((i__36070_36078 < count__36069_36077)){
var dep_36079 = cljs.core._nth.call(null,chunk__36068_36076,i__36070_36078);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_36079;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36079));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36079,(depth + (1)),state);
} else {
}


var G__36080 = seq__36067_36075;
var G__36081 = chunk__36068_36076;
var G__36082 = count__36069_36077;
var G__36083 = (i__36070_36078 + (1));
seq__36067_36075 = G__36080;
chunk__36068_36076 = G__36081;
count__36069_36077 = G__36082;
i__36070_36078 = G__36083;
continue;
} else {
var temp__5457__auto___36084 = cljs.core.seq.call(null,seq__36067_36075);
if(temp__5457__auto___36084){
var seq__36067_36085__$1 = temp__5457__auto___36084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36067_36085__$1)){
var c__4550__auto___36086 = cljs.core.chunk_first.call(null,seq__36067_36085__$1);
var G__36087 = cljs.core.chunk_rest.call(null,seq__36067_36085__$1);
var G__36088 = c__4550__auto___36086;
var G__36089 = cljs.core.count.call(null,c__4550__auto___36086);
var G__36090 = (0);
seq__36067_36075 = G__36087;
chunk__36068_36076 = G__36088;
count__36069_36077 = G__36089;
i__36070_36078 = G__36090;
continue;
} else {
var dep_36091 = cljs.core.first.call(null,seq__36067_36085__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_36091;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36091));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36091,(depth + (1)),state);
} else {
}


var G__36092 = cljs.core.next.call(null,seq__36067_36085__$1);
var G__36093 = null;
var G__36094 = (0);
var G__36095 = (0);
seq__36067_36075 = G__36092;
chunk__36068_36076 = G__36093;
count__36069_36077 = G__36094;
i__36070_36078 = G__36095;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36071){
var vec__36072 = p__36071;
var seq__36073 = cljs.core.seq.call(null,vec__36072);
var first__36074 = cljs.core.first.call(null,seq__36073);
var seq__36073__$1 = cljs.core.next.call(null,seq__36073);
var x = first__36074;
var xs = seq__36073__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36072,seq__36073,first__36074,seq__36073__$1,x,xs,get_deps__$1){
return (function (p1__36058_SHARP_){
return clojure.set.difference.call(null,p1__36058_SHARP_,x);
});})(vec__36072,seq__36073,first__36074,seq__36073__$1,x,xs,get_deps__$1))
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
var seq__36096 = cljs.core.seq.call(null,provides);
var chunk__36097 = null;
var count__36098 = (0);
var i__36099 = (0);
while(true){
if((i__36099 < count__36098)){
var prov = cljs.core._nth.call(null,chunk__36097,i__36099);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36108_36116 = cljs.core.seq.call(null,requires);
var chunk__36109_36117 = null;
var count__36110_36118 = (0);
var i__36111_36119 = (0);
while(true){
if((i__36111_36119 < count__36110_36118)){
var req_36120 = cljs.core._nth.call(null,chunk__36109_36117,i__36111_36119);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36120,prov);


var G__36121 = seq__36108_36116;
var G__36122 = chunk__36109_36117;
var G__36123 = count__36110_36118;
var G__36124 = (i__36111_36119 + (1));
seq__36108_36116 = G__36121;
chunk__36109_36117 = G__36122;
count__36110_36118 = G__36123;
i__36111_36119 = G__36124;
continue;
} else {
var temp__5457__auto___36125 = cljs.core.seq.call(null,seq__36108_36116);
if(temp__5457__auto___36125){
var seq__36108_36126__$1 = temp__5457__auto___36125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36108_36126__$1)){
var c__4550__auto___36127 = cljs.core.chunk_first.call(null,seq__36108_36126__$1);
var G__36128 = cljs.core.chunk_rest.call(null,seq__36108_36126__$1);
var G__36129 = c__4550__auto___36127;
var G__36130 = cljs.core.count.call(null,c__4550__auto___36127);
var G__36131 = (0);
seq__36108_36116 = G__36128;
chunk__36109_36117 = G__36129;
count__36110_36118 = G__36130;
i__36111_36119 = G__36131;
continue;
} else {
var req_36132 = cljs.core.first.call(null,seq__36108_36126__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36132,prov);


var G__36133 = cljs.core.next.call(null,seq__36108_36126__$1);
var G__36134 = null;
var G__36135 = (0);
var G__36136 = (0);
seq__36108_36116 = G__36133;
chunk__36109_36117 = G__36134;
count__36110_36118 = G__36135;
i__36111_36119 = G__36136;
continue;
}
} else {
}
}
break;
}


var G__36137 = seq__36096;
var G__36138 = chunk__36097;
var G__36139 = count__36098;
var G__36140 = (i__36099 + (1));
seq__36096 = G__36137;
chunk__36097 = G__36138;
count__36098 = G__36139;
i__36099 = G__36140;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36096);
if(temp__5457__auto__){
var seq__36096__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36096__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36096__$1);
var G__36141 = cljs.core.chunk_rest.call(null,seq__36096__$1);
var G__36142 = c__4550__auto__;
var G__36143 = cljs.core.count.call(null,c__4550__auto__);
var G__36144 = (0);
seq__36096 = G__36141;
chunk__36097 = G__36142;
count__36098 = G__36143;
i__36099 = G__36144;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36096__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36112_36145 = cljs.core.seq.call(null,requires);
var chunk__36113_36146 = null;
var count__36114_36147 = (0);
var i__36115_36148 = (0);
while(true){
if((i__36115_36148 < count__36114_36147)){
var req_36149 = cljs.core._nth.call(null,chunk__36113_36146,i__36115_36148);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36149,prov);


var G__36150 = seq__36112_36145;
var G__36151 = chunk__36113_36146;
var G__36152 = count__36114_36147;
var G__36153 = (i__36115_36148 + (1));
seq__36112_36145 = G__36150;
chunk__36113_36146 = G__36151;
count__36114_36147 = G__36152;
i__36115_36148 = G__36153;
continue;
} else {
var temp__5457__auto___36154__$1 = cljs.core.seq.call(null,seq__36112_36145);
if(temp__5457__auto___36154__$1){
var seq__36112_36155__$1 = temp__5457__auto___36154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36112_36155__$1)){
var c__4550__auto___36156 = cljs.core.chunk_first.call(null,seq__36112_36155__$1);
var G__36157 = cljs.core.chunk_rest.call(null,seq__36112_36155__$1);
var G__36158 = c__4550__auto___36156;
var G__36159 = cljs.core.count.call(null,c__4550__auto___36156);
var G__36160 = (0);
seq__36112_36145 = G__36157;
chunk__36113_36146 = G__36158;
count__36114_36147 = G__36159;
i__36115_36148 = G__36160;
continue;
} else {
var req_36161 = cljs.core.first.call(null,seq__36112_36155__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36161,prov);


var G__36162 = cljs.core.next.call(null,seq__36112_36155__$1);
var G__36163 = null;
var G__36164 = (0);
var G__36165 = (0);
seq__36112_36145 = G__36162;
chunk__36113_36146 = G__36163;
count__36114_36147 = G__36164;
i__36115_36148 = G__36165;
continue;
}
} else {
}
}
break;
}


var G__36166 = cljs.core.next.call(null,seq__36096__$1);
var G__36167 = null;
var G__36168 = (0);
var G__36169 = (0);
seq__36096 = G__36166;
chunk__36097 = G__36167;
count__36098 = G__36168;
i__36099 = G__36169;
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
var seq__36170_36174 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36171_36175 = null;
var count__36172_36176 = (0);
var i__36173_36177 = (0);
while(true){
if((i__36173_36177 < count__36172_36176)){
var ns_36178 = cljs.core._nth.call(null,chunk__36171_36175,i__36173_36177);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36178);


var G__36179 = seq__36170_36174;
var G__36180 = chunk__36171_36175;
var G__36181 = count__36172_36176;
var G__36182 = (i__36173_36177 + (1));
seq__36170_36174 = G__36179;
chunk__36171_36175 = G__36180;
count__36172_36176 = G__36181;
i__36173_36177 = G__36182;
continue;
} else {
var temp__5457__auto___36183 = cljs.core.seq.call(null,seq__36170_36174);
if(temp__5457__auto___36183){
var seq__36170_36184__$1 = temp__5457__auto___36183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36170_36184__$1)){
var c__4550__auto___36185 = cljs.core.chunk_first.call(null,seq__36170_36184__$1);
var G__36186 = cljs.core.chunk_rest.call(null,seq__36170_36184__$1);
var G__36187 = c__4550__auto___36185;
var G__36188 = cljs.core.count.call(null,c__4550__auto___36185);
var G__36189 = (0);
seq__36170_36174 = G__36186;
chunk__36171_36175 = G__36187;
count__36172_36176 = G__36188;
i__36173_36177 = G__36189;
continue;
} else {
var ns_36190 = cljs.core.first.call(null,seq__36170_36184__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36190);


var G__36191 = cljs.core.next.call(null,seq__36170_36184__$1);
var G__36192 = null;
var G__36193 = (0);
var G__36194 = (0);
seq__36170_36174 = G__36191;
chunk__36171_36175 = G__36192;
count__36172_36176 = G__36193;
i__36173_36177 = G__36194;
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
var G__36195__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36196__i = 0, G__36196__a = new Array(arguments.length -  0);
while (G__36196__i < G__36196__a.length) {G__36196__a[G__36196__i] = arguments[G__36196__i + 0]; ++G__36196__i;}
  args = new cljs.core.IndexedSeq(G__36196__a,0,null);
} 
return G__36195__delegate.call(this,args);};
G__36195.cljs$lang$maxFixedArity = 0;
G__36195.cljs$lang$applyTo = (function (arglist__36197){
var args = cljs.core.seq(arglist__36197);
return G__36195__delegate(args);
});
G__36195.cljs$core$IFn$_invoke$arity$variadic = G__36195__delegate;
return G__36195;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36198_SHARP_,p2__36199_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36198_SHARP_)),p2__36199_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36200_SHARP_,p2__36201_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36200_SHARP_),p2__36201_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36202 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36202.addCallback(((function (G__36202){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36202))
);

G__36202.addErrback(((function (G__36202){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36202))
);

return G__36202;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36203){if((e36203 instanceof Error)){
var e = e36203;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36203;

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
}catch (e36204){if((e36204 instanceof Error)){
var e = e36204;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36204;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36205 = cljs.core._EQ_;
var expr__36206 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36205.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36206))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36205.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36206))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36205.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36206))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36205,expr__36206){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36205,expr__36206))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36208,callback){
var map__36209 = p__36208;
var map__36209__$1 = (((((!((map__36209 == null))))?(((((map__36209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36209):map__36209);
var file_msg = map__36209__$1;
var request_url = cljs.core.get.call(null,map__36209__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36209,map__36209__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36209,map__36209__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35275__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto__){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto__){
return (function (state_36247){
var state_val_36248 = (state_36247[(1)]);
if((state_val_36248 === (7))){
var inst_36243 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36249_36275 = state_36247__$1;
(statearr_36249_36275[(2)] = inst_36243);

(statearr_36249_36275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (1))){
var state_36247__$1 = state_36247;
var statearr_36250_36276 = state_36247__$1;
(statearr_36250_36276[(2)] = null);

(statearr_36250_36276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (4))){
var inst_36213 = (state_36247[(7)]);
var inst_36213__$1 = (state_36247[(2)]);
var state_36247__$1 = (function (){var statearr_36251 = state_36247;
(statearr_36251[(7)] = inst_36213__$1);

return statearr_36251;
})();
if(cljs.core.truth_(inst_36213__$1)){
var statearr_36252_36277 = state_36247__$1;
(statearr_36252_36277[(1)] = (5));

} else {
var statearr_36253_36278 = state_36247__$1;
(statearr_36253_36278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (15))){
var inst_36228 = (state_36247[(8)]);
var inst_36226 = (state_36247[(9)]);
var inst_36230 = inst_36228.call(null,inst_36226);
var state_36247__$1 = state_36247;
var statearr_36254_36279 = state_36247__$1;
(statearr_36254_36279[(2)] = inst_36230);

(statearr_36254_36279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (13))){
var inst_36237 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36255_36280 = state_36247__$1;
(statearr_36255_36280[(2)] = inst_36237);

(statearr_36255_36280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (6))){
var state_36247__$1 = state_36247;
var statearr_36256_36281 = state_36247__$1;
(statearr_36256_36281[(2)] = null);

(statearr_36256_36281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (17))){
var inst_36234 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36257_36282 = state_36247__$1;
(statearr_36257_36282[(2)] = inst_36234);

(statearr_36257_36282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (3))){
var inst_36245 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36247__$1,inst_36245);
} else {
if((state_val_36248 === (12))){
var state_36247__$1 = state_36247;
var statearr_36258_36283 = state_36247__$1;
(statearr_36258_36283[(2)] = null);

(statearr_36258_36283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (2))){
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36247__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36248 === (11))){
var inst_36218 = (state_36247[(10)]);
var inst_36224 = figwheel.client.file_reloading.blocking_load.call(null,inst_36218);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36247__$1,(14),inst_36224);
} else {
if((state_val_36248 === (9))){
var inst_36218 = (state_36247[(10)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36218)){
var statearr_36259_36284 = state_36247__$1;
(statearr_36259_36284[(1)] = (11));

} else {
var statearr_36260_36285 = state_36247__$1;
(statearr_36260_36285[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (5))){
var inst_36213 = (state_36247[(7)]);
var inst_36219 = (state_36247[(11)]);
var inst_36218 = cljs.core.nth.call(null,inst_36213,(0),null);
var inst_36219__$1 = cljs.core.nth.call(null,inst_36213,(1),null);
var state_36247__$1 = (function (){var statearr_36261 = state_36247;
(statearr_36261[(10)] = inst_36218);

(statearr_36261[(11)] = inst_36219__$1);

return statearr_36261;
})();
if(cljs.core.truth_(inst_36219__$1)){
var statearr_36262_36286 = state_36247__$1;
(statearr_36262_36286[(1)] = (8));

} else {
var statearr_36263_36287 = state_36247__$1;
(statearr_36263_36287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (14))){
var inst_36218 = (state_36247[(10)]);
var inst_36228 = (state_36247[(8)]);
var inst_36226 = (state_36247[(2)]);
var inst_36227 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36228__$1 = cljs.core.get.call(null,inst_36227,inst_36218);
var state_36247__$1 = (function (){var statearr_36264 = state_36247;
(statearr_36264[(8)] = inst_36228__$1);

(statearr_36264[(9)] = inst_36226);

return statearr_36264;
})();
if(cljs.core.truth_(inst_36228__$1)){
var statearr_36265_36288 = state_36247__$1;
(statearr_36265_36288[(1)] = (15));

} else {
var statearr_36266_36289 = state_36247__$1;
(statearr_36266_36289[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (16))){
var inst_36226 = (state_36247[(9)]);
var inst_36232 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36226);
var state_36247__$1 = state_36247;
var statearr_36267_36290 = state_36247__$1;
(statearr_36267_36290[(2)] = inst_36232);

(statearr_36267_36290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (10))){
var inst_36239 = (state_36247[(2)]);
var state_36247__$1 = (function (){var statearr_36268 = state_36247;
(statearr_36268[(12)] = inst_36239);

return statearr_36268;
})();
var statearr_36269_36291 = state_36247__$1;
(statearr_36269_36291[(2)] = null);

(statearr_36269_36291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (8))){
var inst_36219 = (state_36247[(11)]);
var inst_36221 = eval(inst_36219);
var state_36247__$1 = state_36247;
var statearr_36270_36292 = state_36247__$1;
(statearr_36270_36292[(2)] = inst_36221);

(statearr_36270_36292[(1)] = (10));


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
});})(c__35275__auto__))
;
return ((function (switch__35252__auto__,c__35275__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35253__auto__ = null;
var figwheel$client$file_reloading$state_machine__35253__auto____0 = (function (){
var statearr_36271 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36271[(0)] = figwheel$client$file_reloading$state_machine__35253__auto__);

(statearr_36271[(1)] = (1));

return statearr_36271;
});
var figwheel$client$file_reloading$state_machine__35253__auto____1 = (function (state_36247){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_36247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e36272){if((e36272 instanceof Object)){
var ex__35256__auto__ = e36272;
var statearr_36273_36293 = state_36247;
(statearr_36273_36293[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36294 = state_36247;
state_36247 = G__36294;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35253__auto__ = function(state_36247){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35253__auto____1.call(this,state_36247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35253__auto____0;
figwheel$client$file_reloading$state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35253__auto____1;
return figwheel$client$file_reloading$state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto__))
})();
var state__35277__auto__ = (function (){var statearr_36274 = f__35276__auto__.call(null);
(statearr_36274[(6)] = c__35275__auto__);

return statearr_36274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto__))
);

return c__35275__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36296 = arguments.length;
switch (G__36296) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36298,callback){
var map__36299 = p__36298;
var map__36299__$1 = (((((!((map__36299 == null))))?(((((map__36299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36299):map__36299);
var file_msg = map__36299__$1;
var namespace = cljs.core.get.call(null,map__36299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36299,map__36299__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36299,map__36299__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36301){
var map__36302 = p__36301;
var map__36302__$1 = (((((!((map__36302 == null))))?(((((map__36302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36302):map__36302);
var file_msg = map__36302__$1;
var namespace = cljs.core.get.call(null,map__36302__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36304){
var map__36305 = p__36304;
var map__36305__$1 = (((((!((map__36305 == null))))?(((((map__36305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36305):map__36305);
var file_msg = map__36305__$1;
var namespace = cljs.core.get.call(null,map__36305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36307,callback){
var map__36308 = p__36307;
var map__36308__$1 = (((((!((map__36308 == null))))?(((((map__36308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36308):map__36308);
var file_msg = map__36308__$1;
var request_url = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35275__auto___36358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto___36358,out){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto___36358,out){
return (function (state_36343){
var state_val_36344 = (state_36343[(1)]);
if((state_val_36344 === (1))){
var inst_36317 = cljs.core.seq.call(null,files);
var inst_36318 = cljs.core.first.call(null,inst_36317);
var inst_36319 = cljs.core.next.call(null,inst_36317);
var inst_36320 = files;
var state_36343__$1 = (function (){var statearr_36345 = state_36343;
(statearr_36345[(7)] = inst_36320);

(statearr_36345[(8)] = inst_36318);

(statearr_36345[(9)] = inst_36319);

return statearr_36345;
})();
var statearr_36346_36359 = state_36343__$1;
(statearr_36346_36359[(2)] = null);

(statearr_36346_36359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (2))){
var inst_36320 = (state_36343[(7)]);
var inst_36326 = (state_36343[(10)]);
var inst_36325 = cljs.core.seq.call(null,inst_36320);
var inst_36326__$1 = cljs.core.first.call(null,inst_36325);
var inst_36327 = cljs.core.next.call(null,inst_36325);
var inst_36328 = (inst_36326__$1 == null);
var inst_36329 = cljs.core.not.call(null,inst_36328);
var state_36343__$1 = (function (){var statearr_36347 = state_36343;
(statearr_36347[(10)] = inst_36326__$1);

(statearr_36347[(11)] = inst_36327);

return statearr_36347;
})();
if(inst_36329){
var statearr_36348_36360 = state_36343__$1;
(statearr_36348_36360[(1)] = (4));

} else {
var statearr_36349_36361 = state_36343__$1;
(statearr_36349_36361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (3))){
var inst_36341 = (state_36343[(2)]);
var state_36343__$1 = state_36343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36343__$1,inst_36341);
} else {
if((state_val_36344 === (4))){
var inst_36326 = (state_36343[(10)]);
var inst_36331 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36326);
var state_36343__$1 = state_36343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36343__$1,(7),inst_36331);
} else {
if((state_val_36344 === (5))){
var inst_36337 = cljs.core.async.close_BANG_.call(null,out);
var state_36343__$1 = state_36343;
var statearr_36350_36362 = state_36343__$1;
(statearr_36350_36362[(2)] = inst_36337);

(statearr_36350_36362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (6))){
var inst_36339 = (state_36343[(2)]);
var state_36343__$1 = state_36343;
var statearr_36351_36363 = state_36343__$1;
(statearr_36351_36363[(2)] = inst_36339);

(statearr_36351_36363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36344 === (7))){
var inst_36327 = (state_36343[(11)]);
var inst_36333 = (state_36343[(2)]);
var inst_36334 = cljs.core.async.put_BANG_.call(null,out,inst_36333);
var inst_36320 = inst_36327;
var state_36343__$1 = (function (){var statearr_36352 = state_36343;
(statearr_36352[(7)] = inst_36320);

(statearr_36352[(12)] = inst_36334);

return statearr_36352;
})();
var statearr_36353_36364 = state_36343__$1;
(statearr_36353_36364[(2)] = null);

(statearr_36353_36364[(1)] = (2));


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
});})(c__35275__auto___36358,out))
;
return ((function (switch__35252__auto__,c__35275__auto___36358,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto____0 = (function (){
var statearr_36354 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36354[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto__);

(statearr_36354[(1)] = (1));

return statearr_36354;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto____1 = (function (state_36343){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_36343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e36355){if((e36355 instanceof Object)){
var ex__35256__auto__ = e36355;
var statearr_36356_36365 = state_36343;
(statearr_36356_36365[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36366 = state_36343;
state_36343 = G__36366;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto__ = function(state_36343){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto____1.call(this,state_36343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto___36358,out))
})();
var state__35277__auto__ = (function (){var statearr_36357 = f__35276__auto__.call(null);
(statearr_36357[(6)] = c__35275__auto___36358);

return statearr_36357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto___36358,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36367,opts){
var map__36368 = p__36367;
var map__36368__$1 = (((((!((map__36368 == null))))?(((((map__36368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36368):map__36368);
var eval_body = cljs.core.get.call(null,map__36368__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36368__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36370){var e = e36370;
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
return (function (p1__36371_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36371_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36372){
var vec__36373 = p__36372;
var k = cljs.core.nth.call(null,vec__36373,(0),null);
var v = cljs.core.nth.call(null,vec__36373,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36376){
var vec__36377 = p__36376;
var k = cljs.core.nth.call(null,vec__36377,(0),null);
var v = cljs.core.nth.call(null,vec__36377,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36383,p__36384){
var map__36385 = p__36383;
var map__36385__$1 = (((((!((map__36385 == null))))?(((((map__36385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36385):map__36385);
var opts = map__36385__$1;
var before_jsload = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36386 = p__36384;
var map__36386__$1 = (((((!((map__36386 == null))))?(((((map__36386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36386):map__36386);
var msg = map__36386__$1;
var files = cljs.core.get.call(null,map__36386__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36386__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36386__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35275__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36540){
var state_val_36541 = (state_36540[(1)]);
if((state_val_36541 === (7))){
var inst_36403 = (state_36540[(7)]);
var inst_36400 = (state_36540[(8)]);
var inst_36402 = (state_36540[(9)]);
var inst_36401 = (state_36540[(10)]);
var inst_36408 = cljs.core._nth.call(null,inst_36401,inst_36403);
var inst_36409 = figwheel.client.file_reloading.eval_body.call(null,inst_36408,opts);
var inst_36410 = (inst_36403 + (1));
var tmp36542 = inst_36400;
var tmp36543 = inst_36402;
var tmp36544 = inst_36401;
var inst_36400__$1 = tmp36542;
var inst_36401__$1 = tmp36544;
var inst_36402__$1 = tmp36543;
var inst_36403__$1 = inst_36410;
var state_36540__$1 = (function (){var statearr_36545 = state_36540;
(statearr_36545[(7)] = inst_36403__$1);

(statearr_36545[(8)] = inst_36400__$1);

(statearr_36545[(9)] = inst_36402__$1);

(statearr_36545[(11)] = inst_36409);

(statearr_36545[(10)] = inst_36401__$1);

return statearr_36545;
})();
var statearr_36546_36629 = state_36540__$1;
(statearr_36546_36629[(2)] = null);

(statearr_36546_36629[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (20))){
var inst_36443 = (state_36540[(12)]);
var inst_36451 = figwheel.client.file_reloading.sort_files.call(null,inst_36443);
var state_36540__$1 = state_36540;
var statearr_36547_36630 = state_36540__$1;
(statearr_36547_36630[(2)] = inst_36451);

(statearr_36547_36630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (27))){
var state_36540__$1 = state_36540;
var statearr_36548_36631 = state_36540__$1;
(statearr_36548_36631[(2)] = null);

(statearr_36548_36631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (1))){
var inst_36392 = (state_36540[(13)]);
var inst_36389 = before_jsload.call(null,files);
var inst_36390 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36391 = (function (){return ((function (inst_36392,inst_36389,inst_36390,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36380_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36380_SHARP_);
});
;})(inst_36392,inst_36389,inst_36390,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36392__$1 = cljs.core.filter.call(null,inst_36391,files);
var inst_36393 = cljs.core.not_empty.call(null,inst_36392__$1);
var state_36540__$1 = (function (){var statearr_36549 = state_36540;
(statearr_36549[(14)] = inst_36390);

(statearr_36549[(13)] = inst_36392__$1);

(statearr_36549[(15)] = inst_36389);

return statearr_36549;
})();
if(cljs.core.truth_(inst_36393)){
var statearr_36550_36632 = state_36540__$1;
(statearr_36550_36632[(1)] = (2));

} else {
var statearr_36551_36633 = state_36540__$1;
(statearr_36551_36633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (24))){
var state_36540__$1 = state_36540;
var statearr_36552_36634 = state_36540__$1;
(statearr_36552_36634[(2)] = null);

(statearr_36552_36634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (39))){
var inst_36493 = (state_36540[(16)]);
var state_36540__$1 = state_36540;
var statearr_36553_36635 = state_36540__$1;
(statearr_36553_36635[(2)] = inst_36493);

(statearr_36553_36635[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (46))){
var inst_36535 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36554_36636 = state_36540__$1;
(statearr_36554_36636[(2)] = inst_36535);

(statearr_36554_36636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (4))){
var inst_36437 = (state_36540[(2)]);
var inst_36438 = cljs.core.List.EMPTY;
var inst_36439 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36438);
var inst_36440 = (function (){return ((function (inst_36437,inst_36438,inst_36439,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36381_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36381_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36381_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36381_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_36437,inst_36438,inst_36439,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36441 = cljs.core.filter.call(null,inst_36440,files);
var inst_36442 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36443 = cljs.core.concat.call(null,inst_36441,inst_36442);
var state_36540__$1 = (function (){var statearr_36555 = state_36540;
(statearr_36555[(12)] = inst_36443);

(statearr_36555[(17)] = inst_36439);

(statearr_36555[(18)] = inst_36437);

return statearr_36555;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36556_36637 = state_36540__$1;
(statearr_36556_36637[(1)] = (16));

} else {
var statearr_36557_36638 = state_36540__$1;
(statearr_36557_36638[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (15))){
var inst_36427 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36558_36639 = state_36540__$1;
(statearr_36558_36639[(2)] = inst_36427);

(statearr_36558_36639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (21))){
var inst_36453 = (state_36540[(19)]);
var inst_36453__$1 = (state_36540[(2)]);
var inst_36454 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36453__$1);
var state_36540__$1 = (function (){var statearr_36559 = state_36540;
(statearr_36559[(19)] = inst_36453__$1);

return statearr_36559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36540__$1,(22),inst_36454);
} else {
if((state_val_36541 === (31))){
var inst_36538 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36540__$1,inst_36538);
} else {
if((state_val_36541 === (32))){
var inst_36493 = (state_36540[(16)]);
var inst_36498 = inst_36493.cljs$lang$protocol_mask$partition0$;
var inst_36499 = (inst_36498 & (64));
var inst_36500 = inst_36493.cljs$core$ISeq$;
var inst_36501 = (cljs.core.PROTOCOL_SENTINEL === inst_36500);
var inst_36502 = ((inst_36499) || (inst_36501));
var state_36540__$1 = state_36540;
if(cljs.core.truth_(inst_36502)){
var statearr_36560_36640 = state_36540__$1;
(statearr_36560_36640[(1)] = (35));

} else {
var statearr_36561_36641 = state_36540__$1;
(statearr_36561_36641[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (40))){
var inst_36515 = (state_36540[(20)]);
var inst_36514 = (state_36540[(2)]);
var inst_36515__$1 = cljs.core.get.call(null,inst_36514,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36516 = cljs.core.get.call(null,inst_36514,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36517 = cljs.core.not_empty.call(null,inst_36515__$1);
var state_36540__$1 = (function (){var statearr_36562 = state_36540;
(statearr_36562[(21)] = inst_36516);

(statearr_36562[(20)] = inst_36515__$1);

return statearr_36562;
})();
if(cljs.core.truth_(inst_36517)){
var statearr_36563_36642 = state_36540__$1;
(statearr_36563_36642[(1)] = (41));

} else {
var statearr_36564_36643 = state_36540__$1;
(statearr_36564_36643[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (33))){
var state_36540__$1 = state_36540;
var statearr_36565_36644 = state_36540__$1;
(statearr_36565_36644[(2)] = false);

(statearr_36565_36644[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (13))){
var inst_36413 = (state_36540[(22)]);
var inst_36417 = cljs.core.chunk_first.call(null,inst_36413);
var inst_36418 = cljs.core.chunk_rest.call(null,inst_36413);
var inst_36419 = cljs.core.count.call(null,inst_36417);
var inst_36400 = inst_36418;
var inst_36401 = inst_36417;
var inst_36402 = inst_36419;
var inst_36403 = (0);
var state_36540__$1 = (function (){var statearr_36566 = state_36540;
(statearr_36566[(7)] = inst_36403);

(statearr_36566[(8)] = inst_36400);

(statearr_36566[(9)] = inst_36402);

(statearr_36566[(10)] = inst_36401);

return statearr_36566;
})();
var statearr_36567_36645 = state_36540__$1;
(statearr_36567_36645[(2)] = null);

(statearr_36567_36645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (22))){
var inst_36461 = (state_36540[(23)]);
var inst_36456 = (state_36540[(24)]);
var inst_36453 = (state_36540[(19)]);
var inst_36457 = (state_36540[(25)]);
var inst_36456__$1 = (state_36540[(2)]);
var inst_36457__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36456__$1);
var inst_36458 = (function (){var all_files = inst_36453;
var res_SINGLEQUOTE_ = inst_36456__$1;
var res = inst_36457__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36461,inst_36456,inst_36453,inst_36457,inst_36456__$1,inst_36457__$1,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36382_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36382_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36461,inst_36456,inst_36453,inst_36457,inst_36456__$1,inst_36457__$1,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36459 = cljs.core.filter.call(null,inst_36458,inst_36456__$1);
var inst_36460 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36461__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36460);
var inst_36462 = cljs.core.not_empty.call(null,inst_36461__$1);
var state_36540__$1 = (function (){var statearr_36568 = state_36540;
(statearr_36568[(23)] = inst_36461__$1);

(statearr_36568[(24)] = inst_36456__$1);

(statearr_36568[(26)] = inst_36459);

(statearr_36568[(25)] = inst_36457__$1);

return statearr_36568;
})();
if(cljs.core.truth_(inst_36462)){
var statearr_36569_36646 = state_36540__$1;
(statearr_36569_36646[(1)] = (23));

} else {
var statearr_36570_36647 = state_36540__$1;
(statearr_36570_36647[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (36))){
var state_36540__$1 = state_36540;
var statearr_36571_36648 = state_36540__$1;
(statearr_36571_36648[(2)] = false);

(statearr_36571_36648[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (41))){
var inst_36515 = (state_36540[(20)]);
var inst_36519 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36520 = cljs.core.map.call(null,inst_36519,inst_36515);
var inst_36521 = cljs.core.pr_str.call(null,inst_36520);
var inst_36522 = ["figwheel-no-load meta-data: ",inst_36521].join('');
var inst_36523 = figwheel.client.utils.log.call(null,inst_36522);
var state_36540__$1 = state_36540;
var statearr_36572_36649 = state_36540__$1;
(statearr_36572_36649[(2)] = inst_36523);

(statearr_36572_36649[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (43))){
var inst_36516 = (state_36540[(21)]);
var inst_36526 = (state_36540[(2)]);
var inst_36527 = cljs.core.not_empty.call(null,inst_36516);
var state_36540__$1 = (function (){var statearr_36573 = state_36540;
(statearr_36573[(27)] = inst_36526);

return statearr_36573;
})();
if(cljs.core.truth_(inst_36527)){
var statearr_36574_36650 = state_36540__$1;
(statearr_36574_36650[(1)] = (44));

} else {
var statearr_36575_36651 = state_36540__$1;
(statearr_36575_36651[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (29))){
var inst_36461 = (state_36540[(23)]);
var inst_36456 = (state_36540[(24)]);
var inst_36493 = (state_36540[(16)]);
var inst_36453 = (state_36540[(19)]);
var inst_36459 = (state_36540[(26)]);
var inst_36457 = (state_36540[(25)]);
var inst_36489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36492 = (function (){var all_files = inst_36453;
var res_SINGLEQUOTE_ = inst_36456;
var res = inst_36457;
var files_not_loaded = inst_36459;
var dependencies_that_loaded = inst_36461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36493,inst_36453,inst_36459,inst_36457,inst_36489,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36491){
var map__36576 = p__36491;
var map__36576__$1 = (((((!((map__36576 == null))))?(((((map__36576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36576):map__36576);
var namespace = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36493,inst_36453,inst_36459,inst_36457,inst_36489,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36493__$1 = cljs.core.group_by.call(null,inst_36492,inst_36459);
var inst_36495 = (inst_36493__$1 == null);
var inst_36496 = cljs.core.not.call(null,inst_36495);
var state_36540__$1 = (function (){var statearr_36578 = state_36540;
(statearr_36578[(28)] = inst_36489);

(statearr_36578[(16)] = inst_36493__$1);

return statearr_36578;
})();
if(inst_36496){
var statearr_36579_36652 = state_36540__$1;
(statearr_36579_36652[(1)] = (32));

} else {
var statearr_36580_36653 = state_36540__$1;
(statearr_36580_36653[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (44))){
var inst_36516 = (state_36540[(21)]);
var inst_36529 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36516);
var inst_36530 = cljs.core.pr_str.call(null,inst_36529);
var inst_36531 = ["not required: ",inst_36530].join('');
var inst_36532 = figwheel.client.utils.log.call(null,inst_36531);
var state_36540__$1 = state_36540;
var statearr_36581_36654 = state_36540__$1;
(statearr_36581_36654[(2)] = inst_36532);

(statearr_36581_36654[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (6))){
var inst_36434 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36582_36655 = state_36540__$1;
(statearr_36582_36655[(2)] = inst_36434);

(statearr_36582_36655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (28))){
var inst_36459 = (state_36540[(26)]);
var inst_36486 = (state_36540[(2)]);
var inst_36487 = cljs.core.not_empty.call(null,inst_36459);
var state_36540__$1 = (function (){var statearr_36583 = state_36540;
(statearr_36583[(29)] = inst_36486);

return statearr_36583;
})();
if(cljs.core.truth_(inst_36487)){
var statearr_36584_36656 = state_36540__$1;
(statearr_36584_36656[(1)] = (29));

} else {
var statearr_36585_36657 = state_36540__$1;
(statearr_36585_36657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (25))){
var inst_36457 = (state_36540[(25)]);
var inst_36473 = (state_36540[(2)]);
var inst_36474 = cljs.core.not_empty.call(null,inst_36457);
var state_36540__$1 = (function (){var statearr_36586 = state_36540;
(statearr_36586[(30)] = inst_36473);

return statearr_36586;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36587_36658 = state_36540__$1;
(statearr_36587_36658[(1)] = (26));

} else {
var statearr_36588_36659 = state_36540__$1;
(statearr_36588_36659[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (34))){
var inst_36509 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
if(cljs.core.truth_(inst_36509)){
var statearr_36589_36660 = state_36540__$1;
(statearr_36589_36660[(1)] = (38));

} else {
var statearr_36590_36661 = state_36540__$1;
(statearr_36590_36661[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (17))){
var state_36540__$1 = state_36540;
var statearr_36591_36662 = state_36540__$1;
(statearr_36591_36662[(2)] = recompile_dependents);

(statearr_36591_36662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (3))){
var state_36540__$1 = state_36540;
var statearr_36592_36663 = state_36540__$1;
(statearr_36592_36663[(2)] = null);

(statearr_36592_36663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (12))){
var inst_36430 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36593_36664 = state_36540__$1;
(statearr_36593_36664[(2)] = inst_36430);

(statearr_36593_36664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (2))){
var inst_36392 = (state_36540[(13)]);
var inst_36399 = cljs.core.seq.call(null,inst_36392);
var inst_36400 = inst_36399;
var inst_36401 = null;
var inst_36402 = (0);
var inst_36403 = (0);
var state_36540__$1 = (function (){var statearr_36594 = state_36540;
(statearr_36594[(7)] = inst_36403);

(statearr_36594[(8)] = inst_36400);

(statearr_36594[(9)] = inst_36402);

(statearr_36594[(10)] = inst_36401);

return statearr_36594;
})();
var statearr_36595_36665 = state_36540__$1;
(statearr_36595_36665[(2)] = null);

(statearr_36595_36665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (23))){
var inst_36461 = (state_36540[(23)]);
var inst_36456 = (state_36540[(24)]);
var inst_36453 = (state_36540[(19)]);
var inst_36459 = (state_36540[(26)]);
var inst_36457 = (state_36540[(25)]);
var inst_36464 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36466 = (function (){var all_files = inst_36453;
var res_SINGLEQUOTE_ = inst_36456;
var res = inst_36457;
var files_not_loaded = inst_36459;
var dependencies_that_loaded = inst_36461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36453,inst_36459,inst_36457,inst_36464,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36465){
var map__36596 = p__36465;
var map__36596__$1 = (((((!((map__36596 == null))))?(((((map__36596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36596):map__36596);
var request_url = cljs.core.get.call(null,map__36596__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36453,inst_36459,inst_36457,inst_36464,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36467 = cljs.core.reverse.call(null,inst_36461);
var inst_36468 = cljs.core.map.call(null,inst_36466,inst_36467);
var inst_36469 = cljs.core.pr_str.call(null,inst_36468);
var inst_36470 = figwheel.client.utils.log.call(null,inst_36469);
var state_36540__$1 = (function (){var statearr_36598 = state_36540;
(statearr_36598[(31)] = inst_36464);

return statearr_36598;
})();
var statearr_36599_36666 = state_36540__$1;
(statearr_36599_36666[(2)] = inst_36470);

(statearr_36599_36666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (35))){
var state_36540__$1 = state_36540;
var statearr_36600_36667 = state_36540__$1;
(statearr_36600_36667[(2)] = true);

(statearr_36600_36667[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (19))){
var inst_36443 = (state_36540[(12)]);
var inst_36449 = figwheel.client.file_reloading.expand_files.call(null,inst_36443);
var state_36540__$1 = state_36540;
var statearr_36601_36668 = state_36540__$1;
(statearr_36601_36668[(2)] = inst_36449);

(statearr_36601_36668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (11))){
var state_36540__$1 = state_36540;
var statearr_36602_36669 = state_36540__$1;
(statearr_36602_36669[(2)] = null);

(statearr_36602_36669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (9))){
var inst_36432 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36603_36670 = state_36540__$1;
(statearr_36603_36670[(2)] = inst_36432);

(statearr_36603_36670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (5))){
var inst_36403 = (state_36540[(7)]);
var inst_36402 = (state_36540[(9)]);
var inst_36405 = (inst_36403 < inst_36402);
var inst_36406 = inst_36405;
var state_36540__$1 = state_36540;
if(cljs.core.truth_(inst_36406)){
var statearr_36604_36671 = state_36540__$1;
(statearr_36604_36671[(1)] = (7));

} else {
var statearr_36605_36672 = state_36540__$1;
(statearr_36605_36672[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (14))){
var inst_36413 = (state_36540[(22)]);
var inst_36422 = cljs.core.first.call(null,inst_36413);
var inst_36423 = figwheel.client.file_reloading.eval_body.call(null,inst_36422,opts);
var inst_36424 = cljs.core.next.call(null,inst_36413);
var inst_36400 = inst_36424;
var inst_36401 = null;
var inst_36402 = (0);
var inst_36403 = (0);
var state_36540__$1 = (function (){var statearr_36606 = state_36540;
(statearr_36606[(7)] = inst_36403);

(statearr_36606[(32)] = inst_36423);

(statearr_36606[(8)] = inst_36400);

(statearr_36606[(9)] = inst_36402);

(statearr_36606[(10)] = inst_36401);

return statearr_36606;
})();
var statearr_36607_36673 = state_36540__$1;
(statearr_36607_36673[(2)] = null);

(statearr_36607_36673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (45))){
var state_36540__$1 = state_36540;
var statearr_36608_36674 = state_36540__$1;
(statearr_36608_36674[(2)] = null);

(statearr_36608_36674[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (26))){
var inst_36461 = (state_36540[(23)]);
var inst_36456 = (state_36540[(24)]);
var inst_36453 = (state_36540[(19)]);
var inst_36459 = (state_36540[(26)]);
var inst_36457 = (state_36540[(25)]);
var inst_36476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36478 = (function (){var all_files = inst_36453;
var res_SINGLEQUOTE_ = inst_36456;
var res = inst_36457;
var files_not_loaded = inst_36459;
var dependencies_that_loaded = inst_36461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36453,inst_36459,inst_36457,inst_36476,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36477){
var map__36609 = p__36477;
var map__36609__$1 = (((((!((map__36609 == null))))?(((((map__36609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36609):map__36609);
var namespace = cljs.core.get.call(null,map__36609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36453,inst_36459,inst_36457,inst_36476,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36479 = cljs.core.map.call(null,inst_36478,inst_36457);
var inst_36480 = cljs.core.pr_str.call(null,inst_36479);
var inst_36481 = figwheel.client.utils.log.call(null,inst_36480);
var inst_36482 = (function (){var all_files = inst_36453;
var res_SINGLEQUOTE_ = inst_36456;
var res = inst_36457;
var files_not_loaded = inst_36459;
var dependencies_that_loaded = inst_36461;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36453,inst_36459,inst_36457,inst_36476,inst_36478,inst_36479,inst_36480,inst_36481,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36461,inst_36456,inst_36453,inst_36459,inst_36457,inst_36476,inst_36478,inst_36479,inst_36480,inst_36481,state_val_36541,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36483 = setTimeout(inst_36482,(10));
var state_36540__$1 = (function (){var statearr_36611 = state_36540;
(statearr_36611[(33)] = inst_36476);

(statearr_36611[(34)] = inst_36481);

return statearr_36611;
})();
var statearr_36612_36675 = state_36540__$1;
(statearr_36612_36675[(2)] = inst_36483);

(statearr_36612_36675[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (16))){
var state_36540__$1 = state_36540;
var statearr_36613_36676 = state_36540__$1;
(statearr_36613_36676[(2)] = reload_dependents);

(statearr_36613_36676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (38))){
var inst_36493 = (state_36540[(16)]);
var inst_36511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36493);
var state_36540__$1 = state_36540;
var statearr_36614_36677 = state_36540__$1;
(statearr_36614_36677[(2)] = inst_36511);

(statearr_36614_36677[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (30))){
var state_36540__$1 = state_36540;
var statearr_36615_36678 = state_36540__$1;
(statearr_36615_36678[(2)] = null);

(statearr_36615_36678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (10))){
var inst_36413 = (state_36540[(22)]);
var inst_36415 = cljs.core.chunked_seq_QMARK_.call(null,inst_36413);
var state_36540__$1 = state_36540;
if(inst_36415){
var statearr_36616_36679 = state_36540__$1;
(statearr_36616_36679[(1)] = (13));

} else {
var statearr_36617_36680 = state_36540__$1;
(statearr_36617_36680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (18))){
var inst_36447 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
if(cljs.core.truth_(inst_36447)){
var statearr_36618_36681 = state_36540__$1;
(statearr_36618_36681[(1)] = (19));

} else {
var statearr_36619_36682 = state_36540__$1;
(statearr_36619_36682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (42))){
var state_36540__$1 = state_36540;
var statearr_36620_36683 = state_36540__$1;
(statearr_36620_36683[(2)] = null);

(statearr_36620_36683[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (37))){
var inst_36506 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36621_36684 = state_36540__$1;
(statearr_36621_36684[(2)] = inst_36506);

(statearr_36621_36684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (8))){
var inst_36413 = (state_36540[(22)]);
var inst_36400 = (state_36540[(8)]);
var inst_36413__$1 = cljs.core.seq.call(null,inst_36400);
var state_36540__$1 = (function (){var statearr_36622 = state_36540;
(statearr_36622[(22)] = inst_36413__$1);

return statearr_36622;
})();
if(inst_36413__$1){
var statearr_36623_36685 = state_36540__$1;
(statearr_36623_36685[(1)] = (10));

} else {
var statearr_36624_36686 = state_36540__$1;
(statearr_36624_36686[(1)] = (11));

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
});})(c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35252__auto__,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto____0 = (function (){
var statearr_36625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36625[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto__);

(statearr_36625[(1)] = (1));

return statearr_36625;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto____1 = (function (state_36540){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_36540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e36626){if((e36626 instanceof Object)){
var ex__35256__auto__ = e36626;
var statearr_36627_36687 = state_36540;
(statearr_36627_36687[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36688 = state_36540;
state_36540 = G__36688;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto__ = function(state_36540){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto____1.call(this,state_36540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35277__auto__ = (function (){var statearr_36628 = f__35276__auto__.call(null);
(statearr_36628[(6)] = c__35275__auto__);

return statearr_36628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto__,map__36385,map__36385__$1,opts,before_jsload,on_jsload,reload_dependents,map__36386,map__36386__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35275__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36691,link){
var map__36692 = p__36691;
var map__36692__$1 = (((((!((map__36692 == null))))?(((((map__36692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36692):map__36692);
var file = cljs.core.get.call(null,map__36692__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__36692,map__36692__$1,file){
return (function (p1__36689_SHARP_,p2__36690_SHARP_){
if(cljs.core._EQ_.call(null,p1__36689_SHARP_,p2__36690_SHARP_)){
return p1__36689_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__36692,map__36692__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36695){
var map__36696 = p__36695;
var map__36696__$1 = (((((!((map__36696 == null))))?(((((map__36696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36696):map__36696);
var match_length = cljs.core.get.call(null,map__36696__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36696__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36694_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36694_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36698_SHARP_,p2__36699_SHARP_){
return cljs.core.assoc.call(null,p1__36698_SHARP_,cljs.core.get.call(null,p2__36699_SHARP_,key),p2__36699_SHARP_);
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
var loaded_f_datas_36700 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36700);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36700);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36701,p__36702){
var map__36703 = p__36701;
var map__36703__$1 = (((((!((map__36703 == null))))?(((((map__36703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36703):map__36703);
var on_cssload = cljs.core.get.call(null,map__36703__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36704 = p__36702;
var map__36704__$1 = (((((!((map__36704 == null))))?(((((map__36704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36704):map__36704);
var files_msg = map__36704__$1;
var files = cljs.core.get.call(null,map__36704__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1560798859147

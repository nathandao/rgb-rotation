// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28374){
var map__28375 = p__28374;
var map__28375__$1 = (((((!((map__28375 == null))))?(((((map__28375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28375):map__28375);
var m = map__28375__$1;
var n = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28377_28409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28378_28410 = null;
var count__28379_28411 = (0);
var i__28380_28412 = (0);
while(true){
if((i__28380_28412 < count__28379_28411)){
var f_28413 = cljs.core._nth.call(null,chunk__28378_28410,i__28380_28412);
cljs.core.println.call(null,"  ",f_28413);


var G__28414 = seq__28377_28409;
var G__28415 = chunk__28378_28410;
var G__28416 = count__28379_28411;
var G__28417 = (i__28380_28412 + (1));
seq__28377_28409 = G__28414;
chunk__28378_28410 = G__28415;
count__28379_28411 = G__28416;
i__28380_28412 = G__28417;
continue;
} else {
var temp__5457__auto___28418 = cljs.core.seq.call(null,seq__28377_28409);
if(temp__5457__auto___28418){
var seq__28377_28419__$1 = temp__5457__auto___28418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28377_28419__$1)){
var c__4550__auto___28420 = cljs.core.chunk_first.call(null,seq__28377_28419__$1);
var G__28421 = cljs.core.chunk_rest.call(null,seq__28377_28419__$1);
var G__28422 = c__4550__auto___28420;
var G__28423 = cljs.core.count.call(null,c__4550__auto___28420);
var G__28424 = (0);
seq__28377_28409 = G__28421;
chunk__28378_28410 = G__28422;
count__28379_28411 = G__28423;
i__28380_28412 = G__28424;
continue;
} else {
var f_28425 = cljs.core.first.call(null,seq__28377_28419__$1);
cljs.core.println.call(null,"  ",f_28425);


var G__28426 = cljs.core.next.call(null,seq__28377_28419__$1);
var G__28427 = null;
var G__28428 = (0);
var G__28429 = (0);
seq__28377_28409 = G__28426;
chunk__28378_28410 = G__28427;
count__28379_28411 = G__28428;
i__28380_28412 = G__28429;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28430 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28430);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28430)))?cljs.core.second.call(null,arglists_28430):arglists_28430));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28381_28431 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28382_28432 = null;
var count__28383_28433 = (0);
var i__28384_28434 = (0);
while(true){
if((i__28384_28434 < count__28383_28433)){
var vec__28395_28435 = cljs.core._nth.call(null,chunk__28382_28432,i__28384_28434);
var name_28436 = cljs.core.nth.call(null,vec__28395_28435,(0),null);
var map__28398_28437 = cljs.core.nth.call(null,vec__28395_28435,(1),null);
var map__28398_28438__$1 = (((((!((map__28398_28437 == null))))?(((((map__28398_28437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28398_28437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28398_28437):map__28398_28437);
var doc_28439 = cljs.core.get.call(null,map__28398_28438__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28440 = cljs.core.get.call(null,map__28398_28438__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28436);

cljs.core.println.call(null," ",arglists_28440);

if(cljs.core.truth_(doc_28439)){
cljs.core.println.call(null," ",doc_28439);
} else {
}


var G__28441 = seq__28381_28431;
var G__28442 = chunk__28382_28432;
var G__28443 = count__28383_28433;
var G__28444 = (i__28384_28434 + (1));
seq__28381_28431 = G__28441;
chunk__28382_28432 = G__28442;
count__28383_28433 = G__28443;
i__28384_28434 = G__28444;
continue;
} else {
var temp__5457__auto___28445 = cljs.core.seq.call(null,seq__28381_28431);
if(temp__5457__auto___28445){
var seq__28381_28446__$1 = temp__5457__auto___28445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28381_28446__$1)){
var c__4550__auto___28447 = cljs.core.chunk_first.call(null,seq__28381_28446__$1);
var G__28448 = cljs.core.chunk_rest.call(null,seq__28381_28446__$1);
var G__28449 = c__4550__auto___28447;
var G__28450 = cljs.core.count.call(null,c__4550__auto___28447);
var G__28451 = (0);
seq__28381_28431 = G__28448;
chunk__28382_28432 = G__28449;
count__28383_28433 = G__28450;
i__28384_28434 = G__28451;
continue;
} else {
var vec__28400_28452 = cljs.core.first.call(null,seq__28381_28446__$1);
var name_28453 = cljs.core.nth.call(null,vec__28400_28452,(0),null);
var map__28403_28454 = cljs.core.nth.call(null,vec__28400_28452,(1),null);
var map__28403_28455__$1 = (((((!((map__28403_28454 == null))))?(((((map__28403_28454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28403_28454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403_28454):map__28403_28454);
var doc_28456 = cljs.core.get.call(null,map__28403_28455__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28457 = cljs.core.get.call(null,map__28403_28455__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28453);

cljs.core.println.call(null," ",arglists_28457);

if(cljs.core.truth_(doc_28456)){
cljs.core.println.call(null," ",doc_28456);
} else {
}


var G__28458 = cljs.core.next.call(null,seq__28381_28446__$1);
var G__28459 = null;
var G__28460 = (0);
var G__28461 = (0);
seq__28381_28431 = G__28458;
chunk__28382_28432 = G__28459;
count__28383_28433 = G__28460;
i__28384_28434 = G__28461;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28405 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28406 = null;
var count__28407 = (0);
var i__28408 = (0);
while(true){
if((i__28408 < count__28407)){
var role = cljs.core._nth.call(null,chunk__28406,i__28408);
var temp__5457__auto___28462__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28462__$1)){
var spec_28463 = temp__5457__auto___28462__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28463));
} else {
}


var G__28464 = seq__28405;
var G__28465 = chunk__28406;
var G__28466 = count__28407;
var G__28467 = (i__28408 + (1));
seq__28405 = G__28464;
chunk__28406 = G__28465;
count__28407 = G__28466;
i__28408 = G__28467;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28405);
if(temp__5457__auto____$1){
var seq__28405__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28405__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28405__$1);
var G__28468 = cljs.core.chunk_rest.call(null,seq__28405__$1);
var G__28469 = c__4550__auto__;
var G__28470 = cljs.core.count.call(null,c__4550__auto__);
var G__28471 = (0);
seq__28405 = G__28468;
chunk__28406 = G__28469;
count__28407 = G__28470;
i__28408 = G__28471;
continue;
} else {
var role = cljs.core.first.call(null,seq__28405__$1);
var temp__5457__auto___28472__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28472__$2)){
var spec_28473 = temp__5457__auto___28472__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28473));
} else {
}


var G__28474 = cljs.core.next.call(null,seq__28405__$1);
var G__28475 = null;
var G__28476 = (0);
var G__28477 = (0);
seq__28405 = G__28474;
chunk__28406 = G__28475;
count__28407 = G__28476;
i__28408 = G__28477;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28478 = cljs.core.conj.call(null,via,t);
var G__28479 = cljs.core.ex_cause.call(null,t);
via = G__28478;
t = G__28479;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28482 = datafied_throwable;
var map__28482__$1 = (((((!((map__28482 == null))))?(((((map__28482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28482):map__28482);
var via = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28483 = cljs.core.last.call(null,via);
var map__28483__$1 = (((((!((map__28483 == null))))?(((((map__28483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28483):map__28483);
var type = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28484 = data;
var map__28484__$1 = (((((!((map__28484 == null))))?(((((map__28484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28484):map__28484);
var problems = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28485 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28485__$1 = (((((!((map__28485 == null))))?(((((map__28485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28485):map__28485);
var top_data = map__28485__$1;
var source = cljs.core.get.call(null,map__28485__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28490 = phase;
var G__28490__$1 = (((G__28490 instanceof cljs.core.Keyword))?G__28490.fqn:null);
switch (G__28490__$1) {
case "read-source":
var map__28491 = data;
var map__28491__$1 = (((((!((map__28491 == null))))?(((((map__28491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28491):map__28491);
var line = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28493 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28493__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28493,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28493);
var G__28493__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28493__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28493__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28493__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28493__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28494 = top_data;
var G__28494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28494);
var G__28494__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28494__$1);
var G__28494__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28494__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28494__$2);
var G__28494__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28494__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28494__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28494__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28494__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28495 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28495,(0),null);
var method = cljs.core.nth.call(null,vec__28495,(1),null);
var file = cljs.core.nth.call(null,vec__28495,(2),null);
var line = cljs.core.nth.call(null,vec__28495,(3),null);
var G__28498 = top_data;
var G__28498__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28498,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28498);
var G__28498__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28498__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28498__$1);
var G__28498__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28498__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28498__$2);
var G__28498__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28498__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28498__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28498__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28498__$4;
}

break;
case "execution":
var vec__28499 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28499,(0),null);
var method = cljs.core.nth.call(null,vec__28499,(1),null);
var file = cljs.core.nth.call(null,vec__28499,(2),null);
var line = cljs.core.nth.call(null,vec__28499,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28499,source__$1,method,file,line,G__28490,G__28490__$1,map__28482,map__28482__$1,via,trace,phase,map__28483,map__28483__$1,type,message,data,map__28484,map__28484__$1,problems,fn,caller,map__28485,map__28485__$1,top_data,source){
return (function (p1__28481_SHARP_){
var or__4131__auto__ = (p1__28481_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28481_SHARP_);
}
});})(vec__28499,source__$1,method,file,line,G__28490,G__28490__$1,map__28482,map__28482__$1,via,trace,phase,map__28483,map__28483__$1,type,message,data,map__28484,map__28484__$1,problems,fn,caller,map__28485,map__28485__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28502 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28502__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28502,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28502);
var G__28502__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28502__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28502__$1);
var G__28502__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28502__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28502__$2);
var G__28502__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28502__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28502__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28502__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28502__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28490__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28506){
var map__28507 = p__28506;
var map__28507__$1 = (((((!((map__28507 == null))))?(((((map__28507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28507):map__28507);
var triage_data = map__28507__$1;
var phase = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28507__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28509 = phase;
var G__28509__$1 = (((G__28509 instanceof cljs.core.Keyword))?G__28509.fqn:null);
switch (G__28509__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28510_28519 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28511_28520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28512_28521 = true;
var _STAR_print_fn_STAR__temp_val__28513_28522 = ((function (_STAR_print_newline_STAR__orig_val__28510_28519,_STAR_print_fn_STAR__orig_val__28511_28520,_STAR_print_newline_STAR__temp_val__28512_28521,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28510_28519,_STAR_print_fn_STAR__orig_val__28511_28520,_STAR_print_newline_STAR__temp_val__28512_28521,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28512_28521;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28513_28522;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28510_28519,_STAR_print_fn_STAR__orig_val__28511_28520,_STAR_print_newline_STAR__temp_val__28512_28521,_STAR_print_fn_STAR__temp_val__28513_28522,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28510_28519,_STAR_print_fn_STAR__orig_val__28511_28520,_STAR_print_newline_STAR__temp_val__28512_28521,_STAR_print_fn_STAR__temp_val__28513_28522,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28504_SHARP_){
return cljs.core.dissoc.call(null,p1__28504_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28510_28519,_STAR_print_fn_STAR__orig_val__28511_28520,_STAR_print_newline_STAR__temp_val__28512_28521,_STAR_print_fn_STAR__temp_val__28513_28522,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28510_28519,_STAR_print_fn_STAR__orig_val__28511_28520,_STAR_print_newline_STAR__temp_val__28512_28521,_STAR_print_fn_STAR__temp_val__28513_28522,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28511_28520;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28510_28519;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28514_28523 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28515_28524 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28516_28525 = true;
var _STAR_print_fn_STAR__temp_val__28517_28526 = ((function (_STAR_print_newline_STAR__orig_val__28514_28523,_STAR_print_fn_STAR__orig_val__28515_28524,_STAR_print_newline_STAR__temp_val__28516_28525,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28514_28523,_STAR_print_fn_STAR__orig_val__28515_28524,_STAR_print_newline_STAR__temp_val__28516_28525,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28516_28525;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28517_28526;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28514_28523,_STAR_print_fn_STAR__orig_val__28515_28524,_STAR_print_newline_STAR__temp_val__28516_28525,_STAR_print_fn_STAR__temp_val__28517_28526,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28514_28523,_STAR_print_fn_STAR__orig_val__28515_28524,_STAR_print_newline_STAR__temp_val__28516_28525,_STAR_print_fn_STAR__temp_val__28517_28526,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28505_SHARP_){
return cljs.core.dissoc.call(null,p1__28505_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28514_28523,_STAR_print_fn_STAR__orig_val__28515_28524,_STAR_print_newline_STAR__temp_val__28516_28525,_STAR_print_fn_STAR__temp_val__28517_28526,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28514_28523,_STAR_print_fn_STAR__orig_val__28515_28524,_STAR_print_newline_STAR__temp_val__28516_28525,_STAR_print_fn_STAR__temp_val__28517_28526,sb__4661__auto__,G__28509,G__28509__$1,loc,class_name,simple_class,cause_type,format,map__28507,map__28507__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28515_28524;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28514_28523;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28509__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1560798473747

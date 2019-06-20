// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37587){if((e37587 instanceof Error)){
var e = e37587;
return "Error: Unable to stringify";
} else {
throw e37587;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37590 = arguments.length;
switch (G__37590) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37588_SHARP_){
if(typeof p1__37588_SHARP_ === 'string'){
return p1__37588_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37588_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37593 = arguments.length;
var i__4731__auto___37594 = (0);
while(true){
if((i__4731__auto___37594 < len__4730__auto___37593)){
args__4736__auto__.push((arguments[i__4731__auto___37594]));

var G__37595 = (i__4731__auto___37594 + (1));
i__4731__auto___37594 = G__37595;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37592){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37592));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37597 = arguments.length;
var i__4731__auto___37598 = (0);
while(true){
if((i__4731__auto___37598 < len__4730__auto___37597)){
args__4736__auto__.push((arguments[i__4731__auto___37598]));

var G__37599 = (i__4731__auto___37598 + (1));
i__4731__auto___37598 = G__37599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37596));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37600){
var map__37601 = p__37600;
var map__37601__$1 = (((((!((map__37601 == null))))?(((((map__37601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37601):map__37601);
var message = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35275__auto___37680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto___37680,ch){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto___37680,ch){
return (function (state_37652){
var state_val_37653 = (state_37652[(1)]);
if((state_val_37653 === (7))){
var inst_37648 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37654_37681 = state_37652__$1;
(statearr_37654_37681[(2)] = inst_37648);

(statearr_37654_37681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (1))){
var state_37652__$1 = state_37652;
var statearr_37655_37682 = state_37652__$1;
(statearr_37655_37682[(2)] = null);

(statearr_37655_37682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (4))){
var inst_37605 = (state_37652[(7)]);
var inst_37605__$1 = (state_37652[(2)]);
var state_37652__$1 = (function (){var statearr_37656 = state_37652;
(statearr_37656[(7)] = inst_37605__$1);

return statearr_37656;
})();
if(cljs.core.truth_(inst_37605__$1)){
var statearr_37657_37683 = state_37652__$1;
(statearr_37657_37683[(1)] = (5));

} else {
var statearr_37658_37684 = state_37652__$1;
(statearr_37658_37684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (15))){
var inst_37612 = (state_37652[(8)]);
var inst_37627 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37612);
var inst_37628 = cljs.core.first.call(null,inst_37627);
var inst_37629 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37628);
var inst_37630 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37629)].join('');
var inst_37631 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37630);
var state_37652__$1 = state_37652;
var statearr_37659_37685 = state_37652__$1;
(statearr_37659_37685[(2)] = inst_37631);

(statearr_37659_37685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (13))){
var inst_37636 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37660_37686 = state_37652__$1;
(statearr_37660_37686[(2)] = inst_37636);

(statearr_37660_37686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (6))){
var state_37652__$1 = state_37652;
var statearr_37661_37687 = state_37652__$1;
(statearr_37661_37687[(2)] = null);

(statearr_37661_37687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (17))){
var inst_37634 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37662_37688 = state_37652__$1;
(statearr_37662_37688[(2)] = inst_37634);

(statearr_37662_37688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (3))){
var inst_37650 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37652__$1,inst_37650);
} else {
if((state_val_37653 === (12))){
var inst_37611 = (state_37652[(9)]);
var inst_37625 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37611,opts);
var state_37652__$1 = state_37652;
if(inst_37625){
var statearr_37663_37689 = state_37652__$1;
(statearr_37663_37689[(1)] = (15));

} else {
var statearr_37664_37690 = state_37652__$1;
(statearr_37664_37690[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (2))){
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(4),ch);
} else {
if((state_val_37653 === (11))){
var inst_37612 = (state_37652[(8)]);
var inst_37617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37618 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37612);
var inst_37619 = cljs.core.async.timeout.call(null,(1000));
var inst_37620 = [inst_37618,inst_37619];
var inst_37621 = (new cljs.core.PersistentVector(null,2,(5),inst_37617,inst_37620,null));
var state_37652__$1 = state_37652;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37652__$1,(14),inst_37621);
} else {
if((state_val_37653 === (9))){
var inst_37612 = (state_37652[(8)]);
var inst_37638 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37639 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37612);
var inst_37640 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37639);
var inst_37641 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37640)].join('');
var inst_37642 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37641);
var state_37652__$1 = (function (){var statearr_37665 = state_37652;
(statearr_37665[(10)] = inst_37638);

return statearr_37665;
})();
var statearr_37666_37691 = state_37652__$1;
(statearr_37666_37691[(2)] = inst_37642);

(statearr_37666_37691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (5))){
var inst_37605 = (state_37652[(7)]);
var inst_37607 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37608 = (new cljs.core.PersistentArrayMap(null,2,inst_37607,null));
var inst_37609 = (new cljs.core.PersistentHashSet(null,inst_37608,null));
var inst_37610 = figwheel.client.focus_msgs.call(null,inst_37609,inst_37605);
var inst_37611 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37610);
var inst_37612 = cljs.core.first.call(null,inst_37610);
var inst_37613 = figwheel.client.autoload_QMARK_.call(null);
var state_37652__$1 = (function (){var statearr_37667 = state_37652;
(statearr_37667[(8)] = inst_37612);

(statearr_37667[(9)] = inst_37611);

return statearr_37667;
})();
if(cljs.core.truth_(inst_37613)){
var statearr_37668_37692 = state_37652__$1;
(statearr_37668_37692[(1)] = (8));

} else {
var statearr_37669_37693 = state_37652__$1;
(statearr_37669_37693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (14))){
var inst_37623 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37670_37694 = state_37652__$1;
(statearr_37670_37694[(2)] = inst_37623);

(statearr_37670_37694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (16))){
var state_37652__$1 = state_37652;
var statearr_37671_37695 = state_37652__$1;
(statearr_37671_37695[(2)] = null);

(statearr_37671_37695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (10))){
var inst_37644 = (state_37652[(2)]);
var state_37652__$1 = (function (){var statearr_37672 = state_37652;
(statearr_37672[(11)] = inst_37644);

return statearr_37672;
})();
var statearr_37673_37696 = state_37652__$1;
(statearr_37673_37696[(2)] = null);

(statearr_37673_37696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (8))){
var inst_37611 = (state_37652[(9)]);
var inst_37615 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37611,opts);
var state_37652__$1 = state_37652;
if(cljs.core.truth_(inst_37615)){
var statearr_37674_37697 = state_37652__$1;
(statearr_37674_37697[(1)] = (11));

} else {
var statearr_37675_37698 = state_37652__$1;
(statearr_37675_37698[(1)] = (12));

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
});})(c__35275__auto___37680,ch))
;
return ((function (switch__35252__auto__,c__35275__auto___37680,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35253__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35253__auto____0 = (function (){
var statearr_37676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37676[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35253__auto__);

(statearr_37676[(1)] = (1));

return statearr_37676;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35253__auto____1 = (function (state_37652){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_37652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e37677){if((e37677 instanceof Object)){
var ex__35256__auto__ = e37677;
var statearr_37678_37699 = state_37652;
(statearr_37678_37699[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37700 = state_37652;
state_37652 = G__37700;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35253__auto__ = function(state_37652){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35253__auto____1.call(this,state_37652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35253__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35253__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto___37680,ch))
})();
var state__35277__auto__ = (function (){var statearr_37679 = f__35276__auto__.call(null);
(statearr_37679[(6)] = c__35275__auto___37680);

return statearr_37679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto___37680,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37701_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37701_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37707 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37707){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37703 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37704 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37705 = true;
var _STAR_print_fn_STAR__temp_val__37706 = ((function (_STAR_print_newline_STAR__orig_val__37703,_STAR_print_fn_STAR__orig_val__37704,_STAR_print_newline_STAR__temp_val__37705,sb,base_path_37707){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__37703,_STAR_print_fn_STAR__orig_val__37704,_STAR_print_newline_STAR__temp_val__37705,sb,base_path_37707))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37705;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37706;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37704;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37703;
}}catch (e37702){if((e37702 instanceof Error)){
var e = e37702;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37707], null));
} else {
var e = e37702;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37707))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37708){
var map__37709 = p__37708;
var map__37709__$1 = (((((!((map__37709 == null))))?(((((map__37709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37709):map__37709);
var opts = map__37709__$1;
var build_id = cljs.core.get.call(null,map__37709__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37709,map__37709__$1,opts,build_id){
return (function (p__37711){
var vec__37712 = p__37711;
var seq__37713 = cljs.core.seq.call(null,vec__37712);
var first__37714 = cljs.core.first.call(null,seq__37713);
var seq__37713__$1 = cljs.core.next.call(null,seq__37713);
var map__37715 = first__37714;
var map__37715__$1 = (((((!((map__37715 == null))))?(((((map__37715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37715):map__37715);
var msg = map__37715__$1;
var msg_name = cljs.core.get.call(null,map__37715__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37713__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37712,seq__37713,first__37714,seq__37713__$1,map__37715,map__37715__$1,msg,msg_name,_,map__37709,map__37709__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37712,seq__37713,first__37714,seq__37713__$1,map__37715,map__37715__$1,msg,msg_name,_,map__37709,map__37709__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37709,map__37709__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37717){
var vec__37718 = p__37717;
var seq__37719 = cljs.core.seq.call(null,vec__37718);
var first__37720 = cljs.core.first.call(null,seq__37719);
var seq__37719__$1 = cljs.core.next.call(null,seq__37719);
var map__37721 = first__37720;
var map__37721__$1 = (((((!((map__37721 == null))))?(((((map__37721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37721):map__37721);
var msg = map__37721__$1;
var msg_name = cljs.core.get.call(null,map__37721__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37719__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37723){
var map__37724 = p__37723;
var map__37724__$1 = (((((!((map__37724 == null))))?(((((map__37724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37724):map__37724);
var on_compile_warning = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37724,map__37724__$1,on_compile_warning,on_compile_fail){
return (function (p__37726){
var vec__37727 = p__37726;
var seq__37728 = cljs.core.seq.call(null,vec__37727);
var first__37729 = cljs.core.first.call(null,seq__37728);
var seq__37728__$1 = cljs.core.next.call(null,seq__37728);
var map__37730 = first__37729;
var map__37730__$1 = (((((!((map__37730 == null))))?(((((map__37730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37730):map__37730);
var msg = map__37730__$1;
var msg_name = cljs.core.get.call(null,map__37730__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37728__$1;
var pred__37732 = cljs.core._EQ_;
var expr__37733 = msg_name;
if(cljs.core.truth_(pred__37732.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37733))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37732.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37733))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37724,map__37724__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35275__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto__,msg_hist,msg_names,msg){
return (function (state_37822){
var state_val_37823 = (state_37822[(1)]);
if((state_val_37823 === (7))){
var inst_37742 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
if(cljs.core.truth_(inst_37742)){
var statearr_37824_37871 = state_37822__$1;
(statearr_37824_37871[(1)] = (8));

} else {
var statearr_37825_37872 = state_37822__$1;
(statearr_37825_37872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (20))){
var inst_37816 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37826_37873 = state_37822__$1;
(statearr_37826_37873[(2)] = inst_37816);

(statearr_37826_37873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (27))){
var inst_37812 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37827_37874 = state_37822__$1;
(statearr_37827_37874[(2)] = inst_37812);

(statearr_37827_37874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (1))){
var inst_37735 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37822__$1 = state_37822;
if(cljs.core.truth_(inst_37735)){
var statearr_37828_37875 = state_37822__$1;
(statearr_37828_37875[(1)] = (2));

} else {
var statearr_37829_37876 = state_37822__$1;
(statearr_37829_37876[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (24))){
var inst_37814 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37830_37877 = state_37822__$1;
(statearr_37830_37877[(2)] = inst_37814);

(statearr_37830_37877[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (4))){
var inst_37820 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37822__$1,inst_37820);
} else {
if((state_val_37823 === (15))){
var inst_37818 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37831_37878 = state_37822__$1;
(statearr_37831_37878[(2)] = inst_37818);

(statearr_37831_37878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (21))){
var inst_37771 = (state_37822[(2)]);
var inst_37772 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37773 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37772);
var state_37822__$1 = (function (){var statearr_37832 = state_37822;
(statearr_37832[(7)] = inst_37771);

return statearr_37832;
})();
var statearr_37833_37879 = state_37822__$1;
(statearr_37833_37879[(2)] = inst_37773);

(statearr_37833_37879[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (31))){
var inst_37801 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37822__$1 = state_37822;
if(inst_37801){
var statearr_37834_37880 = state_37822__$1;
(statearr_37834_37880[(1)] = (34));

} else {
var statearr_37835_37881 = state_37822__$1;
(statearr_37835_37881[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (32))){
var inst_37810 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37836_37882 = state_37822__$1;
(statearr_37836_37882[(2)] = inst_37810);

(statearr_37836_37882[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (33))){
var inst_37797 = (state_37822[(2)]);
var inst_37798 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37799 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37798);
var state_37822__$1 = (function (){var statearr_37837 = state_37822;
(statearr_37837[(8)] = inst_37797);

return statearr_37837;
})();
var statearr_37838_37883 = state_37822__$1;
(statearr_37838_37883[(2)] = inst_37799);

(statearr_37838_37883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (13))){
var inst_37756 = figwheel.client.heads_up.clear.call(null);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(16),inst_37756);
} else {
if((state_val_37823 === (22))){
var inst_37777 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37778 = figwheel.client.heads_up.append_warning_message.call(null,inst_37777);
var state_37822__$1 = state_37822;
var statearr_37839_37884 = state_37822__$1;
(statearr_37839_37884[(2)] = inst_37778);

(statearr_37839_37884[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (36))){
var inst_37808 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37840_37885 = state_37822__$1;
(statearr_37840_37885[(2)] = inst_37808);

(statearr_37840_37885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (29))){
var inst_37788 = (state_37822[(2)]);
var inst_37789 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37790 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37789);
var state_37822__$1 = (function (){var statearr_37841 = state_37822;
(statearr_37841[(9)] = inst_37788);

return statearr_37841;
})();
var statearr_37842_37886 = state_37822__$1;
(statearr_37842_37886[(2)] = inst_37790);

(statearr_37842_37886[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (6))){
var inst_37737 = (state_37822[(10)]);
var state_37822__$1 = state_37822;
var statearr_37843_37887 = state_37822__$1;
(statearr_37843_37887[(2)] = inst_37737);

(statearr_37843_37887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (28))){
var inst_37784 = (state_37822[(2)]);
var inst_37785 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37786 = figwheel.client.heads_up.display_warning.call(null,inst_37785);
var state_37822__$1 = (function (){var statearr_37844 = state_37822;
(statearr_37844[(11)] = inst_37784);

return statearr_37844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(29),inst_37786);
} else {
if((state_val_37823 === (25))){
var inst_37782 = figwheel.client.heads_up.clear.call(null);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(28),inst_37782);
} else {
if((state_val_37823 === (34))){
var inst_37803 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(37),inst_37803);
} else {
if((state_val_37823 === (17))){
var inst_37762 = (state_37822[(2)]);
var inst_37763 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37764 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37763);
var state_37822__$1 = (function (){var statearr_37845 = state_37822;
(statearr_37845[(12)] = inst_37762);

return statearr_37845;
})();
var statearr_37846_37888 = state_37822__$1;
(statearr_37846_37888[(2)] = inst_37764);

(statearr_37846_37888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (3))){
var inst_37754 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37822__$1 = state_37822;
if(inst_37754){
var statearr_37847_37889 = state_37822__$1;
(statearr_37847_37889[(1)] = (13));

} else {
var statearr_37848_37890 = state_37822__$1;
(statearr_37848_37890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (12))){
var inst_37750 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37849_37891 = state_37822__$1;
(statearr_37849_37891[(2)] = inst_37750);

(statearr_37849_37891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (2))){
var inst_37737 = (state_37822[(10)]);
var inst_37737__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37822__$1 = (function (){var statearr_37850 = state_37822;
(statearr_37850[(10)] = inst_37737__$1);

return statearr_37850;
})();
if(cljs.core.truth_(inst_37737__$1)){
var statearr_37851_37892 = state_37822__$1;
(statearr_37851_37892[(1)] = (5));

} else {
var statearr_37852_37893 = state_37822__$1;
(statearr_37852_37893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (23))){
var inst_37780 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37822__$1 = state_37822;
if(inst_37780){
var statearr_37853_37894 = state_37822__$1;
(statearr_37853_37894[(1)] = (25));

} else {
var statearr_37854_37895 = state_37822__$1;
(statearr_37854_37895[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (35))){
var state_37822__$1 = state_37822;
var statearr_37855_37896 = state_37822__$1;
(statearr_37855_37896[(2)] = null);

(statearr_37855_37896[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (19))){
var inst_37775 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37822__$1 = state_37822;
if(inst_37775){
var statearr_37856_37897 = state_37822__$1;
(statearr_37856_37897[(1)] = (22));

} else {
var statearr_37857_37898 = state_37822__$1;
(statearr_37857_37898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (11))){
var inst_37746 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37858_37899 = state_37822__$1;
(statearr_37858_37899[(2)] = inst_37746);

(statearr_37858_37899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (9))){
var inst_37748 = figwheel.client.heads_up.clear.call(null);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(12),inst_37748);
} else {
if((state_val_37823 === (5))){
var inst_37739 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37822__$1 = state_37822;
var statearr_37859_37900 = state_37822__$1;
(statearr_37859_37900[(2)] = inst_37739);

(statearr_37859_37900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (14))){
var inst_37766 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37822__$1 = state_37822;
if(inst_37766){
var statearr_37860_37901 = state_37822__$1;
(statearr_37860_37901[(1)] = (18));

} else {
var statearr_37861_37902 = state_37822__$1;
(statearr_37861_37902[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (26))){
var inst_37792 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37822__$1 = state_37822;
if(inst_37792){
var statearr_37862_37903 = state_37822__$1;
(statearr_37862_37903[(1)] = (30));

} else {
var statearr_37863_37904 = state_37822__$1;
(statearr_37863_37904[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (16))){
var inst_37758 = (state_37822[(2)]);
var inst_37759 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37760 = figwheel.client.heads_up.display_exception.call(null,inst_37759);
var state_37822__$1 = (function (){var statearr_37864 = state_37822;
(statearr_37864[(13)] = inst_37758);

return statearr_37864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(17),inst_37760);
} else {
if((state_val_37823 === (30))){
var inst_37794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37795 = figwheel.client.heads_up.display_warning.call(null,inst_37794);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(33),inst_37795);
} else {
if((state_val_37823 === (10))){
var inst_37752 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37865_37905 = state_37822__$1;
(statearr_37865_37905[(2)] = inst_37752);

(statearr_37865_37905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (18))){
var inst_37768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37769 = figwheel.client.heads_up.display_exception.call(null,inst_37768);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(21),inst_37769);
} else {
if((state_val_37823 === (37))){
var inst_37805 = (state_37822[(2)]);
var state_37822__$1 = state_37822;
var statearr_37866_37906 = state_37822__$1;
(statearr_37866_37906[(2)] = inst_37805);

(statearr_37866_37906[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37823 === (8))){
var inst_37744 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(11),inst_37744);
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
});})(c__35275__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35252__auto__,c__35275__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto____0 = (function (){
var statearr_37867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37867[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto__);

(statearr_37867[(1)] = (1));

return statearr_37867;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto____1 = (function (state_37822){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_37822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e37868){if((e37868 instanceof Object)){
var ex__35256__auto__ = e37868;
var statearr_37869_37907 = state_37822;
(statearr_37869_37907[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37908 = state_37822;
state_37822 = G__37908;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto__ = function(state_37822){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto____1.call(this,state_37822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto__,msg_hist,msg_names,msg))
})();
var state__35277__auto__ = (function (){var statearr_37870 = f__35276__auto__.call(null);
(statearr_37870[(6)] = c__35275__auto__);

return statearr_37870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto__,msg_hist,msg_names,msg))
);

return c__35275__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35275__auto___37937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto___37937,ch){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto___37937,ch){
return (function (state_37923){
var state_val_37924 = (state_37923[(1)]);
if((state_val_37924 === (1))){
var state_37923__$1 = state_37923;
var statearr_37925_37938 = state_37923__$1;
(statearr_37925_37938[(2)] = null);

(statearr_37925_37938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (2))){
var state_37923__$1 = state_37923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37923__$1,(4),ch);
} else {
if((state_val_37924 === (3))){
var inst_37921 = (state_37923[(2)]);
var state_37923__$1 = state_37923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37923__$1,inst_37921);
} else {
if((state_val_37924 === (4))){
var inst_37911 = (state_37923[(7)]);
var inst_37911__$1 = (state_37923[(2)]);
var state_37923__$1 = (function (){var statearr_37926 = state_37923;
(statearr_37926[(7)] = inst_37911__$1);

return statearr_37926;
})();
if(cljs.core.truth_(inst_37911__$1)){
var statearr_37927_37939 = state_37923__$1;
(statearr_37927_37939[(1)] = (5));

} else {
var statearr_37928_37940 = state_37923__$1;
(statearr_37928_37940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (5))){
var inst_37911 = (state_37923[(7)]);
var inst_37913 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37911);
var state_37923__$1 = state_37923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37923__$1,(8),inst_37913);
} else {
if((state_val_37924 === (6))){
var state_37923__$1 = state_37923;
var statearr_37929_37941 = state_37923__$1;
(statearr_37929_37941[(2)] = null);

(statearr_37929_37941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (7))){
var inst_37919 = (state_37923[(2)]);
var state_37923__$1 = state_37923;
var statearr_37930_37942 = state_37923__$1;
(statearr_37930_37942[(2)] = inst_37919);

(statearr_37930_37942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37924 === (8))){
var inst_37915 = (state_37923[(2)]);
var state_37923__$1 = (function (){var statearr_37931 = state_37923;
(statearr_37931[(8)] = inst_37915);

return statearr_37931;
})();
var statearr_37932_37943 = state_37923__$1;
(statearr_37932_37943[(2)] = null);

(statearr_37932_37943[(1)] = (2));


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
});})(c__35275__auto___37937,ch))
;
return ((function (switch__35252__auto__,c__35275__auto___37937,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35253__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35253__auto____0 = (function (){
var statearr_37933 = [null,null,null,null,null,null,null,null,null];
(statearr_37933[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35253__auto__);

(statearr_37933[(1)] = (1));

return statearr_37933;
});
var figwheel$client$heads_up_plugin_$_state_machine__35253__auto____1 = (function (state_37923){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_37923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e37934){if((e37934 instanceof Object)){
var ex__35256__auto__ = e37934;
var statearr_37935_37944 = state_37923;
(statearr_37935_37944[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37945 = state_37923;
state_37923 = G__37945;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35253__auto__ = function(state_37923){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35253__auto____1.call(this,state_37923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35253__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35253__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto___37937,ch))
})();
var state__35277__auto__ = (function (){var statearr_37936 = f__35276__auto__.call(null);
(statearr_37936[(6)] = c__35275__auto___37937);

return statearr_37936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto___37937,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35275__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto__){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto__){
return (function (state_37951){
var state_val_37952 = (state_37951[(1)]);
if((state_val_37952 === (1))){
var inst_37946 = cljs.core.async.timeout.call(null,(3000));
var state_37951__$1 = state_37951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37951__$1,(2),inst_37946);
} else {
if((state_val_37952 === (2))){
var inst_37948 = (state_37951[(2)]);
var inst_37949 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37951__$1 = (function (){var statearr_37953 = state_37951;
(statearr_37953[(7)] = inst_37948);

return statearr_37953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37951__$1,inst_37949);
} else {
return null;
}
}
});})(c__35275__auto__))
;
return ((function (switch__35252__auto__,c__35275__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35253__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35253__auto____0 = (function (){
var statearr_37954 = [null,null,null,null,null,null,null,null];
(statearr_37954[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35253__auto__);

(statearr_37954[(1)] = (1));

return statearr_37954;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35253__auto____1 = (function (state_37951){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_37951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e37955){if((e37955 instanceof Object)){
var ex__35256__auto__ = e37955;
var statearr_37956_37958 = state_37951;
(statearr_37956_37958[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37959 = state_37951;
state_37951 = G__37959;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35253__auto__ = function(state_37951){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35253__auto____1.call(this,state_37951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35253__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35253__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto__))
})();
var state__35277__auto__ = (function (){var statearr_37957 = f__35276__auto__.call(null);
(statearr_37957[(6)] = c__35275__auto__);

return statearr_37957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto__))
);

return c__35275__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35275__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35275__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__35276__auto__ = (function (){var switch__35252__auto__ = ((function (c__35275__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37966){
var state_val_37967 = (state_37966[(1)]);
if((state_val_37967 === (1))){
var inst_37960 = cljs.core.async.timeout.call(null,(2000));
var state_37966__$1 = state_37966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37966__$1,(2),inst_37960);
} else {
if((state_val_37967 === (2))){
var inst_37962 = (state_37966[(2)]);
var inst_37963 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37964 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37963);
var state_37966__$1 = (function (){var statearr_37968 = state_37966;
(statearr_37968[(7)] = inst_37962);

return statearr_37968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37966__$1,inst_37964);
} else {
return null;
}
}
});})(c__35275__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__35252__auto__,c__35275__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto____0 = (function (){
var statearr_37969 = [null,null,null,null,null,null,null,null];
(statearr_37969[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto__);

(statearr_37969[(1)] = (1));

return statearr_37969;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto____1 = (function (state_37966){
while(true){
var ret_value__35254__auto__ = (function (){try{while(true){
var result__35255__auto__ = switch__35252__auto__.call(null,state_37966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35255__auto__;
}
break;
}
}catch (e37970){if((e37970 instanceof Object)){
var ex__35256__auto__ = e37970;
var statearr_37971_37973 = state_37966;
(statearr_37971_37973[(5)] = ex__35256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37974 = state_37966;
state_37966 = G__37974;
continue;
} else {
return ret_value__35254__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto__ = function(state_37966){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto____1.call(this,state_37966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35253__auto__;
})()
;})(switch__35252__auto__,c__35275__auto__,figwheel_version,temp__5457__auto__))
})();
var state__35277__auto__ = (function (){var statearr_37972 = f__35276__auto__.call(null);
(statearr_37972[(6)] = c__35275__auto__);

return statearr_37972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35277__auto__);
});})(c__35275__auto__,figwheel_version,temp__5457__auto__))
);

return c__35275__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37975){
var map__37976 = p__37975;
var map__37976__$1 = (((((!((map__37976 == null))))?(((((map__37976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37976):map__37976);
var file = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37978 = "";
var G__37978__$1 = (cljs.core.truth_(file)?[G__37978,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37978);
var G__37978__$2 = (cljs.core.truth_(line)?[G__37978__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37978__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__37978__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37978__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37979){
var map__37980 = p__37979;
var map__37980__$1 = (((((!((map__37980 == null))))?(((((map__37980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37980):map__37980);
var ed = map__37980__$1;
var formatted_exception = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37982_37986 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37983_37987 = null;
var count__37984_37988 = (0);
var i__37985_37989 = (0);
while(true){
if((i__37985_37989 < count__37984_37988)){
var msg_37990 = cljs.core._nth.call(null,chunk__37983_37987,i__37985_37989);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37990);


var G__37991 = seq__37982_37986;
var G__37992 = chunk__37983_37987;
var G__37993 = count__37984_37988;
var G__37994 = (i__37985_37989 + (1));
seq__37982_37986 = G__37991;
chunk__37983_37987 = G__37992;
count__37984_37988 = G__37993;
i__37985_37989 = G__37994;
continue;
} else {
var temp__5457__auto___37995 = cljs.core.seq.call(null,seq__37982_37986);
if(temp__5457__auto___37995){
var seq__37982_37996__$1 = temp__5457__auto___37995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37982_37996__$1)){
var c__4550__auto___37997 = cljs.core.chunk_first.call(null,seq__37982_37996__$1);
var G__37998 = cljs.core.chunk_rest.call(null,seq__37982_37996__$1);
var G__37999 = c__4550__auto___37997;
var G__38000 = cljs.core.count.call(null,c__4550__auto___37997);
var G__38001 = (0);
seq__37982_37986 = G__37998;
chunk__37983_37987 = G__37999;
count__37984_37988 = G__38000;
i__37985_37989 = G__38001;
continue;
} else {
var msg_38002 = cljs.core.first.call(null,seq__37982_37996__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38002);


var G__38003 = cljs.core.next.call(null,seq__37982_37996__$1);
var G__38004 = null;
var G__38005 = (0);
var G__38006 = (0);
seq__37982_37986 = G__38003;
chunk__37983_37987 = G__38004;
count__37984_37988 = G__38005;
i__37985_37989 = G__38006;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",figwheel.client.file_line_column.call(null,ed)].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38007){
var map__38008 = p__38007;
var map__38008__$1 = (((((!((map__38008 == null))))?(((((map__38008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38008):map__38008);
var w = map__38008__$1;
var message = cljs.core.get.call(null,map__38008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38010 = cljs.core.seq.call(null,plugins);
var chunk__38011 = null;
var count__38012 = (0);
var i__38013 = (0);
while(true){
if((i__38013 < count__38012)){
var vec__38020 = cljs.core._nth.call(null,chunk__38011,i__38013);
var k = cljs.core.nth.call(null,vec__38020,(0),null);
var plugin = cljs.core.nth.call(null,vec__38020,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38026 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38010,chunk__38011,count__38012,i__38013,pl_38026,vec__38020,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38026.call(null,msg_hist);
});})(seq__38010,chunk__38011,count__38012,i__38013,pl_38026,vec__38020,k,plugin))
);
} else {
}


var G__38027 = seq__38010;
var G__38028 = chunk__38011;
var G__38029 = count__38012;
var G__38030 = (i__38013 + (1));
seq__38010 = G__38027;
chunk__38011 = G__38028;
count__38012 = G__38029;
i__38013 = G__38030;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38010);
if(temp__5457__auto__){
var seq__38010__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38010__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38010__$1);
var G__38031 = cljs.core.chunk_rest.call(null,seq__38010__$1);
var G__38032 = c__4550__auto__;
var G__38033 = cljs.core.count.call(null,c__4550__auto__);
var G__38034 = (0);
seq__38010 = G__38031;
chunk__38011 = G__38032;
count__38012 = G__38033;
i__38013 = G__38034;
continue;
} else {
var vec__38023 = cljs.core.first.call(null,seq__38010__$1);
var k = cljs.core.nth.call(null,vec__38023,(0),null);
var plugin = cljs.core.nth.call(null,vec__38023,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38035 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38010,chunk__38011,count__38012,i__38013,pl_38035,vec__38023,k,plugin,seq__38010__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38035.call(null,msg_hist);
});})(seq__38010,chunk__38011,count__38012,i__38013,pl_38035,vec__38023,k,plugin,seq__38010__$1,temp__5457__auto__))
);
} else {
}


var G__38036 = cljs.core.next.call(null,seq__38010__$1);
var G__38037 = null;
var G__38038 = (0);
var G__38039 = (0);
seq__38010 = G__38036;
chunk__38011 = G__38037;
count__38012 = G__38038;
i__38013 = G__38039;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38041 = arguments.length;
switch (G__38041) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38042_38047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38043_38048 = null;
var count__38044_38049 = (0);
var i__38045_38050 = (0);
while(true){
if((i__38045_38050 < count__38044_38049)){
var msg_38051 = cljs.core._nth.call(null,chunk__38043_38048,i__38045_38050);
figwheel.client.socket.handle_incoming_message.call(null,msg_38051);


var G__38052 = seq__38042_38047;
var G__38053 = chunk__38043_38048;
var G__38054 = count__38044_38049;
var G__38055 = (i__38045_38050 + (1));
seq__38042_38047 = G__38052;
chunk__38043_38048 = G__38053;
count__38044_38049 = G__38054;
i__38045_38050 = G__38055;
continue;
} else {
var temp__5457__auto___38056 = cljs.core.seq.call(null,seq__38042_38047);
if(temp__5457__auto___38056){
var seq__38042_38057__$1 = temp__5457__auto___38056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38042_38057__$1)){
var c__4550__auto___38058 = cljs.core.chunk_first.call(null,seq__38042_38057__$1);
var G__38059 = cljs.core.chunk_rest.call(null,seq__38042_38057__$1);
var G__38060 = c__4550__auto___38058;
var G__38061 = cljs.core.count.call(null,c__4550__auto___38058);
var G__38062 = (0);
seq__38042_38047 = G__38059;
chunk__38043_38048 = G__38060;
count__38044_38049 = G__38061;
i__38045_38050 = G__38062;
continue;
} else {
var msg_38063 = cljs.core.first.call(null,seq__38042_38057__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38063);


var G__38064 = cljs.core.next.call(null,seq__38042_38057__$1);
var G__38065 = null;
var G__38066 = (0);
var G__38067 = (0);
seq__38042_38047 = G__38064;
chunk__38043_38048 = G__38065;
count__38044_38049 = G__38066;
i__38045_38050 = G__38067;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38072 = arguments.length;
var i__4731__auto___38073 = (0);
while(true){
if((i__4731__auto___38073 < len__4730__auto___38072)){
args__4736__auto__.push((arguments[i__4731__auto___38073]));

var G__38074 = (i__4731__auto___38073 + (1));
i__4731__auto___38073 = G__38074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38069){
var map__38070 = p__38069;
var map__38070__$1 = (((((!((map__38070 == null))))?(((((map__38070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38070):map__38070);
var opts = map__38070__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38068));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38075){if((e38075 instanceof Error)){
var e = e38075;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38075;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38076){
var map__38077 = p__38076;
var map__38077__$1 = (((((!((map__38077 == null))))?(((((map__38077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38077):map__38077);
var msg_name = cljs.core.get.call(null,map__38077__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1560798860326

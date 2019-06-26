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
}catch (e49553){if((e49553 instanceof Error)){
var e = e49553;
return "Error: Unable to stringify";
} else {
throw e49553;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__49556 = arguments.length;
switch (G__49556) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__49554_SHARP_){
if(typeof p1__49554_SHARP_ === 'string'){
return p1__49554_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__49554_SHARP_);
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
var len__4730__auto___49559 = arguments.length;
var i__4731__auto___49560 = (0);
while(true){
if((i__4731__auto___49560 < len__4730__auto___49559)){
args__4736__auto__.push((arguments[i__4731__auto___49560]));

var G__49561 = (i__4731__auto___49560 + (1));
i__4731__auto___49560 = G__49561;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49558){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49558));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49563 = arguments.length;
var i__4731__auto___49564 = (0);
while(true){
if((i__4731__auto___49564 < len__4730__auto___49563)){
args__4736__auto__.push((arguments[i__4731__auto___49564]));

var G__49565 = (i__4731__auto___49564 + (1));
i__4731__auto___49564 = G__49565;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49562){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49562));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49566){
var map__49567 = p__49566;
var map__49567__$1 = (((((!((map__49567 == null))))?(((((map__49567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49567):map__49567);
var message = cljs.core.get.call(null,map__49567__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49567__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__38928__auto___49646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___49646,ch){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___49646,ch){
return (function (state_49618){
var state_val_49619 = (state_49618[(1)]);
if((state_val_49619 === (7))){
var inst_49614 = (state_49618[(2)]);
var state_49618__$1 = state_49618;
var statearr_49620_49647 = state_49618__$1;
(statearr_49620_49647[(2)] = inst_49614);

(statearr_49620_49647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (1))){
var state_49618__$1 = state_49618;
var statearr_49621_49648 = state_49618__$1;
(statearr_49621_49648[(2)] = null);

(statearr_49621_49648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (4))){
var inst_49571 = (state_49618[(7)]);
var inst_49571__$1 = (state_49618[(2)]);
var state_49618__$1 = (function (){var statearr_49622 = state_49618;
(statearr_49622[(7)] = inst_49571__$1);

return statearr_49622;
})();
if(cljs.core.truth_(inst_49571__$1)){
var statearr_49623_49649 = state_49618__$1;
(statearr_49623_49649[(1)] = (5));

} else {
var statearr_49624_49650 = state_49618__$1;
(statearr_49624_49650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (15))){
var inst_49578 = (state_49618[(8)]);
var inst_49593 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49578);
var inst_49594 = cljs.core.first.call(null,inst_49593);
var inst_49595 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49594);
var inst_49596 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49595)].join('');
var inst_49597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49596);
var state_49618__$1 = state_49618;
var statearr_49625_49651 = state_49618__$1;
(statearr_49625_49651[(2)] = inst_49597);

(statearr_49625_49651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (13))){
var inst_49602 = (state_49618[(2)]);
var state_49618__$1 = state_49618;
var statearr_49626_49652 = state_49618__$1;
(statearr_49626_49652[(2)] = inst_49602);

(statearr_49626_49652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (6))){
var state_49618__$1 = state_49618;
var statearr_49627_49653 = state_49618__$1;
(statearr_49627_49653[(2)] = null);

(statearr_49627_49653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (17))){
var inst_49600 = (state_49618[(2)]);
var state_49618__$1 = state_49618;
var statearr_49628_49654 = state_49618__$1;
(statearr_49628_49654[(2)] = inst_49600);

(statearr_49628_49654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (3))){
var inst_49616 = (state_49618[(2)]);
var state_49618__$1 = state_49618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49618__$1,inst_49616);
} else {
if((state_val_49619 === (12))){
var inst_49577 = (state_49618[(9)]);
var inst_49591 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49577,opts);
var state_49618__$1 = state_49618;
if(inst_49591){
var statearr_49629_49655 = state_49618__$1;
(statearr_49629_49655[(1)] = (15));

} else {
var statearr_49630_49656 = state_49618__$1;
(statearr_49630_49656[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (2))){
var state_49618__$1 = state_49618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49618__$1,(4),ch);
} else {
if((state_val_49619 === (11))){
var inst_49578 = (state_49618[(8)]);
var inst_49583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49584 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49578);
var inst_49585 = cljs.core.async.timeout.call(null,(1000));
var inst_49586 = [inst_49584,inst_49585];
var inst_49587 = (new cljs.core.PersistentVector(null,2,(5),inst_49583,inst_49586,null));
var state_49618__$1 = state_49618;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49618__$1,(14),inst_49587);
} else {
if((state_val_49619 === (9))){
var inst_49578 = (state_49618[(8)]);
var inst_49604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49605 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49578);
var inst_49606 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49605);
var inst_49607 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49606)].join('');
var inst_49608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49607);
var state_49618__$1 = (function (){var statearr_49631 = state_49618;
(statearr_49631[(10)] = inst_49604);

return statearr_49631;
})();
var statearr_49632_49657 = state_49618__$1;
(statearr_49632_49657[(2)] = inst_49608);

(statearr_49632_49657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (5))){
var inst_49571 = (state_49618[(7)]);
var inst_49573 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49574 = (new cljs.core.PersistentArrayMap(null,2,inst_49573,null));
var inst_49575 = (new cljs.core.PersistentHashSet(null,inst_49574,null));
var inst_49576 = figwheel.client.focus_msgs.call(null,inst_49575,inst_49571);
var inst_49577 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49576);
var inst_49578 = cljs.core.first.call(null,inst_49576);
var inst_49579 = figwheel.client.autoload_QMARK_.call(null);
var state_49618__$1 = (function (){var statearr_49633 = state_49618;
(statearr_49633[(9)] = inst_49577);

(statearr_49633[(8)] = inst_49578);

return statearr_49633;
})();
if(cljs.core.truth_(inst_49579)){
var statearr_49634_49658 = state_49618__$1;
(statearr_49634_49658[(1)] = (8));

} else {
var statearr_49635_49659 = state_49618__$1;
(statearr_49635_49659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (14))){
var inst_49589 = (state_49618[(2)]);
var state_49618__$1 = state_49618;
var statearr_49636_49660 = state_49618__$1;
(statearr_49636_49660[(2)] = inst_49589);

(statearr_49636_49660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (16))){
var state_49618__$1 = state_49618;
var statearr_49637_49661 = state_49618__$1;
(statearr_49637_49661[(2)] = null);

(statearr_49637_49661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (10))){
var inst_49610 = (state_49618[(2)]);
var state_49618__$1 = (function (){var statearr_49638 = state_49618;
(statearr_49638[(11)] = inst_49610);

return statearr_49638;
})();
var statearr_49639_49662 = state_49618__$1;
(statearr_49639_49662[(2)] = null);

(statearr_49639_49662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49619 === (8))){
var inst_49577 = (state_49618[(9)]);
var inst_49581 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49577,opts);
var state_49618__$1 = state_49618;
if(cljs.core.truth_(inst_49581)){
var statearr_49640_49663 = state_49618__$1;
(statearr_49640_49663[(1)] = (11));

} else {
var statearr_49641_49664 = state_49618__$1;
(statearr_49641_49664[(1)] = (12));

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
});})(c__38928__auto___49646,ch))
;
return ((function (switch__38761__auto__,c__38928__auto___49646,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38762__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38762__auto____0 = (function (){
var statearr_49642 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49642[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38762__auto__);

(statearr_49642[(1)] = (1));

return statearr_49642;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38762__auto____1 = (function (state_49618){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_49618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e49643){if((e49643 instanceof Object)){
var ex__38765__auto__ = e49643;
var statearr_49644_49665 = state_49618;
(statearr_49644_49665[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49666 = state_49618;
state_49618 = G__49666;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38762__auto__ = function(state_49618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38762__auto____1.call(this,state_49618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38762__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38762__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___49646,ch))
})();
var state__38930__auto__ = (function (){var statearr_49645 = f__38929__auto__.call(null);
(statearr_49645[(6)] = c__38928__auto___49646);

return statearr_49645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___49646,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49667_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49667_SHARP_));
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
var base_path_49673 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49673){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49671 = true;
var _STAR_print_fn_STAR__temp_val__49672 = ((function (_STAR_print_newline_STAR__orig_val__49669,_STAR_print_fn_STAR__orig_val__49670,_STAR_print_newline_STAR__temp_val__49671,sb,base_path_49673){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__49669,_STAR_print_fn_STAR__orig_val__49670,_STAR_print_newline_STAR__temp_val__49671,sb,base_path_49673))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49671;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49672;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49670;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49669;
}}catch (e49668){if((e49668 instanceof Error)){
var e = e49668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49673], null));
} else {
var e = e49668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_49673))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49674){
var map__49675 = p__49674;
var map__49675__$1 = (((((!((map__49675 == null))))?(((((map__49675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49675):map__49675);
var opts = map__49675__$1;
var build_id = cljs.core.get.call(null,map__49675__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49675,map__49675__$1,opts,build_id){
return (function (p__49677){
var vec__49678 = p__49677;
var seq__49679 = cljs.core.seq.call(null,vec__49678);
var first__49680 = cljs.core.first.call(null,seq__49679);
var seq__49679__$1 = cljs.core.next.call(null,seq__49679);
var map__49681 = first__49680;
var map__49681__$1 = (((((!((map__49681 == null))))?(((((map__49681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49681):map__49681);
var msg = map__49681__$1;
var msg_name = cljs.core.get.call(null,map__49681__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49679__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49678,seq__49679,first__49680,seq__49679__$1,map__49681,map__49681__$1,msg,msg_name,_,map__49675,map__49675__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49678,seq__49679,first__49680,seq__49679__$1,map__49681,map__49681__$1,msg,msg_name,_,map__49675,map__49675__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49675,map__49675__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49683){
var vec__49684 = p__49683;
var seq__49685 = cljs.core.seq.call(null,vec__49684);
var first__49686 = cljs.core.first.call(null,seq__49685);
var seq__49685__$1 = cljs.core.next.call(null,seq__49685);
var map__49687 = first__49686;
var map__49687__$1 = (((((!((map__49687 == null))))?(((((map__49687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49687):map__49687);
var msg = map__49687__$1;
var msg_name = cljs.core.get.call(null,map__49687__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49685__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49689){
var map__49690 = p__49689;
var map__49690__$1 = (((((!((map__49690 == null))))?(((((map__49690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49690):map__49690);
var on_compile_warning = cljs.core.get.call(null,map__49690__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49690__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49690,map__49690__$1,on_compile_warning,on_compile_fail){
return (function (p__49692){
var vec__49693 = p__49692;
var seq__49694 = cljs.core.seq.call(null,vec__49693);
var first__49695 = cljs.core.first.call(null,seq__49694);
var seq__49694__$1 = cljs.core.next.call(null,seq__49694);
var map__49696 = first__49695;
var map__49696__$1 = (((((!((map__49696 == null))))?(((((map__49696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49696):map__49696);
var msg = map__49696__$1;
var msg_name = cljs.core.get.call(null,map__49696__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49694__$1;
var pred__49698 = cljs.core._EQ_;
var expr__49699 = msg_name;
if(cljs.core.truth_(pred__49698.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49699))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49698.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49699))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49690,map__49690__$1,on_compile_warning,on_compile_fail))
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
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__,msg_hist,msg_names,msg){
return (function (state_49788){
var state_val_49789 = (state_49788[(1)]);
if((state_val_49789 === (7))){
var inst_49708 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
if(cljs.core.truth_(inst_49708)){
var statearr_49790_49837 = state_49788__$1;
(statearr_49790_49837[(1)] = (8));

} else {
var statearr_49791_49838 = state_49788__$1;
(statearr_49791_49838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (20))){
var inst_49782 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49792_49839 = state_49788__$1;
(statearr_49792_49839[(2)] = inst_49782);

(statearr_49792_49839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (27))){
var inst_49778 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49793_49840 = state_49788__$1;
(statearr_49793_49840[(2)] = inst_49778);

(statearr_49793_49840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (1))){
var inst_49701 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49788__$1 = state_49788;
if(cljs.core.truth_(inst_49701)){
var statearr_49794_49841 = state_49788__$1;
(statearr_49794_49841[(1)] = (2));

} else {
var statearr_49795_49842 = state_49788__$1;
(statearr_49795_49842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (24))){
var inst_49780 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49796_49843 = state_49788__$1;
(statearr_49796_49843[(2)] = inst_49780);

(statearr_49796_49843[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (4))){
var inst_49786 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49788__$1,inst_49786);
} else {
if((state_val_49789 === (15))){
var inst_49784 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49797_49844 = state_49788__$1;
(statearr_49797_49844[(2)] = inst_49784);

(statearr_49797_49844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (21))){
var inst_49737 = (state_49788[(2)]);
var inst_49738 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49739 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49738);
var state_49788__$1 = (function (){var statearr_49798 = state_49788;
(statearr_49798[(7)] = inst_49737);

return statearr_49798;
})();
var statearr_49799_49845 = state_49788__$1;
(statearr_49799_49845[(2)] = inst_49739);

(statearr_49799_49845[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (31))){
var inst_49767 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49788__$1 = state_49788;
if(inst_49767){
var statearr_49800_49846 = state_49788__$1;
(statearr_49800_49846[(1)] = (34));

} else {
var statearr_49801_49847 = state_49788__$1;
(statearr_49801_49847[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (32))){
var inst_49776 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49802_49848 = state_49788__$1;
(statearr_49802_49848[(2)] = inst_49776);

(statearr_49802_49848[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (33))){
var inst_49763 = (state_49788[(2)]);
var inst_49764 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49765 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49764);
var state_49788__$1 = (function (){var statearr_49803 = state_49788;
(statearr_49803[(8)] = inst_49763);

return statearr_49803;
})();
var statearr_49804_49849 = state_49788__$1;
(statearr_49804_49849[(2)] = inst_49765);

(statearr_49804_49849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (13))){
var inst_49722 = figwheel.client.heads_up.clear.call(null);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(16),inst_49722);
} else {
if((state_val_49789 === (22))){
var inst_49743 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49744 = figwheel.client.heads_up.append_warning_message.call(null,inst_49743);
var state_49788__$1 = state_49788;
var statearr_49805_49850 = state_49788__$1;
(statearr_49805_49850[(2)] = inst_49744);

(statearr_49805_49850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (36))){
var inst_49774 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49806_49851 = state_49788__$1;
(statearr_49806_49851[(2)] = inst_49774);

(statearr_49806_49851[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (29))){
var inst_49754 = (state_49788[(2)]);
var inst_49755 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49756 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49755);
var state_49788__$1 = (function (){var statearr_49807 = state_49788;
(statearr_49807[(9)] = inst_49754);

return statearr_49807;
})();
var statearr_49808_49852 = state_49788__$1;
(statearr_49808_49852[(2)] = inst_49756);

(statearr_49808_49852[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (6))){
var inst_49703 = (state_49788[(10)]);
var state_49788__$1 = state_49788;
var statearr_49809_49853 = state_49788__$1;
(statearr_49809_49853[(2)] = inst_49703);

(statearr_49809_49853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (28))){
var inst_49750 = (state_49788[(2)]);
var inst_49751 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49752 = figwheel.client.heads_up.display_warning.call(null,inst_49751);
var state_49788__$1 = (function (){var statearr_49810 = state_49788;
(statearr_49810[(11)] = inst_49750);

return statearr_49810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(29),inst_49752);
} else {
if((state_val_49789 === (25))){
var inst_49748 = figwheel.client.heads_up.clear.call(null);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(28),inst_49748);
} else {
if((state_val_49789 === (34))){
var inst_49769 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(37),inst_49769);
} else {
if((state_val_49789 === (17))){
var inst_49728 = (state_49788[(2)]);
var inst_49729 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49730 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49729);
var state_49788__$1 = (function (){var statearr_49811 = state_49788;
(statearr_49811[(12)] = inst_49728);

return statearr_49811;
})();
var statearr_49812_49854 = state_49788__$1;
(statearr_49812_49854[(2)] = inst_49730);

(statearr_49812_49854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (3))){
var inst_49720 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49788__$1 = state_49788;
if(inst_49720){
var statearr_49813_49855 = state_49788__$1;
(statearr_49813_49855[(1)] = (13));

} else {
var statearr_49814_49856 = state_49788__$1;
(statearr_49814_49856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (12))){
var inst_49716 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49815_49857 = state_49788__$1;
(statearr_49815_49857[(2)] = inst_49716);

(statearr_49815_49857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (2))){
var inst_49703 = (state_49788[(10)]);
var inst_49703__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49788__$1 = (function (){var statearr_49816 = state_49788;
(statearr_49816[(10)] = inst_49703__$1);

return statearr_49816;
})();
if(cljs.core.truth_(inst_49703__$1)){
var statearr_49817_49858 = state_49788__$1;
(statearr_49817_49858[(1)] = (5));

} else {
var statearr_49818_49859 = state_49788__$1;
(statearr_49818_49859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (23))){
var inst_49746 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49788__$1 = state_49788;
if(inst_49746){
var statearr_49819_49860 = state_49788__$1;
(statearr_49819_49860[(1)] = (25));

} else {
var statearr_49820_49861 = state_49788__$1;
(statearr_49820_49861[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (35))){
var state_49788__$1 = state_49788;
var statearr_49821_49862 = state_49788__$1;
(statearr_49821_49862[(2)] = null);

(statearr_49821_49862[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (19))){
var inst_49741 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49788__$1 = state_49788;
if(inst_49741){
var statearr_49822_49863 = state_49788__$1;
(statearr_49822_49863[(1)] = (22));

} else {
var statearr_49823_49864 = state_49788__$1;
(statearr_49823_49864[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (11))){
var inst_49712 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49824_49865 = state_49788__$1;
(statearr_49824_49865[(2)] = inst_49712);

(statearr_49824_49865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (9))){
var inst_49714 = figwheel.client.heads_up.clear.call(null);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(12),inst_49714);
} else {
if((state_val_49789 === (5))){
var inst_49705 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49788__$1 = state_49788;
var statearr_49825_49866 = state_49788__$1;
(statearr_49825_49866[(2)] = inst_49705);

(statearr_49825_49866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (14))){
var inst_49732 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49788__$1 = state_49788;
if(inst_49732){
var statearr_49826_49867 = state_49788__$1;
(statearr_49826_49867[(1)] = (18));

} else {
var statearr_49827_49868 = state_49788__$1;
(statearr_49827_49868[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (26))){
var inst_49758 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49788__$1 = state_49788;
if(inst_49758){
var statearr_49828_49869 = state_49788__$1;
(statearr_49828_49869[(1)] = (30));

} else {
var statearr_49829_49870 = state_49788__$1;
(statearr_49829_49870[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (16))){
var inst_49724 = (state_49788[(2)]);
var inst_49725 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49726 = figwheel.client.heads_up.display_exception.call(null,inst_49725);
var state_49788__$1 = (function (){var statearr_49830 = state_49788;
(statearr_49830[(13)] = inst_49724);

return statearr_49830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(17),inst_49726);
} else {
if((state_val_49789 === (30))){
var inst_49760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49761 = figwheel.client.heads_up.display_warning.call(null,inst_49760);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(33),inst_49761);
} else {
if((state_val_49789 === (10))){
var inst_49718 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49831_49871 = state_49788__$1;
(statearr_49831_49871[(2)] = inst_49718);

(statearr_49831_49871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (18))){
var inst_49734 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49735 = figwheel.client.heads_up.display_exception.call(null,inst_49734);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(21),inst_49735);
} else {
if((state_val_49789 === (37))){
var inst_49771 = (state_49788[(2)]);
var state_49788__$1 = state_49788;
var statearr_49832_49872 = state_49788__$1;
(statearr_49832_49872[(2)] = inst_49771);

(statearr_49832_49872[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49789 === (8))){
var inst_49710 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49788__$1 = state_49788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49788__$1,(11),inst_49710);
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
});})(c__38928__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38761__auto__,c__38928__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto____0 = (function (){
var statearr_49833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49833[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto__);

(statearr_49833[(1)] = (1));

return statearr_49833;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto____1 = (function (state_49788){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_49788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e49834){if((e49834 instanceof Object)){
var ex__38765__auto__ = e49834;
var statearr_49835_49873 = state_49788;
(statearr_49835_49873[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49874 = state_49788;
state_49788 = G__49874;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto__ = function(state_49788){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto____1.call(this,state_49788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__,msg_hist,msg_names,msg))
})();
var state__38930__auto__ = (function (){var statearr_49836 = f__38929__auto__.call(null);
(statearr_49836[(6)] = c__38928__auto__);

return statearr_49836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__,msg_hist,msg_names,msg))
);

return c__38928__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38928__auto___49903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___49903,ch){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___49903,ch){
return (function (state_49889){
var state_val_49890 = (state_49889[(1)]);
if((state_val_49890 === (1))){
var state_49889__$1 = state_49889;
var statearr_49891_49904 = state_49889__$1;
(statearr_49891_49904[(2)] = null);

(statearr_49891_49904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49890 === (2))){
var state_49889__$1 = state_49889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49889__$1,(4),ch);
} else {
if((state_val_49890 === (3))){
var inst_49887 = (state_49889[(2)]);
var state_49889__$1 = state_49889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49889__$1,inst_49887);
} else {
if((state_val_49890 === (4))){
var inst_49877 = (state_49889[(7)]);
var inst_49877__$1 = (state_49889[(2)]);
var state_49889__$1 = (function (){var statearr_49892 = state_49889;
(statearr_49892[(7)] = inst_49877__$1);

return statearr_49892;
})();
if(cljs.core.truth_(inst_49877__$1)){
var statearr_49893_49905 = state_49889__$1;
(statearr_49893_49905[(1)] = (5));

} else {
var statearr_49894_49906 = state_49889__$1;
(statearr_49894_49906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49890 === (5))){
var inst_49877 = (state_49889[(7)]);
var inst_49879 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49877);
var state_49889__$1 = state_49889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49889__$1,(8),inst_49879);
} else {
if((state_val_49890 === (6))){
var state_49889__$1 = state_49889;
var statearr_49895_49907 = state_49889__$1;
(statearr_49895_49907[(2)] = null);

(statearr_49895_49907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49890 === (7))){
var inst_49885 = (state_49889[(2)]);
var state_49889__$1 = state_49889;
var statearr_49896_49908 = state_49889__$1;
(statearr_49896_49908[(2)] = inst_49885);

(statearr_49896_49908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49890 === (8))){
var inst_49881 = (state_49889[(2)]);
var state_49889__$1 = (function (){var statearr_49897 = state_49889;
(statearr_49897[(8)] = inst_49881);

return statearr_49897;
})();
var statearr_49898_49909 = state_49889__$1;
(statearr_49898_49909[(2)] = null);

(statearr_49898_49909[(1)] = (2));


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
});})(c__38928__auto___49903,ch))
;
return ((function (switch__38761__auto__,c__38928__auto___49903,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38762__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38762__auto____0 = (function (){
var statearr_49899 = [null,null,null,null,null,null,null,null,null];
(statearr_49899[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38762__auto__);

(statearr_49899[(1)] = (1));

return statearr_49899;
});
var figwheel$client$heads_up_plugin_$_state_machine__38762__auto____1 = (function (state_49889){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_49889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e49900){if((e49900 instanceof Object)){
var ex__38765__auto__ = e49900;
var statearr_49901_49910 = state_49889;
(statearr_49901_49910[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49911 = state_49889;
state_49889 = G__49911;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38762__auto__ = function(state_49889){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38762__auto____1.call(this,state_49889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38762__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38762__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___49903,ch))
})();
var state__38930__auto__ = (function (){var statearr_49902 = f__38929__auto__.call(null);
(statearr_49902[(6)] = c__38928__auto___49903);

return statearr_49902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___49903,ch))
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
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_49917){
var state_val_49918 = (state_49917[(1)]);
if((state_val_49918 === (1))){
var inst_49912 = cljs.core.async.timeout.call(null,(3000));
var state_49917__$1 = state_49917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49917__$1,(2),inst_49912);
} else {
if((state_val_49918 === (2))){
var inst_49914 = (state_49917[(2)]);
var inst_49915 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49917__$1 = (function (){var statearr_49919 = state_49917;
(statearr_49919[(7)] = inst_49914);

return statearr_49919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49917__$1,inst_49915);
} else {
return null;
}
}
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38762__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38762__auto____0 = (function (){
var statearr_49920 = [null,null,null,null,null,null,null,null];
(statearr_49920[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38762__auto__);

(statearr_49920[(1)] = (1));

return statearr_49920;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38762__auto____1 = (function (state_49917){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_49917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e49921){if((e49921 instanceof Object)){
var ex__38765__auto__ = e49921;
var statearr_49922_49924 = state_49917;
(statearr_49922_49924[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49925 = state_49917;
state_49917 = G__49925;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38762__auto__ = function(state_49917){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38762__auto____1.call(this,state_49917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38762__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38762__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_49923 = f__38929__auto__.call(null);
(statearr_49923[(6)] = c__38928__auto__);

return statearr_49923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
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
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__,figwheel_version,temp__5457__auto__){
return (function (state_49932){
var state_val_49933 = (state_49932[(1)]);
if((state_val_49933 === (1))){
var inst_49926 = cljs.core.async.timeout.call(null,(2000));
var state_49932__$1 = state_49932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49932__$1,(2),inst_49926);
} else {
if((state_val_49933 === (2))){
var inst_49928 = (state_49932[(2)]);
var inst_49929 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49930 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49929);
var state_49932__$1 = (function (){var statearr_49934 = state_49932;
(statearr_49934[(7)] = inst_49928);

return statearr_49934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49932__$1,inst_49930);
} else {
return null;
}
}
});})(c__38928__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto____0 = (function (){
var statearr_49935 = [null,null,null,null,null,null,null,null];
(statearr_49935[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto__);

(statearr_49935[(1)] = (1));

return statearr_49935;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto____1 = (function (state_49932){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_49932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e49936){if((e49936 instanceof Object)){
var ex__38765__auto__ = e49936;
var statearr_49937_49939 = state_49932;
(statearr_49937_49939[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49940 = state_49932;
state_49932 = G__49940;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto__ = function(state_49932){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto____1.call(this,state_49932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__,figwheel_version,temp__5457__auto__))
})();
var state__38930__auto__ = (function (){var statearr_49938 = f__38929__auto__.call(null);
(statearr_49938[(6)] = c__38928__auto__);

return statearr_49938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__,figwheel_version,temp__5457__auto__))
);

return c__38928__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49941){
var map__49942 = p__49941;
var map__49942__$1 = (((((!((map__49942 == null))))?(((((map__49942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49942):map__49942);
var file = cljs.core.get.call(null,map__49942__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49942__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49942__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49944 = "";
var G__49944__$1 = (cljs.core.truth_(file)?[G__49944,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49944);
var G__49944__$2 = (cljs.core.truth_(line)?[G__49944__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49944__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__49944__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49944__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49945){
var map__49946 = p__49945;
var map__49946__$1 = (((((!((map__49946 == null))))?(((((map__49946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49946):map__49946);
var ed = map__49946__$1;
var formatted_exception = cljs.core.get.call(null,map__49946__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49946__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49946__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49948_49952 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49949_49953 = null;
var count__49950_49954 = (0);
var i__49951_49955 = (0);
while(true){
if((i__49951_49955 < count__49950_49954)){
var msg_49956 = cljs.core._nth.call(null,chunk__49949_49953,i__49951_49955);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49956);


var G__49957 = seq__49948_49952;
var G__49958 = chunk__49949_49953;
var G__49959 = count__49950_49954;
var G__49960 = (i__49951_49955 + (1));
seq__49948_49952 = G__49957;
chunk__49949_49953 = G__49958;
count__49950_49954 = G__49959;
i__49951_49955 = G__49960;
continue;
} else {
var temp__5457__auto___49961 = cljs.core.seq.call(null,seq__49948_49952);
if(temp__5457__auto___49961){
var seq__49948_49962__$1 = temp__5457__auto___49961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49948_49962__$1)){
var c__4550__auto___49963 = cljs.core.chunk_first.call(null,seq__49948_49962__$1);
var G__49964 = cljs.core.chunk_rest.call(null,seq__49948_49962__$1);
var G__49965 = c__4550__auto___49963;
var G__49966 = cljs.core.count.call(null,c__4550__auto___49963);
var G__49967 = (0);
seq__49948_49952 = G__49964;
chunk__49949_49953 = G__49965;
count__49950_49954 = G__49966;
i__49951_49955 = G__49967;
continue;
} else {
var msg_49968 = cljs.core.first.call(null,seq__49948_49962__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49968);


var G__49969 = cljs.core.next.call(null,seq__49948_49962__$1);
var G__49970 = null;
var G__49971 = (0);
var G__49972 = (0);
seq__49948_49952 = G__49969;
chunk__49949_49953 = G__49970;
count__49950_49954 = G__49971;
i__49951_49955 = G__49972;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49973){
var map__49974 = p__49973;
var map__49974__$1 = (((((!((map__49974 == null))))?(((((map__49974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49974):map__49974);
var w = map__49974__$1;
var message = cljs.core.get.call(null,map__49974__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__49976 = cljs.core.seq.call(null,plugins);
var chunk__49977 = null;
var count__49978 = (0);
var i__49979 = (0);
while(true){
if((i__49979 < count__49978)){
var vec__49986 = cljs.core._nth.call(null,chunk__49977,i__49979);
var k = cljs.core.nth.call(null,vec__49986,(0),null);
var plugin = cljs.core.nth.call(null,vec__49986,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49992 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49976,chunk__49977,count__49978,i__49979,pl_49992,vec__49986,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49992.call(null,msg_hist);
});})(seq__49976,chunk__49977,count__49978,i__49979,pl_49992,vec__49986,k,plugin))
);
} else {
}


var G__49993 = seq__49976;
var G__49994 = chunk__49977;
var G__49995 = count__49978;
var G__49996 = (i__49979 + (1));
seq__49976 = G__49993;
chunk__49977 = G__49994;
count__49978 = G__49995;
i__49979 = G__49996;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49976);
if(temp__5457__auto__){
var seq__49976__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49976__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__49976__$1);
var G__49997 = cljs.core.chunk_rest.call(null,seq__49976__$1);
var G__49998 = c__4550__auto__;
var G__49999 = cljs.core.count.call(null,c__4550__auto__);
var G__50000 = (0);
seq__49976 = G__49997;
chunk__49977 = G__49998;
count__49978 = G__49999;
i__49979 = G__50000;
continue;
} else {
var vec__49989 = cljs.core.first.call(null,seq__49976__$1);
var k = cljs.core.nth.call(null,vec__49989,(0),null);
var plugin = cljs.core.nth.call(null,vec__49989,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50001 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49976,chunk__49977,count__49978,i__49979,pl_50001,vec__49989,k,plugin,seq__49976__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50001.call(null,msg_hist);
});})(seq__49976,chunk__49977,count__49978,i__49979,pl_50001,vec__49989,k,plugin,seq__49976__$1,temp__5457__auto__))
);
} else {
}


var G__50002 = cljs.core.next.call(null,seq__49976__$1);
var G__50003 = null;
var G__50004 = (0);
var G__50005 = (0);
seq__49976 = G__50002;
chunk__49977 = G__50003;
count__49978 = G__50004;
i__49979 = G__50005;
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
var G__50007 = arguments.length;
switch (G__50007) {
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

var seq__50008_50013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50009_50014 = null;
var count__50010_50015 = (0);
var i__50011_50016 = (0);
while(true){
if((i__50011_50016 < count__50010_50015)){
var msg_50017 = cljs.core._nth.call(null,chunk__50009_50014,i__50011_50016);
figwheel.client.socket.handle_incoming_message.call(null,msg_50017);


var G__50018 = seq__50008_50013;
var G__50019 = chunk__50009_50014;
var G__50020 = count__50010_50015;
var G__50021 = (i__50011_50016 + (1));
seq__50008_50013 = G__50018;
chunk__50009_50014 = G__50019;
count__50010_50015 = G__50020;
i__50011_50016 = G__50021;
continue;
} else {
var temp__5457__auto___50022 = cljs.core.seq.call(null,seq__50008_50013);
if(temp__5457__auto___50022){
var seq__50008_50023__$1 = temp__5457__auto___50022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50008_50023__$1)){
var c__4550__auto___50024 = cljs.core.chunk_first.call(null,seq__50008_50023__$1);
var G__50025 = cljs.core.chunk_rest.call(null,seq__50008_50023__$1);
var G__50026 = c__4550__auto___50024;
var G__50027 = cljs.core.count.call(null,c__4550__auto___50024);
var G__50028 = (0);
seq__50008_50013 = G__50025;
chunk__50009_50014 = G__50026;
count__50010_50015 = G__50027;
i__50011_50016 = G__50028;
continue;
} else {
var msg_50029 = cljs.core.first.call(null,seq__50008_50023__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50029);


var G__50030 = cljs.core.next.call(null,seq__50008_50023__$1);
var G__50031 = null;
var G__50032 = (0);
var G__50033 = (0);
seq__50008_50013 = G__50030;
chunk__50009_50014 = G__50031;
count__50010_50015 = G__50032;
i__50011_50016 = G__50033;
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
var len__4730__auto___50038 = arguments.length;
var i__4731__auto___50039 = (0);
while(true){
if((i__4731__auto___50039 < len__4730__auto___50038)){
args__4736__auto__.push((arguments[i__4731__auto___50039]));

var G__50040 = (i__4731__auto___50039 + (1));
i__4731__auto___50039 = G__50040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50035){
var map__50036 = p__50035;
var map__50036__$1 = (((((!((map__50036 == null))))?(((((map__50036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50036):map__50036);
var opts = map__50036__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50034));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50041){if((e50041 instanceof Error)){
var e = e50041;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50041;

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
return (function (p__50042){
var map__50043 = p__50042;
var map__50043__$1 = (((((!((map__50043 == null))))?(((((map__50043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50043):map__50043);
var msg_name = cljs.core.get.call(null,map__50043__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1561561436000

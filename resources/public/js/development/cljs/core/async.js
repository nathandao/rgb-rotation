// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40852 = arguments.length;
switch (G__40852) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40853 = (function (f,blockable,meta40854){
this.f = f;
this.blockable = blockable;
this.meta40854 = meta40854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40855,meta40854__$1){
var self__ = this;
var _40855__$1 = this;
return (new cljs.core.async.t_cljs$core$async40853(self__.f,self__.blockable,meta40854__$1));
});

cljs.core.async.t_cljs$core$async40853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40855){
var self__ = this;
var _40855__$1 = this;
return self__.meta40854;
});

cljs.core.async.t_cljs$core$async40853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40854","meta40854",-663133850,null)], null);
});

cljs.core.async.t_cljs$core$async40853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40853";

cljs.core.async.t_cljs$core$async40853.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40853");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40853.
 */
cljs.core.async.__GT_t_cljs$core$async40853 = (function cljs$core$async$__GT_t_cljs$core$async40853(f__$1,blockable__$1,meta40854){
return (new cljs.core.async.t_cljs$core$async40853(f__$1,blockable__$1,meta40854));
});

}

return (new cljs.core.async.t_cljs$core$async40853(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40859 = arguments.length;
switch (G__40859) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40862 = arguments.length;
switch (G__40862) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40865 = arguments.length;
switch (G__40865) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40867 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40867);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40867,ret){
return (function (){
return fn1.call(null,val_40867);
});})(val_40867,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40869 = arguments.length;
switch (G__40869) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___40871 = n;
var x_40872 = (0);
while(true){
if((x_40872 < n__4607__auto___40871)){
(a[x_40872] = (0));

var G__40873 = (x_40872 + (1));
x_40872 = G__40873;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40874 = (i + (1));
i = G__40874;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40875 = (function (flag,meta40876){
this.flag = flag;
this.meta40876 = meta40876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40877,meta40876__$1){
var self__ = this;
var _40877__$1 = this;
return (new cljs.core.async.t_cljs$core$async40875(self__.flag,meta40876__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40877){
var self__ = this;
var _40877__$1 = this;
return self__.meta40876;
});})(flag))
;

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40875.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40876","meta40876",-2059064167,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40875";

cljs.core.async.t_cljs$core$async40875.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40875");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40875.
 */
cljs.core.async.__GT_t_cljs$core$async40875 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40875(flag__$1,meta40876){
return (new cljs.core.async.t_cljs$core$async40875(flag__$1,meta40876));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40875(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40878 = (function (flag,cb,meta40879){
this.flag = flag;
this.cb = cb;
this.meta40879 = meta40879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40880,meta40879__$1){
var self__ = this;
var _40880__$1 = this;
return (new cljs.core.async.t_cljs$core$async40878(self__.flag,self__.cb,meta40879__$1));
});

cljs.core.async.t_cljs$core$async40878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40880){
var self__ = this;
var _40880__$1 = this;
return self__.meta40879;
});

cljs.core.async.t_cljs$core$async40878.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40878.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40879","meta40879",1419418818,null)], null);
});

cljs.core.async.t_cljs$core$async40878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40878";

cljs.core.async.t_cljs$core$async40878.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40878");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40878.
 */
cljs.core.async.__GT_t_cljs$core$async40878 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40878(flag__$1,cb__$1,meta40879){
return (new cljs.core.async.t_cljs$core$async40878(flag__$1,cb__$1,meta40879));
});

}

return (new cljs.core.async.t_cljs$core$async40878(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40881_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40881_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40882_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40882_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40883 = (i + (1));
i = G__40883;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40889 = arguments.length;
var i__4731__auto___40890 = (0);
while(true){
if((i__4731__auto___40890 < len__4730__auto___40889)){
args__4736__auto__.push((arguments[i__4731__auto___40890]));

var G__40891 = (i__4731__auto___40890 + (1));
i__4731__auto___40890 = G__40891;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40886){
var map__40887 = p__40886;
var map__40887__$1 = (((((!((map__40887 == null))))?(((((map__40887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40887):map__40887);
var opts = map__40887__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40884){
var G__40885 = cljs.core.first.call(null,seq40884);
var seq40884__$1 = cljs.core.next.call(null,seq40884);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40885,seq40884__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40893 = arguments.length;
switch (G__40893) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38928__auto___40939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___40939){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___40939){
return (function (state_40917){
var state_val_40918 = (state_40917[(1)]);
if((state_val_40918 === (7))){
var inst_40913 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40919_40940 = state_40917__$1;
(statearr_40919_40940[(2)] = inst_40913);

(statearr_40919_40940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (1))){
var state_40917__$1 = state_40917;
var statearr_40920_40941 = state_40917__$1;
(statearr_40920_40941[(2)] = null);

(statearr_40920_40941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (4))){
var inst_40896 = (state_40917[(7)]);
var inst_40896__$1 = (state_40917[(2)]);
var inst_40897 = (inst_40896__$1 == null);
var state_40917__$1 = (function (){var statearr_40921 = state_40917;
(statearr_40921[(7)] = inst_40896__$1);

return statearr_40921;
})();
if(cljs.core.truth_(inst_40897)){
var statearr_40922_40942 = state_40917__$1;
(statearr_40922_40942[(1)] = (5));

} else {
var statearr_40923_40943 = state_40917__$1;
(statearr_40923_40943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (13))){
var state_40917__$1 = state_40917;
var statearr_40924_40944 = state_40917__$1;
(statearr_40924_40944[(2)] = null);

(statearr_40924_40944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (6))){
var inst_40896 = (state_40917[(7)]);
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40917__$1,(11),to,inst_40896);
} else {
if((state_val_40918 === (3))){
var inst_40915 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40917__$1,inst_40915);
} else {
if((state_val_40918 === (12))){
var state_40917__$1 = state_40917;
var statearr_40925_40945 = state_40917__$1;
(statearr_40925_40945[(2)] = null);

(statearr_40925_40945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (2))){
var state_40917__$1 = state_40917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40917__$1,(4),from);
} else {
if((state_val_40918 === (11))){
var inst_40906 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
if(cljs.core.truth_(inst_40906)){
var statearr_40926_40946 = state_40917__$1;
(statearr_40926_40946[(1)] = (12));

} else {
var statearr_40927_40947 = state_40917__$1;
(statearr_40927_40947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (9))){
var state_40917__$1 = state_40917;
var statearr_40928_40948 = state_40917__$1;
(statearr_40928_40948[(2)] = null);

(statearr_40928_40948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (5))){
var state_40917__$1 = state_40917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40929_40949 = state_40917__$1;
(statearr_40929_40949[(1)] = (8));

} else {
var statearr_40930_40950 = state_40917__$1;
(statearr_40930_40950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (14))){
var inst_40911 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40931_40951 = state_40917__$1;
(statearr_40931_40951[(2)] = inst_40911);

(statearr_40931_40951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (10))){
var inst_40903 = (state_40917[(2)]);
var state_40917__$1 = state_40917;
var statearr_40932_40952 = state_40917__$1;
(statearr_40932_40952[(2)] = inst_40903);

(statearr_40932_40952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40918 === (8))){
var inst_40900 = cljs.core.async.close_BANG_.call(null,to);
var state_40917__$1 = state_40917;
var statearr_40933_40953 = state_40917__$1;
(statearr_40933_40953[(2)] = inst_40900);

(statearr_40933_40953[(1)] = (10));


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
});})(c__38928__auto___40939))
;
return ((function (switch__38761__auto__,c__38928__auto___40939){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_40934 = [null,null,null,null,null,null,null,null];
(statearr_40934[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_40934[(1)] = (1));

return statearr_40934;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_40917){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_40917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e40935){if((e40935 instanceof Object)){
var ex__38765__auto__ = e40935;
var statearr_40936_40954 = state_40917;
(statearr_40936_40954[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40955 = state_40917;
state_40917 = G__40955;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_40917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_40917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___40939))
})();
var state__38930__auto__ = (function (){var statearr_40937 = f__38929__auto__.call(null);
(statearr_40937[(6)] = c__38928__auto___40939);

return statearr_40937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___40939))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__40956){
var vec__40957 = p__40956;
var v = cljs.core.nth.call(null,vec__40957,(0),null);
var p = cljs.core.nth.call(null,vec__40957,(1),null);
var job = vec__40957;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38928__auto___41128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___41128,res,vec__40957,v,p,job,jobs,results){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___41128,res,vec__40957,v,p,job,jobs,results){
return (function (state_40964){
var state_val_40965 = (state_40964[(1)]);
if((state_val_40965 === (1))){
var state_40964__$1 = state_40964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40964__$1,(2),res,v);
} else {
if((state_val_40965 === (2))){
var inst_40961 = (state_40964[(2)]);
var inst_40962 = cljs.core.async.close_BANG_.call(null,res);
var state_40964__$1 = (function (){var statearr_40966 = state_40964;
(statearr_40966[(7)] = inst_40961);

return statearr_40966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40964__$1,inst_40962);
} else {
return null;
}
}
});})(c__38928__auto___41128,res,vec__40957,v,p,job,jobs,results))
;
return ((function (switch__38761__auto__,c__38928__auto___41128,res,vec__40957,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0 = (function (){
var statearr_40967 = [null,null,null,null,null,null,null,null];
(statearr_40967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__);

(statearr_40967[(1)] = (1));

return statearr_40967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1 = (function (state_40964){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_40964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e40968){if((e40968 instanceof Object)){
var ex__38765__auto__ = e40968;
var statearr_40969_41129 = state_40964;
(statearr_40969_41129[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41130 = state_40964;
state_40964 = G__41130;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = function(state_40964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1.call(this,state_40964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___41128,res,vec__40957,v,p,job,jobs,results))
})();
var state__38930__auto__ = (function (){var statearr_40970 = f__38929__auto__.call(null);
(statearr_40970[(6)] = c__38928__auto___41128);

return statearr_40970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___41128,res,vec__40957,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__40971){
var vec__40972 = p__40971;
var v = cljs.core.nth.call(null,vec__40972,(0),null);
var p = cljs.core.nth.call(null,vec__40972,(1),null);
var job = vec__40972;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4607__auto___41131 = n;
var __41132 = (0);
while(true){
if((__41132 < n__4607__auto___41131)){
var G__40975_41133 = type;
var G__40975_41134__$1 = (((G__40975_41133 instanceof cljs.core.Keyword))?G__40975_41133.fqn:null);
switch (G__40975_41134__$1) {
case "compute":
var c__38928__auto___41136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41132,c__38928__auto___41136,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (__41132,c__38928__auto___41136,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async){
return (function (state_40988){
var state_val_40989 = (state_40988[(1)]);
if((state_val_40989 === (1))){
var state_40988__$1 = state_40988;
var statearr_40990_41137 = state_40988__$1;
(statearr_40990_41137[(2)] = null);

(statearr_40990_41137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40989 === (2))){
var state_40988__$1 = state_40988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40988__$1,(4),jobs);
} else {
if((state_val_40989 === (3))){
var inst_40986 = (state_40988[(2)]);
var state_40988__$1 = state_40988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40988__$1,inst_40986);
} else {
if((state_val_40989 === (4))){
var inst_40978 = (state_40988[(2)]);
var inst_40979 = process__$1.call(null,inst_40978);
var state_40988__$1 = state_40988;
if(cljs.core.truth_(inst_40979)){
var statearr_40991_41138 = state_40988__$1;
(statearr_40991_41138[(1)] = (5));

} else {
var statearr_40992_41139 = state_40988__$1;
(statearr_40992_41139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40989 === (5))){
var state_40988__$1 = state_40988;
var statearr_40993_41140 = state_40988__$1;
(statearr_40993_41140[(2)] = null);

(statearr_40993_41140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40989 === (6))){
var state_40988__$1 = state_40988;
var statearr_40994_41141 = state_40988__$1;
(statearr_40994_41141[(2)] = null);

(statearr_40994_41141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40989 === (7))){
var inst_40984 = (state_40988[(2)]);
var state_40988__$1 = state_40988;
var statearr_40995_41142 = state_40988__$1;
(statearr_40995_41142[(2)] = inst_40984);

(statearr_40995_41142[(1)] = (3));


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
});})(__41132,c__38928__auto___41136,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async))
;
return ((function (__41132,switch__38761__auto__,c__38928__auto___41136,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0 = (function (){
var statearr_40996 = [null,null,null,null,null,null,null];
(statearr_40996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__);

(statearr_40996[(1)] = (1));

return statearr_40996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1 = (function (state_40988){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_40988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e40997){if((e40997 instanceof Object)){
var ex__38765__auto__ = e40997;
var statearr_40998_41143 = state_40988;
(statearr_40998_41143[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41144 = state_40988;
state_40988 = G__41144;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = function(state_40988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1.call(this,state_40988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__;
})()
;})(__41132,switch__38761__auto__,c__38928__auto___41136,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async))
})();
var state__38930__auto__ = (function (){var statearr_40999 = f__38929__auto__.call(null);
(statearr_40999[(6)] = c__38928__auto___41136);

return statearr_40999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(__41132,c__38928__auto___41136,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async))
);


break;
case "async":
var c__38928__auto___41145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41132,c__38928__auto___41145,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (__41132,c__38928__auto___41145,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async){
return (function (state_41012){
var state_val_41013 = (state_41012[(1)]);
if((state_val_41013 === (1))){
var state_41012__$1 = state_41012;
var statearr_41014_41146 = state_41012__$1;
(statearr_41014_41146[(2)] = null);

(statearr_41014_41146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (2))){
var state_41012__$1 = state_41012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41012__$1,(4),jobs);
} else {
if((state_val_41013 === (3))){
var inst_41010 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41012__$1,inst_41010);
} else {
if((state_val_41013 === (4))){
var inst_41002 = (state_41012[(2)]);
var inst_41003 = async.call(null,inst_41002);
var state_41012__$1 = state_41012;
if(cljs.core.truth_(inst_41003)){
var statearr_41015_41147 = state_41012__$1;
(statearr_41015_41147[(1)] = (5));

} else {
var statearr_41016_41148 = state_41012__$1;
(statearr_41016_41148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (5))){
var state_41012__$1 = state_41012;
var statearr_41017_41149 = state_41012__$1;
(statearr_41017_41149[(2)] = null);

(statearr_41017_41149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (6))){
var state_41012__$1 = state_41012;
var statearr_41018_41150 = state_41012__$1;
(statearr_41018_41150[(2)] = null);

(statearr_41018_41150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (7))){
var inst_41008 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
var statearr_41019_41151 = state_41012__$1;
(statearr_41019_41151[(2)] = inst_41008);

(statearr_41019_41151[(1)] = (3));


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
});})(__41132,c__38928__auto___41145,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async))
;
return ((function (__41132,switch__38761__auto__,c__38928__auto___41145,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0 = (function (){
var statearr_41020 = [null,null,null,null,null,null,null];
(statearr_41020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__);

(statearr_41020[(1)] = (1));

return statearr_41020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1 = (function (state_41012){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41021){if((e41021 instanceof Object)){
var ex__38765__auto__ = e41021;
var statearr_41022_41152 = state_41012;
(statearr_41022_41152[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41153 = state_41012;
state_41012 = G__41153;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = function(state_41012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1.call(this,state_41012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__;
})()
;})(__41132,switch__38761__auto__,c__38928__auto___41145,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async))
})();
var state__38930__auto__ = (function (){var statearr_41023 = f__38929__auto__.call(null);
(statearr_41023[(6)] = c__38928__auto___41145);

return statearr_41023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(__41132,c__38928__auto___41145,G__40975_41133,G__40975_41134__$1,n__4607__auto___41131,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40975_41134__$1)].join('')));

}

var G__41154 = (__41132 + (1));
__41132 = G__41154;
continue;
} else {
}
break;
}

var c__38928__auto___41155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___41155,jobs,results,process__$1,async){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___41155,jobs,results,process__$1,async){
return (function (state_41045){
var state_val_41046 = (state_41045[(1)]);
if((state_val_41046 === (1))){
var state_41045__$1 = state_41045;
var statearr_41047_41156 = state_41045__$1;
(statearr_41047_41156[(2)] = null);

(statearr_41047_41156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41046 === (2))){
var state_41045__$1 = state_41045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41045__$1,(4),from);
} else {
if((state_val_41046 === (3))){
var inst_41043 = (state_41045[(2)]);
var state_41045__$1 = state_41045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41045__$1,inst_41043);
} else {
if((state_val_41046 === (4))){
var inst_41026 = (state_41045[(7)]);
var inst_41026__$1 = (state_41045[(2)]);
var inst_41027 = (inst_41026__$1 == null);
var state_41045__$1 = (function (){var statearr_41048 = state_41045;
(statearr_41048[(7)] = inst_41026__$1);

return statearr_41048;
})();
if(cljs.core.truth_(inst_41027)){
var statearr_41049_41157 = state_41045__$1;
(statearr_41049_41157[(1)] = (5));

} else {
var statearr_41050_41158 = state_41045__$1;
(statearr_41050_41158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41046 === (5))){
var inst_41029 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41045__$1 = state_41045;
var statearr_41051_41159 = state_41045__$1;
(statearr_41051_41159[(2)] = inst_41029);

(statearr_41051_41159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41046 === (6))){
var inst_41026 = (state_41045[(7)]);
var inst_41031 = (state_41045[(8)]);
var inst_41031__$1 = cljs.core.async.chan.call(null,(1));
var inst_41032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41033 = [inst_41026,inst_41031__$1];
var inst_41034 = (new cljs.core.PersistentVector(null,2,(5),inst_41032,inst_41033,null));
var state_41045__$1 = (function (){var statearr_41052 = state_41045;
(statearr_41052[(8)] = inst_41031__$1);

return statearr_41052;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41045__$1,(8),jobs,inst_41034);
} else {
if((state_val_41046 === (7))){
var inst_41041 = (state_41045[(2)]);
var state_41045__$1 = state_41045;
var statearr_41053_41160 = state_41045__$1;
(statearr_41053_41160[(2)] = inst_41041);

(statearr_41053_41160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41046 === (8))){
var inst_41031 = (state_41045[(8)]);
var inst_41036 = (state_41045[(2)]);
var state_41045__$1 = (function (){var statearr_41054 = state_41045;
(statearr_41054[(9)] = inst_41036);

return statearr_41054;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41045__$1,(9),results,inst_41031);
} else {
if((state_val_41046 === (9))){
var inst_41038 = (state_41045[(2)]);
var state_41045__$1 = (function (){var statearr_41055 = state_41045;
(statearr_41055[(10)] = inst_41038);

return statearr_41055;
})();
var statearr_41056_41161 = state_41045__$1;
(statearr_41056_41161[(2)] = null);

(statearr_41056_41161[(1)] = (2));


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
});})(c__38928__auto___41155,jobs,results,process__$1,async))
;
return ((function (switch__38761__auto__,c__38928__auto___41155,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0 = (function (){
var statearr_41057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__);

(statearr_41057[(1)] = (1));

return statearr_41057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1 = (function (state_41045){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41058){if((e41058 instanceof Object)){
var ex__38765__auto__ = e41058;
var statearr_41059_41162 = state_41045;
(statearr_41059_41162[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41163 = state_41045;
state_41045 = G__41163;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = function(state_41045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1.call(this,state_41045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___41155,jobs,results,process__$1,async))
})();
var state__38930__auto__ = (function (){var statearr_41060 = f__38929__auto__.call(null);
(statearr_41060[(6)] = c__38928__auto___41155);

return statearr_41060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___41155,jobs,results,process__$1,async))
);


var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__,jobs,results,process__$1,async){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__,jobs,results,process__$1,async){
return (function (state_41098){
var state_val_41099 = (state_41098[(1)]);
if((state_val_41099 === (7))){
var inst_41094 = (state_41098[(2)]);
var state_41098__$1 = state_41098;
var statearr_41100_41164 = state_41098__$1;
(statearr_41100_41164[(2)] = inst_41094);

(statearr_41100_41164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (20))){
var state_41098__$1 = state_41098;
var statearr_41101_41165 = state_41098__$1;
(statearr_41101_41165[(2)] = null);

(statearr_41101_41165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (1))){
var state_41098__$1 = state_41098;
var statearr_41102_41166 = state_41098__$1;
(statearr_41102_41166[(2)] = null);

(statearr_41102_41166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (4))){
var inst_41063 = (state_41098[(7)]);
var inst_41063__$1 = (state_41098[(2)]);
var inst_41064 = (inst_41063__$1 == null);
var state_41098__$1 = (function (){var statearr_41103 = state_41098;
(statearr_41103[(7)] = inst_41063__$1);

return statearr_41103;
})();
if(cljs.core.truth_(inst_41064)){
var statearr_41104_41167 = state_41098__$1;
(statearr_41104_41167[(1)] = (5));

} else {
var statearr_41105_41168 = state_41098__$1;
(statearr_41105_41168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (15))){
var inst_41076 = (state_41098[(8)]);
var state_41098__$1 = state_41098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41098__$1,(18),to,inst_41076);
} else {
if((state_val_41099 === (21))){
var inst_41089 = (state_41098[(2)]);
var state_41098__$1 = state_41098;
var statearr_41106_41169 = state_41098__$1;
(statearr_41106_41169[(2)] = inst_41089);

(statearr_41106_41169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (13))){
var inst_41091 = (state_41098[(2)]);
var state_41098__$1 = (function (){var statearr_41107 = state_41098;
(statearr_41107[(9)] = inst_41091);

return statearr_41107;
})();
var statearr_41108_41170 = state_41098__$1;
(statearr_41108_41170[(2)] = null);

(statearr_41108_41170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (6))){
var inst_41063 = (state_41098[(7)]);
var state_41098__$1 = state_41098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41098__$1,(11),inst_41063);
} else {
if((state_val_41099 === (17))){
var inst_41084 = (state_41098[(2)]);
var state_41098__$1 = state_41098;
if(cljs.core.truth_(inst_41084)){
var statearr_41109_41171 = state_41098__$1;
(statearr_41109_41171[(1)] = (19));

} else {
var statearr_41110_41172 = state_41098__$1;
(statearr_41110_41172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (3))){
var inst_41096 = (state_41098[(2)]);
var state_41098__$1 = state_41098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41098__$1,inst_41096);
} else {
if((state_val_41099 === (12))){
var inst_41073 = (state_41098[(10)]);
var state_41098__$1 = state_41098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41098__$1,(14),inst_41073);
} else {
if((state_val_41099 === (2))){
var state_41098__$1 = state_41098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41098__$1,(4),results);
} else {
if((state_val_41099 === (19))){
var state_41098__$1 = state_41098;
var statearr_41111_41173 = state_41098__$1;
(statearr_41111_41173[(2)] = null);

(statearr_41111_41173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (11))){
var inst_41073 = (state_41098[(2)]);
var state_41098__$1 = (function (){var statearr_41112 = state_41098;
(statearr_41112[(10)] = inst_41073);

return statearr_41112;
})();
var statearr_41113_41174 = state_41098__$1;
(statearr_41113_41174[(2)] = null);

(statearr_41113_41174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (9))){
var state_41098__$1 = state_41098;
var statearr_41114_41175 = state_41098__$1;
(statearr_41114_41175[(2)] = null);

(statearr_41114_41175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (5))){
var state_41098__$1 = state_41098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41115_41176 = state_41098__$1;
(statearr_41115_41176[(1)] = (8));

} else {
var statearr_41116_41177 = state_41098__$1;
(statearr_41116_41177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (14))){
var inst_41076 = (state_41098[(8)]);
var inst_41078 = (state_41098[(11)]);
var inst_41076__$1 = (state_41098[(2)]);
var inst_41077 = (inst_41076__$1 == null);
var inst_41078__$1 = cljs.core.not.call(null,inst_41077);
var state_41098__$1 = (function (){var statearr_41117 = state_41098;
(statearr_41117[(8)] = inst_41076__$1);

(statearr_41117[(11)] = inst_41078__$1);

return statearr_41117;
})();
if(inst_41078__$1){
var statearr_41118_41178 = state_41098__$1;
(statearr_41118_41178[(1)] = (15));

} else {
var statearr_41119_41179 = state_41098__$1;
(statearr_41119_41179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (16))){
var inst_41078 = (state_41098[(11)]);
var state_41098__$1 = state_41098;
var statearr_41120_41180 = state_41098__$1;
(statearr_41120_41180[(2)] = inst_41078);

(statearr_41120_41180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (10))){
var inst_41070 = (state_41098[(2)]);
var state_41098__$1 = state_41098;
var statearr_41121_41181 = state_41098__$1;
(statearr_41121_41181[(2)] = inst_41070);

(statearr_41121_41181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (18))){
var inst_41081 = (state_41098[(2)]);
var state_41098__$1 = state_41098;
var statearr_41122_41182 = state_41098__$1;
(statearr_41122_41182[(2)] = inst_41081);

(statearr_41122_41182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41099 === (8))){
var inst_41067 = cljs.core.async.close_BANG_.call(null,to);
var state_41098__$1 = state_41098;
var statearr_41123_41183 = state_41098__$1;
(statearr_41123_41183[(2)] = inst_41067);

(statearr_41123_41183[(1)] = (10));


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
});})(c__38928__auto__,jobs,results,process__$1,async))
;
return ((function (switch__38761__auto__,c__38928__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0 = (function (){
var statearr_41124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__);

(statearr_41124[(1)] = (1));

return statearr_41124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1 = (function (state_41098){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41125){if((e41125 instanceof Object)){
var ex__38765__auto__ = e41125;
var statearr_41126_41184 = state_41098;
(statearr_41126_41184[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41185 = state_41098;
state_41098 = G__41185;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__ = function(state_41098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1.call(this,state_41098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__,jobs,results,process__$1,async))
})();
var state__38930__auto__ = (function (){var statearr_41127 = f__38929__auto__.call(null);
(statearr_41127[(6)] = c__38928__auto__);

return statearr_41127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__,jobs,results,process__$1,async))
);

return c__38928__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41187 = arguments.length;
switch (G__41187) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41190 = arguments.length;
switch (G__41190) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41193 = arguments.length;
switch (G__41193) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38928__auto___41242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___41242,tc,fc){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___41242,tc,fc){
return (function (state_41219){
var state_val_41220 = (state_41219[(1)]);
if((state_val_41220 === (7))){
var inst_41215 = (state_41219[(2)]);
var state_41219__$1 = state_41219;
var statearr_41221_41243 = state_41219__$1;
(statearr_41221_41243[(2)] = inst_41215);

(statearr_41221_41243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (1))){
var state_41219__$1 = state_41219;
var statearr_41222_41244 = state_41219__$1;
(statearr_41222_41244[(2)] = null);

(statearr_41222_41244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (4))){
var inst_41196 = (state_41219[(7)]);
var inst_41196__$1 = (state_41219[(2)]);
var inst_41197 = (inst_41196__$1 == null);
var state_41219__$1 = (function (){var statearr_41223 = state_41219;
(statearr_41223[(7)] = inst_41196__$1);

return statearr_41223;
})();
if(cljs.core.truth_(inst_41197)){
var statearr_41224_41245 = state_41219__$1;
(statearr_41224_41245[(1)] = (5));

} else {
var statearr_41225_41246 = state_41219__$1;
(statearr_41225_41246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (13))){
var state_41219__$1 = state_41219;
var statearr_41226_41247 = state_41219__$1;
(statearr_41226_41247[(2)] = null);

(statearr_41226_41247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (6))){
var inst_41196 = (state_41219[(7)]);
var inst_41202 = p.call(null,inst_41196);
var state_41219__$1 = state_41219;
if(cljs.core.truth_(inst_41202)){
var statearr_41227_41248 = state_41219__$1;
(statearr_41227_41248[(1)] = (9));

} else {
var statearr_41228_41249 = state_41219__$1;
(statearr_41228_41249[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (3))){
var inst_41217 = (state_41219[(2)]);
var state_41219__$1 = state_41219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41219__$1,inst_41217);
} else {
if((state_val_41220 === (12))){
var state_41219__$1 = state_41219;
var statearr_41229_41250 = state_41219__$1;
(statearr_41229_41250[(2)] = null);

(statearr_41229_41250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (2))){
var state_41219__$1 = state_41219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41219__$1,(4),ch);
} else {
if((state_val_41220 === (11))){
var inst_41196 = (state_41219[(7)]);
var inst_41206 = (state_41219[(2)]);
var state_41219__$1 = state_41219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41219__$1,(8),inst_41206,inst_41196);
} else {
if((state_val_41220 === (9))){
var state_41219__$1 = state_41219;
var statearr_41230_41251 = state_41219__$1;
(statearr_41230_41251[(2)] = tc);

(statearr_41230_41251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (5))){
var inst_41199 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41200 = cljs.core.async.close_BANG_.call(null,fc);
var state_41219__$1 = (function (){var statearr_41231 = state_41219;
(statearr_41231[(8)] = inst_41199);

return statearr_41231;
})();
var statearr_41232_41252 = state_41219__$1;
(statearr_41232_41252[(2)] = inst_41200);

(statearr_41232_41252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (14))){
var inst_41213 = (state_41219[(2)]);
var state_41219__$1 = state_41219;
var statearr_41233_41253 = state_41219__$1;
(statearr_41233_41253[(2)] = inst_41213);

(statearr_41233_41253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (10))){
var state_41219__$1 = state_41219;
var statearr_41234_41254 = state_41219__$1;
(statearr_41234_41254[(2)] = fc);

(statearr_41234_41254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41220 === (8))){
var inst_41208 = (state_41219[(2)]);
var state_41219__$1 = state_41219;
if(cljs.core.truth_(inst_41208)){
var statearr_41235_41255 = state_41219__$1;
(statearr_41235_41255[(1)] = (12));

} else {
var statearr_41236_41256 = state_41219__$1;
(statearr_41236_41256[(1)] = (13));

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
});})(c__38928__auto___41242,tc,fc))
;
return ((function (switch__38761__auto__,c__38928__auto___41242,tc,fc){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_41237 = [null,null,null,null,null,null,null,null,null];
(statearr_41237[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_41237[(1)] = (1));

return statearr_41237;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_41219){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41238){if((e41238 instanceof Object)){
var ex__38765__auto__ = e41238;
var statearr_41239_41257 = state_41219;
(statearr_41239_41257[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41258 = state_41219;
state_41219 = G__41258;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_41219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_41219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___41242,tc,fc))
})();
var state__38930__auto__ = (function (){var statearr_41240 = f__38929__auto__.call(null);
(statearr_41240[(6)] = c__38928__auto___41242);

return statearr_41240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___41242,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_41279){
var state_val_41280 = (state_41279[(1)]);
if((state_val_41280 === (7))){
var inst_41275 = (state_41279[(2)]);
var state_41279__$1 = state_41279;
var statearr_41281_41299 = state_41279__$1;
(statearr_41281_41299[(2)] = inst_41275);

(statearr_41281_41299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41280 === (1))){
var inst_41259 = init;
var state_41279__$1 = (function (){var statearr_41282 = state_41279;
(statearr_41282[(7)] = inst_41259);

return statearr_41282;
})();
var statearr_41283_41300 = state_41279__$1;
(statearr_41283_41300[(2)] = null);

(statearr_41283_41300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41280 === (4))){
var inst_41262 = (state_41279[(8)]);
var inst_41262__$1 = (state_41279[(2)]);
var inst_41263 = (inst_41262__$1 == null);
var state_41279__$1 = (function (){var statearr_41284 = state_41279;
(statearr_41284[(8)] = inst_41262__$1);

return statearr_41284;
})();
if(cljs.core.truth_(inst_41263)){
var statearr_41285_41301 = state_41279__$1;
(statearr_41285_41301[(1)] = (5));

} else {
var statearr_41286_41302 = state_41279__$1;
(statearr_41286_41302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41280 === (6))){
var inst_41266 = (state_41279[(9)]);
var inst_41259 = (state_41279[(7)]);
var inst_41262 = (state_41279[(8)]);
var inst_41266__$1 = f.call(null,inst_41259,inst_41262);
var inst_41267 = cljs.core.reduced_QMARK_.call(null,inst_41266__$1);
var state_41279__$1 = (function (){var statearr_41287 = state_41279;
(statearr_41287[(9)] = inst_41266__$1);

return statearr_41287;
})();
if(inst_41267){
var statearr_41288_41303 = state_41279__$1;
(statearr_41288_41303[(1)] = (8));

} else {
var statearr_41289_41304 = state_41279__$1;
(statearr_41289_41304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41280 === (3))){
var inst_41277 = (state_41279[(2)]);
var state_41279__$1 = state_41279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41279__$1,inst_41277);
} else {
if((state_val_41280 === (2))){
var state_41279__$1 = state_41279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41279__$1,(4),ch);
} else {
if((state_val_41280 === (9))){
var inst_41266 = (state_41279[(9)]);
var inst_41259 = inst_41266;
var state_41279__$1 = (function (){var statearr_41290 = state_41279;
(statearr_41290[(7)] = inst_41259);

return statearr_41290;
})();
var statearr_41291_41305 = state_41279__$1;
(statearr_41291_41305[(2)] = null);

(statearr_41291_41305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41280 === (5))){
var inst_41259 = (state_41279[(7)]);
var state_41279__$1 = state_41279;
var statearr_41292_41306 = state_41279__$1;
(statearr_41292_41306[(2)] = inst_41259);

(statearr_41292_41306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41280 === (10))){
var inst_41273 = (state_41279[(2)]);
var state_41279__$1 = state_41279;
var statearr_41293_41307 = state_41279__$1;
(statearr_41293_41307[(2)] = inst_41273);

(statearr_41293_41307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41280 === (8))){
var inst_41266 = (state_41279[(9)]);
var inst_41269 = cljs.core.deref.call(null,inst_41266);
var state_41279__$1 = state_41279;
var statearr_41294_41308 = state_41279__$1;
(statearr_41294_41308[(2)] = inst_41269);

(statearr_41294_41308[(1)] = (10));


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
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38762__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38762__auto____0 = (function (){
var statearr_41295 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41295[(0)] = cljs$core$async$reduce_$_state_machine__38762__auto__);

(statearr_41295[(1)] = (1));

return statearr_41295;
});
var cljs$core$async$reduce_$_state_machine__38762__auto____1 = (function (state_41279){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41296){if((e41296 instanceof Object)){
var ex__38765__auto__ = e41296;
var statearr_41297_41309 = state_41279;
(statearr_41297_41309[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41310 = state_41279;
state_41279 = G__41310;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38762__auto__ = function(state_41279){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38762__auto____1.call(this,state_41279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38762__auto____0;
cljs$core$async$reduce_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38762__auto____1;
return cljs$core$async$reduce_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_41298 = f__38929__auto__.call(null);
(statearr_41298[(6)] = c__38928__auto__);

return statearr_41298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__,f__$1){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__,f__$1){
return (function (state_41316){
var state_val_41317 = (state_41316[(1)]);
if((state_val_41317 === (1))){
var inst_41311 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41316__$1,(2),inst_41311);
} else {
if((state_val_41317 === (2))){
var inst_41313 = (state_41316[(2)]);
var inst_41314 = f__$1.call(null,inst_41313);
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41316__$1,inst_41314);
} else {
return null;
}
}
});})(c__38928__auto__,f__$1))
;
return ((function (switch__38761__auto__,c__38928__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38762__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38762__auto____0 = (function (){
var statearr_41318 = [null,null,null,null,null,null,null];
(statearr_41318[(0)] = cljs$core$async$transduce_$_state_machine__38762__auto__);

(statearr_41318[(1)] = (1));

return statearr_41318;
});
var cljs$core$async$transduce_$_state_machine__38762__auto____1 = (function (state_41316){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41319){if((e41319 instanceof Object)){
var ex__38765__auto__ = e41319;
var statearr_41320_41322 = state_41316;
(statearr_41320_41322[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41323 = state_41316;
state_41316 = G__41323;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38762__auto__ = function(state_41316){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38762__auto____1.call(this,state_41316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38762__auto____0;
cljs$core$async$transduce_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38762__auto____1;
return cljs$core$async$transduce_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__,f__$1))
})();
var state__38930__auto__ = (function (){var statearr_41321 = f__38929__auto__.call(null);
(statearr_41321[(6)] = c__38928__auto__);

return statearr_41321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__,f__$1))
);

return c__38928__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41325 = arguments.length;
switch (G__41325) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_41350){
var state_val_41351 = (state_41350[(1)]);
if((state_val_41351 === (7))){
var inst_41332 = (state_41350[(2)]);
var state_41350__$1 = state_41350;
var statearr_41352_41373 = state_41350__$1;
(statearr_41352_41373[(2)] = inst_41332);

(statearr_41352_41373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (1))){
var inst_41326 = cljs.core.seq.call(null,coll);
var inst_41327 = inst_41326;
var state_41350__$1 = (function (){var statearr_41353 = state_41350;
(statearr_41353[(7)] = inst_41327);

return statearr_41353;
})();
var statearr_41354_41374 = state_41350__$1;
(statearr_41354_41374[(2)] = null);

(statearr_41354_41374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (4))){
var inst_41327 = (state_41350[(7)]);
var inst_41330 = cljs.core.first.call(null,inst_41327);
var state_41350__$1 = state_41350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41350__$1,(7),ch,inst_41330);
} else {
if((state_val_41351 === (13))){
var inst_41344 = (state_41350[(2)]);
var state_41350__$1 = state_41350;
var statearr_41355_41375 = state_41350__$1;
(statearr_41355_41375[(2)] = inst_41344);

(statearr_41355_41375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (6))){
var inst_41335 = (state_41350[(2)]);
var state_41350__$1 = state_41350;
if(cljs.core.truth_(inst_41335)){
var statearr_41356_41376 = state_41350__$1;
(statearr_41356_41376[(1)] = (8));

} else {
var statearr_41357_41377 = state_41350__$1;
(statearr_41357_41377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (3))){
var inst_41348 = (state_41350[(2)]);
var state_41350__$1 = state_41350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41350__$1,inst_41348);
} else {
if((state_val_41351 === (12))){
var state_41350__$1 = state_41350;
var statearr_41358_41378 = state_41350__$1;
(statearr_41358_41378[(2)] = null);

(statearr_41358_41378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (2))){
var inst_41327 = (state_41350[(7)]);
var state_41350__$1 = state_41350;
if(cljs.core.truth_(inst_41327)){
var statearr_41359_41379 = state_41350__$1;
(statearr_41359_41379[(1)] = (4));

} else {
var statearr_41360_41380 = state_41350__$1;
(statearr_41360_41380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (11))){
var inst_41341 = cljs.core.async.close_BANG_.call(null,ch);
var state_41350__$1 = state_41350;
var statearr_41361_41381 = state_41350__$1;
(statearr_41361_41381[(2)] = inst_41341);

(statearr_41361_41381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (9))){
var state_41350__$1 = state_41350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41362_41382 = state_41350__$1;
(statearr_41362_41382[(1)] = (11));

} else {
var statearr_41363_41383 = state_41350__$1;
(statearr_41363_41383[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (5))){
var inst_41327 = (state_41350[(7)]);
var state_41350__$1 = state_41350;
var statearr_41364_41384 = state_41350__$1;
(statearr_41364_41384[(2)] = inst_41327);

(statearr_41364_41384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (10))){
var inst_41346 = (state_41350[(2)]);
var state_41350__$1 = state_41350;
var statearr_41365_41385 = state_41350__$1;
(statearr_41365_41385[(2)] = inst_41346);

(statearr_41365_41385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41351 === (8))){
var inst_41327 = (state_41350[(7)]);
var inst_41337 = cljs.core.next.call(null,inst_41327);
var inst_41327__$1 = inst_41337;
var state_41350__$1 = (function (){var statearr_41366 = state_41350;
(statearr_41366[(7)] = inst_41327__$1);

return statearr_41366;
})();
var statearr_41367_41386 = state_41350__$1;
(statearr_41367_41386[(2)] = null);

(statearr_41367_41386[(1)] = (2));


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
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_41368 = [null,null,null,null,null,null,null,null];
(statearr_41368[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_41368[(1)] = (1));

return statearr_41368;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_41350){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41369){if((e41369 instanceof Object)){
var ex__38765__auto__ = e41369;
var statearr_41370_41387 = state_41350;
(statearr_41370_41387[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41388 = state_41350;
state_41350 = G__41388;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_41350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_41350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_41371 = f__38929__auto__.call(null);
(statearr_41371[(6)] = c__38928__auto__);

return statearr_41371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41389 = (function (ch,cs,meta41390){
this.ch = ch;
this.cs = cs;
this.meta41390 = meta41390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41391,meta41390__$1){
var self__ = this;
var _41391__$1 = this;
return (new cljs.core.async.t_cljs$core$async41389(self__.ch,self__.cs,meta41390__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41391){
var self__ = this;
var _41391__$1 = this;
return self__.meta41390;
});})(cs))
;

cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41389.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41389.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41390","meta41390",-2093661118,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41389";

cljs.core.async.t_cljs$core$async41389.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async41389");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41389.
 */
cljs.core.async.__GT_t_cljs$core$async41389 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41389(ch__$1,cs__$1,meta41390){
return (new cljs.core.async.t_cljs$core$async41389(ch__$1,cs__$1,meta41390));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41389(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38928__auto___41611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___41611,cs,m,dchan,dctr,done){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___41611,cs,m,dchan,dctr,done){
return (function (state_41526){
var state_val_41527 = (state_41526[(1)]);
if((state_val_41527 === (7))){
var inst_41522 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41528_41612 = state_41526__$1;
(statearr_41528_41612[(2)] = inst_41522);

(statearr_41528_41612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (20))){
var inst_41425 = (state_41526[(7)]);
var inst_41437 = cljs.core.first.call(null,inst_41425);
var inst_41438 = cljs.core.nth.call(null,inst_41437,(0),null);
var inst_41439 = cljs.core.nth.call(null,inst_41437,(1),null);
var state_41526__$1 = (function (){var statearr_41529 = state_41526;
(statearr_41529[(8)] = inst_41438);

return statearr_41529;
})();
if(cljs.core.truth_(inst_41439)){
var statearr_41530_41613 = state_41526__$1;
(statearr_41530_41613[(1)] = (22));

} else {
var statearr_41531_41614 = state_41526__$1;
(statearr_41531_41614[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (27))){
var inst_41394 = (state_41526[(9)]);
var inst_41467 = (state_41526[(10)]);
var inst_41469 = (state_41526[(11)]);
var inst_41474 = (state_41526[(12)]);
var inst_41474__$1 = cljs.core._nth.call(null,inst_41467,inst_41469);
var inst_41475 = cljs.core.async.put_BANG_.call(null,inst_41474__$1,inst_41394,done);
var state_41526__$1 = (function (){var statearr_41532 = state_41526;
(statearr_41532[(12)] = inst_41474__$1);

return statearr_41532;
})();
if(cljs.core.truth_(inst_41475)){
var statearr_41533_41615 = state_41526__$1;
(statearr_41533_41615[(1)] = (30));

} else {
var statearr_41534_41616 = state_41526__$1;
(statearr_41534_41616[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (1))){
var state_41526__$1 = state_41526;
var statearr_41535_41617 = state_41526__$1;
(statearr_41535_41617[(2)] = null);

(statearr_41535_41617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (24))){
var inst_41425 = (state_41526[(7)]);
var inst_41444 = (state_41526[(2)]);
var inst_41445 = cljs.core.next.call(null,inst_41425);
var inst_41403 = inst_41445;
var inst_41404 = null;
var inst_41405 = (0);
var inst_41406 = (0);
var state_41526__$1 = (function (){var statearr_41536 = state_41526;
(statearr_41536[(13)] = inst_41405);

(statearr_41536[(14)] = inst_41444);

(statearr_41536[(15)] = inst_41404);

(statearr_41536[(16)] = inst_41406);

(statearr_41536[(17)] = inst_41403);

return statearr_41536;
})();
var statearr_41537_41618 = state_41526__$1;
(statearr_41537_41618[(2)] = null);

(statearr_41537_41618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (39))){
var state_41526__$1 = state_41526;
var statearr_41541_41619 = state_41526__$1;
(statearr_41541_41619[(2)] = null);

(statearr_41541_41619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (4))){
var inst_41394 = (state_41526[(9)]);
var inst_41394__$1 = (state_41526[(2)]);
var inst_41395 = (inst_41394__$1 == null);
var state_41526__$1 = (function (){var statearr_41542 = state_41526;
(statearr_41542[(9)] = inst_41394__$1);

return statearr_41542;
})();
if(cljs.core.truth_(inst_41395)){
var statearr_41543_41620 = state_41526__$1;
(statearr_41543_41620[(1)] = (5));

} else {
var statearr_41544_41621 = state_41526__$1;
(statearr_41544_41621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (15))){
var inst_41405 = (state_41526[(13)]);
var inst_41404 = (state_41526[(15)]);
var inst_41406 = (state_41526[(16)]);
var inst_41403 = (state_41526[(17)]);
var inst_41421 = (state_41526[(2)]);
var inst_41422 = (inst_41406 + (1));
var tmp41538 = inst_41405;
var tmp41539 = inst_41404;
var tmp41540 = inst_41403;
var inst_41403__$1 = tmp41540;
var inst_41404__$1 = tmp41539;
var inst_41405__$1 = tmp41538;
var inst_41406__$1 = inst_41422;
var state_41526__$1 = (function (){var statearr_41545 = state_41526;
(statearr_41545[(13)] = inst_41405__$1);

(statearr_41545[(15)] = inst_41404__$1);

(statearr_41545[(16)] = inst_41406__$1);

(statearr_41545[(18)] = inst_41421);

(statearr_41545[(17)] = inst_41403__$1);

return statearr_41545;
})();
var statearr_41546_41622 = state_41526__$1;
(statearr_41546_41622[(2)] = null);

(statearr_41546_41622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (21))){
var inst_41448 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41550_41623 = state_41526__$1;
(statearr_41550_41623[(2)] = inst_41448);

(statearr_41550_41623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (31))){
var inst_41474 = (state_41526[(12)]);
var inst_41478 = done.call(null,null);
var inst_41479 = cljs.core.async.untap_STAR_.call(null,m,inst_41474);
var state_41526__$1 = (function (){var statearr_41551 = state_41526;
(statearr_41551[(19)] = inst_41478);

return statearr_41551;
})();
var statearr_41552_41624 = state_41526__$1;
(statearr_41552_41624[(2)] = inst_41479);

(statearr_41552_41624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (32))){
var inst_41466 = (state_41526[(20)]);
var inst_41468 = (state_41526[(21)]);
var inst_41467 = (state_41526[(10)]);
var inst_41469 = (state_41526[(11)]);
var inst_41481 = (state_41526[(2)]);
var inst_41482 = (inst_41469 + (1));
var tmp41547 = inst_41466;
var tmp41548 = inst_41468;
var tmp41549 = inst_41467;
var inst_41466__$1 = tmp41547;
var inst_41467__$1 = tmp41549;
var inst_41468__$1 = tmp41548;
var inst_41469__$1 = inst_41482;
var state_41526__$1 = (function (){var statearr_41553 = state_41526;
(statearr_41553[(20)] = inst_41466__$1);

(statearr_41553[(21)] = inst_41468__$1);

(statearr_41553[(10)] = inst_41467__$1);

(statearr_41553[(11)] = inst_41469__$1);

(statearr_41553[(22)] = inst_41481);

return statearr_41553;
})();
var statearr_41554_41625 = state_41526__$1;
(statearr_41554_41625[(2)] = null);

(statearr_41554_41625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (40))){
var inst_41494 = (state_41526[(23)]);
var inst_41498 = done.call(null,null);
var inst_41499 = cljs.core.async.untap_STAR_.call(null,m,inst_41494);
var state_41526__$1 = (function (){var statearr_41555 = state_41526;
(statearr_41555[(24)] = inst_41498);

return statearr_41555;
})();
var statearr_41556_41626 = state_41526__$1;
(statearr_41556_41626[(2)] = inst_41499);

(statearr_41556_41626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (33))){
var inst_41485 = (state_41526[(25)]);
var inst_41487 = cljs.core.chunked_seq_QMARK_.call(null,inst_41485);
var state_41526__$1 = state_41526;
if(inst_41487){
var statearr_41557_41627 = state_41526__$1;
(statearr_41557_41627[(1)] = (36));

} else {
var statearr_41558_41628 = state_41526__$1;
(statearr_41558_41628[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (13))){
var inst_41415 = (state_41526[(26)]);
var inst_41418 = cljs.core.async.close_BANG_.call(null,inst_41415);
var state_41526__$1 = state_41526;
var statearr_41559_41629 = state_41526__$1;
(statearr_41559_41629[(2)] = inst_41418);

(statearr_41559_41629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (22))){
var inst_41438 = (state_41526[(8)]);
var inst_41441 = cljs.core.async.close_BANG_.call(null,inst_41438);
var state_41526__$1 = state_41526;
var statearr_41560_41630 = state_41526__$1;
(statearr_41560_41630[(2)] = inst_41441);

(statearr_41560_41630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (36))){
var inst_41485 = (state_41526[(25)]);
var inst_41489 = cljs.core.chunk_first.call(null,inst_41485);
var inst_41490 = cljs.core.chunk_rest.call(null,inst_41485);
var inst_41491 = cljs.core.count.call(null,inst_41489);
var inst_41466 = inst_41490;
var inst_41467 = inst_41489;
var inst_41468 = inst_41491;
var inst_41469 = (0);
var state_41526__$1 = (function (){var statearr_41561 = state_41526;
(statearr_41561[(20)] = inst_41466);

(statearr_41561[(21)] = inst_41468);

(statearr_41561[(10)] = inst_41467);

(statearr_41561[(11)] = inst_41469);

return statearr_41561;
})();
var statearr_41562_41631 = state_41526__$1;
(statearr_41562_41631[(2)] = null);

(statearr_41562_41631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (41))){
var inst_41485 = (state_41526[(25)]);
var inst_41501 = (state_41526[(2)]);
var inst_41502 = cljs.core.next.call(null,inst_41485);
var inst_41466 = inst_41502;
var inst_41467 = null;
var inst_41468 = (0);
var inst_41469 = (0);
var state_41526__$1 = (function (){var statearr_41563 = state_41526;
(statearr_41563[(20)] = inst_41466);

(statearr_41563[(21)] = inst_41468);

(statearr_41563[(10)] = inst_41467);

(statearr_41563[(27)] = inst_41501);

(statearr_41563[(11)] = inst_41469);

return statearr_41563;
})();
var statearr_41564_41632 = state_41526__$1;
(statearr_41564_41632[(2)] = null);

(statearr_41564_41632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (43))){
var state_41526__$1 = state_41526;
var statearr_41565_41633 = state_41526__$1;
(statearr_41565_41633[(2)] = null);

(statearr_41565_41633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (29))){
var inst_41510 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41566_41634 = state_41526__$1;
(statearr_41566_41634[(2)] = inst_41510);

(statearr_41566_41634[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (44))){
var inst_41519 = (state_41526[(2)]);
var state_41526__$1 = (function (){var statearr_41567 = state_41526;
(statearr_41567[(28)] = inst_41519);

return statearr_41567;
})();
var statearr_41568_41635 = state_41526__$1;
(statearr_41568_41635[(2)] = null);

(statearr_41568_41635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (6))){
var inst_41458 = (state_41526[(29)]);
var inst_41457 = cljs.core.deref.call(null,cs);
var inst_41458__$1 = cljs.core.keys.call(null,inst_41457);
var inst_41459 = cljs.core.count.call(null,inst_41458__$1);
var inst_41460 = cljs.core.reset_BANG_.call(null,dctr,inst_41459);
var inst_41465 = cljs.core.seq.call(null,inst_41458__$1);
var inst_41466 = inst_41465;
var inst_41467 = null;
var inst_41468 = (0);
var inst_41469 = (0);
var state_41526__$1 = (function (){var statearr_41569 = state_41526;
(statearr_41569[(20)] = inst_41466);

(statearr_41569[(29)] = inst_41458__$1);

(statearr_41569[(21)] = inst_41468);

(statearr_41569[(10)] = inst_41467);

(statearr_41569[(11)] = inst_41469);

(statearr_41569[(30)] = inst_41460);

return statearr_41569;
})();
var statearr_41570_41636 = state_41526__$1;
(statearr_41570_41636[(2)] = null);

(statearr_41570_41636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (28))){
var inst_41485 = (state_41526[(25)]);
var inst_41466 = (state_41526[(20)]);
var inst_41485__$1 = cljs.core.seq.call(null,inst_41466);
var state_41526__$1 = (function (){var statearr_41571 = state_41526;
(statearr_41571[(25)] = inst_41485__$1);

return statearr_41571;
})();
if(inst_41485__$1){
var statearr_41572_41637 = state_41526__$1;
(statearr_41572_41637[(1)] = (33));

} else {
var statearr_41573_41638 = state_41526__$1;
(statearr_41573_41638[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (25))){
var inst_41468 = (state_41526[(21)]);
var inst_41469 = (state_41526[(11)]);
var inst_41471 = (inst_41469 < inst_41468);
var inst_41472 = inst_41471;
var state_41526__$1 = state_41526;
if(cljs.core.truth_(inst_41472)){
var statearr_41574_41639 = state_41526__$1;
(statearr_41574_41639[(1)] = (27));

} else {
var statearr_41575_41640 = state_41526__$1;
(statearr_41575_41640[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (34))){
var state_41526__$1 = state_41526;
var statearr_41576_41641 = state_41526__$1;
(statearr_41576_41641[(2)] = null);

(statearr_41576_41641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (17))){
var state_41526__$1 = state_41526;
var statearr_41577_41642 = state_41526__$1;
(statearr_41577_41642[(2)] = null);

(statearr_41577_41642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (3))){
var inst_41524 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41526__$1,inst_41524);
} else {
if((state_val_41527 === (12))){
var inst_41453 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41578_41643 = state_41526__$1;
(statearr_41578_41643[(2)] = inst_41453);

(statearr_41578_41643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (2))){
var state_41526__$1 = state_41526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41526__$1,(4),ch);
} else {
if((state_val_41527 === (23))){
var state_41526__$1 = state_41526;
var statearr_41579_41644 = state_41526__$1;
(statearr_41579_41644[(2)] = null);

(statearr_41579_41644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (35))){
var inst_41508 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41580_41645 = state_41526__$1;
(statearr_41580_41645[(2)] = inst_41508);

(statearr_41580_41645[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (19))){
var inst_41425 = (state_41526[(7)]);
var inst_41429 = cljs.core.chunk_first.call(null,inst_41425);
var inst_41430 = cljs.core.chunk_rest.call(null,inst_41425);
var inst_41431 = cljs.core.count.call(null,inst_41429);
var inst_41403 = inst_41430;
var inst_41404 = inst_41429;
var inst_41405 = inst_41431;
var inst_41406 = (0);
var state_41526__$1 = (function (){var statearr_41581 = state_41526;
(statearr_41581[(13)] = inst_41405);

(statearr_41581[(15)] = inst_41404);

(statearr_41581[(16)] = inst_41406);

(statearr_41581[(17)] = inst_41403);

return statearr_41581;
})();
var statearr_41582_41646 = state_41526__$1;
(statearr_41582_41646[(2)] = null);

(statearr_41582_41646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (11))){
var inst_41425 = (state_41526[(7)]);
var inst_41403 = (state_41526[(17)]);
var inst_41425__$1 = cljs.core.seq.call(null,inst_41403);
var state_41526__$1 = (function (){var statearr_41583 = state_41526;
(statearr_41583[(7)] = inst_41425__$1);

return statearr_41583;
})();
if(inst_41425__$1){
var statearr_41584_41647 = state_41526__$1;
(statearr_41584_41647[(1)] = (16));

} else {
var statearr_41585_41648 = state_41526__$1;
(statearr_41585_41648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (9))){
var inst_41455 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41586_41649 = state_41526__$1;
(statearr_41586_41649[(2)] = inst_41455);

(statearr_41586_41649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (5))){
var inst_41401 = cljs.core.deref.call(null,cs);
var inst_41402 = cljs.core.seq.call(null,inst_41401);
var inst_41403 = inst_41402;
var inst_41404 = null;
var inst_41405 = (0);
var inst_41406 = (0);
var state_41526__$1 = (function (){var statearr_41587 = state_41526;
(statearr_41587[(13)] = inst_41405);

(statearr_41587[(15)] = inst_41404);

(statearr_41587[(16)] = inst_41406);

(statearr_41587[(17)] = inst_41403);

return statearr_41587;
})();
var statearr_41588_41650 = state_41526__$1;
(statearr_41588_41650[(2)] = null);

(statearr_41588_41650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (14))){
var state_41526__$1 = state_41526;
var statearr_41589_41651 = state_41526__$1;
(statearr_41589_41651[(2)] = null);

(statearr_41589_41651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (45))){
var inst_41516 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41590_41652 = state_41526__$1;
(statearr_41590_41652[(2)] = inst_41516);

(statearr_41590_41652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (26))){
var inst_41458 = (state_41526[(29)]);
var inst_41512 = (state_41526[(2)]);
var inst_41513 = cljs.core.seq.call(null,inst_41458);
var state_41526__$1 = (function (){var statearr_41591 = state_41526;
(statearr_41591[(31)] = inst_41512);

return statearr_41591;
})();
if(inst_41513){
var statearr_41592_41653 = state_41526__$1;
(statearr_41592_41653[(1)] = (42));

} else {
var statearr_41593_41654 = state_41526__$1;
(statearr_41593_41654[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (16))){
var inst_41425 = (state_41526[(7)]);
var inst_41427 = cljs.core.chunked_seq_QMARK_.call(null,inst_41425);
var state_41526__$1 = state_41526;
if(inst_41427){
var statearr_41594_41655 = state_41526__$1;
(statearr_41594_41655[(1)] = (19));

} else {
var statearr_41595_41656 = state_41526__$1;
(statearr_41595_41656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (38))){
var inst_41505 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41596_41657 = state_41526__$1;
(statearr_41596_41657[(2)] = inst_41505);

(statearr_41596_41657[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (30))){
var state_41526__$1 = state_41526;
var statearr_41597_41658 = state_41526__$1;
(statearr_41597_41658[(2)] = null);

(statearr_41597_41658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (10))){
var inst_41404 = (state_41526[(15)]);
var inst_41406 = (state_41526[(16)]);
var inst_41414 = cljs.core._nth.call(null,inst_41404,inst_41406);
var inst_41415 = cljs.core.nth.call(null,inst_41414,(0),null);
var inst_41416 = cljs.core.nth.call(null,inst_41414,(1),null);
var state_41526__$1 = (function (){var statearr_41598 = state_41526;
(statearr_41598[(26)] = inst_41415);

return statearr_41598;
})();
if(cljs.core.truth_(inst_41416)){
var statearr_41599_41659 = state_41526__$1;
(statearr_41599_41659[(1)] = (13));

} else {
var statearr_41600_41660 = state_41526__$1;
(statearr_41600_41660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (18))){
var inst_41451 = (state_41526[(2)]);
var state_41526__$1 = state_41526;
var statearr_41601_41661 = state_41526__$1;
(statearr_41601_41661[(2)] = inst_41451);

(statearr_41601_41661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (42))){
var state_41526__$1 = state_41526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41526__$1,(45),dchan);
} else {
if((state_val_41527 === (37))){
var inst_41485 = (state_41526[(25)]);
var inst_41394 = (state_41526[(9)]);
var inst_41494 = (state_41526[(23)]);
var inst_41494__$1 = cljs.core.first.call(null,inst_41485);
var inst_41495 = cljs.core.async.put_BANG_.call(null,inst_41494__$1,inst_41394,done);
var state_41526__$1 = (function (){var statearr_41602 = state_41526;
(statearr_41602[(23)] = inst_41494__$1);

return statearr_41602;
})();
if(cljs.core.truth_(inst_41495)){
var statearr_41603_41662 = state_41526__$1;
(statearr_41603_41662[(1)] = (39));

} else {
var statearr_41604_41663 = state_41526__$1;
(statearr_41604_41663[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41527 === (8))){
var inst_41405 = (state_41526[(13)]);
var inst_41406 = (state_41526[(16)]);
var inst_41408 = (inst_41406 < inst_41405);
var inst_41409 = inst_41408;
var state_41526__$1 = state_41526;
if(cljs.core.truth_(inst_41409)){
var statearr_41605_41664 = state_41526__$1;
(statearr_41605_41664[(1)] = (10));

} else {
var statearr_41606_41665 = state_41526__$1;
(statearr_41606_41665[(1)] = (11));

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
});})(c__38928__auto___41611,cs,m,dchan,dctr,done))
;
return ((function (switch__38761__auto__,c__38928__auto___41611,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38762__auto__ = null;
var cljs$core$async$mult_$_state_machine__38762__auto____0 = (function (){
var statearr_41607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41607[(0)] = cljs$core$async$mult_$_state_machine__38762__auto__);

(statearr_41607[(1)] = (1));

return statearr_41607;
});
var cljs$core$async$mult_$_state_machine__38762__auto____1 = (function (state_41526){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41608){if((e41608 instanceof Object)){
var ex__38765__auto__ = e41608;
var statearr_41609_41666 = state_41526;
(statearr_41609_41666[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41667 = state_41526;
state_41526 = G__41667;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38762__auto__ = function(state_41526){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38762__auto____1.call(this,state_41526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38762__auto____0;
cljs$core$async$mult_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38762__auto____1;
return cljs$core$async$mult_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___41611,cs,m,dchan,dctr,done))
})();
var state__38930__auto__ = (function (){var statearr_41610 = f__38929__auto__.call(null);
(statearr_41610[(6)] = c__38928__auto___41611);

return statearr_41610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___41611,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41669 = arguments.length;
switch (G__41669) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41681 = arguments.length;
var i__4731__auto___41682 = (0);
while(true){
if((i__4731__auto___41682 < len__4730__auto___41681)){
args__4736__auto__.push((arguments[i__4731__auto___41682]));

var G__41683 = (i__4731__auto___41682 + (1));
i__4731__auto___41682 = G__41683;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41675){
var map__41676 = p__41675;
var map__41676__$1 = (((((!((map__41676 == null))))?(((((map__41676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41676):map__41676);
var opts = map__41676__$1;
var statearr_41678_41684 = state;
(statearr_41678_41684[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__41676,map__41676__$1,opts){
return (function (val){
var statearr_41679_41685 = state;
(statearr_41679_41685[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41676,map__41676__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_41680_41686 = state;
(statearr_41680_41686[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41671){
var G__41672 = cljs.core.first.call(null,seq41671);
var seq41671__$1 = cljs.core.next.call(null,seq41671);
var G__41673 = cljs.core.first.call(null,seq41671__$1);
var seq41671__$2 = cljs.core.next.call(null,seq41671__$1);
var G__41674 = cljs.core.first.call(null,seq41671__$2);
var seq41671__$3 = cljs.core.next.call(null,seq41671__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41672,G__41673,G__41674,seq41671__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41687 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41688){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41688 = meta41688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41689,meta41688__$1){
var self__ = this;
var _41689__$1 = this;
return (new cljs.core.async.t_cljs$core$async41687(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41688__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41689){
var self__ = this;
var _41689__$1 = this;
return self__.meta41688;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41688","meta41688",368877015,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41687";

cljs.core.async.t_cljs$core$async41687.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async41687");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41687.
 */
cljs.core.async.__GT_t_cljs$core$async41687 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41687(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41688){
return (new cljs.core.async.t_cljs$core$async41687(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41688));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41687(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38928__auto___41851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41791){
var state_val_41792 = (state_41791[(1)]);
if((state_val_41792 === (7))){
var inst_41706 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
var statearr_41793_41852 = state_41791__$1;
(statearr_41793_41852[(2)] = inst_41706);

(statearr_41793_41852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (20))){
var inst_41718 = (state_41791[(7)]);
var state_41791__$1 = state_41791;
var statearr_41794_41853 = state_41791__$1;
(statearr_41794_41853[(2)] = inst_41718);

(statearr_41794_41853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (27))){
var state_41791__$1 = state_41791;
var statearr_41795_41854 = state_41791__$1;
(statearr_41795_41854[(2)] = null);

(statearr_41795_41854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (1))){
var inst_41693 = (state_41791[(8)]);
var inst_41693__$1 = calc_state.call(null);
var inst_41695 = (inst_41693__$1 == null);
var inst_41696 = cljs.core.not.call(null,inst_41695);
var state_41791__$1 = (function (){var statearr_41796 = state_41791;
(statearr_41796[(8)] = inst_41693__$1);

return statearr_41796;
})();
if(inst_41696){
var statearr_41797_41855 = state_41791__$1;
(statearr_41797_41855[(1)] = (2));

} else {
var statearr_41798_41856 = state_41791__$1;
(statearr_41798_41856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (24))){
var inst_41765 = (state_41791[(9)]);
var inst_41751 = (state_41791[(10)]);
var inst_41742 = (state_41791[(11)]);
var inst_41765__$1 = inst_41742.call(null,inst_41751);
var state_41791__$1 = (function (){var statearr_41799 = state_41791;
(statearr_41799[(9)] = inst_41765__$1);

return statearr_41799;
})();
if(cljs.core.truth_(inst_41765__$1)){
var statearr_41800_41857 = state_41791__$1;
(statearr_41800_41857[(1)] = (29));

} else {
var statearr_41801_41858 = state_41791__$1;
(statearr_41801_41858[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (4))){
var inst_41709 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
if(cljs.core.truth_(inst_41709)){
var statearr_41802_41859 = state_41791__$1;
(statearr_41802_41859[(1)] = (8));

} else {
var statearr_41803_41860 = state_41791__$1;
(statearr_41803_41860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (15))){
var inst_41736 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
if(cljs.core.truth_(inst_41736)){
var statearr_41804_41861 = state_41791__$1;
(statearr_41804_41861[(1)] = (19));

} else {
var statearr_41805_41862 = state_41791__$1;
(statearr_41805_41862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (21))){
var inst_41741 = (state_41791[(12)]);
var inst_41741__$1 = (state_41791[(2)]);
var inst_41742 = cljs.core.get.call(null,inst_41741__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41743 = cljs.core.get.call(null,inst_41741__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41744 = cljs.core.get.call(null,inst_41741__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41791__$1 = (function (){var statearr_41806 = state_41791;
(statearr_41806[(12)] = inst_41741__$1);

(statearr_41806[(13)] = inst_41743);

(statearr_41806[(11)] = inst_41742);

return statearr_41806;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41791__$1,(22),inst_41744);
} else {
if((state_val_41792 === (31))){
var inst_41773 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
if(cljs.core.truth_(inst_41773)){
var statearr_41807_41863 = state_41791__$1;
(statearr_41807_41863[(1)] = (32));

} else {
var statearr_41808_41864 = state_41791__$1;
(statearr_41808_41864[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (32))){
var inst_41750 = (state_41791[(14)]);
var state_41791__$1 = state_41791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41791__$1,(35),out,inst_41750);
} else {
if((state_val_41792 === (33))){
var inst_41741 = (state_41791[(12)]);
var inst_41718 = inst_41741;
var state_41791__$1 = (function (){var statearr_41809 = state_41791;
(statearr_41809[(7)] = inst_41718);

return statearr_41809;
})();
var statearr_41810_41865 = state_41791__$1;
(statearr_41810_41865[(2)] = null);

(statearr_41810_41865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (13))){
var inst_41718 = (state_41791[(7)]);
var inst_41725 = inst_41718.cljs$lang$protocol_mask$partition0$;
var inst_41726 = (inst_41725 & (64));
var inst_41727 = inst_41718.cljs$core$ISeq$;
var inst_41728 = (cljs.core.PROTOCOL_SENTINEL === inst_41727);
var inst_41729 = ((inst_41726) || (inst_41728));
var state_41791__$1 = state_41791;
if(cljs.core.truth_(inst_41729)){
var statearr_41811_41866 = state_41791__$1;
(statearr_41811_41866[(1)] = (16));

} else {
var statearr_41812_41867 = state_41791__$1;
(statearr_41812_41867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (22))){
var inst_41750 = (state_41791[(14)]);
var inst_41751 = (state_41791[(10)]);
var inst_41749 = (state_41791[(2)]);
var inst_41750__$1 = cljs.core.nth.call(null,inst_41749,(0),null);
var inst_41751__$1 = cljs.core.nth.call(null,inst_41749,(1),null);
var inst_41752 = (inst_41750__$1 == null);
var inst_41753 = cljs.core._EQ_.call(null,inst_41751__$1,change);
var inst_41754 = ((inst_41752) || (inst_41753));
var state_41791__$1 = (function (){var statearr_41813 = state_41791;
(statearr_41813[(14)] = inst_41750__$1);

(statearr_41813[(10)] = inst_41751__$1);

return statearr_41813;
})();
if(cljs.core.truth_(inst_41754)){
var statearr_41814_41868 = state_41791__$1;
(statearr_41814_41868[(1)] = (23));

} else {
var statearr_41815_41869 = state_41791__$1;
(statearr_41815_41869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (36))){
var inst_41741 = (state_41791[(12)]);
var inst_41718 = inst_41741;
var state_41791__$1 = (function (){var statearr_41816 = state_41791;
(statearr_41816[(7)] = inst_41718);

return statearr_41816;
})();
var statearr_41817_41870 = state_41791__$1;
(statearr_41817_41870[(2)] = null);

(statearr_41817_41870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (29))){
var inst_41765 = (state_41791[(9)]);
var state_41791__$1 = state_41791;
var statearr_41818_41871 = state_41791__$1;
(statearr_41818_41871[(2)] = inst_41765);

(statearr_41818_41871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (6))){
var state_41791__$1 = state_41791;
var statearr_41819_41872 = state_41791__$1;
(statearr_41819_41872[(2)] = false);

(statearr_41819_41872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (28))){
var inst_41761 = (state_41791[(2)]);
var inst_41762 = calc_state.call(null);
var inst_41718 = inst_41762;
var state_41791__$1 = (function (){var statearr_41820 = state_41791;
(statearr_41820[(7)] = inst_41718);

(statearr_41820[(15)] = inst_41761);

return statearr_41820;
})();
var statearr_41821_41873 = state_41791__$1;
(statearr_41821_41873[(2)] = null);

(statearr_41821_41873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (25))){
var inst_41787 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
var statearr_41822_41874 = state_41791__$1;
(statearr_41822_41874[(2)] = inst_41787);

(statearr_41822_41874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (34))){
var inst_41785 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
var statearr_41823_41875 = state_41791__$1;
(statearr_41823_41875[(2)] = inst_41785);

(statearr_41823_41875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (17))){
var state_41791__$1 = state_41791;
var statearr_41824_41876 = state_41791__$1;
(statearr_41824_41876[(2)] = false);

(statearr_41824_41876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (3))){
var state_41791__$1 = state_41791;
var statearr_41825_41877 = state_41791__$1;
(statearr_41825_41877[(2)] = false);

(statearr_41825_41877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (12))){
var inst_41789 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41791__$1,inst_41789);
} else {
if((state_val_41792 === (2))){
var inst_41693 = (state_41791[(8)]);
var inst_41698 = inst_41693.cljs$lang$protocol_mask$partition0$;
var inst_41699 = (inst_41698 & (64));
var inst_41700 = inst_41693.cljs$core$ISeq$;
var inst_41701 = (cljs.core.PROTOCOL_SENTINEL === inst_41700);
var inst_41702 = ((inst_41699) || (inst_41701));
var state_41791__$1 = state_41791;
if(cljs.core.truth_(inst_41702)){
var statearr_41826_41878 = state_41791__$1;
(statearr_41826_41878[(1)] = (5));

} else {
var statearr_41827_41879 = state_41791__$1;
(statearr_41827_41879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (23))){
var inst_41750 = (state_41791[(14)]);
var inst_41756 = (inst_41750 == null);
var state_41791__$1 = state_41791;
if(cljs.core.truth_(inst_41756)){
var statearr_41828_41880 = state_41791__$1;
(statearr_41828_41880[(1)] = (26));

} else {
var statearr_41829_41881 = state_41791__$1;
(statearr_41829_41881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (35))){
var inst_41776 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
if(cljs.core.truth_(inst_41776)){
var statearr_41830_41882 = state_41791__$1;
(statearr_41830_41882[(1)] = (36));

} else {
var statearr_41831_41883 = state_41791__$1;
(statearr_41831_41883[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (19))){
var inst_41718 = (state_41791[(7)]);
var inst_41738 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41718);
var state_41791__$1 = state_41791;
var statearr_41832_41884 = state_41791__$1;
(statearr_41832_41884[(2)] = inst_41738);

(statearr_41832_41884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (11))){
var inst_41718 = (state_41791[(7)]);
var inst_41722 = (inst_41718 == null);
var inst_41723 = cljs.core.not.call(null,inst_41722);
var state_41791__$1 = state_41791;
if(inst_41723){
var statearr_41833_41885 = state_41791__$1;
(statearr_41833_41885[(1)] = (13));

} else {
var statearr_41834_41886 = state_41791__$1;
(statearr_41834_41886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (9))){
var inst_41693 = (state_41791[(8)]);
var state_41791__$1 = state_41791;
var statearr_41835_41887 = state_41791__$1;
(statearr_41835_41887[(2)] = inst_41693);

(statearr_41835_41887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (5))){
var state_41791__$1 = state_41791;
var statearr_41836_41888 = state_41791__$1;
(statearr_41836_41888[(2)] = true);

(statearr_41836_41888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (14))){
var state_41791__$1 = state_41791;
var statearr_41837_41889 = state_41791__$1;
(statearr_41837_41889[(2)] = false);

(statearr_41837_41889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (26))){
var inst_41751 = (state_41791[(10)]);
var inst_41758 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41751);
var state_41791__$1 = state_41791;
var statearr_41838_41890 = state_41791__$1;
(statearr_41838_41890[(2)] = inst_41758);

(statearr_41838_41890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (16))){
var state_41791__$1 = state_41791;
var statearr_41839_41891 = state_41791__$1;
(statearr_41839_41891[(2)] = true);

(statearr_41839_41891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (38))){
var inst_41781 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
var statearr_41840_41892 = state_41791__$1;
(statearr_41840_41892[(2)] = inst_41781);

(statearr_41840_41892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (30))){
var inst_41743 = (state_41791[(13)]);
var inst_41751 = (state_41791[(10)]);
var inst_41742 = (state_41791[(11)]);
var inst_41768 = cljs.core.empty_QMARK_.call(null,inst_41742);
var inst_41769 = inst_41743.call(null,inst_41751);
var inst_41770 = cljs.core.not.call(null,inst_41769);
var inst_41771 = ((inst_41768) && (inst_41770));
var state_41791__$1 = state_41791;
var statearr_41841_41893 = state_41791__$1;
(statearr_41841_41893[(2)] = inst_41771);

(statearr_41841_41893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (10))){
var inst_41693 = (state_41791[(8)]);
var inst_41714 = (state_41791[(2)]);
var inst_41715 = cljs.core.get.call(null,inst_41714,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41716 = cljs.core.get.call(null,inst_41714,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41717 = cljs.core.get.call(null,inst_41714,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41718 = inst_41693;
var state_41791__$1 = (function (){var statearr_41842 = state_41791;
(statearr_41842[(7)] = inst_41718);

(statearr_41842[(16)] = inst_41717);

(statearr_41842[(17)] = inst_41715);

(statearr_41842[(18)] = inst_41716);

return statearr_41842;
})();
var statearr_41843_41894 = state_41791__$1;
(statearr_41843_41894[(2)] = null);

(statearr_41843_41894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (18))){
var inst_41733 = (state_41791[(2)]);
var state_41791__$1 = state_41791;
var statearr_41844_41895 = state_41791__$1;
(statearr_41844_41895[(2)] = inst_41733);

(statearr_41844_41895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (37))){
var state_41791__$1 = state_41791;
var statearr_41845_41896 = state_41791__$1;
(statearr_41845_41896[(2)] = null);

(statearr_41845_41896[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41792 === (8))){
var inst_41693 = (state_41791[(8)]);
var inst_41711 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41693);
var state_41791__$1 = state_41791;
var statearr_41846_41897 = state_41791__$1;
(statearr_41846_41897[(2)] = inst_41711);

(statearr_41846_41897[(1)] = (10));


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
});})(c__38928__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38761__auto__,c__38928__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38762__auto__ = null;
var cljs$core$async$mix_$_state_machine__38762__auto____0 = (function (){
var statearr_41847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41847[(0)] = cljs$core$async$mix_$_state_machine__38762__auto__);

(statearr_41847[(1)] = (1));

return statearr_41847;
});
var cljs$core$async$mix_$_state_machine__38762__auto____1 = (function (state_41791){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e41848){if((e41848 instanceof Object)){
var ex__38765__auto__ = e41848;
var statearr_41849_41898 = state_41791;
(statearr_41849_41898[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41899 = state_41791;
state_41791 = G__41899;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38762__auto__ = function(state_41791){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38762__auto____1.call(this,state_41791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38762__auto____0;
cljs$core$async$mix_$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38762__auto____1;
return cljs$core$async$mix_$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38930__auto__ = (function (){var statearr_41850 = f__38929__auto__.call(null);
(statearr_41850[(6)] = c__38928__auto___41851);

return statearr_41850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41901 = arguments.length;
switch (G__41901) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41905 = arguments.length;
switch (G__41905) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__41903_SHARP_){
if(cljs.core.truth_(p1__41903_SHARP_.call(null,topic))){
return p1__41903_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41903_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41906 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41907){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41907 = meta41907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41908,meta41907__$1){
var self__ = this;
var _41908__$1 = this;
return (new cljs.core.async.t_cljs$core$async41906(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41907__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41908){
var self__ = this;
var _41908__$1 = this;
return self__.meta41907;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41907","meta41907",1690882321,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41906";

cljs.core.async.t_cljs$core$async41906.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async41906");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41906.
 */
cljs.core.async.__GT_t_cljs$core$async41906 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41906(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41907){
return (new cljs.core.async.t_cljs$core$async41906(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41907));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41906(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38928__auto___42026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42026,mults,ensure_mult,p){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42026,mults,ensure_mult,p){
return (function (state_41980){
var state_val_41981 = (state_41980[(1)]);
if((state_val_41981 === (7))){
var inst_41976 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
var statearr_41982_42027 = state_41980__$1;
(statearr_41982_42027[(2)] = inst_41976);

(statearr_41982_42027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (20))){
var state_41980__$1 = state_41980;
var statearr_41983_42028 = state_41980__$1;
(statearr_41983_42028[(2)] = null);

(statearr_41983_42028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (1))){
var state_41980__$1 = state_41980;
var statearr_41984_42029 = state_41980__$1;
(statearr_41984_42029[(2)] = null);

(statearr_41984_42029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (24))){
var inst_41959 = (state_41980[(7)]);
var inst_41968 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41959);
var state_41980__$1 = state_41980;
var statearr_41985_42030 = state_41980__$1;
(statearr_41985_42030[(2)] = inst_41968);

(statearr_41985_42030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (4))){
var inst_41911 = (state_41980[(8)]);
var inst_41911__$1 = (state_41980[(2)]);
var inst_41912 = (inst_41911__$1 == null);
var state_41980__$1 = (function (){var statearr_41986 = state_41980;
(statearr_41986[(8)] = inst_41911__$1);

return statearr_41986;
})();
if(cljs.core.truth_(inst_41912)){
var statearr_41987_42031 = state_41980__$1;
(statearr_41987_42031[(1)] = (5));

} else {
var statearr_41988_42032 = state_41980__$1;
(statearr_41988_42032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (15))){
var inst_41953 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
var statearr_41989_42033 = state_41980__$1;
(statearr_41989_42033[(2)] = inst_41953);

(statearr_41989_42033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (21))){
var inst_41973 = (state_41980[(2)]);
var state_41980__$1 = (function (){var statearr_41990 = state_41980;
(statearr_41990[(9)] = inst_41973);

return statearr_41990;
})();
var statearr_41991_42034 = state_41980__$1;
(statearr_41991_42034[(2)] = null);

(statearr_41991_42034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (13))){
var inst_41935 = (state_41980[(10)]);
var inst_41937 = cljs.core.chunked_seq_QMARK_.call(null,inst_41935);
var state_41980__$1 = state_41980;
if(inst_41937){
var statearr_41992_42035 = state_41980__$1;
(statearr_41992_42035[(1)] = (16));

} else {
var statearr_41993_42036 = state_41980__$1;
(statearr_41993_42036[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (22))){
var inst_41965 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
if(cljs.core.truth_(inst_41965)){
var statearr_41994_42037 = state_41980__$1;
(statearr_41994_42037[(1)] = (23));

} else {
var statearr_41995_42038 = state_41980__$1;
(statearr_41995_42038[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (6))){
var inst_41961 = (state_41980[(11)]);
var inst_41911 = (state_41980[(8)]);
var inst_41959 = (state_41980[(7)]);
var inst_41959__$1 = topic_fn.call(null,inst_41911);
var inst_41960 = cljs.core.deref.call(null,mults);
var inst_41961__$1 = cljs.core.get.call(null,inst_41960,inst_41959__$1);
var state_41980__$1 = (function (){var statearr_41996 = state_41980;
(statearr_41996[(11)] = inst_41961__$1);

(statearr_41996[(7)] = inst_41959__$1);

return statearr_41996;
})();
if(cljs.core.truth_(inst_41961__$1)){
var statearr_41997_42039 = state_41980__$1;
(statearr_41997_42039[(1)] = (19));

} else {
var statearr_41998_42040 = state_41980__$1;
(statearr_41998_42040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (25))){
var inst_41970 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
var statearr_41999_42041 = state_41980__$1;
(statearr_41999_42041[(2)] = inst_41970);

(statearr_41999_42041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (17))){
var inst_41935 = (state_41980[(10)]);
var inst_41944 = cljs.core.first.call(null,inst_41935);
var inst_41945 = cljs.core.async.muxch_STAR_.call(null,inst_41944);
var inst_41946 = cljs.core.async.close_BANG_.call(null,inst_41945);
var inst_41947 = cljs.core.next.call(null,inst_41935);
var inst_41921 = inst_41947;
var inst_41922 = null;
var inst_41923 = (0);
var inst_41924 = (0);
var state_41980__$1 = (function (){var statearr_42000 = state_41980;
(statearr_42000[(12)] = inst_41921);

(statearr_42000[(13)] = inst_41922);

(statearr_42000[(14)] = inst_41924);

(statearr_42000[(15)] = inst_41923);

(statearr_42000[(16)] = inst_41946);

return statearr_42000;
})();
var statearr_42001_42042 = state_41980__$1;
(statearr_42001_42042[(2)] = null);

(statearr_42001_42042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (3))){
var inst_41978 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41980__$1,inst_41978);
} else {
if((state_val_41981 === (12))){
var inst_41955 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
var statearr_42002_42043 = state_41980__$1;
(statearr_42002_42043[(2)] = inst_41955);

(statearr_42002_42043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (2))){
var state_41980__$1 = state_41980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41980__$1,(4),ch);
} else {
if((state_val_41981 === (23))){
var state_41980__$1 = state_41980;
var statearr_42003_42044 = state_41980__$1;
(statearr_42003_42044[(2)] = null);

(statearr_42003_42044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (19))){
var inst_41961 = (state_41980[(11)]);
var inst_41911 = (state_41980[(8)]);
var inst_41963 = cljs.core.async.muxch_STAR_.call(null,inst_41961);
var state_41980__$1 = state_41980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41980__$1,(22),inst_41963,inst_41911);
} else {
if((state_val_41981 === (11))){
var inst_41921 = (state_41980[(12)]);
var inst_41935 = (state_41980[(10)]);
var inst_41935__$1 = cljs.core.seq.call(null,inst_41921);
var state_41980__$1 = (function (){var statearr_42004 = state_41980;
(statearr_42004[(10)] = inst_41935__$1);

return statearr_42004;
})();
if(inst_41935__$1){
var statearr_42005_42045 = state_41980__$1;
(statearr_42005_42045[(1)] = (13));

} else {
var statearr_42006_42046 = state_41980__$1;
(statearr_42006_42046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (9))){
var inst_41957 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
var statearr_42007_42047 = state_41980__$1;
(statearr_42007_42047[(2)] = inst_41957);

(statearr_42007_42047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (5))){
var inst_41918 = cljs.core.deref.call(null,mults);
var inst_41919 = cljs.core.vals.call(null,inst_41918);
var inst_41920 = cljs.core.seq.call(null,inst_41919);
var inst_41921 = inst_41920;
var inst_41922 = null;
var inst_41923 = (0);
var inst_41924 = (0);
var state_41980__$1 = (function (){var statearr_42008 = state_41980;
(statearr_42008[(12)] = inst_41921);

(statearr_42008[(13)] = inst_41922);

(statearr_42008[(14)] = inst_41924);

(statearr_42008[(15)] = inst_41923);

return statearr_42008;
})();
var statearr_42009_42048 = state_41980__$1;
(statearr_42009_42048[(2)] = null);

(statearr_42009_42048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (14))){
var state_41980__$1 = state_41980;
var statearr_42013_42049 = state_41980__$1;
(statearr_42013_42049[(2)] = null);

(statearr_42013_42049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (16))){
var inst_41935 = (state_41980[(10)]);
var inst_41939 = cljs.core.chunk_first.call(null,inst_41935);
var inst_41940 = cljs.core.chunk_rest.call(null,inst_41935);
var inst_41941 = cljs.core.count.call(null,inst_41939);
var inst_41921 = inst_41940;
var inst_41922 = inst_41939;
var inst_41923 = inst_41941;
var inst_41924 = (0);
var state_41980__$1 = (function (){var statearr_42014 = state_41980;
(statearr_42014[(12)] = inst_41921);

(statearr_42014[(13)] = inst_41922);

(statearr_42014[(14)] = inst_41924);

(statearr_42014[(15)] = inst_41923);

return statearr_42014;
})();
var statearr_42015_42050 = state_41980__$1;
(statearr_42015_42050[(2)] = null);

(statearr_42015_42050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (10))){
var inst_41921 = (state_41980[(12)]);
var inst_41922 = (state_41980[(13)]);
var inst_41924 = (state_41980[(14)]);
var inst_41923 = (state_41980[(15)]);
var inst_41929 = cljs.core._nth.call(null,inst_41922,inst_41924);
var inst_41930 = cljs.core.async.muxch_STAR_.call(null,inst_41929);
var inst_41931 = cljs.core.async.close_BANG_.call(null,inst_41930);
var inst_41932 = (inst_41924 + (1));
var tmp42010 = inst_41921;
var tmp42011 = inst_41922;
var tmp42012 = inst_41923;
var inst_41921__$1 = tmp42010;
var inst_41922__$1 = tmp42011;
var inst_41923__$1 = tmp42012;
var inst_41924__$1 = inst_41932;
var state_41980__$1 = (function (){var statearr_42016 = state_41980;
(statearr_42016[(12)] = inst_41921__$1);

(statearr_42016[(13)] = inst_41922__$1);

(statearr_42016[(17)] = inst_41931);

(statearr_42016[(14)] = inst_41924__$1);

(statearr_42016[(15)] = inst_41923__$1);

return statearr_42016;
})();
var statearr_42017_42051 = state_41980__$1;
(statearr_42017_42051[(2)] = null);

(statearr_42017_42051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (18))){
var inst_41950 = (state_41980[(2)]);
var state_41980__$1 = state_41980;
var statearr_42018_42052 = state_41980__$1;
(statearr_42018_42052[(2)] = inst_41950);

(statearr_42018_42052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41981 === (8))){
var inst_41924 = (state_41980[(14)]);
var inst_41923 = (state_41980[(15)]);
var inst_41926 = (inst_41924 < inst_41923);
var inst_41927 = inst_41926;
var state_41980__$1 = state_41980;
if(cljs.core.truth_(inst_41927)){
var statearr_42019_42053 = state_41980__$1;
(statearr_42019_42053[(1)] = (10));

} else {
var statearr_42020_42054 = state_41980__$1;
(statearr_42020_42054[(1)] = (11));

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
});})(c__38928__auto___42026,mults,ensure_mult,p))
;
return ((function (switch__38761__auto__,c__38928__auto___42026,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42021[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42021[(1)] = (1));

return statearr_42021;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_41980){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_41980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42022){if((e42022 instanceof Object)){
var ex__38765__auto__ = e42022;
var statearr_42023_42055 = state_41980;
(statearr_42023_42055[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42056 = state_41980;
state_41980 = G__42056;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_41980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_41980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42026,mults,ensure_mult,p))
})();
var state__38930__auto__ = (function (){var statearr_42024 = f__38929__auto__.call(null);
(statearr_42024[(6)] = c__38928__auto___42026);

return statearr_42024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42026,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42058 = arguments.length;
switch (G__42058) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42061 = arguments.length;
switch (G__42061) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42064 = arguments.length;
switch (G__42064) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38928__auto___42131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42103){
var state_val_42104 = (state_42103[(1)]);
if((state_val_42104 === (7))){
var state_42103__$1 = state_42103;
var statearr_42105_42132 = state_42103__$1;
(statearr_42105_42132[(2)] = null);

(statearr_42105_42132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (1))){
var state_42103__$1 = state_42103;
var statearr_42106_42133 = state_42103__$1;
(statearr_42106_42133[(2)] = null);

(statearr_42106_42133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (4))){
var inst_42067 = (state_42103[(7)]);
var inst_42069 = (inst_42067 < cnt);
var state_42103__$1 = state_42103;
if(cljs.core.truth_(inst_42069)){
var statearr_42107_42134 = state_42103__$1;
(statearr_42107_42134[(1)] = (6));

} else {
var statearr_42108_42135 = state_42103__$1;
(statearr_42108_42135[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (15))){
var inst_42099 = (state_42103[(2)]);
var state_42103__$1 = state_42103;
var statearr_42109_42136 = state_42103__$1;
(statearr_42109_42136[(2)] = inst_42099);

(statearr_42109_42136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (13))){
var inst_42092 = cljs.core.async.close_BANG_.call(null,out);
var state_42103__$1 = state_42103;
var statearr_42110_42137 = state_42103__$1;
(statearr_42110_42137[(2)] = inst_42092);

(statearr_42110_42137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (6))){
var state_42103__$1 = state_42103;
var statearr_42111_42138 = state_42103__$1;
(statearr_42111_42138[(2)] = null);

(statearr_42111_42138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (3))){
var inst_42101 = (state_42103[(2)]);
var state_42103__$1 = state_42103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42103__$1,inst_42101);
} else {
if((state_val_42104 === (12))){
var inst_42089 = (state_42103[(8)]);
var inst_42089__$1 = (state_42103[(2)]);
var inst_42090 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42089__$1);
var state_42103__$1 = (function (){var statearr_42112 = state_42103;
(statearr_42112[(8)] = inst_42089__$1);

return statearr_42112;
})();
if(cljs.core.truth_(inst_42090)){
var statearr_42113_42139 = state_42103__$1;
(statearr_42113_42139[(1)] = (13));

} else {
var statearr_42114_42140 = state_42103__$1;
(statearr_42114_42140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (2))){
var inst_42066 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42067 = (0);
var state_42103__$1 = (function (){var statearr_42115 = state_42103;
(statearr_42115[(7)] = inst_42067);

(statearr_42115[(9)] = inst_42066);

return statearr_42115;
})();
var statearr_42116_42141 = state_42103__$1;
(statearr_42116_42141[(2)] = null);

(statearr_42116_42141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (11))){
var inst_42067 = (state_42103[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42103,(10),Object,null,(9));
var inst_42076 = chs__$1.call(null,inst_42067);
var inst_42077 = done.call(null,inst_42067);
var inst_42078 = cljs.core.async.take_BANG_.call(null,inst_42076,inst_42077);
var state_42103__$1 = state_42103;
var statearr_42117_42142 = state_42103__$1;
(statearr_42117_42142[(2)] = inst_42078);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (9))){
var inst_42067 = (state_42103[(7)]);
var inst_42080 = (state_42103[(2)]);
var inst_42081 = (inst_42067 + (1));
var inst_42067__$1 = inst_42081;
var state_42103__$1 = (function (){var statearr_42118 = state_42103;
(statearr_42118[(10)] = inst_42080);

(statearr_42118[(7)] = inst_42067__$1);

return statearr_42118;
})();
var statearr_42119_42143 = state_42103__$1;
(statearr_42119_42143[(2)] = null);

(statearr_42119_42143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (5))){
var inst_42087 = (state_42103[(2)]);
var state_42103__$1 = (function (){var statearr_42120 = state_42103;
(statearr_42120[(11)] = inst_42087);

return statearr_42120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42103__$1,(12),dchan);
} else {
if((state_val_42104 === (14))){
var inst_42089 = (state_42103[(8)]);
var inst_42094 = cljs.core.apply.call(null,f,inst_42089);
var state_42103__$1 = state_42103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42103__$1,(16),out,inst_42094);
} else {
if((state_val_42104 === (16))){
var inst_42096 = (state_42103[(2)]);
var state_42103__$1 = (function (){var statearr_42121 = state_42103;
(statearr_42121[(12)] = inst_42096);

return statearr_42121;
})();
var statearr_42122_42144 = state_42103__$1;
(statearr_42122_42144[(2)] = null);

(statearr_42122_42144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (10))){
var inst_42071 = (state_42103[(2)]);
var inst_42072 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42103__$1 = (function (){var statearr_42123 = state_42103;
(statearr_42123[(13)] = inst_42071);

return statearr_42123;
})();
var statearr_42124_42145 = state_42103__$1;
(statearr_42124_42145[(2)] = inst_42072);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42104 === (8))){
var inst_42085 = (state_42103[(2)]);
var state_42103__$1 = state_42103;
var statearr_42125_42146 = state_42103__$1;
(statearr_42125_42146[(2)] = inst_42085);

(statearr_42125_42146[(1)] = (5));


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
});})(c__38928__auto___42131,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38761__auto__,c__38928__auto___42131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42126[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42126[(1)] = (1));

return statearr_42126;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_42103){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42127){if((e42127 instanceof Object)){
var ex__38765__auto__ = e42127;
var statearr_42128_42147 = state_42103;
(statearr_42128_42147[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42148 = state_42103;
state_42103 = G__42148;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_42103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_42103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42131,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38930__auto__ = (function (){var statearr_42129 = f__38929__auto__.call(null);
(statearr_42129[(6)] = c__38928__auto___42131);

return statearr_42129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42131,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42151 = arguments.length;
switch (G__42151) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38928__auto___42205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42205,out){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42205,out){
return (function (state_42183){
var state_val_42184 = (state_42183[(1)]);
if((state_val_42184 === (7))){
var inst_42163 = (state_42183[(7)]);
var inst_42162 = (state_42183[(8)]);
var inst_42162__$1 = (state_42183[(2)]);
var inst_42163__$1 = cljs.core.nth.call(null,inst_42162__$1,(0),null);
var inst_42164 = cljs.core.nth.call(null,inst_42162__$1,(1),null);
var inst_42165 = (inst_42163__$1 == null);
var state_42183__$1 = (function (){var statearr_42185 = state_42183;
(statearr_42185[(7)] = inst_42163__$1);

(statearr_42185[(9)] = inst_42164);

(statearr_42185[(8)] = inst_42162__$1);

return statearr_42185;
})();
if(cljs.core.truth_(inst_42165)){
var statearr_42186_42206 = state_42183__$1;
(statearr_42186_42206[(1)] = (8));

} else {
var statearr_42187_42207 = state_42183__$1;
(statearr_42187_42207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (1))){
var inst_42152 = cljs.core.vec.call(null,chs);
var inst_42153 = inst_42152;
var state_42183__$1 = (function (){var statearr_42188 = state_42183;
(statearr_42188[(10)] = inst_42153);

return statearr_42188;
})();
var statearr_42189_42208 = state_42183__$1;
(statearr_42189_42208[(2)] = null);

(statearr_42189_42208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (4))){
var inst_42153 = (state_42183[(10)]);
var state_42183__$1 = state_42183;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42183__$1,(7),inst_42153);
} else {
if((state_val_42184 === (6))){
var inst_42179 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
var statearr_42190_42209 = state_42183__$1;
(statearr_42190_42209[(2)] = inst_42179);

(statearr_42190_42209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (3))){
var inst_42181 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42183__$1,inst_42181);
} else {
if((state_val_42184 === (2))){
var inst_42153 = (state_42183[(10)]);
var inst_42155 = cljs.core.count.call(null,inst_42153);
var inst_42156 = (inst_42155 > (0));
var state_42183__$1 = state_42183;
if(cljs.core.truth_(inst_42156)){
var statearr_42192_42210 = state_42183__$1;
(statearr_42192_42210[(1)] = (4));

} else {
var statearr_42193_42211 = state_42183__$1;
(statearr_42193_42211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (11))){
var inst_42153 = (state_42183[(10)]);
var inst_42172 = (state_42183[(2)]);
var tmp42191 = inst_42153;
var inst_42153__$1 = tmp42191;
var state_42183__$1 = (function (){var statearr_42194 = state_42183;
(statearr_42194[(11)] = inst_42172);

(statearr_42194[(10)] = inst_42153__$1);

return statearr_42194;
})();
var statearr_42195_42212 = state_42183__$1;
(statearr_42195_42212[(2)] = null);

(statearr_42195_42212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (9))){
var inst_42163 = (state_42183[(7)]);
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42183__$1,(11),out,inst_42163);
} else {
if((state_val_42184 === (5))){
var inst_42177 = cljs.core.async.close_BANG_.call(null,out);
var state_42183__$1 = state_42183;
var statearr_42196_42213 = state_42183__$1;
(statearr_42196_42213[(2)] = inst_42177);

(statearr_42196_42213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (10))){
var inst_42175 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
var statearr_42197_42214 = state_42183__$1;
(statearr_42197_42214[(2)] = inst_42175);

(statearr_42197_42214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (8))){
var inst_42153 = (state_42183[(10)]);
var inst_42163 = (state_42183[(7)]);
var inst_42164 = (state_42183[(9)]);
var inst_42162 = (state_42183[(8)]);
var inst_42167 = (function (){var cs = inst_42153;
var vec__42158 = inst_42162;
var v = inst_42163;
var c = inst_42164;
return ((function (cs,vec__42158,v,c,inst_42153,inst_42163,inst_42164,inst_42162,state_val_42184,c__38928__auto___42205,out){
return (function (p1__42149_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42149_SHARP_);
});
;})(cs,vec__42158,v,c,inst_42153,inst_42163,inst_42164,inst_42162,state_val_42184,c__38928__auto___42205,out))
})();
var inst_42168 = cljs.core.filterv.call(null,inst_42167,inst_42153);
var inst_42153__$1 = inst_42168;
var state_42183__$1 = (function (){var statearr_42198 = state_42183;
(statearr_42198[(10)] = inst_42153__$1);

return statearr_42198;
})();
var statearr_42199_42215 = state_42183__$1;
(statearr_42199_42215[(2)] = null);

(statearr_42199_42215[(1)] = (2));


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
});})(c__38928__auto___42205,out))
;
return ((function (switch__38761__auto__,c__38928__auto___42205,out){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42200[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42200[(1)] = (1));

return statearr_42200;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_42183){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42201){if((e42201 instanceof Object)){
var ex__38765__auto__ = e42201;
var statearr_42202_42216 = state_42183;
(statearr_42202_42216[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42217 = state_42183;
state_42183 = G__42217;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_42183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_42183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42205,out))
})();
var state__38930__auto__ = (function (){var statearr_42203 = f__38929__auto__.call(null);
(statearr_42203[(6)] = c__38928__auto___42205);

return statearr_42203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42205,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42219 = arguments.length;
switch (G__42219) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38928__auto___42264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42264,out){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42264,out){
return (function (state_42243){
var state_val_42244 = (state_42243[(1)]);
if((state_val_42244 === (7))){
var inst_42225 = (state_42243[(7)]);
var inst_42225__$1 = (state_42243[(2)]);
var inst_42226 = (inst_42225__$1 == null);
var inst_42227 = cljs.core.not.call(null,inst_42226);
var state_42243__$1 = (function (){var statearr_42245 = state_42243;
(statearr_42245[(7)] = inst_42225__$1);

return statearr_42245;
})();
if(inst_42227){
var statearr_42246_42265 = state_42243__$1;
(statearr_42246_42265[(1)] = (8));

} else {
var statearr_42247_42266 = state_42243__$1;
(statearr_42247_42266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (1))){
var inst_42220 = (0);
var state_42243__$1 = (function (){var statearr_42248 = state_42243;
(statearr_42248[(8)] = inst_42220);

return statearr_42248;
})();
var statearr_42249_42267 = state_42243__$1;
(statearr_42249_42267[(2)] = null);

(statearr_42249_42267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (4))){
var state_42243__$1 = state_42243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42243__$1,(7),ch);
} else {
if((state_val_42244 === (6))){
var inst_42238 = (state_42243[(2)]);
var state_42243__$1 = state_42243;
var statearr_42250_42268 = state_42243__$1;
(statearr_42250_42268[(2)] = inst_42238);

(statearr_42250_42268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (3))){
var inst_42240 = (state_42243[(2)]);
var inst_42241 = cljs.core.async.close_BANG_.call(null,out);
var state_42243__$1 = (function (){var statearr_42251 = state_42243;
(statearr_42251[(9)] = inst_42240);

return statearr_42251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42243__$1,inst_42241);
} else {
if((state_val_42244 === (2))){
var inst_42220 = (state_42243[(8)]);
var inst_42222 = (inst_42220 < n);
var state_42243__$1 = state_42243;
if(cljs.core.truth_(inst_42222)){
var statearr_42252_42269 = state_42243__$1;
(statearr_42252_42269[(1)] = (4));

} else {
var statearr_42253_42270 = state_42243__$1;
(statearr_42253_42270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (11))){
var inst_42220 = (state_42243[(8)]);
var inst_42230 = (state_42243[(2)]);
var inst_42231 = (inst_42220 + (1));
var inst_42220__$1 = inst_42231;
var state_42243__$1 = (function (){var statearr_42254 = state_42243;
(statearr_42254[(8)] = inst_42220__$1);

(statearr_42254[(10)] = inst_42230);

return statearr_42254;
})();
var statearr_42255_42271 = state_42243__$1;
(statearr_42255_42271[(2)] = null);

(statearr_42255_42271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (9))){
var state_42243__$1 = state_42243;
var statearr_42256_42272 = state_42243__$1;
(statearr_42256_42272[(2)] = null);

(statearr_42256_42272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (5))){
var state_42243__$1 = state_42243;
var statearr_42257_42273 = state_42243__$1;
(statearr_42257_42273[(2)] = null);

(statearr_42257_42273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (10))){
var inst_42235 = (state_42243[(2)]);
var state_42243__$1 = state_42243;
var statearr_42258_42274 = state_42243__$1;
(statearr_42258_42274[(2)] = inst_42235);

(statearr_42258_42274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42244 === (8))){
var inst_42225 = (state_42243[(7)]);
var state_42243__$1 = state_42243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42243__$1,(11),out,inst_42225);
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
});})(c__38928__auto___42264,out))
;
return ((function (switch__38761__auto__,c__38928__auto___42264,out){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42259[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42259[(1)] = (1));

return statearr_42259;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_42243){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42260){if((e42260 instanceof Object)){
var ex__38765__auto__ = e42260;
var statearr_42261_42275 = state_42243;
(statearr_42261_42275[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42276 = state_42243;
state_42243 = G__42276;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_42243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_42243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42264,out))
})();
var state__38930__auto__ = (function (){var statearr_42262 = f__38929__auto__.call(null);
(statearr_42262[(6)] = c__38928__auto___42264);

return statearr_42262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42264,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42278 = (function (f,ch,meta42279){
this.f = f;
this.ch = ch;
this.meta42279 = meta42279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42280,meta42279__$1){
var self__ = this;
var _42280__$1 = this;
return (new cljs.core.async.t_cljs$core$async42278(self__.f,self__.ch,meta42279__$1));
});

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42280){
var self__ = this;
var _42280__$1 = this;
return self__.meta42279;
});

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42281 = (function (f,ch,meta42279,_,fn1,meta42282){
this.f = f;
this.ch = ch;
this.meta42279 = meta42279;
this._ = _;
this.fn1 = fn1;
this.meta42282 = meta42282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42283,meta42282__$1){
var self__ = this;
var _42283__$1 = this;
return (new cljs.core.async.t_cljs$core$async42281(self__.f,self__.ch,self__.meta42279,self__._,self__.fn1,meta42282__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42283){
var self__ = this;
var _42283__$1 = this;
return self__.meta42282;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42277_SHARP_){
return f1.call(null,(((p1__42277_SHARP_ == null))?null:self__.f.call(null,p1__42277_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42281.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42279","meta42279",-966341566,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42278","cljs.core.async/t_cljs$core$async42278",-1158111299,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42282","meta42282",1463679847,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42281";

cljs.core.async.t_cljs$core$async42281.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async42281");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42281.
 */
cljs.core.async.__GT_t_cljs$core$async42281 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42281(f__$1,ch__$1,meta42279__$1,___$2,fn1__$1,meta42282){
return (new cljs.core.async.t_cljs$core$async42281(f__$1,ch__$1,meta42279__$1,___$2,fn1__$1,meta42282));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42281(self__.f,self__.ch,self__.meta42279,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42279","meta42279",-966341566,null)], null);
});

cljs.core.async.t_cljs$core$async42278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42278";

cljs.core.async.t_cljs$core$async42278.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async42278");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42278.
 */
cljs.core.async.__GT_t_cljs$core$async42278 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42278(f__$1,ch__$1,meta42279){
return (new cljs.core.async.t_cljs$core$async42278(f__$1,ch__$1,meta42279));
});

}

return (new cljs.core.async.t_cljs$core$async42278(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42284 = (function (f,ch,meta42285){
this.f = f;
this.ch = ch;
this.meta42285 = meta42285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42286,meta42285__$1){
var self__ = this;
var _42286__$1 = this;
return (new cljs.core.async.t_cljs$core$async42284(self__.f,self__.ch,meta42285__$1));
});

cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42286){
var self__ = this;
var _42286__$1 = this;
return self__.meta42285;
});

cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42285","meta42285",-790794105,null)], null);
});

cljs.core.async.t_cljs$core$async42284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42284";

cljs.core.async.t_cljs$core$async42284.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async42284");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42284.
 */
cljs.core.async.__GT_t_cljs$core$async42284 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42284(f__$1,ch__$1,meta42285){
return (new cljs.core.async.t_cljs$core$async42284(f__$1,ch__$1,meta42285));
});

}

return (new cljs.core.async.t_cljs$core$async42284(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42287 = (function (p,ch,meta42288){
this.p = p;
this.ch = ch;
this.meta42288 = meta42288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42289,meta42288__$1){
var self__ = this;
var _42289__$1 = this;
return (new cljs.core.async.t_cljs$core$async42287(self__.p,self__.ch,meta42288__$1));
});

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42289){
var self__ = this;
var _42289__$1 = this;
return self__.meta42288;
});

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42288","meta42288",317753725,null)], null);
});

cljs.core.async.t_cljs$core$async42287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42287";

cljs.core.async.t_cljs$core$async42287.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async42287");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42287.
 */
cljs.core.async.__GT_t_cljs$core$async42287 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42287(p__$1,ch__$1,meta42288){
return (new cljs.core.async.t_cljs$core$async42287(p__$1,ch__$1,meta42288));
});

}

return (new cljs.core.async.t_cljs$core$async42287(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42291 = arguments.length;
switch (G__42291) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38928__auto___42331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42331,out){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42331,out){
return (function (state_42312){
var state_val_42313 = (state_42312[(1)]);
if((state_val_42313 === (7))){
var inst_42308 = (state_42312[(2)]);
var state_42312__$1 = state_42312;
var statearr_42314_42332 = state_42312__$1;
(statearr_42314_42332[(2)] = inst_42308);

(statearr_42314_42332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (1))){
var state_42312__$1 = state_42312;
var statearr_42315_42333 = state_42312__$1;
(statearr_42315_42333[(2)] = null);

(statearr_42315_42333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (4))){
var inst_42294 = (state_42312[(7)]);
var inst_42294__$1 = (state_42312[(2)]);
var inst_42295 = (inst_42294__$1 == null);
var state_42312__$1 = (function (){var statearr_42316 = state_42312;
(statearr_42316[(7)] = inst_42294__$1);

return statearr_42316;
})();
if(cljs.core.truth_(inst_42295)){
var statearr_42317_42334 = state_42312__$1;
(statearr_42317_42334[(1)] = (5));

} else {
var statearr_42318_42335 = state_42312__$1;
(statearr_42318_42335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (6))){
var inst_42294 = (state_42312[(7)]);
var inst_42299 = p.call(null,inst_42294);
var state_42312__$1 = state_42312;
if(cljs.core.truth_(inst_42299)){
var statearr_42319_42336 = state_42312__$1;
(statearr_42319_42336[(1)] = (8));

} else {
var statearr_42320_42337 = state_42312__$1;
(statearr_42320_42337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (3))){
var inst_42310 = (state_42312[(2)]);
var state_42312__$1 = state_42312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42312__$1,inst_42310);
} else {
if((state_val_42313 === (2))){
var state_42312__$1 = state_42312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42312__$1,(4),ch);
} else {
if((state_val_42313 === (11))){
var inst_42302 = (state_42312[(2)]);
var state_42312__$1 = state_42312;
var statearr_42321_42338 = state_42312__$1;
(statearr_42321_42338[(2)] = inst_42302);

(statearr_42321_42338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (9))){
var state_42312__$1 = state_42312;
var statearr_42322_42339 = state_42312__$1;
(statearr_42322_42339[(2)] = null);

(statearr_42322_42339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (5))){
var inst_42297 = cljs.core.async.close_BANG_.call(null,out);
var state_42312__$1 = state_42312;
var statearr_42323_42340 = state_42312__$1;
(statearr_42323_42340[(2)] = inst_42297);

(statearr_42323_42340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (10))){
var inst_42305 = (state_42312[(2)]);
var state_42312__$1 = (function (){var statearr_42324 = state_42312;
(statearr_42324[(8)] = inst_42305);

return statearr_42324;
})();
var statearr_42325_42341 = state_42312__$1;
(statearr_42325_42341[(2)] = null);

(statearr_42325_42341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42313 === (8))){
var inst_42294 = (state_42312[(7)]);
var state_42312__$1 = state_42312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42312__$1,(11),out,inst_42294);
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
});})(c__38928__auto___42331,out))
;
return ((function (switch__38761__auto__,c__38928__auto___42331,out){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42326 = [null,null,null,null,null,null,null,null,null];
(statearr_42326[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42326[(1)] = (1));

return statearr_42326;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_42312){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42327){if((e42327 instanceof Object)){
var ex__38765__auto__ = e42327;
var statearr_42328_42342 = state_42312;
(statearr_42328_42342[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42343 = state_42312;
state_42312 = G__42343;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_42312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_42312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42331,out))
})();
var state__38930__auto__ = (function (){var statearr_42329 = f__38929__auto__.call(null);
(statearr_42329[(6)] = c__38928__auto___42331);

return statearr_42329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42331,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42345 = arguments.length;
switch (G__42345) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto__){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto__){
return (function (state_42408){
var state_val_42409 = (state_42408[(1)]);
if((state_val_42409 === (7))){
var inst_42404 = (state_42408[(2)]);
var state_42408__$1 = state_42408;
var statearr_42410_42448 = state_42408__$1;
(statearr_42410_42448[(2)] = inst_42404);

(statearr_42410_42448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (20))){
var inst_42374 = (state_42408[(7)]);
var inst_42385 = (state_42408[(2)]);
var inst_42386 = cljs.core.next.call(null,inst_42374);
var inst_42360 = inst_42386;
var inst_42361 = null;
var inst_42362 = (0);
var inst_42363 = (0);
var state_42408__$1 = (function (){var statearr_42411 = state_42408;
(statearr_42411[(8)] = inst_42385);

(statearr_42411[(9)] = inst_42363);

(statearr_42411[(10)] = inst_42360);

(statearr_42411[(11)] = inst_42361);

(statearr_42411[(12)] = inst_42362);

return statearr_42411;
})();
var statearr_42412_42449 = state_42408__$1;
(statearr_42412_42449[(2)] = null);

(statearr_42412_42449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (1))){
var state_42408__$1 = state_42408;
var statearr_42413_42450 = state_42408__$1;
(statearr_42413_42450[(2)] = null);

(statearr_42413_42450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (4))){
var inst_42349 = (state_42408[(13)]);
var inst_42349__$1 = (state_42408[(2)]);
var inst_42350 = (inst_42349__$1 == null);
var state_42408__$1 = (function (){var statearr_42414 = state_42408;
(statearr_42414[(13)] = inst_42349__$1);

return statearr_42414;
})();
if(cljs.core.truth_(inst_42350)){
var statearr_42415_42451 = state_42408__$1;
(statearr_42415_42451[(1)] = (5));

} else {
var statearr_42416_42452 = state_42408__$1;
(statearr_42416_42452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (15))){
var state_42408__$1 = state_42408;
var statearr_42420_42453 = state_42408__$1;
(statearr_42420_42453[(2)] = null);

(statearr_42420_42453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (21))){
var state_42408__$1 = state_42408;
var statearr_42421_42454 = state_42408__$1;
(statearr_42421_42454[(2)] = null);

(statearr_42421_42454[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (13))){
var inst_42363 = (state_42408[(9)]);
var inst_42360 = (state_42408[(10)]);
var inst_42361 = (state_42408[(11)]);
var inst_42362 = (state_42408[(12)]);
var inst_42370 = (state_42408[(2)]);
var inst_42371 = (inst_42363 + (1));
var tmp42417 = inst_42360;
var tmp42418 = inst_42361;
var tmp42419 = inst_42362;
var inst_42360__$1 = tmp42417;
var inst_42361__$1 = tmp42418;
var inst_42362__$1 = tmp42419;
var inst_42363__$1 = inst_42371;
var state_42408__$1 = (function (){var statearr_42422 = state_42408;
(statearr_42422[(9)] = inst_42363__$1);

(statearr_42422[(10)] = inst_42360__$1);

(statearr_42422[(11)] = inst_42361__$1);

(statearr_42422[(14)] = inst_42370);

(statearr_42422[(12)] = inst_42362__$1);

return statearr_42422;
})();
var statearr_42423_42455 = state_42408__$1;
(statearr_42423_42455[(2)] = null);

(statearr_42423_42455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (22))){
var state_42408__$1 = state_42408;
var statearr_42424_42456 = state_42408__$1;
(statearr_42424_42456[(2)] = null);

(statearr_42424_42456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (6))){
var inst_42349 = (state_42408[(13)]);
var inst_42358 = f.call(null,inst_42349);
var inst_42359 = cljs.core.seq.call(null,inst_42358);
var inst_42360 = inst_42359;
var inst_42361 = null;
var inst_42362 = (0);
var inst_42363 = (0);
var state_42408__$1 = (function (){var statearr_42425 = state_42408;
(statearr_42425[(9)] = inst_42363);

(statearr_42425[(10)] = inst_42360);

(statearr_42425[(11)] = inst_42361);

(statearr_42425[(12)] = inst_42362);

return statearr_42425;
})();
var statearr_42426_42457 = state_42408__$1;
(statearr_42426_42457[(2)] = null);

(statearr_42426_42457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (17))){
var inst_42374 = (state_42408[(7)]);
var inst_42378 = cljs.core.chunk_first.call(null,inst_42374);
var inst_42379 = cljs.core.chunk_rest.call(null,inst_42374);
var inst_42380 = cljs.core.count.call(null,inst_42378);
var inst_42360 = inst_42379;
var inst_42361 = inst_42378;
var inst_42362 = inst_42380;
var inst_42363 = (0);
var state_42408__$1 = (function (){var statearr_42427 = state_42408;
(statearr_42427[(9)] = inst_42363);

(statearr_42427[(10)] = inst_42360);

(statearr_42427[(11)] = inst_42361);

(statearr_42427[(12)] = inst_42362);

return statearr_42427;
})();
var statearr_42428_42458 = state_42408__$1;
(statearr_42428_42458[(2)] = null);

(statearr_42428_42458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (3))){
var inst_42406 = (state_42408[(2)]);
var state_42408__$1 = state_42408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42408__$1,inst_42406);
} else {
if((state_val_42409 === (12))){
var inst_42394 = (state_42408[(2)]);
var state_42408__$1 = state_42408;
var statearr_42429_42459 = state_42408__$1;
(statearr_42429_42459[(2)] = inst_42394);

(statearr_42429_42459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (2))){
var state_42408__$1 = state_42408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42408__$1,(4),in$);
} else {
if((state_val_42409 === (23))){
var inst_42402 = (state_42408[(2)]);
var state_42408__$1 = state_42408;
var statearr_42430_42460 = state_42408__$1;
(statearr_42430_42460[(2)] = inst_42402);

(statearr_42430_42460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (19))){
var inst_42389 = (state_42408[(2)]);
var state_42408__$1 = state_42408;
var statearr_42431_42461 = state_42408__$1;
(statearr_42431_42461[(2)] = inst_42389);

(statearr_42431_42461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (11))){
var inst_42360 = (state_42408[(10)]);
var inst_42374 = (state_42408[(7)]);
var inst_42374__$1 = cljs.core.seq.call(null,inst_42360);
var state_42408__$1 = (function (){var statearr_42432 = state_42408;
(statearr_42432[(7)] = inst_42374__$1);

return statearr_42432;
})();
if(inst_42374__$1){
var statearr_42433_42462 = state_42408__$1;
(statearr_42433_42462[(1)] = (14));

} else {
var statearr_42434_42463 = state_42408__$1;
(statearr_42434_42463[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (9))){
var inst_42396 = (state_42408[(2)]);
var inst_42397 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42408__$1 = (function (){var statearr_42435 = state_42408;
(statearr_42435[(15)] = inst_42396);

return statearr_42435;
})();
if(cljs.core.truth_(inst_42397)){
var statearr_42436_42464 = state_42408__$1;
(statearr_42436_42464[(1)] = (21));

} else {
var statearr_42437_42465 = state_42408__$1;
(statearr_42437_42465[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (5))){
var inst_42352 = cljs.core.async.close_BANG_.call(null,out);
var state_42408__$1 = state_42408;
var statearr_42438_42466 = state_42408__$1;
(statearr_42438_42466[(2)] = inst_42352);

(statearr_42438_42466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (14))){
var inst_42374 = (state_42408[(7)]);
var inst_42376 = cljs.core.chunked_seq_QMARK_.call(null,inst_42374);
var state_42408__$1 = state_42408;
if(inst_42376){
var statearr_42439_42467 = state_42408__$1;
(statearr_42439_42467[(1)] = (17));

} else {
var statearr_42440_42468 = state_42408__$1;
(statearr_42440_42468[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (16))){
var inst_42392 = (state_42408[(2)]);
var state_42408__$1 = state_42408;
var statearr_42441_42469 = state_42408__$1;
(statearr_42441_42469[(2)] = inst_42392);

(statearr_42441_42469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42409 === (10))){
var inst_42363 = (state_42408[(9)]);
var inst_42361 = (state_42408[(11)]);
var inst_42368 = cljs.core._nth.call(null,inst_42361,inst_42363);
var state_42408__$1 = state_42408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42408__$1,(13),out,inst_42368);
} else {
if((state_val_42409 === (18))){
var inst_42374 = (state_42408[(7)]);
var inst_42383 = cljs.core.first.call(null,inst_42374);
var state_42408__$1 = state_42408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42408__$1,(20),out,inst_42383);
} else {
if((state_val_42409 === (8))){
var inst_42363 = (state_42408[(9)]);
var inst_42362 = (state_42408[(12)]);
var inst_42365 = (inst_42363 < inst_42362);
var inst_42366 = inst_42365;
var state_42408__$1 = state_42408;
if(cljs.core.truth_(inst_42366)){
var statearr_42442_42470 = state_42408__$1;
(statearr_42442_42470[(1)] = (10));

} else {
var statearr_42443_42471 = state_42408__$1;
(statearr_42443_42471[(1)] = (11));

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
});})(c__38928__auto__))
;
return ((function (switch__38761__auto__,c__38928__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38762__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38762__auto____0 = (function (){
var statearr_42444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42444[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38762__auto__);

(statearr_42444[(1)] = (1));

return statearr_42444;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38762__auto____1 = (function (state_42408){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42445){if((e42445 instanceof Object)){
var ex__38765__auto__ = e42445;
var statearr_42446_42472 = state_42408;
(statearr_42446_42472[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42473 = state_42408;
state_42408 = G__42473;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38762__auto__ = function(state_42408){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38762__auto____1.call(this,state_42408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38762__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38762__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto__))
})();
var state__38930__auto__ = (function (){var statearr_42447 = f__38929__auto__.call(null);
(statearr_42447[(6)] = c__38928__auto__);

return statearr_42447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto__))
);

return c__38928__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42475 = arguments.length;
switch (G__42475) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42478 = arguments.length;
switch (G__42478) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42481 = arguments.length;
switch (G__42481) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38928__auto___42528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42528,out){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42528,out){
return (function (state_42505){
var state_val_42506 = (state_42505[(1)]);
if((state_val_42506 === (7))){
var inst_42500 = (state_42505[(2)]);
var state_42505__$1 = state_42505;
var statearr_42507_42529 = state_42505__$1;
(statearr_42507_42529[(2)] = inst_42500);

(statearr_42507_42529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42506 === (1))){
var inst_42482 = null;
var state_42505__$1 = (function (){var statearr_42508 = state_42505;
(statearr_42508[(7)] = inst_42482);

return statearr_42508;
})();
var statearr_42509_42530 = state_42505__$1;
(statearr_42509_42530[(2)] = null);

(statearr_42509_42530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42506 === (4))){
var inst_42485 = (state_42505[(8)]);
var inst_42485__$1 = (state_42505[(2)]);
var inst_42486 = (inst_42485__$1 == null);
var inst_42487 = cljs.core.not.call(null,inst_42486);
var state_42505__$1 = (function (){var statearr_42510 = state_42505;
(statearr_42510[(8)] = inst_42485__$1);

return statearr_42510;
})();
if(inst_42487){
var statearr_42511_42531 = state_42505__$1;
(statearr_42511_42531[(1)] = (5));

} else {
var statearr_42512_42532 = state_42505__$1;
(statearr_42512_42532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42506 === (6))){
var state_42505__$1 = state_42505;
var statearr_42513_42533 = state_42505__$1;
(statearr_42513_42533[(2)] = null);

(statearr_42513_42533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42506 === (3))){
var inst_42502 = (state_42505[(2)]);
var inst_42503 = cljs.core.async.close_BANG_.call(null,out);
var state_42505__$1 = (function (){var statearr_42514 = state_42505;
(statearr_42514[(9)] = inst_42502);

return statearr_42514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42505__$1,inst_42503);
} else {
if((state_val_42506 === (2))){
var state_42505__$1 = state_42505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42505__$1,(4),ch);
} else {
if((state_val_42506 === (11))){
var inst_42485 = (state_42505[(8)]);
var inst_42494 = (state_42505[(2)]);
var inst_42482 = inst_42485;
var state_42505__$1 = (function (){var statearr_42515 = state_42505;
(statearr_42515[(7)] = inst_42482);

(statearr_42515[(10)] = inst_42494);

return statearr_42515;
})();
var statearr_42516_42534 = state_42505__$1;
(statearr_42516_42534[(2)] = null);

(statearr_42516_42534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42506 === (9))){
var inst_42485 = (state_42505[(8)]);
var state_42505__$1 = state_42505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42505__$1,(11),out,inst_42485);
} else {
if((state_val_42506 === (5))){
var inst_42482 = (state_42505[(7)]);
var inst_42485 = (state_42505[(8)]);
var inst_42489 = cljs.core._EQ_.call(null,inst_42485,inst_42482);
var state_42505__$1 = state_42505;
if(inst_42489){
var statearr_42518_42535 = state_42505__$1;
(statearr_42518_42535[(1)] = (8));

} else {
var statearr_42519_42536 = state_42505__$1;
(statearr_42519_42536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42506 === (10))){
var inst_42497 = (state_42505[(2)]);
var state_42505__$1 = state_42505;
var statearr_42520_42537 = state_42505__$1;
(statearr_42520_42537[(2)] = inst_42497);

(statearr_42520_42537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42506 === (8))){
var inst_42482 = (state_42505[(7)]);
var tmp42517 = inst_42482;
var inst_42482__$1 = tmp42517;
var state_42505__$1 = (function (){var statearr_42521 = state_42505;
(statearr_42521[(7)] = inst_42482__$1);

return statearr_42521;
})();
var statearr_42522_42538 = state_42505__$1;
(statearr_42522_42538[(2)] = null);

(statearr_42522_42538[(1)] = (2));


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
});})(c__38928__auto___42528,out))
;
return ((function (switch__38761__auto__,c__38928__auto___42528,out){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42523[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42523[(1)] = (1));

return statearr_42523;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_42505){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42524){if((e42524 instanceof Object)){
var ex__38765__auto__ = e42524;
var statearr_42525_42539 = state_42505;
(statearr_42525_42539[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42540 = state_42505;
state_42505 = G__42540;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_42505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_42505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42528,out))
})();
var state__38930__auto__ = (function (){var statearr_42526 = f__38929__auto__.call(null);
(statearr_42526[(6)] = c__38928__auto___42528);

return statearr_42526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42528,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42542 = arguments.length;
switch (G__42542) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38928__auto___42608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42608,out){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42608,out){
return (function (state_42580){
var state_val_42581 = (state_42580[(1)]);
if((state_val_42581 === (7))){
var inst_42576 = (state_42580[(2)]);
var state_42580__$1 = state_42580;
var statearr_42582_42609 = state_42580__$1;
(statearr_42582_42609[(2)] = inst_42576);

(statearr_42582_42609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (1))){
var inst_42543 = (new Array(n));
var inst_42544 = inst_42543;
var inst_42545 = (0);
var state_42580__$1 = (function (){var statearr_42583 = state_42580;
(statearr_42583[(7)] = inst_42545);

(statearr_42583[(8)] = inst_42544);

return statearr_42583;
})();
var statearr_42584_42610 = state_42580__$1;
(statearr_42584_42610[(2)] = null);

(statearr_42584_42610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (4))){
var inst_42548 = (state_42580[(9)]);
var inst_42548__$1 = (state_42580[(2)]);
var inst_42549 = (inst_42548__$1 == null);
var inst_42550 = cljs.core.not.call(null,inst_42549);
var state_42580__$1 = (function (){var statearr_42585 = state_42580;
(statearr_42585[(9)] = inst_42548__$1);

return statearr_42585;
})();
if(inst_42550){
var statearr_42586_42611 = state_42580__$1;
(statearr_42586_42611[(1)] = (5));

} else {
var statearr_42587_42612 = state_42580__$1;
(statearr_42587_42612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (15))){
var inst_42570 = (state_42580[(2)]);
var state_42580__$1 = state_42580;
var statearr_42588_42613 = state_42580__$1;
(statearr_42588_42613[(2)] = inst_42570);

(statearr_42588_42613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (13))){
var state_42580__$1 = state_42580;
var statearr_42589_42614 = state_42580__$1;
(statearr_42589_42614[(2)] = null);

(statearr_42589_42614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (6))){
var inst_42545 = (state_42580[(7)]);
var inst_42566 = (inst_42545 > (0));
var state_42580__$1 = state_42580;
if(cljs.core.truth_(inst_42566)){
var statearr_42590_42615 = state_42580__$1;
(statearr_42590_42615[(1)] = (12));

} else {
var statearr_42591_42616 = state_42580__$1;
(statearr_42591_42616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (3))){
var inst_42578 = (state_42580[(2)]);
var state_42580__$1 = state_42580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42580__$1,inst_42578);
} else {
if((state_val_42581 === (12))){
var inst_42544 = (state_42580[(8)]);
var inst_42568 = cljs.core.vec.call(null,inst_42544);
var state_42580__$1 = state_42580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42580__$1,(15),out,inst_42568);
} else {
if((state_val_42581 === (2))){
var state_42580__$1 = state_42580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42580__$1,(4),ch);
} else {
if((state_val_42581 === (11))){
var inst_42560 = (state_42580[(2)]);
var inst_42561 = (new Array(n));
var inst_42544 = inst_42561;
var inst_42545 = (0);
var state_42580__$1 = (function (){var statearr_42592 = state_42580;
(statearr_42592[(7)] = inst_42545);

(statearr_42592[(8)] = inst_42544);

(statearr_42592[(10)] = inst_42560);

return statearr_42592;
})();
var statearr_42593_42617 = state_42580__$1;
(statearr_42593_42617[(2)] = null);

(statearr_42593_42617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (9))){
var inst_42544 = (state_42580[(8)]);
var inst_42558 = cljs.core.vec.call(null,inst_42544);
var state_42580__$1 = state_42580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42580__$1,(11),out,inst_42558);
} else {
if((state_val_42581 === (5))){
var inst_42545 = (state_42580[(7)]);
var inst_42553 = (state_42580[(11)]);
var inst_42544 = (state_42580[(8)]);
var inst_42548 = (state_42580[(9)]);
var inst_42552 = (inst_42544[inst_42545] = inst_42548);
var inst_42553__$1 = (inst_42545 + (1));
var inst_42554 = (inst_42553__$1 < n);
var state_42580__$1 = (function (){var statearr_42594 = state_42580;
(statearr_42594[(11)] = inst_42553__$1);

(statearr_42594[(12)] = inst_42552);

return statearr_42594;
})();
if(cljs.core.truth_(inst_42554)){
var statearr_42595_42618 = state_42580__$1;
(statearr_42595_42618[(1)] = (8));

} else {
var statearr_42596_42619 = state_42580__$1;
(statearr_42596_42619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (14))){
var inst_42573 = (state_42580[(2)]);
var inst_42574 = cljs.core.async.close_BANG_.call(null,out);
var state_42580__$1 = (function (){var statearr_42598 = state_42580;
(statearr_42598[(13)] = inst_42573);

return statearr_42598;
})();
var statearr_42599_42620 = state_42580__$1;
(statearr_42599_42620[(2)] = inst_42574);

(statearr_42599_42620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (10))){
var inst_42564 = (state_42580[(2)]);
var state_42580__$1 = state_42580;
var statearr_42600_42621 = state_42580__$1;
(statearr_42600_42621[(2)] = inst_42564);

(statearr_42600_42621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42581 === (8))){
var inst_42553 = (state_42580[(11)]);
var inst_42544 = (state_42580[(8)]);
var tmp42597 = inst_42544;
var inst_42544__$1 = tmp42597;
var inst_42545 = inst_42553;
var state_42580__$1 = (function (){var statearr_42601 = state_42580;
(statearr_42601[(7)] = inst_42545);

(statearr_42601[(8)] = inst_42544__$1);

return statearr_42601;
})();
var statearr_42602_42622 = state_42580__$1;
(statearr_42602_42622[(2)] = null);

(statearr_42602_42622[(1)] = (2));


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
});})(c__38928__auto___42608,out))
;
return ((function (switch__38761__auto__,c__38928__auto___42608,out){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42603[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42603[(1)] = (1));

return statearr_42603;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_42580){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42604){if((e42604 instanceof Object)){
var ex__38765__auto__ = e42604;
var statearr_42605_42623 = state_42580;
(statearr_42605_42623[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42624 = state_42580;
state_42580 = G__42624;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_42580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_42580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42608,out))
})();
var state__38930__auto__ = (function (){var statearr_42606 = f__38929__auto__.call(null);
(statearr_42606[(6)] = c__38928__auto___42608);

return statearr_42606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42608,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42626 = arguments.length;
switch (G__42626) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38928__auto___42696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38928__auto___42696,out){
return (function (){
var f__38929__auto__ = (function (){var switch__38761__auto__ = ((function (c__38928__auto___42696,out){
return (function (state_42668){
var state_val_42669 = (state_42668[(1)]);
if((state_val_42669 === (7))){
var inst_42664 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42670_42697 = state_42668__$1;
(statearr_42670_42697[(2)] = inst_42664);

(statearr_42670_42697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (1))){
var inst_42627 = [];
var inst_42628 = inst_42627;
var inst_42629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42668__$1 = (function (){var statearr_42671 = state_42668;
(statearr_42671[(7)] = inst_42628);

(statearr_42671[(8)] = inst_42629);

return statearr_42671;
})();
var statearr_42672_42698 = state_42668__$1;
(statearr_42672_42698[(2)] = null);

(statearr_42672_42698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (4))){
var inst_42632 = (state_42668[(9)]);
var inst_42632__$1 = (state_42668[(2)]);
var inst_42633 = (inst_42632__$1 == null);
var inst_42634 = cljs.core.not.call(null,inst_42633);
var state_42668__$1 = (function (){var statearr_42673 = state_42668;
(statearr_42673[(9)] = inst_42632__$1);

return statearr_42673;
})();
if(inst_42634){
var statearr_42674_42699 = state_42668__$1;
(statearr_42674_42699[(1)] = (5));

} else {
var statearr_42675_42700 = state_42668__$1;
(statearr_42675_42700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (15))){
var inst_42658 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42676_42701 = state_42668__$1;
(statearr_42676_42701[(2)] = inst_42658);

(statearr_42676_42701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (13))){
var state_42668__$1 = state_42668;
var statearr_42677_42702 = state_42668__$1;
(statearr_42677_42702[(2)] = null);

(statearr_42677_42702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (6))){
var inst_42628 = (state_42668[(7)]);
var inst_42653 = inst_42628.length;
var inst_42654 = (inst_42653 > (0));
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42654)){
var statearr_42678_42703 = state_42668__$1;
(statearr_42678_42703[(1)] = (12));

} else {
var statearr_42679_42704 = state_42668__$1;
(statearr_42679_42704[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (3))){
var inst_42666 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42668__$1,inst_42666);
} else {
if((state_val_42669 === (12))){
var inst_42628 = (state_42668[(7)]);
var inst_42656 = cljs.core.vec.call(null,inst_42628);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42668__$1,(15),out,inst_42656);
} else {
if((state_val_42669 === (2))){
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(4),ch);
} else {
if((state_val_42669 === (11))){
var inst_42636 = (state_42668[(10)]);
var inst_42632 = (state_42668[(9)]);
var inst_42646 = (state_42668[(2)]);
var inst_42647 = [];
var inst_42648 = inst_42647.push(inst_42632);
var inst_42628 = inst_42647;
var inst_42629 = inst_42636;
var state_42668__$1 = (function (){var statearr_42680 = state_42668;
(statearr_42680[(11)] = inst_42646);

(statearr_42680[(12)] = inst_42648);

(statearr_42680[(7)] = inst_42628);

(statearr_42680[(8)] = inst_42629);

return statearr_42680;
})();
var statearr_42681_42705 = state_42668__$1;
(statearr_42681_42705[(2)] = null);

(statearr_42681_42705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (9))){
var inst_42628 = (state_42668[(7)]);
var inst_42644 = cljs.core.vec.call(null,inst_42628);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42668__$1,(11),out,inst_42644);
} else {
if((state_val_42669 === (5))){
var inst_42636 = (state_42668[(10)]);
var inst_42629 = (state_42668[(8)]);
var inst_42632 = (state_42668[(9)]);
var inst_42636__$1 = f.call(null,inst_42632);
var inst_42637 = cljs.core._EQ_.call(null,inst_42636__$1,inst_42629);
var inst_42638 = cljs.core.keyword_identical_QMARK_.call(null,inst_42629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42639 = ((inst_42637) || (inst_42638));
var state_42668__$1 = (function (){var statearr_42682 = state_42668;
(statearr_42682[(10)] = inst_42636__$1);

return statearr_42682;
})();
if(cljs.core.truth_(inst_42639)){
var statearr_42683_42706 = state_42668__$1;
(statearr_42683_42706[(1)] = (8));

} else {
var statearr_42684_42707 = state_42668__$1;
(statearr_42684_42707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (14))){
var inst_42661 = (state_42668[(2)]);
var inst_42662 = cljs.core.async.close_BANG_.call(null,out);
var state_42668__$1 = (function (){var statearr_42686 = state_42668;
(statearr_42686[(13)] = inst_42661);

return statearr_42686;
})();
var statearr_42687_42708 = state_42668__$1;
(statearr_42687_42708[(2)] = inst_42662);

(statearr_42687_42708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (10))){
var inst_42651 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42688_42709 = state_42668__$1;
(statearr_42688_42709[(2)] = inst_42651);

(statearr_42688_42709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (8))){
var inst_42636 = (state_42668[(10)]);
var inst_42628 = (state_42668[(7)]);
var inst_42632 = (state_42668[(9)]);
var inst_42641 = inst_42628.push(inst_42632);
var tmp42685 = inst_42628;
var inst_42628__$1 = tmp42685;
var inst_42629 = inst_42636;
var state_42668__$1 = (function (){var statearr_42689 = state_42668;
(statearr_42689[(14)] = inst_42641);

(statearr_42689[(7)] = inst_42628__$1);

(statearr_42689[(8)] = inst_42629);

return statearr_42689;
})();
var statearr_42690_42710 = state_42668__$1;
(statearr_42690_42710[(2)] = null);

(statearr_42690_42710[(1)] = (2));


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
});})(c__38928__auto___42696,out))
;
return ((function (switch__38761__auto__,c__38928__auto___42696,out){
return (function() {
var cljs$core$async$state_machine__38762__auto__ = null;
var cljs$core$async$state_machine__38762__auto____0 = (function (){
var statearr_42691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42691[(0)] = cljs$core$async$state_machine__38762__auto__);

(statearr_42691[(1)] = (1));

return statearr_42691;
});
var cljs$core$async$state_machine__38762__auto____1 = (function (state_42668){
while(true){
var ret_value__38763__auto__ = (function (){try{while(true){
var result__38764__auto__ = switch__38761__auto__.call(null,state_42668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38764__auto__;
}
break;
}
}catch (e42692){if((e42692 instanceof Object)){
var ex__38765__auto__ = e42692;
var statearr_42693_42711 = state_42668;
(statearr_42693_42711[(5)] = ex__38765__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42712 = state_42668;
state_42668 = G__42712;
continue;
} else {
return ret_value__38763__auto__;
}
break;
}
});
cljs$core$async$state_machine__38762__auto__ = function(state_42668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38762__auto____1.call(this,state_42668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38762__auto____0;
cljs$core$async$state_machine__38762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38762__auto____1;
return cljs$core$async$state_machine__38762__auto__;
})()
;})(switch__38761__auto__,c__38928__auto___42696,out))
})();
var state__38930__auto__ = (function (){var statearr_42694 = f__38929__auto__.call(null);
(statearr_42694[(6)] = c__38928__auto___42696);

return statearr_42694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38930__auto__);
});})(c__38928__auto___42696,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1561561428027

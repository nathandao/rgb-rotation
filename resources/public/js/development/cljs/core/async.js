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
var G__23458 = arguments.length;
switch (G__23458) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23459 = (function (f,blockable,meta23460){
this.f = f;
this.blockable = blockable;
this.meta23460 = meta23460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23461,meta23460__$1){
var self__ = this;
var _23461__$1 = this;
return (new cljs.core.async.t_cljs$core$async23459(self__.f,self__.blockable,meta23460__$1));
});

cljs.core.async.t_cljs$core$async23459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23461){
var self__ = this;
var _23461__$1 = this;
return self__.meta23460;
});

cljs.core.async.t_cljs$core$async23459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23460","meta23460",-1910025674,null)], null);
});

cljs.core.async.t_cljs$core$async23459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23459";

cljs.core.async.t_cljs$core$async23459.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23459");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23459.
 */
cljs.core.async.__GT_t_cljs$core$async23459 = (function cljs$core$async$__GT_t_cljs$core$async23459(f__$1,blockable__$1,meta23460){
return (new cljs.core.async.t_cljs$core$async23459(f__$1,blockable__$1,meta23460));
});

}

return (new cljs.core.async.t_cljs$core$async23459(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23465 = arguments.length;
switch (G__23465) {
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
var G__23468 = arguments.length;
switch (G__23468) {
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
var G__23471 = arguments.length;
switch (G__23471) {
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
var val_23473 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23473);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23473,ret){
return (function (){
return fn1.call(null,val_23473);
});})(val_23473,ret))
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
var G__23475 = arguments.length;
switch (G__23475) {
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
var n__4607__auto___23477 = n;
var x_23478 = (0);
while(true){
if((x_23478 < n__4607__auto___23477)){
(a[x_23478] = (0));

var G__23479 = (x_23478 + (1));
x_23478 = G__23479;
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

var G__23480 = (i + (1));
i = G__23480;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23481 = (function (flag,meta23482){
this.flag = flag;
this.meta23482 = meta23482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23483,meta23482__$1){
var self__ = this;
var _23483__$1 = this;
return (new cljs.core.async.t_cljs$core$async23481(self__.flag,meta23482__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23483){
var self__ = this;
var _23483__$1 = this;
return self__.meta23482;
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23482","meta23482",-377958166,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23481";

cljs.core.async.t_cljs$core$async23481.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23481");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23481.
 */
cljs.core.async.__GT_t_cljs$core$async23481 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23481(flag__$1,meta23482){
return (new cljs.core.async.t_cljs$core$async23481(flag__$1,meta23482));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23481(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23484 = (function (flag,cb,meta23485){
this.flag = flag;
this.cb = cb;
this.meta23485 = meta23485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23486,meta23485__$1){
var self__ = this;
var _23486__$1 = this;
return (new cljs.core.async.t_cljs$core$async23484(self__.flag,self__.cb,meta23485__$1));
});

cljs.core.async.t_cljs$core$async23484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23486){
var self__ = this;
var _23486__$1 = this;
return self__.meta23485;
});

cljs.core.async.t_cljs$core$async23484.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23485","meta23485",1129028573,null)], null);
});

cljs.core.async.t_cljs$core$async23484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23484";

cljs.core.async.t_cljs$core$async23484.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23484");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23484.
 */
cljs.core.async.__GT_t_cljs$core$async23484 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23484(flag__$1,cb__$1,meta23485){
return (new cljs.core.async.t_cljs$core$async23484(flag__$1,cb__$1,meta23485));
});

}

return (new cljs.core.async.t_cljs$core$async23484(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23487_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23487_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23488_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23488_SHARP_,port], null));
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
var G__23489 = (i + (1));
i = G__23489;
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
var len__4730__auto___23495 = arguments.length;
var i__4731__auto___23496 = (0);
while(true){
if((i__4731__auto___23496 < len__4730__auto___23495)){
args__4736__auto__.push((arguments[i__4731__auto___23496]));

var G__23497 = (i__4731__auto___23496 + (1));
i__4731__auto___23496 = G__23497;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23492){
var map__23493 = p__23492;
var map__23493__$1 = (((((!((map__23493 == null))))?(((((map__23493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23493):map__23493);
var opts = map__23493__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23490){
var G__23491 = cljs.core.first.call(null,seq23490);
var seq23490__$1 = cljs.core.next.call(null,seq23490);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23491,seq23490__$1);
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
var G__23499 = arguments.length;
switch (G__23499) {
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
var c__23398__auto___23545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___23545){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___23545){
return (function (state_23523){
var state_val_23524 = (state_23523[(1)]);
if((state_val_23524 === (7))){
var inst_23519 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
var statearr_23525_23546 = state_23523__$1;
(statearr_23525_23546[(2)] = inst_23519);

(statearr_23525_23546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (1))){
var state_23523__$1 = state_23523;
var statearr_23526_23547 = state_23523__$1;
(statearr_23526_23547[(2)] = null);

(statearr_23526_23547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (4))){
var inst_23502 = (state_23523[(7)]);
var inst_23502__$1 = (state_23523[(2)]);
var inst_23503 = (inst_23502__$1 == null);
var state_23523__$1 = (function (){var statearr_23527 = state_23523;
(statearr_23527[(7)] = inst_23502__$1);

return statearr_23527;
})();
if(cljs.core.truth_(inst_23503)){
var statearr_23528_23548 = state_23523__$1;
(statearr_23528_23548[(1)] = (5));

} else {
var statearr_23529_23549 = state_23523__$1;
(statearr_23529_23549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (13))){
var state_23523__$1 = state_23523;
var statearr_23530_23550 = state_23523__$1;
(statearr_23530_23550[(2)] = null);

(statearr_23530_23550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (6))){
var inst_23502 = (state_23523[(7)]);
var state_23523__$1 = state_23523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23523__$1,(11),to,inst_23502);
} else {
if((state_val_23524 === (3))){
var inst_23521 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23523__$1,inst_23521);
} else {
if((state_val_23524 === (12))){
var state_23523__$1 = state_23523;
var statearr_23531_23551 = state_23523__$1;
(statearr_23531_23551[(2)] = null);

(statearr_23531_23551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (2))){
var state_23523__$1 = state_23523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23523__$1,(4),from);
} else {
if((state_val_23524 === (11))){
var inst_23512 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
if(cljs.core.truth_(inst_23512)){
var statearr_23532_23552 = state_23523__$1;
(statearr_23532_23552[(1)] = (12));

} else {
var statearr_23533_23553 = state_23523__$1;
(statearr_23533_23553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (9))){
var state_23523__$1 = state_23523;
var statearr_23534_23554 = state_23523__$1;
(statearr_23534_23554[(2)] = null);

(statearr_23534_23554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (5))){
var state_23523__$1 = state_23523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23535_23555 = state_23523__$1;
(statearr_23535_23555[(1)] = (8));

} else {
var statearr_23536_23556 = state_23523__$1;
(statearr_23536_23556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (14))){
var inst_23517 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
var statearr_23537_23557 = state_23523__$1;
(statearr_23537_23557[(2)] = inst_23517);

(statearr_23537_23557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (10))){
var inst_23509 = (state_23523[(2)]);
var state_23523__$1 = state_23523;
var statearr_23538_23558 = state_23523__$1;
(statearr_23538_23558[(2)] = inst_23509);

(statearr_23538_23558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23524 === (8))){
var inst_23506 = cljs.core.async.close_BANG_.call(null,to);
var state_23523__$1 = state_23523;
var statearr_23539_23559 = state_23523__$1;
(statearr_23539_23559[(2)] = inst_23506);

(statearr_23539_23559[(1)] = (10));


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
});})(c__23398__auto___23545))
;
return ((function (switch__23303__auto__,c__23398__auto___23545){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_23540 = [null,null,null,null,null,null,null,null];
(statearr_23540[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_23540[(1)] = (1));

return statearr_23540;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_23523){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23541){if((e23541 instanceof Object)){
var ex__23307__auto__ = e23541;
var statearr_23542_23560 = state_23523;
(statearr_23542_23560[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23561 = state_23523;
state_23523 = G__23561;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_23523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_23523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___23545))
})();
var state__23400__auto__ = (function (){var statearr_23543 = f__23399__auto__.call(null);
(statearr_23543[(6)] = c__23398__auto___23545);

return statearr_23543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___23545))
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
var process = ((function (jobs,results){
return (function (p__23562){
var vec__23563 = p__23562;
var v = cljs.core.nth.call(null,vec__23563,(0),null);
var p = cljs.core.nth.call(null,vec__23563,(1),null);
var job = vec__23563;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23398__auto___23734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___23734,res,vec__23563,v,p,job,jobs,results){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___23734,res,vec__23563,v,p,job,jobs,results){
return (function (state_23570){
var state_val_23571 = (state_23570[(1)]);
if((state_val_23571 === (1))){
var state_23570__$1 = state_23570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23570__$1,(2),res,v);
} else {
if((state_val_23571 === (2))){
var inst_23567 = (state_23570[(2)]);
var inst_23568 = cljs.core.async.close_BANG_.call(null,res);
var state_23570__$1 = (function (){var statearr_23572 = state_23570;
(statearr_23572[(7)] = inst_23567);

return statearr_23572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23570__$1,inst_23568);
} else {
return null;
}
}
});})(c__23398__auto___23734,res,vec__23563,v,p,job,jobs,results))
;
return ((function (switch__23303__auto__,c__23398__auto___23734,res,vec__23563,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0 = (function (){
var statearr_23573 = [null,null,null,null,null,null,null,null];
(statearr_23573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__);

(statearr_23573[(1)] = (1));

return statearr_23573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1 = (function (state_23570){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23574){if((e23574 instanceof Object)){
var ex__23307__auto__ = e23574;
var statearr_23575_23735 = state_23570;
(statearr_23575_23735[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23736 = state_23570;
state_23570 = G__23736;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = function(state_23570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1.call(this,state_23570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___23734,res,vec__23563,v,p,job,jobs,results))
})();
var state__23400__auto__ = (function (){var statearr_23576 = f__23399__auto__.call(null);
(statearr_23576[(6)] = c__23398__auto___23734);

return statearr_23576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___23734,res,vec__23563,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23577){
var vec__23578 = p__23577;
var v = cljs.core.nth.call(null,vec__23578,(0),null);
var p = cljs.core.nth.call(null,vec__23578,(1),null);
var job = vec__23578;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23737 = n;
var __23738 = (0);
while(true){
if((__23738 < n__4607__auto___23737)){
var G__23581_23739 = type;
var G__23581_23740__$1 = (((G__23581_23739 instanceof cljs.core.Keyword))?G__23581_23739.fqn:null);
switch (G__23581_23740__$1) {
case "compute":
var c__23398__auto___23742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23738,c__23398__auto___23742,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (__23738,c__23398__auto___23742,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async){
return (function (state_23594){
var state_val_23595 = (state_23594[(1)]);
if((state_val_23595 === (1))){
var state_23594__$1 = state_23594;
var statearr_23596_23743 = state_23594__$1;
(statearr_23596_23743[(2)] = null);

(statearr_23596_23743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (2))){
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23594__$1,(4),jobs);
} else {
if((state_val_23595 === (3))){
var inst_23592 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23594__$1,inst_23592);
} else {
if((state_val_23595 === (4))){
var inst_23584 = (state_23594[(2)]);
var inst_23585 = process.call(null,inst_23584);
var state_23594__$1 = state_23594;
if(cljs.core.truth_(inst_23585)){
var statearr_23597_23744 = state_23594__$1;
(statearr_23597_23744[(1)] = (5));

} else {
var statearr_23598_23745 = state_23594__$1;
(statearr_23598_23745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (5))){
var state_23594__$1 = state_23594;
var statearr_23599_23746 = state_23594__$1;
(statearr_23599_23746[(2)] = null);

(statearr_23599_23746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (6))){
var state_23594__$1 = state_23594;
var statearr_23600_23747 = state_23594__$1;
(statearr_23600_23747[(2)] = null);

(statearr_23600_23747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23595 === (7))){
var inst_23590 = (state_23594[(2)]);
var state_23594__$1 = state_23594;
var statearr_23601_23748 = state_23594__$1;
(statearr_23601_23748[(2)] = inst_23590);

(statearr_23601_23748[(1)] = (3));


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
});})(__23738,c__23398__auto___23742,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async))
;
return ((function (__23738,switch__23303__auto__,c__23398__auto___23742,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0 = (function (){
var statearr_23602 = [null,null,null,null,null,null,null];
(statearr_23602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__);

(statearr_23602[(1)] = (1));

return statearr_23602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1 = (function (state_23594){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23603){if((e23603 instanceof Object)){
var ex__23307__auto__ = e23603;
var statearr_23604_23749 = state_23594;
(statearr_23604_23749[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23750 = state_23594;
state_23594 = G__23750;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = function(state_23594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1.call(this,state_23594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__;
})()
;})(__23738,switch__23303__auto__,c__23398__auto___23742,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async))
})();
var state__23400__auto__ = (function (){var statearr_23605 = f__23399__auto__.call(null);
(statearr_23605[(6)] = c__23398__auto___23742);

return statearr_23605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(__23738,c__23398__auto___23742,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async))
);


break;
case "async":
var c__23398__auto___23751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23738,c__23398__auto___23751,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (__23738,c__23398__auto___23751,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async){
return (function (state_23618){
var state_val_23619 = (state_23618[(1)]);
if((state_val_23619 === (1))){
var state_23618__$1 = state_23618;
var statearr_23620_23752 = state_23618__$1;
(statearr_23620_23752[(2)] = null);

(statearr_23620_23752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (2))){
var state_23618__$1 = state_23618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23618__$1,(4),jobs);
} else {
if((state_val_23619 === (3))){
var inst_23616 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23618__$1,inst_23616);
} else {
if((state_val_23619 === (4))){
var inst_23608 = (state_23618[(2)]);
var inst_23609 = async.call(null,inst_23608);
var state_23618__$1 = state_23618;
if(cljs.core.truth_(inst_23609)){
var statearr_23621_23753 = state_23618__$1;
(statearr_23621_23753[(1)] = (5));

} else {
var statearr_23622_23754 = state_23618__$1;
(statearr_23622_23754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (5))){
var state_23618__$1 = state_23618;
var statearr_23623_23755 = state_23618__$1;
(statearr_23623_23755[(2)] = null);

(statearr_23623_23755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (6))){
var state_23618__$1 = state_23618;
var statearr_23624_23756 = state_23618__$1;
(statearr_23624_23756[(2)] = null);

(statearr_23624_23756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (7))){
var inst_23614 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
var statearr_23625_23757 = state_23618__$1;
(statearr_23625_23757[(2)] = inst_23614);

(statearr_23625_23757[(1)] = (3));


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
});})(__23738,c__23398__auto___23751,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async))
;
return ((function (__23738,switch__23303__auto__,c__23398__auto___23751,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0 = (function (){
var statearr_23626 = [null,null,null,null,null,null,null];
(statearr_23626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__);

(statearr_23626[(1)] = (1));

return statearr_23626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1 = (function (state_23618){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23627){if((e23627 instanceof Object)){
var ex__23307__auto__ = e23627;
var statearr_23628_23758 = state_23618;
(statearr_23628_23758[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23759 = state_23618;
state_23618 = G__23759;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = function(state_23618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1.call(this,state_23618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__;
})()
;})(__23738,switch__23303__auto__,c__23398__auto___23751,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async))
})();
var state__23400__auto__ = (function (){var statearr_23629 = f__23399__auto__.call(null);
(statearr_23629[(6)] = c__23398__auto___23751);

return statearr_23629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(__23738,c__23398__auto___23751,G__23581_23739,G__23581_23740__$1,n__4607__auto___23737,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23581_23740__$1)].join('')));

}

var G__23760 = (__23738 + (1));
__23738 = G__23760;
continue;
} else {
}
break;
}

var c__23398__auto___23761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___23761,jobs,results,process,async){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___23761,jobs,results,process,async){
return (function (state_23651){
var state_val_23652 = (state_23651[(1)]);
if((state_val_23652 === (1))){
var state_23651__$1 = state_23651;
var statearr_23653_23762 = state_23651__$1;
(statearr_23653_23762[(2)] = null);

(statearr_23653_23762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (2))){
var state_23651__$1 = state_23651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23651__$1,(4),from);
} else {
if((state_val_23652 === (3))){
var inst_23649 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23651__$1,inst_23649);
} else {
if((state_val_23652 === (4))){
var inst_23632 = (state_23651[(7)]);
var inst_23632__$1 = (state_23651[(2)]);
var inst_23633 = (inst_23632__$1 == null);
var state_23651__$1 = (function (){var statearr_23654 = state_23651;
(statearr_23654[(7)] = inst_23632__$1);

return statearr_23654;
})();
if(cljs.core.truth_(inst_23633)){
var statearr_23655_23763 = state_23651__$1;
(statearr_23655_23763[(1)] = (5));

} else {
var statearr_23656_23764 = state_23651__$1;
(statearr_23656_23764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (5))){
var inst_23635 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23651__$1 = state_23651;
var statearr_23657_23765 = state_23651__$1;
(statearr_23657_23765[(2)] = inst_23635);

(statearr_23657_23765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (6))){
var inst_23637 = (state_23651[(8)]);
var inst_23632 = (state_23651[(7)]);
var inst_23637__$1 = cljs.core.async.chan.call(null,(1));
var inst_23638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23639 = [inst_23632,inst_23637__$1];
var inst_23640 = (new cljs.core.PersistentVector(null,2,(5),inst_23638,inst_23639,null));
var state_23651__$1 = (function (){var statearr_23658 = state_23651;
(statearr_23658[(8)] = inst_23637__$1);

return statearr_23658;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23651__$1,(8),jobs,inst_23640);
} else {
if((state_val_23652 === (7))){
var inst_23647 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
var statearr_23659_23766 = state_23651__$1;
(statearr_23659_23766[(2)] = inst_23647);

(statearr_23659_23766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23652 === (8))){
var inst_23637 = (state_23651[(8)]);
var inst_23642 = (state_23651[(2)]);
var state_23651__$1 = (function (){var statearr_23660 = state_23651;
(statearr_23660[(9)] = inst_23642);

return statearr_23660;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23651__$1,(9),results,inst_23637);
} else {
if((state_val_23652 === (9))){
var inst_23644 = (state_23651[(2)]);
var state_23651__$1 = (function (){var statearr_23661 = state_23651;
(statearr_23661[(10)] = inst_23644);

return statearr_23661;
})();
var statearr_23662_23767 = state_23651__$1;
(statearr_23662_23767[(2)] = null);

(statearr_23662_23767[(1)] = (2));


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
});})(c__23398__auto___23761,jobs,results,process,async))
;
return ((function (switch__23303__auto__,c__23398__auto___23761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0 = (function (){
var statearr_23663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__);

(statearr_23663[(1)] = (1));

return statearr_23663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1 = (function (state_23651){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23664){if((e23664 instanceof Object)){
var ex__23307__auto__ = e23664;
var statearr_23665_23768 = state_23651;
(statearr_23665_23768[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23769 = state_23651;
state_23651 = G__23769;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = function(state_23651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1.call(this,state_23651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___23761,jobs,results,process,async))
})();
var state__23400__auto__ = (function (){var statearr_23666 = f__23399__auto__.call(null);
(statearr_23666[(6)] = c__23398__auto___23761);

return statearr_23666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___23761,jobs,results,process,async))
);


var c__23398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto__,jobs,results,process,async){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto__,jobs,results,process,async){
return (function (state_23704){
var state_val_23705 = (state_23704[(1)]);
if((state_val_23705 === (7))){
var inst_23700 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23706_23770 = state_23704__$1;
(statearr_23706_23770[(2)] = inst_23700);

(statearr_23706_23770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (20))){
var state_23704__$1 = state_23704;
var statearr_23707_23771 = state_23704__$1;
(statearr_23707_23771[(2)] = null);

(statearr_23707_23771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (1))){
var state_23704__$1 = state_23704;
var statearr_23708_23772 = state_23704__$1;
(statearr_23708_23772[(2)] = null);

(statearr_23708_23772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (4))){
var inst_23669 = (state_23704[(7)]);
var inst_23669__$1 = (state_23704[(2)]);
var inst_23670 = (inst_23669__$1 == null);
var state_23704__$1 = (function (){var statearr_23709 = state_23704;
(statearr_23709[(7)] = inst_23669__$1);

return statearr_23709;
})();
if(cljs.core.truth_(inst_23670)){
var statearr_23710_23773 = state_23704__$1;
(statearr_23710_23773[(1)] = (5));

} else {
var statearr_23711_23774 = state_23704__$1;
(statearr_23711_23774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (15))){
var inst_23682 = (state_23704[(8)]);
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23704__$1,(18),to,inst_23682);
} else {
if((state_val_23705 === (21))){
var inst_23695 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23712_23775 = state_23704__$1;
(statearr_23712_23775[(2)] = inst_23695);

(statearr_23712_23775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (13))){
var inst_23697 = (state_23704[(2)]);
var state_23704__$1 = (function (){var statearr_23713 = state_23704;
(statearr_23713[(9)] = inst_23697);

return statearr_23713;
})();
var statearr_23714_23776 = state_23704__$1;
(statearr_23714_23776[(2)] = null);

(statearr_23714_23776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (6))){
var inst_23669 = (state_23704[(7)]);
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23704__$1,(11),inst_23669);
} else {
if((state_val_23705 === (17))){
var inst_23690 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
if(cljs.core.truth_(inst_23690)){
var statearr_23715_23777 = state_23704__$1;
(statearr_23715_23777[(1)] = (19));

} else {
var statearr_23716_23778 = state_23704__$1;
(statearr_23716_23778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (3))){
var inst_23702 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23704__$1,inst_23702);
} else {
if((state_val_23705 === (12))){
var inst_23679 = (state_23704[(10)]);
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23704__$1,(14),inst_23679);
} else {
if((state_val_23705 === (2))){
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23704__$1,(4),results);
} else {
if((state_val_23705 === (19))){
var state_23704__$1 = state_23704;
var statearr_23717_23779 = state_23704__$1;
(statearr_23717_23779[(2)] = null);

(statearr_23717_23779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (11))){
var inst_23679 = (state_23704[(2)]);
var state_23704__$1 = (function (){var statearr_23718 = state_23704;
(statearr_23718[(10)] = inst_23679);

return statearr_23718;
})();
var statearr_23719_23780 = state_23704__$1;
(statearr_23719_23780[(2)] = null);

(statearr_23719_23780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (9))){
var state_23704__$1 = state_23704;
var statearr_23720_23781 = state_23704__$1;
(statearr_23720_23781[(2)] = null);

(statearr_23720_23781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (5))){
var state_23704__$1 = state_23704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23721_23782 = state_23704__$1;
(statearr_23721_23782[(1)] = (8));

} else {
var statearr_23722_23783 = state_23704__$1;
(statearr_23722_23783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (14))){
var inst_23682 = (state_23704[(8)]);
var inst_23684 = (state_23704[(11)]);
var inst_23682__$1 = (state_23704[(2)]);
var inst_23683 = (inst_23682__$1 == null);
var inst_23684__$1 = cljs.core.not.call(null,inst_23683);
var state_23704__$1 = (function (){var statearr_23723 = state_23704;
(statearr_23723[(8)] = inst_23682__$1);

(statearr_23723[(11)] = inst_23684__$1);

return statearr_23723;
})();
if(inst_23684__$1){
var statearr_23724_23784 = state_23704__$1;
(statearr_23724_23784[(1)] = (15));

} else {
var statearr_23725_23785 = state_23704__$1;
(statearr_23725_23785[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (16))){
var inst_23684 = (state_23704[(11)]);
var state_23704__$1 = state_23704;
var statearr_23726_23786 = state_23704__$1;
(statearr_23726_23786[(2)] = inst_23684);

(statearr_23726_23786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (10))){
var inst_23676 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23727_23787 = state_23704__$1;
(statearr_23727_23787[(2)] = inst_23676);

(statearr_23727_23787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (18))){
var inst_23687 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23728_23788 = state_23704__$1;
(statearr_23728_23788[(2)] = inst_23687);

(statearr_23728_23788[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (8))){
var inst_23673 = cljs.core.async.close_BANG_.call(null,to);
var state_23704__$1 = state_23704;
var statearr_23729_23789 = state_23704__$1;
(statearr_23729_23789[(2)] = inst_23673);

(statearr_23729_23789[(1)] = (10));


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
});})(c__23398__auto__,jobs,results,process,async))
;
return ((function (switch__23303__auto__,c__23398__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0 = (function (){
var statearr_23730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__);

(statearr_23730[(1)] = (1));

return statearr_23730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1 = (function (state_23704){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23731){if((e23731 instanceof Object)){
var ex__23307__auto__ = e23731;
var statearr_23732_23790 = state_23704;
(statearr_23732_23790[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23791 = state_23704;
state_23704 = G__23791;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__ = function(state_23704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1.call(this,state_23704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto__,jobs,results,process,async))
})();
var state__23400__auto__ = (function (){var statearr_23733 = f__23399__auto__.call(null);
(statearr_23733[(6)] = c__23398__auto__);

return statearr_23733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto__,jobs,results,process,async))
);

return c__23398__auto__;
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
var G__23793 = arguments.length;
switch (G__23793) {
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
var G__23796 = arguments.length;
switch (G__23796) {
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
var G__23799 = arguments.length;
switch (G__23799) {
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
var c__23398__auto___23848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___23848,tc,fc){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___23848,tc,fc){
return (function (state_23825){
var state_val_23826 = (state_23825[(1)]);
if((state_val_23826 === (7))){
var inst_23821 = (state_23825[(2)]);
var state_23825__$1 = state_23825;
var statearr_23827_23849 = state_23825__$1;
(statearr_23827_23849[(2)] = inst_23821);

(statearr_23827_23849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (1))){
var state_23825__$1 = state_23825;
var statearr_23828_23850 = state_23825__$1;
(statearr_23828_23850[(2)] = null);

(statearr_23828_23850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (4))){
var inst_23802 = (state_23825[(7)]);
var inst_23802__$1 = (state_23825[(2)]);
var inst_23803 = (inst_23802__$1 == null);
var state_23825__$1 = (function (){var statearr_23829 = state_23825;
(statearr_23829[(7)] = inst_23802__$1);

return statearr_23829;
})();
if(cljs.core.truth_(inst_23803)){
var statearr_23830_23851 = state_23825__$1;
(statearr_23830_23851[(1)] = (5));

} else {
var statearr_23831_23852 = state_23825__$1;
(statearr_23831_23852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (13))){
var state_23825__$1 = state_23825;
var statearr_23832_23853 = state_23825__$1;
(statearr_23832_23853[(2)] = null);

(statearr_23832_23853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (6))){
var inst_23802 = (state_23825[(7)]);
var inst_23808 = p.call(null,inst_23802);
var state_23825__$1 = state_23825;
if(cljs.core.truth_(inst_23808)){
var statearr_23833_23854 = state_23825__$1;
(statearr_23833_23854[(1)] = (9));

} else {
var statearr_23834_23855 = state_23825__$1;
(statearr_23834_23855[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (3))){
var inst_23823 = (state_23825[(2)]);
var state_23825__$1 = state_23825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23825__$1,inst_23823);
} else {
if((state_val_23826 === (12))){
var state_23825__$1 = state_23825;
var statearr_23835_23856 = state_23825__$1;
(statearr_23835_23856[(2)] = null);

(statearr_23835_23856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (2))){
var state_23825__$1 = state_23825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23825__$1,(4),ch);
} else {
if((state_val_23826 === (11))){
var inst_23802 = (state_23825[(7)]);
var inst_23812 = (state_23825[(2)]);
var state_23825__$1 = state_23825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23825__$1,(8),inst_23812,inst_23802);
} else {
if((state_val_23826 === (9))){
var state_23825__$1 = state_23825;
var statearr_23836_23857 = state_23825__$1;
(statearr_23836_23857[(2)] = tc);

(statearr_23836_23857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (5))){
var inst_23805 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23806 = cljs.core.async.close_BANG_.call(null,fc);
var state_23825__$1 = (function (){var statearr_23837 = state_23825;
(statearr_23837[(8)] = inst_23805);

return statearr_23837;
})();
var statearr_23838_23858 = state_23825__$1;
(statearr_23838_23858[(2)] = inst_23806);

(statearr_23838_23858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (14))){
var inst_23819 = (state_23825[(2)]);
var state_23825__$1 = state_23825;
var statearr_23839_23859 = state_23825__$1;
(statearr_23839_23859[(2)] = inst_23819);

(statearr_23839_23859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (10))){
var state_23825__$1 = state_23825;
var statearr_23840_23860 = state_23825__$1;
(statearr_23840_23860[(2)] = fc);

(statearr_23840_23860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23826 === (8))){
var inst_23814 = (state_23825[(2)]);
var state_23825__$1 = state_23825;
if(cljs.core.truth_(inst_23814)){
var statearr_23841_23861 = state_23825__$1;
(statearr_23841_23861[(1)] = (12));

} else {
var statearr_23842_23862 = state_23825__$1;
(statearr_23842_23862[(1)] = (13));

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
});})(c__23398__auto___23848,tc,fc))
;
return ((function (switch__23303__auto__,c__23398__auto___23848,tc,fc){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_23843 = [null,null,null,null,null,null,null,null,null];
(statearr_23843[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_23843[(1)] = (1));

return statearr_23843;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_23825){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23844){if((e23844 instanceof Object)){
var ex__23307__auto__ = e23844;
var statearr_23845_23863 = state_23825;
(statearr_23845_23863[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23864 = state_23825;
state_23825 = G__23864;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_23825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_23825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___23848,tc,fc))
})();
var state__23400__auto__ = (function (){var statearr_23846 = f__23399__auto__.call(null);
(statearr_23846[(6)] = c__23398__auto___23848);

return statearr_23846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___23848,tc,fc))
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
var c__23398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto__){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto__){
return (function (state_23885){
var state_val_23886 = (state_23885[(1)]);
if((state_val_23886 === (7))){
var inst_23881 = (state_23885[(2)]);
var state_23885__$1 = state_23885;
var statearr_23887_23905 = state_23885__$1;
(statearr_23887_23905[(2)] = inst_23881);

(statearr_23887_23905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23886 === (1))){
var inst_23865 = init;
var state_23885__$1 = (function (){var statearr_23888 = state_23885;
(statearr_23888[(7)] = inst_23865);

return statearr_23888;
})();
var statearr_23889_23906 = state_23885__$1;
(statearr_23889_23906[(2)] = null);

(statearr_23889_23906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23886 === (4))){
var inst_23868 = (state_23885[(8)]);
var inst_23868__$1 = (state_23885[(2)]);
var inst_23869 = (inst_23868__$1 == null);
var state_23885__$1 = (function (){var statearr_23890 = state_23885;
(statearr_23890[(8)] = inst_23868__$1);

return statearr_23890;
})();
if(cljs.core.truth_(inst_23869)){
var statearr_23891_23907 = state_23885__$1;
(statearr_23891_23907[(1)] = (5));

} else {
var statearr_23892_23908 = state_23885__$1;
(statearr_23892_23908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23886 === (6))){
var inst_23868 = (state_23885[(8)]);
var inst_23865 = (state_23885[(7)]);
var inst_23872 = (state_23885[(9)]);
var inst_23872__$1 = f.call(null,inst_23865,inst_23868);
var inst_23873 = cljs.core.reduced_QMARK_.call(null,inst_23872__$1);
var state_23885__$1 = (function (){var statearr_23893 = state_23885;
(statearr_23893[(9)] = inst_23872__$1);

return statearr_23893;
})();
if(inst_23873){
var statearr_23894_23909 = state_23885__$1;
(statearr_23894_23909[(1)] = (8));

} else {
var statearr_23895_23910 = state_23885__$1;
(statearr_23895_23910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23886 === (3))){
var inst_23883 = (state_23885[(2)]);
var state_23885__$1 = state_23885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23885__$1,inst_23883);
} else {
if((state_val_23886 === (2))){
var state_23885__$1 = state_23885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23885__$1,(4),ch);
} else {
if((state_val_23886 === (9))){
var inst_23872 = (state_23885[(9)]);
var inst_23865 = inst_23872;
var state_23885__$1 = (function (){var statearr_23896 = state_23885;
(statearr_23896[(7)] = inst_23865);

return statearr_23896;
})();
var statearr_23897_23911 = state_23885__$1;
(statearr_23897_23911[(2)] = null);

(statearr_23897_23911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23886 === (5))){
var inst_23865 = (state_23885[(7)]);
var state_23885__$1 = state_23885;
var statearr_23898_23912 = state_23885__$1;
(statearr_23898_23912[(2)] = inst_23865);

(statearr_23898_23912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23886 === (10))){
var inst_23879 = (state_23885[(2)]);
var state_23885__$1 = state_23885;
var statearr_23899_23913 = state_23885__$1;
(statearr_23899_23913[(2)] = inst_23879);

(statearr_23899_23913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23886 === (8))){
var inst_23872 = (state_23885[(9)]);
var inst_23875 = cljs.core.deref.call(null,inst_23872);
var state_23885__$1 = state_23885;
var statearr_23900_23914 = state_23885__$1;
(statearr_23900_23914[(2)] = inst_23875);

(statearr_23900_23914[(1)] = (10));


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
});})(c__23398__auto__))
;
return ((function (switch__23303__auto__,c__23398__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23304__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23304__auto____0 = (function (){
var statearr_23901 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23901[(0)] = cljs$core$async$reduce_$_state_machine__23304__auto__);

(statearr_23901[(1)] = (1));

return statearr_23901;
});
var cljs$core$async$reduce_$_state_machine__23304__auto____1 = (function (state_23885){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23902){if((e23902 instanceof Object)){
var ex__23307__auto__ = e23902;
var statearr_23903_23915 = state_23885;
(statearr_23903_23915[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23916 = state_23885;
state_23885 = G__23916;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23304__auto__ = function(state_23885){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23304__auto____1.call(this,state_23885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23304__auto____0;
cljs$core$async$reduce_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23304__auto____1;
return cljs$core$async$reduce_$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto__))
})();
var state__23400__auto__ = (function (){var statearr_23904 = f__23399__auto__.call(null);
(statearr_23904[(6)] = c__23398__auto__);

return statearr_23904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto__))
);

return c__23398__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto__,f__$1){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto__,f__$1){
return (function (state_23922){
var state_val_23923 = (state_23922[(1)]);
if((state_val_23923 === (1))){
var inst_23917 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23922__$1,(2),inst_23917);
} else {
if((state_val_23923 === (2))){
var inst_23919 = (state_23922[(2)]);
var inst_23920 = f__$1.call(null,inst_23919);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else {
return null;
}
}
});})(c__23398__auto__,f__$1))
;
return ((function (switch__23303__auto__,c__23398__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23304__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23304__auto____0 = (function (){
var statearr_23924 = [null,null,null,null,null,null,null];
(statearr_23924[(0)] = cljs$core$async$transduce_$_state_machine__23304__auto__);

(statearr_23924[(1)] = (1));

return statearr_23924;
});
var cljs$core$async$transduce_$_state_machine__23304__auto____1 = (function (state_23922){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23925){if((e23925 instanceof Object)){
var ex__23307__auto__ = e23925;
var statearr_23926_23928 = state_23922;
(statearr_23926_23928[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23929 = state_23922;
state_23922 = G__23929;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23304__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23304__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23304__auto____0;
cljs$core$async$transduce_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23304__auto____1;
return cljs$core$async$transduce_$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto__,f__$1))
})();
var state__23400__auto__ = (function (){var statearr_23927 = f__23399__auto__.call(null);
(statearr_23927[(6)] = c__23398__auto__);

return statearr_23927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto__,f__$1))
);

return c__23398__auto__;
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
var G__23931 = arguments.length;
switch (G__23931) {
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
var c__23398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto__){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto__){
return (function (state_23956){
var state_val_23957 = (state_23956[(1)]);
if((state_val_23957 === (7))){
var inst_23938 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23958_23979 = state_23956__$1;
(statearr_23958_23979[(2)] = inst_23938);

(statearr_23958_23979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (1))){
var inst_23932 = cljs.core.seq.call(null,coll);
var inst_23933 = inst_23932;
var state_23956__$1 = (function (){var statearr_23959 = state_23956;
(statearr_23959[(7)] = inst_23933);

return statearr_23959;
})();
var statearr_23960_23980 = state_23956__$1;
(statearr_23960_23980[(2)] = null);

(statearr_23960_23980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (4))){
var inst_23933 = (state_23956[(7)]);
var inst_23936 = cljs.core.first.call(null,inst_23933);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23956__$1,(7),ch,inst_23936);
} else {
if((state_val_23957 === (13))){
var inst_23950 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23961_23981 = state_23956__$1;
(statearr_23961_23981[(2)] = inst_23950);

(statearr_23961_23981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (6))){
var inst_23941 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23941)){
var statearr_23962_23982 = state_23956__$1;
(statearr_23962_23982[(1)] = (8));

} else {
var statearr_23963_23983 = state_23956__$1;
(statearr_23963_23983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (3))){
var inst_23954 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23956__$1,inst_23954);
} else {
if((state_val_23957 === (12))){
var state_23956__$1 = state_23956;
var statearr_23964_23984 = state_23956__$1;
(statearr_23964_23984[(2)] = null);

(statearr_23964_23984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (2))){
var inst_23933 = (state_23956[(7)]);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23933)){
var statearr_23965_23985 = state_23956__$1;
(statearr_23965_23985[(1)] = (4));

} else {
var statearr_23966_23986 = state_23956__$1;
(statearr_23966_23986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (11))){
var inst_23947 = cljs.core.async.close_BANG_.call(null,ch);
var state_23956__$1 = state_23956;
var statearr_23967_23987 = state_23956__$1;
(statearr_23967_23987[(2)] = inst_23947);

(statearr_23967_23987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (9))){
var state_23956__$1 = state_23956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23968_23988 = state_23956__$1;
(statearr_23968_23988[(1)] = (11));

} else {
var statearr_23969_23989 = state_23956__$1;
(statearr_23969_23989[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (5))){
var inst_23933 = (state_23956[(7)]);
var state_23956__$1 = state_23956;
var statearr_23970_23990 = state_23956__$1;
(statearr_23970_23990[(2)] = inst_23933);

(statearr_23970_23990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (10))){
var inst_23952 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23971_23991 = state_23956__$1;
(statearr_23971_23991[(2)] = inst_23952);

(statearr_23971_23991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (8))){
var inst_23933 = (state_23956[(7)]);
var inst_23943 = cljs.core.next.call(null,inst_23933);
var inst_23933__$1 = inst_23943;
var state_23956__$1 = (function (){var statearr_23972 = state_23956;
(statearr_23972[(7)] = inst_23933__$1);

return statearr_23972;
})();
var statearr_23973_23992 = state_23956__$1;
(statearr_23973_23992[(2)] = null);

(statearr_23973_23992[(1)] = (2));


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
});})(c__23398__auto__))
;
return ((function (switch__23303__auto__,c__23398__auto__){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_23974 = [null,null,null,null,null,null,null,null];
(statearr_23974[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_23974[(1)] = (1));

return statearr_23974;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_23956){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_23956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e23975){if((e23975 instanceof Object)){
var ex__23307__auto__ = e23975;
var statearr_23976_23993 = state_23956;
(statearr_23976_23993[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23994 = state_23956;
state_23956 = G__23994;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_23956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_23956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto__))
})();
var state__23400__auto__ = (function (){var statearr_23977 = f__23399__auto__.call(null);
(statearr_23977[(6)] = c__23398__auto__);

return statearr_23977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto__))
);

return c__23398__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23995 = (function (ch,cs,meta23996){
this.ch = ch;
this.cs = cs;
this.meta23996 = meta23996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23997,meta23996__$1){
var self__ = this;
var _23997__$1 = this;
return (new cljs.core.async.t_cljs$core$async23995(self__.ch,self__.cs,meta23996__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23997){
var self__ = this;
var _23997__$1 = this;
return self__.meta23996;
});})(cs))
;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23995.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23996","meta23996",-1712614493,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23995";

cljs.core.async.t_cljs$core$async23995.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23995");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23995.
 */
cljs.core.async.__GT_t_cljs$core$async23995 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23995(ch__$1,cs__$1,meta23996){
return (new cljs.core.async.t_cljs$core$async23995(ch__$1,cs__$1,meta23996));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23995(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23398__auto___24217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___24217,cs,m,dchan,dctr,done){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___24217,cs,m,dchan,dctr,done){
return (function (state_24132){
var state_val_24133 = (state_24132[(1)]);
if((state_val_24133 === (7))){
var inst_24128 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24134_24218 = state_24132__$1;
(statearr_24134_24218[(2)] = inst_24128);

(statearr_24134_24218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (20))){
var inst_24031 = (state_24132[(7)]);
var inst_24043 = cljs.core.first.call(null,inst_24031);
var inst_24044 = cljs.core.nth.call(null,inst_24043,(0),null);
var inst_24045 = cljs.core.nth.call(null,inst_24043,(1),null);
var state_24132__$1 = (function (){var statearr_24135 = state_24132;
(statearr_24135[(8)] = inst_24044);

return statearr_24135;
})();
if(cljs.core.truth_(inst_24045)){
var statearr_24136_24219 = state_24132__$1;
(statearr_24136_24219[(1)] = (22));

} else {
var statearr_24137_24220 = state_24132__$1;
(statearr_24137_24220[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (27))){
var inst_24073 = (state_24132[(9)]);
var inst_24000 = (state_24132[(10)]);
var inst_24080 = (state_24132[(11)]);
var inst_24075 = (state_24132[(12)]);
var inst_24080__$1 = cljs.core._nth.call(null,inst_24073,inst_24075);
var inst_24081 = cljs.core.async.put_BANG_.call(null,inst_24080__$1,inst_24000,done);
var state_24132__$1 = (function (){var statearr_24138 = state_24132;
(statearr_24138[(11)] = inst_24080__$1);

return statearr_24138;
})();
if(cljs.core.truth_(inst_24081)){
var statearr_24139_24221 = state_24132__$1;
(statearr_24139_24221[(1)] = (30));

} else {
var statearr_24140_24222 = state_24132__$1;
(statearr_24140_24222[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (1))){
var state_24132__$1 = state_24132;
var statearr_24141_24223 = state_24132__$1;
(statearr_24141_24223[(2)] = null);

(statearr_24141_24223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (24))){
var inst_24031 = (state_24132[(7)]);
var inst_24050 = (state_24132[(2)]);
var inst_24051 = cljs.core.next.call(null,inst_24031);
var inst_24009 = inst_24051;
var inst_24010 = null;
var inst_24011 = (0);
var inst_24012 = (0);
var state_24132__$1 = (function (){var statearr_24142 = state_24132;
(statearr_24142[(13)] = inst_24012);

(statearr_24142[(14)] = inst_24050);

(statearr_24142[(15)] = inst_24010);

(statearr_24142[(16)] = inst_24011);

(statearr_24142[(17)] = inst_24009);

return statearr_24142;
})();
var statearr_24143_24224 = state_24132__$1;
(statearr_24143_24224[(2)] = null);

(statearr_24143_24224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (39))){
var state_24132__$1 = state_24132;
var statearr_24147_24225 = state_24132__$1;
(statearr_24147_24225[(2)] = null);

(statearr_24147_24225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (4))){
var inst_24000 = (state_24132[(10)]);
var inst_24000__$1 = (state_24132[(2)]);
var inst_24001 = (inst_24000__$1 == null);
var state_24132__$1 = (function (){var statearr_24148 = state_24132;
(statearr_24148[(10)] = inst_24000__$1);

return statearr_24148;
})();
if(cljs.core.truth_(inst_24001)){
var statearr_24149_24226 = state_24132__$1;
(statearr_24149_24226[(1)] = (5));

} else {
var statearr_24150_24227 = state_24132__$1;
(statearr_24150_24227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (15))){
var inst_24012 = (state_24132[(13)]);
var inst_24010 = (state_24132[(15)]);
var inst_24011 = (state_24132[(16)]);
var inst_24009 = (state_24132[(17)]);
var inst_24027 = (state_24132[(2)]);
var inst_24028 = (inst_24012 + (1));
var tmp24144 = inst_24010;
var tmp24145 = inst_24011;
var tmp24146 = inst_24009;
var inst_24009__$1 = tmp24146;
var inst_24010__$1 = tmp24144;
var inst_24011__$1 = tmp24145;
var inst_24012__$1 = inst_24028;
var state_24132__$1 = (function (){var statearr_24151 = state_24132;
(statearr_24151[(13)] = inst_24012__$1);

(statearr_24151[(18)] = inst_24027);

(statearr_24151[(15)] = inst_24010__$1);

(statearr_24151[(16)] = inst_24011__$1);

(statearr_24151[(17)] = inst_24009__$1);

return statearr_24151;
})();
var statearr_24152_24228 = state_24132__$1;
(statearr_24152_24228[(2)] = null);

(statearr_24152_24228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (21))){
var inst_24054 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24156_24229 = state_24132__$1;
(statearr_24156_24229[(2)] = inst_24054);

(statearr_24156_24229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (31))){
var inst_24080 = (state_24132[(11)]);
var inst_24084 = done.call(null,null);
var inst_24085 = cljs.core.async.untap_STAR_.call(null,m,inst_24080);
var state_24132__$1 = (function (){var statearr_24157 = state_24132;
(statearr_24157[(19)] = inst_24084);

return statearr_24157;
})();
var statearr_24158_24230 = state_24132__$1;
(statearr_24158_24230[(2)] = inst_24085);

(statearr_24158_24230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (32))){
var inst_24073 = (state_24132[(9)]);
var inst_24072 = (state_24132[(20)]);
var inst_24074 = (state_24132[(21)]);
var inst_24075 = (state_24132[(12)]);
var inst_24087 = (state_24132[(2)]);
var inst_24088 = (inst_24075 + (1));
var tmp24153 = inst_24073;
var tmp24154 = inst_24072;
var tmp24155 = inst_24074;
var inst_24072__$1 = tmp24154;
var inst_24073__$1 = tmp24153;
var inst_24074__$1 = tmp24155;
var inst_24075__$1 = inst_24088;
var state_24132__$1 = (function (){var statearr_24159 = state_24132;
(statearr_24159[(9)] = inst_24073__$1);

(statearr_24159[(20)] = inst_24072__$1);

(statearr_24159[(21)] = inst_24074__$1);

(statearr_24159[(22)] = inst_24087);

(statearr_24159[(12)] = inst_24075__$1);

return statearr_24159;
})();
var statearr_24160_24231 = state_24132__$1;
(statearr_24160_24231[(2)] = null);

(statearr_24160_24231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (40))){
var inst_24100 = (state_24132[(23)]);
var inst_24104 = done.call(null,null);
var inst_24105 = cljs.core.async.untap_STAR_.call(null,m,inst_24100);
var state_24132__$1 = (function (){var statearr_24161 = state_24132;
(statearr_24161[(24)] = inst_24104);

return statearr_24161;
})();
var statearr_24162_24232 = state_24132__$1;
(statearr_24162_24232[(2)] = inst_24105);

(statearr_24162_24232[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (33))){
var inst_24091 = (state_24132[(25)]);
var inst_24093 = cljs.core.chunked_seq_QMARK_.call(null,inst_24091);
var state_24132__$1 = state_24132;
if(inst_24093){
var statearr_24163_24233 = state_24132__$1;
(statearr_24163_24233[(1)] = (36));

} else {
var statearr_24164_24234 = state_24132__$1;
(statearr_24164_24234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (13))){
var inst_24021 = (state_24132[(26)]);
var inst_24024 = cljs.core.async.close_BANG_.call(null,inst_24021);
var state_24132__$1 = state_24132;
var statearr_24165_24235 = state_24132__$1;
(statearr_24165_24235[(2)] = inst_24024);

(statearr_24165_24235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (22))){
var inst_24044 = (state_24132[(8)]);
var inst_24047 = cljs.core.async.close_BANG_.call(null,inst_24044);
var state_24132__$1 = state_24132;
var statearr_24166_24236 = state_24132__$1;
(statearr_24166_24236[(2)] = inst_24047);

(statearr_24166_24236[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (36))){
var inst_24091 = (state_24132[(25)]);
var inst_24095 = cljs.core.chunk_first.call(null,inst_24091);
var inst_24096 = cljs.core.chunk_rest.call(null,inst_24091);
var inst_24097 = cljs.core.count.call(null,inst_24095);
var inst_24072 = inst_24096;
var inst_24073 = inst_24095;
var inst_24074 = inst_24097;
var inst_24075 = (0);
var state_24132__$1 = (function (){var statearr_24167 = state_24132;
(statearr_24167[(9)] = inst_24073);

(statearr_24167[(20)] = inst_24072);

(statearr_24167[(21)] = inst_24074);

(statearr_24167[(12)] = inst_24075);

return statearr_24167;
})();
var statearr_24168_24237 = state_24132__$1;
(statearr_24168_24237[(2)] = null);

(statearr_24168_24237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (41))){
var inst_24091 = (state_24132[(25)]);
var inst_24107 = (state_24132[(2)]);
var inst_24108 = cljs.core.next.call(null,inst_24091);
var inst_24072 = inst_24108;
var inst_24073 = null;
var inst_24074 = (0);
var inst_24075 = (0);
var state_24132__$1 = (function (){var statearr_24169 = state_24132;
(statearr_24169[(9)] = inst_24073);

(statearr_24169[(20)] = inst_24072);

(statearr_24169[(27)] = inst_24107);

(statearr_24169[(21)] = inst_24074);

(statearr_24169[(12)] = inst_24075);

return statearr_24169;
})();
var statearr_24170_24238 = state_24132__$1;
(statearr_24170_24238[(2)] = null);

(statearr_24170_24238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (43))){
var state_24132__$1 = state_24132;
var statearr_24171_24239 = state_24132__$1;
(statearr_24171_24239[(2)] = null);

(statearr_24171_24239[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (29))){
var inst_24116 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24172_24240 = state_24132__$1;
(statearr_24172_24240[(2)] = inst_24116);

(statearr_24172_24240[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (44))){
var inst_24125 = (state_24132[(2)]);
var state_24132__$1 = (function (){var statearr_24173 = state_24132;
(statearr_24173[(28)] = inst_24125);

return statearr_24173;
})();
var statearr_24174_24241 = state_24132__$1;
(statearr_24174_24241[(2)] = null);

(statearr_24174_24241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (6))){
var inst_24064 = (state_24132[(29)]);
var inst_24063 = cljs.core.deref.call(null,cs);
var inst_24064__$1 = cljs.core.keys.call(null,inst_24063);
var inst_24065 = cljs.core.count.call(null,inst_24064__$1);
var inst_24066 = cljs.core.reset_BANG_.call(null,dctr,inst_24065);
var inst_24071 = cljs.core.seq.call(null,inst_24064__$1);
var inst_24072 = inst_24071;
var inst_24073 = null;
var inst_24074 = (0);
var inst_24075 = (0);
var state_24132__$1 = (function (){var statearr_24175 = state_24132;
(statearr_24175[(9)] = inst_24073);

(statearr_24175[(20)] = inst_24072);

(statearr_24175[(29)] = inst_24064__$1);

(statearr_24175[(21)] = inst_24074);

(statearr_24175[(30)] = inst_24066);

(statearr_24175[(12)] = inst_24075);

return statearr_24175;
})();
var statearr_24176_24242 = state_24132__$1;
(statearr_24176_24242[(2)] = null);

(statearr_24176_24242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (28))){
var inst_24072 = (state_24132[(20)]);
var inst_24091 = (state_24132[(25)]);
var inst_24091__$1 = cljs.core.seq.call(null,inst_24072);
var state_24132__$1 = (function (){var statearr_24177 = state_24132;
(statearr_24177[(25)] = inst_24091__$1);

return statearr_24177;
})();
if(inst_24091__$1){
var statearr_24178_24243 = state_24132__$1;
(statearr_24178_24243[(1)] = (33));

} else {
var statearr_24179_24244 = state_24132__$1;
(statearr_24179_24244[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (25))){
var inst_24074 = (state_24132[(21)]);
var inst_24075 = (state_24132[(12)]);
var inst_24077 = (inst_24075 < inst_24074);
var inst_24078 = inst_24077;
var state_24132__$1 = state_24132;
if(cljs.core.truth_(inst_24078)){
var statearr_24180_24245 = state_24132__$1;
(statearr_24180_24245[(1)] = (27));

} else {
var statearr_24181_24246 = state_24132__$1;
(statearr_24181_24246[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (34))){
var state_24132__$1 = state_24132;
var statearr_24182_24247 = state_24132__$1;
(statearr_24182_24247[(2)] = null);

(statearr_24182_24247[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (17))){
var state_24132__$1 = state_24132;
var statearr_24183_24248 = state_24132__$1;
(statearr_24183_24248[(2)] = null);

(statearr_24183_24248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (3))){
var inst_24130 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24132__$1,inst_24130);
} else {
if((state_val_24133 === (12))){
var inst_24059 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24184_24249 = state_24132__$1;
(statearr_24184_24249[(2)] = inst_24059);

(statearr_24184_24249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (2))){
var state_24132__$1 = state_24132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24132__$1,(4),ch);
} else {
if((state_val_24133 === (23))){
var state_24132__$1 = state_24132;
var statearr_24185_24250 = state_24132__$1;
(statearr_24185_24250[(2)] = null);

(statearr_24185_24250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (35))){
var inst_24114 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24186_24251 = state_24132__$1;
(statearr_24186_24251[(2)] = inst_24114);

(statearr_24186_24251[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (19))){
var inst_24031 = (state_24132[(7)]);
var inst_24035 = cljs.core.chunk_first.call(null,inst_24031);
var inst_24036 = cljs.core.chunk_rest.call(null,inst_24031);
var inst_24037 = cljs.core.count.call(null,inst_24035);
var inst_24009 = inst_24036;
var inst_24010 = inst_24035;
var inst_24011 = inst_24037;
var inst_24012 = (0);
var state_24132__$1 = (function (){var statearr_24187 = state_24132;
(statearr_24187[(13)] = inst_24012);

(statearr_24187[(15)] = inst_24010);

(statearr_24187[(16)] = inst_24011);

(statearr_24187[(17)] = inst_24009);

return statearr_24187;
})();
var statearr_24188_24252 = state_24132__$1;
(statearr_24188_24252[(2)] = null);

(statearr_24188_24252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (11))){
var inst_24031 = (state_24132[(7)]);
var inst_24009 = (state_24132[(17)]);
var inst_24031__$1 = cljs.core.seq.call(null,inst_24009);
var state_24132__$1 = (function (){var statearr_24189 = state_24132;
(statearr_24189[(7)] = inst_24031__$1);

return statearr_24189;
})();
if(inst_24031__$1){
var statearr_24190_24253 = state_24132__$1;
(statearr_24190_24253[(1)] = (16));

} else {
var statearr_24191_24254 = state_24132__$1;
(statearr_24191_24254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (9))){
var inst_24061 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24192_24255 = state_24132__$1;
(statearr_24192_24255[(2)] = inst_24061);

(statearr_24192_24255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (5))){
var inst_24007 = cljs.core.deref.call(null,cs);
var inst_24008 = cljs.core.seq.call(null,inst_24007);
var inst_24009 = inst_24008;
var inst_24010 = null;
var inst_24011 = (0);
var inst_24012 = (0);
var state_24132__$1 = (function (){var statearr_24193 = state_24132;
(statearr_24193[(13)] = inst_24012);

(statearr_24193[(15)] = inst_24010);

(statearr_24193[(16)] = inst_24011);

(statearr_24193[(17)] = inst_24009);

return statearr_24193;
})();
var statearr_24194_24256 = state_24132__$1;
(statearr_24194_24256[(2)] = null);

(statearr_24194_24256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (14))){
var state_24132__$1 = state_24132;
var statearr_24195_24257 = state_24132__$1;
(statearr_24195_24257[(2)] = null);

(statearr_24195_24257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (45))){
var inst_24122 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24196_24258 = state_24132__$1;
(statearr_24196_24258[(2)] = inst_24122);

(statearr_24196_24258[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (26))){
var inst_24064 = (state_24132[(29)]);
var inst_24118 = (state_24132[(2)]);
var inst_24119 = cljs.core.seq.call(null,inst_24064);
var state_24132__$1 = (function (){var statearr_24197 = state_24132;
(statearr_24197[(31)] = inst_24118);

return statearr_24197;
})();
if(inst_24119){
var statearr_24198_24259 = state_24132__$1;
(statearr_24198_24259[(1)] = (42));

} else {
var statearr_24199_24260 = state_24132__$1;
(statearr_24199_24260[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (16))){
var inst_24031 = (state_24132[(7)]);
var inst_24033 = cljs.core.chunked_seq_QMARK_.call(null,inst_24031);
var state_24132__$1 = state_24132;
if(inst_24033){
var statearr_24200_24261 = state_24132__$1;
(statearr_24200_24261[(1)] = (19));

} else {
var statearr_24201_24262 = state_24132__$1;
(statearr_24201_24262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (38))){
var inst_24111 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24202_24263 = state_24132__$1;
(statearr_24202_24263[(2)] = inst_24111);

(statearr_24202_24263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (30))){
var state_24132__$1 = state_24132;
var statearr_24203_24264 = state_24132__$1;
(statearr_24203_24264[(2)] = null);

(statearr_24203_24264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (10))){
var inst_24012 = (state_24132[(13)]);
var inst_24010 = (state_24132[(15)]);
var inst_24020 = cljs.core._nth.call(null,inst_24010,inst_24012);
var inst_24021 = cljs.core.nth.call(null,inst_24020,(0),null);
var inst_24022 = cljs.core.nth.call(null,inst_24020,(1),null);
var state_24132__$1 = (function (){var statearr_24204 = state_24132;
(statearr_24204[(26)] = inst_24021);

return statearr_24204;
})();
if(cljs.core.truth_(inst_24022)){
var statearr_24205_24265 = state_24132__$1;
(statearr_24205_24265[(1)] = (13));

} else {
var statearr_24206_24266 = state_24132__$1;
(statearr_24206_24266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (18))){
var inst_24057 = (state_24132[(2)]);
var state_24132__$1 = state_24132;
var statearr_24207_24267 = state_24132__$1;
(statearr_24207_24267[(2)] = inst_24057);

(statearr_24207_24267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (42))){
var state_24132__$1 = state_24132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24132__$1,(45),dchan);
} else {
if((state_val_24133 === (37))){
var inst_24000 = (state_24132[(10)]);
var inst_24091 = (state_24132[(25)]);
var inst_24100 = (state_24132[(23)]);
var inst_24100__$1 = cljs.core.first.call(null,inst_24091);
var inst_24101 = cljs.core.async.put_BANG_.call(null,inst_24100__$1,inst_24000,done);
var state_24132__$1 = (function (){var statearr_24208 = state_24132;
(statearr_24208[(23)] = inst_24100__$1);

return statearr_24208;
})();
if(cljs.core.truth_(inst_24101)){
var statearr_24209_24268 = state_24132__$1;
(statearr_24209_24268[(1)] = (39));

} else {
var statearr_24210_24269 = state_24132__$1;
(statearr_24210_24269[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24133 === (8))){
var inst_24012 = (state_24132[(13)]);
var inst_24011 = (state_24132[(16)]);
var inst_24014 = (inst_24012 < inst_24011);
var inst_24015 = inst_24014;
var state_24132__$1 = state_24132;
if(cljs.core.truth_(inst_24015)){
var statearr_24211_24270 = state_24132__$1;
(statearr_24211_24270[(1)] = (10));

} else {
var statearr_24212_24271 = state_24132__$1;
(statearr_24212_24271[(1)] = (11));

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
});})(c__23398__auto___24217,cs,m,dchan,dctr,done))
;
return ((function (switch__23303__auto__,c__23398__auto___24217,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23304__auto__ = null;
var cljs$core$async$mult_$_state_machine__23304__auto____0 = (function (){
var statearr_24213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24213[(0)] = cljs$core$async$mult_$_state_machine__23304__auto__);

(statearr_24213[(1)] = (1));

return statearr_24213;
});
var cljs$core$async$mult_$_state_machine__23304__auto____1 = (function (state_24132){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_24132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e24214){if((e24214 instanceof Object)){
var ex__23307__auto__ = e24214;
var statearr_24215_24272 = state_24132;
(statearr_24215_24272[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24273 = state_24132;
state_24132 = G__24273;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23304__auto__ = function(state_24132){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23304__auto____1.call(this,state_24132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23304__auto____0;
cljs$core$async$mult_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23304__auto____1;
return cljs$core$async$mult_$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___24217,cs,m,dchan,dctr,done))
})();
var state__23400__auto__ = (function (){var statearr_24216 = f__23399__auto__.call(null);
(statearr_24216[(6)] = c__23398__auto___24217);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___24217,cs,m,dchan,dctr,done))
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
var G__24275 = arguments.length;
switch (G__24275) {
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
var len__4730__auto___24287 = arguments.length;
var i__4731__auto___24288 = (0);
while(true){
if((i__4731__auto___24288 < len__4730__auto___24287)){
args__4736__auto__.push((arguments[i__4731__auto___24288]));

var G__24289 = (i__4731__auto___24288 + (1));
i__4731__auto___24288 = G__24289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24281){
var map__24282 = p__24281;
var map__24282__$1 = (((((!((map__24282 == null))))?(((((map__24282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24282):map__24282);
var opts = map__24282__$1;
var statearr_24284_24290 = state;
(statearr_24284_24290[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24282,map__24282__$1,opts){
return (function (val){
var statearr_24285_24291 = state;
(statearr_24285_24291[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24282,map__24282__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24286_24292 = state;
(statearr_24286_24292[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24277){
var G__24278 = cljs.core.first.call(null,seq24277);
var seq24277__$1 = cljs.core.next.call(null,seq24277);
var G__24279 = cljs.core.first.call(null,seq24277__$1);
var seq24277__$2 = cljs.core.next.call(null,seq24277__$1);
var G__24280 = cljs.core.first.call(null,seq24277__$2);
var seq24277__$3 = cljs.core.next.call(null,seq24277__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24278,G__24279,G__24280,seq24277__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24293 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24294){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24294 = meta24294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24295,meta24294__$1){
var self__ = this;
var _24295__$1 = this;
return (new cljs.core.async.t_cljs$core$async24293(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24294__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24295){
var self__ = this;
var _24295__$1 = this;
return self__.meta24294;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24293.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24294","meta24294",784114803,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24293";

cljs.core.async.t_cljs$core$async24293.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24293");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24293.
 */
cljs.core.async.__GT_t_cljs$core$async24293 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24293(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24294){
return (new cljs.core.async.t_cljs$core$async24293(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24294));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24293(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23398__auto___24457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24397){
var state_val_24398 = (state_24397[(1)]);
if((state_val_24398 === (7))){
var inst_24312 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24399_24458 = state_24397__$1;
(statearr_24399_24458[(2)] = inst_24312);

(statearr_24399_24458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (20))){
var inst_24324 = (state_24397[(7)]);
var state_24397__$1 = state_24397;
var statearr_24400_24459 = state_24397__$1;
(statearr_24400_24459[(2)] = inst_24324);

(statearr_24400_24459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (27))){
var state_24397__$1 = state_24397;
var statearr_24401_24460 = state_24397__$1;
(statearr_24401_24460[(2)] = null);

(statearr_24401_24460[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (1))){
var inst_24299 = (state_24397[(8)]);
var inst_24299__$1 = calc_state.call(null);
var inst_24301 = (inst_24299__$1 == null);
var inst_24302 = cljs.core.not.call(null,inst_24301);
var state_24397__$1 = (function (){var statearr_24402 = state_24397;
(statearr_24402[(8)] = inst_24299__$1);

return statearr_24402;
})();
if(inst_24302){
var statearr_24403_24461 = state_24397__$1;
(statearr_24403_24461[(1)] = (2));

} else {
var statearr_24404_24462 = state_24397__$1;
(statearr_24404_24462[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (24))){
var inst_24357 = (state_24397[(9)]);
var inst_24371 = (state_24397[(10)]);
var inst_24348 = (state_24397[(11)]);
var inst_24371__$1 = inst_24348.call(null,inst_24357);
var state_24397__$1 = (function (){var statearr_24405 = state_24397;
(statearr_24405[(10)] = inst_24371__$1);

return statearr_24405;
})();
if(cljs.core.truth_(inst_24371__$1)){
var statearr_24406_24463 = state_24397__$1;
(statearr_24406_24463[(1)] = (29));

} else {
var statearr_24407_24464 = state_24397__$1;
(statearr_24407_24464[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (4))){
var inst_24315 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24315)){
var statearr_24408_24465 = state_24397__$1;
(statearr_24408_24465[(1)] = (8));

} else {
var statearr_24409_24466 = state_24397__$1;
(statearr_24409_24466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (15))){
var inst_24342 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24342)){
var statearr_24410_24467 = state_24397__$1;
(statearr_24410_24467[(1)] = (19));

} else {
var statearr_24411_24468 = state_24397__$1;
(statearr_24411_24468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (21))){
var inst_24347 = (state_24397[(12)]);
var inst_24347__$1 = (state_24397[(2)]);
var inst_24348 = cljs.core.get.call(null,inst_24347__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24349 = cljs.core.get.call(null,inst_24347__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24350 = cljs.core.get.call(null,inst_24347__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24397__$1 = (function (){var statearr_24412 = state_24397;
(statearr_24412[(12)] = inst_24347__$1);

(statearr_24412[(13)] = inst_24349);

(statearr_24412[(11)] = inst_24348);

return statearr_24412;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24397__$1,(22),inst_24350);
} else {
if((state_val_24398 === (31))){
var inst_24379 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24379)){
var statearr_24413_24469 = state_24397__$1;
(statearr_24413_24469[(1)] = (32));

} else {
var statearr_24414_24470 = state_24397__$1;
(statearr_24414_24470[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (32))){
var inst_24356 = (state_24397[(14)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24397__$1,(35),out,inst_24356);
} else {
if((state_val_24398 === (33))){
var inst_24347 = (state_24397[(12)]);
var inst_24324 = inst_24347;
var state_24397__$1 = (function (){var statearr_24415 = state_24397;
(statearr_24415[(7)] = inst_24324);

return statearr_24415;
})();
var statearr_24416_24471 = state_24397__$1;
(statearr_24416_24471[(2)] = null);

(statearr_24416_24471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (13))){
var inst_24324 = (state_24397[(7)]);
var inst_24331 = inst_24324.cljs$lang$protocol_mask$partition0$;
var inst_24332 = (inst_24331 & (64));
var inst_24333 = inst_24324.cljs$core$ISeq$;
var inst_24334 = (cljs.core.PROTOCOL_SENTINEL === inst_24333);
var inst_24335 = ((inst_24332) || (inst_24334));
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24335)){
var statearr_24417_24472 = state_24397__$1;
(statearr_24417_24472[(1)] = (16));

} else {
var statearr_24418_24473 = state_24397__$1;
(statearr_24418_24473[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (22))){
var inst_24356 = (state_24397[(14)]);
var inst_24357 = (state_24397[(9)]);
var inst_24355 = (state_24397[(2)]);
var inst_24356__$1 = cljs.core.nth.call(null,inst_24355,(0),null);
var inst_24357__$1 = cljs.core.nth.call(null,inst_24355,(1),null);
var inst_24358 = (inst_24356__$1 == null);
var inst_24359 = cljs.core._EQ_.call(null,inst_24357__$1,change);
var inst_24360 = ((inst_24358) || (inst_24359));
var state_24397__$1 = (function (){var statearr_24419 = state_24397;
(statearr_24419[(14)] = inst_24356__$1);

(statearr_24419[(9)] = inst_24357__$1);

return statearr_24419;
})();
if(cljs.core.truth_(inst_24360)){
var statearr_24420_24474 = state_24397__$1;
(statearr_24420_24474[(1)] = (23));

} else {
var statearr_24421_24475 = state_24397__$1;
(statearr_24421_24475[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (36))){
var inst_24347 = (state_24397[(12)]);
var inst_24324 = inst_24347;
var state_24397__$1 = (function (){var statearr_24422 = state_24397;
(statearr_24422[(7)] = inst_24324);

return statearr_24422;
})();
var statearr_24423_24476 = state_24397__$1;
(statearr_24423_24476[(2)] = null);

(statearr_24423_24476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (29))){
var inst_24371 = (state_24397[(10)]);
var state_24397__$1 = state_24397;
var statearr_24424_24477 = state_24397__$1;
(statearr_24424_24477[(2)] = inst_24371);

(statearr_24424_24477[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (6))){
var state_24397__$1 = state_24397;
var statearr_24425_24478 = state_24397__$1;
(statearr_24425_24478[(2)] = false);

(statearr_24425_24478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (28))){
var inst_24367 = (state_24397[(2)]);
var inst_24368 = calc_state.call(null);
var inst_24324 = inst_24368;
var state_24397__$1 = (function (){var statearr_24426 = state_24397;
(statearr_24426[(7)] = inst_24324);

(statearr_24426[(15)] = inst_24367);

return statearr_24426;
})();
var statearr_24427_24479 = state_24397__$1;
(statearr_24427_24479[(2)] = null);

(statearr_24427_24479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (25))){
var inst_24393 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24428_24480 = state_24397__$1;
(statearr_24428_24480[(2)] = inst_24393);

(statearr_24428_24480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (34))){
var inst_24391 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24429_24481 = state_24397__$1;
(statearr_24429_24481[(2)] = inst_24391);

(statearr_24429_24481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (17))){
var state_24397__$1 = state_24397;
var statearr_24430_24482 = state_24397__$1;
(statearr_24430_24482[(2)] = false);

(statearr_24430_24482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (3))){
var state_24397__$1 = state_24397;
var statearr_24431_24483 = state_24397__$1;
(statearr_24431_24483[(2)] = false);

(statearr_24431_24483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (12))){
var inst_24395 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24397__$1,inst_24395);
} else {
if((state_val_24398 === (2))){
var inst_24299 = (state_24397[(8)]);
var inst_24304 = inst_24299.cljs$lang$protocol_mask$partition0$;
var inst_24305 = (inst_24304 & (64));
var inst_24306 = inst_24299.cljs$core$ISeq$;
var inst_24307 = (cljs.core.PROTOCOL_SENTINEL === inst_24306);
var inst_24308 = ((inst_24305) || (inst_24307));
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24308)){
var statearr_24432_24484 = state_24397__$1;
(statearr_24432_24484[(1)] = (5));

} else {
var statearr_24433_24485 = state_24397__$1;
(statearr_24433_24485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (23))){
var inst_24356 = (state_24397[(14)]);
var inst_24362 = (inst_24356 == null);
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24362)){
var statearr_24434_24486 = state_24397__$1;
(statearr_24434_24486[(1)] = (26));

} else {
var statearr_24435_24487 = state_24397__$1;
(statearr_24435_24487[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (35))){
var inst_24382 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24382)){
var statearr_24436_24488 = state_24397__$1;
(statearr_24436_24488[(1)] = (36));

} else {
var statearr_24437_24489 = state_24397__$1;
(statearr_24437_24489[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (19))){
var inst_24324 = (state_24397[(7)]);
var inst_24344 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24324);
var state_24397__$1 = state_24397;
var statearr_24438_24490 = state_24397__$1;
(statearr_24438_24490[(2)] = inst_24344);

(statearr_24438_24490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (11))){
var inst_24324 = (state_24397[(7)]);
var inst_24328 = (inst_24324 == null);
var inst_24329 = cljs.core.not.call(null,inst_24328);
var state_24397__$1 = state_24397;
if(inst_24329){
var statearr_24439_24491 = state_24397__$1;
(statearr_24439_24491[(1)] = (13));

} else {
var statearr_24440_24492 = state_24397__$1;
(statearr_24440_24492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (9))){
var inst_24299 = (state_24397[(8)]);
var state_24397__$1 = state_24397;
var statearr_24441_24493 = state_24397__$1;
(statearr_24441_24493[(2)] = inst_24299);

(statearr_24441_24493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (5))){
var state_24397__$1 = state_24397;
var statearr_24442_24494 = state_24397__$1;
(statearr_24442_24494[(2)] = true);

(statearr_24442_24494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (14))){
var state_24397__$1 = state_24397;
var statearr_24443_24495 = state_24397__$1;
(statearr_24443_24495[(2)] = false);

(statearr_24443_24495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (26))){
var inst_24357 = (state_24397[(9)]);
var inst_24364 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24357);
var state_24397__$1 = state_24397;
var statearr_24444_24496 = state_24397__$1;
(statearr_24444_24496[(2)] = inst_24364);

(statearr_24444_24496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (16))){
var state_24397__$1 = state_24397;
var statearr_24445_24497 = state_24397__$1;
(statearr_24445_24497[(2)] = true);

(statearr_24445_24497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (38))){
var inst_24387 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24446_24498 = state_24397__$1;
(statearr_24446_24498[(2)] = inst_24387);

(statearr_24446_24498[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (30))){
var inst_24349 = (state_24397[(13)]);
var inst_24357 = (state_24397[(9)]);
var inst_24348 = (state_24397[(11)]);
var inst_24374 = cljs.core.empty_QMARK_.call(null,inst_24348);
var inst_24375 = inst_24349.call(null,inst_24357);
var inst_24376 = cljs.core.not.call(null,inst_24375);
var inst_24377 = ((inst_24374) && (inst_24376));
var state_24397__$1 = state_24397;
var statearr_24447_24499 = state_24397__$1;
(statearr_24447_24499[(2)] = inst_24377);

(statearr_24447_24499[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (10))){
var inst_24299 = (state_24397[(8)]);
var inst_24320 = (state_24397[(2)]);
var inst_24321 = cljs.core.get.call(null,inst_24320,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24322 = cljs.core.get.call(null,inst_24320,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24323 = cljs.core.get.call(null,inst_24320,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24324 = inst_24299;
var state_24397__$1 = (function (){var statearr_24448 = state_24397;
(statearr_24448[(7)] = inst_24324);

(statearr_24448[(16)] = inst_24322);

(statearr_24448[(17)] = inst_24321);

(statearr_24448[(18)] = inst_24323);

return statearr_24448;
})();
var statearr_24449_24500 = state_24397__$1;
(statearr_24449_24500[(2)] = null);

(statearr_24449_24500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (18))){
var inst_24339 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24450_24501 = state_24397__$1;
(statearr_24450_24501[(2)] = inst_24339);

(statearr_24450_24501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (37))){
var state_24397__$1 = state_24397;
var statearr_24451_24502 = state_24397__$1;
(statearr_24451_24502[(2)] = null);

(statearr_24451_24502[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24398 === (8))){
var inst_24299 = (state_24397[(8)]);
var inst_24317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24299);
var state_24397__$1 = state_24397;
var statearr_24452_24503 = state_24397__$1;
(statearr_24452_24503[(2)] = inst_24317);

(statearr_24452_24503[(1)] = (10));


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
});})(c__23398__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23303__auto__,c__23398__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23304__auto__ = null;
var cljs$core$async$mix_$_state_machine__23304__auto____0 = (function (){
var statearr_24453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24453[(0)] = cljs$core$async$mix_$_state_machine__23304__auto__);

(statearr_24453[(1)] = (1));

return statearr_24453;
});
var cljs$core$async$mix_$_state_machine__23304__auto____1 = (function (state_24397){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_24397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e24454){if((e24454 instanceof Object)){
var ex__23307__auto__ = e24454;
var statearr_24455_24504 = state_24397;
(statearr_24455_24504[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24505 = state_24397;
state_24397 = G__24505;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23304__auto__ = function(state_24397){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23304__auto____1.call(this,state_24397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23304__auto____0;
cljs$core$async$mix_$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23304__auto____1;
return cljs$core$async$mix_$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23400__auto__ = (function (){var statearr_24456 = f__23399__auto__.call(null);
(statearr_24456[(6)] = c__23398__auto___24457);

return statearr_24456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___24457,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24507 = arguments.length;
switch (G__24507) {
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
var G__24511 = arguments.length;
switch (G__24511) {
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
return (function (p1__24509_SHARP_){
if(cljs.core.truth_(p1__24509_SHARP_.call(null,topic))){
return p1__24509_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24509_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24512 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24513){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24513 = meta24513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24514,meta24513__$1){
var self__ = this;
var _24514__$1 = this;
return (new cljs.core.async.t_cljs$core$async24512(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24513__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24514){
var self__ = this;
var _24514__$1 = this;
return self__.meta24513;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24512.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24513","meta24513",-658588169,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24512";

cljs.core.async.t_cljs$core$async24512.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24512");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24512.
 */
cljs.core.async.__GT_t_cljs$core$async24512 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24512(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24513){
return (new cljs.core.async.t_cljs$core$async24512(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24513));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24512(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23398__auto___24632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___24632,mults,ensure_mult,p){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___24632,mults,ensure_mult,p){
return (function (state_24586){
var state_val_24587 = (state_24586[(1)]);
if((state_val_24587 === (7))){
var inst_24582 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
var statearr_24588_24633 = state_24586__$1;
(statearr_24588_24633[(2)] = inst_24582);

(statearr_24588_24633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (20))){
var state_24586__$1 = state_24586;
var statearr_24589_24634 = state_24586__$1;
(statearr_24589_24634[(2)] = null);

(statearr_24589_24634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (1))){
var state_24586__$1 = state_24586;
var statearr_24590_24635 = state_24586__$1;
(statearr_24590_24635[(2)] = null);

(statearr_24590_24635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (24))){
var inst_24565 = (state_24586[(7)]);
var inst_24574 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24565);
var state_24586__$1 = state_24586;
var statearr_24591_24636 = state_24586__$1;
(statearr_24591_24636[(2)] = inst_24574);

(statearr_24591_24636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (4))){
var inst_24517 = (state_24586[(8)]);
var inst_24517__$1 = (state_24586[(2)]);
var inst_24518 = (inst_24517__$1 == null);
var state_24586__$1 = (function (){var statearr_24592 = state_24586;
(statearr_24592[(8)] = inst_24517__$1);

return statearr_24592;
})();
if(cljs.core.truth_(inst_24518)){
var statearr_24593_24637 = state_24586__$1;
(statearr_24593_24637[(1)] = (5));

} else {
var statearr_24594_24638 = state_24586__$1;
(statearr_24594_24638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (15))){
var inst_24559 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
var statearr_24595_24639 = state_24586__$1;
(statearr_24595_24639[(2)] = inst_24559);

(statearr_24595_24639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (21))){
var inst_24579 = (state_24586[(2)]);
var state_24586__$1 = (function (){var statearr_24596 = state_24586;
(statearr_24596[(9)] = inst_24579);

return statearr_24596;
})();
var statearr_24597_24640 = state_24586__$1;
(statearr_24597_24640[(2)] = null);

(statearr_24597_24640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (13))){
var inst_24541 = (state_24586[(10)]);
var inst_24543 = cljs.core.chunked_seq_QMARK_.call(null,inst_24541);
var state_24586__$1 = state_24586;
if(inst_24543){
var statearr_24598_24641 = state_24586__$1;
(statearr_24598_24641[(1)] = (16));

} else {
var statearr_24599_24642 = state_24586__$1;
(statearr_24599_24642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (22))){
var inst_24571 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
if(cljs.core.truth_(inst_24571)){
var statearr_24600_24643 = state_24586__$1;
(statearr_24600_24643[(1)] = (23));

} else {
var statearr_24601_24644 = state_24586__$1;
(statearr_24601_24644[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (6))){
var inst_24567 = (state_24586[(11)]);
var inst_24517 = (state_24586[(8)]);
var inst_24565 = (state_24586[(7)]);
var inst_24565__$1 = topic_fn.call(null,inst_24517);
var inst_24566 = cljs.core.deref.call(null,mults);
var inst_24567__$1 = cljs.core.get.call(null,inst_24566,inst_24565__$1);
var state_24586__$1 = (function (){var statearr_24602 = state_24586;
(statearr_24602[(11)] = inst_24567__$1);

(statearr_24602[(7)] = inst_24565__$1);

return statearr_24602;
})();
if(cljs.core.truth_(inst_24567__$1)){
var statearr_24603_24645 = state_24586__$1;
(statearr_24603_24645[(1)] = (19));

} else {
var statearr_24604_24646 = state_24586__$1;
(statearr_24604_24646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (25))){
var inst_24576 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
var statearr_24605_24647 = state_24586__$1;
(statearr_24605_24647[(2)] = inst_24576);

(statearr_24605_24647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (17))){
var inst_24541 = (state_24586[(10)]);
var inst_24550 = cljs.core.first.call(null,inst_24541);
var inst_24551 = cljs.core.async.muxch_STAR_.call(null,inst_24550);
var inst_24552 = cljs.core.async.close_BANG_.call(null,inst_24551);
var inst_24553 = cljs.core.next.call(null,inst_24541);
var inst_24527 = inst_24553;
var inst_24528 = null;
var inst_24529 = (0);
var inst_24530 = (0);
var state_24586__$1 = (function (){var statearr_24606 = state_24586;
(statearr_24606[(12)] = inst_24528);

(statearr_24606[(13)] = inst_24552);

(statearr_24606[(14)] = inst_24527);

(statearr_24606[(15)] = inst_24530);

(statearr_24606[(16)] = inst_24529);

return statearr_24606;
})();
var statearr_24607_24648 = state_24586__$1;
(statearr_24607_24648[(2)] = null);

(statearr_24607_24648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (3))){
var inst_24584 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24586__$1,inst_24584);
} else {
if((state_val_24587 === (12))){
var inst_24561 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
var statearr_24608_24649 = state_24586__$1;
(statearr_24608_24649[(2)] = inst_24561);

(statearr_24608_24649[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (2))){
var state_24586__$1 = state_24586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24586__$1,(4),ch);
} else {
if((state_val_24587 === (23))){
var state_24586__$1 = state_24586;
var statearr_24609_24650 = state_24586__$1;
(statearr_24609_24650[(2)] = null);

(statearr_24609_24650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (19))){
var inst_24567 = (state_24586[(11)]);
var inst_24517 = (state_24586[(8)]);
var inst_24569 = cljs.core.async.muxch_STAR_.call(null,inst_24567);
var state_24586__$1 = state_24586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24586__$1,(22),inst_24569,inst_24517);
} else {
if((state_val_24587 === (11))){
var inst_24527 = (state_24586[(14)]);
var inst_24541 = (state_24586[(10)]);
var inst_24541__$1 = cljs.core.seq.call(null,inst_24527);
var state_24586__$1 = (function (){var statearr_24610 = state_24586;
(statearr_24610[(10)] = inst_24541__$1);

return statearr_24610;
})();
if(inst_24541__$1){
var statearr_24611_24651 = state_24586__$1;
(statearr_24611_24651[(1)] = (13));

} else {
var statearr_24612_24652 = state_24586__$1;
(statearr_24612_24652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (9))){
var inst_24563 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
var statearr_24613_24653 = state_24586__$1;
(statearr_24613_24653[(2)] = inst_24563);

(statearr_24613_24653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (5))){
var inst_24524 = cljs.core.deref.call(null,mults);
var inst_24525 = cljs.core.vals.call(null,inst_24524);
var inst_24526 = cljs.core.seq.call(null,inst_24525);
var inst_24527 = inst_24526;
var inst_24528 = null;
var inst_24529 = (0);
var inst_24530 = (0);
var state_24586__$1 = (function (){var statearr_24614 = state_24586;
(statearr_24614[(12)] = inst_24528);

(statearr_24614[(14)] = inst_24527);

(statearr_24614[(15)] = inst_24530);

(statearr_24614[(16)] = inst_24529);

return statearr_24614;
})();
var statearr_24615_24654 = state_24586__$1;
(statearr_24615_24654[(2)] = null);

(statearr_24615_24654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (14))){
var state_24586__$1 = state_24586;
var statearr_24619_24655 = state_24586__$1;
(statearr_24619_24655[(2)] = null);

(statearr_24619_24655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (16))){
var inst_24541 = (state_24586[(10)]);
var inst_24545 = cljs.core.chunk_first.call(null,inst_24541);
var inst_24546 = cljs.core.chunk_rest.call(null,inst_24541);
var inst_24547 = cljs.core.count.call(null,inst_24545);
var inst_24527 = inst_24546;
var inst_24528 = inst_24545;
var inst_24529 = inst_24547;
var inst_24530 = (0);
var state_24586__$1 = (function (){var statearr_24620 = state_24586;
(statearr_24620[(12)] = inst_24528);

(statearr_24620[(14)] = inst_24527);

(statearr_24620[(15)] = inst_24530);

(statearr_24620[(16)] = inst_24529);

return statearr_24620;
})();
var statearr_24621_24656 = state_24586__$1;
(statearr_24621_24656[(2)] = null);

(statearr_24621_24656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (10))){
var inst_24528 = (state_24586[(12)]);
var inst_24527 = (state_24586[(14)]);
var inst_24530 = (state_24586[(15)]);
var inst_24529 = (state_24586[(16)]);
var inst_24535 = cljs.core._nth.call(null,inst_24528,inst_24530);
var inst_24536 = cljs.core.async.muxch_STAR_.call(null,inst_24535);
var inst_24537 = cljs.core.async.close_BANG_.call(null,inst_24536);
var inst_24538 = (inst_24530 + (1));
var tmp24616 = inst_24528;
var tmp24617 = inst_24527;
var tmp24618 = inst_24529;
var inst_24527__$1 = tmp24617;
var inst_24528__$1 = tmp24616;
var inst_24529__$1 = tmp24618;
var inst_24530__$1 = inst_24538;
var state_24586__$1 = (function (){var statearr_24622 = state_24586;
(statearr_24622[(12)] = inst_24528__$1);

(statearr_24622[(17)] = inst_24537);

(statearr_24622[(14)] = inst_24527__$1);

(statearr_24622[(15)] = inst_24530__$1);

(statearr_24622[(16)] = inst_24529__$1);

return statearr_24622;
})();
var statearr_24623_24657 = state_24586__$1;
(statearr_24623_24657[(2)] = null);

(statearr_24623_24657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (18))){
var inst_24556 = (state_24586[(2)]);
var state_24586__$1 = state_24586;
var statearr_24624_24658 = state_24586__$1;
(statearr_24624_24658[(2)] = inst_24556);

(statearr_24624_24658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24587 === (8))){
var inst_24530 = (state_24586[(15)]);
var inst_24529 = (state_24586[(16)]);
var inst_24532 = (inst_24530 < inst_24529);
var inst_24533 = inst_24532;
var state_24586__$1 = state_24586;
if(cljs.core.truth_(inst_24533)){
var statearr_24625_24659 = state_24586__$1;
(statearr_24625_24659[(1)] = (10));

} else {
var statearr_24626_24660 = state_24586__$1;
(statearr_24626_24660[(1)] = (11));

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
});})(c__23398__auto___24632,mults,ensure_mult,p))
;
return ((function (switch__23303__auto__,c__23398__auto___24632,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_24627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24627[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_24627[(1)] = (1));

return statearr_24627;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_24586){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_24586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e24628){if((e24628 instanceof Object)){
var ex__23307__auto__ = e24628;
var statearr_24629_24661 = state_24586;
(statearr_24629_24661[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24662 = state_24586;
state_24586 = G__24662;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_24586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_24586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___24632,mults,ensure_mult,p))
})();
var state__23400__auto__ = (function (){var statearr_24630 = f__23399__auto__.call(null);
(statearr_24630[(6)] = c__23398__auto___24632);

return statearr_24630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___24632,mults,ensure_mult,p))
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
var G__24664 = arguments.length;
switch (G__24664) {
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
var G__24667 = arguments.length;
switch (G__24667) {
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
var G__24670 = arguments.length;
switch (G__24670) {
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
var c__23398__auto___24737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___24737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___24737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24709){
var state_val_24710 = (state_24709[(1)]);
if((state_val_24710 === (7))){
var state_24709__$1 = state_24709;
var statearr_24711_24738 = state_24709__$1;
(statearr_24711_24738[(2)] = null);

(statearr_24711_24738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (1))){
var state_24709__$1 = state_24709;
var statearr_24712_24739 = state_24709__$1;
(statearr_24712_24739[(2)] = null);

(statearr_24712_24739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (4))){
var inst_24673 = (state_24709[(7)]);
var inst_24675 = (inst_24673 < cnt);
var state_24709__$1 = state_24709;
if(cljs.core.truth_(inst_24675)){
var statearr_24713_24740 = state_24709__$1;
(statearr_24713_24740[(1)] = (6));

} else {
var statearr_24714_24741 = state_24709__$1;
(statearr_24714_24741[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (15))){
var inst_24705 = (state_24709[(2)]);
var state_24709__$1 = state_24709;
var statearr_24715_24742 = state_24709__$1;
(statearr_24715_24742[(2)] = inst_24705);

(statearr_24715_24742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (13))){
var inst_24698 = cljs.core.async.close_BANG_.call(null,out);
var state_24709__$1 = state_24709;
var statearr_24716_24743 = state_24709__$1;
(statearr_24716_24743[(2)] = inst_24698);

(statearr_24716_24743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (6))){
var state_24709__$1 = state_24709;
var statearr_24717_24744 = state_24709__$1;
(statearr_24717_24744[(2)] = null);

(statearr_24717_24744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (3))){
var inst_24707 = (state_24709[(2)]);
var state_24709__$1 = state_24709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24709__$1,inst_24707);
} else {
if((state_val_24710 === (12))){
var inst_24695 = (state_24709[(8)]);
var inst_24695__$1 = (state_24709[(2)]);
var inst_24696 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24695__$1);
var state_24709__$1 = (function (){var statearr_24718 = state_24709;
(statearr_24718[(8)] = inst_24695__$1);

return statearr_24718;
})();
if(cljs.core.truth_(inst_24696)){
var statearr_24719_24745 = state_24709__$1;
(statearr_24719_24745[(1)] = (13));

} else {
var statearr_24720_24746 = state_24709__$1;
(statearr_24720_24746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (2))){
var inst_24672 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24673 = (0);
var state_24709__$1 = (function (){var statearr_24721 = state_24709;
(statearr_24721[(9)] = inst_24672);

(statearr_24721[(7)] = inst_24673);

return statearr_24721;
})();
var statearr_24722_24747 = state_24709__$1;
(statearr_24722_24747[(2)] = null);

(statearr_24722_24747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (11))){
var inst_24673 = (state_24709[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24709,(10),Object,null,(9));
var inst_24682 = chs__$1.call(null,inst_24673);
var inst_24683 = done.call(null,inst_24673);
var inst_24684 = cljs.core.async.take_BANG_.call(null,inst_24682,inst_24683);
var state_24709__$1 = state_24709;
var statearr_24723_24748 = state_24709__$1;
(statearr_24723_24748[(2)] = inst_24684);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24709__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (9))){
var inst_24673 = (state_24709[(7)]);
var inst_24686 = (state_24709[(2)]);
var inst_24687 = (inst_24673 + (1));
var inst_24673__$1 = inst_24687;
var state_24709__$1 = (function (){var statearr_24724 = state_24709;
(statearr_24724[(10)] = inst_24686);

(statearr_24724[(7)] = inst_24673__$1);

return statearr_24724;
})();
var statearr_24725_24749 = state_24709__$1;
(statearr_24725_24749[(2)] = null);

(statearr_24725_24749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (5))){
var inst_24693 = (state_24709[(2)]);
var state_24709__$1 = (function (){var statearr_24726 = state_24709;
(statearr_24726[(11)] = inst_24693);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24709__$1,(12),dchan);
} else {
if((state_val_24710 === (14))){
var inst_24695 = (state_24709[(8)]);
var inst_24700 = cljs.core.apply.call(null,f,inst_24695);
var state_24709__$1 = state_24709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24709__$1,(16),out,inst_24700);
} else {
if((state_val_24710 === (16))){
var inst_24702 = (state_24709[(2)]);
var state_24709__$1 = (function (){var statearr_24727 = state_24709;
(statearr_24727[(12)] = inst_24702);

return statearr_24727;
})();
var statearr_24728_24750 = state_24709__$1;
(statearr_24728_24750[(2)] = null);

(statearr_24728_24750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (10))){
var inst_24677 = (state_24709[(2)]);
var inst_24678 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24709__$1 = (function (){var statearr_24729 = state_24709;
(statearr_24729[(13)] = inst_24677);

return statearr_24729;
})();
var statearr_24730_24751 = state_24709__$1;
(statearr_24730_24751[(2)] = inst_24678);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24709__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24710 === (8))){
var inst_24691 = (state_24709[(2)]);
var state_24709__$1 = state_24709;
var statearr_24731_24752 = state_24709__$1;
(statearr_24731_24752[(2)] = inst_24691);

(statearr_24731_24752[(1)] = (5));


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
});})(c__23398__auto___24737,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23303__auto__,c__23398__auto___24737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_24732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24732[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_24732[(1)] = (1));

return statearr_24732;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_24709){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_24709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e24733){if((e24733 instanceof Object)){
var ex__23307__auto__ = e24733;
var statearr_24734_24753 = state_24709;
(statearr_24734_24753[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24754 = state_24709;
state_24709 = G__24754;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_24709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_24709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___24737,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23400__auto__ = (function (){var statearr_24735 = f__23399__auto__.call(null);
(statearr_24735[(6)] = c__23398__auto___24737);

return statearr_24735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___24737,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24757 = arguments.length;
switch (G__24757) {
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
var c__23398__auto___24811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___24811,out){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___24811,out){
return (function (state_24789){
var state_val_24790 = (state_24789[(1)]);
if((state_val_24790 === (7))){
var inst_24768 = (state_24789[(7)]);
var inst_24769 = (state_24789[(8)]);
var inst_24768__$1 = (state_24789[(2)]);
var inst_24769__$1 = cljs.core.nth.call(null,inst_24768__$1,(0),null);
var inst_24770 = cljs.core.nth.call(null,inst_24768__$1,(1),null);
var inst_24771 = (inst_24769__$1 == null);
var state_24789__$1 = (function (){var statearr_24791 = state_24789;
(statearr_24791[(7)] = inst_24768__$1);

(statearr_24791[(8)] = inst_24769__$1);

(statearr_24791[(9)] = inst_24770);

return statearr_24791;
})();
if(cljs.core.truth_(inst_24771)){
var statearr_24792_24812 = state_24789__$1;
(statearr_24792_24812[(1)] = (8));

} else {
var statearr_24793_24813 = state_24789__$1;
(statearr_24793_24813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (1))){
var inst_24758 = cljs.core.vec.call(null,chs);
var inst_24759 = inst_24758;
var state_24789__$1 = (function (){var statearr_24794 = state_24789;
(statearr_24794[(10)] = inst_24759);

return statearr_24794;
})();
var statearr_24795_24814 = state_24789__$1;
(statearr_24795_24814[(2)] = null);

(statearr_24795_24814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (4))){
var inst_24759 = (state_24789[(10)]);
var state_24789__$1 = state_24789;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24789__$1,(7),inst_24759);
} else {
if((state_val_24790 === (6))){
var inst_24785 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
var statearr_24796_24815 = state_24789__$1;
(statearr_24796_24815[(2)] = inst_24785);

(statearr_24796_24815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (3))){
var inst_24787 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24789__$1,inst_24787);
} else {
if((state_val_24790 === (2))){
var inst_24759 = (state_24789[(10)]);
var inst_24761 = cljs.core.count.call(null,inst_24759);
var inst_24762 = (inst_24761 > (0));
var state_24789__$1 = state_24789;
if(cljs.core.truth_(inst_24762)){
var statearr_24798_24816 = state_24789__$1;
(statearr_24798_24816[(1)] = (4));

} else {
var statearr_24799_24817 = state_24789__$1;
(statearr_24799_24817[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (11))){
var inst_24759 = (state_24789[(10)]);
var inst_24778 = (state_24789[(2)]);
var tmp24797 = inst_24759;
var inst_24759__$1 = tmp24797;
var state_24789__$1 = (function (){var statearr_24800 = state_24789;
(statearr_24800[(10)] = inst_24759__$1);

(statearr_24800[(11)] = inst_24778);

return statearr_24800;
})();
var statearr_24801_24818 = state_24789__$1;
(statearr_24801_24818[(2)] = null);

(statearr_24801_24818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (9))){
var inst_24769 = (state_24789[(8)]);
var state_24789__$1 = state_24789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24789__$1,(11),out,inst_24769);
} else {
if((state_val_24790 === (5))){
var inst_24783 = cljs.core.async.close_BANG_.call(null,out);
var state_24789__$1 = state_24789;
var statearr_24802_24819 = state_24789__$1;
(statearr_24802_24819[(2)] = inst_24783);

(statearr_24802_24819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (10))){
var inst_24781 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
var statearr_24803_24820 = state_24789__$1;
(statearr_24803_24820[(2)] = inst_24781);

(statearr_24803_24820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (8))){
var inst_24759 = (state_24789[(10)]);
var inst_24768 = (state_24789[(7)]);
var inst_24769 = (state_24789[(8)]);
var inst_24770 = (state_24789[(9)]);
var inst_24773 = (function (){var cs = inst_24759;
var vec__24764 = inst_24768;
var v = inst_24769;
var c = inst_24770;
return ((function (cs,vec__24764,v,c,inst_24759,inst_24768,inst_24769,inst_24770,state_val_24790,c__23398__auto___24811,out){
return (function (p1__24755_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24755_SHARP_);
});
;})(cs,vec__24764,v,c,inst_24759,inst_24768,inst_24769,inst_24770,state_val_24790,c__23398__auto___24811,out))
})();
var inst_24774 = cljs.core.filterv.call(null,inst_24773,inst_24759);
var inst_24759__$1 = inst_24774;
var state_24789__$1 = (function (){var statearr_24804 = state_24789;
(statearr_24804[(10)] = inst_24759__$1);

return statearr_24804;
})();
var statearr_24805_24821 = state_24789__$1;
(statearr_24805_24821[(2)] = null);

(statearr_24805_24821[(1)] = (2));


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
});})(c__23398__auto___24811,out))
;
return ((function (switch__23303__auto__,c__23398__auto___24811,out){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_24806 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24806[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_24806[(1)] = (1));

return statearr_24806;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_24789){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_24789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e24807){if((e24807 instanceof Object)){
var ex__23307__auto__ = e24807;
var statearr_24808_24822 = state_24789;
(statearr_24808_24822[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24823 = state_24789;
state_24789 = G__24823;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_24789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_24789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___24811,out))
})();
var state__23400__auto__ = (function (){var statearr_24809 = f__23399__auto__.call(null);
(statearr_24809[(6)] = c__23398__auto___24811);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___24811,out))
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
var G__24825 = arguments.length;
switch (G__24825) {
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
var c__23398__auto___24870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___24870,out){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___24870,out){
return (function (state_24849){
var state_val_24850 = (state_24849[(1)]);
if((state_val_24850 === (7))){
var inst_24831 = (state_24849[(7)]);
var inst_24831__$1 = (state_24849[(2)]);
var inst_24832 = (inst_24831__$1 == null);
var inst_24833 = cljs.core.not.call(null,inst_24832);
var state_24849__$1 = (function (){var statearr_24851 = state_24849;
(statearr_24851[(7)] = inst_24831__$1);

return statearr_24851;
})();
if(inst_24833){
var statearr_24852_24871 = state_24849__$1;
(statearr_24852_24871[(1)] = (8));

} else {
var statearr_24853_24872 = state_24849__$1;
(statearr_24853_24872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (1))){
var inst_24826 = (0);
var state_24849__$1 = (function (){var statearr_24854 = state_24849;
(statearr_24854[(8)] = inst_24826);

return statearr_24854;
})();
var statearr_24855_24873 = state_24849__$1;
(statearr_24855_24873[(2)] = null);

(statearr_24855_24873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (4))){
var state_24849__$1 = state_24849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24849__$1,(7),ch);
} else {
if((state_val_24850 === (6))){
var inst_24844 = (state_24849[(2)]);
var state_24849__$1 = state_24849;
var statearr_24856_24874 = state_24849__$1;
(statearr_24856_24874[(2)] = inst_24844);

(statearr_24856_24874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (3))){
var inst_24846 = (state_24849[(2)]);
var inst_24847 = cljs.core.async.close_BANG_.call(null,out);
var state_24849__$1 = (function (){var statearr_24857 = state_24849;
(statearr_24857[(9)] = inst_24846);

return statearr_24857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24849__$1,inst_24847);
} else {
if((state_val_24850 === (2))){
var inst_24826 = (state_24849[(8)]);
var inst_24828 = (inst_24826 < n);
var state_24849__$1 = state_24849;
if(cljs.core.truth_(inst_24828)){
var statearr_24858_24875 = state_24849__$1;
(statearr_24858_24875[(1)] = (4));

} else {
var statearr_24859_24876 = state_24849__$1;
(statearr_24859_24876[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (11))){
var inst_24826 = (state_24849[(8)]);
var inst_24836 = (state_24849[(2)]);
var inst_24837 = (inst_24826 + (1));
var inst_24826__$1 = inst_24837;
var state_24849__$1 = (function (){var statearr_24860 = state_24849;
(statearr_24860[(8)] = inst_24826__$1);

(statearr_24860[(10)] = inst_24836);

return statearr_24860;
})();
var statearr_24861_24877 = state_24849__$1;
(statearr_24861_24877[(2)] = null);

(statearr_24861_24877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (9))){
var state_24849__$1 = state_24849;
var statearr_24862_24878 = state_24849__$1;
(statearr_24862_24878[(2)] = null);

(statearr_24862_24878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (5))){
var state_24849__$1 = state_24849;
var statearr_24863_24879 = state_24849__$1;
(statearr_24863_24879[(2)] = null);

(statearr_24863_24879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (10))){
var inst_24841 = (state_24849[(2)]);
var state_24849__$1 = state_24849;
var statearr_24864_24880 = state_24849__$1;
(statearr_24864_24880[(2)] = inst_24841);

(statearr_24864_24880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (8))){
var inst_24831 = (state_24849[(7)]);
var state_24849__$1 = state_24849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24849__$1,(11),out,inst_24831);
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
});})(c__23398__auto___24870,out))
;
return ((function (switch__23303__auto__,c__23398__auto___24870,out){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_24865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24865[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_24865[(1)] = (1));

return statearr_24865;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_24849){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_24849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object)){
var ex__23307__auto__ = e24866;
var statearr_24867_24881 = state_24849;
(statearr_24867_24881[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24882 = state_24849;
state_24849 = G__24882;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_24849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_24849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___24870,out))
})();
var state__23400__auto__ = (function (){var statearr_24868 = f__23399__auto__.call(null);
(statearr_24868[(6)] = c__23398__auto___24870);

return statearr_24868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___24870,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24884 = (function (f,ch,meta24885){
this.f = f;
this.ch = ch;
this.meta24885 = meta24885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24886,meta24885__$1){
var self__ = this;
var _24886__$1 = this;
return (new cljs.core.async.t_cljs$core$async24884(self__.f,self__.ch,meta24885__$1));
});

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24886){
var self__ = this;
var _24886__$1 = this;
return self__.meta24885;
});

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24887 = (function (f,ch,meta24885,_,fn1,meta24888){
this.f = f;
this.ch = ch;
this.meta24885 = meta24885;
this._ = _;
this.fn1 = fn1;
this.meta24888 = meta24888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24889,meta24888__$1){
var self__ = this;
var _24889__$1 = this;
return (new cljs.core.async.t_cljs$core$async24887(self__.f,self__.ch,self__.meta24885,self__._,self__.fn1,meta24888__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24889){
var self__ = this;
var _24889__$1 = this;
return self__.meta24888;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24887.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24887.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24883_SHARP_){
return f1.call(null,(((p1__24883_SHARP_ == null))?null:self__.f.call(null,p1__24883_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24887.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24885","meta24885",-748485570,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24884","cljs.core.async/t_cljs$core$async24884",1038881484,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24888","meta24888",1388649442,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24887";

cljs.core.async.t_cljs$core$async24887.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24887");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24887.
 */
cljs.core.async.__GT_t_cljs$core$async24887 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24887(f__$1,ch__$1,meta24885__$1,___$2,fn1__$1,meta24888){
return (new cljs.core.async.t_cljs$core$async24887(f__$1,ch__$1,meta24885__$1,___$2,fn1__$1,meta24888));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24887(self__.f,self__.ch,self__.meta24885,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24885","meta24885",-748485570,null)], null);
});

cljs.core.async.t_cljs$core$async24884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24884";

cljs.core.async.t_cljs$core$async24884.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24884");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24884.
 */
cljs.core.async.__GT_t_cljs$core$async24884 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24884(f__$1,ch__$1,meta24885){
return (new cljs.core.async.t_cljs$core$async24884(f__$1,ch__$1,meta24885));
});

}

return (new cljs.core.async.t_cljs$core$async24884(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24890 = (function (f,ch,meta24891){
this.f = f;
this.ch = ch;
this.meta24891 = meta24891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24892,meta24891__$1){
var self__ = this;
var _24892__$1 = this;
return (new cljs.core.async.t_cljs$core$async24890(self__.f,self__.ch,meta24891__$1));
});

cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24892){
var self__ = this;
var _24892__$1 = this;
return self__.meta24891;
});

cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24891","meta24891",-1780511101,null)], null);
});

cljs.core.async.t_cljs$core$async24890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24890";

cljs.core.async.t_cljs$core$async24890.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24890");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24890.
 */
cljs.core.async.__GT_t_cljs$core$async24890 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24890(f__$1,ch__$1,meta24891){
return (new cljs.core.async.t_cljs$core$async24890(f__$1,ch__$1,meta24891));
});

}

return (new cljs.core.async.t_cljs$core$async24890(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24893 = (function (p,ch,meta24894){
this.p = p;
this.ch = ch;
this.meta24894 = meta24894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24895,meta24894__$1){
var self__ = this;
var _24895__$1 = this;
return (new cljs.core.async.t_cljs$core$async24893(self__.p,self__.ch,meta24894__$1));
});

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24895){
var self__ = this;
var _24895__$1 = this;
return self__.meta24894;
});

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24894","meta24894",-458118073,null)], null);
});

cljs.core.async.t_cljs$core$async24893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24893";

cljs.core.async.t_cljs$core$async24893.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24893");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24893.
 */
cljs.core.async.__GT_t_cljs$core$async24893 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24893(p__$1,ch__$1,meta24894){
return (new cljs.core.async.t_cljs$core$async24893(p__$1,ch__$1,meta24894));
});

}

return (new cljs.core.async.t_cljs$core$async24893(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24897 = arguments.length;
switch (G__24897) {
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
var c__23398__auto___24937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___24937,out){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___24937,out){
return (function (state_24918){
var state_val_24919 = (state_24918[(1)]);
if((state_val_24919 === (7))){
var inst_24914 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24920_24938 = state_24918__$1;
(statearr_24920_24938[(2)] = inst_24914);

(statearr_24920_24938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (1))){
var state_24918__$1 = state_24918;
var statearr_24921_24939 = state_24918__$1;
(statearr_24921_24939[(2)] = null);

(statearr_24921_24939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (4))){
var inst_24900 = (state_24918[(7)]);
var inst_24900__$1 = (state_24918[(2)]);
var inst_24901 = (inst_24900__$1 == null);
var state_24918__$1 = (function (){var statearr_24922 = state_24918;
(statearr_24922[(7)] = inst_24900__$1);

return statearr_24922;
})();
if(cljs.core.truth_(inst_24901)){
var statearr_24923_24940 = state_24918__$1;
(statearr_24923_24940[(1)] = (5));

} else {
var statearr_24924_24941 = state_24918__$1;
(statearr_24924_24941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (6))){
var inst_24900 = (state_24918[(7)]);
var inst_24905 = p.call(null,inst_24900);
var state_24918__$1 = state_24918;
if(cljs.core.truth_(inst_24905)){
var statearr_24925_24942 = state_24918__$1;
(statearr_24925_24942[(1)] = (8));

} else {
var statearr_24926_24943 = state_24918__$1;
(statearr_24926_24943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (3))){
var inst_24916 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24918__$1,inst_24916);
} else {
if((state_val_24919 === (2))){
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24918__$1,(4),ch);
} else {
if((state_val_24919 === (11))){
var inst_24908 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24927_24944 = state_24918__$1;
(statearr_24927_24944[(2)] = inst_24908);

(statearr_24927_24944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (9))){
var state_24918__$1 = state_24918;
var statearr_24928_24945 = state_24918__$1;
(statearr_24928_24945[(2)] = null);

(statearr_24928_24945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (5))){
var inst_24903 = cljs.core.async.close_BANG_.call(null,out);
var state_24918__$1 = state_24918;
var statearr_24929_24946 = state_24918__$1;
(statearr_24929_24946[(2)] = inst_24903);

(statearr_24929_24946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (10))){
var inst_24911 = (state_24918[(2)]);
var state_24918__$1 = (function (){var statearr_24930 = state_24918;
(statearr_24930[(8)] = inst_24911);

return statearr_24930;
})();
var statearr_24931_24947 = state_24918__$1;
(statearr_24931_24947[(2)] = null);

(statearr_24931_24947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (8))){
var inst_24900 = (state_24918[(7)]);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24918__$1,(11),out,inst_24900);
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
});})(c__23398__auto___24937,out))
;
return ((function (switch__23303__auto__,c__23398__auto___24937,out){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_24932 = [null,null,null,null,null,null,null,null,null];
(statearr_24932[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_24932[(1)] = (1));

return statearr_24932;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_24918){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_24918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e24933){if((e24933 instanceof Object)){
var ex__23307__auto__ = e24933;
var statearr_24934_24948 = state_24918;
(statearr_24934_24948[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24949 = state_24918;
state_24918 = G__24949;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_24918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_24918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___24937,out))
})();
var state__23400__auto__ = (function (){var statearr_24935 = f__23399__auto__.call(null);
(statearr_24935[(6)] = c__23398__auto___24937);

return statearr_24935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___24937,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24951 = arguments.length;
switch (G__24951) {
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
var c__23398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto__){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto__){
return (function (state_25014){
var state_val_25015 = (state_25014[(1)]);
if((state_val_25015 === (7))){
var inst_25010 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25016_25054 = state_25014__$1;
(statearr_25016_25054[(2)] = inst_25010);

(statearr_25016_25054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (20))){
var inst_24980 = (state_25014[(7)]);
var inst_24991 = (state_25014[(2)]);
var inst_24992 = cljs.core.next.call(null,inst_24980);
var inst_24966 = inst_24992;
var inst_24967 = null;
var inst_24968 = (0);
var inst_24969 = (0);
var state_25014__$1 = (function (){var statearr_25017 = state_25014;
(statearr_25017[(8)] = inst_24967);

(statearr_25017[(9)] = inst_24969);

(statearr_25017[(10)] = inst_24966);

(statearr_25017[(11)] = inst_24991);

(statearr_25017[(12)] = inst_24968);

return statearr_25017;
})();
var statearr_25018_25055 = state_25014__$1;
(statearr_25018_25055[(2)] = null);

(statearr_25018_25055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (1))){
var state_25014__$1 = state_25014;
var statearr_25019_25056 = state_25014__$1;
(statearr_25019_25056[(2)] = null);

(statearr_25019_25056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (4))){
var inst_24955 = (state_25014[(13)]);
var inst_24955__$1 = (state_25014[(2)]);
var inst_24956 = (inst_24955__$1 == null);
var state_25014__$1 = (function (){var statearr_25020 = state_25014;
(statearr_25020[(13)] = inst_24955__$1);

return statearr_25020;
})();
if(cljs.core.truth_(inst_24956)){
var statearr_25021_25057 = state_25014__$1;
(statearr_25021_25057[(1)] = (5));

} else {
var statearr_25022_25058 = state_25014__$1;
(statearr_25022_25058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (15))){
var state_25014__$1 = state_25014;
var statearr_25026_25059 = state_25014__$1;
(statearr_25026_25059[(2)] = null);

(statearr_25026_25059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (21))){
var state_25014__$1 = state_25014;
var statearr_25027_25060 = state_25014__$1;
(statearr_25027_25060[(2)] = null);

(statearr_25027_25060[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (13))){
var inst_24967 = (state_25014[(8)]);
var inst_24969 = (state_25014[(9)]);
var inst_24966 = (state_25014[(10)]);
var inst_24968 = (state_25014[(12)]);
var inst_24976 = (state_25014[(2)]);
var inst_24977 = (inst_24969 + (1));
var tmp25023 = inst_24967;
var tmp25024 = inst_24966;
var tmp25025 = inst_24968;
var inst_24966__$1 = tmp25024;
var inst_24967__$1 = tmp25023;
var inst_24968__$1 = tmp25025;
var inst_24969__$1 = inst_24977;
var state_25014__$1 = (function (){var statearr_25028 = state_25014;
(statearr_25028[(8)] = inst_24967__$1);

(statearr_25028[(14)] = inst_24976);

(statearr_25028[(9)] = inst_24969__$1);

(statearr_25028[(10)] = inst_24966__$1);

(statearr_25028[(12)] = inst_24968__$1);

return statearr_25028;
})();
var statearr_25029_25061 = state_25014__$1;
(statearr_25029_25061[(2)] = null);

(statearr_25029_25061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (22))){
var state_25014__$1 = state_25014;
var statearr_25030_25062 = state_25014__$1;
(statearr_25030_25062[(2)] = null);

(statearr_25030_25062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (6))){
var inst_24955 = (state_25014[(13)]);
var inst_24964 = f.call(null,inst_24955);
var inst_24965 = cljs.core.seq.call(null,inst_24964);
var inst_24966 = inst_24965;
var inst_24967 = null;
var inst_24968 = (0);
var inst_24969 = (0);
var state_25014__$1 = (function (){var statearr_25031 = state_25014;
(statearr_25031[(8)] = inst_24967);

(statearr_25031[(9)] = inst_24969);

(statearr_25031[(10)] = inst_24966);

(statearr_25031[(12)] = inst_24968);

return statearr_25031;
})();
var statearr_25032_25063 = state_25014__$1;
(statearr_25032_25063[(2)] = null);

(statearr_25032_25063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (17))){
var inst_24980 = (state_25014[(7)]);
var inst_24984 = cljs.core.chunk_first.call(null,inst_24980);
var inst_24985 = cljs.core.chunk_rest.call(null,inst_24980);
var inst_24986 = cljs.core.count.call(null,inst_24984);
var inst_24966 = inst_24985;
var inst_24967 = inst_24984;
var inst_24968 = inst_24986;
var inst_24969 = (0);
var state_25014__$1 = (function (){var statearr_25033 = state_25014;
(statearr_25033[(8)] = inst_24967);

(statearr_25033[(9)] = inst_24969);

(statearr_25033[(10)] = inst_24966);

(statearr_25033[(12)] = inst_24968);

return statearr_25033;
})();
var statearr_25034_25064 = state_25014__$1;
(statearr_25034_25064[(2)] = null);

(statearr_25034_25064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (3))){
var inst_25012 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25014__$1,inst_25012);
} else {
if((state_val_25015 === (12))){
var inst_25000 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25035_25065 = state_25014__$1;
(statearr_25035_25065[(2)] = inst_25000);

(statearr_25035_25065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (2))){
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25014__$1,(4),in$);
} else {
if((state_val_25015 === (23))){
var inst_25008 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25036_25066 = state_25014__$1;
(statearr_25036_25066[(2)] = inst_25008);

(statearr_25036_25066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (19))){
var inst_24995 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25037_25067 = state_25014__$1;
(statearr_25037_25067[(2)] = inst_24995);

(statearr_25037_25067[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (11))){
var inst_24980 = (state_25014[(7)]);
var inst_24966 = (state_25014[(10)]);
var inst_24980__$1 = cljs.core.seq.call(null,inst_24966);
var state_25014__$1 = (function (){var statearr_25038 = state_25014;
(statearr_25038[(7)] = inst_24980__$1);

return statearr_25038;
})();
if(inst_24980__$1){
var statearr_25039_25068 = state_25014__$1;
(statearr_25039_25068[(1)] = (14));

} else {
var statearr_25040_25069 = state_25014__$1;
(statearr_25040_25069[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (9))){
var inst_25002 = (state_25014[(2)]);
var inst_25003 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25014__$1 = (function (){var statearr_25041 = state_25014;
(statearr_25041[(15)] = inst_25002);

return statearr_25041;
})();
if(cljs.core.truth_(inst_25003)){
var statearr_25042_25070 = state_25014__$1;
(statearr_25042_25070[(1)] = (21));

} else {
var statearr_25043_25071 = state_25014__$1;
(statearr_25043_25071[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (5))){
var inst_24958 = cljs.core.async.close_BANG_.call(null,out);
var state_25014__$1 = state_25014;
var statearr_25044_25072 = state_25014__$1;
(statearr_25044_25072[(2)] = inst_24958);

(statearr_25044_25072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (14))){
var inst_24980 = (state_25014[(7)]);
var inst_24982 = cljs.core.chunked_seq_QMARK_.call(null,inst_24980);
var state_25014__$1 = state_25014;
if(inst_24982){
var statearr_25045_25073 = state_25014__$1;
(statearr_25045_25073[(1)] = (17));

} else {
var statearr_25046_25074 = state_25014__$1;
(statearr_25046_25074[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (16))){
var inst_24998 = (state_25014[(2)]);
var state_25014__$1 = state_25014;
var statearr_25047_25075 = state_25014__$1;
(statearr_25047_25075[(2)] = inst_24998);

(statearr_25047_25075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25015 === (10))){
var inst_24967 = (state_25014[(8)]);
var inst_24969 = (state_25014[(9)]);
var inst_24974 = cljs.core._nth.call(null,inst_24967,inst_24969);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,(13),out,inst_24974);
} else {
if((state_val_25015 === (18))){
var inst_24980 = (state_25014[(7)]);
var inst_24989 = cljs.core.first.call(null,inst_24980);
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,(20),out,inst_24989);
} else {
if((state_val_25015 === (8))){
var inst_24969 = (state_25014[(9)]);
var inst_24968 = (state_25014[(12)]);
var inst_24971 = (inst_24969 < inst_24968);
var inst_24972 = inst_24971;
var state_25014__$1 = state_25014;
if(cljs.core.truth_(inst_24972)){
var statearr_25048_25076 = state_25014__$1;
(statearr_25048_25076[(1)] = (10));

} else {
var statearr_25049_25077 = state_25014__$1;
(statearr_25049_25077[(1)] = (11));

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
});})(c__23398__auto__))
;
return ((function (switch__23303__auto__,c__23398__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23304__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23304__auto____0 = (function (){
var statearr_25050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25050[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23304__auto__);

(statearr_25050[(1)] = (1));

return statearr_25050;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23304__auto____1 = (function (state_25014){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_25014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e25051){if((e25051 instanceof Object)){
var ex__23307__auto__ = e25051;
var statearr_25052_25078 = state_25014;
(statearr_25052_25078[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25079 = state_25014;
state_25014 = G__25079;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23304__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23304__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23304__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23304__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto__))
})();
var state__23400__auto__ = (function (){var statearr_25053 = f__23399__auto__.call(null);
(statearr_25053[(6)] = c__23398__auto__);

return statearr_25053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto__))
);

return c__23398__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25081 = arguments.length;
switch (G__25081) {
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
var G__25084 = arguments.length;
switch (G__25084) {
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
var G__25087 = arguments.length;
switch (G__25087) {
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
var c__23398__auto___25134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___25134,out){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___25134,out){
return (function (state_25111){
var state_val_25112 = (state_25111[(1)]);
if((state_val_25112 === (7))){
var inst_25106 = (state_25111[(2)]);
var state_25111__$1 = state_25111;
var statearr_25113_25135 = state_25111__$1;
(statearr_25113_25135[(2)] = inst_25106);

(statearr_25113_25135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (1))){
var inst_25088 = null;
var state_25111__$1 = (function (){var statearr_25114 = state_25111;
(statearr_25114[(7)] = inst_25088);

return statearr_25114;
})();
var statearr_25115_25136 = state_25111__$1;
(statearr_25115_25136[(2)] = null);

(statearr_25115_25136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (4))){
var inst_25091 = (state_25111[(8)]);
var inst_25091__$1 = (state_25111[(2)]);
var inst_25092 = (inst_25091__$1 == null);
var inst_25093 = cljs.core.not.call(null,inst_25092);
var state_25111__$1 = (function (){var statearr_25116 = state_25111;
(statearr_25116[(8)] = inst_25091__$1);

return statearr_25116;
})();
if(inst_25093){
var statearr_25117_25137 = state_25111__$1;
(statearr_25117_25137[(1)] = (5));

} else {
var statearr_25118_25138 = state_25111__$1;
(statearr_25118_25138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (6))){
var state_25111__$1 = state_25111;
var statearr_25119_25139 = state_25111__$1;
(statearr_25119_25139[(2)] = null);

(statearr_25119_25139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (3))){
var inst_25108 = (state_25111[(2)]);
var inst_25109 = cljs.core.async.close_BANG_.call(null,out);
var state_25111__$1 = (function (){var statearr_25120 = state_25111;
(statearr_25120[(9)] = inst_25108);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25111__$1,inst_25109);
} else {
if((state_val_25112 === (2))){
var state_25111__$1 = state_25111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25111__$1,(4),ch);
} else {
if((state_val_25112 === (11))){
var inst_25091 = (state_25111[(8)]);
var inst_25100 = (state_25111[(2)]);
var inst_25088 = inst_25091;
var state_25111__$1 = (function (){var statearr_25121 = state_25111;
(statearr_25121[(10)] = inst_25100);

(statearr_25121[(7)] = inst_25088);

return statearr_25121;
})();
var statearr_25122_25140 = state_25111__$1;
(statearr_25122_25140[(2)] = null);

(statearr_25122_25140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (9))){
var inst_25091 = (state_25111[(8)]);
var state_25111__$1 = state_25111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25111__$1,(11),out,inst_25091);
} else {
if((state_val_25112 === (5))){
var inst_25091 = (state_25111[(8)]);
var inst_25088 = (state_25111[(7)]);
var inst_25095 = cljs.core._EQ_.call(null,inst_25091,inst_25088);
var state_25111__$1 = state_25111;
if(inst_25095){
var statearr_25124_25141 = state_25111__$1;
(statearr_25124_25141[(1)] = (8));

} else {
var statearr_25125_25142 = state_25111__$1;
(statearr_25125_25142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (10))){
var inst_25103 = (state_25111[(2)]);
var state_25111__$1 = state_25111;
var statearr_25126_25143 = state_25111__$1;
(statearr_25126_25143[(2)] = inst_25103);

(statearr_25126_25143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (8))){
var inst_25088 = (state_25111[(7)]);
var tmp25123 = inst_25088;
var inst_25088__$1 = tmp25123;
var state_25111__$1 = (function (){var statearr_25127 = state_25111;
(statearr_25127[(7)] = inst_25088__$1);

return statearr_25127;
})();
var statearr_25128_25144 = state_25111__$1;
(statearr_25128_25144[(2)] = null);

(statearr_25128_25144[(1)] = (2));


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
});})(c__23398__auto___25134,out))
;
return ((function (switch__23303__auto__,c__23398__auto___25134,out){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_25129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25129[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_25129[(1)] = (1));

return statearr_25129;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_25111){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_25111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e25130){if((e25130 instanceof Object)){
var ex__23307__auto__ = e25130;
var statearr_25131_25145 = state_25111;
(statearr_25131_25145[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25146 = state_25111;
state_25111 = G__25146;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_25111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_25111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___25134,out))
})();
var state__23400__auto__ = (function (){var statearr_25132 = f__23399__auto__.call(null);
(statearr_25132[(6)] = c__23398__auto___25134);

return statearr_25132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___25134,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25148 = arguments.length;
switch (G__25148) {
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
var c__23398__auto___25214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___25214,out){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___25214,out){
return (function (state_25186){
var state_val_25187 = (state_25186[(1)]);
if((state_val_25187 === (7))){
var inst_25182 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25188_25215 = state_25186__$1;
(statearr_25188_25215[(2)] = inst_25182);

(statearr_25188_25215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (1))){
var inst_25149 = (new Array(n));
var inst_25150 = inst_25149;
var inst_25151 = (0);
var state_25186__$1 = (function (){var statearr_25189 = state_25186;
(statearr_25189[(7)] = inst_25150);

(statearr_25189[(8)] = inst_25151);

return statearr_25189;
})();
var statearr_25190_25216 = state_25186__$1;
(statearr_25190_25216[(2)] = null);

(statearr_25190_25216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (4))){
var inst_25154 = (state_25186[(9)]);
var inst_25154__$1 = (state_25186[(2)]);
var inst_25155 = (inst_25154__$1 == null);
var inst_25156 = cljs.core.not.call(null,inst_25155);
var state_25186__$1 = (function (){var statearr_25191 = state_25186;
(statearr_25191[(9)] = inst_25154__$1);

return statearr_25191;
})();
if(inst_25156){
var statearr_25192_25217 = state_25186__$1;
(statearr_25192_25217[(1)] = (5));

} else {
var statearr_25193_25218 = state_25186__$1;
(statearr_25193_25218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (15))){
var inst_25176 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25194_25219 = state_25186__$1;
(statearr_25194_25219[(2)] = inst_25176);

(statearr_25194_25219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (13))){
var state_25186__$1 = state_25186;
var statearr_25195_25220 = state_25186__$1;
(statearr_25195_25220[(2)] = null);

(statearr_25195_25220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (6))){
var inst_25151 = (state_25186[(8)]);
var inst_25172 = (inst_25151 > (0));
var state_25186__$1 = state_25186;
if(cljs.core.truth_(inst_25172)){
var statearr_25196_25221 = state_25186__$1;
(statearr_25196_25221[(1)] = (12));

} else {
var statearr_25197_25222 = state_25186__$1;
(statearr_25197_25222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (3))){
var inst_25184 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25186__$1,inst_25184);
} else {
if((state_val_25187 === (12))){
var inst_25150 = (state_25186[(7)]);
var inst_25174 = cljs.core.vec.call(null,inst_25150);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25186__$1,(15),out,inst_25174);
} else {
if((state_val_25187 === (2))){
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25186__$1,(4),ch);
} else {
if((state_val_25187 === (11))){
var inst_25166 = (state_25186[(2)]);
var inst_25167 = (new Array(n));
var inst_25150 = inst_25167;
var inst_25151 = (0);
var state_25186__$1 = (function (){var statearr_25198 = state_25186;
(statearr_25198[(10)] = inst_25166);

(statearr_25198[(7)] = inst_25150);

(statearr_25198[(8)] = inst_25151);

return statearr_25198;
})();
var statearr_25199_25223 = state_25186__$1;
(statearr_25199_25223[(2)] = null);

(statearr_25199_25223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (9))){
var inst_25150 = (state_25186[(7)]);
var inst_25164 = cljs.core.vec.call(null,inst_25150);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25186__$1,(11),out,inst_25164);
} else {
if((state_val_25187 === (5))){
var inst_25159 = (state_25186[(11)]);
var inst_25154 = (state_25186[(9)]);
var inst_25150 = (state_25186[(7)]);
var inst_25151 = (state_25186[(8)]);
var inst_25158 = (inst_25150[inst_25151] = inst_25154);
var inst_25159__$1 = (inst_25151 + (1));
var inst_25160 = (inst_25159__$1 < n);
var state_25186__$1 = (function (){var statearr_25200 = state_25186;
(statearr_25200[(11)] = inst_25159__$1);

(statearr_25200[(12)] = inst_25158);

return statearr_25200;
})();
if(cljs.core.truth_(inst_25160)){
var statearr_25201_25224 = state_25186__$1;
(statearr_25201_25224[(1)] = (8));

} else {
var statearr_25202_25225 = state_25186__$1;
(statearr_25202_25225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (14))){
var inst_25179 = (state_25186[(2)]);
var inst_25180 = cljs.core.async.close_BANG_.call(null,out);
var state_25186__$1 = (function (){var statearr_25204 = state_25186;
(statearr_25204[(13)] = inst_25179);

return statearr_25204;
})();
var statearr_25205_25226 = state_25186__$1;
(statearr_25205_25226[(2)] = inst_25180);

(statearr_25205_25226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (10))){
var inst_25170 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25206_25227 = state_25186__$1;
(statearr_25206_25227[(2)] = inst_25170);

(statearr_25206_25227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (8))){
var inst_25159 = (state_25186[(11)]);
var inst_25150 = (state_25186[(7)]);
var tmp25203 = inst_25150;
var inst_25150__$1 = tmp25203;
var inst_25151 = inst_25159;
var state_25186__$1 = (function (){var statearr_25207 = state_25186;
(statearr_25207[(7)] = inst_25150__$1);

(statearr_25207[(8)] = inst_25151);

return statearr_25207;
})();
var statearr_25208_25228 = state_25186__$1;
(statearr_25208_25228[(2)] = null);

(statearr_25208_25228[(1)] = (2));


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
});})(c__23398__auto___25214,out))
;
return ((function (switch__23303__auto__,c__23398__auto___25214,out){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_25209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25209[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_25209[(1)] = (1));

return statearr_25209;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_25186){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_25186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e25210){if((e25210 instanceof Object)){
var ex__23307__auto__ = e25210;
var statearr_25211_25229 = state_25186;
(statearr_25211_25229[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25230 = state_25186;
state_25186 = G__25230;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_25186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_25186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___25214,out))
})();
var state__23400__auto__ = (function (){var statearr_25212 = f__23399__auto__.call(null);
(statearr_25212[(6)] = c__23398__auto___25214);

return statearr_25212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___25214,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25232 = arguments.length;
switch (G__25232) {
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
var c__23398__auto___25302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23398__auto___25302,out){
return (function (){
var f__23399__auto__ = (function (){var switch__23303__auto__ = ((function (c__23398__auto___25302,out){
return (function (state_25274){
var state_val_25275 = (state_25274[(1)]);
if((state_val_25275 === (7))){
var inst_25270 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25276_25303 = state_25274__$1;
(statearr_25276_25303[(2)] = inst_25270);

(statearr_25276_25303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (1))){
var inst_25233 = [];
var inst_25234 = inst_25233;
var inst_25235 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25274__$1 = (function (){var statearr_25277 = state_25274;
(statearr_25277[(7)] = inst_25234);

(statearr_25277[(8)] = inst_25235);

return statearr_25277;
})();
var statearr_25278_25304 = state_25274__$1;
(statearr_25278_25304[(2)] = null);

(statearr_25278_25304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (4))){
var inst_25238 = (state_25274[(9)]);
var inst_25238__$1 = (state_25274[(2)]);
var inst_25239 = (inst_25238__$1 == null);
var inst_25240 = cljs.core.not.call(null,inst_25239);
var state_25274__$1 = (function (){var statearr_25279 = state_25274;
(statearr_25279[(9)] = inst_25238__$1);

return statearr_25279;
})();
if(inst_25240){
var statearr_25280_25305 = state_25274__$1;
(statearr_25280_25305[(1)] = (5));

} else {
var statearr_25281_25306 = state_25274__$1;
(statearr_25281_25306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (15))){
var inst_25264 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25282_25307 = state_25274__$1;
(statearr_25282_25307[(2)] = inst_25264);

(statearr_25282_25307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (13))){
var state_25274__$1 = state_25274;
var statearr_25283_25308 = state_25274__$1;
(statearr_25283_25308[(2)] = null);

(statearr_25283_25308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (6))){
var inst_25234 = (state_25274[(7)]);
var inst_25259 = inst_25234.length;
var inst_25260 = (inst_25259 > (0));
var state_25274__$1 = state_25274;
if(cljs.core.truth_(inst_25260)){
var statearr_25284_25309 = state_25274__$1;
(statearr_25284_25309[(1)] = (12));

} else {
var statearr_25285_25310 = state_25274__$1;
(statearr_25285_25310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (3))){
var inst_25272 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25274__$1,inst_25272);
} else {
if((state_val_25275 === (12))){
var inst_25234 = (state_25274[(7)]);
var inst_25262 = cljs.core.vec.call(null,inst_25234);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25274__$1,(15),out,inst_25262);
} else {
if((state_val_25275 === (2))){
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25274__$1,(4),ch);
} else {
if((state_val_25275 === (11))){
var inst_25238 = (state_25274[(9)]);
var inst_25242 = (state_25274[(10)]);
var inst_25252 = (state_25274[(2)]);
var inst_25253 = [];
var inst_25254 = inst_25253.push(inst_25238);
var inst_25234 = inst_25253;
var inst_25235 = inst_25242;
var state_25274__$1 = (function (){var statearr_25286 = state_25274;
(statearr_25286[(7)] = inst_25234);

(statearr_25286[(8)] = inst_25235);

(statearr_25286[(11)] = inst_25254);

(statearr_25286[(12)] = inst_25252);

return statearr_25286;
})();
var statearr_25287_25311 = state_25274__$1;
(statearr_25287_25311[(2)] = null);

(statearr_25287_25311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (9))){
var inst_25234 = (state_25274[(7)]);
var inst_25250 = cljs.core.vec.call(null,inst_25234);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25274__$1,(11),out,inst_25250);
} else {
if((state_val_25275 === (5))){
var inst_25238 = (state_25274[(9)]);
var inst_25242 = (state_25274[(10)]);
var inst_25235 = (state_25274[(8)]);
var inst_25242__$1 = f.call(null,inst_25238);
var inst_25243 = cljs.core._EQ_.call(null,inst_25242__$1,inst_25235);
var inst_25244 = cljs.core.keyword_identical_QMARK_.call(null,inst_25235,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25245 = ((inst_25243) || (inst_25244));
var state_25274__$1 = (function (){var statearr_25288 = state_25274;
(statearr_25288[(10)] = inst_25242__$1);

return statearr_25288;
})();
if(cljs.core.truth_(inst_25245)){
var statearr_25289_25312 = state_25274__$1;
(statearr_25289_25312[(1)] = (8));

} else {
var statearr_25290_25313 = state_25274__$1;
(statearr_25290_25313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (14))){
var inst_25267 = (state_25274[(2)]);
var inst_25268 = cljs.core.async.close_BANG_.call(null,out);
var state_25274__$1 = (function (){var statearr_25292 = state_25274;
(statearr_25292[(13)] = inst_25267);

return statearr_25292;
})();
var statearr_25293_25314 = state_25274__$1;
(statearr_25293_25314[(2)] = inst_25268);

(statearr_25293_25314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (10))){
var inst_25257 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25294_25315 = state_25274__$1;
(statearr_25294_25315[(2)] = inst_25257);

(statearr_25294_25315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (8))){
var inst_25238 = (state_25274[(9)]);
var inst_25242 = (state_25274[(10)]);
var inst_25234 = (state_25274[(7)]);
var inst_25247 = inst_25234.push(inst_25238);
var tmp25291 = inst_25234;
var inst_25234__$1 = tmp25291;
var inst_25235 = inst_25242;
var state_25274__$1 = (function (){var statearr_25295 = state_25274;
(statearr_25295[(7)] = inst_25234__$1);

(statearr_25295[(8)] = inst_25235);

(statearr_25295[(14)] = inst_25247);

return statearr_25295;
})();
var statearr_25296_25316 = state_25274__$1;
(statearr_25296_25316[(2)] = null);

(statearr_25296_25316[(1)] = (2));


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
});})(c__23398__auto___25302,out))
;
return ((function (switch__23303__auto__,c__23398__auto___25302,out){
return (function() {
var cljs$core$async$state_machine__23304__auto__ = null;
var cljs$core$async$state_machine__23304__auto____0 = (function (){
var statearr_25297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25297[(0)] = cljs$core$async$state_machine__23304__auto__);

(statearr_25297[(1)] = (1));

return statearr_25297;
});
var cljs$core$async$state_machine__23304__auto____1 = (function (state_25274){
while(true){
var ret_value__23305__auto__ = (function (){try{while(true){
var result__23306__auto__ = switch__23303__auto__.call(null,state_25274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23306__auto__;
}
break;
}
}catch (e25298){if((e25298 instanceof Object)){
var ex__23307__auto__ = e25298;
var statearr_25299_25317 = state_25274;
(statearr_25299_25317[(5)] = ex__23307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25318 = state_25274;
state_25274 = G__25318;
continue;
} else {
return ret_value__23305__auto__;
}
break;
}
});
cljs$core$async$state_machine__23304__auto__ = function(state_25274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23304__auto____1.call(this,state_25274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23304__auto____0;
cljs$core$async$state_machine__23304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23304__auto____1;
return cljs$core$async$state_machine__23304__auto__;
})()
;})(switch__23303__auto__,c__23398__auto___25302,out))
})();
var state__23400__auto__ = (function (){var statearr_25300 = f__23399__auto__.call(null);
(statearr_25300[(6)] = c__23398__auto___25302);

return statearr_25300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23400__auto__);
});})(c__23398__auto___25302,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1560798469998

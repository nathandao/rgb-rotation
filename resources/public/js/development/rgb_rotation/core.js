// Compiled by ClojureScript 1.10.520 {}
goog.provide('rgb_rotation.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
rgb_rotation.core.setup = (function rgb_rotation$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
rgb_rotation.core.update_state = (function rgb_rotation$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
rgb_rotation.core.scale = (1);
rgb_rotation.core.origin = (-127.5 * rgb_rotation.core.scale);
rgb_rotation.core.shift_coord = (function rgb_rotation$core$shift_coord(v){
var s = (127.5 * rgb_rotation.core.scale);
return (v - s);
});
rgb_rotation.core.draw_axis = (function rgb_rotation$core$draw_axis(){
quil.core.stroke_weight.call(null,(2));

quil.core.stroke.call(null,(255),(0),(0));

quil.core.line.call(null,(-500),(0),(0),(500),(0),(0));

quil.core.stroke.call(null,(0),(255),(0));

quil.core.line.call(null,(0),(-500),(0),(0),(500),(0));

quil.core.stroke.call(null,(0),(0),(255));

return quil.core.line.call(null,(0),(0),(-500),(0),(0),(500));
});
rgb_rotation.core.draw_color = (function rgb_rotation$core$draw_color(r,g,b){
var x = rgb_rotation.core.shift_coord.call(null,r);
var y = rgb_rotation.core.shift_coord.call(null,g);
var z = rgb_rotation.core.shift_coord.call(null,b);
var tr__35636__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__35636__auto__);

quil.core.stroke.call(null,r,g,b);

return quil.core.sphere.call(null,(5));
}finally {quil.core.pop_matrix.call(null);
}});
rgb_rotation.core.draw_color_vector = (function rgb_rotation$core$draw_color_vector(r,g,b){
var x = rgb_rotation.core.shift_coord.call(null,r);
var y = rgb_rotation.core.shift_coord.call(null,g);
var z = rgb_rotation.core.shift_coord.call(null,b);
quil.core.stroke.call(null,(0),(0),(0));

quil.core.stroke_weight.call(null,(1));

quil.core.line.call(null,rgb_rotation.core.origin,rgb_rotation.core.origin,rgb_rotation.core.origin,x,y,z);

return rgb_rotation.core.draw_color.call(null,r,g,b);
});
rgb_rotation.core.draw_rgb_box = (function rgb_rotation$core$draw_rgb_box(){
quil.core.stroke.call(null,(0),(0),(0));

quil.core.stroke_weight.call(null,(1));

quil.core.box.call(null,(255));

rgb_rotation.core.draw_color.call(null,(0),(0),(255));

rgb_rotation.core.draw_color.call(null,(0),(255),(0));

rgb_rotation.core.draw_color.call(null,(255),(0),(0));

rgb_rotation.core.draw_color.call(null,(0),(255),(255));

rgb_rotation.core.draw_color.call(null,(255),(255),(0));

rgb_rotation.core.draw_color.call(null,(255),(0),(255));

rgb_rotation.core.draw_color.call(null,(0),(0),(0));

return rgb_rotation.core.draw_color.call(null,(255),(255),(255));
});
rgb_rotation.core.draw_state = (function rgb_rotation$core$draw_state(state){
quil.core.background.call(null,(255));

quil.core.ortho.call(null);

quil.core.orbit_control.call(null);

quil.core.fill.call(null,(255),(255),(255),(200));

rgb_rotation.core.draw_axis.call(null);

quil.core.rotate_y.call(null,((0) - quil.core.atan.call(null,((1) / quil.core.sqrt.call(null,(2))))));

quil.core.rotate_x.call(null,(quil.core.PI / (4)));

var tr__35636__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [127.5,127.5,127.5], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__35636__auto__);

rgb_rotation.core.draw_rgb_box.call(null);

return rgb_rotation.core.draw_color_vector.call(null,(240),(120),(200));
}finally {quil.core.pop_matrix.call(null);
}});
rgb_rotation.core.run_sketch = (function rgb_rotation$core$run_sketch(){
rgb_rotation.core.rgb_rotation = (function rgb_rotation$core$run_sketch_$_rgb_rotation(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"rgb-rotation",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.update_state))?(function() { 
var G__37298__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.update_state,args);
};
var G__37298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37299__i = 0, G__37299__a = new Array(arguments.length -  0);
while (G__37299__i < G__37299__a.length) {G__37299__a[G__37299__i] = arguments[G__37299__i + 0]; ++G__37299__i;}
  args = new cljs.core.IndexedSeq(G__37299__a,0,null);
} 
return G__37298__delegate.call(this,args);};
G__37298.cljs$lang$maxFixedArity = 0;
G__37298.cljs$lang$applyTo = (function (arglist__37300){
var args = cljs.core.seq(arglist__37300);
return G__37298__delegate(args);
});
G__37298.cljs$core$IFn$_invoke$arity$variadic = G__37298__delegate;
return G__37298;
})()
:rgb_rotation.core.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.setup))?(function() { 
var G__37301__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.setup,args);
};
var G__37301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37302__i = 0, G__37302__a = new Array(arguments.length -  0);
while (G__37302__i < G__37302__a.length) {G__37302__a[G__37302__i] = arguments[G__37302__i + 0]; ++G__37302__i;}
  args = new cljs.core.IndexedSeq(G__37302__a,0,null);
} 
return G__37301__delegate.call(this,args);};
G__37301.cljs$lang$maxFixedArity = 0;
G__37301.cljs$lang$applyTo = (function (arglist__37303){
var args = cljs.core.seq(arglist__37303);
return G__37301__delegate(args);
});
G__37301.cljs$core$IFn$_invoke$arity$variadic = G__37301__delegate;
return G__37301;
})()
:rgb_rotation.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.draw_state))?(function() { 
var G__37304__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.draw_state,args);
};
var G__37304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37305__i = 0, G__37305__a = new Array(arguments.length -  0);
while (G__37305__i < G__37305__a.length) {G__37305__a[G__37305__i] = arguments[G__37305__i + 0]; ++G__37305__i;}
  args = new cljs.core.IndexedSeq(G__37305__a,0,null);
} 
return G__37304__delegate.call(this,args);};
G__37304.cljs$lang$maxFixedArity = 0;
G__37304.cljs$lang$applyTo = (function (arglist__37306){
var args = cljs.core.seq(arglist__37306);
return G__37304__delegate(args);
});
G__37304.cljs$core$IFn$_invoke$arity$variadic = G__37304__delegate;
return G__37304;
})()
:rgb_rotation.core.draw_state));
});
goog.exportSymbol('rgb_rotation.core.rgb_rotation', rgb_rotation.core.rgb_rotation);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__35234__35235__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__35234__35235__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),rgb_rotation.core.rgb_rotation,new cljs.core.Keyword(null,"host-id","host-id",742376279),"rgb-rotation"], null));
}
});
goog.exportSymbol('rgb_rotation.core.run_sketch', rgb_rotation.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1561042377455

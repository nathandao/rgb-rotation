// Compiled by ClojureScript 1.10.520 {}
goog.provide('rgb_rotation.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
rgb_rotation.core.size = (280);
rgb_rotation.core.scale = 0.35;
rgb_rotation.core.unit = ((255) * rgb_rotation.core.scale);
rgb_rotation.core.half_unit_inv = ((0) - (rgb_rotation.core.unit / (2)));
rgb_rotation.core.half_unit = (rgb_rotation.core.unit / (2));
rgb_rotation.core.setup = (function rgb_rotation$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

quil.core.ortho.call(null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delta-x","delta-x",540498700),(0),new cljs.core.Keyword(null,"delta-y","delta-y",938971239),(0)], null);
});
rgb_rotation.core.update_state = (function rgb_rotation$core$update_state(state){
var steps = (40);
var theta_x = (quil.core.PI / (4));
var theta_y = quil.core.atan.call(null,((1) / quil.core.sqrt.call(null,(2))));
var next_x = (new cljs.core.Keyword(null,"delta-x","delta-x",540498700).cljs$core$IFn$_invoke$arity$1(state) + (theta_x / steps));
var next_y = (new cljs.core.Keyword(null,"delta-y","delta-y",938971239).cljs$core$IFn$_invoke$arity$1(state) + (theta_y / steps));
if((next_x <= theta_x)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delta-x","delta-x",540498700),(function (){var x__4222__auto__ = next_x;
var y__4223__auto__ = theta_x;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),new cljs.core.Keyword(null,"delta-y","delta-y",938971239),new cljs.core.Keyword(null,"delta-y","delta-y",938971239).cljs$core$IFn$_invoke$arity$1(state)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delta-x","delta-x",540498700),new cljs.core.Keyword(null,"delta-x","delta-x",540498700).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"delta-y","delta-y",938971239),(function (){var x__4222__auto__ = next_y;
var y__4223__auto__ = theta_y;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()], null);
}
});
rgb_rotation.core.shift_coord = (function rgb_rotation$core$shift_coord(v){
return ((rgb_rotation.core.scale * v) - rgb_rotation.core.half_unit);
});
rgb_rotation.core.draw_axis = (function rgb_rotation$core$draw_axis(){
var msize = ((0) - rgb_rotation.core.size);
quil.core.stroke_weight.call(null,(1));

quil.core.stroke.call(null,(255),(0),(0));

quil.core.line.call(null,msize,(0),(0),rgb_rotation.core.size,(0),(0));

quil.core.stroke.call(null,(0),(255),(0));

quil.core.line.call(null,(0),msize,(0),(0),rgb_rotation.core.size,(0));

quil.core.stroke.call(null,(0),(0),(255));

return quil.core.line.call(null,(0),(0),msize,(0),(0),rgb_rotation.core.size);
});
rgb_rotation.core.draw_color = (function rgb_rotation$core$draw_color(r,g,b){
var x = rgb_rotation.core.shift_coord.call(null,r);
var y = rgb_rotation.core.shift_coord.call(null,g);
var z = rgb_rotation.core.shift_coord.call(null,b);
quil.core.stroke.call(null,r,g,b);

var tr__35636__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__35636__auto__);

return quil.core.sphere.call(null,(2));
}finally {quil.core.pop_matrix.call(null);
}});
rgb_rotation.core.draw_color_vector = (function rgb_rotation$core$draw_color_vector(r,g,b){
var x = rgb_rotation.core.shift_coord.call(null,r);
var y = rgb_rotation.core.shift_coord.call(null,g);
var z = rgb_rotation.core.shift_coord.call(null,b);
quil.core.stroke.call(null,r,g,b);

quil.core.stroke_weight.call(null,(1));

quil.core.line.call(null,rgb_rotation.core.half_unit_inv,rgb_rotation.core.half_unit_inv,rgb_rotation.core.half_unit_inv,x,y,z);

return rgb_rotation.core.draw_color.call(null,r,g,b);
});
rgb_rotation.core.draw_rgb_box = (function rgb_rotation$core$draw_rgb_box(){
quil.core.stroke.call(null,(255),(255),(255));

quil.core.stroke_weight.call(null,(1));

quil.core.box.call(null,rgb_rotation.core.unit);

rgb_rotation.core.draw_color.call(null,(0),(0),(255));

rgb_rotation.core.draw_color.call(null,(0),(255),(0));

rgb_rotation.core.draw_color.call(null,(255),(0),(0));

rgb_rotation.core.draw_color.call(null,(0),(255),(255));

rgb_rotation.core.draw_color.call(null,(255),(255),(0));

rgb_rotation.core.draw_color.call(null,(255),(0),(255));

rgb_rotation.core.draw_color.call(null,(0),(0),(0));

return rgb_rotation.core.draw_color.call(null,(255),(255),(255));
});
rgb_rotation.core.draw_camera = (function rgb_rotation$core$draw_camera(){
return quil.core.camera.call(null,(80),(-180),(80),(0),(0),(0),(0),(0),(-1));
});
rgb_rotation.core.draw_scene = (function rgb_rotation$core$draw_scene(state){
quil.core.background.call(null,(20));

quil.core.fill.call(null,(255),(255),(255),(10));

rgb_rotation.core.draw_axis.call(null);

quil.core.rotate_y.call(null,((0) - new cljs.core.Keyword(null,"delta-y","delta-y",938971239).cljs$core$IFn$_invoke$arity$1(state)));

quil.core.rotate_x.call(null,new cljs.core.Keyword(null,"delta-x","delta-x",540498700).cljs$core$IFn$_invoke$arity$1(state));

var tr__35636__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgb_rotation.core.half_unit,rgb_rotation.core.half_unit,rgb_rotation.core.half_unit], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__35636__auto__);

rgb_rotation.core.draw_rgb_box.call(null);

return rgb_rotation.core.draw_color_vector.call(null,(0),(100),(200));
}finally {quil.core.pop_matrix.call(null);
}});
rgb_rotation.core.draw_state = (function rgb_rotation$core$draw_state(state){
rgb_rotation.core.draw_camera.call(null);

quil.core.rotate_z.call(null,(quil.core.PI / 0.85));

quil.core.translate.call(null,(0),(0),(-50));

return rgb_rotation.core.draw_scene.call(null,state);
});
rgb_rotation.core.draw_state_top = (function rgb_rotation$core$draw_state_top(state){
quil.core.background.call(null,(0));

quil.core.orbit_control.call(null);

return rgb_rotation.core.draw_scene.call(null,state);
});
rgb_rotation.core.run_sketch = (function rgb_rotation$core$run_sketch(){
rgb_rotation.core.rgb_rotation = (function rgb_rotation$core$run_sketch_$_rgb_rotation(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"rgb-rotation",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.update_state))?(function() { 
var G__37762__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.update_state,args);
};
var G__37762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37763__i = 0, G__37763__a = new Array(arguments.length -  0);
while (G__37763__i < G__37763__a.length) {G__37763__a[G__37763__i] = arguments[G__37763__i + 0]; ++G__37763__i;}
  args = new cljs.core.IndexedSeq(G__37763__a,0,null);
} 
return G__37762__delegate.call(this,args);};
G__37762.cljs$lang$maxFixedArity = 0;
G__37762.cljs$lang$applyTo = (function (arglist__37764){
var args = cljs.core.seq(arglist__37764);
return G__37762__delegate(args);
});
G__37762.cljs$core$IFn$_invoke$arity$variadic = G__37762__delegate;
return G__37762;
})()
:rgb_rotation.core.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgb_rotation.core.size,rgb_rotation.core.size], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.setup))?(function() { 
var G__37765__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.setup,args);
};
var G__37765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37766__i = 0, G__37766__a = new Array(arguments.length -  0);
while (G__37766__i < G__37766__a.length) {G__37766__a[G__37766__i] = arguments[G__37766__i + 0]; ++G__37766__i;}
  args = new cljs.core.IndexedSeq(G__37766__a,0,null);
} 
return G__37765__delegate.call(this,args);};
G__37765.cljs$lang$maxFixedArity = 0;
G__37765.cljs$lang$applyTo = (function (arglist__37767){
var args = cljs.core.seq(arglist__37767);
return G__37765__delegate(args);
});
G__37765.cljs$core$IFn$_invoke$arity$variadic = G__37765__delegate;
return G__37765;
})()
:rgb_rotation.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.draw_state))?(function() { 
var G__37768__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.draw_state,args);
};
var G__37768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37769__i = 0, G__37769__a = new Array(arguments.length -  0);
while (G__37769__i < G__37769__a.length) {G__37769__a[G__37769__i] = arguments[G__37769__i + 0]; ++G__37769__i;}
  args = new cljs.core.IndexedSeq(G__37769__a,0,null);
} 
return G__37768__delegate.call(this,args);};
G__37768.cljs$lang$maxFixedArity = 0;
G__37768.cljs$lang$applyTo = (function (arglist__37770){
var args = cljs.core.seq(arglist__37770);
return G__37768__delegate(args);
});
G__37768.cljs$core$IFn$_invoke$arity$variadic = G__37768__delegate;
return G__37768;
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
rgb_rotation.core.run_sketch_top = (function rgb_rotation$core$run_sketch_top(){
rgb_rotation.core.rgb_rotation_top = (function rgb_rotation$core$run_sketch_top_$_rgb_rotation_top(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"rgb-rotation-top",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.update_state))?(function() { 
var G__37771__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.update_state,args);
};
var G__37771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37772__i = 0, G__37772__a = new Array(arguments.length -  0);
while (G__37772__i < G__37772__a.length) {G__37772__a[G__37772__i] = arguments[G__37772__i + 0]; ++G__37772__i;}
  args = new cljs.core.IndexedSeq(G__37772__a,0,null);
} 
return G__37771__delegate.call(this,args);};
G__37771.cljs$lang$maxFixedArity = 0;
G__37771.cljs$lang$applyTo = (function (arglist__37773){
var args = cljs.core.seq(arglist__37773);
return G__37771__delegate(args);
});
G__37771.cljs$core$IFn$_invoke$arity$variadic = G__37771__delegate;
return G__37771;
})()
:rgb_rotation.core.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rgb_rotation.core.size,rgb_rotation.core.size], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.setup))?(function() { 
var G__37774__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.setup,args);
};
var G__37774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37775__i = 0, G__37775__a = new Array(arguments.length -  0);
while (G__37775__i < G__37775__a.length) {G__37775__a[G__37775__i] = arguments[G__37775__i + 0]; ++G__37775__i;}
  args = new cljs.core.IndexedSeq(G__37775__a,0,null);
} 
return G__37774__delegate.call(this,args);};
G__37774.cljs$lang$maxFixedArity = 0;
G__37774.cljs$lang$applyTo = (function (arglist__37776){
var args = cljs.core.seq(arglist__37776);
return G__37774__delegate(args);
});
G__37774.cljs$core$IFn$_invoke$arity$variadic = G__37774__delegate;
return G__37774;
})()
:rgb_rotation.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,rgb_rotation.core.draw_state_top))?(function() { 
var G__37777__delegate = function (args){
return cljs.core.apply.call(null,rgb_rotation.core.draw_state_top,args);
};
var G__37777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37778__i = 0, G__37778__a = new Array(arguments.length -  0);
while (G__37778__i < G__37778__a.length) {G__37778__a[G__37778__i] = arguments[G__37778__i + 0]; ++G__37778__i;}
  args = new cljs.core.IndexedSeq(G__37778__a,0,null);
} 
return G__37777__delegate.call(this,args);};
G__37777.cljs$lang$maxFixedArity = 0;
G__37777.cljs$lang$applyTo = (function (arglist__37779){
var args = cljs.core.seq(arglist__37779);
return G__37777__delegate(args);
});
G__37777.cljs$core$IFn$_invoke$arity$variadic = G__37777__delegate;
return G__37777;
})()
:rgb_rotation.core.draw_state_top));
});
goog.exportSymbol('rgb_rotation.core.rgb_rotation_top', rgb_rotation.core.rgb_rotation_top);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__35234__35235__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__35234__35235__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),rgb_rotation.core.rgb_rotation_top,new cljs.core.Keyword(null,"host-id","host-id",742376279),"rgb-rotation-top"], null));
}
});
goog.exportSymbol('rgb_rotation.core.run_sketch_top', rgb_rotation.core.run_sketch_top);

//# sourceMappingURL=core.js.map?rel=1561570814728

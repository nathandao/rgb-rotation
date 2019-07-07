(ns rgb-rotation.sketches
  (:require [rgb-rotation.data :refer [app-state tweens size scale]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def half-tweens (/ tweens 2))
(def -size (- 0 size))
(def max-v (* 255 scale))
(def half-v (/ max-v 2))
(def -half-v (- 0 half-v))

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :rgb)
  (q/ortho)
  @app-state)

(defn update-state [state]
  (let [theta-x (/ q/PI 4)
        theta-y (q/atan (/ 1 (q/sqrt 2)))
        delta-x (/ theta-x half-tweens)
        delta-y (/ theta-y half-tweens)
        step    (:step @app-state)]

    (cond
      (and (= true (:animating @app-state))
           (< step tweens)) (swap! app-state update :step inc)
      (> step tweens)       (swap! app-state assoc
                                   :animating false
                                   :step tweens))
    (cond
      (<= step half-tweens) (swap! app-state assoc
                                   :rotate-x (* delta-x step)
                                   :rotate-y 0)
      (<= step tweens)      (swap! app-state assoc
                                   :rotate-x (* delta-x half-tweens)
                                   :rotate-y (* delta-y (- step half-tweens))))
    @app-state))

(defn shift-coord [v]
  (- (* scale v) half-v))

(defn draw-axis [extended]
  (let [start-xz (if extended -size 0)
        start-y (- 0 start-xz)]
  (q/stroke-weight 1.5)
  ;; x
  (q/stroke 255 0 0)
  (q/line start-xz 0 0 size 0 0)
  ;; y
  (q/stroke 0 255 0)
  (q/line 0 start-y 0 0 -size 0)
  ;; z
  (q/stroke 0 0 255)
  (q/line 0 0 start-xz 0 0 size)))

(defn draw-color [r g b]
  (let [x (shift-coord r)
        y (- 0 (shift-coord g))
        z (shift-coord b)]
    (q/stroke r g b)
    (q/with-translation [x y z]
      (q/sphere 3))))

(defn draw-color-vector [r g b]
  (let [x (shift-coord r)
        y (- 0 (shift-coord g))
        z (shift-coord b)]
    (q/with-stroke [255 255 255]
      (q/stroke-weight 2)
      (q/line -half-v half-v -half-v x y z))
    (draw-color r g b)))

(defn draw-rgb-box [fill-box]
  (q/fill 0 0 0 0)
  (q/stroke 255 255 255)
  (q/stroke-weight 1.5)
  (q/box max-v)
  (doseq [r [255 0] g [255 0] b [255 0]]
    (draw-color r g b)))

(defn draw-scene
  ([state] (draw-scene state false))
  ([state fill-box]
   (q/rotate-y (- 0 (:rotate-y state)))
   (q/rotate-x (- 0 (:rotate-x state)))
   (q/with-translation [half-v -half-v half-v]
     (draw-rgb-box fill-box)
     (draw-color-vector (:r state)
                        (:g state)
                        (:b state)))))

(defn draw-3d-view [state]
  (q/background 5 4 144)
  (q/fill 0 0 0)
  (q/orbit-control)
  (q/rotate-x (/ q/PI 3))
  (q/rotate-z (/ q/PI 3.5))
  (q/with-translation [50 100 -50]
    (draw-axis false)
    (draw-scene @app-state true)))

(defn draw-projection [state]
  (q/background 13 72 99)
  (q/fill 0 0 0)
  (q/camera 0 1 (/ size 2) 0 0 0 0 0 -1)
  (draw-axis true)
  (draw-scene @app-state))

(defn sketch-3d [host]
  (q/defsketch rgb-rotation
    :host host
    :size [size size]
    :setup setup
    :update update-state
    :draw draw-3d-view
    :renderer :p3d
    :middleware [m/fun-mode]))

(defn sketch-projection [host]
  (q/defsketch rgb-rotation-top
    :host host
    :size [size size]
    :setup setup
    :update update-state
    :draw draw-projection
    :renderer :p3d
    :middleware [m/fun-mode]))

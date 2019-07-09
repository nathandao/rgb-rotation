(ns rgb-rotation.sketches
  (:require [rgb-rotation.data :refer [app-state tweens size scale]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def pi js/Math.PI)
(def sqrt js/Math.sqrt)
(def half-tweens (/ tweens 2))
(def -size (- 0 size))
(def max-v (* 255 scale))
(def half-v (/ max-v 2))
(def -half-v (- 0 half-v))
(def theta-x (/ pi 4))
(def theta-y (js/Math.atan (/ 1 (sqrt 2))))
(def delta-x (/ theta-x half-tweens))
(def delta-y (/ theta-y half-tweens))

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :rgb)
  (q/ortho)
  @app-state)

(defn update-state [state]
  (let [step (:step @app-state)]
    (if (and (= true (:animating @app-state))
             (< step tweens))
      (swap! app-state update :step inc))
    (cond
      (<= step half-tweens) (swap! app-state assoc
                                   :rotate-x (* delta-x step)
                                   :rotate-y 0)
      (< step tweens)       (swap! app-state assoc
                                   :rotate-x theta-x
                                   :rotate-y (* delta-y (- step half-tweens)))
      (>= step tweens)      (swap! app-state assoc
                                   :animating false
                                   :step tweens
                                   :rotate-x theta-x
                                   :rotate-y theta-y))
    @app-state))

(defn transformed-rgb [state]
  (let [r (:r state)
        g (:g state)
        b (:b state)]
    {:r (-> (* r (sqrt (/ 2 3)))
            (- (-> (+ g b)
                   (* (/ 1 (sqrt 6)))))
            (* scale))
     :g (-> (- g b)
            (* (/ 1 (sqrt 2)))
            (* scale)
            ;; multiplying -1 as correction for the inversed y-axis
            ;; due to the mirrored view in 3d
            (* -1))
     :b (-> (+ r g)
            (+ b)
            (* (/ 1 (sqrt 3)))
            (* scale))}))

(defn dotted-line [L t]
  (let [intervals (-> (/ L t) (/ 2) js/Math.floor)]
    (dotimes [i intervals]
      (q/line (-> (* i 2) (* t)) 0 0
              (-> (* i 2) (* t) (+ t)) 0 0))))

(defn shift-coord [v]
  (- (* scale v) half-v))

(defn hexagon-sides
  ([L sides] (hexagon-sides 1 L sides))
  ([idx L sides]
   (let [rotate-z    (if (= idx 1)
                       (* (/ -2 3) pi)
                       (* (/ -1 3) pi))
         whole-sides (js/Math.floor sides)
         partial     (- sides whole-sides)
         draw-length (if (> idx whole-sides)
                       (* partial L)
                       L)]

       (q/with-translation [L 0 0]
         (q/with-rotation [rotate-z 0 0 1]
           (dotted-line draw-length 2)
           (if (<= idx whole-sides)
             (hexagon-sides (inc idx) L sides)))))))

(defn draw-hexagon [r g b]
  (let [M (max r g b)
        m (min r g b)
        C (- M m)
        L (-> (- M m)
              (/ (js/Math.pow 6 0.5))
              (* 2)
              (* scale))
        ;; equation from https://en.wikipedia.org/wiki/HSL_and_HSV
        h (cond (= M r) (-> (- g b) (/ C) (mod 6))
                (= M g) (-> (- b r) (/ C) (+ 2))
                (= M b) (-> (- r g) (/ C) (+ 4)))]

    ;; full hexagon
    (q/stroke 255 255 255)
    (q/stroke-weight 1.5)
    (hexagon-sides L 6)

    ;; partial hexagon
    (q/with-translation [0 0 0.5]
      (q/stroke r g b)
      (q/stroke-weight 2.5)
      (hexagon-sides L h))))

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
      (q/line -half-v half-v -half-v x y z))
    (draw-color r g b)))

(defn draw-rgb-box []
  ;; draw box
  (q/fill 255 255 255 5)
  (q/stroke 255 255 255 100)
  (q/stroke-weight 1)
  (q/box max-v)

  ;; draw color dots at each corner
  (doseq [r [255 0] g [255 0] b [255 0]]
    (draw-color r g b)))

(defn draw-scene [state]
  ;; if rotation is complete, display the projected hexagon
  (if (>= (:step state) tweens)
    (let [transformed (transformed-rgb state)
          r_ (:r transformed)
          g_ (:g transformed)
          b_ (:b transformed)]
      (draw-hexagon (:r state) (:g state) (:b state))
      (q/stroke-weight 1)
      (q/stroke (:r state) (:g state) (:b state))
      (q/line r_ g_ 0 r_ g_ b_)))

  ;; execute the color space rotation
  ;; and draw the result color space
  (q/with-rotation [(- 0 (:rotate-y state)) 0 1 0]
    (q/with-rotation [(- 0 (:rotate-x state)) 1 0 0]
      (q/with-translation [half-v -half-v half-v]
        (draw-rgb-box)
        (q/stroke-weight 3)
        (draw-color-vector (:r state)
                           (:g state)
                           (:b state))))))

(defn view-3d [state]
  (q/background 0 0 40)
  (q/fill 0 0 0)

  ;; allow dragging around 3d view
  (q/orbit-control)

  ;; adjust angles for a "nicer" initial 3d view from the side
  (q/with-rotation [(/ pi 3) 1 0 0]
    (q/with-rotation [(/ pi 3.5) 0 0 1]
      (q/with-translation [50 100 -50]
        (draw-axis false)
        (draw-scene state)))))

(defn view-top [state]
  (q/background 10 30 60)
  (q/fill 0 0 0)
  ;; fixed camera
  (q/camera 0 1 (/ size 1.5) 0 0 0 0 0 -1)
  (draw-axis true)
  (draw-scene state))

(defn sketch-3d [host]
  (q/defsketch rgb-rotation
    :host host
    :size [size size]
    :setup setup
    :update update-state
    :draw view-3d
    :renderer :p3d
    :middleware [m/fun-mode]))

(defn sketch-projection [host]
  (q/defsketch rgb-rotation-top
    :host host
    :size [size size]
    :setup setup
    :update update-state
    :draw view-top
    :renderer :p3d
    :middleware [m/fun-mode]))

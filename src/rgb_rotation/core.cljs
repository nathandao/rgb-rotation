(ns rgb-rotation.core
  (:require [reagent.core :as r]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def tweens 100)
(def half-tweens (/ tweens 2))
(def color (r/atom {:r 200 :g 123 :b 80}))

(def app-state (r/atom {:delta-y 0
                        :delta-x 0
                        :animating true
                        :current-step 0}))

(def size 380)
(def -size (- 0 size))
(def scale 0.5)
(def max-v (* 255 scale))
(def half-max-v (/ max-v 2))
(def -half-max-v (- 0 half-max-v))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (q/ortho)
  {:delta-y 0
   :delta-x 0
   :animating true
   :current-step 0})

(defn update-state [state]
  (let [theta-x (/ q/PI 4)
        theta-y (q/atan (/ 1 (q/sqrt 2)))
        step-x (/ theta-x half-tweens)
        step-y (/ theta-y half-tweens)
        current-step (:current-step state)]
    (if (and (<= current-step tweens)
             (= (:animating state) true))
      (do
        (swap! (q/state-atom) update-in [:current-step] inc)
        (if (<= current-step half-tweens)
          (swap! (q/state-atom)
                 assoc :delta-x
                 (* step-x current-step))
          (swap! (q/state-atom)
                 assoc :delta-y
                 (* step-y (- current-step half-tweens))))))
    (reset! app-state @(q/state-atom))
    @(q/state-atom)))

(defn shift-coord [v]
  (- (* scale v) half-max-v))

(defn draw-axis [extended]
  (let [start-xz (if extended -size 0)
        start-y (- 0 start-xz)]
  (q/stroke-weight 2)
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
      (q/sphere 5))))

(defn draw-color-vector [r g b]
  (let [x (shift-coord r)
        y (- 0 (shift-coord g))
        z (shift-coord b)]
    (q/stroke r g b)
    (q/stroke-weight 2)
    (q/line -half-max-v half-max-v -half-max-v
            x y z)
    (draw-color r g b)))

(defn draw-rgb-box []
  (q/fill 255 255 255 30)
  (q/stroke 255 255 255)
  (q/stroke-weight 1)
  (q/box max-v)

  (draw-color 0 0 255)
  (draw-color 0 255 0)
  (draw-color 255 0 0)

  (draw-color 0 255 255)
  (draw-color 255 255 0)
  (draw-color 255 0 255)

  (draw-color 0 0 0)
  (draw-color 255 255 255))

(defn draw-camera[]
  (q/camera (/ size 3) (/ size 3) (/ size 4)
            0 0 0
            0 0 -1))

(defn draw-scene [state]
  (q/rotate-y (- 0 (:delta-y state)))
  (q/rotate-x (- 0 (:delta-x state)))

  (q/with-translation [half-max-v -half-max-v half-max-v]
    (draw-rgb-box)
    (draw-color-vector (:r @color) (:g @color) (:b @color))))

(defn draw-state [state]
  (q/background 20)
  (q/fill 255 255 255)
  (draw-camera)

  (q/translate 0 0 (/ -size 4))
  (draw-axis false)
  (draw-scene state))

(defn draw-state-top [state]
  (q/fill 255 255 255)
  (q/background 20)
  (q/orbit-control)
  (draw-axis true)
  (draw-scene state))

(defn ^:export run-sketch []
  (q/defsketch rgb-rotation
    :host "rgb-rotation"
    :size [size size]
    :setup setup
    :update update-state
    :draw draw-state
    :renderer :p3d
    :middleware [m/fun-mode]))

(defn ^:export run-sketch-top []
  (q/defsketch rgb-rotation-top
    :host "rgb-rotation-top"
    :size [size size]
    :setup setup
    :update update-state
    :draw draw-state-top
    :renderer :p3d
    :middleware [m/fun-mode]))

(defn slider []
  [:input {:type "range"
           :value (:current-step @app-state)
           :min 0
           :max tweens
           :on-change (fn [e]
                        (swap! app-state assoc :animating false)
                        (swap! app-state
                               assoc :current-step
                               (.. e -target -value)))}])

(defn ^:export controls[]
  (r/render [slider]
            (js/document.getElementById "controls")))

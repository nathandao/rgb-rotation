(ns rgb-rotation.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def size 280)
(def scale 0.35)
(def unit (* 255 scale))
(def half-unit-inv (- 0 (/ unit 2)))
(def half-unit (/ unit 2))


(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :rgb)

  (q/ortho)

  ; setup function returns initial state. It contains
  ; circle color and position.
  {:delta-x 0
   :delta-y 0})

(defn update-state [state]
  (let [steps 40
        theta-x (/ q/PI 4)
        theta-y (q/atan (/ 1 (q/sqrt 2)))
        next-x  (+ (:delta-x state) (/ theta-x steps))
        next-y  (+ (:delta-y state) (/ theta-y steps))]
    (if (<= next-x theta-x)
      {:delta-x (min next-x theta-x)
       :delta-y (:delta-y state)}
      {:delta-x (:delta-x state)
       :delta-y (min next-y theta-y)})))

(defn shift-coord [v]
  (- (* scale v) half-unit))

(defn draw-axis []
  (let [msize (- 0 size)]
  (q/stroke-weight 1)
  ;; x
  (q/stroke 255 0 0)
  (q/line msize 0 0 size 0 0)
  ;; y
  (q/stroke 0 255 0)
  (q/line 0 msize 0 0 size 0)
  ;; z
  (q/stroke 0 0 255)
  (q/line 0 0 msize 0 0 size)))

(defn draw-color [r g b]
  (let [x (shift-coord r)
        y (shift-coord g)
        z (shift-coord b)]
    (q/stroke r g b)
    (q/with-translation [x y z]
      (q/sphere 2))))

(defn draw-color-vector [r g b]
  (let [x (shift-coord r)
        y (shift-coord g)
        z (shift-coord b)]
    (q/stroke r g b)
    (q/stroke-weight 1)
    (q/line half-unit-inv half-unit-inv half-unit-inv
            x y z)

    (draw-color r g b)))

(defn draw-rgb-box []
  (q/stroke 255 255 255)
  (q/stroke-weight 1)

  (q/box unit)

  (draw-color 0 0 255)
  (draw-color 0 255 0)
  (draw-color 255 0 0)

  (draw-color 0 255 255)
  (draw-color 255 255 0)
  (draw-color 255 0 255)

  (draw-color 0 0 0)
  (draw-color 255 255 255))

(defn draw-camera[]
  (q/camera 80 -180 80
            0 0 0
            0 0 -1))

(defn draw-scene [state]
  (q/background 20)
  (q/fill 255 255 255 10)

  (draw-axis)

  (q/rotate-y (- 0 (:delta-y state)))
  (q/rotate-x (:delta-x state))

  (q/with-translation [half-unit half-unit half-unit]
    (draw-rgb-box)
    (draw-color-vector 0 100 200)))

(defn draw-state [state]
  (draw-camera)

  (q/rotate-z (/ q/PI 0.85))
  (q/translate 0 0 -50)
  (draw-scene state))

(defn draw-state-top [state]
  (q/background 0)
  (q/orbit-control)
  (draw-scene state))

;; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch rgb-rotation
    :host "rgb-rotation"
    :size [size size]

    ; setup function called only once, during sketch initialization.
    :setup setup

    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    :renderer :p3d

    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

(defn ^:export run-sketch-top []
  (q/defsketch rgb-rotation-top
    :host "rgb-rotation-top"
    :size [size size]

    ; setup function called only once, during sketch initialization.
    :setup setup

    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state-top
    :renderer :p3d

    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)

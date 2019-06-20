(ns rgb-rotation.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :rgb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:angle 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)})

(def scale 1)
(def origin (* -127.5 scale))
(defn shift-coord [v]
  (let [s (* 127.5 scale)]
    (- v s)))

(defn draw-axis []
  (q/stroke-weight 2)
  (q/stroke 255 0 0)
  (q/line -500 0 0 500 0 0)

  (q/stroke 0 255 0)
  (q/line 0 -500 0 0 500 0)

  (q/stroke 0 0 255)
  (q/line 0 0 -500 0 0 500))


(defn draw-color [r g b]
  (let [x (shift-coord r)
        y (shift-coord g)
        z (shift-coord b)]
    (q/with-translation [x y z]
      (q/stroke r g b)
      (q/sphere 5))))

(defn draw-color-vector [r g b]
  (let [x (shift-coord r)
        y (shift-coord g)
        z (shift-coord b)]

    (q/stroke 0 0 0)
    (q/stroke-weight 1)
    (q/line origin origin origin x y z)

    (draw-color r g b)))

(defn draw-rgb-box []
  (q/stroke 0 0 0)
  (q/stroke-weight 1)

  (q/box 255)

  (draw-color 0 0 255)
  (draw-color 0 255 0)
  (draw-color 255 0 0)

  (draw-color 0 255 255)
  (draw-color 255 255 0)
  (draw-color 255 0 255)

  (draw-color 0 0 0)
  (draw-color 255 255 255))

(defn draw-state [state]
  ;; Clear the sketch by filling it with light-grey color.
  (q/background 255)

  (q/ortho)
  (q/orbit-control)

  #_(q/camera 300 200 20
            0 1 0
            0 0 -1)
  ;; Set circle color.
  (q/fill 255 255 255 200)

  (draw-axis)

  (q/rotate-y (- 0 (q/atan (/ 1 (q/sqrt 2)))))
  (q/rotate-x (/ q/PI 4))

  (q/with-translation [127.5 127.5 127.5]
    (draw-rgb-box)
    (draw-color-vector 240 120 200)))

;; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch rgb-rotation
    :host "rgb-rotation"
    :size [800 800]

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

; uncomment this line to reset the sketch:
; (run-sketch)

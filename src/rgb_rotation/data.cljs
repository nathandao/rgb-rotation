(ns rgb-rotation.data
  (:require [reagent.core :as r]))

(def app-state (r/atom {:rotate-y 0
                        :rotate-x 0
                        :animating false
                        :current-step 0
                        :r 180 :g 20 :b 120}))

(def tweens 120)
(def size 500)
(def scale 0.6)

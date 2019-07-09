(ns rgb-rotation.data
  (:require [reagent.core :as r]))

(def app-state (r/atom {:rotate-y     0
                        :rotate-x     0
                        :animating    false
                        :step         0
                        :step-hexagon 0
                        :r            150
                        :g            50
                        :b            130}))

(def tweens 120)
(def size 500)
(def scale 0.6)

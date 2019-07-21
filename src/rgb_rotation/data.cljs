(ns rgb-rotation.data
  (:require [reagent.core :as r]))

(def app-state (r/atom {:rotate-y  0
                        :rotate-x  0
                        :animating false
                        :step      0
                        :r         0
                        :g         0
                        :b         0}))

(def tweens 120)
(def size 400)
(def scale 0.6)

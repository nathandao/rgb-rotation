(ns rgb-rotation.core
  (:require [rgb-rotation.sketches :refer [sketch-3d sketch-projection]]
            [rgb-rotation.data :refer [app-state tweens]]
            [reagent.core :as r]))

(defn color-input [color-key label]
  [:label
   label
   [:input
    {:type      "number"
     :value     (color-key @app-state)
     :min       0
     :max       255
     :on-change (fn [e]
                  (swap!
                   app-state assoc
                   color-key (-> (.. e -target -value)
                                 (js/parseInt 10))))}]])

(defn slider []
  [:input
   {:type      "range"
    :class     "info"
    :value     (:step @app-state)
    :min       0
    :step      1
    :max       tweens
    :on-change (fn [e]
                 (swap! app-state assoc
                        :animating false
                        :step (-> (.. e -target -value)
                                  (js/parseInt  10))))}])

(defn play-button []
  [:button
   {:disabled (>= (:step @app-state) tweens)
    :on-click #(swap! app-state update :animating not)}
   (if (:animating @app-state) "Stop" "Play")])

(defn control-panel[]
  [:div
   [color-input :r "RED"]
   [color-input :g "GREEN"]
   [color-input :b "BLUE"]
   [play-button]
   [slider]])

(defn ^:export main[]
  (sketch-3d "view-3d")
  (sketch-projection "view-projection")
  (r/render [control-panel]
            (js/document.getElementById "controls")))

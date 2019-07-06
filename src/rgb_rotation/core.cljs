(ns rgb-rotation.core
  (:require [rgb-rotation.sketches :refer [sketch-3d sketch-projection]]
            [rgb-rotation.data :refer [app-state tweens]]
            [reagent.core :as r]))

(defn color-input [color-key]
  [:input {:type "number"
           :value (color-key @app-state)
           :min 0
           :max 255
           :on-change (fn [e]
                        (swap!
                         app-state assoc
                         color-key
                         (js/parseInt (.. e -target -value) 10)))}])

(defn slider []
  [:input {:type "range"
           :class "info"
           :value (:current-step @app-state)
           :min 0
           :step 1
           :max tweens
           :on-change (fn [e]
                        (swap! app-state assoc
                               :animating false)
                        (swap! app-state assoc
                               :current-step
                               (js/parseInt (.. e -target -value) 10)))}])

(defn play-button []
  [:button {:disabled (>= (:current-step @app-state) tweens)
            :on-click #(swap! app-state update :animating not)}
   (if (:animating @app-state) "Stop" "Play")])

(defn control-panel[]
  [:div
   [:label "RED" [color-input :r]]
   [:label "GREEN" [color-input :g]]
   [:label "BLUE" [color-input :b]]
   [play-button]
   [slider]])

(defn ^:export main[]
  (sketch-3d "view-3d")
  (sketch-projection "view-projection")
  (r/render [control-panel]
            (js/document.getElementById "controls")))

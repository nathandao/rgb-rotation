(ns rgb-rotation.core
  (:require [rgb-rotation.sketches :refer [sketch-3d sketch-projection]]
            [rgb-rotation.data :refer [app-state tweens]]
            [reagent.core :as r]))

(defn color-input [color-key color]
  (let [class-name (str
                    "range-xs "
                    (cond
                      (= color-key :r) "error"
                      (= color-key :g) "success"
                      :else            "info"))]
    [:div {:class "input-group relative"}
     [:div {:class "position-top-right"}
      (color-key @app-state)]
     [:input
      {:type      "range"
       :id        color
       :value     (color-key @app-state)
       :min       0
       :max       255
       :class     class-name
       :on-change (fn [e]
                    (swap!
                     app-state assoc
                     color-key (-> (.. e -target -value)
                                   (js/parseInt 10))))}]]))
(defn play-button []
  [:button
   {:class    "button-pill"
    :disabled (>= (:step @app-state) tweens)
    :on-click #(swap! app-state update :animating not)}
   (if (:animating @app-state) "Pause" "Animate")])

(defn slider []
  [:div {:class "input-group relative"}
   [:input
    {:type      "range"
     :class     "warning range-xs"
     :value     (:step @app-state)
     :min       0
     :step      1
     :max       tweens
     :on-change (fn [e]
                  (swap! app-state assoc
                         :animating false
                         :step (-> (.. e -target -value)
                                   (js/parseInt  10))))}]

   ])

(defn control-panel[]
  [:div {:class "max-width-s"}
   [color-input :r "R"]
   [color-input :g "G"]
   [color-input :b "B"]
   [play-button]
   [slider]])

(defn ^:export main[]
  (sketch-3d "view-3d")
  (sketch-projection "view-projection")
  (r/render [control-panel]
            (js/document.getElementById "controls")))

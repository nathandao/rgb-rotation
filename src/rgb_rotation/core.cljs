(ns rgb-rotation.core
  (:require [rgb-rotation.sketches :refer [sketch-3d sketch-projection]]
            [rgb-rotation.controls :refer [control-panel]]
            [reagent.core :as r]))

(defn ^:export main[]
  (sketch-3d "view-3d")
  (sketch-projection "view-projection")
  (r/render [control-panel]
            (js/document.getElementById "controls")))

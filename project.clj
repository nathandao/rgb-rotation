(defproject rgb-rotation "0.1.0-SNAPSHOT"
  :description "visualize the rotation of RGB color space to obtain Hue value"
  :url "http://nathan.iki.fi"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}
  :dependencies [[cljsjs/p5 "0.9.0-0"]
                 [figwheel-sidecar "0.5.19"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [quil "3.0.0" :exclusions [cljsjs/p5]]
                 [reagent "0.8.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.19"]]
  :hooks [leiningen.cljsbuild]

  :clean-targets ^{:protect false} ["resources/public/js"]
  :cljsbuild
  {:builds [; development build with figwheel hot swap
            {:id "development"
             :source-paths ["src"]
             :figwheel true
             :compiler
             {:main "rgb_rotation.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/development"
              :asset-path "js/development"}}
            ; minified and bundled build for deployment
            {:id "optimized"
             :source-paths ["src"]
             :compiler
             {:main "rgb_rotation.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced}}]})

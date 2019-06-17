/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of palestine-vect1
 * 
 * @author Manuel Mella
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                palestine_vect1 : {
                    width : 294.61548,
                    height : 792.60669,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : lon, "y" : lat};
                    },
                    'elems': {
                        "PS-JRH" : "m 224.28,277.12 -0.49,0.98 0.37,8.72 1.9,2.18 0.28,1.38 -1.61,2.34 2.88,6.34 -1.09,7.22 -3.11,2.99 1.68,8.52 3,1.9 -1.68,3.33 1.79,2.87 -1.35,3.83 2.12,11.79 -4.17,7.47 0,0 -6.64,-6.04 -0.93,-1.49 -0.38,-2.73 -2.38,-1.5 -0.65,-0.19 -1.7,-0.07 -2.54,0.32 -1.27,0.36 -2.45,1.07 -1.2,0.16 -1.17,-0.33 -2.89,-1.72 -0.58,-0.75 -0.11,-0.49 0.33,-0.87 0.65,-0.81 0.07,-0.6 -0.43,-0.95 -0.6,-0.66 -1.32,-0.39 -0.48,-0.49 -0.23,-0.98 -0.21,-4.25 0,0 3.2,0.64 2.29,0.16 0.84,-0.77 0.33,-0.79 0.16,-1 0.02,-1.05 -0.71,-2.89 0.4,-3.5 0.31,-0.79 1.26,-1.89 0.28,-0.8 -0.02,-0.51 -0.06,-0.49 -1.44,-2.66 -0.2,-0.7 -0.06,-0.51 0.26,-2.55 -0.14,-1 -0.65,-1.33 -0.16,-0.61 0.14,-0.49 1.31,-1.09 1.18,-2.45 0.25,-0.8 0.02,-0.91 -0.14,-0.42 -0.31,-0.3 -2.23,-0.8 -2.77,-2.52 -0.18,-0.56 0.04,-0.37 0.34,-0.31 0.44,-0.09 1.81,0.07 1.17,-0.47 0.2,-0.42 0.04,-0.51 -0.36,-0.68 -0.57,-0.65 -0.39,-0.25 0,0 0.09,-0.01 -0.39,-0.64 -0.53,-1.63 -0.16,-0.78 0.08,-2.47 -0.08,-1.19 -0.26,-0.88 -1.05,-2.22 -0.05,-0.69 0.29,-1.15 0.7,-1.35 0.65,-0.52 1.28,-0.34 1.96,-0.13 2.4,-0.59 1,-0.52 0.3,-0.81 -0.11,-0.84 -1.15,-1.97 -0.33,-1.15 0.65,-3.44 -0.04,-1.05 -0.37,-1.58 -0.1,-1.23 0.21,-1.37 0.73,-2.26 -0.07,-1.35 -0.31,-0.69 -0.33,-0.36 -0.6,-0.21 -0.9,0.01 -1.32,0.42 -0.47,0.01 -0.22,-0.11 -0.21,-0.32 -0.01,-0.6 0.5,-0.87 1.56,-1.35 1.22,-1.63 2.46,-5.92 0,0 3.42,1.78 1.11,0.93 2.09,3.3 1.28,3.97 0.73,1.02 0.56,0.35 0.5,0.05 0.55,-0.26 2.19,-1.98 1.03,-0.69 0.44,-0.14 4.36,-0.1 3.08,-0.25 0,0 -1.49,2.95 -1.11,5.05 -0.49,5.4 -0.66,2.26 -2.43,3.29 -0.56,3.59 z",
                        "PS-JEN" : "m 209.74,209.62 -0.74,0.45 -1.32,2.27 -0.65,0.38 -1.43,0.47 -0.71,0.8 -1.52,0.88 -1.09,1.74 -0.38,0.26 -0.61,0.1 -0.41,-0.08 -1.32,-0.77 -0.65,-0.09 -0.83,0.42 -1.05,1.13 -0.69,0.45 -2.29,0.32 -0.58,0.23 -0.24,0.27 -0.21,0.57 -0.14,1.88 -0.84,2.27 0.07,1.11 0.31,1.63 -0.05,1.3 -0.38,0.92 -1.12,1.76 -0.76,2 0,0 -2.71,-1.59 -1.34,-1.12 -1.92,-2 -0.34,-0.19 -0.47,0.09 -0.83,1.44 -0.61,0.61 -0.77,0.34 -1.06,0.11 -2.16,-0.08 -2.29,-0.65 -1.84,0.09 -1.6,-0.89 -0.9,-0.18 -1.89,0.04 -2.21,0.6 -1.24,0.13 -0.93,-0.28 -0.42,-0.28 -0.32,-0.39 -0.18,-0.58 0,0 0.35,-2.68 -0.16,-0.99 -0.22,-0.38 -1.65,-0.72 -1.77,-1.03 -1.69,-0.63 -1.66,-1.88 -0.6,-0.24 -1.58,-0.29 -0.34,-0.36 -0.04,-0.26 0.46,-1.76 0,-1.66 0.38,-1.28 -0.16,-2.23 0.09,-1.65 1.01,-2.42 0,-0.44 -0.24,-0.56 -0.33,-0.34 -0.59,-0.23 -0.94,-0.08 -1.44,0.09 -1.2,0.41 -1.81,1.23 -0.98,0.38 -0.59,-0.11 -0.75,-0.81 -0.2,-0.57 0.07,-0.47 0.24,-0.41 0.39,-0.29 1.86,-0.64 0.86,-0.65 0.51,-1.01 0.11,-1.08 -0.14,-1.08 -0.23,-0.53 -0.75,-0.85 -0.99,-0.42 -1.11,-0.12 -0.5,0.07 0,0 1.02,-1.93 1.31,-0.99 6.93,-2.62 4.3,-2.19 3.39,-2.47 2.07,-2 0.6,-1.24 3.16,-3.58 0.92,-0.46 1.67,-0.25 2.38,1.3 3.08,3.19 2.64,1.94 2.71,1.34 1.37,0.36 2.01,0.01 8.43,-1.55 3.31,0.06 1.46,0.36 2.79,2.08 2.8,4.74 0.54,4.36 -0.21,4.06 1,2.94 1.22,1.58 -0.05,1.03 z",
                        "PS-TKM" : "m 162.85,241.85 -2.8,0.54 -2.86,0.9 -1.74,0.24 -0.9,0.82 -0.98,1.31 -1.46,1.48 -0.14,0.82 -0.35,0.82 -2.23,0.73 -1.04,1.4 -0.7,0.24 -1.6,-0.08 -3.69,-2.46 -1.19,-1.72 -0.76,-0.65 -1.4,-2.13 -4.59,-6.04 0,0 0.36,-0.26 0.57,-1.5 -0.81,-5.81 0.19,-5.47 1.83,-3.44 1.15,-1.45 4.48,-2.01 1.2,-1.17 0.71,-5.15 1.5,-4.16 0.81,-5.21 0.76,-2.83 0.58,-1.07 0,0 0.5,-0.07 1.11,0.12 0.99,0.42 0.75,0.85 0.23,0.53 0.14,1.08 -0.11,1.08 -0.51,1.01 -0.86,0.65 -1.86,0.64 -0.39,0.29 -0.24,0.41 -0.07,0.47 0.2,0.57 0.75,0.81 0.59,0.11 0.98,-0.38 1.81,-1.23 1.2,-0.41 1.44,-0.09 0.94,0.08 0.59,0.23 0.33,0.34 0.24,0.56 0,0.44 -1.01,2.42 -0.09,1.65 0.16,2.23 -0.38,1.28 0,1.66 -0.46,1.76 0.04,0.26 0.34,0.36 1.58,0.29 0.6,0.24 1.66,1.88 1.69,0.63 1.77,1.03 1.65,0.72 0.22,0.38 0.16,0.99 -0.35,2.68 0,0 -1.8,-0.64 -1.24,-0.77 -1.83,-0.68 -0.05,2 0.3,1.56 0.46,0.6 2.16,1.32 0.38,0.38 0.49,1.02 0.13,1.62 -0.15,1.02 -0.35,0.61 -1.44,0.78 -0.34,0.59 -0.1,0.96 0.22,0.86 1.17,1.2 z",
                        "PS-TBS" : "m 229.66,213.57 -0.33,3.65 1.27,1.58 0.42,1.19 -0.49,3.04 -0.55,1.42 -0.12,1.63 1.34,3.63 -0.84,2.35 -0.04,1.45 1.18,2.93 -0.62,4.48 0.67,2.91 0.17,3.24 0.47,1.61 0.18,2.32 -0.42,1.72 0,0 -3.08,0.25 -4.36,0.1 -0.44,0.14 -1.03,0.69 -2.19,1.98 -0.55,0.26 -0.5,-0.05 -0.56,-0.35 -0.73,-1.02 -1.28,-3.97 -2.09,-3.3 -1.11,-0.93 -3.42,-1.78 0,0 -0.49,-1.39 -0.65,-2.57 -0.73,-2.02 -0.52,-1.08 -0.57,-0.61 -1.13,-0.33 -1.67,-0.04 -2.17,1.01 -2.32,0.43 -2.07,0.77 -1.16,-0.04 -0.63,-0.47 -0.78,-1.46 -0.63,-0.8 -0.62,-0.42 -2.1,-1.04 -1.45,-1.37 -0.81,-1.02 0,0 0.76,-2 1.12,-1.76 0.38,-0.92 0.05,-1.3 -0.31,-1.63 -0.07,-1.11 0.84,-2.27 0.14,-1.88 0.21,-0.57 0.24,-0.27 0.58,-0.23 2.29,-0.32 0.69,-0.45 1.05,-1.13 0.83,-0.42 0.65,0.09 1.32,0.77 0.41,0.08 0.61,-0.1 0.38,-0.26 1.09,-1.74 1.52,-0.88 0.71,-0.8 1.43,-0.47 0.65,-0.38 1.32,-2.27 0.74,-0.45 0,0 2.18,0.35 2.58,-0.75 3.92,0.17 2.16,0.66 5.08,2.37 z",
                        "PS-NBS" : "m 167.1,281.14 2.86,-3.55 1.6,-1.49 3.93,-2.11 2.57,-0.38 0.69,-0.28 0.41,-0.33 0.49,-0.75 0.26,-0.84 0.04,-1.6 -0.12,-0.5 -0.63,-1.04 -1.19,-0.92 -0.93,-0.36 -1.83,-0.32 -1.62,-0.69 -0.9,-0.14 -0.92,0.07 -0.43,0.14 -1.32,0.79 -0.71,0.18 -1.36,-0.11 -1.4,-0.57 -0.66,-0.56 -0.64,-0.86 -0.54,-1.14 -1.05,-2.95 -0.37,-0.57 -0.67,-0.55 0,0 0.35,-1.3 1.32,-2.27 0.83,-2.32 0.71,-4.02 0.1,-1.31 -0.15,-1.98 -1.12,-2.91 -0.72,-0.89 -1.13,-0.86 0,0 -0.76,-1.91 -1.17,-1.2 -0.22,-0.86 0.1,-0.96 0.34,-0.59 1.44,-0.78 0.35,-0.61 0.15,-1.02 -0.13,-1.62 -0.49,-1.02 -0.38,-0.38 -2.16,-1.32 -0.46,-0.6 -0.3,-1.56 0.05,-2 1.83,0.68 1.24,0.77 1.8,0.64 0,0 0.18,0.58 0.32,0.39 0.42,0.28 0.93,0.28 1.24,-0.13 2.21,-0.6 1.89,-0.04 0.9,0.18 1.6,0.89 1.84,-0.09 2.29,0.65 2.16,0.08 1.06,-0.11 0.77,-0.34 0.61,-0.61 0.83,-1.44 0.47,-0.09 0.34,0.19 1.92,2 1.34,1.12 2.71,1.59 0,0 0.81,1.02 1.45,1.37 2.1,1.04 0.62,0.42 0.63,0.8 0.78,1.46 0.63,0.47 1.16,0.04 2.07,-0.77 2.32,-0.43 2.17,-1.01 1.67,0.04 1.13,0.33 0.57,0.61 0.52,1.08 0.73,2.02 0.65,2.57 0.49,1.39 0,0 -2.46,5.92 -1.22,1.63 -1.56,1.35 -0.5,0.87 0.01,0.6 0.21,0.32 0.22,0.11 0.47,-0.01 1.32,-0.42 0.9,-0.01 0.6,0.21 0.33,0.36 0.31,0.69 0.07,1.35 -0.73,2.26 -0.21,1.37 0.1,1.23 0.37,1.58 0.04,1.05 -0.65,3.44 0.33,1.15 1.15,1.97 0.11,0.84 -0.3,0.81 -1,0.52 -2.4,0.59 -1.96,0.13 -1.28,0.34 -0.65,0.52 -0.7,1.35 -0.29,1.15 0.05,0.69 1.05,2.22 0.26,0.88 0.08,1.19 -0.08,2.47 0.16,0.78 0.53,1.63 0.39,0.64 -0.09,0.01 0,0 -1.03,0.01 -1.96,-0.46 -0.9,0.14 -1.84,1.74 -0.43,0.18 -0.47,-0.07 -1.07,-0.87 -0.96,-1.35 -0.23,-0.57 -0.35,-2.09 -0.32,-0.69 -0.24,-0.25 -1.26,-0.7 -5.16,-1.81 -1.05,-0.05 -1.52,0.43 -0.74,-0.05 -0.71,-0.39 -1.11,-0.89 -0.55,-0.17 -1.7,0.15 -1.69,-0.06 -2.15,0.13 -0.61,-0.28 -1.19,-1.14 -0.56,-0.16 -3.61,1.65 -1.14,0.2 z",
                        "PS-QQA" : "m 162.66,259.71 -3.08,0.37 -1.02,-0.03 -1.28,-0.21 -1.89,-0.46 -2.74,-1.25 -1.87,-0.51 -1.81,-0.76 -0.39,-0.09 -0.52,0.07 -0.49,0.37 -0.18,0.3 -0.54,2.44 -0.24,0.56 -2.16,3.75 -0.49,1.39 -0.46,0.61 -2.48,1.93 -0.97,0.57 -0.74,0.27 -2.61,0.45 -3.4,1.45 -0.87,0.76 -1.11,1.33 -0.95,0.46 0,0 0.1,-0.81 1.4,-2.65 0.55,-2.12 -0.21,-2.6 -1.31,-5.78 -0.93,-1.95 -2.35,-3.52 -0.08,-2.35 0.3,-2.37 3.11,-7.05 2.37,-3.43 1.1,-0.78 0,0 4.59,6.04 1.4,2.13 0.76,0.65 1.19,1.72 3.69,2.46 1.6,0.08 0.7,-0.24 1.04,-1.4 2.23,-0.73 0.35,-0.82 0.14,-0.82 1.46,-1.48 0.98,-1.31 0.9,-0.82 1.74,-0.24 2.86,-0.9 2.8,-0.54 0,0 1.13,0.86 0.72,0.89 1.12,2.91 0.15,1.98 -0.1,1.31 -0.71,4.02 -0.83,2.32 -1.32,2.27 z",
                        "PS-SLT" : "m 167.1,281.14 -1.33,-0.68 -1.73,-1.21 -0.94,-0.44 -1.22,-0.15 -1.91,0.44 -0.48,-0.02 -1.79,-0.98 -1.62,-0.59 -1.18,0.07 -0.77,0.35 -0.57,0.45 -0.92,1.29 -0.33,0.18 -2.22,0.34 -1.45,0.59 -1.13,0.69 -1.25,0.22 -0.86,-0.03 -1.66,-0.28 -2.75,-0.75 -2.55,-0.22 -1.3,-0.61 -0.94,-1.32 -0.5,-0.35 -0.82,-0.14 -2.03,0.01 0,0 -0.24,-0.45 -1.8,-1.92 -0.54,-1.35 0.1,-0.8 0,0 0.95,-0.46 1.11,-1.33 0.87,-0.76 3.4,-1.45 2.61,-0.45 0.74,-0.27 0.97,-0.57 2.48,-1.93 0.46,-0.61 0.49,-1.39 2.16,-3.75 0.24,-0.56 0.54,-2.44 0.18,-0.3 0.49,-0.37 0.52,-0.07 0.39,0.09 1.81,0.76 1.87,0.51 2.74,1.25 1.89,0.46 1.28,0.21 1.02,0.03 3.08,-0.37 0,0 0.67,0.55 0.37,0.57 1.05,2.95 0.54,1.14 0.64,0.86 0.66,0.56 1.4,0.57 1.36,0.11 0.71,-0.18 1.32,-0.79 0.43,-0.14 0.92,-0.07 0.9,0.14 1.62,0.69 1.83,0.32 0.93,0.36 1.19,0.92 0.63,1.04 0.12,0.5 -0.04,1.6 -0.26,0.84 -0.49,0.75 -0.41,0.33 -0.69,0.28 -2.57,0.38 -3.93,2.11 -1.6,1.49 z",
                        "PS-RBH" : "m 197.69,325.58 -0.77,-0.23 -0.48,0.03 -1.93,0.52 -0.44,-0.02 -0.55,-0.24 -0.92,-1.95 -0.99,-1.01 -0.7,-1.73 -0.26,-0.36 -0.55,-0.26 -1.6,-0.19 -1.36,-0.43 -1.37,-1.83 -0.56,-0.57 -0.44,-0.27 -1.82,-0.36 -1.57,-0.51 -0.88,-0.01 -0.8,0.35 -0.92,1.16 -0.3,0.11 -0.55,-0.23 -0.93,-1.07 -0.89,-0.39 -3.11,-0.21 -1.47,0.42 -2.2,-0.74 -1.17,0.28 -1.14,0.84 -0.58,1.1 0.05,1.4 -0.1,0.6 -0.3,0.29 -0.59,0.15 -3.11,-0.08 -1.65,-0.81 -4.45,0.1 -1.91,-0.08 -0.76,-0.21 -2.24,-0.98 -0.73,-0.02 -0.46,0.26 -0.48,0.79 -0.29,2.15 -0.35,0.94 -1.89,1.67 -0.71,0.77 0,0 -2.35,1.39 -3.24,3.52 -4.39,1.57 -4.76,-0.68 -3.33,-1.43 -1.44,-5.41 2.12,-3.14 8.61,-1.54 1.52,-4.72 -0.83,-3.24 -3.94,-3.14 -2.64,-3.56 -0.42,-4.58 2.36,-5.04 -0.75,-2 0.76,-0.62 -0.33,-1.09 -0.04,-1.36 1.38,-3.01 0.4,-2.99 -0.57,-2.33 -1.74,-3.32 0,0 2.03,-0.01 0.82,0.14 0.5,0.35 0.94,1.32 1.3,0.61 2.55,0.22 2.75,0.75 1.66,0.28 0.86,0.03 1.25,-0.22 1.13,-0.69 1.45,-0.59 2.22,-0.34 0.33,-0.18 0.92,-1.29 0.57,-0.45 0.77,-0.35 1.18,-0.07 1.62,0.59 1.79,0.98 0.48,0.02 1.91,-0.44 1.22,0.15 0.94,0.44 1.73,1.21 1.33,0.68 0,0 1.94,-0.04 1.14,-0.2 3.61,-1.65 0.56,0.16 1.19,1.14 0.61,0.28 2.15,-0.13 1.69,0.06 1.7,-0.15 0.55,0.17 1.11,0.89 0.71,0.39 0.74,0.05 1.52,-0.43 1.05,0.05 5.16,1.81 1.26,0.7 0.24,0.25 0.32,0.69 0.35,2.09 0.23,0.57 0.96,1.35 1.07,0.87 0.47,0.07 0.43,-0.18 1.84,-1.74 0.9,-0.14 1.96,0.46 1.03,-0.01 0,0 0.39,0.25 0.57,0.65 0.36,0.68 -0.04,0.51 -0.2,0.42 -1.17,0.47 -1.81,-0.07 -0.44,0.09 -0.34,0.31 -0.04,0.37 0.18,0.56 2.77,2.52 2.23,0.8 0.31,0.3 0.14,0.42 -0.02,0.91 -0.25,0.8 -1.18,2.45 -1.31,1.09 -0.14,0.49 0.16,0.61 0.65,1.33 0.14,1 -0.26,2.55 0.06,0.51 0.2,0.7 1.44,2.66 0.06,0.49 0.02,0.51 -0.28,0.8 -1.26,1.89 -0.31,0.79 -0.4,3.5 0.71,2.89 -0.02,1.05 -0.16,1 -0.33,0.79 -0.84,0.77 -2.29,-0.16 z",
                        "PS-JEM" : "m 224.8,348.98 -0.2,0.36 -1.59,5.02 0,0 -6.89,-6.98 -0.77,-0.57 -0.76,-0.37 -2.18,-0.67 -0.74,-0.07 -1.73,0.48 -1.38,0.03 -1.56,-0.36 -3.03,-0.26 -2.27,-0.68 -0.41,-0.02 -0.7,0.17 -2.95,1.27 -0.85,0.2 -1.66,-0.04 -1.37,-0.47 -1.18,-0.16 -1.91,0.57 -1.87,1.28 -0.63,0.22 -2.86,0.49 -1.49,-0.22 -0.88,0.02 -3.49,1.36 -1.68,0.13 -1.1,-0.19 -0.51,-0.24 -5.23,-3.59 0,0 1.8,-2.81 0.51,-7.3 -3.14,-3.28 -7.99,0.04 -7.45,-3 -3.46,-1.66 -3.8,-3.51 -0.93,0.55 0,0 0.71,-0.77 1.89,-1.67 0.35,-0.94 0.29,-2.15 0.48,-0.79 0.46,-0.26 0.73,0.02 2.24,0.98 0.76,0.21 1.91,0.08 4.45,-0.1 1.65,0.81 3.11,0.08 0.59,-0.15 0.3,-0.29 0.1,-0.6 -0.05,-1.4 0.58,-1.1 1.14,-0.84 1.17,-0.28 2.2,0.74 1.47,-0.42 3.11,0.21 0.89,0.39 0.93,1.07 0.55,0.23 0.3,-0.11 0.92,-1.16 0.8,-0.35 0.88,0.01 1.57,0.51 1.82,0.36 0.44,0.27 0.56,0.57 1.37,1.83 1.36,0.43 1.6,0.19 0.55,0.26 0.26,0.36 0.7,1.73 0.99,1.01 0.92,1.95 0.55,0.24 0.44,0.02 1.93,-0.52 0.48,-0.03 0.77,0.23 0,0 0.21,4.25 0.23,0.98 0.48,0.49 1.32,0.39 0.6,0.66 0.43,0.95 -0.07,0.6 -0.65,0.81 -0.33,0.87 0.11,0.49 0.58,0.75 2.89,1.72 1.17,0.33 1.2,-0.16 2.45,-1.07 1.27,-0.36 2.54,-0.32 1.7,0.07 0.65,0.19 2.38,1.5 0.38,2.73 0.93,1.49 z",
                        "PS-BTH" : "m 196.62,400.65 -0.94,0.32 -1.5,-0.02 -0.78,-0.25 -3.26,-1.55 -0.81,-0.51 -1.59,-2.84 -0.33,-0.95 0.06,-0.99 0.68,-1.86 -0.13,-0.95 -0.36,-0.55 -2.65,-2.16 -2.37,-1.02 -1.62,-0.48 -0.6,-0.37 -1.49,-1.91 -1.73,-1.84 -1.9,-1.48 -0.38,-0.68 -0.03,-2.48 -1.42,-3.21 -1.91,-5.71 -0.49,-0.94 -1.6,-1.88 -0.35,-0.14 -0.24,0.05 -0.35,0.52 -0.3,3.76 -0.31,0.65 -0.49,0.38 -0.76,0.31 -0.88,0.04 -1.82,-0.32 -2.07,-0.18 -0.8,-0.23 -0.79,-0.38 -0.52,-0.44 -0.45,-0.66 -0.26,-0.72 0.18,-0.52 1.47,-0.71 0.65,-0.82 0.2,-0.61 -0.03,-0.57 -0.65,-0.99 -1.91,-1.21 -1.24,-0.51 -0.38,0.02 -1.22,0.55 -0.98,0.19 -0.99,-0.1 -0.55,-0.25 -0.23,-0.2 -0.32,-0.63 -0.34,-2.45 -0.42,-0.75 -1.12,-0.83 -3.99,-1.92 0,0 7.45,-7.37 7.34,-3.01 8.69,-0.22 0.24,-0.38 0,0 5.23,3.59 0.51,0.24 1.1,0.19 1.68,-0.13 3.49,-1.36 0.88,-0.02 1.49,0.22 2.86,-0.49 0.63,-0.22 1.87,-1.28 1.91,-0.57 1.18,0.16 1.37,0.47 1.66,0.04 0.85,-0.2 2.95,-1.27 0.7,-0.17 0.41,0.02 2.27,0.68 3.03,0.26 1.56,0.36 1.38,-0.03 1.73,-0.48 0.74,0.07 2.18,0.67 0.76,0.37 0.77,0.57 6.89,6.98 0,0 -3.74,11.77 -3.64,12.49 -0.35,8.99 -0.12,8.34 -11.39,-0.17 -2.72,0.96 z",
                        "PS-HBN" : "m 127.88,372.89 1.57,-2.62 5.26,-5.68 2.86,-2.5 8.08,-3.88 1.56,-1.54 0,0 3.99,1.92 1.12,0.83 0.42,0.75 0.34,2.45 0.32,0.63 0.23,0.2 0.55,0.25 0.99,0.1 0.98,-0.19 1.22,-0.55 0.38,-0.02 1.24,0.51 1.91,1.21 0.65,0.99 0.03,0.57 -0.2,0.61 -0.65,0.82 -1.47,0.71 -0.18,0.52 0.26,0.72 0.45,0.66 0.52,0.44 0.79,0.38 0.8,0.23 2.07,0.18 1.82,0.32 0.88,-0.04 0.76,-0.31 0.49,-0.38 0.31,-0.65 0.3,-3.76 0.35,-0.52 0.24,-0.05 0.35,0.14 1.6,1.88 0.49,0.94 1.91,5.71 1.42,3.21 0.03,2.48 0.38,0.68 1.9,1.48 1.73,1.84 1.49,1.91 0.6,0.37 1.62,0.48 2.37,1.02 2.65,2.16 0.36,0.55 0.13,0.95 -0.68,1.86 -0.06,0.99 0.33,0.95 1.59,2.84 0.81,0.51 3.26,1.55 0.78,0.25 1.5,0.02 0.94,-0.32 0,0 -1.66,1.47 -5.73,4.18 -5.58,2.48 -4.29,4.83 -5.03,5.15 -2.53,1.52 -4.14,0.78 -3.23,0.28 -3.73,0.64 -2.39,-0.55 -3.64,1.89 -9.94,-0.64 -7.05,-0.59 -7.22,1.8 -7.83,1.03 -4.28,-1.15 -2.77,-2.29 -1.93,-3.13 -0.47,-4 3.35,-6.73 3.82,-4.93 3.45,-6.55 0.64,-3.5 -0.75,-8.2 1.52,-7.57 z",
                        "PS-NGZ" : "m 38.93,383.81 4.32,-6.24 1.86,-3 7.49,6.97 2.35,3.47 0.02,3.87 -1.53,2.71 -4.99,1.19 0,0 -1.84,-1.07 -1.51,-1.05 -0.74,-0.24 -1.06,-0.14 -0.46,-0.29 -0.46,-0.77 -0.15,-1.05 -0.23,-0.64 -0.53,-0.75 -1.98,-2.15 z",
                        "PS-GZA" : "m 32.5,408.22 -0.12,-2.48 -0.69,-2.61 -0.57,-0.88 -0.57,-0.28 -2.55,-0.74 -3.05,-0.13 0,0 1,-1.4 1.34,-1.57 3.79,-4.19 7.85,-10.13 0,0 0.56,0.82 1.98,2.15 0.53,0.75 0.23,0.64 0.15,1.05 0.46,0.77 0.46,0.29 1.06,0.14 0.74,0.24 1.51,1.05 1.84,1.07 0,0 z",
                        "PS-DEB" : "m 24.7,419.19 -1.56,-0.25 -0.46,-0.28 -1.47,-1.47 -0.37,-0.24 -5.6,-2.03 -1.05,-0.61 -0.64,-0.71 0,0 1.58,-1.45 3.21,-3.35 2.54,-2.79 4.07,-4.91 0,0 3.05,0.13 2.55,0.74 0.57,0.28 0.57,0.88 0.69,2.61 0.12,2.48 0,0 -1.38,1.33 -5.74,7.38 z",
                        "PS-KYS" : "m 16.07,442.16 -1.03,-2.37 -0.94,-4.27 -0.25,-0.66 -0.31,-0.38 -0.6,-0.41 -3.41,-1.67 -2.62,-1.53 -5.06,-3.74 -1.18,-0.54 0,0 5.13,-5.01 5.89,-6.3 1.86,-1.68 0,0 0.64,0.71 1.05,0.61 5.6,2.03 0.37,0.24 1.47,1.47 0.46,0.28 1.56,0.25 0,0 -0.83,2.78 0.43,5.79 0.04,5.41 -1.9,3.49 z",
                        "PS-RFH" : "m 7.01,449.1 -6.72,-22.22 0.38,-0.29 0,0 1.18,0.54 5.06,3.74 2.62,1.53 3.41,1.67 0.6,0.41 0.31,0.38 0.25,0.66 0.94,4.27 1.03,2.37 0,0 -1.3,1.12 z",
                        "IL" : "m 291.2,68.19 -0.32,0.86 0.39,1.11 1.95,2.21 0.19,0.89 -0.24,0.5 -0.92,0.54 -1.94,0.23 -3.44,-0.91 -0.73,0.59 -0.41,1.07 0.87,3.58 -0.5,6.44 0.9,2.92 1.48,13.61 3,4.16 0.59,1.43 0.02,1.12 -0.79,2.18 -0.66,1.14 -3.12,5.45 -2.52,5.56 -2.8,3 -4.23,7.59 -5.38,6.25 -0.16,-0.68 -1.09,-0.62 -3.76,1.55 -1.79,0.21 -0.86,0.73 -0.66,1.53 -0.71,2.77 -3.93,0.53 -2.48,2.51 -2.74,1.94 -1.72,0.52 -1.23,0.8 -4.27,0.3 -2.06,1.33 -4.86,2.12 -1.12,1.28 0.32,2.87 -1.95,0.77 0.08,1.25 -0.42,0.49 -1.52,0.42 -2.49,1.89 -0.23,2.09 0.54,0.63 -0.25,3.03 0.4,0.94 1.28,0.7 0.34,1.27 -0.82,1.9 -0.12,1.92 1.77,3.67 -0.17,0.43 -1.73,-0.03 -0.3,1.92 -0.79,-0.02 -1,-0.66 -0.37,0.2 0.11,1.21 1.16,1.88 -0.38,0.65 -1.74,0.37 -0.92,1.3 0.81,0.61 1.11,-0.03 1.1,2.51 1.29,0.52 0.33,0.55 -0.21,1.04 -2.13,3.83 -0.15,1.03 0.27,0.92 1.42,0.69 0.35,0.69 -0.43,0.99 -0.84,0.03 -0.59,0.53 0.43,2.69 -2.03,0.63 0.5,4.59 -0.3,0.76 -1.29,0.38 -0.17,0.33 1.64,2.78 -1.4,-0.13 -4,-1.15 -5.08,-2.37 -2.17,-0.66 -3.92,-0.17 -2.58,0.75 -2.18,-0.35 -1.14,-1.01 0.05,-1.03 -1.23,-1.58 -1,-2.94 0.21,-4.06 -0.54,-4.36 -2.8,-4.74 -2.79,-2.08 -1.46,-0.36 -3.32,-0.05 -8.43,1.55 -2.01,-0.01 -1.37,-0.36 -2.71,-1.34 -2.65,-1.94 -3.07,-3.19 -2.39,-1.3 -1.67,0.26 -0.91,0.46 -0.96,1.09 -2.21,2.5 -0.6,1.24 -2.06,2 -3.4,2.47 -4.29,2.19 -6.93,2.62 -1.31,0.99 -1.6,3 -0.76,2.83 -0.8,5.21 -1.5,4.16 -0.35,2.53 -0.36,2.62 -1.21,1.17 -4.48,2.01 -1.15,1.45 -1.83,3.44 -0.19,5.47 0.81,5.81 -0.57,1.51 -1.46,1.04 -2.37,3.43 -3.12,7.05 -0.29,2.37 0.08,2.35 2.35,3.52 0.93,1.95 1.31,5.78 0.21,2.6 -0.55,2.12 -1.4,2.65 -0.19,1.62 0.54,1.34 1.8,1.92 1.98,3.77 0.57,2.33 -0.4,2.98 -1.39,3.01 0.04,1.36 0.33,1.09 -0.76,0.62 0.76,2 -2.36,5.05 0.42,4.58 2.64,3.56 3.94,3.14 0.83,3.24 -1.53,4.72 -8.6,1.54 -0.16,0.23 -1.97,2.91 1.44,5.41 3.33,1.43 4.76,0.69 4.39,-1.58 3.24,-3.52 3.28,-1.94 3.79,3.51 3.47,1.66 7.44,3 8,-0.04 3.14,3.28 -0.52,7.3 -1.8,2.81 -0.24,0.37 -8.69,0.23 -7.35,3 -9.01,8.91 -8.08,3.88 -2.86,2.5 -5.26,5.68 -1.57,2.62 -2.67,3.98 -1.52,7.56 0.75,8.2 -0.64,3.5 -3.45,6.55 -3.82,4.93 -3.35,6.73 0.47,4 1.94,3.13 2.76,2.29 4.28,1.14 7.82,-1.03 7.23,-1.8 7.04,0.59 9.94,0.64 3.64,-1.89 2.39,0.55 3.73,-0.64 3.22,-0.27 4.15,-0.78 2.53,-1.52 5.03,-5.15 4.29,-4.83 5.58,-2.48 5.72,-4.18 6.1,-5.38 2.72,-0.96 11.39,0.16 -0.02,3.49 -0.07,10.28 -0.61,4.05 -2.83,8.09 -6.52,11.72 -1.99,4.04 -1.85,3.26 -0.88,4.04 1.97,4.28 7.69,10.35 1.37,2.94 0.86,4.18 0.17,3.12 -1.16,5.14 -1.07,3.67 -6.59,10.17 -0.7,4.08 0.4,3.26 1.41,3.9 -0.01,4.13 -2.99,2.74 -6.48,4.25 -4.61,10.16 -0.05,3.62 0.86,3.3 -0.88,4.03 -3.3,1.19 -2.57,3.11 -1.52,4.16 -0.01,8.14 -2.44,5.67 -4.23,7.72 -0.92,4.43 -2.56,2.37 -5.08,9.82 -0.41,3.29 -3.9,18.07 -1.19,3.56 -2.38,3.42 -0.69,2.69 5.97,11.21 0.91,3.1 -0.55,2.37 -3.83,4.24 -1.1,3.42 0.59,3.96 -3.29,7.29 5.4,23.89 -13.34,19.14 -3.59,14.26 0.54,15.48 -5.08,10.16 -0.77,3.72 0.5,2.95 -0.5,3.99 -2.94,12.24 0,6.66 0.45,4.17 0.05,3.85 -2.26,2.76 -3.08,2.27 -2.62,3.04 -1.85,3.71 -1.67,4.72 -0.34,-0.11 -0.72,0.05 -0.43,-0.44 -0.38,0 -0.14,0.55 -0.19,0.06 -0.1,0.55 -0.24,0.27 -0.05,0.27 -0.43,0 -0.1,0.27 -0.43,0.16 -0.19,0.38 -0.14,0.82 -0.43,0.71 -0.38,0 0,0.16 -0.53,0.6 -0.62,0.38 -0.14,0.55 -0.67,0.66 0,0.82 -0.43,0.27 -0.62,0.88 -0.34,0.27 0,0.49 -0.77,0.88 -0.66,0.32 -4.35,-5.04 -2.27,-4.29 -0.82,-3.3 -0.69,-5.74 1.62,-5.39 0.81,-5.39 -0.78,-3.71 -3.09,-5.38 0.12,-9.51 -17.63,-49.49 0.36,-3 -5.59,-15.43 -14.84,-41.99 -3.51,-13.2 -12.03,-7.87 -0.44,-6.11 3.56,-10.05 -7.48,-8.77 0.5,-10.87 -4.99,-20.76 -15.18,-31.89 -9.84,-28.82 -14.22,-47.2 7.76,-5.82 7.67,-6.63 1.9,-3.49 -0.04,-5.41 -0.43,-5.79 1.51,-5.04 5.75,-7.39 17.29,-16.76 5.02,-1.19 1.53,-2.72 -0.02,-3.87 -2.35,-3.47 -7.5,-6.99 4.17,-6.77 0.72,-0.45 0.33,-0.5 -0.05,-0.11 -0.29,-0.06 0.05,-0.5 -0.14,-0.06 0,-0.17 0.58,-0.67 0,0.22 -0.43,0.5 0.48,0.11 0.1,0.17 0.14,-0.06 2.63,-4.37 0.34,-1.18 0.62,-0.45 0.96,-1.23 0.38,-0.78 -0.05,-0.28 0.53,-0.67 0.29,-0.73 0.24,-0.17 0.1,0.22 0.19,0 2.92,-5.21 0.53,-0.73 1.34,-2.69 0.77,-0.95 0.38,-1.12 1.92,-3.31 1.72,-3.7 0.86,-1.46 0.86,-2.07 0.29,-0.5 0.14,-0.06 -0.05,-0.17 0.48,-0.9 0.48,-1.35 0.62,-1.12 0.72,-1.68 -0.53,-0.56 -0.29,-0.95 0.05,-0.79 0.48,-1.18 0.14,0 0,0.39 -0.19,0.11 -0.29,0.67 0,0.95 0.62,1.07 0.38,0 0.1,-0.28 -0.48,-0.28 0,-0.17 0.19,-0.11 -0.05,-0.56 0.14,-0.17 0.05,-0.45 0,-0.17 -0.19,-0.11 0,-0.22 0.43,0 0.19,0.22 1.1,0 0.1,-0.28 0.38,-0.39 0.1,-0.22 -0.24,-0.11 -0.05,-0.28 0.05,-1.46 0.14,-0.11 0.05,0.22 0.14,0 0,-0.11 0.38,-0.22 1.42,-3.6 1.11,-2.38 1.58,-3.96 0.19,-0.84 0.53,-1.12 0,-0.22 0.19,-0.22 0.24,-1.23 0.29,-0.56 0.05,-0.67 0.19,-0.06 0.05,-0.22 0.14,-0.06 0,-0.39 0.1,-0.17 0.14,0 0,-0.28 0.1,0 0.38,-0.67 0.24,-0.11 0.05,-0.34 1.44,-2.13 1.24,-3.03 1.2,-3.15 2.11,-7.28 0.38,-1.49 0.38,-0.9 0.14,-1.29 0.38,-0.51 -0.24,-0.17 0.33,-1.12 0.29,-0.45 0,-0.34 0.19,-0.45 0.24,-0.28 0.14,-1.24 0.58,-0.45 0,-0.51 -0.19,-0.17 0.53,-0.51 0.33,0 0.43,-0.34 0.53,-0.84 0.34,-1.07 0.24,-0.34 0.05,-0.51 -0.1,-0.11 0.29,-0.11 -0.19,-0.28 0.14,-0.17 -0.1,-0.06 0.1,-0.39 0.72,-1.69 0.05,-0.51 0.2,-0.11 0.13,-0.34 -0.24,-0.68 0,-0.56 0.38,-0.28 0.19,0.06 0.29,-0.9 0.43,-0.84 -0.24,-0.45 0.05,-0.34 0.14,0 0.1,0.28 0.19,0 0.53,-1.63 0.33,-1.69 0.43,-0.56 0.14,-0.39 -0.05,-0.23 0.14,-0.11 0.48,-1.86 0,-0.84 0.57,-1.46 -0.1,-0.62 0.53,-0.28 -0.05,-0.45 -0.34,-0.23 0.1,-1.29 0.19,-0.17 0.29,0.11 0.1,-0.17 0.67,-2.25 0.48,-2.53 0.34,-0.58 0.29,-0.78 0,-0.28 -0.14,-0.17 0.05,-0.28 0.53,-1.24 0.24,-0.23 -0.05,-0.45 0.43,-0.79 0.05,-0.68 0.53,-0.79 0.1,-0.79 0.24,-0.56 -0.1,-0.56 0.38,-0.39 0,-0.9 0.34,-1.46 0.29,-0.45 0.48,-1.3 -0.05,-0.68 0.19,-0.28 0.24,-0.79 -0.05,-0.17 0.53,-1.41 0.04,-0.85 -0.14,0 0,-0.17 0.34,-0.56 0.1,-1.3 0.53,-1.01 0.1,-0.56 0.43,-0.96 -0.05,-0.68 0.19,0.11 0.14,-0.06 -0.1,-0.96 0.19,-1.02 0.19,-0.17 -0.05,-0.39 0.72,-3.21 0,-0.23 -0.24,-0.17 -0.05,-0.28 0.62,-0.34 0.05,-0.17 0.33,-1.92 0.19,-0.51 0,-0.68 0.29,-0.56 0.81,-3.72 0,-0.68 0.24,-1.24 -0.29,0 0,-0.11 0.53,-0.51 0.14,-0.34 0.1,-0.79 -0.1,-0.68 0.29,-1.13 -0.33,-0.23 0.24,-0.51 0.19,-0.11 0.38,-1.02 0.14,-0.06 0.14,-0.84 -0.1,-0.17 0.19,-0.45 0.34,-0.17 0.14,-0.45 0,-0.11 -0.48,0 0.29,-0.4 0,-0.28 0.24,-0.45 0.38,-0.17 -0.05,-0.17 0.1,-0.06 0.72,-3.5 0.1,-1.64 0.53,-1.58 0.29,-1.52 -0.38,-1.02 -2.11,0 0,-0.28 1.87,-0.06 0.14,-0.11 0.1,-0.45 0.19,0.17 0.05,0.4 0.57,0 0.05,-0.11 -0.33,0 -0.14,-0.17 0,-0.23 0.19,-0.06 0.1,-0.39 0,-0.23 -0.19,-0.06 0,-0.17 0.19,-0.06 0.05,0.17 0.14,0 0.24,-0.17 -0.1,-0.17 0.05,-0.62 0.53,-0.9 -0.1,-0.28 -0.29,0.11 -0.05,-0.79 0.19,-0.11 0,-0.45 0.19,-0.34 -0.1,-0.23 0.34,-0.4 0,-0.4 -0.19,-0.17 0.1,-0.68 0.38,-0.28 0.05,-0.79 0.48,-0.62 -0.48,-0.06 -0.05,-0.28 0.24,0 0.29,-0.62 0.38,-1.69 0.19,-0.28 0.05,-0.73 0.24,-0.45 -0.05,-0.74 -0.29,-0.06 -0.14,-0.17 0,-0.56 0.24,-0.74 0.38,-0.4 0.34,0.06 0.29,-0.56 -0.05,-0.23 -0.33,-0.06 0,-0.34 -0.24,-0.17 0.57,-1.07 -0.14,-0.28 0.05,-0.45 0.29,-0.34 0.38,-1.41 0.19,0.11 0.1,-0.23 -0.1,-0.4 0.38,-0.74 -0.1,-0.45 -0.34,-0.34 0,-0.34 0.34,-0.34 0.14,-0.79 -0.19,-0.11 0,-0.28 0.29,-0.85 0.29,-0.4 -0.14,-0.23 0.14,-0.4 -0.05,-0.96 0.19,-0.4 0,-0.51 -0.14,-0.11 0.19,-0.57 0.19,-1.81 0.24,-0.06 0.24,-0.57 0.1,-1.64 0.29,-1.25 0.33,-0.57 -0.29,-0.17 0.24,-1.25 -0.05,-0.91 0.43,-0.4 0.05,-0.23 0.05,-1.81 0.29,-1.87 -0.05,-1.7 0.19,-0.4 0,-0.17 -0.19,-0.17 0,-0.28 0.1,-0.11 -0.05,-0.4 0.29,-0.23 -0.05,-0.34 -0.24,-0.17 0,-0.45 0.29,-0.85 0,-0.45 0.53,-0.62 0,-0.28 0.38,-0.4 0.67,0.06 0.48,-0.62 0.34,-0.74 0.19,-0.85 -0.14,-0.51 0.33,-0.4 0.19,-2.1 0.38,-0.91 0.34,-3.97 0.19,-0.74 0,-1.76 0.1,-0.79 0.19,-0.45 0.24,-2.89 -0.19,-0.91 0.24,0 0.05,-0.11 0.14,-1.36 -0.05,-0.68 -0.24,-0.45 0.14,0 0.1,-0.17 0.14,0.17 0.14,-0.06 0,-0.17 -0.14,-0.06 0.14,-0.45 -0.19,-0.17 -0.14,-0.51 0,-1.81 0.24,-0.28 -0.19,-0.34 0.29,-0.34 0.43,0.11 1.05,-1.02 0.53,-0.11 0.62,0.06 0.86,-0.45 0.19,-0.34 0.14,-0.11 0.14,0.06 0.14,-0.23 0.43,0 0.62,0.28 0.43,0.79 0.43,0 0.24,0.23 0.86,0.34 0.53,0.06 0,0.17 0.24,0.28 1.29,0.06 1.25,-0.34 0,0.17 -0.58,0.23 -0.1,-0.11 -0.38,0.28 -0.19,0 -1.2,-0.11 -0.72,-0.23 -0.86,-0.62 -0.38,0.11 0.24,0.06 0.1,0.23 0.19,0.06 -0.05,0.23 1.01,0.51 0.14,0.28 0.19,0.06 0.29,0.34 0.1,0.4 0.19,-0.11 0,-0.57 0.19,0 0.09,0.51 0.24,0 0.1,-0.34 -0.24,-0.23 0,-0.23 0.05,-0.11 0.29,0.06 0.38,0.57 0.14,1.08 0.33,0.11 0.19,0.45 0.62,0 0.24,-0.17 0.53,-0.06 -0.14,-0.4 0.19,-0.06 0.77,0.51 0.14,0.91 0.96,-0.28 0.05,-0.17 -0.14,-0.23 -0.48,-0.06 -0.1,-0.57 -0.38,0.06 -0.29,-0.17 0.77,-0.23 1.53,-1.02 0.33,-0.06 0.19,-0.4 0.29,-0.06 0,-0.23 0.33,-0.17 0,-0.28 0.24,-0.23 0.29,-0.62 0.67,-0.62 1.01,-1.48 1.72,-4.03 0.29,-0.11 -0.1,-0.4 0.43,-1.42 0.19,-0.11 -0.05,-0.23 0.38,-1.08 0.24,-0.17 -0.1,-0.23 0.48,-1.65 -0.05,-0.23 0.43,-2.21 0.05,-2.5 -0.48,-0.98 -0.33,-0.5 -0.38,-0.28 -0.57,-0.06 -0.19,0.17 0,0.45 -0.34,-0.11 -0.43,0.06 0,-0.45 0.77,-2.04 0.1,-1.48 0.67,-2.78 0.05,-1.65 0.14,-0.34 -0.05,-0.68 0.1,-0.06 0,-0.57 0.19,-0.68 -0.05,-0.28 0.43,-1.08 0,-0.51 0.29,-0.11 0,-1.53 0.19,-0.17 0.14,-0.85 0.67,-1.25 -0.05,-0.8 -0.14,-0.28 0.14,-0.11 0,-0.74 0.24,-0.45 -0.05,-0.57 0.29,-0.63 -0.05,-0.17 0.24,-0.11 -0.1,-0.57 0.33,-0.68 0.14,-0.85 0.24,-0.45 0.1,-0.85 0.48,-0.85 -0.19,-0.11 0,-0.35 0.48,-0.4 -0.1,-0.11 0.14,-0.46 -0.1,-0.28 0.33,-0.51 -0.1,-0.57 0.14,0 -0.05,-0.63 0.24,-0.17 0.05,-1.31 0.19,-0.4 0.1,-1.88 0.19,-0.34 0,-0.63 -0.14,-0.17 0,-1.94 7.69,-0.11 5.43,-0.46 6.1,1.06 0.6,-0.26 0.99,-1.07 1.99,-0.65 6.38,-0.21 6.64,-0.93 3.42,0.8 2.9,5.52 1.62,1.86 2.6,1.54 1,0.29 4.38,-1.96 4.73,-0.37 1.24,-0.66 2.94,-2.84 0.85,-1.16 1.42,-1.04 0.75,-0.08 3.04,0.73 2.92,-1.1 0.4,-0.49 0.23,-2.59 0.39,-0.86 3.28,-1.39 0.86,-2.05 0.35,-4.48 1.08,-4.98 1.1,-1.92 0.85,-2.29 -0.14,-2.49 -0.62,-2.8 0.08,-1.6 1.47,-3.35 1,-0.84 1.61,-2.13 1.65,-3.64 0.41,-0.44 1.21,0.99 4.08,5.82 0.67,0.21 0.64,-0.61 0.65,-1.62 0.81,-1.06 5,-2.35 5.28,-3.16 1.77,-1.71 2.56,-4.09 1.44,-1.3 1.07,-0.42 4.32,0.36 2.62,-0.45 3.46,-1.44 3.21,-2.61 1.01,-1.38 0.53,-1.62 0.81,-5.23 1.47,-2.36 2.62,-1.9 9.56,-5.23 0.89,0.69 0.24,1.48 -0.62,2.61 -1.81,2.98 -3.42,3.91 -1.47,3.82 -0.53,3.72 0.83,8.33 -0.26,1.4 -1.98,3.39 1.28,1.53 2.55,2.17 1.11,1.56 0.58,0.99 1.15,4.17 0.22,2.41 -0.34,1.63 -0.65,1.67 -1.54,1.67 -0.55,1.1 0.33,2.22 1.43,0.52 2.36,0.25 1.31,0.61 3.63,5.26 -0.41,5.37 -2.75,2.43 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));

"use strict";

/** @module EquivalentJS/Plugin/ScaffoldExample */

/**
 * @class
 * @classdesc an example scaffold for an equivalent-js plugin
 * @implements {EquivalentJS.Manager.Module.class}
 * @typedef {Object} EquivalentJS.Plugin.ScaffoldExample
 * @constructs
 */
DIC.define('EquivalentJS.Plugin.ScaffoldExample', new function () {
    /**
     * @description bind public properties or methods
     * @memberOf EquivalentJS.Plugin.ScaffoldExample
     * @private
     * @alias {EquivalentJS.Plugin.ScaffoldExample}
     */
    var _ = this;

    /**
     * @description autoload a stylesheet
     * @memberOf EquivalentJS.Plugin.ScaffoldExample
     * @type {boolean}
     */
    _.layout = true;

    /**
     * @description construct the plugin module class
     * @memberOf EquivalentJS.Plugin.ScaffoldExample
     */
    _.construct = function () {

    };
});

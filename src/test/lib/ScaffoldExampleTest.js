"use strict";

/**
 * @class
 */
DIC.define('EquivalentJS.test.Plugin.ScaffoldExampleTest', new function () {
    /**
     * @description the manager mock
     * @memberOf EquivalentJS.test.Plugin.ScaffoldExampleTest
     * @type {EquivalentJS.Manager}
     */
    var manager;

    /**
     * @description setup the manager
     * @memberOf EquivalentJS.test.Plugin.ScaffoldExampleTest
     * @param {EquivalentJS.Manager} managerInstance
     */
    this.setup = function (managerInstance) {
        manager = managerInstance;
    };

    /**
     * @description test {@link EquivalentJS.Plugin.ScaffoldExample} has assigned
     *  module class type by manager
     * @memberOf EquivalentJS.test.Plugin.ScaffoldExampleTest
     * @param {EquivalentJS.test.Unit.assert} assert
     * @param {EquivalentJS.Plugin.ScaffoldExample} moduleClass
     */
    this.testHasAssignedTypeByManager = function (assert, moduleClass) {
        assert.ok(
            'EquivalentJS.Plugin.ScaffoldExample' === moduleClass.type,
            'is EquivalentJS.Plugin.ScaffoldExample'
        );
    };
});

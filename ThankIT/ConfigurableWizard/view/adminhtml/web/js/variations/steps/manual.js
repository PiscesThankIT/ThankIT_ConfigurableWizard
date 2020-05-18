/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent',
    'jquery',
    'ko',
    'underscore',
    'mage/translate'
], function (Component, $, ko, _) {
    'use strict';

    return Component.extend({
        defaults: {
            modules: {
                variationsComponent: '${ $.variationsComponent }',
                modalComponent: '${ $.modalComponent }',
                matrixComponent: '${ $.matrixComponent }',
                block1Component: '${ $.block1Component }',
                block2Component: '${ $.block2Component }',
            },
            notificationMessage: {
                text: null,
                error: null
            },
            attributes: [],
        },

        initObservable: function () {
            this._super().observe('attributes');
            return this;
        },
        skip: function() {
            // skip next steps
            this.variationsComponent().render([], this.attributes());
            this.matrixComponent().isShowAddProductButton(true);
            // change modal 's notification message
            this.block1Component().visible(true);
            this.block2Component().visible(false);
            this.modalComponent().closeModal();
        },
        /**
         * @param {Object} wizard
         */
        render: function (wizard) {
            this.wizard = wizard;
            this.attributes(wizard.data.attributes());
        },

        /**
         * Force.
         */
        force: function () {
            // last execution
        },

        /**
         * Back.
         */
        back: function () {
        }
    });
});

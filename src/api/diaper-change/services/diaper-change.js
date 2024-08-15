'use strict';

/**
 * diaper-change service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::diaper-change.diaper-change');

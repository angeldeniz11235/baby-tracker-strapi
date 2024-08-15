'use strict';

/**
 * sleep-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sleep-record.sleep-record');

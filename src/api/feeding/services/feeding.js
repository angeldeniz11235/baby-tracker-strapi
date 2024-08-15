'use strict';

/**
 * feeding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feeding.feeding');

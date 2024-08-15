'use strict';

/**
 * feeding router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::feeding.feeding');

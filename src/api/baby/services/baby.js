'use strict';

/**
 * baby service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::baby.baby');

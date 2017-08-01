"use strict";


/**
 * Role policy.
 * @module policies/rolePolicy
 */

/**
 * Verify user role authorization.
 * @param {object} req - request.
 * @param {object} res - response.
 * @param {object} next - continue processing.
 * @return {object} forbidden.
 */

module.exports = function(req, res, next) {

    // User is allowed, proceed to the next policy,
    // or if this is the last policy, the controller



    if (req.role) {
        return next();
    }

    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    return res.forbidden('You are not permitted to perform this action by Role.');
};
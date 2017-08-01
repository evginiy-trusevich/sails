"use strict";


/**
 * User policy.
 * @module policies/is/User
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
    if (req.user && req.user.role && req.user.role.toLowerCase() === "user" && !req.role) {
        req.role = true;
    }

    return next();
};
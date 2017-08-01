"use strict";


/**
 * Admin.
 * @module policies/is/Admin
 */

/**
 * Check on the admin.
 * @param {object} req - request.
 * @param {object} res - response.
 * @param {object} next - continue processing.
 * @return {object} next - continue processing.
 */

module.exports = function(req, res, next) {

    // User is allowed, proceed to the next policy,
    // or if this is the last policy, the controller
    if (req.user && req.user.role && req.user.role.toLowerCase() === "admin" && !req.role) {
        req.role = true;
    }

    return next();
};
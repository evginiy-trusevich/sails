"use strict";

/**
 * Authorization policy.
 * @module policies/isAuth
 */

/**
 * Verification for authentication data.
 * @param {object} req - request.
 * @param {object} res - response.
 * @param {object} next - continue processing.
 * @return {object} forbidden.
 */

module.exports = function(req, res, next) {

    // User is allowed, proceed to the next policy,
    // or if this is the last policy, the controller





    if (req.headers.authorization) {
        var cred = req.headers.authorization.split(":");

        // Auth.create({"login" : cred[0], "password" : cred[1], "role": cred[2]})
        Auth.findOne({"login" : cred[0], "password" : cred[1]})
            .then(function (user) {
                if (user) {
                    req.user = user;
                    return next();
                } else {
                    return res.forbidden();
                }
            })
            .catch(function (err) {
                console.error("Policies.isAuth", err);
                return res.badRequest();
            })

    } else {
        return res.forbidden();
    }
};
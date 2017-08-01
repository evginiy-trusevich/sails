/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


/**
 * Authorization controller.
 *
 * @module controllers/AuthController
 */

module.exports = {

    /**
     * User Authorization.
     * @param  {object} req login and password user authorization
     * @param  {object} res - response data
     * @return {object} User login and password
     */

    "auth" : function (req, res) {



        Auth.findOne({"login" : req.body.login, "password" : req.body.password})
            .then(function (user) {
                if (user) {
                    return res.send("Authorization " + user.login+ ":" + user.password);
                } else {
                    return res.notFound();
                }
            })
            .catch(function (err) {
                console.error("Controllers.AuthController.auth", err);
                return res.badRequest();
            })
    }

};


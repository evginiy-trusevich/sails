var request = require('supertest'),
    should = require('should'),
    express = require('express');

const app = express();


describe('Policies', function () {

    before(function (done) {
        done(null, sails);
    });


    it('Check role Admin', function (done) {

        app.post('/', function(req, res) {

            console.log(req.headers.user);
            if(req.headers.user && req.headers.user.role && req.headers.user.role.toLowerCase() === "admin" && !req.role){
                return res.sendStatus(200);
            } else{
                return res.sendStatus(403);
            }
        });

        request(app)
            .post('/')
            .set("user" , {"login" : "admin", "password" : "123", "role":"admin"})
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.exist(res.body);
                done();
            });
    });







});
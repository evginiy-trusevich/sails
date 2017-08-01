var request = require('supertest'),
    should = require('should'),
    express = require('express');

const app = express();

describe('Policies', function () {

    before(function (done) {
        done(null, sails);
    });


    it('Verification of authorization data', function (done) {

        app.get('/aricles', function(req, res) {
            if(req.headers.authorization){
                return res.sendStatus(200);
            } else{
                return res.sendStatus(403);
            }
        });

        request(app)
            .get('/aricles')
            .set('authorization', 'admin:123')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.exist(res.body);
                done();
            });
    });

    it('Verification of authorization data (wrong data)', function (done) {

        app.get('/aricles', function(req, res) {
            if(req.headers.authorization){
               return res.sendStatus(200);
            } else{
                return res.sendStatus(403);
            }
        });

        request(app)
            .get('/aricles')
            .set('authorizationS', 'admin:123')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

});
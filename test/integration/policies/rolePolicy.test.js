var request = require('supertest'),
    should = require('should'),
    express = require('express');

const app = express();


describe('Policies', function () {

    before(function (done) {
        done(null, sails);
    });


    it('Check role', function (done) {

        app.get('/', function(req, res) {

            if(req.headers.role){
                return res.sendStatus(200);
            } else{
                return res.sendStatus(403);
            }
        });

        request(app)
            .get('/')
            .set({'role': true})
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.exist(res.body);
                done();
            });
    });



    it('Check role (false 403)', function (done) {

        app.post('/', function(req, res) {

            if(req.headers.role){
                 res.sendStatus(200);
            } else{
                 res.sendStatus(403);
            }
        });

        request(app)
            .post('/')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.exist(res.body);
                done();
            });
    });





});
var request = require('supertest'),
    should = require('should'),
    express = require('express');

const app = express();

describe('Auth controller', function () {

    before(function (done) {
        done(null, sails);
    });


    it('Authorization admin and set login role', function (done) {
        request(sails.hooks.http.app)
            .post('/auth')
            .set({ "Authorization":"admin:123" })
            .send({login: 'admin1', password: "123", role:"admin"})
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

    it('Don\'t authorization by manager for set login role', function (done) {
        request(sails.hooks.http.app)
            .post('/auth')
            .set({ "Authorization":"manager:123" })
            .send({login: 'manager1', password: "123", role:"manager"})
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

    it('Don\'t authorization by user and set login role', function (done) {
        request(sails.hooks.http.app)
            .post('/auth')
            .set({ "Authorization":"user:123" })
            .send({login: 'user1', password: "123", role:"user"})
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });


});
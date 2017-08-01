var request = require('supertest'),
    should = require('should'),
    express = require('express');

const app = express();

describe('Articles controller', function () {

    before(function (done) {
        done(null, sails);
    });


    it('set title by Admin', function (done) {
        request(sails.hooks.http.app)
            .post('/articles')
            .set({ "Authorization":"admin:123" })
            .send({title:'articles 1'})
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

    it('dont\'n set title by Manager (403)', function (done) {
        request(sails.hooks.http.app)
            .post('/articles')
            .set({ "Authorization":"manager:123" })
            .send({title:'articles 2'})
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

    it('dont\'n set title by User (403)', function (done) {
        request(sails.hooks.http.app)
            .post('/articles')
            .set({ "Authorization":"user:123" })
            .send({title:'articles 3'})
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

    it('view title by Manager', function (done) {
        request(sails.hooks.http.app)
            .post('/articles/1')
            .set({ "Authorization":"manager:123" })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

    it('dont\'n view title by user', function (done) {
        request(sails.hooks.http.app)
            .post('/articles/1')
            .set({ "Authorization":"user:123" })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });

});
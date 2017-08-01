
var sails = require('sails');

before(function(done) {

    // process.env.NODE_ENV = 'test';
    // process.env.PORT = 9999;

    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(5000);

    sails.lift({
        models: {
            connection: 'sails_mysql',
            migrate: 'alter'
        }
    }, function(err) {
        if (err) return done(err);

        sails.log.info('Starting tests...');
        console.log('\n');

        done(err, sails);
    });
});

after(function(done) {
    // here you can clear fixtures, etc.
    sails.lower(done);
});
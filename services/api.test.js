const { getAirportData } = require('./api')

test('Make sure the api is returning a valid object', done => {
    getAirportData().then((response) => {
        expect(response).toBeDefined();
        done();
    });
    ;
});

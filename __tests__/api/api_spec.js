const frisby = require('frisby');

it('Deve retornar 200', function () {
    return frisby.get('https://jsonplaceholder.typicode.com/posts')
        .expect('status', 200);
});

it('POST should return a status of 201 Created', function () {
    return frisby
        .post('https://jsonplaceholder.typicode.com/posts', {
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        })
        .expect('status', 201);
});

it('PUT should return a status of 200 OK', function () {
    return frisby
        .put('https://jsonplaceholder.typicode.com/posts/1', {
            body: {
                title: 'My Updated Title',
                body: '<p>Some different content actually</p>'
            }
        })
        .expect('status', 200);
});

it('DELETE should return a status of 200 Ok', function () {
    return frisby
        .del('https://jsonplaceholder.typicode.com/posts/1')
        .expect('status', 200);
});

it('fetch with POST should return a status of 201 Created', function () {
    return frisby
        .fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'My Updated Title',
                body: '<p>Some different content actually</p>'
            })
        })
        .expect('status', 201);
});
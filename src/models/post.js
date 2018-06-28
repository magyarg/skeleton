const _ = require('lodash');

const dummyPosts = [
    {
        id: 1,
        title: 'Lorem ipsum',
        body: 'Dolor sit amet'
    },
    {
        id: 2,
        title: 'Lorem ipsum',
        body: 'Dolor sit amet'
    }
];

module.exports = {

    all() {
        return dummyPosts;
    }

};
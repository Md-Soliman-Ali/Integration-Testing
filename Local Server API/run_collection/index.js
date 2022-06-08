const newman = require('newman');

newman.run({

    // pointing to local JSON file.
    collection: require('./collection/customer_api.postman_collection.json'),

    // pointing to local env file
    environment: require('./collection/Customer_Environment.postman_environment.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
            // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('collection run complete!');
});
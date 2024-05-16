const newman = require('newman');

newman.run({
    collection: './CollectionAPI.json', // Corrected path to the Postman collection JSON file
    reporters: ['htmlextra', 'cli'],
    reporter: {
        'htmlextra': {
            export: './report.html', // Path to export the HTML report
        },
    },
}, function (err) {
    if (err) { 
        console.error('Collection run encountered an error:', err);
        process.exit(1); // Exit the script with a non-zero status code to indicate failure
    }
    console.log('Collection run complete!');
});

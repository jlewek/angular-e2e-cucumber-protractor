exports.config = {

    specs: [
        'features/*.feature'
    ],
    cucumberOpts: {
        require: 'features/*.js'/*,
        tags: '@dev',
        format: undefined,
        profile: false,
        'no-source': true*/
    },
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8081/',

    framework: 'custom',
    frameworkPath: '../index.js'
};

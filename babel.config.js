module.exports = function(api) {
    api.cache(true);
    
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    chrome: '75',
                    firefox: '68',
                    safari: '12.1',
                    opera: '62',
                    edge: '18',
                    ie: '11',
                    node: '7',
                    ios: '12.1',
                    android: '67'
                },
                useBuiltIns: 'usage',
                corejs: { version: 3, proposals: true },
                debug: false
            }
        ]
    ];
    
    return {
        presets
    };
};
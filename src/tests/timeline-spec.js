const Timeline = require( '../timeline.js' )

describe( 'test', () => {
    it ( 'test-example-1', () => {
        if ( Timeline.Timeline() === 1 ) {
        } else {
            throw new Error( 'Failed' )
        }
    } )
} )

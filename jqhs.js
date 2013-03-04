jQuery( function( $ ) {
    var harlemMusic = document.createElement( 'audio' );
    harlemMusic.autoplay = false;
    harlemMusic.src = 'harlem_shake.ogg';

    $.fn.jqHarlemShake = function () {
        var elements = $( this );
        elements.css( 'position', 'relative' );

        harlemMusic.play();
        setShaker( elements.get( Math.round( Math.random() * 100 * elements.length ) % elements.length ) );

        setTimeout( function() {
            clearInterval( $.fn.jqHarlemShake.interval );
            setShaker( elements );
        }, 16000 );

        setTimeout( function() {
            clearInterval( $.fn.jqHarlemShake.interval );
        }, 30000 );
    };

    function getRandom() {
        var random = Math.random() * 11;
        return Math.random() > 0.5 ? random : -random;
    }

    function setShaker( elements ) {
        $.fn.jqHarlemShake.interval = setInterval( function() {
            $.fn.jqHarlemShake.shake( elements );
        }, 100 );
    }

    $.fn.jqHarlemShake.shake = function( el ){
        var $el = $( el );
        $el.each( function( i, item ) {
            $item = $( item );
            $item.css({
                'left' : parseInt( $item.css( 'left' ), 10 ) + getRandom(),
                'top'  : parseInt( $item.css( 'top' ), 10 ) + getRandom(),
                'transform' : 'rotate(' + getRandom() + 'deg) skew(' + getRandom() + 'deg) perspective(' + getRandom() + 'px)'
            });
        });
    };
});




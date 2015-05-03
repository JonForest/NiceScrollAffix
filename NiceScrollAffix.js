$(document).ready(function() {
    'use strict';

    var $elems = $('[data-spy="affix"]');  //Grab all elements that should be affixed

    $elems.each(function () {
        var $this = $(this);
        var contentScroll;
        try {
            contentScroll = $($this.data('attach-to')).getNiceScroll().eq(0);
        } catch (e) {
            // Not able to attach to a NiceScroll instance
            // You probably want to remove this console.log message
            console.log('Not able to attach to a NiceScroll instance');
            return;
        }

        //Attach to the scrollend event for the NiceScroll element.
        //Annoyingly we can't attach to a 'scroll' event, only a scrollstart and scrollend.  As a result, the
        //movement of the affixed element can be a little jerky.
        contentScroll.scrollend(function () {
            if (parseInt(contentScroll.scroll.y) >= parseInt($this.data('offset-top'))) {
                $this.removeClass('affix-top').addClass('affix');
            } else {
                $this.removeClass('affix').addClass('affix-top');
            }
        });
    });
});
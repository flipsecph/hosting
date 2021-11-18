$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.question');

        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.answer').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('#faq'), false);
});


function openPopup(divPopup) {
	$(divPopup).fadeIn(250);
}
function closePopup(divPopup) {
	$(divPopup).fadeOut(250);
}
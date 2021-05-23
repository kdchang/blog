$(document).ready(function() {
    var scrollToTopBtn = $('#scroll-to-top-button');
    var scrollToCommentBtn = $('#scroll-to-comment-button');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        scrollToTopBtn.addClass('show');
        scrollToCommentBtn.addClass('show');
    } else {
        scrollToTopBtn.removeClass('show');
        scrollToCommentBtn.removeClass('show');
    }
    });

    scrollToTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
});
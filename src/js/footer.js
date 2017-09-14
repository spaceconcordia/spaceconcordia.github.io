/**
 * dynamically loads the content of the footers on DOMContentLoaded,
 */
document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector('footer');
    var backToTop = '<p class="pull-right"><a href="#">Back to top</a></p>';
    var copyRight = '<p>&copy; ' + getCurrentYear() + ' <a href="index.html">Space Concordia</a> &middot; All rights reserved.</p>';
    footer.innerHTML = backToTop + copyRight;
});

/**
 * returns the current year
 * @returns {number} the current year
 */
function getCurrentYear() {
    return (new Date()).getFullYear();
}

/**
 * dynamically loads the content of the footers on DOMContentLoaded,
 */
document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector('footer');
    var backToTop = '<p class="pull-right"><a href="#">Back to top</a></p>';
    var link = (Util.isCurrentPageIndex()) ? 'index.html' : '../../index.html';
    var copyRight = '<p>&copy; ' + Util.getCurrentYear() + ' <a href=\"' + link + '\">Space Concordia</a> &middot; All rights reserved.</p>';
    footer.innerHTML = backToTop + copyRight;
});
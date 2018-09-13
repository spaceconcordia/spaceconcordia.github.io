/**
 * Global object to store helper functions
 */
var Util = {
	/**
	 * returns the current year
	 * @returns {number} the current year
	 */
	getCurrentYear : function () {
    	return (new Date()).getFullYear();
	},
	/**
 	* Since the only html file in the root directory is index.html,
 	* check if URL does not contain 'src/html/', where all other
 	* html files are
 	* @returns {boolean} true if we are not in 'src/html/', i.e. if the current page is index.html
 	*/
	isCurrentPageIndex : function () {
		return !window.location.href.includes('src/html/');
	}
}
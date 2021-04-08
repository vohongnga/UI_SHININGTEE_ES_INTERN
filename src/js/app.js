const testModules = require('./test-module');
require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/

console.log('Paste your code here!');
console.log(testModules.hello);
jQuery(document).ready(function($){ 	
	if($(".btn-top").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});

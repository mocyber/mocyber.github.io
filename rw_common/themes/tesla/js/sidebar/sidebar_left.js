elixir.sidebarLeft = {};
elixir.sidebarLeft = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function sidebarLeftFunction() {
		$elixir('#content').addClass('push-4');
		$elixir('#sidebar').addClass('pull-8');
		$elixir('blockquote').css({'margin-left':'0' , 'margin-right':'0'})
	}
	
	$elixir(document).ready(function() {
		sidebarLeftFunction();
	});	
})(elixir.sidebarLeft);


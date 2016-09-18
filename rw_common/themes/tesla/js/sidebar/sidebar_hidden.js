elixir.sidebarHidden = {};
elixir.sidebarHidden = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function sidebarHiddenFunction() {
		$elixir('#content').addClass('large-12 columns');
		$elixir('#sidebar').css({'display' : 'none'});
		$elixir('form-input-field').css({'width':'99%'});
	}
	
	$elixir(document).ready(function() {
		sidebarHiddenFunction();
	});	
})(elixir.sidebarHidden);


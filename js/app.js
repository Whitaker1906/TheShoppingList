// JavaScript Document
$(document).ready(function() {
	//adds value from text box to list
		$('#addBtn').click(function() {
			var item = $('#textfield').val();
			var added = $('<li>' + item + '</li>');
			$('ul').prepend(added).addClass('around');
			$('#textfield').val('');
			console.log('buttonClicked');
		});
		$('#textfield').keypress(function (e) {
			if(e.which == 13){
				$('#addBtn').click();//trigger add button click
				e.preventDefault();
			}
		});
	$('#itemContainer').on('click', 'li', function() {
		$(this).toggleClass('clicked');
		console.log('li clicked');
	});
	$('#itemContainer').on('dblclick', 'li', function() {
		$(this).remove();
		console.log('li removed');
	});
	$('#selectAll').on('click', function() {
		$('li').toggleClass('clicked', true);
		console.log('all selected');
	});
	$('#resetAll').on('click', function() {
		$('#itemContainer').children().remove();
		$('ul').removeClass('around');
	});
});
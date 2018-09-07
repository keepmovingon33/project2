console.log('app.js loaded');

$(document).ready(function(){
	$('.delete-btn').click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
	 	$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			// console.log('message:', data);
			window.location = '/fruit';
		}).fail(function(err){
			console.log('error message:', err);
		});
	});

	  $('.update').submit(function(e){
   	 e.preventDefault();
    console.log('about to submit a PUT req');

       $.ajax({
      url: $(this).attr('action'),
      method: 'PUT',
      data: $(this).serialize()
    }).done(function(res){
      console.log('success', res);
    }).fail(function(err){
      console.log('error', err);
    });
  });

	$('.delete-product').click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
	 	$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			// console.log('message:', data);
			window.location = '/cart';
		}).fail(function(err){
			console.log('error message:', err);
		});
	});



	$('.cart').click(function(e){
		e.preventDefault();
		console.log(this);
		let name = this.getAttribute('data-name');
		let price = this.getAttribute('data-price');
		var url = "/cart";
		var currentBtn = this;
		$.ajax({
			method: "POST",
			url: url,
			data: {name: name, price: price}
		}).done(function(data){
			console.log($(currentBtn).next().prop("tagName"));
			if($(currentBtn).next().prop("tagName") == 'BR'){
				$("<span>Successfully add to cart</span>").insertAfter(currentBtn);
			}
		}).fail(function(err){
			console.log('error message:', err);
		});
	});
});

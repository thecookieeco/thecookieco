$('#review-order')
	.on('click', function(event) {
    var $modal = $(".checkout");
  
    // Prevent default.
	  event.preventDefault();
	  event.stopPropagation();
	  // Set visible.
	  $modal.addClass('visible');
	  // Focus.
    $modal.focus();
    $modal.toggleClass("modal-disable")

	})
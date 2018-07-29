var $showNav,
	$nav;

function initVars() {
	$showNav 	= $('nav span#nav');
	$nav 	= $('nav > ul');
}

function showNav(){
	$showNav.click(function(){
		$nav.toggleClass('expanded');
		return false;
	});
}

function initPlaceholders() {
	if ($('input[placeholder]').length > 0) {
		$('input[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() === input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() === '' || input.val() === input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('input[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() === input.attr('placeholder')) {
					input.val('');
				}
			});
		});
	}
}

// Used to format phone number
function phoneFormatter() {
  $('.phone').on('input', function() {
    var number = $(this).val().replace(/[^\d]/g, '')
    if (number.length == 7) {
      number = number.replace(/(\d{3})(\d{4})/, "$1-$2");
    } else if (number.length == 10) {
      number = number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    $(this).val(number)
  });
};

$(phoneFormatter);
function firstLoad() {
	initVars();
	showNav();
	initPlaceholders();
}

$(function() {
	firstLoad();
});

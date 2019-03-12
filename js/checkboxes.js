$(".btnCheck").click(function(event) {
    if ($('.beforeCall input[type="checkbox"]').not(':checked').length == 0) {
				document.getElementById("check-message").innerHTML = '<label class="label label-success">You are ready to call</label>';
    } else {
				document.getElementById("check-message").innerHTML = '<label class="label label-danger">You need all of the above to call</label>';

    }
});

// need more calls when multi phone lines are on a single page

$(".btnCheck2").click(function(event) {
    if ($('.beforeCall2 input[type="checkbox"]').not(':checked').length == 0) {
				document.getElementById("check-message2").innerHTML = '<label class="label label-success">You are ready to call</label>';
    } else {
				document.getElementById("check-message2").innerHTML = '<label class="label label-danger">You need all of the above to call</label>';

    }
});

$(".btnCheck3").click(function(event) {
    if ($('.beforeCall3 input[type="checkbox"]').not(':checked').length == 0) {
				document.getElementById("check-message3").innerHTML = '<label class="label label-success">You are ready to call</label>';
    } else {
				document.getElementById("check-message3").innerHTML = '<label class="label label-danger">You need all of the above to call</label>';

    }
});


$(".btnCheck4").click(function(event) {
    if ($('.beforeCall4 input[type="checkbox"]').not(':checked').length == 0) {
				document.getElementById("check-message4").innerHTML = '<label class="label label-success">You are ready to call</label>';
    } else {
				document.getElementById("check-message4").innerHTML = '<label class="label label-danger">You need all of the above to call</label>';

    }
});

$(".btnCheck5").click(function(event) {
    if ($('.beforeCall5 input[type="checkbox"]').not(':checked').length == 0) {
				document.getElementById("check-message5").innerHTML = '<label class="label label-success">You are ready to call</label>';
    } else {
				document.getElementById("check-message5").innerHTML = '<label class="label label-danger">You need all of the above to call</label>';

    }
});

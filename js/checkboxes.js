$(".btnCheck").click(function(event) {
    if ($('.beforeCall input[type="checkbox"]').not(':checked').length == 0) {
				document.getElementById("check-message").innerHTML = '<label class="label label-success">You are ready to call</label>';
    } else {
				document.getElementById("check-message").innerHTML = '<label class="label label-danger">You need all of the above to call</label>';

    }
});

$(".btnCheck2").click(function(event) {
    if ($('.beforeCall2 input[type="checkbox"]').not(':checked').length == 0) {
				document.getElementById("check-message").innerHTML = '<label class="label label-success">You are ready to call</label>';
    } else {
				document.getElementById("check-message").innerHTML = '<label class="label label-danger">You need all of the above to call</label>';

    }
});

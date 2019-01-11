

	/*
	This script will use watch for a query string variable called "scenario" and put the value in sessionStorage

	Use the scenario links at the top of the prototype to set this variable at the beginning of each scenario test
		like this:  https://gc-proto.github.io/ei-mat-parental/scenarioA/en.html?scenario=2

	In this example, the value of the scenario variable is 2.  So the search form, when submitted, will point to:
		https://gc-proto.github.io/ei-mat-parental/scenarioA/search-results-2.html

		If this script doesn't work, or if no value is specified, the search form will default to:
			https://gc-proto.github.io/ei-mat-parental/scenarioA/search-results.html

	When the scenario variable is spotted in the query string, its value will be stored in sessionStorage and replace whatever old value might already be in there.  This value will persist until the browser window is closed.

	Alternatively, this value can also be set manually, on any page in the prototype, by adding ?scenario=X to the end of the URL in the address bar.  (Where X is the value of the scenario variable)

	Written by Dave Knight, August 24, 2018.  dave.knight@tbs-sct.gc.ca / 613-291-3693
	*/


	$(document).ready(function() {

		// function to determine if sessionStorage is available in the browser
		function storageAvailable(type) {
		    try {
		        var storage = window[type],
		            x = '__storage_test__';
		        storage.setItem(x, x);
		        storage.removeItem(x);
		        return true;
		    }
		    catch(e) {
		        return e instanceof DOMException && (
		            // everything except Firefox
		            e.code === 22 ||
		            // Firefox
		            e.code === 1014 ||
		            // test name field too, because code might not be present
		            // everything except Firefox
		            e.name === 'QuotaExceededError' ||
		            // Firefox
		            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
		            // acknowledge QuotaExceededError only if there's something already stored
		            storage.length !== 0;
		    }
		}


		// function to read query string variables and return them as an array
		function getQuerystringVars() {

		    var vars = [], hash;
		    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		    for(var i = 0; i < hashes.length; i++) {
		        hash = hashes[i].split('=');
		        vars.push(hash[0]);
		        vars[hash[0]] = hash[1];
		    }
		    return vars;

		}


		// First, confirm that sessionStorage is available, and alert the moderator if not */
		if (storageAvailable('sessionStorage')) {
			// sessionStorage is available - ready to proceed */

			// establish variable with the value of our "scenario" query string
			var scenario = getQuerystringVars()["scenario"];

			// if there's a new querystring variable, then use that
			if (scenario) {
				// yes, so we're using it

				// alert("fresh scenario: " + scenario);

				$("section#wb-srch form").submit(function( event ) {

					// alert("scenario: " + scenario);

					window.location.href = "https://gc-proto.github.io/cra-contactus/search-results-" + scenario + ".html";

					// tell the form not to do whatever the HTML code was telling it to do
					event.preventDefault();

				});

				// and then store that value in sessionStorage for us on subsequent pages
				sessionStorage['scenario'] = scenario;

			} else {
				// no, so we'll use what's in the sessionStorage

				var scenario = sessionStorage.getItem('scenario');

				//alert("stored scenario: " + scenario);

				// check to see if there is in fact something in sessionStorage
				if (scenario != null) {

					// if there is, then we instruct the form to submit to a different search page, which matches the value of the variable
					$("section#wb-srch form").submit(function( event ) {

						// alert("scenario: " + scenario);

						window.location.href = "https://gc-proto.github.io/cra-contactus/search-results-" + scenario + ".html";

						// tell the form not to do whatever the HTML code was telling it to do
						event.preventDefault();

					});

				}

			}

		}
		else {
			// sessionStorage is NOT available - throw up an alert */

			// find out the filename of the page we're on
			var currentpage = document.location.pathname.match(/[^\/]+$/)[0];

			// if we're on template_links.html, warn the moderator that the canned search script won't work
			if (currentpage = "ut_en.html") {

				alert("sessionStorage is not available!  This will prevent the canned search results pages from functioning.");

			}

		}

	});

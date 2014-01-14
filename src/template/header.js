(function() {

		function noop() {}

		// Check for console
		if (typeof console === "undefined" || typeof console.log === "undefined") {
			// Set all console methods to a non process
			console = {
				assert: noop,
				clear: noop,
				count: noop,
				debug: noop,
				dir: noop,
				dirxml: noop,
				error: noop,
				exception: noop,
				group: noop,
				groupCollapsed: noop,
				groupEnd: noop,
				info: noop,
				log: noop,
				markTimeline: noop,
				profile: noop,
				profileEnd: noop,
				table: noop,
				time: noop,
				timeEnd: noop,
				timeStamp: noop,
				trace: noop,
				warn: noop
			};
		}

		// Create the internal objects
		var F2 = {};
		var Helpers = {};
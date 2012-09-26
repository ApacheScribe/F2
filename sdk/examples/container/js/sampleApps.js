{
	"csharp": [
		{
			"appId": "com_openf2_examples_csharp_helloworld",
			"manifestUrl": "../apps/CSharp/Apps/HelloWorld",
			"name": "Hello World"
		}
	],

	"js": [
		{
			"appId": "com_openf2_examples_javascript_helloworld",
			"manifestUrl": "../apps/JavaScript/HelloWorld/manifest.js",
			"name": "Hello World"
		},
		{
			"appId": "com_openf2_examples_chart",
			"height": 300,
			"minGridSize": 6,
			"isSecure": false,
			"manifestUrl": "../apps/JavaScript/Chart/manifest.js",
			"name": "Price Movement Chart"
		},
		{
			"appId": "com_openf2_examples_javascript_quote",
			"manifestUrl": "../apps/JavaScript/Quote/manifest.js",
			"name": "Quote",
			"views": ["home", "settings", "about"],
			"minGridSize": 3
		},
		{
			"appId": "com_f2_examples_javascript_watchlist",
			"manifestUrl": "../apps/JavaScript/Watchlist/manifest.js",
			"name": "Watchlist",
			"views": ["home", "settings"],
			"minGridSize": 3
		}
	],

	"php": [
		{
			"appId": "com_openf2_examples_php_helloworld",
			"manifestUrl": "../apps/PHP/HelloWorld/helloworld.php",
			"name": "Hello World"
		},
		{
			"appId": "com_openf2_examples_php_f2wits",
			"height": 200,
			"minGridSize": 4,
			"manifestUrl": "../apps/PHP/F2wits/manifest.js",
			"name": "F2wits",
			"views": ["home","about"]
		},
		{
			"appId": "com_openf2_examples_php_news",
			"manifestUrl": "../apps/PHP/News/news.php",
			"name": "Stocks News",
			"views": ["home", "settings"],
			"minGridSize": 4
		},
		{
			"appId": "com_openf2_examples_php_marketnews",
			"manifestUrl": "../apps/PHP/MarketNews/marketnews.php",
			"name": "Market News",
			"views": ["home", "settings"],
			"minGridSize": 4
		}
	]
}
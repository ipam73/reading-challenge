.PHONY: run

run:
	node_modules/webpack/bin/webpack.js --watch & node_modules/node-dev/bin/node-dev server.coffee

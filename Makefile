.PHONY: run-web lint

JSX_FILES := $(shell find . -name "*.jsx" -not -path "./node_modules/*")

run-web:
	node_modules/webpack/bin/webpack.js --watch & node_modules/node-dev/bin/node-dev web/server.coffee

lint:
	./node_modules/.bin/eslint $(JSX_FILES)

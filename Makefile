.PHONY: run-web run-android lint

JSX_FILES := $(shell find . -name "*.jsx" -not -path "./node_modules/*")

run-web:
	node_modules/webpack/bin/webpack.js --config web/webpack.config.js --watch & node_modules/node-dev/bin/node-dev web/server.coffee

lint:
	./node_modules/.bin/eslint $(JSX_FILES)

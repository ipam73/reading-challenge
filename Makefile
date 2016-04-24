.PHONY: run lint

JSX_FILES := $(shell find . -name "*.jsx" -not -path "./node_modules/*")

run:
	node_modules/webpack/bin/webpack.js --watch & node_modules/node-dev/bin/node-dev server.coffee

lint:
	./node_modules/.bin/eslint $(JSX_FILES)

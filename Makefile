.PHONY: run build clean lint

JSX_FILES := $(shell find . -name "*.jsx" -not -path "./node_modules/*")

run:
	npm run-script dev-server

build:
	npm run-script build

clean:
	node_modules/rimraf/bin.js web/public/build

lint:
	./node_modules/.bin/eslint $(JSX_FILES)

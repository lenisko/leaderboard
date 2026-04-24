NODE_ENV ?= production
export NODE_ENV

.PHONY: build install start setup

setup:
	volta install node@22

install: setup
	npm ci --legacy-peer-deps

build:
	npm run build

start:
	npm run start

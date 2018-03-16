.PHONY: build run
default: run ;

build:
	@docker run -v `pwd`:/usr/src/app --rm --name npm node:6.5-onbuild npm install

run:
	@docker run -p 8989:80 -v `pwd`:/usr/share/nginx/html --rm --name nginx nginx:latest

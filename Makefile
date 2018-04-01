.PHONY: build run client
default: run ;

build:
	@docker run -v `pwd`:/usr/src/app --rm --name npm node:6.5-onbuild npm install

run:
	@docker run -p 8989:80 -v `pwd`:/usr/share/nginx/html --rm --name nginx nginx:latest

client:
	@docker run --network martialarts-tracker -v `pwd`/client:/out --rm swaggerapi/swagger-codegen-cli generate -l javascript -i "http://martialartstracker_api_1/meta/swagger" -o /out

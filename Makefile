.PHONY: install build run client
default: run ;

install:
	@docker run -v `pwd`:/usr/src/app --rm node:8.11-onbuild /bin/bash -c "npm install && cd client/ && npm install"

build:
	@docker run -v `pwd`:/usr/src/app --rm node:8.11-onbuild npm run-script build

run:
	@docker run --network martialarts-tracker -p 8989:80 -v `pwd`/build:/usr/share/nginx/html --rm --name nginx nginx:latest

client:
	@docker run --network martialarts-tracker -v `pwd`/client:/out --rm swaggerapi/swagger-codegen-cli generate -l javascript --additional-properties useES6=true -i "http://martialartstracker_api_1/meta/swagger" -o /out

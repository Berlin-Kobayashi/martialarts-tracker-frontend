.PHONY: install build run client
default: run ;

install:
	@docker run -v `pwd`:/usr/src/app --rm node:8.11-onbuild /bin/bash -c "npm install && cd client/ && npm install"

build:
	@docker run -v `pwd`:/usr/src/app --rm node:8.11-onbuild

run:
	@docker run -p 3000:3000 -v `pwd`:/usr/src/app --rm node:8.11-onbuild npm run-script run

client:
	@docker run --network martialarts-tracker -v `pwd`/client:/out --rm swaggerapi/swagger-codegen-cli generate -l javascript --additional-properties useES6=true -i "http://martialarts-tracker_api_1/meta/swagger" -o /out

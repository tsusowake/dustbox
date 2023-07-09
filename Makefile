OUTPUT_DIR=src/api/gen
PROTO_FILES=./protobuf/**/*.proto 

JS_OUTPUT=src/api/gen/protobuf_generated.js
TS_OUTPUT=src/api/gen/protobuf_generated.d.ts

# see https://github.com/protobufjs/protobuf.js/blob/master/cli/README.md#pbjs-for-javascript
CMD_PBJS=npx pbjs \
	-t static-module \
	-w commonjs \
	-l eslint-disable \
	--es6 \
	--no-create \
	--no-verify \
	--no-delimited \
	--no-service \
	--no-convert \
	-o $(JS_OUTPUT) \
	$(PROTO_FILES)

CMD_PBTS=npx pbts \
	-o $(TS_OUTPUT) \
	$(JS_OUTPUT)

.PHONY: clean
clean:
	rm -rf $(OUTPUT_DIR) && mkdir -p $(OUTPUT_DIR)

.PHONY: protogen
protogen: clean
	$(CMD_PBJS) && $(CMD_PBTS)


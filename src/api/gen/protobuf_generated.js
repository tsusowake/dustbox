/*eslint-disable*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const apierror = $root.apierror = (() => {

    /**
     * Namespace apierror.
     * @exports apierror
     * @namespace
     */
    const apierror = {};

    apierror.APIError = (function() {

        /**
         * Properties of a APIError.
         * @memberof apierror
         * @interface IAPIError
         * @property {string|null} [code] APIError code
         * @property {string|null} [message] APIError message
         */

        /**
         * Constructs a new APIError.
         * @memberof apierror
         * @classdesc Represents a APIError.
         * @implements IAPIError
         * @constructor
         * @param {apierror.IAPIError=} [properties] Properties to set
         */
        function APIError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * APIError code.
         * @member {string} code
         * @memberof apierror.APIError
         * @instance
         */
        APIError.prototype.code = "";

        /**
         * APIError message.
         * @member {string} message
         * @memberof apierror.APIError
         * @instance
         */
        APIError.prototype.message = "";

        /**
         * Creates a new APIError instance using the specified properties.
         * @function create
         * @memberof apierror.APIError
         * @static
         * @param {apierror.IAPIError=} [properties] Properties to set
         * @returns {apierror.APIError} APIError instance
         */
        APIError.create = function create(properties) {
            return new APIError(properties);
        };

        /**
         * Encodes the specified APIError message. Does not implicitly {@link apierror.APIError.verify|verify} messages.
         * @function encode
         * @memberof apierror.APIError
         * @static
         * @param {apierror.IAPIError} message APIError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        APIError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Decodes a APIError message from the specified reader or buffer.
         * @function decode
         * @memberof apierror.APIError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {apierror.APIError} APIError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        APIError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.apierror.APIError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for APIError
         * @function getTypeUrl
         * @memberof apierror.APIError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        APIError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/apierror.APIError";
        };

        return APIError;
    })();

    return apierror;
})();

export const helloworld = $root.helloworld = (() => {

    /**
     * Namespace helloworld.
     * @exports helloworld
     * @namespace
     */
    const helloworld = {};

    helloworld.HelloRequest = (function() {

        /**
         * Properties of a HelloRequest.
         * @memberof helloworld
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */

        /**
         * Constructs a new HelloRequest.
         * @memberof helloworld
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {helloworld.IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof helloworld.HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest=} [properties] Properties to set
         * @returns {helloworld.HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for HelloRequest
         * @function getTypeUrl
         * @memberof helloworld.HelloRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/helloworld.HelloRequest";
        };

        return HelloRequest;
    })();

    helloworld.HelloReply = (function() {

        /**
         * Properties of a HelloReply.
         * @memberof helloworld
         * @interface IHelloReply
         * @property {string|null} [message] HelloReply message
         * @property {google.protobuf.ITimestamp|null} [repliedAt] HelloReply repliedAt
         */

        /**
         * Constructs a new HelloReply.
         * @memberof helloworld
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {helloworld.IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReply message.
         * @member {string} message
         * @memberof helloworld.HelloReply
         * @instance
         */
        HelloReply.prototype.message = "";

        /**
         * HelloReply repliedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} repliedAt
         * @memberof helloworld.HelloReply
         * @instance
         */
        HelloReply.prototype.repliedAt = null;

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply=} [properties] Properties to set
         * @returns {helloworld.HelloReply} HelloReply instance
         */
        HelloReply.create = function create(properties) {
            return new HelloReply(properties);
        };

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.repliedAt != null && Object.hasOwnProperty.call(message, "repliedAt"))
                $root.google.protobuf.Timestamp.encode(message.repliedAt, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                case 2: {
                        message.repliedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for HelloReply
         * @function getTypeUrl
         * @memberof helloworld.HelloReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/helloworld.HelloReply";
        };

        return HelloReply;
    })();

    return helloworld;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export const hoge = $root.hoge = (() => {

    /**
     * Namespace hoge.
     * @exports hoge
     * @namespace
     */
    const hoge = {};

    hoge.HogeRequest = (function() {

        /**
         * Properties of a HogeRequest.
         * @memberof hoge
         * @interface IHogeRequest
         * @property {string|null} [name] HogeRequest name
         */

        /**
         * Constructs a new HogeRequest.
         * @memberof hoge
         * @classdesc Represents a HogeRequest.
         * @implements IHogeRequest
         * @constructor
         * @param {hoge.IHogeRequest=} [properties] Properties to set
         */
        function HogeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HogeRequest name.
         * @member {string} name
         * @memberof hoge.HogeRequest
         * @instance
         */
        HogeRequest.prototype.name = "";

        /**
         * Creates a new HogeRequest instance using the specified properties.
         * @function create
         * @memberof hoge.HogeRequest
         * @static
         * @param {hoge.IHogeRequest=} [properties] Properties to set
         * @returns {hoge.HogeRequest} HogeRequest instance
         */
        HogeRequest.create = function create(properties) {
            return new HogeRequest(properties);
        };

        /**
         * Encodes the specified HogeRequest message. Does not implicitly {@link hoge.HogeRequest.verify|verify} messages.
         * @function encode
         * @memberof hoge.HogeRequest
         * @static
         * @param {hoge.IHogeRequest} message HogeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HogeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Decodes a HogeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof hoge.HogeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hoge.HogeRequest} HogeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HogeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hoge.HogeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for HogeRequest
         * @function getTypeUrl
         * @memberof hoge.HogeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HogeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hoge.HogeRequest";
        };

        return HogeRequest;
    })();

    hoge.HogeReply = (function() {

        /**
         * Properties of a HogeReply.
         * @memberof hoge
         * @interface IHogeReply
         * @property {string|null} [message] HogeReply message
         */

        /**
         * Constructs a new HogeReply.
         * @memberof hoge
         * @classdesc Represents a HogeReply.
         * @implements IHogeReply
         * @constructor
         * @param {hoge.IHogeReply=} [properties] Properties to set
         */
        function HogeReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HogeReply message.
         * @member {string} message
         * @memberof hoge.HogeReply
         * @instance
         */
        HogeReply.prototype.message = "";

        /**
         * Creates a new HogeReply instance using the specified properties.
         * @function create
         * @memberof hoge.HogeReply
         * @static
         * @param {hoge.IHogeReply=} [properties] Properties to set
         * @returns {hoge.HogeReply} HogeReply instance
         */
        HogeReply.create = function create(properties) {
            return new HogeReply(properties);
        };

        /**
         * Encodes the specified HogeReply message. Does not implicitly {@link hoge.HogeReply.verify|verify} messages.
         * @function encode
         * @memberof hoge.HogeReply
         * @static
         * @param {hoge.IHogeReply} message HogeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HogeReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Decodes a HogeReply message from the specified reader or buffer.
         * @function decode
         * @memberof hoge.HogeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hoge.HogeReply} HogeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HogeReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hoge.HogeReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for HogeReply
         * @function getTypeUrl
         * @memberof hoge.HogeReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HogeReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hoge.HogeReply";
        };

        return HogeReply;
    })();

    hoge.FugaRequest = (function() {

        /**
         * Properties of a FugaRequest.
         * @memberof hoge
         * @interface IFugaRequest
         * @property {string|null} [name] FugaRequest name
         */

        /**
         * Constructs a new FugaRequest.
         * @memberof hoge
         * @classdesc Represents a FugaRequest.
         * @implements IFugaRequest
         * @constructor
         * @param {hoge.IFugaRequest=} [properties] Properties to set
         */
        function FugaRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FugaRequest name.
         * @member {string} name
         * @memberof hoge.FugaRequest
         * @instance
         */
        FugaRequest.prototype.name = "";

        /**
         * Creates a new FugaRequest instance using the specified properties.
         * @function create
         * @memberof hoge.FugaRequest
         * @static
         * @param {hoge.IFugaRequest=} [properties] Properties to set
         * @returns {hoge.FugaRequest} FugaRequest instance
         */
        FugaRequest.create = function create(properties) {
            return new FugaRequest(properties);
        };

        /**
         * Encodes the specified FugaRequest message. Does not implicitly {@link hoge.FugaRequest.verify|verify} messages.
         * @function encode
         * @memberof hoge.FugaRequest
         * @static
         * @param {hoge.IFugaRequest} message FugaRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FugaRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Decodes a FugaRequest message from the specified reader or buffer.
         * @function decode
         * @memberof hoge.FugaRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hoge.FugaRequest} FugaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FugaRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hoge.FugaRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for FugaRequest
         * @function getTypeUrl
         * @memberof hoge.FugaRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FugaRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hoge.FugaRequest";
        };

        return FugaRequest;
    })();

    hoge.FugaReply = (function() {

        /**
         * Properties of a FugaReply.
         * @memberof hoge
         * @interface IFugaReply
         * @property {string|null} [message] FugaReply message
         */

        /**
         * Constructs a new FugaReply.
         * @memberof hoge
         * @classdesc Represents a FugaReply.
         * @implements IFugaReply
         * @constructor
         * @param {hoge.IFugaReply=} [properties] Properties to set
         */
        function FugaReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FugaReply message.
         * @member {string} message
         * @memberof hoge.FugaReply
         * @instance
         */
        FugaReply.prototype.message = "";

        /**
         * Creates a new FugaReply instance using the specified properties.
         * @function create
         * @memberof hoge.FugaReply
         * @static
         * @param {hoge.IFugaReply=} [properties] Properties to set
         * @returns {hoge.FugaReply} FugaReply instance
         */
        FugaReply.create = function create(properties) {
            return new FugaReply(properties);
        };

        /**
         * Encodes the specified FugaReply message. Does not implicitly {@link hoge.FugaReply.verify|verify} messages.
         * @function encode
         * @memberof hoge.FugaReply
         * @static
         * @param {hoge.IFugaReply} message FugaReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FugaReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Decodes a FugaReply message from the specified reader or buffer.
         * @function decode
         * @memberof hoge.FugaReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hoge.FugaReply} FugaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FugaReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.hoge.FugaReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for FugaReply
         * @function getTypeUrl
         * @memberof hoge.FugaReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FugaReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hoge.FugaReply";
        };

        return FugaReply;
    })();

    return hoge;
})();

export const homecontent = $root.homecontent = (() => {

    /**
     * Namespace homecontent.
     * @exports homecontent
     * @namespace
     */
    const homecontent = {};

    homecontent.HomeContentRequest = (function() {

        /**
         * Properties of a HomeContentRequest.
         * @memberof homecontent
         * @interface IHomeContentRequest
         */

        /**
         * Constructs a new HomeContentRequest.
         * @memberof homecontent
         * @classdesc Represents a HomeContentRequest.
         * @implements IHomeContentRequest
         * @constructor
         * @param {homecontent.IHomeContentRequest=} [properties] Properties to set
         */
        function HomeContentRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HomeContentRequest instance using the specified properties.
         * @function create
         * @memberof homecontent.HomeContentRequest
         * @static
         * @param {homecontent.IHomeContentRequest=} [properties] Properties to set
         * @returns {homecontent.HomeContentRequest} HomeContentRequest instance
         */
        HomeContentRequest.create = function create(properties) {
            return new HomeContentRequest(properties);
        };

        /**
         * Encodes the specified HomeContentRequest message. Does not implicitly {@link homecontent.HomeContentRequest.verify|verify} messages.
         * @function encode
         * @memberof homecontent.HomeContentRequest
         * @static
         * @param {homecontent.IHomeContentRequest} message HomeContentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomeContentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a HomeContentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof homecontent.HomeContentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {homecontent.HomeContentRequest} HomeContentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomeContentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.homecontent.HomeContentRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for HomeContentRequest
         * @function getTypeUrl
         * @memberof homecontent.HomeContentRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HomeContentRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/homecontent.HomeContentRequest";
        };

        return HomeContentRequest;
    })();

    homecontent.HomeContentResponse = (function() {

        /**
         * Properties of a HomeContentResponse.
         * @memberof homecontent
         * @interface IHomeContentResponse
         * @property {Array.<homecontent.IContentRow>|null} [contentRows] HomeContentResponse contentRows
         */

        /**
         * Constructs a new HomeContentResponse.
         * @memberof homecontent
         * @classdesc Represents a HomeContentResponse.
         * @implements IHomeContentResponse
         * @constructor
         * @param {homecontent.IHomeContentResponse=} [properties] Properties to set
         */
        function HomeContentResponse(properties) {
            this.contentRows = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HomeContentResponse contentRows.
         * @member {Array.<homecontent.IContentRow>} contentRows
         * @memberof homecontent.HomeContentResponse
         * @instance
         */
        HomeContentResponse.prototype.contentRows = $util.emptyArray;

        /**
         * Creates a new HomeContentResponse instance using the specified properties.
         * @function create
         * @memberof homecontent.HomeContentResponse
         * @static
         * @param {homecontent.IHomeContentResponse=} [properties] Properties to set
         * @returns {homecontent.HomeContentResponse} HomeContentResponse instance
         */
        HomeContentResponse.create = function create(properties) {
            return new HomeContentResponse(properties);
        };

        /**
         * Encodes the specified HomeContentResponse message. Does not implicitly {@link homecontent.HomeContentResponse.verify|verify} messages.
         * @function encode
         * @memberof homecontent.HomeContentResponse
         * @static
         * @param {homecontent.IHomeContentResponse} message HomeContentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomeContentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contentRows != null && message.contentRows.length)
                for (let i = 0; i < message.contentRows.length; ++i)
                    $root.homecontent.ContentRow.encode(message.contentRows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a HomeContentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof homecontent.HomeContentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {homecontent.HomeContentResponse} HomeContentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomeContentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.homecontent.HomeContentResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.contentRows && message.contentRows.length))
                            message.contentRows = [];
                        message.contentRows.push($root.homecontent.ContentRow.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for HomeContentResponse
         * @function getTypeUrl
         * @memberof homecontent.HomeContentResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HomeContentResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/homecontent.HomeContentResponse";
        };

        return HomeContentResponse;
    })();

    homecontent.ContentRow = (function() {

        /**
         * Properties of a ContentRow.
         * @memberof homecontent
         * @interface IContentRow
         * @property {string|null} [rowHeader] ContentRow rowHeader
         * @property {homecontent.ContentType|null} [contentType] ContentRow contentType
         * @property {Array.<homecontent.IContent>|null} [contents] ContentRow contents
         */

        /**
         * Constructs a new ContentRow.
         * @memberof homecontent
         * @classdesc Represents a ContentRow.
         * @implements IContentRow
         * @constructor
         * @param {homecontent.IContentRow=} [properties] Properties to set
         */
        function ContentRow(properties) {
            this.contents = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContentRow rowHeader.
         * @member {string} rowHeader
         * @memberof homecontent.ContentRow
         * @instance
         */
        ContentRow.prototype.rowHeader = "";

        /**
         * ContentRow contentType.
         * @member {homecontent.ContentType} contentType
         * @memberof homecontent.ContentRow
         * @instance
         */
        ContentRow.prototype.contentType = 1;

        /**
         * ContentRow contents.
         * @member {Array.<homecontent.IContent>} contents
         * @memberof homecontent.ContentRow
         * @instance
         */
        ContentRow.prototype.contents = $util.emptyArray;

        /**
         * Creates a new ContentRow instance using the specified properties.
         * @function create
         * @memberof homecontent.ContentRow
         * @static
         * @param {homecontent.IContentRow=} [properties] Properties to set
         * @returns {homecontent.ContentRow} ContentRow instance
         */
        ContentRow.create = function create(properties) {
            return new ContentRow(properties);
        };

        /**
         * Encodes the specified ContentRow message. Does not implicitly {@link homecontent.ContentRow.verify|verify} messages.
         * @function encode
         * @memberof homecontent.ContentRow
         * @static
         * @param {homecontent.IContentRow} message ContentRow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentRow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rowHeader != null && Object.hasOwnProperty.call(message, "rowHeader"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rowHeader);
            if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.contentType);
            if (message.contents != null && message.contents.length)
                for (let i = 0; i < message.contents.length; ++i)
                    $root.homecontent.Content.encode(message.contents[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ContentRow message from the specified reader or buffer.
         * @function decode
         * @memberof homecontent.ContentRow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {homecontent.ContentRow} ContentRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentRow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.homecontent.ContentRow();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.rowHeader = reader.string();
                        break;
                    }
                case 2: {
                        message.contentType = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.contents && message.contents.length))
                            message.contents = [];
                        message.contents.push($root.homecontent.Content.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ContentRow
         * @function getTypeUrl
         * @memberof homecontent.ContentRow
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ContentRow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/homecontent.ContentRow";
        };

        return ContentRow;
    })();

    /**
     * ContentType enum.
     * @name homecontent.ContentType
     * @enum {number}
     * @property {number} CONTENT_TYPE_VIDEO=1 CONTENT_TYPE_VIDEO value
     * @property {number} CONTENT_TYPE_ARTICLE=2 CONTENT_TYPE_ARTICLE value
     */
    homecontent.ContentType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CONTENT_TYPE_VIDEO"] = 1;
        values[valuesById[2] = "CONTENT_TYPE_ARTICLE"] = 2;
        return values;
    })();

    homecontent.Content = (function() {

        /**
         * Properties of a Content.
         * @memberof homecontent
         * @interface IContent
         * @property {string|null} [title] Content title
         * @property {string|null} [thumbnail] Content thumbnail
         */

        /**
         * Constructs a new Content.
         * @memberof homecontent
         * @classdesc Represents a Content.
         * @implements IContent
         * @constructor
         * @param {homecontent.IContent=} [properties] Properties to set
         */
        function Content(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Content title.
         * @member {string} title
         * @memberof homecontent.Content
         * @instance
         */
        Content.prototype.title = "";

        /**
         * Content thumbnail.
         * @member {string} thumbnail
         * @memberof homecontent.Content
         * @instance
         */
        Content.prototype.thumbnail = "";

        /**
         * Creates a new Content instance using the specified properties.
         * @function create
         * @memberof homecontent.Content
         * @static
         * @param {homecontent.IContent=} [properties] Properties to set
         * @returns {homecontent.Content} Content instance
         */
        Content.create = function create(properties) {
            return new Content(properties);
        };

        /**
         * Encodes the specified Content message. Does not implicitly {@link homecontent.Content.verify|verify} messages.
         * @function encode
         * @memberof homecontent.Content
         * @static
         * @param {homecontent.IContent} message Content message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Content.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.thumbnail);
            return writer;
        };

        /**
         * Decodes a Content message from the specified reader or buffer.
         * @function decode
         * @memberof homecontent.Content
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {homecontent.Content} Content
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Content.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.homecontent.Content();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.title = reader.string();
                        break;
                    }
                case 2: {
                        message.thumbnail = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Content
         * @function getTypeUrl
         * @memberof homecontent.Content
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Content.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/homecontent.Content";
        };

        return Content;
    })();

    return homecontent;
})();

export const image = $root.image = (() => {

    /**
     * Namespace image.
     * @exports image
     * @namespace
     */
    const image = {};

    image.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @memberof image
         * @interface IListRequest
         */

        /**
         * Constructs a new ListRequest.
         * @memberof image
         * @classdesc Represents a ListRequest.
         * @implements IListRequest
         * @constructor
         * @param {image.IListRequest=} [properties] Properties to set
         */
        function ListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListRequest instance using the specified properties.
         * @function create
         * @memberof image.ListRequest
         * @static
         * @param {image.IListRequest=} [properties] Properties to set
         * @returns {image.ListRequest} ListRequest instance
         */
        ListRequest.create = function create(properties) {
            return new ListRequest(properties);
        };

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link image.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof image.ListRequest
         * @static
         * @param {image.IListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof image.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {image.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.image.ListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListRequest
         * @function getTypeUrl
         * @memberof image.ListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/image.ListRequest";
        };

        return ListRequest;
    })();

    image.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @memberof image
         * @interface IListResponse
         * @property {Array.<image.IImage>|null} [images] ListResponse images
         */

        /**
         * Constructs a new ListResponse.
         * @memberof image
         * @classdesc Represents a ListResponse.
         * @implements IListResponse
         * @constructor
         * @param {image.IListResponse=} [properties] Properties to set
         */
        function ListResponse(properties) {
            this.images = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResponse images.
         * @member {Array.<image.IImage>} images
         * @memberof image.ListResponse
         * @instance
         */
        ListResponse.prototype.images = $util.emptyArray;

        /**
         * Creates a new ListResponse instance using the specified properties.
         * @function create
         * @memberof image.ListResponse
         * @static
         * @param {image.IListResponse=} [properties] Properties to set
         * @returns {image.ListResponse} ListResponse instance
         */
        ListResponse.create = function create(properties) {
            return new ListResponse(properties);
        };

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link image.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof image.ListResponse
         * @static
         * @param {image.IListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.images != null && message.images.length)
                for (let i = 0; i < message.images.length; ++i)
                    $root.image.Image.encode(message.images[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof image.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {image.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.image.ListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.images && message.images.length))
                            message.images = [];
                        message.images.push($root.image.Image.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListResponse
         * @function getTypeUrl
         * @memberof image.ListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/image.ListResponse";
        };

        return ListResponse;
    })();

    image.Image = (function() {

        /**
         * Properties of an Image.
         * @memberof image
         * @interface IImage
         * @property {string|null} [src] Image src
         * @property {string|null} [alt] Image alt
         */

        /**
         * Constructs a new Image.
         * @memberof image
         * @classdesc Represents an Image.
         * @implements IImage
         * @constructor
         * @param {image.IImage=} [properties] Properties to set
         */
        function Image(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Image src.
         * @member {string} src
         * @memberof image.Image
         * @instance
         */
        Image.prototype.src = "";

        /**
         * Image alt.
         * @member {string} alt
         * @memberof image.Image
         * @instance
         */
        Image.prototype.alt = "";

        /**
         * Creates a new Image instance using the specified properties.
         * @function create
         * @memberof image.Image
         * @static
         * @param {image.IImage=} [properties] Properties to set
         * @returns {image.Image} Image instance
         */
        Image.create = function create(properties) {
            return new Image(properties);
        };

        /**
         * Encodes the specified Image message. Does not implicitly {@link image.Image.verify|verify} messages.
         * @function encode
         * @memberof image.Image
         * @static
         * @param {image.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.src);
            if (message.alt != null && Object.hasOwnProperty.call(message, "alt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.alt);
            return writer;
        };

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @function decode
         * @memberof image.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {image.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.image.Image();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.src = reader.string();
                        break;
                    }
                case 2: {
                        message.alt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Image
         * @function getTypeUrl
         * @memberof image.Image
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Image.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/image.Image";
        };

        return Image;
    })();

    return image;
})();

export { $root as default };

import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace helloworld. */
export namespace helloworld {

    /** Properties of a HelloRequest. */
    interface IHelloRequest {

        /** HelloRequest name */
        name?: (string|null);
    }

    /** Represents a HelloRequest. */
    class HelloRequest implements IHelloRequest {

        /**
         * Constructs a new HelloRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloRequest);

        /** HelloRequest name. */
        public name: string;

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloRequest;

        /**
         * Gets the default type url for HelloRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HelloReply. */
    interface IHelloReply {

        /** HelloReply message */
        message?: (string|null);

        /** HelloReply repliedAt */
        repliedAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a HelloReply. */
    class HelloReply implements IHelloReply {

        /**
         * Constructs a new HelloReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReply);

        /** HelloReply message. */
        public message: string;

        /** HelloReply repliedAt. */
        public repliedAt?: (google.protobuf.ITimestamp|null);

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReply;

        /**
         * Gets the default type url for HelloReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace hoge. */
export namespace hoge {

    /** Properties of a HogeRequest. */
    interface IHogeRequest {

        /** HogeRequest name */
        name?: (string|null);
    }

    /** Represents a HogeRequest. */
    class HogeRequest implements IHogeRequest {

        /**
         * Constructs a new HogeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hoge.IHogeRequest);

        /** HogeRequest name. */
        public name: string;

        /**
         * Encodes the specified HogeRequest message. Does not implicitly {@link hoge.HogeRequest.verify|verify} messages.
         * @param message HogeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hoge.IHogeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HogeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HogeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hoge.HogeRequest;

        /**
         * Gets the default type url for HogeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HogeReply. */
    interface IHogeReply {

        /** HogeReply message */
        message?: (string|null);
    }

    /** Represents a HogeReply. */
    class HogeReply implements IHogeReply {

        /**
         * Constructs a new HogeReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: hoge.IHogeReply);

        /** HogeReply message. */
        public message: string;

        /**
         * Encodes the specified HogeReply message. Does not implicitly {@link hoge.HogeReply.verify|verify} messages.
         * @param message HogeReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hoge.IHogeReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HogeReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HogeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hoge.HogeReply;

        /**
         * Gets the default type url for HogeReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FugaRequest. */
    interface IFugaRequest {

        /** FugaRequest name */
        name?: (string|null);
    }

    /** Represents a FugaRequest. */
    class FugaRequest implements IFugaRequest {

        /**
         * Constructs a new FugaRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hoge.IFugaRequest);

        /** FugaRequest name. */
        public name: string;

        /**
         * Encodes the specified FugaRequest message. Does not implicitly {@link hoge.FugaRequest.verify|verify} messages.
         * @param message FugaRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hoge.IFugaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FugaRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FugaRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hoge.FugaRequest;

        /**
         * Gets the default type url for FugaRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FugaReply. */
    interface IFugaReply {

        /** FugaReply message */
        message?: (string|null);
    }

    /** Represents a FugaReply. */
    class FugaReply implements IFugaReply {

        /**
         * Constructs a new FugaReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: hoge.IFugaReply);

        /** FugaReply message. */
        public message: string;

        /**
         * Encodes the specified FugaReply message. Does not implicitly {@link hoge.FugaReply.verify|verify} messages.
         * @param message FugaReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hoge.IFugaReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FugaReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FugaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hoge.FugaReply;

        /**
         * Gets the default type url for FugaReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

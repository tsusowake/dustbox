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
         * Creates a new HelloRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequest instance
         */
        public static create(properties?: helloworld.IHelloRequest): helloworld.HelloRequest;

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
         * Creates a new HelloReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReply instance
         */
        public static create(properties?: helloworld.IHelloReply): helloworld.HelloReply;

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
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

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
         * Creates a new HogeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HogeRequest instance
         */
        public static create(properties?: hoge.IHogeRequest): hoge.HogeRequest;

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
         * Creates a new HogeReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HogeReply instance
         */
        public static create(properties?: hoge.IHogeReply): hoge.HogeReply;

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
         * Creates a new FugaRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FugaRequest instance
         */
        public static create(properties?: hoge.IFugaRequest): hoge.FugaRequest;

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
         * Creates a new FugaReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FugaReply instance
         */
        public static create(properties?: hoge.IFugaReply): hoge.FugaReply;

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

/** Namespace image. */
export namespace image {

    /** Properties of a ListRequest. */
    interface IListRequest {
    }

    /** Represents a ListRequest. */
    class ListRequest implements IListRequest {

        /**
         * Constructs a new ListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: image.IListRequest);

        /**
         * Creates a new ListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRequest instance
         */
        public static create(properties?: image.IListRequest): image.ListRequest;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link image.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: image.IListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): image.ListRequest;

        /**
         * Gets the default type url for ListRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListResponse. */
    interface IListResponse {

        /** ListResponse images */
        images?: (image.IImage[]|null);
    }

    /** Represents a ListResponse. */
    class ListResponse implements IListResponse {

        /**
         * Constructs a new ListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: image.IListResponse);

        /** ListResponse images. */
        public images: image.IImage[];

        /**
         * Creates a new ListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListResponse instance
         */
        public static create(properties?: image.IListResponse): image.ListResponse;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link image.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: image.IListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): image.ListResponse;

        /**
         * Gets the default type url for ListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Image. */
    interface IImage {

        /** Image src */
        src?: (string|null);

        /** Image alt */
        alt?: (string|null);
    }

    /** Represents an Image. */
    class Image implements IImage {

        /**
         * Constructs a new Image.
         * @param [properties] Properties to set
         */
        constructor(properties?: image.IImage);

        /** Image src. */
        public src: string;

        /** Image alt. */
        public alt: string;

        /**
         * Creates a new Image instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Image instance
         */
        public static create(properties?: image.IImage): image.Image;

        /**
         * Encodes the specified Image message. Does not implicitly {@link image.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: image.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): image.Image;

        /**
         * Gets the default type url for Image
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

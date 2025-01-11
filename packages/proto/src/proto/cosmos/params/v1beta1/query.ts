// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: cosmos/params/v1beta1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_3 from "./params";
import * as pb_1 from "google-protobuf";
export namespace cosmos.params.v1beta1 {
    export class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            subspace?: string;
            key?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("subspace" in data && data.subspace != undefined) {
                    this.subspace = data.subspace;
                }
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
            }
        }
        get subspace() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set subspace(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get key() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set key(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            subspace?: string;
            key?: string;
        }) {
            const message = new QueryParamsRequest({});
            if (data.subspace != null) {
                message.subspace = data.subspace;
            }
            if (data.key != null) {
                message.key = data.key;
            }
            return message;
        }
        toObject() {
            const data: {
                subspace?: string;
                key?: string;
            } = {};
            if (this.subspace != null) {
                data.subspace = this.subspace;
            }
            if (this.key != null) {
                data.key = this.key;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.subspace === "string" && this.subspace.length)
                writer.writeString(1, this.subspace);
            if (typeof this.key === "string" && this.key.length)
                writer.writeString(2, this.key);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.subspace = reader.readString();
                        break;
                    case 2:
                        message.key = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            param?: dependency_3.cosmos.params.v1beta1.ParamChange;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("param" in data && data.param != undefined) {
                    this.param = data.param;
                }
            }
        }
        get param() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.params.v1beta1.ParamChange, 1) as dependency_3.cosmos.params.v1beta1.ParamChange;
        }
        set param(value: dependency_3.cosmos.params.v1beta1.ParamChange) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            param?: ReturnType<typeof dependency_3.cosmos.params.v1beta1.ParamChange.prototype.toObject>;
        }) {
            const message = new QueryParamsResponse({});
            if (data.param != null) {
                message.param = dependency_3.cosmos.params.v1beta1.ParamChange.fromObject(data.param);
            }
            return message;
        }
        toObject() {
            const data: {
                param?: ReturnType<typeof dependency_3.cosmos.params.v1beta1.ParamChange.prototype.toObject>;
            } = {};
            if (this.param != null) {
                data.param = this.param.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.param !== undefined)
                writer.writeMessage(1, this.param, () => this.param.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.param, () => message.param = dependency_3.cosmos.params.v1beta1.ParamChange.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
}
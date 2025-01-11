// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: evmos/inflation/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_3 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_4 from "./genesis";
import * as pb_1 from "google-protobuf";
export namespace evmos.inflation.v1 {
    export class QueryPeriodRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryPeriodRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPeriodRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPeriodRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryPeriodRequest {
            return QueryPeriodRequest.deserialize(bytes);
        }
    }
    export class QueryPeriodResponse extends pb_1.Message {
        constructor(data?: any[] | {
            period?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("period" in data && data.period != undefined) {
                    this.period = data.period;
                }
            }
        }
        get period() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set period(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            period?: number;
        }) {
            const message = new QueryPeriodResponse({});
            if (data.period != null) {
                message.period = data.period;
            }
            return message;
        }
        toObject() {
            const data: {
                period?: number;
            } = {};
            if (this.period != null) {
                data.period = this.period;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.period !== undefined)
                writer.writeUint64(1, this.period);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPeriodResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPeriodResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.period = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryPeriodResponse {
            return QueryPeriodResponse.deserialize(bytes);
        }
    }
    export class QueryEpochMintProvisionRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryEpochMintProvisionRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochMintProvisionRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochMintProvisionRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEpochMintProvisionRequest {
            return QueryEpochMintProvisionRequest.deserialize(bytes);
        }
    }
    export class QueryEpochMintProvisionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            epoch_mint_provision?: dependency_3.cosmos.base.v1beta1.DecCoin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("epoch_mint_provision" in data && data.epoch_mint_provision != undefined) {
                    this.epoch_mint_provision = data.epoch_mint_provision;
                }
            }
        }
        get epoch_mint_provision() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1) as dependency_3.cosmos.base.v1beta1.DecCoin;
        }
        set epoch_mint_provision(value: dependency_3.cosmos.base.v1beta1.DecCoin) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            epoch_mint_provision?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
        }) {
            const message = new QueryEpochMintProvisionResponse({});
            if (data.epoch_mint_provision != null) {
                message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.epoch_mint_provision);
            }
            return message;
        }
        toObject() {
            const data: {
                epoch_mint_provision?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
            } = {};
            if (this.epoch_mint_provision != null) {
                data.epoch_mint_provision = this.epoch_mint_provision.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.epoch_mint_provision !== undefined)
                writer.writeMessage(1, this.epoch_mint_provision, () => this.epoch_mint_provision.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochMintProvisionResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochMintProvisionResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.epoch_mint_provision, () => message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEpochMintProvisionResponse {
            return QueryEpochMintProvisionResponse.deserialize(bytes);
        }
    }
    export class QuerySkippedEpochsRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QuerySkippedEpochsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySkippedEpochsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySkippedEpochsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySkippedEpochsRequest {
            return QuerySkippedEpochsRequest.deserialize(bytes);
        }
    }
    export class QuerySkippedEpochsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            skipped_epochs?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("skipped_epochs" in data && data.skipped_epochs != undefined) {
                    this.skipped_epochs = data.skipped_epochs;
                }
            }
        }
        get skipped_epochs() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set skipped_epochs(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            skipped_epochs?: number;
        }) {
            const message = new QuerySkippedEpochsResponse({});
            if (data.skipped_epochs != null) {
                message.skipped_epochs = data.skipped_epochs;
            }
            return message;
        }
        toObject() {
            const data: {
                skipped_epochs?: number;
            } = {};
            if (this.skipped_epochs != null) {
                data.skipped_epochs = this.skipped_epochs;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.skipped_epochs !== undefined)
                writer.writeUint64(1, this.skipped_epochs);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySkippedEpochsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySkippedEpochsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.skipped_epochs = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySkippedEpochsResponse {
            return QuerySkippedEpochsResponse.deserialize(bytes);
        }
    }
    export class QueryCirculatingSupplyRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryCirculatingSupplyRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCirculatingSupplyRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCirculatingSupplyRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryCirculatingSupplyRequest {
            return QueryCirculatingSupplyRequest.deserialize(bytes);
        }
    }
    export class QueryCirculatingSupplyResponse extends pb_1.Message {
        constructor(data?: any[] | {
            circulating_supply?: dependency_3.cosmos.base.v1beta1.DecCoin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("circulating_supply" in data && data.circulating_supply != undefined) {
                    this.circulating_supply = data.circulating_supply;
                }
            }
        }
        get circulating_supply() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1) as dependency_3.cosmos.base.v1beta1.DecCoin;
        }
        set circulating_supply(value: dependency_3.cosmos.base.v1beta1.DecCoin) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            circulating_supply?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
        }) {
            const message = new QueryCirculatingSupplyResponse({});
            if (data.circulating_supply != null) {
                message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.circulating_supply);
            }
            return message;
        }
        toObject() {
            const data: {
                circulating_supply?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
            } = {};
            if (this.circulating_supply != null) {
                data.circulating_supply = this.circulating_supply.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.circulating_supply !== undefined)
                writer.writeMessage(1, this.circulating_supply, () => this.circulating_supply.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCirculatingSupplyResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCirculatingSupplyResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.circulating_supply, () => message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryCirculatingSupplyResponse {
            return QueryCirculatingSupplyResponse.deserialize(bytes);
        }
    }
    export class QueryInflationRateRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryInflationRateRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationRateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryInflationRateRequest {
            return QueryInflationRateRequest.deserialize(bytes);
        }
    }
    export class QueryInflationRateResponse extends pb_1.Message {
        constructor(data?: any[] | {
            inflation_rate?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("inflation_rate" in data && data.inflation_rate != undefined) {
                    this.inflation_rate = data.inflation_rate;
                }
            }
        }
        get inflation_rate() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set inflation_rate(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            inflation_rate?: string;
        }) {
            const message = new QueryInflationRateResponse({});
            if (data.inflation_rate != null) {
                message.inflation_rate = data.inflation_rate;
            }
            return message;
        }
        toObject() {
            const data: {
                inflation_rate?: string;
            } = {};
            if (this.inflation_rate != null) {
                data.inflation_rate = this.inflation_rate;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.inflation_rate === "string" && this.inflation_rate.length)
                writer.writeString(1, this.inflation_rate);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRateResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationRateResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.inflation_rate = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryInflationRateResponse {
            return QueryInflationRateResponse.deserialize(bytes);
        }
    }
    export class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryParamsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
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
            params?: dependency_4.evmos.inflation.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_4.evmos.inflation.v1.Params, 1) as dependency_4.evmos.inflation.v1.Params;
        }
        set params(value: dependency_4.evmos.inflation.v1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.evmos.inflation.v1.Params.prototype.toObject>;
        }) {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_4.evmos.inflation.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_4.evmos.inflation.v1.Params.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
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
                        reader.readMessage(message.params, () => message.params = dependency_4.evmos.inflation.v1.Params.deserialize(reader));
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

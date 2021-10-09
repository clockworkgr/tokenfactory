/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
export const protobufPackage = 'clockworkgr.tokenfactory.tokenfactory';
const baseMsgCreateDenom = { owner: '', denom: '', description: '', ticker: '', precision: 0, url: '', maxSupply: 0, canChangeMaxSupply: false };
export const MsgCreateDenom = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.ticker !== '') {
            writer.uint32(34).string(message.ticker);
        }
        if (message.precision !== 0) {
            writer.uint32(40).int32(message.precision);
        }
        if (message.url !== '') {
            writer.uint32(50).string(message.url);
        }
        if (message.maxSupply !== 0) {
            writer.uint32(56).int32(message.maxSupply);
        }
        if (message.canChangeMaxSupply === true) {
            writer.uint32(64).bool(message.canChangeMaxSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDenom };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.ticker = reader.string();
                    break;
                case 5:
                    message.precision = reader.int32();
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                case 7:
                    message.maxSupply = reader.int32();
                    break;
                case 8:
                    message.canChangeMaxSupply = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = String(object.ticker);
        }
        else {
            message.ticker = '';
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = Number(object.precision);
        }
        else {
            message.precision = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = Number(object.maxSupply);
        }
        else {
            message.maxSupply = 0;
        }
        if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply);
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.description !== undefined && (obj.description = message.description);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.precision !== undefined && (obj.precision = message.precision);
        message.url !== undefined && (obj.url = message.url);
        message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
        message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        else {
            message.ticker = '';
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = object.precision;
        }
        else {
            message.precision = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = object.maxSupply;
        }
        else {
            message.maxSupply = 0;
        }
        if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = object.canChangeMaxSupply;
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    }
};
const baseMsgCreateDenomResponse = {};
export const MsgCreateDenomResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDenomResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateDenomResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateDenomResponse };
        return message;
    }
};
const baseMsgUpdateDenom = { owner: '', denom: '', description: '', url: '', maxSupply: 0, canChangeMaxSupply: false };
export const MsgUpdateDenom = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.url !== '') {
            writer.uint32(34).string(message.url);
        }
        if (message.maxSupply !== 0) {
            writer.uint32(40).int32(message.maxSupply);
        }
        if (message.canChangeMaxSupply === true) {
            writer.uint32(48).bool(message.canChangeMaxSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDenom };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.maxSupply = reader.int32();
                    break;
                case 6:
                    message.canChangeMaxSupply = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = Number(object.maxSupply);
        }
        else {
            message.maxSupply = 0;
        }
        if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply);
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.description !== undefined && (obj.description = message.description);
        message.url !== undefined && (obj.url = message.url);
        message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
        message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = object.maxSupply;
        }
        else {
            message.maxSupply = 0;
        }
        if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = object.canChangeMaxSupply;
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    }
};
const baseMsgUpdateDenomResponse = {};
export const MsgUpdateDenomResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDenomResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateDenomResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateDenomResponse };
        return message;
    }
};
const baseMsgMintAndSendTokens = { owner: '', denom: '', amount: 0, recipient: '' };
export const MsgMintAndSendTokens = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.amount !== 0) {
            writer.uint32(24).int32(message.amount);
        }
        if (message.recipient !== '') {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintAndSendTokens };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.amount = reader.int32();
                    break;
                case 4:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMintAndSendTokens };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMintAndSendTokens };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        return message;
    }
};
const baseMsgMintAndSendTokensResponse = {};
export const MsgMintAndSendTokensResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintAndSendTokensResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgMintAndSendTokensResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMintAndSendTokensResponse };
        return message;
    }
};
const baseMsgUpdateOwner = { owner: '', denom: '', newOwner: '' };
export const MsgUpdateOwner = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.newOwner !== '') {
            writer.uint32(26).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOwner };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateOwner };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = String(object.newOwner);
        }
        else {
            message.newOwner = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateOwner };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = object.newOwner;
        }
        else {
            message.newOwner = '';
        }
        return message;
    }
};
const baseMsgUpdateOwnerResponse = {};
export const MsgUpdateOwnerResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOwnerResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateOwnerResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateOwnerResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateDenom(request) {
        const data = MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request('clockworkgr.tokenfactory.tokenfactory.Msg', 'CreateDenom', data);
        return promise.then((data) => MsgCreateDenomResponse.decode(new Reader(data)));
    }
    UpdateDenom(request) {
        const data = MsgUpdateDenom.encode(request).finish();
        const promise = this.rpc.request('clockworkgr.tokenfactory.tokenfactory.Msg', 'UpdateDenom', data);
        return promise.then((data) => MsgUpdateDenomResponse.decode(new Reader(data)));
    }
    MintAndSendTokens(request) {
        const data = MsgMintAndSendTokens.encode(request).finish();
        const promise = this.rpc.request('clockworkgr.tokenfactory.tokenfactory.Msg', 'MintAndSendTokens', data);
        return promise.then((data) => MsgMintAndSendTokensResponse.decode(new Reader(data)));
    }
    UpdateOwner(request) {
        const data = MsgUpdateOwner.encode(request).finish();
        const promise = this.rpc.request('clockworkgr.tokenfactory.tokenfactory.Msg', 'UpdateOwner', data);
        return promise.then((data) => MsgUpdateOwnerResponse.decode(new Reader(data)));
    }
}

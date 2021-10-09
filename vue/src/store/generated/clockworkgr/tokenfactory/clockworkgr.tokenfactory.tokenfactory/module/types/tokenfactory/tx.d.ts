import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "clockworkgr.tokenfactory.tokenfactory";
export interface MsgCreateDenom {
    owner: string;
    denom: string;
    description: string;
    ticker: string;
    precision: number;
    url: string;
    maxSupply: number;
    canChangeMaxSupply: boolean;
}
export interface MsgCreateDenomResponse {
}
export interface MsgUpdateDenom {
    owner: string;
    denom: string;
    description: string;
    url: string;
    maxSupply: number;
    canChangeMaxSupply: boolean;
}
export interface MsgUpdateDenomResponse {
}
export interface MsgMintAndSendTokens {
    owner: string;
    denom: string;
    amount: number;
    recipient: string;
}
export interface MsgMintAndSendTokensResponse {
}
export interface MsgUpdateOwner {
    owner: string;
    denom: string;
    newOwner: string;
}
export interface MsgUpdateOwnerResponse {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(_: MsgCreateDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(_: any): MsgCreateDenomResponse;
    toJSON(_: MsgCreateDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgUpdateDenom: {
    encode(message: MsgUpdateDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenom;
    fromJSON(object: any): MsgUpdateDenom;
    toJSON(message: MsgUpdateDenom): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDenom>): MsgUpdateDenom;
};
export declare const MsgUpdateDenomResponse: {
    encode(_: MsgUpdateDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenomResponse;
    fromJSON(_: any): MsgUpdateDenomResponse;
    toJSON(_: MsgUpdateDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDenomResponse>): MsgUpdateDenomResponse;
};
export declare const MsgMintAndSendTokens: {
    encode(message: MsgMintAndSendTokens, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintAndSendTokens;
    fromJSON(object: any): MsgMintAndSendTokens;
    toJSON(message: MsgMintAndSendTokens): unknown;
    fromPartial(object: DeepPartial<MsgMintAndSendTokens>): MsgMintAndSendTokens;
};
export declare const MsgMintAndSendTokensResponse: {
    encode(_: MsgMintAndSendTokensResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintAndSendTokensResponse;
    fromJSON(_: any): MsgMintAndSendTokensResponse;
    toJSON(_: MsgMintAndSendTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintAndSendTokensResponse>): MsgMintAndSendTokensResponse;
};
export declare const MsgUpdateOwner: {
    encode(message: MsgUpdateOwner, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOwner;
    fromJSON(object: any): MsgUpdateOwner;
    toJSON(message: MsgUpdateOwner): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOwner>): MsgUpdateOwner;
};
export declare const MsgUpdateOwnerResponse: {
    encode(_: MsgUpdateOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOwnerResponse;
    fromJSON(_: any): MsgUpdateOwnerResponse;
    toJSON(_: MsgUpdateOwnerResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateOwnerResponse>): MsgUpdateOwnerResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>;
    UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

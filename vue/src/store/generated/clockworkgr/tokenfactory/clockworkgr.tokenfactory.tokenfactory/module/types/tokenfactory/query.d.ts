import { Reader, Writer } from 'protobufjs/minimal';
import { Denom } from '../tokenfactory/denom';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "clockworkgr.tokenfactory.tokenfactory";
export interface QueryGetDenomRequest {
    denom: string;
}
export interface QueryGetDenomResponse {
    denom: Denom | undefined;
}
export interface QueryAllDenomRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDenomResponse {
    denom: Denom[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetDenomRequest: {
    encode(message: QueryGetDenomRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDenomRequest;
    fromJSON(object: any): QueryGetDenomRequest;
    toJSON(message: QueryGetDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDenomRequest>): QueryGetDenomRequest;
};
export declare const QueryGetDenomResponse: {
    encode(message: QueryGetDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDenomResponse;
    fromJSON(object: any): QueryGetDenomResponse;
    toJSON(message: QueryGetDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDenomResponse>): QueryGetDenomResponse;
};
export declare const QueryAllDenomRequest: {
    encode(message: QueryAllDenomRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDenomRequest;
    fromJSON(object: any): QueryAllDenomRequest;
    toJSON(message: QueryAllDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDenomRequest>): QueryAllDenomRequest;
};
export declare const QueryAllDenomResponse: {
    encode(message: QueryAllDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDenomResponse;
    fromJSON(object: any): QueryAllDenomResponse;
    toJSON(message: QueryAllDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDenomResponse>): QueryAllDenomResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a denom by index. */
    Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
    /** Queries a list of denom items. */
    DenomAll(request: QueryAllDenomRequest): Promise<QueryAllDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
    DenomAll(request: QueryAllDenomRequest): Promise<QueryAllDenomResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

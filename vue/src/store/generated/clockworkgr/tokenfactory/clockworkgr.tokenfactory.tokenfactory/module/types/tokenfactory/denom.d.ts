import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "clockworkgr.tokenfactory.tokenfactory";
export interface Denom {
    denom: string;
    description: string;
    ticker: string;
    precision: number;
    url: string;
    maxSupply: number;
    supply: number;
    canChangeMaxSupply: boolean;
    owner: string;
}
export declare const Denom: {
    encode(message: Denom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Denom;
    fromJSON(object: any): Denom;
    toJSON(message: Denom): unknown;
    fromPartial(object: DeepPartial<Denom>): Denom;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Denom } from '../tokenfactory/denom'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'clockworkgr.tokenfactory.tokenfactory'

export interface QueryGetDenomRequest {
  denom: string
}

export interface QueryGetDenomResponse {
  denom: Denom | undefined
}

export interface QueryAllDenomRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllDenomResponse {
  denom: Denom[]
  pagination: PageResponse | undefined
}

const baseQueryGetDenomRequest: object = { denom: '' }

export const QueryGetDenomRequest = {
  encode(message: QueryGetDenomRequest, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDenomRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDenomRequest } as QueryGetDenomRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDenomRequest {
    const message = { ...baseQueryGetDenomRequest } as QueryGetDenomRequest
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    return message
  },

  toJSON(message: QueryGetDenomRequest): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDenomRequest>): QueryGetDenomRequest {
    const message = { ...baseQueryGetDenomRequest } as QueryGetDenomRequest
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    return message
  }
}

const baseQueryGetDenomResponse: object = {}

export const QueryGetDenomResponse = {
  encode(message: QueryGetDenomResponse, writer: Writer = Writer.create()): Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDenomResponse } as QueryGetDenomResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDenomResponse {
    const message = { ...baseQueryGetDenomResponse } as QueryGetDenomResponse
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromJSON(object.denom)
    } else {
      message.denom = undefined
    }
    return message
  },

  toJSON(message: QueryGetDenomResponse): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDenomResponse>): QueryGetDenomResponse {
    const message = { ...baseQueryGetDenomResponse } as QueryGetDenomResponse
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom)
    } else {
      message.denom = undefined
    }
    return message
  }
}

const baseQueryAllDenomRequest: object = {}

export const QueryAllDenomRequest = {
  encode(message: QueryAllDenomRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDenomRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDenomRequest } as QueryAllDenomRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDenomRequest {
    const message = { ...baseQueryAllDenomRequest } as QueryAllDenomRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDenomRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDenomRequest>): QueryAllDenomRequest {
    const message = { ...baseQueryAllDenomRequest } as QueryAllDenomRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllDenomResponse: object = {}

export const QueryAllDenomResponse = {
  encode(message: QueryAllDenomResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.denom) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDenomResponse } as QueryAllDenomResponse
    message.denom = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom.push(Denom.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDenomResponse {
    const message = { ...baseQueryAllDenomResponse } as QueryAllDenomResponse
    message.denom = []
    if (object.denom !== undefined && object.denom !== null) {
      for (const e of object.denom) {
        message.denom.push(Denom.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDenomResponse): unknown {
    const obj: any = {}
    if (message.denom) {
      obj.denom = message.denom.map((e) => (e ? Denom.toJSON(e) : undefined))
    } else {
      obj.denom = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDenomResponse>): QueryAllDenomResponse {
    const message = { ...baseQueryAllDenomResponse } as QueryAllDenomResponse
    message.denom = []
    if (object.denom !== undefined && object.denom !== null) {
      for (const e of object.denom) {
        message.denom.push(Denom.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a denom by index. */
  Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>
  /** Queries a list of denom items. */
  DenomAll(request: QueryAllDenomRequest): Promise<QueryAllDenomResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse> {
    const data = QueryGetDenomRequest.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.tokenfactory.tokenfactory.Query', 'Denom', data)
    return promise.then((data) => QueryGetDenomResponse.decode(new Reader(data)))
  }

  DenomAll(request: QueryAllDenomRequest): Promise<QueryAllDenomResponse> {
    const data = QueryAllDenomRequest.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.tokenfactory.tokenfactory.Query', 'DenomAll', data)
    return promise.then((data) => QueryAllDenomResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

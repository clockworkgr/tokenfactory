/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'clockworkgr.tokenfactory.tokenfactory'

export interface Denom {
  denom: string
  description: string
  ticker: string
  precision: number
  url: string
  maxSupply: number
  supply: number
  canChangeMaxSupply: boolean
  owner: string
}

const baseDenom: object = { denom: '', description: '', ticker: '', precision: 0, url: '', maxSupply: 0, supply: 0, canChangeMaxSupply: false, owner: '' }

export const Denom = {
  encode(message: Denom, writer: Writer = Writer.create()): Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom)
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description)
    }
    if (message.ticker !== '') {
      writer.uint32(26).string(message.ticker)
    }
    if (message.precision !== 0) {
      writer.uint32(32).int32(message.precision)
    }
    if (message.url !== '') {
      writer.uint32(42).string(message.url)
    }
    if (message.maxSupply !== 0) {
      writer.uint32(48).int32(message.maxSupply)
    }
    if (message.supply !== 0) {
      writer.uint32(56).int32(message.supply)
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(64).bool(message.canChangeMaxSupply)
    }
    if (message.owner !== '') {
      writer.uint32(74).string(message.owner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseDenom } as Denom
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        case 3:
          message.ticker = reader.string()
          break
        case 4:
          message.precision = reader.int32()
          break
        case 5:
          message.url = reader.string()
          break
        case 6:
          message.maxSupply = reader.int32()
          break
        case 7:
          message.supply = reader.int32()
          break
        case 8:
          message.canChangeMaxSupply = reader.bool()
          break
        case 9:
          message.owner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Denom {
    const message = { ...baseDenom } as Denom
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = String(object.ticker)
    } else {
      message.ticker = ''
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = Number(object.precision)
    } else {
      message.precision = 0
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url)
    } else {
      message.url = ''
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Number(object.maxSupply)
    } else {
      message.maxSupply = 0
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = Number(object.supply)
    } else {
      message.supply = 0
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply)
    } else {
      message.canChangeMaxSupply = false
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: Denom): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.description !== undefined && (obj.description = message.description)
    message.ticker !== undefined && (obj.ticker = message.ticker)
    message.precision !== undefined && (obj.precision = message.precision)
    message.url !== undefined && (obj.url = message.url)
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply)
    message.supply !== undefined && (obj.supply = message.supply)
    message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply)
    message.owner !== undefined && (obj.owner = message.owner)
    return obj
  },

  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = { ...baseDenom } as Denom
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker
    } else {
      message.ticker = ''
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision
    } else {
      message.precision = 0
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url
    } else {
      message.url = ''
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply
    } else {
      message.maxSupply = 0
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply
    } else {
      message.supply = 0
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply
    } else {
      message.canChangeMaxSupply = false
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  }
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

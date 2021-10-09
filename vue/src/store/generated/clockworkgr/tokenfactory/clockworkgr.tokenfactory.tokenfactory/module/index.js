// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintAndSendTokens } from "./types/tokenfactory/tx";
import { MsgUpdateOwner } from "./types/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
const types = [
    ["/clockworkgr.tokenfactory.tokenfactory.MsgMintAndSendTokens", MsgMintAndSendTokens],
    ["/clockworkgr.tokenfactory.tokenfactory.MsgUpdateOwner", MsgUpdateOwner],
    ["/clockworkgr.tokenfactory.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    ["/clockworkgr.tokenfactory.tokenfactory.MsgCreateDenom", MsgCreateDenom],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgMintAndSendTokens: (data) => ({ typeUrl: "/clockworkgr.tokenfactory.tokenfactory.MsgMintAndSendTokens", value: data }),
        msgUpdateOwner: (data) => ({ typeUrl: "/clockworkgr.tokenfactory.tokenfactory.MsgUpdateOwner", value: data }),
        msgUpdateDenom: (data) => ({ typeUrl: "/clockworkgr.tokenfactory.tokenfactory.MsgUpdateDenom", value: data }),
        msgCreateDenom: (data) => ({ typeUrl: "/clockworkgr.tokenfactory.tokenfactory.MsgCreateDenom", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

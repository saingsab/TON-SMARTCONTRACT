import { ContractProvider, SendMode } from "@ton/core";
import { send } from "process";
import { Cell, Contract, Address, beginCell, contractAddress } from "ton-core";
export class MainContract implements Contract {
    constructor(
        readonly address: Address,
        readonly init?: {code: Cell, data: Cell }
    ){}

    static createFromConfig(config: any, code: Cell, workchain = 0) {
        const data = beginCell().endCell();
        const init = { code, data };
        const address = contractAddress(workchain, init);
        
        return new MainContract(address, init);
    }

    async sendInternalMessage(
        provider: ContractProvider,
        sender: SendMode,
        value: bigint
    ) {
        await provider.internal(sender, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
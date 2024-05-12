import { Cell, Address } from "ton-core";
import { hex } from "../build/main.compiled.json";
import { Blockchain } from "@ton-community/sandbox";
import { MainContract } from "../wrappers/MainContract";

describe("main.fc contract tests", () => {
    it("our first test", async () => {

        const codeCell  = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

        const blockchain = await Blockchain.create();

        const myContract = blockchain.openContract(
            await MainContract.createFromConfig({}, codeCell)
        );

        const senderWallet = await blockchain.treasury("")
    })
})
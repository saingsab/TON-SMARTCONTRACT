import * as fs from "fs";
import process from "process";
import { Cell } from "ton-core";
import { compileFunc } from "@ton-community/func-js";

async function compileScript() {
    console.log(
        "======================================================================"
    );
    console.log(
        "Compile script is running, let's find some Func code to compile..."
    );

    const compileResult = await compileFunc({
        targets: ["./contracts/main.fc"],
        sources: (x) => fs.readFileSync(x).toString("utf-8"),
    
    });

    if (compileResult.status === "error") {
        console.log(" - OH NO! Compilation Errors! The compiler output was: ");
        console.log(`\n${compileResult.message}`);
        process.exit(1);
    }

    console.log(" - Compilation sucessful!");

    const hexArtifect = `build/main.compiled.json`;
    fs.writeFileSync(
        hexArtifect,
        JSON.stringify({
            hex: Cell.fromBoc(Buffer.from(compileResult.codeBoc, "base64"))[0]
            .toBoc()
            .toString("hex"),
        })
    );
    console.log(" - Compile code saved to" + hexArtifect);
}

compileScript()
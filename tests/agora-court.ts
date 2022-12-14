import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AgoraCourt } from "../target/types/agora_court";

describe("agora-court", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AgoraCourt as Program<AgoraCourt>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});

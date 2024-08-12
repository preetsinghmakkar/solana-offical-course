import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// This should be the name of the environment variable, not its value
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

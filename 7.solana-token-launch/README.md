# Create Solana Token

This guide walks you through creating SPL tokens on the Solana network. SPL tokens are the Solana equivalent of ERC-20 tokens on Ethereum and can be either fungible (like cryptocurrencies) or non-fungible (NFTs).

## Overview

### What are SPL Tokens?

SPL Tokens are assets created on the Solana blockchain. These tokens can represent anything from currency to unique digital assets like NFTs.

### Solana Token Program

The Token Program is a Solana smart contract that provides the necessary tools for creating and managing SPL tokens. This program includes instructions for token creation, transfer, and management on the Solana network.

For more details, check out the [Solana Official Documentation](https://solana.com/developers/courses/tokens-and-nfts/token-program).

## Installation

To get started with your project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/preetsinghmakkar/solana-official-course
   cd solana-token-launch
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. **Create a .env file:**
   Inside the root directory, create a .env file to securely store your secret key.

   ```bash
   SECRET_KEY="[your-secret-key]"
   ```

   Replace [your-secret-key] with your actual secret key.

## Steps to Create and Manage Your SPL Token

1.  **Create a Mint Account**
    This step sets up the mint account for your token.
    ```bash
    npx esrun create-token-mint.ts
    ```
2.  **Create a Token Account**
    Before running this script, make sure to update the tokenMintAccount in create-token-account.ts with your token mint address:

    ```bash
    const tokenMintAccount = new PublicKey("Your Token Mint Address");
    ```

    Then run the script:

    ```bash
    npx esrun create-token-account.ts
    ```

3.  **Create Token Metadata**
    To associate metadata with your token, update the tokenMintAccount in create-token-metadata.ts with your token mint address:

    ```bash
    const tokenMintAccount = new PublicKey("Your Token Mint Address");
    ```

    Then run the script:

    ```bash
    npx esrun create-token-metadata.ts
    ```

4.  **Mint Tokens**
    Finally, to mint tokens, update create-token-mint.ts with the correct tokenMintAccount and the recipient's associated token account:

    ```bash
    const tokenMintAccount = new PublicKey("Your Token Mint Address");
    const recipientAssociatedTokenAccount = new PublicKey("Recipient's Associated Token Account");
    ```

    Then run the script:

    ```bash
    npx esrun create-token-mint.ts
    ```

## Conclusion

By following these steps, you have successfully created an SPL token on the Solana network. You can now manage and transfer your tokens as needed.

If you encounter any issues or have questions, feel free to refer to the Solana Official Documentation.

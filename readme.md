# Anant2090-Decentralized-Application-DAO

## Overview

This repository contains the smart contract code for a decentralized application (DApp) implementing a Decentralized Autonomous Organization (DAO). The DAO allows users to contribute funds, create proposals, vote on proposals, and execute approved proposals.

## Smart Contract Details

### DAO Smart Contract

The DAO smart contract is written in Solidity and implements the following features:

- Investors: Users can become investors by contributing funds.
- Shares: Each investor is assigned a number of shares based on their contribution.
- Share Transfer: Investors can transfer shares to other addresses.
- Proposal Creation: The manager can create proposals for fund allocation.
- Voting: Investors can vote on proposals during a specified voting period.
- Proposal Execution: Approved proposals can be executed by the manager.

### Smart Contract Specifications

- Solidity Version: >=0.7.0 <0.9.0
- License: GPL-3.0

## How to Use

1. **Setup**: Deploy the DAO smart contract to the Ethereum blockchain.

2. **Contribute Funds**: Users can contribute funds to become investors.

# solidity Functions

   
## 1 Redeem Shares: Investors can redeem their shares.

function redeemShare(uint amount) public { ... }

Transfer Shares: Investors can transfer shares to other addresses.


## 2 function transferShare(uint amount, address to) public { ... }

Create Proposal: The manager can create proposals for fund allocation.


## 3 function createProposal(string calldata description, uint amount, address payable recipient) public { ... }

Vote on Proposal: Investors can vote on proposals during the voting period.


## 4 function voteProposal(uint proposalId) public { ... }

Execute Proposal: The manager can execute approved proposals.


## 5 function executeProposal(uint proposalId) public { ... }

View Proposal List: Retrieve a list of all proposals.


## 6 function ProposalList() public view returns (Proposal[] memory) { ... }

View Investor List: Retrieve a list of all investors.

## 7 function InvestorList() public view returns (address[] memory) { ... }

# Contributing
Contributions to this project are welcome. If you would like to contribute, please follow the contribution guidelines.

# License
This project is licensed under the GPL-3.0 License.

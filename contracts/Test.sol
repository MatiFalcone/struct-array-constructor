// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Test {
   
    struct Details {
        string tokenType;
        address tokenAddress;
        uint256 tokenId;
        uint256 amount;
    }

    Details[] public arrayDetails;

    constructor(Details[] memory _details) {
        for (uint256 index = 0; index < _details.length; index++) {
            Details memory detail = _details[index];
            arrayDetails.push(detail);
        }
    }

}

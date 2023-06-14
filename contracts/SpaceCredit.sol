// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SpaceCredit is ERC20 {
    constructor() ERC20("SpaceCredit", "SPC") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Greeting {
    string private greeting;

    constructor() {
        greeting = "Hello, World!";
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestContract {
    struct Person {
        string name;
        uint256 age;
    }

    string public text;
    uint256 public number;
    bool public flag;
    address public addr;
    Person public person;
    uint256[] public numbers;
    mapping(address => uint256) public balances;

    event TextUpdated(string newText);
    event NumberUpdated(uint256 newNumber);
    event FlagUpdated(bool newFlag);
    event AddressUpdated(address newAddress);
    event PersonUpdated(string name, uint256 age);
    event NumbersUpdated(uint256[] newNumbers);
    event BalanceUpdated(address indexed account, uint256 newBalance);

    // Function to update a string
    function updateText(string memory newText) public {
        text = newText;
        emit TextUpdated(newText);
    }

    // Function to update a uint256
    function updateNumber(uint256 newNumber) public {
        number = newNumber;
        emit NumberUpdated(newNumber);
    }

    // Function to update a boolean
    function updateFlag(bool newFlag) public {
        flag = newFlag;
        emit FlagUpdated(newFlag);
    }

    // Function to update an address
    function updateAddress(address newAddress) public {
        addr = newAddress;
        emit AddressUpdated(newAddress);
    }

    // Function to update a struct
    function updatePerson(string memory name, uint256 age) public {
        person = Person(name, age);
        emit PersonUpdated(name, age);
    }

    // Function to update an array of uint256
    function updateNumbers(uint256[] memory newNumbers) public {
        numbers = newNumbers;
        emit NumbersUpdated(newNumbers);
    }

    // Function to update a mapping
    function updateBalance(address account, uint256 newBalance) public {
        balances[account] = newBalance;
        emit BalanceUpdated(account, newBalance);
    }

    // Function to update a struct Person as input
    function updatePersonStruct(Person memory newPerson) public {
        person = newPerson;
        emit PersonUpdated(newPerson.name, newPerson.age);
    }

    // Function to read all state variables
    function readAll() public view returns (
        string memory,
        uint256,
        bool,
        address,
        Person memory,
        uint256[] memory,
        uint256
    ) {
        return (
            text,
            number,
            flag,
            addr,
            person,
            numbers,
            balances[msg.sender]
        );
    }
}
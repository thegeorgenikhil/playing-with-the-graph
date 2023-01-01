//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Bank {
    //we mapped the address of the caller balance in the contract
    mapping(address => uint256) public balances;

    // events: Withdrawal
    event Withdrawal(address indexed accountAddress, uint256 amount);

    // events: Deposit
    event Deposit(address indexed accountAddress, uint256 amount);

    // whatever the user deposit is added to msg.value of the sender address we mapped above
    function deposit() public payable {
        balances[msg.sender] += msg.value;
        //we emit the event to confirm the deposit
        emit Deposit(msg.sender, msg.value);
    }

    //we create the function to withdraw
    function withdraw(uint256 _amount) public {
        //we create a require arg to make sure the balance of the sender is >= _amount if not ERR
        require(balances[msg.sender] >= _amount, "Not enough ether");
        //if the amount is available we subtract it from the sender
        balances[msg.sender] -= _amount;
        //True bool is called to confirm the amount
        (bool sent, ) = msg.sender.call{value: _amount}("Sent");
        //we emit the event to confirm the withdrawal
        emit Withdrawal(msg.sender, _amount);

        require(sent, "failed to send ETH");
    }

    function getBalance(address _account) public view returns (uint256) {
        return balances[_account];
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

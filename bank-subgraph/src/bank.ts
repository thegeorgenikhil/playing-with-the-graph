import {
  Deposit as DepositEvent,
  Withdrawal as WithdrawalEvent
} from "../generated/Bank/Bank"
import { Transaction, User } from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let user = User.load(event.params.accountAddress.toHexString())
  if (!user) {
    user = new User(event.params.accountAddress.toHexString())
    user.address = event.params.accountAddress
    user.balance = event.params.amount
  } else {
    user.balance = user.balance.plus(event.params.amount)  
  }
  user.save()

  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (!transaction) {
    transaction = new Transaction(event.transaction.hash.toHexString())
    transaction.user = user.id;
    transaction.amount = event.params.amount
    transaction.transactionType = "deposit"
    transaction.transactionHash = event.transaction.hash
    transaction.blockNumber = event.block.number
    transaction.blockTimestamp = event.block.timestamp
  }
  transaction.save()
}

export function handleWithdrawal(event: WithdrawalEvent): void {
  let user = User.load(event.params.accountAddress.toHexString())!
  user.balance = user.balance.minus(event.params.amount)
  user.save()

  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (!transaction) {
    transaction = new Transaction(event.transaction.hash.toHexString())
    transaction.user = user.id;
    transaction.amount = event.params.amount
    transaction.transactionType = "withdrawal"
    transaction.transactionHash = event.transaction.hash
    transaction.blockNumber = event.block.number
    transaction.blockTimestamp = event.block.timestamp
  }
  transaction.save()
}

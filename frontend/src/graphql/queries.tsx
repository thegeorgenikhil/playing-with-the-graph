import { gql } from "../__generated__/gql";


export const GET_ALL_TRANSACTIONS = gql(`
    query GetAllTransactions {
        transactions {
            id
            user {
                id
                address
            }
            amount
            blockNumber
            transactionType
            transactionHash
        }
    }
`)

export const GET_ALL_USERS = gql(`
    query GetAllUsers {
        users {
            id
            address
            transactions {
              id
            }
            balance
        }
    }
`)



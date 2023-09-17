// - CAP theorem
// Consitency, availablity and partition tolerance
// So distributed systems can be consistent or avialable they can't be both 
// in real world scenarior there can be percentage of C and  A
// example there are two atms  both atms have there own data that person X has 100 rs
// whenver x withdraws money say amount 50 from ATM1, ATM1 tells  ATM2 to update is data that person X now has 50 
// and ATM1 gives money to X. now  in some case ATM1 can't talk to ATM2 should you allow person X to withdraw money
// from any ATM, if yes so we are chosing availablity over consistenct as x can withdraw 10 from atm1 and now 
// bal is 40 and then 20 from atm2 where now balance is 30 but the true bal should be 20
// or you can't throw error that you can process the withdraw to make data consistent
// in social media it will be better to allow availablity over consistency

// - ACID
// transaction is series of operation performed on a DB
// Atomicity consistency isolation and durablity
// A - Either whole transaction should happen or none of it, it can't be possible to do only 99% it's 0 or 1 even in sys fail
// C - Database should be consistent before the transaction and after the transaction happened
// I - No transactionn should interfere with other transaction, each transaction should happen in isolation
// D - Once completed the changes should be permanent and on disk/database. It can not be undone after completion.

// - Difference between Authentication and Authorization
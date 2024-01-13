/**
 * Transactional outbox pattern
 */
// To make sure message doesn't get missed when sending from producer to broker.
// we can make a table outbox, that saves message data with unique id.
// can have a cron service to call application to check if there are any message pending to be sent.
// which can sent them and on acknowledge it can mark the message as send.
// the row in the outbox table can be created along with the transaction.
// this make sure that message will be eventually sent.
// broker should be idempotent.


/**
 * Notification service with retry a
 */
// 
--- CAP theorem
Consitency, availablity and partition tolerance
So distributed systems can be consistent or avialable they can't be both 
in real world scenarior there can be percentage of C and  A
example there are two atms  both atms have there own data that person X has 100 rs
whenver x withdraws money say amount 50 from ATM1, ATM1 tells  ATM2 to update is data that person X now has 50 
and ATM1 gives money to X. now  in some case ATM1 can't talk to ATM2 should you allow person X to withdraw money
from any ATM, if yes so we are chosing availablity over consistenct as x can withdraw 10 from atm1 and now 
bal is 40 and then 20 from atm2 where now balance is 30 but the true bal should be 20
or you can't throw error that you can process the withdraw to make data consistent
in social media it will be better to allow availablity over consistency
Under default configurations, databases such as Cassandra and MongoDB are partition tolerant because they do not shutdown nodes to cope with partitions, whereas RDBMS such as MySQL do.

Availability has very little to do with master/slave setup, e.g. Cassandra is masterless and very available because it doesn't really matter which node dies. As for availability in a master/slave setup, there is no reason to stop responding to all queries when master is dead, but you may need to suspend write operations while electing a new one.

![](Untitledf2.png)
AP - The system prioritizes availability over consistency and can respond with possibly stale data. Cassandra, CouchDB, Riak, Voldemort.
CP - The system prioritizes consistency over availability and responds with the latest updated data. Apache HBase, MongoDB, Redis.
CA - system respond with latest updated data, promise of higher availablity. RDBMS PostgreSQL, MySQL

--- ACID
transaction is series of operation performed on a DB
Atomicity consistency isolation and durablity
A - Either whole transaction should happen or none of it, it can't be possible to do only 99% it's 0 or 1 even in sys fail
C - Database should be consistent before the transaction and after the transaction happened
I - No transactionn should interfere with other transaction, each transaction should happen in isolation
D - Once completed the changes should be permanent and on disk/database. It can not be undone after completion.

--- Difference between Authentication and Authorization
In simple terms, authentication is the process of verifying who a user is,
while authorization is the process of verifying what they have access to.

Comparing these processes to a real-world example, 
when you go through security in an airport, you show your ID to authenticate your identity.
Then, when you arrive at the gate, you present your boarding pass to the flight attendant,
so they can authorize you to board your flight and allow access to the plane.

In JWT if the token signature passes that it is a valid token then authetication is complete
now the payload may have role key which determines what all action that user is authorize to do

Authentication: Determines whether users are who they claim to be
Authorization: Determines what users can and cannot access

Authentication: Challenges the user to validate credentials (for example, through passwords, answers to security questions, or facial recognition)	
Authorization: Verifies whether access is allowed through policies and rules

Authentication: Usually done before authorization	
Authorization: Usually done after successful authentication

Authentication: Generally, transmits info through an ID Token	
Authorization: Generally, transmits info through an Access Token

Authentication: Generally governed by the OpenID Connect (OIDC) protocol	
Authorization: Generally governed by the OAuth 2.0 framework

Authentication: Example: Employees in a company are required to authenticate through the network before accessing their company email	
Authorization: Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access

--- HTTP status code like 401(Unauthorized) and 403(Forbidden)
401 is for authentication and 403 for authorization
If user has no authentication or bad authentication then sever responds with 401 which means server don't understand
who you are and you identity and it will also tell you in WWW-Authenticate header how to re authenticate yourself
which is temporary and can bee fixed after authentication
however 403 means server understand your request and who you are but you don't have required permission to access 
the resource it much more tied up in fuctionality/rules of the server


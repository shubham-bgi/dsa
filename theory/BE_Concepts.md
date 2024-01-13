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


--- Queues
Different solutions to queue messages Bullmq, rabbitmq and kafka.


--- Load balancer
Distributing work load across multiple servers, help ensures High availablity, responsiveness, scalablity.

How fault tolerance and HA is achieved?

Categories - 
Static - Doesnt take into account server real time condition or performance metric
Dynamic - changes as per server condition

Techniques
- Round robin - static - distribute evenly
- weighted round robin - static - can configure weight for servers, higher weight more requests
- sticky round robin - static - same user req goes to same server, user assigned randomly
- IP/URL hash - static - similar to round robin, hashes ip to decide where to route request
- Consistent hashing - 
- Least connection - dynamic - request get routed to the least amount of active connection to the server, requires actively tracking ongoing connection with each BE server
- Least time - Dynamic - request get routed to the lowest current latency/fastest response time. latency is constanly measured that bring a overhead of itself.

Layer 4 - Can look upto tranport layer, i.e TCP and changes IP address and forwards data, less smart
Layers 7 - Can look into application layer, i.e HTTP and can then decrypt data and based on that decide where to rote request, smart but expensive(look at data)

Hardware LB - additional hardware req to scale, more secrure, high throughput, expertise requried
Software LB - scale based on need, less secure, low throughput, need additonal layer of security

Fault Tolerance: Ensure fault tolerance and redundancy in your load balancing setup. If a instance fails or becomes overloaded, the load balancer should be able to redirect traffic to other healthy instance seamlessly.

High Availablity - A backup load balancer is a smart strategy to ensure high availability and minimize downtime in case the primary load balancer fails. Implement a mechanism for the backup load balancer to monitor the health of the primary load balancer. This could involve regular heartbeat checks or a health monitoring system that detects when the primary load balancer is no longer functioning properly. Set up an automatic failover mechanism.



--- Load balancer farm or cluster 
DNS Load Balancing: You can distribute traffic among multiple load balancers by configuring DNS to return multiple IP addresses in response to DNS queries. Each IP corresponds to a different load balancer. When a client requests access to the application, DNS resolves to one of the load balancers, distributing the initial load.

Global Load Balancing: For applications serving users across different geographic locations, a global load balancer might direct users to the closest or least loaded data center or load balancer. This way, regional load balancers manage the traffic for their respective areas.

Anycast Routing: This technique allows the same IP address to be assigned to multiple load balancers in different locations. Requests are routed to the nearest load balancer with that IP address, distributing the load efficiently.

Frontend Load Balancing: A front-end load balancer distributes incoming traffic among multiple load balancers based on various algorithms (round-robin, least connections, etc.). These load balancers then manage traffic within their respective server pools.



--- Handling time zones in a database
Use UTC: Storing timestamps in Coordinated Universal Time (UTC) is a common practice. This standardizes the time across different time zones. When displaying data to users, convert UTC timestamps to the relevant local time zone.

Store Time Zone Information: Some databases have specific data types to store time zone information alongside timestamps. For instance, PostgreSQL has the TIMESTAMP WITH TIME ZONE data type, which stores both timestamp and time zone information.


--- Cache eviction policy
LRU - Least recently used. data which was not used recently will be removed.
LFU - Least frequently used. hot data is kept, so whichever is not being called that frequently but can be recently used will be removed.
MRU - Most recently used.data which is used recently will be removed. ex tinder.
FIFO - first in first out. whatever get cached first will be removed first.



--- Something break during first hour of flash sale in amazon rectifying steps.
* - Robust alerting and monitoring should be in place to check resource usuage.
Shouldm't wait for things to go wrong to fix them, failover mechanism should be in place.
* load testing should be done in advance to check the bottle necks of the system. well in advance.
* Investigate if someone pushed any hotfix or if there are any recent code changes that triggered outtage.
* Check the system dashboard check to look into bottlenecks. server capacity, database performance, network issue.
* if the issue is sudden spike best to scale up the servers to solve the issue for now.
* Make sure to scale up in advance if some campaign or some load is expected. 



--- How to rectify thundering herd 
* Caching - caching hot keys or data will help mitigate thundering herd and help serve everyone same request faster
* Exponential backoff with jitter
In systems that rely on a backoff mechanism (e.g. exponential backoff), the clients will retry failed calls by waiting a specific amount of time between consecutive retries. In order to avoid the thundering herd problem, jitter can be purposefully introduced in order to break the synchronization across the clients, thereby avoiding collisions. In this approach, randomness is added to the wait intervals between retries, so that clients are no longer synchronized.
* Queues - If task can be done async best to add queues to dampen the load.
* load balance - using inteligent load balancer can help distribute the load on multiple instance.
* Optimization - optimze the service and revisit the architecture.
* Mutexes and Locks - can be used for threads, to lock and release a shared resource.


--- Time wait state TCP connection
So whichever party chooses to close the connection end up in time wait state. Best to done on client side instead of the server side. So that on linux OS it doesn't consume file descryptor for the waiting period.
If client doesn't close the connection upon request close it forcefully after some time.
https://stackoverflow.com/questions/5256599/what-are-file-descriptors-explained-in-simple-terms
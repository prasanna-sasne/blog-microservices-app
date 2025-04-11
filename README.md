# Blog Microservices App
A simple microservices-based blog application built with Node.js, React, and a custom event bus to simulate event-driven architecture. This project demonstrates the core ideas of service isolation, event handling, and query separation using in-memory storage and REST APIs.

### Custom Event Bus (localhost:4005)
The Event Bus is a lightweight custom service that accepts events and broadcasts them to all registered services. It acts as the backbone of communication between microservices.

### Current Behavior
1. Listens on POST /events for incoming events.
2. Forwards each event to ->
   - posts:4000
   - comments:4001
   - query:4002 (Any future services can subscribe easily.)


### 🚧 Work in Progress / Upcoming Enhancements

- 🔁 Add event replay mechanism in the Event Bus for better fault tolerance.
- 🛠️ Implement CommentModerated and CommentUpdated events to support moderation workflows.
- 🐳 Add Docker Compose setup to orchestrate all services seamlessly.
- 🗃️ Replace in-memory storage with MongoDB, PostgreSQL, or Redis for persistence.
- 🔐 Introduce user authentication and comment moderation features.
- ⚙️ Integrate Kafka or RabbitMQ for a production-grade event system with durability and scalability.
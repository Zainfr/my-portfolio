# Leadbrix Technical Documentation

## 1. Overview
Leadbrix is a multi-tenant SaaS CRM platform designed to connect backend systems with CRM functionalities. It integrates deeply with messaging and social media platforms (such as Meta and WhatsApp), providing tracking, automation, and real-time capabilities for seamless lead management and customer communication.

## 2. Technology Stack
- **Frontend (Web Application):** React 17, Redux, React Router, Bootstrap & Reactstrap, ApexCharts for data visualization, and Firebase for rich client-side features.
- **Admin Portal (leadbrix-admin):** Next.js 15, React 19, Tailwind CSS 4, and direct integration with MongoDB and Redis.
- **Backend (API Server):** Node.js 22+, Express.js, Socket.io for real-time web-sockets, and various SDKs including Facebook Node.js Business SDK, Firebase Admin, and Razorpay.
- **Message Brokers:** RabbitMQ (via `amqplib`) and Kafka (via `kafkajs`).
- **Databases & Cache:** MongoDB 6.0 and Redis 7.2.
- **Infrastructure & Deployment:** Docker, Docker Compose, Nginx.
- **Background Services:** A custom Heartbeat service (`mdhusainthekiya/heartbeat`) for robust Cron and RabbitMQ queue management.

## 3. C4 Architecture Diagrams

The architecture is described using the [C4 model](https://c4model.com/) to provide abstractions at various levels of detail.

### 3.1. System Context Diagram
This diagram shows the high-level system context, identifying the users of Leadbrix and the external systems it depends on.

```mermaid
C4Context
  title System Context Diagram for Leadbrix
  
  Person(user, "User / Tenant", "A customer using the Leadbrix SaaS CRM")
  Person(admin, "Platform Admin", "Administrator managing the Leadbrix platform and infrastructure")

  System(leadbrix, "Leadbrix Platform", "Multi-tenant SaaS CRM for automation, tracking, and messaging")

  System_Ext(meta, "Meta / Facebook API", "Provides Facebook Business SDK integration for leads and ads")
  System_Ext(whatsapp, "WhatsApp API", "Provides WhatsApp messaging capabilities")
  System_Ext(razorpay, "Razorpay", "Payment gateway for subscription billing")
  System_Ext(firebase, "Firebase", "Provides push notifications and real-time synchronization")

  Rel(user, leadbrix, "Uses to manage CRM and marketing campaigns", "HTTPS")
  Rel(admin, leadbrix, "Manages platform and user accounts", "HTTPS")

  Rel(leadbrix, meta, "Syncs leads, catalogs, and ads", "HTTPS / API")
  Rel(leadbrix, whatsapp, "Sends and receives automated messages", "HTTPS / API")
  Rel(leadbrix, razorpay, "Processes payments", "HTTPS / API")
  Rel(leadbrix, firebase, "Sends push notifications", "HTTPS / API")
```

### 3.2. Container Diagram
This diagram zooms into the system to show the high-level containers that make up Leadbrix.

```mermaid
C4Container
  title Container Diagram for Leadbrix

  Person(user, "User / Tenant", "Customer")
  Person(admin, "Platform Admin", "Administrator")

  System_Boundary(c1, "Leadbrix Platform") {
    Container(webApp, "Web Application", "React, Redux", "Provides CRM dashboard for users")
    Container(adminApp, "Admin Portal", "Next.js 15, Tailwind", "Provides management dashboard for admins")
    
    Container(apiServer, "API Server", "Node.js, Express", "Handles business logic, authentication, multi-tenant data isolation")
    Container(heartbeat, "Heartbeat Service", "Node.js (mdhusainthekiya/heartbeat)", "Manages cron jobs, schedules, and heartbeats via RabbitMQ")
    
    ContainerDb(mongodb, "Database", "MongoDB 6.0", "Stores tenant data, leads, settings, and configurations")
    ContainerDb(redis, "Cache & Session", "Redis 7.2", "Caches temporal data and manages session state")
    ContainerQueue(rabbitmq, "Message Broker", "RabbitMQ 3.12", "Handles asynchronous events, Webhooks, and queues")
  }

  System_Ext(external, "External Services", "Meta, WhatsApp, Razorpay, Firebase")

  Rel(user, webApp, "Visits", "HTTPS")
  Rel(admin, adminApp, "Visits", "HTTPS")
  
  Rel(webApp, apiServer, "Makes API calls", "JSON / HTTPS")
  Rel(webApp, apiServer, "Real-time socket updates", "WebSockets / WSS")
  Rel(adminApp, apiServer, "Makes API calls", "JSON / HTTPS")
  Rel(adminApp, mongodb, "Reads / Writes platform data", "TCP")
  Rel(adminApp, redis, "Accesses cache", "TCP")

  Rel(apiServer, mongodb, "Reads / Writes CRM data", "TCP")
  Rel(apiServer, redis, "Reads / Writes Cache", "TCP")
  Rel(apiServer, rabbitmq, "Publishes / Subscribes events", "AMQP")
  
  Rel(heartbeat, rabbitmq, "Publishes cron events", "AMQP")
  Rel(heartbeat, redis, "Reads configurations", "TCP")

  Rel(apiServer, external, "Integrates with", "HTTPS / API")
```

### 3.3. Component Diagram (API Server)
This diagram zooms into the API Server container to show the structural components and application logic.

```mermaid
C4Component
  title Component Diagram for API Server

  Container(webApp, "Web App", "React", "Frontend Client")
  ContainerDb(mongodb, "MongoDB", "Database", "Persistent Store")
  ContainerDb(redis, "Redis", "Cache", "In-memory Store")
  ContainerQueue(rabbitmq, "RabbitMQ", "Message Broker", "Event Bus")

  Container_Boundary(api, "API Server Container") {
    Component(router, "Express Router & Controllers", "Express.js", "Routes incoming REST requests and handles HTTP req/res")
    Component(socket, "Socket Server Manager", "Socket.io", "Handles live WebSocket connections and broadcast events")
    
    Component(authController, "Authentication Service", "Node.js", "Manages JWT authentication and multi-tenant isolation")
    Component(metaManager, "Facebook Manager", "Node.js", "Handles Facebook API interactions, Webhooks, and lead syncing")
    Component(waManager, "WhatsApp Manager", "Node.js", "Handles incoming/outgoing WhatsApp messaging logic")
    Component(automation, "Automation Runner", "Node.js", "Executes CRM automation workflows, rule evaluations, and drips")
    Component(eventHandler, "Event Handler", "Node.js", "Processes AMQP events off RabbitMQ queues")
    
    Rel(router, authController, "Routes to")
    Rel(router, metaManager, "Routes to")
    Rel(router, waManager, "Routes to")
    
    Rel(eventHandler, automation, "Triggers workflow runs")
  }

  Rel(webApp, router, "API Requests", "JSON / HTTPS")
  Rel(webApp, socket, "Real-time updates", "WSS")
  
  Rel(authController, mongodb, "Validates user/tenant", "TCP")
  Rel(authController, redis, "Checks active sessions", "TCP")
  
  Rel(metaManager, mongodb, "Saves leads to CRM", "TCP")
  Rel(waManager, mongodb, "Saves chat logs", "TCP")
  
  Rel(eventHandler, rabbitmq, "Consumes messages", "AMQP")
  Rel(automation, rabbitmq, "Publishes outbound events", "AMQP")
```

## 4. Key Application Logic
- **Automation Runner (`apiServer/applicationLogic/automationRunner.js`):** The core engine that processes marketing sequences, auto-replies, and drip campaigns for tenants.
- **Event Handler (`apiServer/applicationLogic/eventHandler.js`):** Coordinates asynchronous webhooks received from Facebook/WhatsApp and translates them into system actions.
- **Socket & Callback Managers:** Ensures robust bidirectional communication with the UI to provide a real-time experience (e.g., live chat interfaces and instant lead notifications).

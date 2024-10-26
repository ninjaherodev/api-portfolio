# Users and Portfolios Management API

This API allows you to manage users, portfolios, and resumes, providing endpoints for the administration of personal and professional resources. It is built with Node.js using Express and follows a clean architecture to facilitate scalability and maintenance.

# Clean Architecture
The project is organized following a clean architecture structure.
```
src/
├── application/
│   └── use-cases/
│       └── CreateUserUseCase.ts
├── domain/
│   └── entities/
│       └── User.ts
├── infrastructure/
│   ├── database/
│   │   └── index.ts
│   └── repositories/
│       └── UserRepository.ts
├── interfaces/
│   └── controllers/
│       └── UserController.ts
└── index.ts
```
# Install Dependencies 

```bash
npm i express typeorm reflect-metadata class-transformer class-validator mssql zod bcrypt
npm i typescript ts-node-dev @types/node @types/express @types/bcrypt -D
```
# Introduction to Clean Architecture
Clean Architecture, introduced by Robert C. Martin (Uncle Bob), emphasizes the separation of concerns within an application. It promotes the idea that the business logic should be independent of any frameworks, databases, or external systems. This makes the application more modular, easier to test, and adaptable to changes

# Key Principles of Clean Architecture

* Independence: The core business logic should not depend on external libraries, UI, databases, or frameworks.

* Testability: The application should be easy to test without relying on external systems.

* Flexibility: It should be easy to change or replace parts of the application without affecting others.

# Node.js
Node.js is a powerful JavaScript runtime that allows you to build scalable network applications. It's non-blocking and event-driven, making it ideal for building APIs that handle a large number of requests.

# Express
Express is a minimalistic web framework for Node.js. It provides a robust set of features for building web and mobile applications and APIs. Its simplicity makes it easy to start with, and it's highly extensible.

# TypeScript
TypeScript is a superset of JavaScript that adds static types. Using TypeScript in your Node.js application helps catch errors early in the development process, improves code readability, and enhances the overall developer experience.

# Structuring the Project with Clean Architecture

1. Domain Layer: Contains the business logic, entities, and interfaces. This layer is independent of any other layers.

2. Use Cases Layer: Contains the application's use cases or business rules.

3. Infrastructure Layer: Contains implementations of the interfaces defined in the domain layer, such as database connections.

4. Interface Layer: Contains controllers, routes, and any other web framework-related code.
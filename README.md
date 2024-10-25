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
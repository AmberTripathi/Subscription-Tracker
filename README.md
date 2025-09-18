# Subscription Tracker

![Java](https://img.shields.io/badge/Java-17-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.5-brightgreen.svg)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

A full-stack application designed to help users track their recurring subscriptions. The project consists of a Java Spring Boot backend handling user authentication and data management, and a React frontend for the user interface.

## 🚀 Features

* **User Authentication**: Secure user registration and login functionality using JWT (JSON Web Tokens).
* **CRUD Operations**: Full Create, Read, Update, and Delete capabilities for managing subscriptions.
* **Personalized Experience**: Users can only view and manage the subscriptions linked to their account.
* **RESTful API**: A well-defined API for seamless communication between the backend and any client application.

---

## 🛠️ Tech Stack

| Component  | Technologies Used                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------------- |
| **Backend** | Java 17, Spring Boot 3.3.5, Spring Security, Spring Data JPA, Maven, PostgreSQL, Lombok, JJWT (JSON Web Token) |
| **Frontend** | React, Vite, Tailwind CSS, Axios, React Router                                                                  |
| **Database** | PostgreSQL                                                                                                    |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
* **Java Development Kit (JDK) 17** or later
* **Apache Maven**
* **Node.js** (v18 or later)
* **npm** (comes with Node.js)
* **PostgreSQL** Database

---

## ⚙️ Setup and Installation

This project is divided into two main parts: the **Backend Server** and the **Frontend Application**.

### 1. Backend Setup (`subscription-tracker-sb`)

The backend server is responsible for all API logic and database interactions.

1.  **Navigate to the backend directory:**
    ```bash
    cd subscription-tracker-sb
    ```

2.  **Configure Application Properties:**
    Open the `src/main/resources/application.properties` file. Update the `spring.datasource.*` properties with your PostgreSQL database credentials. The JWT secret and expiration time can also be modified here.

    ```properties
    # Database Configuration
    spring.datasource.url=jdbc:postgresql://<your-db-host>:<port>/<your-db-name>
    spring.datasource.username=<your-db-username>
    spring.datasource.password=<your-db-password>

    # JPA Configuration
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

    # JWT Configuration
    app.jwtSecret=ThisIsAveryLongAndSecureSecretKeyForJWTAuthenticationAndItIsDefinitelyMoreThan256Bits
    app.jwtExpirationInMs=86400000
    ```

3.  **Install dependencies and run the server:**
    Use the Maven wrapper to build the project and start the server.
    ```bash
    # In the subscription-tracker-sb/ directory
    ./mvnw spring-boot:run
    ```
    The server will start on `http://localhost:8080`.

### 2. Frontend Setup (`subscription-tracker-react`)

The frontend is the React application that users will interact with.

1.  **Navigate to the frontend directory:**
    From the project root, open a **new terminal** and go to the `subscription-tracker-react/SubscriptionTrackerFrontend` directory.
    ```bash
    cd subscription-tracker-react/SubscriptionTrackerFrontend
    ```

2.  **Install dependencies and start the application:**
    ```bash
    # In the SubscriptionTrackerFrontend/ directory
    npm install
    npm run dev
    ```
    The React development server will start on `http://localhost:5173` (or another port if 5173 is in use).

---

## 🚀 Usage

1.  Ensure both your backend and frontend servers are running.
2.  Open your browser and navigate to the frontend application's URL (e.g., `http://localhost:5173`).
3.  Use the UI to register a new user account.
4.  Log in with your new credentials to receive a JWT for session management.
5.  Once logged in, you can add, view, update, and delete your personal subscriptions.

---

## 📜 API Endpoints

A brief overview of the available API routes:

| Method | Endpoint                  | Protection | Description                                |
| :----- | :------------------------ | :--------- | :----------------------------------------- |
| `POST` | `/api/auth/register`      | Public     | Registers a new user.                      |
| `POST` | `/api/auth/login`         | Public     | Authenticates a user and returns a JWT.    |
| `GET`  | `/api/subscriptions`      | User       | Retrieves all subscriptions for the logged-in user. |
| `POST` | `/api/subscriptions`      | User       | Creates a new subscription for the user.   |
| `PUT`  | `/api/subscriptions/{id}` | User       | Updates an existing subscription.          |
| `DELETE`| `/api/subscriptions/{id}` | User       | Deletes a subscription.                    |

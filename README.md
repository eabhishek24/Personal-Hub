# 🚀 Personal Hub

## 📌 Overview

This is a **Node.js and Express.js** application that uses **MySQL** to manage user data. It allows users to be created, displayed, edited, and updated through a web interface built with **EJS** templating.

## ✨ Features

- 🏠 **Home Page:** Displays the total count of users in the database.
- 👥 **View Users:** Lists all users from the database.
- ✏️ **Edit User:** Allows updating a user's username (requires correct password verification).
- 💾 **Database Connection:** Uses MySQL to store and retrieve user data.
- 🔀 **Random User Generator:** Utilizes `@faker-js/faker` to generate fake user data.
- ⚡ **Express Middleware:** Uses `method-override` for handling HTTP verbs like PATCH.
- 📂 **CSV Export:** A CSV file (`users.csv`) containing user details (ID, email, and password) is provided for easy access to the database records.

## 🛠️ Technologies Used

- 🟢 **Node.js**
- ⚡ **Express.js**
- 🗄️ **MySQL2**
- 🎨 **EJS** (Embedded JavaScript for templating)
- 🃏 **Faker.js** (for generating fake user data)
- 🔑 **UUID** (for unique user IDs)

## 🚀 Installation & Setup

1. 📥 Clone the repository:
   ```sh
   https://github.com/eabhishek24/Personal-Hub.git
   cd Personal-Hub
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   Npm init
   npm i @faker-js/faker

   ```
3. 🗄️ Set up the MySQL database:
   - Create a MySQL database named `delta_app`.
   - Ensure you have a `user` table with columns: `id`, `username`, `email`, `password`.
   - Update the `connection` details in `index.js` with your MySQL credentials.
4. ▶️ Start the server:
   ```sh
   node index.js
   ```
5. 🌐 Open your browser and go to:
   ```
   http://localhost:5050
   ```
6. 📂 **Access the CSV File:**
   - The user data is also available in a CSV file (`users.csv`).
   - This file contains **User IDs, Emails, and Passwords**.
   - You can find and download it from the project directory.


## 📊 Use Case Diagram

Below is the **Use Case Diagram** representing how users interact with the system:

![sql data base](https://github.com/user-attachments/assets/699e62df-bcda-4139-8c6f-c54e8fd0a6eb)


This diagram shows that **Users** can access the home page, view the user list, and edit their own profiles. **Admins** have extended permissions to manage users and edit any profile.


## 📌 Routes

| 🔗 Method | 🌍 Route         | 📋 Description                   |
| --------- | ---------------- | -------------------------------- |
|  GET      | `/`              | Home page with user count        |
|  GET      | `/users`         | Show all users                   |
|  GET      | `/user/:id/edit` | Edit user details                |
|  PATCH    | `/user/:id`      | Update username (password check) |

## ⚠️ Notes

- ✅ Users have direct access to the **MySQL database** for retrieving and updating their own data.
- 🔍 If running into connection issues, double-check the **database credentials**.
- 📂 **CSV file available:** The database records are also stored in `users.csv` for external access.

## 📜 License

This project is open-source and available under the MIT License. 🎉




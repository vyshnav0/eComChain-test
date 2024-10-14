
# aMedic- Sample Medical Store E-commerce Website

## 🏥 Project Overview
This project showcases a sample medical store e-commerce website using a MEAN stack. It allows users to browse products, manage their profiles, and view order history, featuring essential functionalities of a typical online store.

---

## 🛠️ Tech Stack
- **Frontend:** Angular (version 12+)
- **Backend:** Node.js with Express
- **Database:** MongoDB (NoSQL)

---

## 📋 Features
- **User Authentication:** Login functionality (No registration).
- **Profile Management:** Users can view and update their profile (except email and password).
- **Product Listing:** Browse through available Medicne with company names and check details.
- **Add to Cart:** Mock functionality that depletes product stock.
- **Order History:** Displays previous orders of a product by an User.

---

## 🚀 Setup Instructions

### 1. Database Setup
- Set up a MongoDB database with the following collections:
  - **User**
  - **Products**
  - **OrderHistory**

#### Sample Data:

```json
// User Collection
[
  {
    "_id": "6705805b10383e99a0ca601e",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "hashed password",
    "age": 69,
    "creditCardNumber": "1234-5678-9012-3456"
  },
  {
    "_id": "6705806b10383e99a0ca6f86",
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "password": "hashed password",
    "age": 34,
    "creditCardNumber": ""
  }
]

// Products Collection
{
  "_id": "670585828f5aa89913c4e49b",
  "name": "Aspirin",
  "price": 5.99,
  "stock": 126,
  "companyName": "HealthCorp"
}

// OrderHistory Collection
{
  "_id": "67058bfb8f5aa89913c4e4ab",
  "userId": "6705805b10383e99a0ca601e",
  "productId": "670585828f5aa89913c4e49b",
  "quantity": 2,
  "orderDate": "2024-10-01T12:00:00.000Z",
  "stockAtOrder": 148
}
```

- **Note:** Jane Smith does not have a credit card number as per the project requirement.
- **Note:** userId and productId of OrderHistory collection is refernce to the unique id of User and Product db.

### 2. Key Database Functionalities
- **Email Uniqueness:** An index is added to ensure email uniqueness during the database setup.
- **Profile Updates:** Users can update details such as name, age, and credit card number. Email and password updates are restricted (would require email verification for security and users are predefined as of).
- **Credit Card Prompt:** If a user’s credit card number is missing, the application will prompt for it during product purchases.
- **Order History:** Displays the complete order history for the logged-in user, including the stock level at the time of each order.

---

## 🛒 Shopping Flow

1. **Login Page:** Users authenticate using their registered email and password.
2. **Home Page:** Displays all available drugs, along with company name categorized into "Consumable Medications" and "Ointments/Lotions." Please note, this classification is arbitrary and done for demonstration purposes only.
3. **Medicine Details Page:** Shows detailed information about the selected product, including the company, stock, and price.
4. **Add to Cart:** Reduces the stock of the selected item and updates the **OrderHistory**.
5. **Order History Page:** Displays the user’s order history with details like the stock level at the time of the order, price and quantity bought.
6. **Profile Page:** Displays user information and allows updates (excluding email and password).

---

## 🔒 Security Measures
- **Password Hashing:** All passwords are hashed using bcrypt before storing them in the database.
- **JWT (JSON Web Token):** The application uses JSON Web Tokens (JWT) for user authentication. The token are expired after 1hr.
- **Angular AuthGuard:** All routes are protected by AuthGuard. Only users with a valid JWT can access these routes.

---


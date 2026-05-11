# Product Catalog 🛍️

A modern full-stack ecommerce product catalog application built using **Spring Boot** and **React.js**.  
The application allows users to browse products, search items, filter by categories, and sort products by price through a clean and responsive UI.

---

# 🚀 Features

- 🔍 Search products instantly
- 🗂️ Filter products by category
- 💲 Sort products by price
- 🎨 Modern responsive UI
- ⚡ Fast frontend using React + Vite
- 🌐 REST API integration
- 🖼️ Product image support
- 📱 Mobile-friendly design

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Bootstrap
- Bootstrap Icons
- CSS3

## Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL

---

# 📂 Project Structure

```bash
Product-Catalog/
│
├── backend/                 # Spring Boot Backend
│
└── product-catalog-react/   # React Frontend
```

---

# ⚙️ Backend Setup

## 1. Navigate to backend folder

```bash
cd backend
```

## 2. Configure MySQL database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/product_catalog
spring.datasource.username=root
spring.datasource.password=yourpassword
```

## 3. Run Spring Boot application

```bash
./mvnw spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

# 💻 Frontend Setup

## 1. Navigate to frontend folder

```bash
cd product-catalog-react
```

## 2. Install dependencies

```bash
npm install
```

## 3. Install Bootstrap Icons

```bash
npm install bootstrap-icons
```

## 4. Run frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔮 Future Improvements

- User Authentication
- Shopping Cart
- Wishlist
- Product Details Page
- Admin Dashboard
- Payment Gateway Integration
- Order Management

---

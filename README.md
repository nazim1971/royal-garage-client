
# Royal-Garage

### Overview
**Royal-Garage** is an e-commerce platform specializing in various types of bikes, including mountain bikes, electric bikes, road bikes, and hybrid bikes. It allows users to browse, purchase, and manage their bike orders, and provides admin functionality for managing users, orders, and products.

### Features

- **User Registration & Authentication**: Users can sign up and log in using email and password. A JWT token is generated for secure access.
- **Explore Products**: Anyone can browse all types of bikes and products listed on the platform.
- **Customer Dashboard**: Logged-in customers can purchase available bikes and manage their orders.
- **Profile Management**: Customers can update their profiles and track their purchases.
- **Admin Control**: Admins can manage users (customers), monitor orders, and manage product listings (add, update, or remove bikes).

### Technologies Used
- **Frontend**: React, Vite, TypeScript, Ant Design, ShadCN UI
- **Backend**: Node.js, Express.js, TypeScript, Mongoose
- **Database**: MongoDB
- **State Management**: Redux, RTK Query

### Resources and Libraries
- **React Router**: Handles client-side routing and navigation.
- **Ant Design (AntD)**: Provides UI components for building a sleek and user-friendly interface.
- **Redux Toolkit Query (RTK Query)**: Used for fetching and caching data.
- **ShadCN UI**: A UI component library for building visually appealing interfaces.
- **React Hook Form**: For managing form states and validations efficiently.

### How to Clone and Run the Project

#### Step 1: Clone the Repositories
First, clone the client and server repositories to your local machine:
```bash
git clone https://github.com/nazim1971/royal-garage-client.git
git clone https://github.com/nazim1971/royel-garage-server.git
```

#### Step 2: Configure Backend Environment
Inside the server repository, replace the required environment variables in the `.env` file:
```
PORT=5
DATABASE_URI=your_mongodb_url_here
BCRYPT_SALT_ROUNDS=10
DEFAULT_PASS=your_default_password
NODE_ENV=development
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=10d
```
Make sure your CORS settings in `app.ts` allow requests from the frontend URL during development.

#### Step 3: Install Dependencies
Navigate to both client and server directories and install the necessary npm packages:
```bash
cd royal-garage-client
npm install

cd ../royel-garage-server
npm install
```

#### Step 4: Start the Backend Server
In the server directory, use the following command to start the server using Nodemon:
```bash
npm run dev
```

#### Step 5: Start the Client Application
In the client directory, run the following command to start the frontend development server:
```bash
npm run dev
```

### Admin Credentials
You can log in as an admin using the following credentials:
- **Email**: admin@royalgarage.com
- **Password**: 123456

### Live Application
You can visit the live version of the Royal-Garage application here: [Royal-Garage Live](https://royal-garage.vercel.app/)

---

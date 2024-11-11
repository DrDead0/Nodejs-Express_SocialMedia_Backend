# Social Media Backend

A basic social media backend developed with Node.js and Express, providing essential functionalities for building a social media application. Key features include user authentication, subscriptions, and post and video interactions, all stored and managed in MongoDB. Additional functionalities include password hashing with bcrypt, file uploads with multer, and pagination for video content using `mongooseAggregatePaginate`.

## Technologies Used

| **Technology**         | **Description**                                                               |
|------------------------|-------------------------------------------------------------------------------|
| **Node.js**            | JavaScript runtime used for server-side applications ([Node.js Official Site](https://nodejs.org/)). |
| **Express.js**         | A web framework for creating RESTful APIs ([Express.js Documentation](https://expressjs.com/)). |
| **MongoDB**            | NoSQL database for storing user data and other platform-related information ([MongoDB Official](https://www.mongodb.com/)). |
| **Mongoose**           | ODM for MongoDB, used to interact with the database easily ([Mongoose Documentation](https://mongoosejs.com/)). |
| **JWT**                | JSON Web Tokens for secure user authentication ([JWT Documentation](https://jwt.io)). |
| **Bcrypt.js**          | Library used to hash and verify passwords ([Bcrypt.js Documentation](https://www.npmjs.com/package/bcryptjs)). |
| **Multer**             | Middleware for handling multipart file uploads (such as images) ([Multer Documentation](https://www.npmjs.com/package/multer)). |
| **Cloudinary**         | Cloud storage service for storing profile images and cover photos ([Cloudinary Official](https://cloudinary.com)). |

---

## Features

| **Feature**            | **Description**                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| **User Registration**   | Allows users to register using email/username and a secure password. |
| **User Authentication** | Authenticates users using JWT tokens to allow secure access to resources. |
| **Password Management** | Users can change their password securely using hashed password storage. |
| **Profile Management**  | Users can update their profile details, including avatar and cover photo. |
| **Subscription**        | Allows users to subscribe to channels and manage their subscriptions. |
| **Watch History**       | Tracks the videos a user has watched and stores them in their history. |

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/social-media-backend.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd social-media-backend
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env` file** for your environment variables:

   ```plaintext
   MONGODB_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret Key>
   REFRESH_TOKEN_SECRET=<Your Refresh Token Secret>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
   ```

5. **Start the server**:

   ```bash
   npm start
   ```

---

## Usage

### Frontend Integration

To use this backend, connect it to a frontend framework (e.g., React, Vue, or Angular) to build a fully functional social media application. All endpoints are **RESTful**, allowing you to seamlessly integrate this backend with various frontend libraries. Below are a few steps to help you connect the backend with the frontend:

1. **Set up the Frontend Application**: 
   - Use a frontend framework like **React** or **Vue** to create the UI for your social media platform.
   - Ensure you handle the user interface for registration, login, and profile management.

2. **Make HTTP Requests**: 
   - The frontend will interact with the backend by making HTTP requests to the endpoints exposed by this backend.
   - Use libraries like `axios` or `fetch` to send requests and handle responses.

3. **Authentication**:
   - When the user logs in, the frontend will send a POST request to the `/users/login` endpoint with the email and password.
   - The backend will return a JWT token, which the frontend can store (typically in localStorage or a cookie).
   - For all subsequent requests, the frontend should include this JWT token in the `Authorization` header to authenticate requests.

4. **Profile Management**:
   - The frontend can allow users to upload avatars and update their details by making PUT requests to endpoints like `/users/update-avatar` or `/users/update-details`.

5. **Subscription and Watch History**:
   - Users can subscribe to channels and view their watch history by interacting with the appropriate endpoints, such as `/users/watch-history` or `/users/:username/channel-profile`.

---

## Endpoints

### Authentication

| **Method** | **Route**              | **Description**                            |
|------------|------------------------|--------------------------------------------|
| POST       | `/users/register`       | Registers a new user with details.         |
| POST       | `/users/login`          | Logs in a user and returns a JWT token.    |
| POST       | `/users/logout`         | Logs out the user by clearing the session. |
| POST       | `/users/refresh-token`  | Refreshes the access token using the refresh token. |

### User Management

| **Method** | **Route**                      | **Description**                            |
|------------|--------------------------------|--------------------------------------------|
| GET        | `/users/me`                    | Retrieves the profile of the current user. |
| PUT        | `/users/update-details`        | Updates user details such as name and email. |
| PUT        | `/users/change-password`       | Allows the user to change their password. |
| PUT        | `/users/update-avatar`         | Uploads and updates the user’s avatar.     |
| PUT        | `/users/update-cover-image`    | Uploads and updates the user’s cover image. |

### Channel & Subscription Management

| **Method** | **Route**                           | **Description**                                    |
|------------|-------------------------------------|----------------------------------------------------|
| GET        | `/users/:username/channel-profile` | Fetches the user’s channel profile.               |
| GET        | `/users/watch-history`             | Retrieves the user’s watch history.               |

---

## Contribution

Feel free to contribute to this project by creating **issues**, submitting **pull requests**, or suggesting **improvements**. If you would like to contribute, please:

1. **Fork the repository** and clone it to your local machine.
2. **Create a new branch** for your changes:
   ```bash
   git checkout -b new-feature
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Added new feature"
   ```
4. **Push to your fork**:
   ```bash
   git push origin new-feature
   ```
5. **Open a pull request** for review.

---

## Error Handling

| **Error Code** | **Description**                                          |
|-----------------|----------------------------------------------------------|
| `400`           | **Bad Request** - Invalid or missing data.              |
| `401`           | **Unauthorized** - Invalid credentials or authentication. |
| `404`           | **Not Found** - Resource not found (e.g., user, video). |
| `500`           | **Internal Server Error** - Unexpected server error.   |

---

## Additional Resources

- **MongoDB** - A NoSQL database for easy scalability: [MongoDB Official](https://www.mongodb.com/)
- **JWT (JSON Web Tokens)** - For secure authentication: [JWT.io](https://jwt.io)
- **Cloudinary** - Cloud storage service for media: [Cloudinary](https://cloudinary.com/)
- **Express.js** - Web framework for building RESTful APIs: [Express.js Documentation](https://expressjs.com/)
- **Bcrypt.js** - Library for securely hashing passwords: [Bcrypt.js Documentation](https://www.npmjs.com/package/bcryptjs)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

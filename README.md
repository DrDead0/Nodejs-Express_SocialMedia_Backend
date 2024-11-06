# Social Media Backend

A basic social media backend developed with Node.js and Express, providing essential functionalities for building a social media application. Key features include user authentication, subscriptions, and post and video interactions, all stored and managed in MongoDB. Additional functionalities include password hashing with bcrypt, file uploads with multer, and pagination for video content using `mongooseAggregatePaginate`.

## Features

| Feature               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **User Authentication** | Register, login, logout, and refresh tokens for secure sessions.            |
| **Subscriptions**     | Users can follow and unfollow other users.                                  |
| **Content Management** | Users can create, edit, and delete posts and videos.                        |
| **Likes**             | Like posts and videos to increase engagement.                               |

## Tech Stack

| Technology | Purpose                  | Documentation                                              |
|------------|--------------------------|------------------------------------------------------------|
| Node.js    | Runtime environment      | [Node.js Docs](https://nodejs.org/en/docs/)                |
| Express    | Web framework for routing| [Express Docs](https://expressjs.com/)                     |
| MongoDB    | Database for data storage| [MongoDB Docs](https://www.mongodb.com/docs/)              |
| JWT        | Authentication tokens    | [JWT Introduction](https://jwt.io/introduction/)           |
| Bcrypt     | Password hashing         | [Bcrypt Docs](https://github.com/kelektiv/node.bcrypt.js) |
| Multer     | File upload handling     | [Multer Docs](https://www.npmjs.com/package/multer)       |
| Cloudinary | Media storage for uploads| [Cloudinary Docs](https://cloudinary.com/documentation)    |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your system.
- [MongoDB](https://www.mongodb.com/) set up locally or via MongoDB Atlas.
- [Cloudinary](https://cloudinary.com/) account for managing media storage.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/DrDead0/Nodejs-Express_SocialMedia_Backend.git
    cd social-media-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add:
    ```
    PORT=5230
    MONGODB_URI= your_mongodb_connection_string
    CORS_ORIGIN= your_cors_origin
    ACCESS_TOKEN_SECRET= your_access_token_secret
    ACCESS_TOKEN_EXPIRY= access_token_expiry (e.g., 1d)
    REFRESH_TOKEN_SECRET= your_refresh_token_secret
    REFRESH_TOKEN_EXPIRY= refresh_token_expiry (e.g., 7d)
    CLOUDINARY_NAME= your_cloudinary_name
    CLOUDINARY_API_KEY= your_cloudinary_api_key
    CLOUDINARY_API_SECRET= your_cloudinary_api_secret
    ```

4. **Run the server**:
    ```bash
    npm run start
    ```
    The server will be running at `http://localhost:5230`.

## API Endpoints

| Endpoint              | HTTP Method | Description                        |
|-----------------------|-------------|------------------------------------|
| `/user/register`      | POST        | Register a new user                |
| `/user/login`         | POST        | Log in an existing user            |
| `/user/logout`        | POST        | Log out the user                   |
| `/user/refresh-token` | POST        | Refresh JWT token                  |
| `/user/:id/follow`    | POST        | Follow another user                |
| `/user/:id/unfollow`  | POST        | Unfollow a user                    |
| `/post`               | POST        | Create a new post                  |
| `/post/:id`           | PUT         | Edit a post                        |
| `/post/:id`           | DELETE      | Delete a post                      |
| `/post/:id/like`      | PUT         | Like a post                        |
| `/video`              | POST        | Upload a new video                 |
| `/video/:id`          | PUT         | Edit a video                       |
| `/video/:id`          | DELETE      | Delete a video                     |
| `/video/:id/like`     | PUT         | Like a video                       |

## Usage

To use this backend, connect it to a frontend framework (e.g., React, Vue, or Angular) to build a fully functional social media application. All endpoints are RESTful, allowing you to integrate this backend seamlessly with various frontend libraries.

## Additional Resources

- **JSON Web Token (JWT)**: Used for secure authentication in this project. Learn more about it [here](https://jwt.io/introduction/).
- **MongoDB Atlas**: For setting up a cloud MongoDB database, refer to [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/).
- **Express Middleware**: Explore how to handle requests and responses with middleware in the [Express Documentation](https://expressjs.com/en/guide/using-middleware.html).
- **Bcrypt**: Learn about password hashing with [Bcrypt](https://github.com/kelektiv/node.bcrypt.js).
- **Multer**: Find out how to handle file uploads with [Multer](https://www.npmjs.com/package/multer).
- **Cloudinary**: Manage and optimize media uploads with [Cloudinary](https://cloudinary.com/documentation).

## Contributing
Contributions are welcome! If you’d like to suggest features, improvements, or fixes, feel free to fork the repository, create a branch, and submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/DrDead0/Nodejs-Express_SocialMedia_Backend?tab=MIT-1-ov-file).

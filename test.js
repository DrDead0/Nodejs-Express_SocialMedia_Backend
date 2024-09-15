import dotenv from 'dotenv';

// Load environment variables from a specific .env file path
dotenv.config({ path: 'E:/VIT/New_Backend_cont/.env' });

console.log('PORT:', process.env.PORT);

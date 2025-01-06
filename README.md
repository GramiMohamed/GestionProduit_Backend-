# GestionProduit_BackEnd
The backend API is responsible for handling data storage and retrieval. It is built using Node.js with Express and MongoDB. The API provides endpoints for CRUD operations on products and includes features like logging and error handling.
### Features

- **Create Products**: Add new products to the database.
- **Read Products**: Retrieve all products or a specific product by ID.
- **Update Products**: Modify existing product details.
- **Delete Products**: Remove products from the database.
- **Logging**: Middleware for logging incoming requests.
- **Error Handling**: Proper error handling for API endpoints.
- **CORS Enabled**: Cross-Origin Resource Sharing (CORS) is enabled for cross-origin requests.

### Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **body-parser**: Middleware for parsing incoming request bodies.
- **cors**: Middleware for enabling CORS.
## Installation and Setup

### Backend
1. Clone the repository:

   ```bash
   git clone https://github.com/GramiMohamed/backend-repo.git
   cd your-backend-repo

2. Install dependencies:

   ```bash
   npm install

3. Set up environment variables:
  Create a .env file and add the following variables:
   ```bash
   MONGO_URI=mongodb://localhost:27017/gestion-prod

3. Start the server:
 
   ```bash
   npm start
The backend will be running on http://localhost:5000.
## API Endpoints
### GET /api/produits
1.  Description: Get all products.
2.  Response: JSON array of products.
### GET /api/produits/:id
1.  Description: Get a product by ID.
2.  Parameters: :id - The ID of the product.
3.  Response: JSON object of the product.
### POST /api/produits
1.  Description: Create a new product.
2.  Request Body: JSON object containing product details.
3.  Response: JSON object of the created product.
### PUT /api/produits/:id
1.  Description: Update a product by ID.
2.  Parameters: :id - The ID of the product.
3.  Request Body: JSON object containing updated product details.
4.  Response: JSON object of the updated product.
### DELETE /api/produits/:id
1.  Description: Delete a product by ID.
2.  Parameters: :id - The ID of the product.
3.  Response: JSON object with a success message.

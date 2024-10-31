# shipmondo-backend-assignment

This assignment seeks to gauge how you approach the task, and what considerations go into the implementation. There is no single correct implementation, but it is important that you can consider the pros and cons of your approach.

You are expected to use around 4-6 hours on this, but it is not necessary to complete everything in the given timeframe. It is important that you note down any comments or considerations you may have for potential expansion or limitations of your code.

## How to submit

To submit this assignment, please fork this repository or create a new one. Please keep commits to functional chunks.

## My solution

I've chosen to use Express on top of Node.JS for this solution. This is a bare minimum solution to the assignment.

To run the project, you have to do the following:

1. Create a `.env` file at the root of this project which should contain the following:
   ```env
   SHIPMONDO_API_USER=<your_shipmondo_api_user>
   SHIPMONDO_API_KEY=<your_shipmondo_api_key>
   SHIPMONDO_BASE_URL=https://sandbox.shipmondo.com/api/public/v3
   DATABASE_URL="postgresql://username:password@db:5432/shipmondo"
   ```
2. Build and run the docker container by typing:
   ```sh
   docker-compose up --build -d
   ```
3. Create a new shipment by throwing the following curl command into the Terminal:
   ```sh
   curl -X POST http://localhost:3000/shipments
   ```

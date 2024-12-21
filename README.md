# Developer-Assignment-Solution

REST API for the study-abroad financial services platform.

Data Models:

University: Stores university information
Bank: Stores bank information
Application: Manages student applications with support for multiple universities and banks
Key Features:

Students can select multiple universities
For each university, students can select multiple banks
Application status tracking for both university and bank applications
Comprehensive API endpoints for all CRUD operations

API Endpoints:

Universities:
GET /api/universities - Get all universities
GET /api/universities/:id - Get university by ID

Banks:
GET /api/banks - Get all banks
GET /api/banks/:id - Get bank by ID

Applications:
POST /api/applications - Create new application
GET /api/applications/:id - Get application details
PATCH /api/applications/:id - Update application
POST /api/applications/:id/universities - Add university to application
POST /api/applications/:id/universities/:universityId/banks - Add bank to university application

Data Structure:
Each application can have multiple university applications
Each university application can have multiple bank selections
Status tracking at both university and bank level

Security & Best Practices:
Input validation
Error handling
MongoDB data validation
CORS enabled
Helmet for security headers

To test the API:
The server will start on port 3000
Use the provided endpoints to:
Create a new application
Add universities to the application
Select banks for each university
Track application status
The implementation includes seed data for all universities and banks listed in the requirements.

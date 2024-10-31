# Angular, Express.js, and Django Todo List Project

## Introduction
This project was developed as a learning exercise to explore new frameworks: Angular for the frontend, and Express.js and Django for the backend. The goal was to understand how to work with both JavaScript and Python-based server-side environments. Over time, a Python Django backend was added as an experiment alongside the existing Express.js backend.

The application is a simple **Todo List** that allows users to:
- Add tasks
- Mark tasks as completed
- Remove completed tasks
- Clear all tasks

The project uses **MongoDB** as the database for both backends. In the case of Express.js, it uses **Mongoose** as an ORM, while **PyMongo** is used for the Django backend.

![image](https://github.com/user-attachments/assets/a6307d67-2400-4f22-8678-d9bd6b65c115) ![image](https://github.com/user-attachments/assets/c443811f-a3a2-4a51-a1de-af6be9f011a4) ![image](https://github.com/user-attachments/assets/d3bdce46-18a4-40ae-b5ef-d233856c3ea3)


## Tech Stack
- **Frontend**: Angular
- **Backend**: Express.js, Django
- **Database**: MongoDB (with Mongoose for Express and PyMongo for Django)

### Key Features
- **Simple Todo List** functionality.
- Two backend implementations (Node.js/Express and Python/Django).
- **Non-responsive design**: The focus was on learning the frameworks without spending too much time on CSS. However, effort was made to keep the design aesthetically pleasing.

## Setup and Running the Project

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Starting MongoDB
To start MongoDB locally, run:
```bash
mongod
```
This will start MongoDB on the default port 27017.

### Running the Frontend (Angular)
First, navigate to the frontend directory and start the Angular development server:
```bash
cd frontend
npm start
```
This will start the frontend on port **4200**.

### Running the Backend (Express.js)
To run the backend server using Express.js:
```bash
cd backend
npm start
```
This will start the backend on port **3000**.

### Running the Backend (Python Django)
To run the backend server using Django:
```bash
cd backend_python
python manage.py runserver 3000
```
This will start the Django backend on port **3000**.

## Usage
- Access the **frontend** on [http://localhost:4200](http://localhost:4200).
- Depending on which backend you want to use, make sure you have either **Express.js** or **Django** running on **port 3000**.
- MongoDB should also be running to handle data persistence.

## Project Structure
- **frontend/**: Angular application for the Todo List.
- **backend/**: Node.js and Express.js server.
- **backend_python/**: Python Django server.

## Notes
- The project was a learning exercise; therefore, it is **not responsive**.
- Focus was on framework learning rather than CSS, although the design is kept simple and pleasing.

![image](https://github.com/user-attachments/assets/a6307d67-2400-4f22-8678-d9bd6b65c115)

![image](https://github.com/user-attachments/assets/c443811f-a3a2-4a51-a1de-af6be9f011a4)

![image](https://github.com/user-attachments/assets/d3bdce46-18a4-40ae-b5ef-d233856c3ea3)








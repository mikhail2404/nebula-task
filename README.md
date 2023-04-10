
# My Test App - Development and Production Mode Guide

This is a guide for starting a React test application in development and production modes.

## Getting Started

### Prerequisites

To get started, you need to have the following installed on your machine:

- Node.js and npm (Node Package Manager)
- Git

### Installation

1. Clone the repository using Git:

```
git clone https://github.com/mikhail2404/nebula-task.git
```
2. Change into the project directory:

```
cd <project-directory>
```

3. Install dependencies:

```
npm install
```

## Starting the Application

### Development Mode

To start the application in development mode, run the following command:

```
npm start
```

This command will start the development server, which will automatically reload the application whenever you make changes to the code.

You can access the application at `http://localhost:3000`.

### Production Mode

```
npm run build
npm install -g serve
serve -s build
```

The `npm run build` command will create a production build of the application.

The `npm install -g serve` command will install the `serve` package globally.

The `serve -s build` command will serve the production build of the application at `http://localhost:3000`.
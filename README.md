# Node-Nextjs Polling App
A simple polling app that allows users to create, manage and participate in polls

## Built With
- [Nodejs](https://nodejs.org/en)
- [Nextjs](https://nextjs.org/)

## Getting Started
### Prerequisites
Make sure you have Node installed on your machine.
- Download and install Nodejs from [nodejs.org](https://nodejs.org/en/download).
- Verify installation:
  ```sh
  node -v
  ```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JesstinSwadley/polling-app.git
   cd polling-app
   ```
2. Install the Nextjs Packages:
	```bash
	# From the polling-app directory
	cd client
	npm i
	# or
	npm install
	```
3. Install the Nodejs Packages
	```bash
	# From the polling-app directory
	cd server
	npm i
	# or
	npm install
	```

## Usage
### Enviornment Varialbes
```
PORT="SERVER_PORT"
```

### Nextjs Server
Run the Nextjs development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Nodejs Server
Run the Nodejs server:

```bash
npm run build
PORT="SERVER_PORT" npm run start
```

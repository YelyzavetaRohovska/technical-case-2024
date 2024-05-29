# Krogsveen Technical Case 2024

## Introduction

Start the backend dev server:
```bash
cd backend

yarn install

yarn dev
```

Start the frontend dev server:
```bash
cd frontend

yarn install

yarn dev
```

## Desirable improvements

- __GraphQl Integration:__ Consider using GraphQl for fetching data from the backend. It provides more flexibility and efficiency compared to traditional REST APIs.

- __Live Data Updates:__ If time permits, implement a pubsub system on the server-side to enable live updates of data on the dashboard. For this case SSE is suited for efficiently pushing updates from the server to clients.

- __Error Handling System:__ Implement error handling on the client-side to gracefully handle any errors that may occur during data fetching or rendering.

- __Security Measures:__ Implement connection limitations on the server-side to prevent DDOS attacks and slowris attacks.

- __Loading State:__ Implement a loading state to provide feedback to users while data is being fetched from the backend.


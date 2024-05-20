# Daily stand up 2024-05-20

### Questions to bring up to the Standup

- Should we use http://localhost:5001/api/v1/squirlchain/nuttrading for subscribing
  transaktion across the nodes? The same way we are subscribing the blockchain
  with Redis

## Rasmus

### 1. What for problem have accure?

- The repo is on Windows, which has been problematic because Redis does not work on Windows.
  I have come up with a solution by adding a dev:windows script for Windows users.

### 2. What have i been working on until today?

- I have been working on the frontend. Posting and getting data from the server and displaying this information.

### 3. What will i be working on today?

- Implementing a button on the frontend. When you press it, the amount of coin increases and you can create a transaction.

## Sanjin

### 1. What for problem have accure?

- No direct problems.

### 2. What have i been working on until today?

- Css, wireframe. Styling

### 3. What will i be working on today?

- Continuing with the styling.

## Oskar

### 1. What for problem have accure?

- None

### 2. What have i been working on until today?

- Worked on logging and separated them into an app.log and an error.log.
  Added a ResponseModel.

### 3. What will i be working on today?

- Implementing that for every third transaction, a block will be mined.
- Implementing that transactions are broadcasted to all nodes.

## Carl

### 1. What for problem have accure?

- Problems with implementing mining at node intervals.

### 2. What have i been working on until today?

- Have been modifying the models to accept blockNumber and added a fetch one block API.
- Worked on ensuring that Redis correctly broadcasts its mined blocks.

### 3. What will i be working on today?

- Reviewing the code with Oskar and pair programming with him on the broadcasting of transactions.

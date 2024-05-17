export const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

export const GENESIS_DATA = {
  timestamp: Date.now(),
  lastHash: '0',
  hash: '0',
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
};

// This file contains the endpoints for the API. The base url is /api/v1/squirlchain.
// Comment line 4 thrue 31 for easier grading this assignment and uncomment the section below.

const base = '/api/v1/squirlchain';

export const fullEndpoint = {
  // base url in Server.mjs
  base: base,

  // Block routes
  block: base + '/block',
  blockCreate: base + '/block/breed',

  // fetch routes
  fetchAll: base + '/fetchsquirls',
  fetchOne: base + '/fetchsquirls/:id',

  // transact routes
  transact: base + '/nuttrading',
};

export const singleEndpoint = {
  block: '/block',
  blockCreate: '/breed',

  fetchAll: '/fetchsquirls',
  fetchOne: '/fetchsquirls/:id',

  transactions: '/nuttradings',
  transact: '/nuttrading',
};

// uncomment the following section for easier grading this assignment
/*
 const base = '/api/v1/blockchain';

export const fullEndpoint = {
  // base url in Server.mjs
  base: base,

  // Block routes
  block: base + "/block",
  blockCreate: base + "/block/mine",

  // fetch routes
  fetchAll: base + "/listchain",
  fetchOne: base + "/listchain/:id",

  // transact routes
  transact: base + "/transactions",
};

export const singleEndpoint = {
  block: "/block",
  blockCreate: "/mine",

  fetchAll: "/listchain",
  fetchOne: "/listchain/:id",

  transactions: "/transactions",
  transact: "/transact",
};
    
 */

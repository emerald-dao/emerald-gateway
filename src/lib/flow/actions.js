import { browser } from '$app/env';

import * as fcl from "@samatech/onflow-fcl-esm";

import "./config.js";
import {
  user,
  txId,
  transactionStatus,
  transactionInProgress,
} from './stores.js';

import { respondWithError, respondWithSuccess } from '$lib/response';
import { parseErrorMessageFromFCL } from './utils.js';

if (browser) {
  // set Svelte $user store to currentUser, 
  // so other components can access it
  fcl.currentUser.subscribe(user.set, [])
}

// Lifecycle FCL Auth functions
export const unauthenticate = () => fcl.unauthenticate();
export const authenticate = () => fcl.authenticate();


function initTransactionState() {
  transactionInProgress.set(true);
  transactionStatus.set(-1);
}
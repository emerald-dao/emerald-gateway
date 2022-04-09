import { getWhitelist } from "./actions";

export function parseErrorMessageFromFCL(errorString) {
  let newString = errorString?.replace('[Error Code: 1101] cadence runtime error Execution failed:\nerror: assertion failed:', 'Error:')
  newString = newString.replace(/-->.*/,'');
  return newString;
}

export async function readWhitelist(address, whitelistId) {
  const scriptWhitelist = await getWhitelist(address, whitelistId);

  /* Token Modules */
  const scriptTokenModules = scriptWhitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsToken"];
  console.log(scriptTokenModules)
  let tokenModules = [];
  for (let i = 0; i < scriptTokenModules.length; i++) {
    const scriptTokenModule = scriptTokenModules[i];
    const tokenModule = {
      identifier: scriptTokenModule.identifier,
      amount: scriptTokenModule.amount,
      imgUrl: "https://res.cloudinary.com/do4mactw0/image/upload/v1647145425/FlowLogo_myf3sv.svg",
      label: "FLOW"
    }
    tokenModules.push(tokenModule);
  }
  let whitelist = {
    ...scriptWhitelist.variables,
    modules: {
      token: tokenModules
    }
  }
  console.log(whitelist);
  return whitelist;
}

export const formatter = new Intl.DateTimeFormat("en-US");
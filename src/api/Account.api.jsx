import { CUDAPI, RetrieveAPI } from "./root.api";

export function AccountRetrieveList() {
  return RetrieveAPI(`account/`)
}
export const createAcccount = (newAccount) => {
  return CUDAPI("account/", newAccount, 'POST')
};

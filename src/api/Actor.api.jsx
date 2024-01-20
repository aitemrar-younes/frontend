import { RetrieveAPI } from "./root.api";

export function AccountRetrieveList() {
  return RetrieveAPI(`/account/`)
}
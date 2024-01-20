import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { AccountRetrieveList } from '../../../api/Account.api';
import { TbFilterSearch } from 'react-icons/tb';

const AccountList = () => {
  const accountListQuery = useQuery({
    queryKey: ["accountList"],
    queryFn: () => AccountRetrieveList(),
  });
  console.log(accountListQuery.data)
  return (
    <div>
      <div className="__Table__">
        <div className="controller">
          <div className="row">
            <div className="col">
              <h3 className="titre">List des "Account"</h3>
            </div>

            <div className="col">
              <div className="input-group-inline">
                <label htmlFor="input_search">Cherecher</label>
                <input
                  id="input_search"
                  type="text"
                  className="input search"
                  placeholder="..."
                />
              </div>
              <button className="filter_button">
                Filtrer
                <TbFilterSearch size={20} color="#777" />
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col">{/* pagination buttons */}</div>
          </div>
        </div>
        <div className="table_wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Birth date</th>
                <th>Licence expiry date</th>
              </tr>
            </thead>
            <tbody>
              {
                accountListQuery?.data ?
                accountListQuery.data.map((account)=>(
                    <tr key={account.id}>
                      <td> {account.id} </td>
                      <td> {account.first_name} </td>
                      <td> {account.last_name} </td>
                      <td> {account.birth_date} </td>
                      <td> {account.licence_expiry_date} </td>
                    </tr>
                  ))
                : null
              }
            </tbody>
          </table>
          <div className="table_related_info">
            <span className="filtred_data">
              { accountListQuery?.data?.length} rows retrieved {/* ( filtred from 198 ) */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountList
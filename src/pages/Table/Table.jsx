import React from 'react'
import { TbFilterSearch  } from "react-icons/tb";
import '/src/assets/Styles/Table.scss'

const Table = () => {
  return (
    <div className='__Table__'>
            <div className="controller">
                <div className="row">

                    <div className="col">
                        <h3 className='titre'>Titre du tableau</h3>
                    </div>

                    <div className="col">
                        <div className="input-group-inline">
                            <label htmlFor="input_search">Cherecher</label>
                            <input id='input_search' type="text" className="input search" placeholder='...' />
                        </div>
                        <button className="filter_button">Filtrer<TbFilterSearch  size={20} color='#777' /></button>
                    </div>

                </div>
                
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        {/* pagination buttons */}
                    </div>
                </div>
            </div>
        <div className="table_wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Age</th>
                        <th>Tél</th>
                        <th>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Aitemrar</td>
                        <td>Younes</td>
                        <td>26</td>
                        <td>0799552071</td>
                        <td><span className="chip chip_valide">Actif</span></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lounici</td>
                        <td>Raouf</td>
                        <td>36</td>
                        <td>0778963254</td>
                        <td><span className="chip chip_invalide">Hors</span></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sadou</td>
                        <td>nassim</td>
                        <td>37</td>
                        <td>0557896541</td>
                        <td><span className="chip chip_valide">Actif</span></td>
                    </tr>
                </tbody>
            </table>
            <div className="table_related_info">
                <span className="filtred_data">10 rows selected ( filtred from 198 ) </span>
            </div>
        </div>
    </div>
  )
}

export default Table    
import React from 'react'
import { TbFilterSearch  } from "react-icons/tb";
import '/src/assets/Styles/Table.scss'

const Table = () => {
  return (
    <div className='__Table__'>
        <div className="table_wrapper">
            <div className="controller">
                <div className="row">
                    <div className="col">
                        <h3 className='titre'>Titre du tableau</h3>
                    </div>
                    <div className="col">
                        <input type="text" className="search" placeholder='Search' />
                        <button className="filter_button"><TbFilterSearch  size={20} color='#444' /></button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        pagination buttons
                    </div>
                </div>
            </div>
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
                    <tr>
                        <td>4</td>
                        <td>Tiar</td>
                        <td>mohamed</td>
                        <td>30</td>
                        <td>0660598412</td>
                        <td><span className="chip chip_invalide">Hors</span></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Aitemrar</td>
                        <td>Younes</td>
                        <td>26</td>
                        <td>0799552071</td>
                        <td><span className="chip chip_invalide">Hors</span></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Lounici</td>
                        <td>Raouf</td>
                        <td>36</td>
                        <td>0778963254</td>
                        <td><span className="chip chip_valide">Actif</span></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Sadou</td>
                        <td>nassim</td>
                        <td>37</td>
                        <td>0557896541</td>
                        <td><span className="chip chip_valide">Actif</span></td>
                    </tr>
                </tbody>
            </table>
            <div className="table_related_info">
                <span className="filtred_data"><strong>10</strong> rows selected ( filtred from 198 ) </span>
            </div>
        </div>
    </div>
  )
}

export default Table    
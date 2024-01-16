import React from 'react'
import { TbFilterSearch  } from "react-icons/tb";
import '/src/assets/Styles/Table.scss'
import RootFrame from '../../components/layout/RootFrame';

const Table = () => {
     const data = [
        { id: 1, Nom: 'Smith', Prenom: 'John', Age: 30, Tel: '123-456-7890', state:"actif" },
        { id: 2, Nom: 'Johnson', Prenom: 'Anna', Age: 25, Tel: '987-654-3210', state:"actif" },
        { id: 3, Nom: 'Doe', Prenom: 'Alice', Age: 28, Tel: '555-123-4567', state:"actif" },
        { id: 4, Nom: 'Williams', Prenom: 'David', Age: 35, Tel: '456-789-0123', state:"actif" },
        { id: 5, Nom: 'Brown', Prenom: 'Emily', Age: 22, Tel: '789-012-3456', state:"actif" },
        { id: 6, Nom: 'Jones', Prenom: 'Michael', Age: 32, Tel: '321-654-0987', state:"actif" },
        { id: 7, Nom: 'Garcia', Prenom: 'Sophia', Age: 27, Tel: '012-345-6789', state:"actif" },
        { id: 8, Nom: 'Martinez', Prenom: 'Daniel', Age: 40, Tel: '654-321-9870', state:"actif" },
        { id: 9, Nom: 'Anderson', Prenom: 'Olivia', Age: 29, Tel: '789-456-1230', state:"actif" },
        { id: 10, Nom: 'Taylor', Prenom: 'Ethan', Age: 26, Tel: '234-567-8901', state:"actif" },
     ]
  return (
    <RootFrame>
    <div className='__Table__'>
        <div className="table_wrapper">
            <div className="controller">
                <div className="row">

                    <div className="col">
                        <h3 className='titre'>Titre du tableau</h3>
                    </div>

                    <div className="col">
                        <div className="input-group">
                            <label htmlFor="input_search">Cherecher</label>
                            <input id='input_search' type="text" className="search" />
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
                <span className="filtred_data">10 rows selected ( filtred from 198 ) </span>
            </div>
        </div>
    </div>
    </RootFrame>
  )
}

export default Table    
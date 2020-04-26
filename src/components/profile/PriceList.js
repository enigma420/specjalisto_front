import React from 'react';
import MaterialTable from 'material-table';

export default function PriceList() {
    const [state, setState] = React.useState({
        columns: [
            {title: 'Nazwa Zlecenia', field: 'commission'},
            {title: 'Ilość', field: 'count'},
            {title: 'Cena [zł]', field: 'price', type: 'numeric'},
            {title: 'Czas trwania', field: 'time'},
        ],
        data: [
            {commission: 'Malowanie', count: '10 metrów kwadratowych', price: 350, time: '8 godzin'},
            {commission: 'Malowanie', count: '5 metrów kwadratowych', price: 200, time: '4 godzin'},
        ],
    });

    return (
        <MaterialTable
            style={{background: '#ffe6e6', border: '2px solid #fa8484'}}
            title="Przykładowy Cennik Usług"
            options={{
                loadingType: 'overlay',
                searchFieldAlignment: 'right',
                isFreeAction: true,
                exportAllData: true,
                exportButton: true,
                exportFileName: "Cennik_Specjalisty",
                grouping: true,
                selection: true,
                draggable: true,
                filtering: true,
                headerStyle: {
                    backgroundColor: " #fa8484",
                    textAlign: 'center',
                    fontSize: '12px'
                },
                rowStyle: {
                    background: '#fac0c0',
                }
            }}

            localization={{
                body: {
                    addTooltip: "Dodaj usługę",
                    deleteTooltip: "Usuń usługę",
                    editTooltip: "Edytuj usługę",
                    filterRow: {
                        filterTooltip: "Filtry"
                    }
                },
                grouping: {
                    placeholder: "Przeciągnij nazwe kolumny tutaj aby grupować"
                },
                header:{
                    actions:""
                },
                pagination: {
                    labelDisplayedRows:'{from}-{to} z {count}',
                    labelRowsSelect:"rekordów",
                    labelRowsPerPage: 'rekordów na stronę',
                    firstAriaLabel:"Pierwsza strona",
                    firstTooltip:"Pierwsza strona",
                    previousAriaLabel:"Poprzednia strona",
                    previousTooltip:"Poprzednia strona",
                    nextAriaLabel:"Następna strona",
                    nextTooltip:"Następna strona",
                    lastAriaLabel:"Ostatnia strona",
                    lastTooltip:"Ostatnia strona"
                },
                toolbar:{
                    nRowsSelected:"{0} rekord(ów) wybrano",
                    addRemoveColumns:"Dodaj lub usuń kolumnę",
                    showColumnsTitle:"Pokaż kolumny",
                    showColumnsAriaLabel:"Pokaż kolumny"
                }
            }}
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return {...prevState, data};
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return {...prevState, data};
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return {...prevState, data};
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
// import React, { useState, useEffect } from 'react';
// import './DownloadPage.css'; // Import the CSS file for styling

// const DownloadPage = () => {
//     const [gridData, setGridData] = useState([
//         ['ID', 'UID', 'First Name', 'Last Name', 'Username', 'Email', 'Avatar', 'Gender', 'Phone Number'],
//     ]);

//     const handleCellChange = (rowIndex, colIndex, value) => {
//         const updatedGridData = [...gridData];
//         updatedGridData[rowIndex][colIndex] = value;
//         setGridData(updatedGridData);
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://thingproxy.freeboard.io/fetch/https://random-data-api.com/api/v2/users?size=30&is_xml=false');
//                 const contentType = response.headers.get('content-type');
//                 if (contentType && contentType.includes('application/json')) {
//                     const data = await response.json();
//                     const updatedGridData = [...gridData];
//                     data.forEach((user) => {
//                         updatedGridData.push([
//                             user.id.toString(),
//                             user.uid,
//                             user.first_name,
//                             user.last_name,
//                             user.username,
//                             user.email,
//                             user.avatar,
//                             user.gender,
//                             user.phone_number,
//                         ]);
//                     });
//                     setGridData(updatedGridData);
//                 } else {
//                     throw new Error('Response was not in JSON format');
//                 }
//             } catch (error) {
//                 console.error('Error fetching random data:', error);
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//     return (
//         <div className="grid-container">
//             <div className="excel-grid">
//                 <div className="excel-row header-row">
//                     {gridData[0].map((cell, colIndex) => (
//                         <div key={colIndex} className="excel-cell header-cell">
//                             {cell}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="body">
//                     {gridData.slice(1).map((row, rowIndex) => (
//                         <div key={rowIndex} className="excel-row">
//                             {row.map((cell, colIndex) => (
//                                 <input
//                                     key={colIndex}
//                                     type="text"
//                                     className="excel-cell"
//                                     value={cell}
//                                     onChange={(e) => handleCellChange(rowIndex + 1, colIndex, e.target.value)}
//                                 />
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DownloadPage;
// import React, { useState, useEffect } from 'react';
// import './DownloadPage.css'; // Import the CSS file for styling

// const DownloadPage = () => {
//     const [gridData, setGridData] = useState([
//         ['ID', 'UID', 'First Name', 'Last Name', 'Username', 'Email', 'Avatar', 'Gender', 'Phone Number'],
//     ]);
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleCellChange = (rowIndex, colIndex, value) => {
//         const updatedGridData = [...gridData];
//         updatedGridData[rowIndex][colIndex] = value;
//         setGridData(updatedGridData);
//     };

//     const filteredData = gridData.filter((row, rowIndex) => {
//         if (rowIndex === 0) return true; // Header row should always be shown
//         return row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()));
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://thingproxy.freeboard.io/fetch/https://random-data-api.com/api/v2/users?size=30&is_xml=false');
//                 const contentType = response.headers.get('content-type');
//                 if (contentType && contentType.includes('application/json')) {
//                     const data = await response.json();
//                     const updatedGridData = [...gridData];
//                     data.forEach((user) => {
//                         updatedGridData.push([
//                             user.id.toString(),
//                             user.uid,
//                             user.first_name,
//                             user.last_name,
//                             user.username,
//                             user.email,
//                             user.avatar,
//                             user.gender,
//                             user.phone_number,
//                         ]);
//                     });
//                     setGridData(updatedGridData);
//                 } else {
//                     throw new Error('Response was not in JSON format');
//                 }
//             } catch (error) {
//                 console.error('Error fetching random data:', error);
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//     return (
//         <div className="grid-container">
//             <label for="gsearch" className='search-label'>Search:</label>
//             <input
//                     type="text"
//                     placeholder="Search"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}/>
          
//             <div className="excel-grid">
//                 <div className="excel-row header-row">
//                     {gridData[0].map((cell, colIndex) => (
//                         <div key={colIndex} className="excel-cell header-cell">
//                             {cell}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="body">
//                     {filteredData.slice(1).map((row, rowIndex) => (
//                         <div key={rowIndex} className="excel-row">
//                             {row.map((cell, colIndex) => (
//                                 <input
//                                     key={colIndex}
//                                     type="text"
//                                     className="excel-cell"
//                                     value={cell}
//                                     onChange={(e) => handleCellChange(rowIndex + 1, colIndex, e.target.value)}
//                                 />
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DownloadPage;


// import React, { useState, useEffect } from 'react';
// import './DownloadPage.css'; // Import the CSS file for styling

// const c = () => {
//     const [gridData, setGridData] = useState([
//         ['ID', 'UID', 'First Name', 'Last Name', 'Username', 'Email', 'Avatar', 'Gender', 'Phone Number'],
//     ]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [entriesToShow, setEntriesToShow] = useState(10); // Default to 10 entries per page

//     const handleCellChange = (rowIndex, colIndex, value) => {
//         const updatedGridData = [...gridData];
//         updatedGridData[rowIndex][colIndex] = value;
//         setGridData(updatedGridData);
//     };

//     const filteredData = gridData.filter((row, rowIndex) => {
//         if (rowIndex === 0) return true; // Header row should always be shown
//         return row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()));
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://thingproxy.freeboard.io/fetch/https://random-data-api.com/api/v2/users?size=30&is_xml=false');
//                 const contentType = response.headers.get('content-type');
//                 if (contentType && contentType.includes('application/json')) {
//                     const data = await response.json();
//                     const updatedGridData = [...gridData];
//                     data.forEach((user) => {
//                         updatedGridData.push([
//                             user.id.toString(),
//                             user.uid,
//                             user.first_name,
//                             user.last_name,
//                             user.username,
//                             user.email,
//                             user.avatar,
//                             user.gender,
//                             user.phone_number,
//                         ]);
//                     });
//                     setGridData(updatedGridData);
//                 } else {
//                     throw new Error('Response was not in JSON format');
//                 }
//             } catch (error) {
//                 console.error('Error fetching random data:', error);
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//     return (
//         <div className="grid-container">
//             <label htmlFor="gsearch" className='search-label'>Search:</label>
//             <input
//                 type="text"
//                 id="gsearch"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <label htmlFor="entriesToShow">Show entries:</label>
//             <select id="entriesToShow" value={entriesToShow} onChange={(e) => setEntriesToShow(Number(e.target.value))}>
//                 <option value="10">10</option>
//                 <option value="20">20</option>
//                 <option value="30">30</option>
//                 {/* Add more options as needed */}
//             </select>
//             <div className="excel-grid">
//                 <div className="excel-row header-row">
//                     {gridData[0].map((cell, colIndex) => (
//                         <div key={colIndex} className="excel-cell header-cell">
//                             {cell}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="body">
//                     {filteredData.slice(0, entriesToShow).map((row, rowIndex) => (
//                         <div key={rowIndex} className="excel-row">
//                             {row.map((cell, colIndex) => (
//                                 <input
//                                     key={colIndex}
//                                     type="text"
//                                     className="excel-cell"
//                                     value={cell}
//                                     onChange={(e) => handleCellChange(rowIndex + 1, colIndex, e.target.value)}
//                                 />
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DownloadPage;
// import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
// import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

// const DownloadPage = () => {
//     // Initialize rowData state with an empty array
//     const [rowData, setRowData] = useState([]);
    
//     // Column Definitions: Defines the columns to be displayed.
//     const [colDefs, setColDefs] = useState([
//     { field: "make", headerName: "Make", checkboxSelection: true },
//       { field: "id", headerName: "ID",filter: true },
//       { field: "username", headerName: "Username", filter: true },
//       { field: "email", headerName: "Email", filter: true },
//       { field: "gender", headerName: "Gender" ,filter: true},
//       { field: "phone_number", headerName: "Phone Number",filter: true },
//       { field: "subscription.plan", headerName: "Subscription Plan", editable: true ,filter: true},
//       { field: "subscription.status", headerName: "Subscription Status", editable: true,filter: true },
     
//     ]);

//     // Fetch data from the API when the component mounts
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://thingproxy.freeboard.io/fetch/https://random-data-api.com/api/v2/users?size=10&is_xml=false");
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setRowData(data); // Update rowData state with fetched data
//             } catch (error) {
//                 console.error('There was a problem fetching the data:', error);
//             }
//         };

//         fetchData(); // Call the fetchData function
//     }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//     // Wrapping return inside the component
//     return (
//       // Wrapping container with theme & size
//       <div
//        className="ag-theme-quartz" // Applying the grid theme
//        style={{ height: 500 }} // The grid will fill the size of the parent container
//       >
//         <AgGridReact
//             rowData={rowData}
//             columnDefs={colDefs}
//             rowSelection="multiple" // Enable row selection
//             pagination={true} // Enable pagination
//             paginationPageSize={500} // Set pagination page size
//             paginationPageSizeSelector={[200, 500, 1000]} // Set pagination page size selector options
//             enableSorting={true} // Enable sorting
//             enableFilter={true} // Enable filtering
//             floatingFilter={true} // Enable floating filters
//             enableCellEditing={true} // Enable cell editing
//         />
//       </div>
//     );
// }

// export default DownloadPage; // Exporting the component


import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterService } from 'primereact/api';
import { DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox} from 'primereact/tristatecheckbox';
import { CustomerService } from './CustomerService';
import { InputNumber } from 'primereact/inputnumber';

// The rule argument should be a string in the format "custom_[field]".
FilterService.register('custom_activity', (value, filters) => {
  const [from, to] = filters ?? [null, null];
  if (from === null && to === null) return true;
  if (from !== null && to === null) return from <= value;
  if (from === null && to !== null) return value <= to;
  return from <= value && value <= to;
});

const DownloadPage=()=> {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        // For using custom filters, you must set FilterMatchMode.CUSTOM to matchMode.
        activity: { value: null, matchMode: FilterMatchMode.CUSTOM },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const representativeRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem' }}
            />
        );
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
    };

    const activityRowFilterTemplate = (options) => {
        const [from, to] = options.value ?? [null, null];

        return (
            <div className="flex gap-1">
                <InputNumber value={from} onChange={(e) => options.filterApplyCallback([e.value, to])} className="w-full" placeholder="from" />
                <InputNumber value={to} onChange={(e) => options.filterApplyCallback([from, e.value])} className="w-full" placeholder="to" />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
                <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
            </DataTable>
        </div>
    );
}
       
export default DownloadPage;
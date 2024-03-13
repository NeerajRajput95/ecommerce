// import React, { useState } from "react";
// import { MultiSelect } from 'primereact/multiselect';

// const MultipleSelect=()=> {
//     const [selectedCities, setSelectedCities] = useState(null);
//     const cities = [
//         { name: 'New York', code: 'NY' },
//         { name: 'Rome', code: 'RM' },
//         { name: 'London', code: 'LDN' },
//         { name: 'Istanbul', code: 'IST' },
//         { name: 'Paris', code: 'PRS' }
//     ];

//     return (
//         <div className="card flex justify-content-center">
//             <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
//                 filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
//         </div>
//     );
// }
// export default MultipleSelect;
import { useState } from "react";
import MultiSelectItem from "./MultiSelectItem";
import './MultiSelect.css'; // Import custom styles

const options = [
  { value: 0, label: "Goranboy" },
  { value: 1, label: "Safikurd" },
  { value: 2, label: "Baku" },
  { value: 3, label: "Ganja" },
  { value: 4, label: "Shusha" },
  { value: 5, label: "Agdam" },
];

const MultiSelect = () => {
  const [optionSelected, setSelected] = useState(null);
  const handleChange = (selected) => {
    setSelected(selected);
  };

  return (
    <div className="App">
      <h1>Select KPL</h1>
      <MultiSelectItem
        key="example_id"
        options={options}
        onChange={handleChange}
        value={optionSelected}
        isSelectAll={true}
        menuPlacement={"bottom"}
      />
    </div>
  );
}

export default MultiSelect;

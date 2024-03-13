import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectItem.css';

function SelectItem() {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

useEffect(() => {
    // Fetch states from API
    axios.get('https://34cc358e49cc4ab4a0e2ded1ee5a1564.api.mockbin.io/')
      .then(response => {
        setStates(response.data.states);
      })
      .catch(error => {
        if (error.response && error.response.status === 504) {
          // Handle 504 Gateway Timeout error
          console.error('504 Gateway Timeout Error:', error);
          // You can set a flag or state variable here to indicate the error
        } else {
          // Handle other errors
          console.error('Error fetching states:', error);
        }
      });
  }, []);
  
  useEffect(() => {
    if (selectedState) {
      axios.get(`https://2a083fdfd4fc4330977bb6a891eefd5b.api.mockbin.io/`)
        .then(response => {
          setDistricts(response.data.districts);
        })
        .catch(error => {
          console.error('Error fetching districts:', error);
        });
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div className='select'>
      <select id="states" value={selectedState} onChange={handleStateChange}>
        <option value="">Select Activity</option>
        {states.map(state => (
          <option key={state.id} value={state.id}>{state.name}</option>
        ))}
      </select>

      <select id="districts" value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">Select OEM</option>
        {districts.map(district => (
          <option key={district.id} value={district.id}>{district}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectItem;

// import React, { useState, useEffect } from 'react';

// function SelectItem() {
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');

//   // Sample JSON data for countries
//   const countriesData = [
//     { "id": "1", "country_name": "Country 1" },
//     { "id": "2", "country_name": "Country 2" },
//     { "id": "3", "country_name": "Country 3" }
//   ];

//   // Sample JSON data for districts
//   const districtsData = [
//     { "id": "1", "name": "District 1", "country_id": "1" },
//     { "id": "2", "name": "District 2", "country_id": "1" },
//     { "id": "3", "name": "District 3", "country_id": "2" },
//     { "id": "4", "name": "District 4", "country_id": "2" },
//     { "id": "5", "name": "District 5", "country_id": "3" }
//   ];

//   useEffect(() => {
//     // Set states with sample countries data
//     setStates(countriesData);
//   }, []);

//   useEffect(() => {
//     // Filter districts based on selected state
//     if (selectedState) {
//       const filteredDistricts = districtsData.filter(
//         district => district.country_id === selectedState
//       );
//       setDistricts(filteredDistricts);
//     } else {
//       setDistricts([]);
//     }
//   }, [selectedState]);

//   const handleStateChange = (event) => {
//     setSelectedState(event.target.value);
//   };

//   const handleDistrictChange = (event) => {
//     setSelectedDistrict(event.target.value);
//   };

//   return (
//     <div className='select'>
//       <select id="states" value={selectedState} onChange={handleStateChange}>
//         <option value="">Select Activity</option>
//         {states.map(state => (
//           <option key={state.id} value={state.id}>{state.country_name}</option>
//         ))}
//       </select>

//       <select id="districts" value={selectedDistrict} onChange={handleDistrictChange}>
//         <option value="">Select OEM</option>
//         {districts.map(district => (
//           <option key={district.id} value={district.id}>{district.name}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default SelectItem;



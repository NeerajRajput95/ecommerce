import React from 'react'
import Header from './Header'
import SelectItem from './SelectItem'
import FileUpload from './FileUpload'
import './Home.css'
import MultiSelect from './Mutipleselect/MultipleSelect'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Sidebar from './Sidebar/Sidebar'

function Home() {
  return (
    <div className=''>
      <Header/>
      <Sidebar/>
      <div className='midSection'>
        <div className='select'>
      <SelectItem/>
      <PrimeReactProvider>
      <MultiSelect/>
      </PrimeReactProvider>
     
      </div>
      <div className='fileupload'> 
      <FileUpload/>
       </div>
      </div>
    </div>
  )
}

export default Home

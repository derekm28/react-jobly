import React, { useState } from 'react';


/**Search field
 *
 * Appears on CompanyList on Job List so they can be filtered
 *
 * Doesnt to the searching but renders the search
 *form and calls the 'searchFor' function prop that runs in a parent
 to do the searching.

 { CompanyList, JobList } --> SearchForms
 *
 */

 function SearchForm ({ searchFor }){
     console.debug('SearchForm', 'searchFor=', typeof searchFor);

     const [searchTerm, setSearchTerm] = useState('');

     /**Tell parent to filter */
     function handleSubmit(evt){
         //take care of accidently trying to search for just spaces
         evt.preventDefault();
         searchFor(searchTerm.trim() || undefined);
         setSearchTerm(searchTerm.trim());
     }

     /**Update form fields */
     function handleChange(evt){
         setSearchTerm(evt.target.value);
     }

     return (
         <div className='SearchForm mb-4'>
             <form className='form-inline' onSubmit={handleSubmit}>
                 <input className='form-control form-control-lg flex-grow-1'
                 name='searchTerm'
                 placeholder='Enter search term..'
                value={searchTerm}
                onChange={handleChange}
                />
                <button type='submit' className='btn btn-lg btn-primary'>Submit</button>
             </form>
         </div>
     );
 }

 export default SearchForm;

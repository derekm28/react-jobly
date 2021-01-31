import React, { useEffect, useState } from 'react';
import JoblyApi from './api';
import LoadingSpinner from './LoadingSpinner';
import Search from './SearchForm';
import JobCardList from './JobCardList';

//Shows list of jobs
//loads jobs from api
//reloads filtered jobs on submit from search form
//Joblist --> JobCardList
//this is routed at /jobs

function JobList (){
    console.debug('JobList');

    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobsOnMount(){
        console.debug('JobList useEffect getAllJobsOnMount');
        search();
    }, []);

    //Triggered by search form submit; reloads jobs
    async function search(title){
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if(!jobs) return <LoadingSpinner />;

    return(
        <div className = 'JobList col-md-8 offset-md-2'>
            <Search searchFor={search} />
            {jobs.length
                ? <JobCardList jobs = {jobs} />
                : <p className='lead'>Sorry, no results were found</p>
            }
        </div>
    );
}

export default JobList;

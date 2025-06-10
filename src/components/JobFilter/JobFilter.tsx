import React, { useState, useEffect } from 'react';
import jobsData from '../../data/jobs.json';
import {
  Wrapper,
  FilterLabel,     
  FilterSelect,
  FilterRow,
  JobList,
  JobItem,
  JobTitle,
  JobInfo,
} from './JobFilter.styles';

interface Job {
  id: number;
  title: string;
  salary: string;
  location: string;
  experience: string;
}

const mockJobs: Job[] = jobsData;

const JobFilter: React.FC = () => {
  const [filter, setFilter] = useState<string>('Любой');
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);

  useEffect(() => {
    setFilteredJobs(
      filter === 'Любой'
        ? mockJobs
        : mockJobs.filter(job => job.experience === filter)
    );
  }, [filter]);

  return (
    <Wrapper>
      <h1>Вакансии</h1>

      <FilterRow>
        <FilterLabel htmlFor="experience-filter">
        Фильтр по опыту:
      </FilterLabel>
      <FilterSelect
        id="experience-filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option>Любой</option>
        <option>1–3 года</option>
        <option>3–5 лет</option>
        <option>5+ лет</option>
      </FilterSelect>
      </FilterRow>
      

      <JobList>
        {filteredJobs.map(job => (
          <JobItem key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <JobInfo>
              <span>Зарплата:</span> {job.salary}
            </JobInfo>
            <JobInfo>
              <span>Локация:</span> {job.location}
            </JobInfo>
            <JobInfo>
              <span>Опыт:</span> {job.experience}
            </JobInfo>
          </JobItem>
        ))}
      </JobList>
    </Wrapper>
  );
};

export default JobFilter;

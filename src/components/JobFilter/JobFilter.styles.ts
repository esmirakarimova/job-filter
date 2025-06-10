import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div`
  font-family: 'Segoe UI', Tahoma, sans-serif;
  width: 90%;
  max-width: 1200px;
  min-height: 100vh;
  padding: 32px;
  margin: 0 auto;

  h1 {
   
  }

  h1 {
   text-align: center;
    margin-bottom: 24px;
    color: #fff;
  font-size: clamp(
    1.75rem,  
    5vw,      
    3.75rem 
  );
}

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 24px;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const FilterSelect = styled.select`
  width: 150px;
  max-width: 100%;
  padding: 10px 20px;
  padding-right: 40px;
  font-size: 16px;
  margin: 0;
  display: block;
  border-radius: 6px;
  border: 1px solid #ccc;

  background-color: #fff;
  background-image: url('/src/assets/icons/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 12px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(151, 174, 211, 0.4);
  }

  option {
    background-color: #fff;
    color: #293244;
  }

  option:hover {
    background-color: #eef2f5;
  }
`;

export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
`;

export const JobItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.4s ease-out;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const JobTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 20px;
  color: #293244;
`;


export const JobInfo = styled.p`
  margin: 6px 0;
  font-size: 14px;
  color: #293244;

  span {
    display: inline-block;
    margin-right: 6px;
    padding: 4px 8px;
    border-radius: 5px;
    background-color: #edf2f5;
    font-weight: 500;
    color: #333;

    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;

    white-space: nowrap;
  }
`;

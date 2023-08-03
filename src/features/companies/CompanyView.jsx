import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { companyFetch } from './companySlice'


function CompanyView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companyFetch());
  }, [dispatch]);

  const companyData = useSelector((state) => state.company);

  return (
    <div>
      <h2>Guest Speakers</h2>
      {companyData.loading && <div>Loading...</div>}
      {!companyData.loading && companyData.error ? (
        <div>{companyData.error}</div>
      ) : null}
      {!companyData.loading && companyData.company.length ? (
        <div id="bioBox">
          {companyData.company.map((user) => (
            <div id="bioCard">
              <h3>At a Glance:</h3>
              <div id="bioInfo">{`${user.name} is from ${user.company.name} and is involved in ${user.company.catchPhrase}.`}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CompanyView
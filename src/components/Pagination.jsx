
import PropTypes from 'prop-types';
import React from 'react';

export const Pagination = React.memo(({ page, setPage}) => {
  return (
    <div className="pagination container">
        <button onClick={()=> {
            if( page === 1) return
            setPage( page -6)
          }}>{'<'}</button>
            <p>{page} al {page +6}</p>
        <button onClick={()=>setPage(page +6)}>{'>'}</button>
    </div>
  )
})

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,


}
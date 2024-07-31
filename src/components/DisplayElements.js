import React from 'react';
import Display from './Display';

export default function DisplayElements({
  nasaData,
  openModal,
  updateModalItem,
}) {
  return (
    <>
      {nasaData.map((el, i) => (
        <Display
          key={i}
          copyright={el?.copyright}
          date={el?.date}
          el={el}
          explanation={el?.explanation}
          hdurl={el?.hdurl}
          media_type={el?.media_type}
          service_version={el?.service_version}
          title={el?.title}
          url={el?.url}
          open={openModal}
          update={updateModalItem}
        />
      ))}
    </>
  );
}

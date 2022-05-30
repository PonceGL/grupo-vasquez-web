import React from "react";

// Data
import companies from "../../../data/companies.json";

import Company from "./Company";

const Companies = () => {
  if (!companies) {
    return null;
  }

  return (
    <section className="w-screen relative overflow-hidden xl:h-[101vh]">
      <p className="bg-[#E7E7E7] hidden">E7E7E7</p>
      <p className="bg-[#FFFFFF] hidden">FFFFFF</p>
      <p className="bg-[#c4eaff] hidden">c4eaff</p>
      <p className="bg-[#FAF9F5] hidden">FAF9F5</p>
      <p className="bg-[#ffe9d5] hidden">ffe9d5</p>
      <p className="bg-[#f0f8ff] hidden">f0f8ff</p>

      <div className="horizontal-container">
        <div
          className="slide"
          style={{
            gridTemplateColumns: `repeat(${companies.length}, 85vw)`,
          }}
          id="companies-container"
        >
          {companies.length > 0 && (
            <>
              {companies.map((company) => (
                <Company key={company.name} {...company} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Companies;

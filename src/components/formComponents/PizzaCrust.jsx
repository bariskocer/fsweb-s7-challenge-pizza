import React from "react";

const PizzaCrust = ({selectedCrust, onCrustChange}) => {
  return (
    <div className="p-4 flex flex-col w-full">
        <h3 className="text-[20px] font-bold py-2">Hamur Seç</h3>
      <select  className="border border-gray-950 " name="crust" value={selectedCrust} onChange={onCrustChange}>
        <option  value="">Hamur Kalınlığı</option>
        <option value="thin">İnce</option>
        <option value="thick">Kalın</option>
      </select>
    </div>
  );
};

export default PizzaCrust;

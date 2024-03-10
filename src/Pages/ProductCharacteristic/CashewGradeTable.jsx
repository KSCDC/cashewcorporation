import React from 'react';

const CashewGradeTable = ({ gradeData }) => {
  return (
    <div className="mx-auto mt-4 ">
      <h2 className="text-xl font-bold mb-4">{gradeData.title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-collapse">
          <thead>
            <tr className="bg-red-400 text-white">
              {gradeData.headers.map((header, index) => (
                <th key={index} className="border p-3">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gradeData.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-red-200' : 'bg-red-100'}`}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-red-400 text-white">
              <td colSpan={gradeData.headers.length} className="border p-3">
                <p className="text-sm">{gradeData.remark}</p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CashewGradeTable;

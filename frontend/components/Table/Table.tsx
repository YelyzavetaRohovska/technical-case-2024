const inputLengthLimit = 40;

export type TableData = {
  headers: string[];
  rows: (string | number)[][];
}

type TableProps = {
  data: TableData;
  serachOptions?: {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
  }
}

export const Table = ({
  data,
  serachOptions,
}: TableProps) => {
  return (
    <div className="overflow-x-auto rounded-md">
      { serachOptions && <div className="py-6">
          <input 
            value={serachOptions.value}
            className="mt-1 block w-full px-3 py-2 text-slate-700 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-700"
            maxLength={inputLengthLimit}
            placeholder={serachOptions.placeholder}
            onChange={e => serachOptions?.onChange(e.target.value)} />
        </div>
      }
      { data.rows?.length ?
        (<table className="min-w-full divide-y rounded-md divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              { data.headers.map((title, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >{title}</th>)) }
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            { data.rows.map((values, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                { values.map((v, i) => (
                  <td 
                    key={i} 
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>)
      : 
        (<div>No items found :(</div>)
      }
    </div>
  );
};
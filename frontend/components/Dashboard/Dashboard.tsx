import { useCallback, useEffect, useState } from 'react';

import { Table, TableData } from '../Table';
import { ECategory, Report, User, UserActivity } from '@/models/types';
import { debounce } from '@/utils/debounce';

const serachDebounce = debounce((cb: () => void) => cb(), 1000);
const getUsersUrl = (name: string) => `http://localhost:8000/report/userTotalScore?name=${encodeURIComponent(name)}`;

export const Dashboard = () => {
  const [userReport, setUserReport] = useState<Report>({});
  const [searchText, setSearchText] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    serachDebounce(() => {
      fetch(getUsersUrl(searchText))
        .then(res => res.json())
        .then(setUserReport)
        .catch(console.log);
    });
  }, [searchText, update]);

  const addRandomUser = useCallback(() => {
    // Mocked data
    const userData: Omit<UserActivity, 'id'> = {
      userId: Math.floor(Math.random() * 4) + 1,
      activityId: Math.floor(Math.random() * 3) + 1,
      timestamp: new Date(),
    }

    fetch(`http://localhost:8000/users/activity`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(() => setUpdate(prevState => !prevState))
      .catch(console.log);
  }, []);

  return (
    <div className="container">
      <Table 
        data={formatReportToTableData(userReport)}
        serachOptions={{
          value: searchText, 
          placeholder: "Search by name...",
          onChange: setSearchText,
        }}
      />
      <button
        className="text-white bg-zinc-700 border-gray-400 text-lg p-2 mt-4 rounded-md hover:bg-zinc-600 hover:border-slate-500  active:bg-zinc-500 active:border-slate-400"
        onClick={addRandomUser}
      >Add random User</button>
    </div>
  );
};

function formatReportToTableData(report: Report): TableData {
  const headers = ["User name", "total score", ECategory.sale, ECategory.meeting, ECategory.valuation];
  const rows = Object.values(report).map(r => ([
    r.userName, 
    r.totalScore, 
    r.activities[ECategory.sale],
    r.activities[ECategory.meeting],
    r.activities[ECategory.valuation],
  ]));

  return {
    headers,
    rows,
  };
}


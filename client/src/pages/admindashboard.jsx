import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function AdminDashboard() {
  const { userId } = useParams();
  const location = useLocation();
  const { name, position, email } = location.state || {};

  // Function to get today's date
  const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // 01-12
    const dd = String(today.getDate()).padStart(2, '0'); // 01-31
    return {
      formatted: `${parseInt(mm)}/${parseInt(dd)}/${yyyy}`, // for filtering
      input: `${yyyy}-${mm}-${dd}` // for input value
    };
  };

  const today = getToday();

  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dateFilter, setDateFilter] = useState(today.formatted);
  const [dateInputValue, setDateInputValue] = useState(today.input);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://test-vercel-neon-six.vercel.app/api/activity/getallactivity/${userId}`);
        const data = await res.json();
        if (res.ok) {
          setRawData(data.infoo);
        } else {
          setRawData([]);
        }
      } catch (err) {
        console.error('Error fetching activity data:', err);
        setRawData([]);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    let result = rawData;
    if (dateFilter.trim()) {
      result = result.filter(item => item.timestamp.includes(dateFilter.trim()));
    }
    setFilteredData(result);
  }, [dateFilter, rawData]);

  const getAppUsageSummary = () => {
    const appUsage = {};

    filteredData.forEach(log => {
      const app = log.appName || log.title;
      if (!app) return;
      if (!appUsage[app]) {
        appUsage[app] = {
          name: app,
          timestamps: [],
          totalDurationMs: 0,
        };
      }
      appUsage[app].timestamps.push({ type: log.type, time: new Date(log.timestamp) });
    });

    Object.values(appUsage).forEach(app => {
      app.timestamps.sort((a, b) => a.time - b.time);
      for (let i = 0; i < app.timestamps.length - 1; i++) {
        if (
          app.timestamps[i].type === 'app-opened' &&
          app.timestamps[i + 1].type === 'app-closed'
        ) {
          app.totalDurationMs += app.timestamps[i + 1].time - app.timestamps[i].time;
        }
      }
    });

    return Object.values(appUsage);
  };

  const formatDuration = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const getUsageLevel = (minutes) => {
    if (minutes > 180) return 'high';
    if (minutes > 60) return 'medium';
    if (minutes > 5) return 'low';
    return 'verylow';
  };

  const usageData = getAppUsageSummary();

  const usageGroups = {
    high: [],
    medium: [],
    low: [],
    verylow: [],
  };

  usageData.forEach(app => {
    const minutes = app.totalDurationMs / 60000;
    const level = getUsageLevel(minutes);
    usageGroups[level].push({ ...app, minutes });
  });

  const cardStyle = {
    high: 'bg-gradient-to-br from-[#01081c]/80 to-[#58001b]/60',
    medium: 'bg-green-700',
    low: 'bg-green-300',
    verylow: 'bg-purple-600',
  };

  return (
    <div className="min-h-screen text-white p-6" style={{
      background: "radial-gradient(circle at center, #3b82f6, #1e3a8a,#010105)"
    }}>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* 👤 Employee Info */}
      {name && position && email && (
        <div className="mb-6 bg-[#01081c] bg-opacity-40 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-1">Tracking: {name}</h2>
          <p className="text-sm"><strong>Position:</strong> {position}</p>
          <p className="text-sm"><strong>Email:</strong> {email}</p>
        </div>
      )}

      {/* 🔍 Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="date"
          value={dateInputValue}
          className="bg-gray-800 border border-gray-600 text-white p-2 rounded"
          onChange={(e) => {
            setDateInputValue(e.target.value);
            const [yyyy, mm, dd] = e.target.value.split("-");
            const formatted = `${parseInt(mm)}/${parseInt(dd)}/${yyyy}`;
            setDateFilter(formatted);
          }}
        />
      </div>

      {/* 📊 Usage Cards */}
      {['high', 'medium', 'low'].map(level => (
        usageGroups[level].length > 0 && (
          <div key={level} className="mb-8">
            <h2 className="text-xl font-semibold mb-3 capitalize">{level} Usage</h2>
            <div className="flex overflow-x-auto space-x-4 pb-2">
              {usageGroups[level].map(app => (
                <div
                  key={app.name}
                  className={`min-w-[250px] p-4 rounded-lg shadow ${cardStyle[level]} flex-shrink-0`}
                >
                  <h3 className="text-lg font-bold">{app.name}</h3>
                  <p className="mt-2 text-sm">{formatDuration(app.totalDurationMs)}</p>
                </div>
              ))}
            </div>
          </div>
        )
      ))}

      {/* 🟣 Very Low Usage Table */}
      {usageGroups.verylow.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Very Low Usage</h2>
          <div className="overflow-x-auto h-[400px] scrollbar-none">
            <table className="w-full text-white bg-[#01081c] bg-opacity-50 rounded-lg">
              <thead>
                <tr className="bg-[#161569] bg-opacity-20">
                  <th className="text-left p-2">App/File Name</th>
                  <th className="text-left p-2">Usage Time</th>
                </tr>
              </thead>
              <tbody>
                {usageGroups.verylow.map(app => (
                  <tr key={app.name} className="border-t border-[#01081c] border-opacity-30">
                    <td className="p-2 max-w-96 break-words">{app.name}</td>
                    <td className="p-2 w-40 break-words text-left">{formatDuration(app.totalDurationMs)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      
    </div>
  );
}

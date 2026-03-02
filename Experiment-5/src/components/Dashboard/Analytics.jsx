import { useContext, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../redux/slices/analyticsSlice';
import { AppContext } from '../../context/AppContext';

const Analytics = () => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.analytics.tasks);
  const totalTasks = useSelector(state => state.analytics.totalTasks);
  const completedCount = useSelector(state => state.analytics.completedCount);

  // useMemo for derived data optimization
  const analytics = useMemo(() => {
    return {
      completed: completedCount,
      pending: totalTasks - completedCount,
      completionRate: ((completedCount / totalTasks) * 100).toFixed(1),
    };
  }, [completedCount, totalTasks]);

  const bgColor = theme === 'light' ? '#fff' : '#2d2d2d';
  const textColor = theme === 'light' ? '#212529' : '#f8f9fa';

  return (
    <div className="container-fluid py-5">
      <h1 className="mb-4">📊 Analytics Dashboard</h1>

      {/* Stats Cards */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div
            className="card"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: 'none',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h5>Total Tasks</h5>
            <h2 style={{ color: '#667eea', marginTop: '10px' }}>
              {totalTasks}
            </h2>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: 'none',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h5>Completed</h5>
            <h2 style={{ color: '#28a745', marginTop: '10px' }}>
              {analytics.completed}
            </h2>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: 'none',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h5>Completion Rate</h5>
            <h2 style={{ color: '#ffc107', marginTop: '10px' }}>
              {analytics.completionRate}%
            </h2>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div
        className="card"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          border: 'none',
          borderRadius: '12px',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">📋 Task List</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr style={{ borderColor: theme === 'light' ? '#dee2e6' : '#495057' }}>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr
                    key={task.id}
                    style={{ borderColor: theme === 'light' ? '#dee2e6' : '#495057' }}
                  >
                    <td>{task.title}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          backgroundColor:
                            task.status === 'completed' ? '#28a745' : '#ffc107',
                        }}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => dispatch(toggleTask(task.id))}
                      >
                        Toggle
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => dispatch(deleteTask(task.id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

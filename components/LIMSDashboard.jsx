import React, { useState, useEffect, useRef } from 'react';

const LIMSDataDashboard = () => {
  // State to hold the parsed CSV data
  const [data, setData] = useState([]);
  // State to hold the CSV headers
  const [headers, setHeaders] = useState([]);
  // State for notification messages
  const [notification, setNotification] = useState({ message: '', type: '' });
  // Ref for the file input element
  const fileInputRef = useRef(null);

  // Default LIMS-like data for demonstration
  const defaultLIMSData = `SampleID,TestName,Result,Unit,Date,Status
S001,pH,7.2,pH,2023-01-10,Passed
S002,Temperature,25.1,°C,2023-01-10,Passed
S003,Purity,99.5,%,2023-01-11,Passed
S004,pH,6.8,pH,2023-01-11,Failed
S005,Viscosity,120,cP,2023-01-12,Passed
S006,Temperature,24.8,°C,2023-01-12,Passed
S007,Purity,98.1,%,2023-01-13,Failed
S008,pH,7.0,pH,2023-01-13,Passed
S009,Viscosity,115,cP,2023-01-14,Passed
S010,Temperature,26.0,°C,2023-01-14,Failed
`;

  // Function to show a notification
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 3000); // Hide after 3 seconds
  };

  // Function to parse CSV data
  const parseCSV = (csvText) => {
    const lines = csvText.trim().split('\n');
    if (lines.length === 0) {
      showNotification('CSV file is empty.', 'error');
      return { headers: [], rows: [] };
    }

    const parsedHeaders = lines[0].split(',').map(h => h.trim());
    const parsedRows = lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      const rowObject = {};
      parsedHeaders.forEach((header, index) => {
        rowObject[header] = values[index];
      });
      return rowObject;
    });

    return { headers: parsedHeaders, rows: parsedRows };
  };

  // Load default data on component mount
  useEffect(() => {
    const { headers: defaultHeaders, rows: defaultRows } = parseCSV(defaultLIMSData);
    setHeaders(defaultHeaders);
    setData(defaultRows);
    showNotification('Default LIMS data loaded!', 'success');
  }, []); // Empty dependency array means this runs once on mount

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    if (file.type !== 'text/csv') {
      showNotification('Please upload a CSV file.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const { headers: newHeaders, rows: newRows } = parseCSV(text);
        if (newRows.length > 0) {
          setHeaders(newHeaders);
          setData(newRows);
          showNotification('CSV data loaded successfully!', 'success');
        } else {
          showNotification('No valid data found in CSV.', 'warning');
        }
      } catch (error) {
        console.error("Error processing file:", error);
        showNotification('Error processing CSV file.', 'error');
      }
    };
    reader.onerror = () => {
      showNotification('Failed to read file.', 'error');
    };
    reader.readAsText(file);
  };

  // Styles for the dashboard
  const styles = {
    container: {
      backgroundColor: '#1E1E1E', // Dark background for the whole dashboard
      color: '#D4D4D4',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '"JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      borderRadius: '8px',
      boxShadow: '0 5px 25px rgba(0,0,0,0.7)',
      maxWidth: '1200px',
      margin: '20px auto',
      overflowX: 'hidden', // Prevent horizontal scroll on overall container
    },
    header: {
      fontSize: '2.5rem',
      color: '#61AFEF', // Blue for main header
      marginBottom: '10px',
      textShadow: '0 0 8px rgba(97, 175, 239, 0.3)',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#ABB2BF',
      marginBottom: '20px',
      textAlign: 'center',
    },
    uploadSection: {
      backgroundColor: '#282C34', // Darker section background
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      width: '100%',
      maxWidth: '500px',
    },
    fileInputLabel: {
      backgroundColor: '#3E4451',
      color: '#D4D4D4',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
      border: '1px solid #4B5263',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    fileInputLabelHover: {
      backgroundColor: '#4B5263',
      borderColor: '#636D81',
    },
    fileInput: {
      display: 'none',
    },
    notificationContainer: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      minWidth: '250px',
      padding: '10px 15px',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      textAlign: 'center',
      transition: 'opacity 0.5s ease-in-out',
      opacity: notification.message ? 1 : 0,
      backgroundColor: notification.type === 'success' ? '#4CAF50' :
                        notification.type === 'error' ? '#F44336' :
                        notification.type === 'warning' ? '#FFC107' : '#282C34',
      color: notification.type === 'warning' ? '#333' : '#FFF',
    },
    dataDisplaySection: {
      backgroundColor: '#282C34',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
      width: '100%',
      overflowX: 'auto', // Allow horizontal scroll for table
    },
    dataTable: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '600px', // Ensure table doesn't shrink too much
    },
    tableHeader: {
      backgroundColor: '#3E4451',
      color: '#D4D4D4',
      padding: '12px 15px',
      textAlign: 'left',
      borderBottom: '1px solid #4B5263',
    },
    // The base style for a table row (no pseudo-selectors here)
    tableRowBase: {
      borderBottom: '1px solid #3E4451',
    },
    tableRowEven: {
      backgroundColor: '#21252B', // Alternate row color for even rows
    },
    tableRowHover: {
      backgroundColor: '#3A3F4B', // Hover effect color
    },
    tableCell: {
      padding: '10px 15px',
      color: '#ABB2BF',
      fontSize: '0.9rem',
    },
    // Chart placeholder styles
    chartSection: {
      backgroundColor: '#282C34',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
      width: '100%',
      height: '300px', // Fixed height for charts
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#5C6370', // Muted text for placeholder
      fontSize: '1.2rem',
      border: '1px dashed #3E4451',
    },
    footer: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '20px',
      color: '#5C6370',
      fontSize: '0.8rem',
    },
    // Responsive adjustments
    '@media (max-width: 768px)': {
      container: {
        padding: '15px',
        margin: '10px auto',
      },
      header: {
        fontSize: '2rem',
      },
      subtitle: {
        fontSize: '0.95rem',
      },
      uploadSection: {
        padding: '15px',
      },
      fileInputLabel: {
        padding: '8px 15px',
        fontSize: '0.9rem',
      },
      dataDisplaySection: {
        padding: '15px',
      },
      tableHeader: {
        padding: '10px 12px',
        fontSize: '0.8rem',
      },
      tableCell: {
        padding: '8px 12px',
        fontSize: '0.8rem',
      },
      chartSection: {
        height: '250px',
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Notification Area */}
      <div style={styles.notificationContainer}>
        {notification.message}
      </div>

      <h1 style={styles.header}>LIMS Data Dashboard</h1>
      <p style={styles.subtitle}>
        Upload your CSV data to visualize and gain insights, with a coder's touch.
      </p>

      {/* File Upload Section */}
      <section style={styles.uploadSection}>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          style={styles.fileInput}
          id="csv-upload-input"
          ref={fileInputRef}
        />
        <label
          htmlFor="csv-upload-input"
          style={styles.fileInputLabel}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = styles.fileInputLabelHover.backgroundColor;
            e.currentTarget.style.borderColor = styles.fileInputLabelHover.borderColor;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = styles.fileInputLabel.backgroundColor;
            e.currentTarget.style.borderColor = styles.fileInputLabel.border;
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
          </svg>
          Upload CSV File
        </label>
        <button
          style={styles.fileInputLabel} // Reusing button style for consistency
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = styles.fileInputLabelHover.backgroundColor;
            e.currentTarget.style.borderColor = styles.fileInputLabelHover.borderColor;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = styles.fileInputLabel.backgroundColor;
            e.currentTarget.style.borderColor = styles.fileInputLabel.border;
          }}
          onClick={() => {
            // Simulate a file selection with default data for the "Load Default Data" button
            // Create a Blob to simulate a file object
            const defaultFile = new Blob([defaultLIMSData], { type: 'text/csv' });
            defaultFile.name = 'default_lims_data.csv';

            // Create a DataTransfer object and add the file to it
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(defaultFile);

            // Create a new FileList from the DataTransfer object
            const fileList = dataTransfer.files;

            // Create a synthetic event
            const syntheticEvent = {
                target: {
                    files: fileList,
                },
            };
            handleFileUpload(syntheticEvent);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
          </svg>
          Load Default Data
        </button>
      </section>

      {/* Data Table Display */}
      {data.length > 0 && (
        <section style={styles.dataDisplaySection}>
          <h2 style={{ ...styles.sectionTitle, color: '#C678DD' }}>Raw Data View</h2>
          <table style={styles.dataTable}>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} style={styles.tableHeader}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  // Apply base row style
                  style={{
                    ...styles.tableRowBase,
                    // Apply even row background conditionally
                    ...(rowIndex % 2 === 0 ? styles.tableRowEven : {}),
                  }}
                  // Hover effects using onMouseOver and onMouseOut
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor;
                  }}
                  onMouseOut={(e) => {
                    // Reset to original background color
                    e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 ?
                                                            styles.tableRowEven.backgroundColor :
                                                            styles.tableRowBase.backgroundColor;
                  }}
                >
                  {headers.map((header, colIndex) => (
                    <td key={colIndex} style={styles.tableCell}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Chart Visualization Section (Placeholder) */}
      <section style={styles.chartSection}>
        <h2 style={{ ...styles.sectionTitle, color: '#98C379' }}>Charts & Visualizations (Coming Soon!)</h2>
        <p>This section will feature interactive charts generated from your data.</p>
      </section>

      <footer style={styles.footer}>
        Built with React and a passion for LIMS data.
      </footer>
    </div>
  );
};

export default LIMSDataDashboard;

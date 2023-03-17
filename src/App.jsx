import { useState } from 'react'
import './App.css'

import { Button, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Vehicle ID',
    dataIndex: 'vehicleId',
    key: 'vehicleId',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.vehicleId - b.vehicleId
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.type - b.type
  },
  {
    title: 'Lock/Unlock',
    dataIndex: 'lock',
    key: 'lock',
    sorter: (a, b) => a.lock - b.lock
  },
  {
    title: 'Current Speed',
    key: 'currentSpeed',
    dataIndex: 'currentSpeed',
    sorter: (a, b) => a.currentSpeed - b.currentSpeed
  },
  {
    title: 'Battery Level',
    key: 'batteryLevel',
    dataIndex: 'batteryLevel',
    sorter: (a, b) => a.batteryLevel - b.batteryLevel
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    sorter: (a, b) => a.status - b.status
  },
  {
    title: 'Location',
    key: 'location',
    dataIndex: 'location',
    sorter: (a, b) => a.location - b.location
  },
  {
    title: 'Last Updated',
    key: 'lastUpdated',
    dataIndex: 'lastUpdated',
    sorter: (a, b) => a.lastUpdated - b.lastUpdated
  }
];
const data = [
  {
    No: '1',
    vehicleId: '132456',
    type: 'Scooter',
    lock: 'Lock',
    currentSpeed: '0 km/h',
    batteryLevel: '100%',
    status: 'PARKING',
    location: '3.142,012',
    lastUpdated: '2019-07-02 9.00AM'
  },
  {
    No: '2',
    vehicleId: '987654',
    type: 'Scooter',
    lock: 'Unlock',
    currentSpeed: '5 km/h',
    batteryLevel: '75%',
    status: 'MOVING',
    location: '2.125,114',
    lastUpdated: '2019-07-02 10.00AM'
  },
  {
    No: '3',
    vehicleId: '569825',
    type: 'Scooter',
    lock: 'Unlock',
    currentSpeed: '0 km/h',
    batteryLevel: '50%',
    status: 'IDLING',
    location: '4.125,114',
    lastUpdated: '2019-07-02 10.00AM'
  },
  {
    No: '4',
    vehicleId: '125864',
    type: 'Scooter',
    lock: 'Lock',
    currentSpeed: '0 km/h',
    batteryLevel: '15%',
    status: 'TOWING',
    location: '5.125,114',
    lastUpdated: '2019-07-02 10.00AM'
  },
  {
    No: '5',
    vehicleId: '125864',
    type: 'Scooter',
    lock: 'Lock',
    currentSpeed: '0 km/h',
    batteryLevel: '0%',
    status: 'TOWING',
    location: '5.125,114',
    lastUpdated: '2019-07-02 10.00AM'
  }
];

function App() {
  return (
    <div className="App">
      <div style={{ background: "#7adeae", padding: '5px', fontSize: '18px', color: "#5c7569", textAlign: 'center' }}>
        <p>Vehicle Management</p>
      </div>
      <Button type="primary" style={{ background: "#7adeae", float: 'right', margin: '1rem 0rem', color: "#5c7569" }}>+ New Vehicle</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default App

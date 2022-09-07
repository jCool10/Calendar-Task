import './Calendar.css';
import { Tabs } from 'antd';
import React from 'react';
import TaskList from '../TaskList/TaskList';
import Tab from '../Tab/Tab';

const { TabPane } = Tabs;

const Calendars = () => {
  const arrTime = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

  const renderArrDates = () => {
    return arrTime.map((number) => {
      var newDate = new Date();
      newDate.setDate(newDate.getDate() + number);

      var resDate = {
        date: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear(),
        day: newDate.getDay(),
      };

      return (
        <TabPane tab={<Tab resDate={resDate} />} key={number}>
          <TaskList resDate={resDate} />
        </TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="0"
        tabPosition={'left'}
        style={{ height: '75vh', boxShadow: '0px 4px 24px rgba(168, 168, 168, 0.25)', borderRadius: '35px' }}
      >
        {renderArrDates()}
      </Tabs>
    </div>
  );
};

export default Calendars;

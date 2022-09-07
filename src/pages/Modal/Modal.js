import { Button, Modal, Input, Select, Tag } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { PlusCircleOutlined } from '@ant-design/icons';
import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import moment from 'moment';
import { addTaskAction } from '../../redux/actions/actions';

const { Option } = Select;

const PopupModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('High');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddTask = () => {
    dispatch(
      addTaskAction({
        id: uuidv4(),
        title,
        priority,
        completed: false,
        timeStart: moment(timeStart).format('HH:mm'),
        timeEnd: moment(timeEnd).format('HH:mm'),
        date: {
          day: moment(date).format('DD'),
          month: moment(date).format('MM'),
          year: moment(date).format('YYYY'),
        },
      }),
    );
    setPriority('High');
    setTitle('');
    setTimeStart();
    setTimeEnd();
    setDate(new Date());
    handleCancel();
  };

  return (
    <>
      <button
        className="absolute bottom-[50px] right-[20px]"
        onClick={() => {
          showModal();
        }}
      >
        <PlusCircleOutlined className="text-[50px]" />
      </button>
      <Modal
        title="Add New Task"
        visible={isModalVisible}
        onCancel={handleCancel}
        width={400}
        footer={[
          <Button key="submit" type="primary" onClick={handleAddTask}>
            ADD TASK
          </Button>,
        ]}
      >
        <Input.Group style={{ display: 'flex', marginBottom: '20px' }} compact>
          <Input
            size="large"
            placeholder="Enter your activity"
            prefix={<UnorderedListOutlined />}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />

          <Select
            size="large"
            value={priority}
            onChange={(value) => {
              setPriority(value);
            }}
          >
            <Option value="High">
              <Tag color="red">High</Tag>
            </Option>
            <Option value="Medium">
              <Tag color="blue">Medium</Tag>
            </Option>
            <Option value="Low">
              <Tag color="gray">Low</Tag>
            </Option>
          </Select>
        </Input.Group>

        <Input.Group>
          <div className="grid grid-cols-2">
            <div className="col-span-1 mr-2">
              <TimePickerComponent
                placeholder="Select time start"
                value={timeStart}
                format="HH:mm"
                onChange={(e) => {
                  setTimeStart(e.target.value);
                }}
              ></TimePickerComponent>
            </div>
            <div className="col-span-1">
              <TimePickerComponent
                placeholder="Select time end"
                format="HH:mm"
                min={timeStart}
                value={timeEnd}
                onChange={(e) => {
                  setTimeEnd(e.target.value);
                }}
              ></TimePickerComponent>
            </div>
          </div>
        </Input.Group>
        <Input.Group>
          <DatePickerComponent
            placeholder="Select date"
            format="dd-MM-yyyy"
            value={date}
            onChange={(e) => {
              console.log(e.target.value);
              setDate(e.target.value);
            }}
          ></DatePickerComponent>
        </Input.Group>
      </Modal>
    </>
  );
};

export default PopupModal;

import { Button, message, Popconfirm, Spin, Table, Modal, Form, Input, Select } from 'antd';
import adminApi from 'apis/adminApi';
import React, { useEffect, useState } from 'react';

function CustomerList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const [form] = Form.useForm();

  const onDelCustomer = async (id) => {
    try {
      const response = await adminApi.delCustomer(id);
      if (response && response.status === 200) {
        message.success('Xoá tài khoản thành công');
        setData(data.filter((item) => item.id !== id));
      }
    } catch (error) {
      message.error('Xoá tài khoản thất bại');
    }
  };

  const showEditModal = (record) => {
    form.setFieldsValue({
      fullName: record.fullName,
      address: record.address,
      birthday: record.birthday,
      gender: record.gender ? 'Nam' : 'Nữ',
    });
    setEditedItem(record);
    setIsEditModalVisible(true);
  };

  const handleEditSubmit = async () => {
    try {
      const values = await form.validateFields();
      // Update the data with the edited values
      const updatedData = data.map((item) => {
        if (item._id === editedItem._id) {
          return { ...item, ...values };
        }
        return item;
      });
      setData(updatedData);
      setIsEditModalVisible(false);
      message.success('Cập nhật thành công');
    } catch (error) {
      message.error('Cập nhật thất bại');
    }
  };

  const columns = [
    {
      title: 'ID',
      key: 'id',
      dataIndex: '_id',
      render: (v) => <a>{v}</a>,
    },
    {
      title: 'Họ tên',
      key: 'fullName',
      dataIndex: 'fullName',
    },
    {
      title: 'Quê quán',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Ngày sinh',
      key: 'birthday',
      dataIndex: 'birthday',
    },
    {
      title: 'Giới tính',
      key: 'gender',
      dataIndex: 'gender',
      render: (gender) => (gender ? 'Nam' : 'Nữ'),
    },
    {
      title: 'Chỉnh sửa',
      render: (record) => (
        <Button type="primary" onClick={() => showEditModal(record)}>
          Chỉnh sửa
        </Button>
      ),
    },
    {
      title: '',
      render: (_v, records) => (
        <Popconfirm
          title="Bạn có chắc muốn xoá ?"
          placement="left"
          cancelText="Huỷ bỏ"
          okText="Xoá"
          onConfirm={() => onDelCustomer(records._id)}>
          <Button danger>Xoá</Button>
        </Popconfirm>
      ),
    },
  ];

  useEffect(() => {
    let isSubscribe = true;
    async function getCustomerList() {
      try {
        setIsLoading(true);
        const response = await adminApi.getCustomerList();
        if (isSubscribe && response) {
          const { list } = response.data;
          
          const newList = list.map((item, index) => {
            return {
              ...item, key: index 
            };
          });
          setData([...newList]);
          setIsLoading(false);
        }
      } catch (error) {
        if (isSubscribe) setIsLoading(false);
      }
    }
    getCustomerList();
    return () => {
      isSubscribe = false;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin className="trans-center" tip="Đang lấy danh sách ..." />
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ showLessItems: true, position: ['bottomCenter'] }}
          />

          <Modal
            title="Chỉnh sửa Khách hàng"
            visible={isEditModalVisible}
            onOk={handleEditSubmit}
            onCancel={() => setIsEditModalVisible(false)}
          >
            <Form form={form} layout="vertical">
              <Form.Item name="fullName" label="Họ tên">
                <Input />
              </Form.Item>
              <Form.Item name="address" label="Quê quán">
                <Input />
              </Form.Item>
              <Form.Item name="birthday" label="Ngày sinh">
                <Input />
              </Form.Item>
              <Form.Item name="gender" label="Giới tính">
                <Select>
                  <Select.Option value="Nam">Nam</Select.Option>
                  <Select.Option value="Nữ">Nữ</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Modal>
        </>
      )}
    </>
  );
}

export default CustomerList;
import React from "react";

import styles from "./index.module.scss";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "axios";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ContactUs: React.FC = () => {
  const [form] = Form.useForm();
  // 表单提交处理函数
  const onFinish = async (values: any) => {
    values.officialWebsiteName = "waveads";
    console.log("Received values of form: ", values);
    await axios
      .post(
        "https://test01-bop-front.tec-develop.cn/api/pac-foreign/officialwebsite/add",
        values
      )
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.contactUs} id="contact-us">
      <h1>Get in touch</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="submit"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "0 auto" }}
        scrollToFirstError
      >
        <Form.Item
          name="businessEmail"
          label="Business Email"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            {
              type: "email",
              message: "The input is not valid businessEmail!",
            },
            {
              required: true,
              message: "Please input your businessEmail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div className={styles.name}>
          <Form.Item
            name="firstName"
            label="First name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your first name!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last name"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your last name!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item
          name="country"
          label="Country / Region"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Please select country/region!" }]}
        >
          <Select placeholder="select your country/region">
            <Option value="China">China</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="describes"
          label="Which option best describes you?"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Please select option!" }]}
        >
          <Select placeholder="select your option">
            <Option value="Marketplace or Retailer interested in building a commerce media ads platform">
              Marketplace or Retailer interested in building a commerce media
              ads platform
            </Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="companyName"
          label="Company name"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Please input company name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="remark"
          label="Anything else?"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: false }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item
          {...tailFormItemLayout}
          wrapperCol={{ span: 24 }}
          style={{ textAlign: "center" }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            color="pink"
            variant="solid"
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;

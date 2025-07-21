import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";
import { Button, Checkbox, Form, Input, Select, notification } from "antd";
import axios from "axios";
import Footer from "../Footer";
import TabList from "../Tab";
{
  window.$t("");
}
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
  const [api, contextHolder] = notification.useNotification();
  const [countryList, setCountryList] = useState<any[]>([]);
  const [loading, setConfirmLoading] = useState(false);
  const message = [
    window.$t("submit successfully"),
    window.$t("Your information has been successfully submitted!"),
    window.$t("submit wrong"),
    window.$t("something went wrong"),
    window.$t("The input is not valid businessEmail!"),
    window.$t("Please input your businessEmail!"),
    window.$t("Please input your first name!"),
    window.$t("Please input your last name!"),
    window.$t("Please select country/region!"),
    window.$t("Please select option!"),
    window.$t("Please input company name!"),
    window.$t("Should accept agreement"),
  ];
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await axios.get(
        "https://test01-pac-gateway.tec-develop.cn/pac-foreign/officialwebsite/country/lsit"
      );
      setCountryList(res.data.data);
    };
    fetchCountries();
  }, []);

  const onFinish = async (values: any) => {
    values.officialWebsiteName = "waveads";
    setConfirmLoading(true);
    await axios
      .post(
        "https://test01-bop-front.tec-develop.cn/api/pac-foreign/officialwebsite/add",
        values
      )
      .then((res) => {
        if (res.data.code === 200) {
          setConfirmLoading(false);
          api.success({
            message: message[0],
            description: message[1],
            placement: "top",
          });
        } else {
          setConfirmLoading(false);
          api.error({
            message: message[2],
            description: message[3],
            placement: "top",
          });
        }
      })
      .catch(function () {
        setConfirmLoading(false);
        api.error({
          message: message[2],
          description: message[3],
          placement: "top",
        });
      });
  };
  const describes = [
    "Mobile App Advertiser interested in machine-learning advertising",
    "Marketplace or Retailer interested in building a commerce mediaads platform",
    "Ad Agencyinterested in agency partner program",
    "Publisher interested in SDK (priority list)",
    "Streaming company interested in a building a streaming ads server",
    "Other",
  ];
  return (
    <>
      <div style={{ color: "#ff638d" }}>
        {contextHolder}
        <TabList />
        <div className={styles.banner}>
          <h1>{window.$t("Get in touch")}</h1>
        </div>
        <div className={styles.contactUs} id="contact-us">
          <div
            style={{
              height: "10px",
              backgroundColor: "#ff638d",
              width: "800px",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          ></div>
          <Form
            {...formItemLayout}
            form={form}
            name="submit"
            onFinish={onFinish}
            style={{
              maxWidth: 800,
              margin: "0 auto",
              boxShadow: "0 14px 28px rgba(0, 0, 0, 0.1)",
              padding: "50px",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="businessEmail"
              label={window.$t("Business Email")}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  type: "email",
                  message: message[4],
                },
                {
                  required: true,
                  message: message[5],
                },
              ]}
            >
              <Input />
            </Form.Item>

            <div className={styles.name}>
              <Form.Item
                name="firstName"
                label={window.$t("First name")}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: message[6],
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="lastName"
                label={window.$t("Last name")}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: message[7],
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              name="country"
              label={window.$t("Country / Region")}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: message[8] }]}
            >
              <Select placeholder={window.$t("select your country/region")}>
                {countryList.map((country: any) => (
                  <Option key={country.code} value={country.code}>
                    {country.enTxt}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="describes"
              label={window.$t("Which solution are you interested in?")}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: message[9] }]}
            >
              <Select placeholder={window.$t("select your option")}>
                {describes.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="companyName"
              label={window.$t("Company name")}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: message[10] }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="remark"
              label={window.$t("Anything else?")}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: false }]}
            >
              <Input.TextArea showCount maxLength={500} />
            </Form.Item>

            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error(message[11])),
                },
              ]}
              {...tailFormItemLayout}
              wrapperCol={{ span: 24 }}
            >
              <Checkbox>
                {window.$t(
                  "I agree to receive updates, marketing, and other communications from WaveAds."
                )}
              </Checkbox>
            </Form.Item>

            <Form.Item
              {...tailFormItemLayout}
              wrapperCol={{ span: 24 }}
              style={{ textAlign: "center", marginBottom: "0" }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                variant="solid"
                loading={loading}
                style={{
                  borderRadius: "0",
                  backgroundColor: "#ff638d",
                }}
              >
                {window.$t("SUBMIT")}
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

import styles from "./index.module.scss";
import { LinkedinOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal, Form, notification } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { Upload, Button } from "antd";
import axios from "axios";
import { RcFile } from "antd/es/upload/interface";
{
  window.$t("");
}
function Footer() {
  const [api, contextHolder] = notification.useNotification();
  const [open, setOpen] = useState(false);
  const [loading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<RcFile[]>([]);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setFileList([]);
  };

  const onFinish = async () => {
    setConfirmLoading(true);
    if (fileList.length === 0) {
      api.warning({ message: warningMessage });
      setConfirmLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", fileList[0]);

    try {
      const res = await axios.post(
        "https://test01-bop-front.tec-develop.cn/api/pac-foreign/officialwebsite/upload?officialWebsiteName=waveads",
        formData
      );
      if (res.status === 200) {
        setConfirmLoading(false);
        notification.success({ message: successMessage });
        setOpen(false);
        setFileList([]);
      } else {
        setConfirmLoading(false);
        notification.error({ message: errMessage });
      }
    } catch (error) {
      setConfirmLoading(false);
      notification.error({ message: errMessage });
    }
  };
  const errMessage = window.$t("Upload failed");
  const successMessage = window.$t("Upload successful");
  const warningMessage = window.$t("Please upload a file");
  return (
    <>
      {contextHolder}
      <div className={styles.footer}>
        <div className={styles.module}>
          <a
            href="https://www.linkedin.com/company/waveads-global/?viewAsMember=true"
            target="_blank"
          >
            <LinkedinOutlined />
          </a>
          <p className={styles.module_p} onClick={showModal}>
            {window.$t("Careers")}
          </p>
        </div>
        <Modal
          title={window.$t("UPLOAD YOUR RESUME")}
          open={open}
          footer={null}
          onCancel={handleCancel}
        >
          <div>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              style={{ maxWidth: 600 }}
              form={form}
              name="submit"
              onFinish={onFinish}
            >
              <Form.Item label="Upload" valuePropName="fileList">
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  beforeUpload={(file) => {
                    // 暂存文件，不立即上传
                    setFileList([...fileList, file]); // 追加文件到列表中
                    return false; // 阻止默认上传行为
                  }}
                  onRemove={(file) => {
                    // 删除时更新 fileList
                    const newFileList = fileList.filter(
                      (item) => item.uid !== file.uid
                    );
                    setFileList(newFileList);
                  }}
                >
                  <button
                    style={{
                      color: "inherit",
                      cursor: "inherit",
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 14 }}>{window.$t("Upload")}</div>
                  </button>
                </Upload>
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 24 }}
                style={{ textAlign: "center" }}
              >
                <Button
                  size="small"
                  style={{ marginRight: 20 }}
                  onClick={handleCancel}
                >
                  {window.$t("CANCEL")}
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="small"
                  color="pink"
                  variant="solid"
                  loading={loading}
                >
                  {window.$t("SUBMIT")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
        <p className={styles.Copyright_p}>
          {window.$t("Copyright © 2026 WaveAds. All Rights Reserved.")}
        </p>
      </div>
    </>
  );
}

export default Footer;

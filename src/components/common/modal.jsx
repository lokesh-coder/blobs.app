import React, { useState } from "react";
import DefaultModal from "antd/lib/modal";
import Button from "./button";

export default function Modal({ isOpen, children, onClose }) {
  return (
    <DefaultModal
      centered
      visible={isOpen}
      footer={null}
      onCancel={onClose}
      destroyOnClose
      closable={false}
      width={660}
    >
      <div>{children}</div>
      <div className="flex justify-center">
        <Button onClick={onClose}>Close</Button>
      </div>
    </DefaultModal>
  );
}

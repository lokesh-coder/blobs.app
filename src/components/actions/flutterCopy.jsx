import React, { useState } from "react";
import { view } from "@risingstack/react-easy-state";
import Button from "../common/button";
import { appStore } from "../../store";
import Modal from "../common/modal";
import Highlight from "../common/highlight";
import Copy from "../common/ copy";

const FlutterCopy = view(({ onClose }) => {
  const [isModalOpen, openModal] = useState(false);
  const ID = `${appStore.edges}-${appStore.growth}-${appStore.id}`;
  const code = `
  ///import blobs library
  import 'package:blobs/blobs.dart';
  
  /// add hash widget
  Container(
    child: Blob.fromID(
      id: ['${ID}'],
      size: 400,
    ),
  ),
  `;
  return (
    <>
      <Button
        isPrimary={false}
        tooltipText="Copy Flutter code"
        onClick={() => {
          openModal(true);
        }}
      >
        <i className="ri-flutter-fill inline-block transform scale-150"></i>
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => openModal(false)}>
        <div className="flex justify-end">
          <Copy text={ID} label="Copy ID" />
        </div>
        <Highlight code={code} lang={"dart"} />
        <div className="text-xs text-gray-500 mb-6">
          For more info about the package and documentation, please check the
          <a href="https://pub.dev/packages/blobs/"> blobs </a> repository.
        </div>
      </Modal>
    </>
  );
});

export default FlutterCopy;

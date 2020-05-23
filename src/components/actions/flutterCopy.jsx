import React, { useState } from "react";
import { view } from "@risingstack/react-easy-state";
import Button from "../common/button";
import { appStore } from "../../store";
import Modal from "../common/modal";
import Highlight from "../common/highlight";

const FlutterCopy = view(({ onClose }) => {
  const [isModalOpen, openModal] = useState(false);
  const code = `
  ///import blobs library
  import 'package:blobs/blobs.dart';
  
  /// add hash widget
  Container(
    child: Blob.fromHash(
      hash: [${appStore.edges}-${appStore.growth}-${appStore.id}],
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
        <Highlight code={code} lang={"dart"} />
      </Modal>
    </>
  );
});

export default FlutterCopy;

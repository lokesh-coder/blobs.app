import { useClipboard } from "@chakra-ui/hooks"
import { Box, Button, Link, Text } from "@chakra-ui/react"
import React from "react"
import { dynamic } from "../../state"
import Highlight from "../Common/Highlight"
import Modal from "../Common/Modal"
import { CopyIcon, FlutterIcon } from "../icons"

const FlutterCodeModalButton = ({ edges, growth, seed }) => {
  const ID = `${edges}-${growth}-${seed}`
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
  `
  const { hasCopied, onCopy } = useClipboard(ID)

  const Actions = () => {
    return (
      <>
        <Button onClick={onCopy} variant="subtle" leftIcon={<CopyIcon />}>
          {hasCopied ? "Copied" : "Copy ID"}
        </Button>
      </>
    )
  }

  return (
    <Modal
      title="Use it in Flutter"
      src={<FlutterIcon w={6} h={6} color="gray.400" />}
      actions={<Actions />}
    >
      <Highlight code={code} lang={"dart"} />
      <Text>
        For more info about the package and documentation, please check the{" "}
        <Link href="https://pub.dev/packages/blobs/" isExternal color="red">
          blobs
        </Link>{" "}
        repository.
      </Text>
    </Modal>
  )
}

export default dynamic(FlutterCodeModalButton, ["edges", "growth", "seed"])

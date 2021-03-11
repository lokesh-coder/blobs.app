import { useClipboard } from "@chakra-ui/hooks"
import { Box, Button, IconButton, Link, Text, Tooltip } from "@chakra-ui/react"
import React from "react"
import { CopyIcon } from "@chakra-ui/icons"
import { dynamic } from "../../state"
import Highlight from "../Common/Highlight"
import Modal from "../Common/Modal"
import { FlutterIcon } from "../icons"

const FlutterCodeModalButton = ({ edges, growth, seed }) => {
  const ID = `${edges}-${growth}-${seed}`
  const code = `///import blobs library
import 'package:blobs/blobs.dart';
  
///add blob widget
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
        <Button
          onClick={onCopy}
          variant="heavy"
          leftIcon={<CopyIcon fontSize="lg" />}
        >
          {hasCopied ? "Copied" : "Copy ID"}
        </Button>
      </>
    )
  }

  return (
    <Modal
      title="Use it in Flutter"
      src={
        <Tooltip
          label="Copy Flutter code"
          aria-label="Copy Flutter code"
          hasArrow
          variant="default"
        >
          <IconButton variant="ghost">
            <FlutterIcon w={6} h={6} color="gray.400" />
          </IconButton>
        </Tooltip>
      }
      actions={<Actions />}
    >
      <Highlight code={code} lang="dart" />
      <Text fontSize="sm">
        For more info about the package and documentation, please check the{" "}
        <Link href="https://pub.dev/packages/blobs/" isExternal color="primary">
          blobs
        </Link>{" "}
        repository.
      </Text>
    </Modal>
  )
}

export default dynamic(FlutterCodeModalButton, ["edges", "growth", "seed"])

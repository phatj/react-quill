import {
  Box,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { IconExternalLink, IconUnlink } from "@tabler/icons-react";
import { BubbleMenu } from "@tiptap/react";
import { FC, useCallback, useEffect, useState } from "react";
import { useEditorContext } from "./EditorProvider";

function useUpdateLink() {
  const editor = useEditorContext();
  const previousUrl: string = editor?.getAttributes("link").href ?? "";
  const [link, setLink] = useState(previousUrl);

  useEffect(() => {
    setLink(previousUrl);
  }, [previousUrl]);

  const updateLink = useCallback(
    (url: string) => {
      setLink(url);

      if (!editor) {
        return;
      }

      // update link
      editor.chain().extendMarkRange("link").setLink({ href: url }).run();
    },
    [editor]
  );

  return [link, updateLink] as const;
}

export const LinkBubbleMenu: FC = () => {
  const editor = useEditorContext();
  const [link, setLink] = useUpdateLink();

  if (!editor) {
    return null;
  }

  return (
    <Box
      as={BubbleMenu}
      editor={editor}
      updateDelay={100}
      shouldShow={() => editor.isActive("link")}
      tippyOptions={{
        placement: "bottom",
      }}
      bg="chakra-body-bg"
      borderWidth="1px"
      borderColor="gray.600"
      borderRadius="md"
    >
      <InputGroup size="sm">
        <InputLeftElement>
          <IconButton
            aria-label="go to link"
            icon={<Icon as={IconExternalLink} />}
            onClick={() => window.open(link, "_blank")}
            borderRightRadius="none"
            size="sm"
            variant="ghost"
          />
        </InputLeftElement>
        <Input pl="10" value={link} onChange={(e) => setLink(e.target.value)} />
        <InputRightElement>
          <IconButton
            aria-label="unlink"
            icon={<Icon as={IconUnlink} />}
            borderLeftRadius="none"
            size="sm"
            onClick={() =>
              editor.chain().focus().extendMarkRange("link").unsetLink().run()
            }
            isActive
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

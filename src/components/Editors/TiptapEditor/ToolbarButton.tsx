import { Button, ButtonProps, forwardRef, Icon } from "@chakra-ui/react";
import { Icon as TablerIcon } from "@tabler/icons-react";
import { ChainedCommands } from "@tiptap/react";
import { ForwardedRef } from "react";
import { capitalize, lowerFirst } from "~/src/utils/string-utils";
import { useEditorContext } from "./EditorProvider";

type InferToggleCommands<T extends string> = T extends `toggle${infer C}`
  ? C
  : never;

type ToggleCommands = InferToggleCommands<keyof ChainedCommands>;

type ToggleParams<C extends ToggleCommands> = Parameters<
  ChainedCommands[`toggle${C}`]
>;

type ToolbarButtonProps<C extends ToggleCommands> = {
  icon: TablerIcon;
  activeIcon?: TablerIcon;
  command: C;
  args?: ToggleParams<C>;
  attrs?: (args: ToggleParams<C>) => any;
};

export const ToolbarButton = forwardRef(
  <C extends ToggleCommands>(
    {
      command,
      icon,
      activeIcon = icon,
      args = [] as ToggleParams<C>,
      attrs = (args) => args[0],
      ...props
    }: ButtonProps & ToolbarButtonProps<C>,
    ref: ForwardedRef<any>
  ) => {
    const editor = useEditorContext();

    if (!editor) {
      console.warn(
        "Editor is null, check if EditorProvider has been properly setup"
      );
      return null;
    }

    type Command = `toggle${ToggleCommands}`;
    const commandName = ("toggle" + capitalize(command)) as Command;
    const isActive = editor.isActive(lowerFirst(command), attrs(args));

    return (
      <Button
        {...props}
        ref={ref}
        onClick={() =>
          editor
            .chain()
            .focus()
            // @ts-ignore the args are correct; TS is not cooperating
            [commandName](...args)
            .run()
        }
        disabled={
          !editor
            .can()
            .chain()
            .focus()
            // @ts-ignore the args are correct; TS is not cooperating
            [commandName](...args)
            .run()
        }
        isActive={isActive}
      >
        <Icon as={isActive ? activeIcon : icon} />
      </Button>
    );
  }
);

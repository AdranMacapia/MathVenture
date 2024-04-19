import React, { ReactNode } from "react";
import * as Popover from "@/components/CPopover";
import { Button } from "../Button";
import { Box } from "styled-system/jsx";
import { IconButton } from "../icon-button";
import XCloseIcon from "@/public/icons/XCloseIcon.svg";

export const PopoverWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button bgColor="white" color="black">
          Give feedback
        </Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content minW="400px" textAlign="unset">
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>

          {children}

          <Box position="absolute" top="1" right="1">
            <Popover.CloseTrigger asChild>
              <IconButton aria-label="Close Popover" variant="ghost">
                <XCloseIcon width="16px" />
              </IconButton>
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};

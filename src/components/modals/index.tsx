// components/CustomModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  title?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

const Modal = ({
  closeModal,
  isOpen,
  content,
  title,
  footer,
  className,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className={cn(className, "bg-white")}>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
        </DialogHeader>

        <DialogDescription>{content}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

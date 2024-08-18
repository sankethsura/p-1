import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../UI/ModalStructure";

export default function SmallModal({isOpen, folderName, close}) {
  return (
    <Dialog open={isOpen}> 

      <DialogContent className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{folderName}</DialogTitle>
          <DialogClose onClick={close} />
        </DialogHeader>
        <DialogDescription className="mt-4 text-gray-700">
          Are you sure you want to perform this action? This action cannot be undone.
        </DialogDescription>
        <div className="mt-6 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button className="px-4 py-2 text-white bg-red-500 rounded">Confirm</button>
        </div>
      </DialogContent>
      
    </Dialog>
  );
}

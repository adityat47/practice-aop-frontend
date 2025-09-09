'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface AddReportPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReportFormData) => void;
}

export interface ReportFormData {
  clientName: string;
  projectName: string;
  reportName: string;
  s3Path: string;
  emailIds: string[];
  schemaName: string;
  frequency: 'Daily' | 'Weekly';
  timeToPull: string;
}

export function AddReportPanel({ isOpen, onClose, onSubmit }: AddReportPanelProps) {
  const handleSubmit = () => {
    // Minimal stub payload; adjust when real form fields are added
    onSubmit({} as ReportFormData);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[700px] sm:max-w-2xl">
        <SheetHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div className="flex items-center gap-4">
            <SheetTitle className="text-lg font-medium text-black">Add Report</SheetTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Discard
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Submit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 ml-2"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

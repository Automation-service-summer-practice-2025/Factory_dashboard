export interface Documents {
  id: number;
  documentName: string;
  repairType: string;
  plannedStartDate: Date;
  actualStartDate: Date | null;
  plannedEndDate: Date;
  actualEndDate: Date | null;
}

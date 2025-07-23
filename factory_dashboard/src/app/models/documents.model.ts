export interface Acts {
  id: number;
  name: string;
  repairType: string;
  plannedStartDate: Date;
  actualStartDate: Date | null;
  plannedEndDate: Date;
  actualEndDate: Date | null;
}

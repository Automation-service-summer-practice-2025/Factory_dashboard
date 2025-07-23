export interface EquipmentActModel {
  id: number;
  equipmentId: number;
  name: string;
  repairType: string;
  plannedStartDate: Date;
  actualStartDate: Date | null;
  plannedEndDate: Date;
  actualEndDate: Date | null;
}

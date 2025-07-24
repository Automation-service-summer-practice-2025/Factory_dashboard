import { TechnicalDocuments } from '../models/technicalDocuments.model';

export const TECHNICAL_DOCUMENTS_MOCK: TechnicalDocuments[] = [
  {
    id: 11,
    name: 'Акт СБ и ПАЗ',
    fileName: 'akt_sb_paz_1.pdf',
    tabType: 'SBPS'
  },
  {
    id: 12,
    name: 'ОРД на отключение блокировки',
    fileName: 'ord_otkl_block_1.pdf',
    tabType: 'SBPS'
  },
  {
    id: 13,
    name: 'План мероприятий',
    fileName: 'plan_meropriyatiy_1.pdf',
    tabType: 'SBPS'
  },
  {
    id: 14,
    name: 'Регламент раздел 5.2',
    fileName: 'reglament_5_2.pdf',
    tabType: 'SBPS'
  },

  {
    id: 21,
    name: 'Акты проверки датчиков',
    fileName: 'sensors.pdf',
    tabType: 'DZ'
  },
  {
    id: 22,
    name: 'Регламент раздел 5.2',
    fileName: 'reglament_5_2.pdf',
    tabType: 'DZ'
  },
  {
    id: 23,
    name: 'Мнемосхема расположения датчиков',
    fileName: 'mnemoscheme.pdf',
    tabType: 'DZ'
  },
  {
    id: 24,
    name: 'Свидетельство из ФГИС Аршин',
    fileName: 'svidetelstvo.pdf',
    tabType: 'DZ'
  }
];

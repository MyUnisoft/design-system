import I18n from '../assets/I18n';

export const ExportFEX = 1;
export const ExportFEXPartial = 2;
export const ExportRCA = 3;

export const CEGIDPJ_HELP = "https://www.myunisoft.fr/docs/import_MyUnisoft_CEGID_PJ_CM.pdf";

export const LastBL_PDF = "https://www.myunisoft.fr/docs/BL/LastBL.pdf";

export const LINK_TO_PRICE_LIST = "https://www.myunisoft.fr/outils/o/Grille_tarifs_MyUnisoft.pdf";

export const exportSelectOptions = [
  { value: ExportFEX, label: I18n.t('exports.selectOptions.fec') },
  { value: ExportFEXPartial, label: I18n.t('exports.selectOptions.partial_fec') },
  { value: ExportRCA, label: I18n.t('exports.selectOptions.rca') }
];

export const daWorkProgramWorksheetFilters = [
  { label: I18n.t('tables.workProgram.all'), value: '0' },
  { label: I18n.t('tables.workProgram.worksheet'), value: '1' }
];

export const entry_types = {
  ocr_awaiting: 'o',
  bankingFlow_awaiting: 'ib',
  pay: 'p',
  banklink_awaiting: 'l'
};

export const accountingTypes = [
  {
    value: 'e',
    label: I18n.t('accounting.types.writing')
  },
  {
    value: 'm',
    label: I18n.t('accounting.types.flux')
  },
  {
    value: 'o',
    label: I18n.t('accounting.types.ocr')
  },
  {
    value: 'ib',
    label: I18n.t('accounting.types.banking')
  },
  {
    value: 'p',
    label: I18n.t('accounting.types.pay')
  },
  {
    value: 'ext',
    label: I18n.t('accounting.types.pending')
  },
  {
    value: 'l',
    label: I18n.t('accounting.types.banklink')
  }
];

export const associatesFilter = [
  // {
  //   value: 't',
  //   label: I18n.t('companyCreation.associates.associatesFilter.all'),
  //   color: 'colorError'
  // },
  {
    value: 'a',
    label: I18n.t('companyCreation.associates.associatesFilter.active')
  }
  // {
  //   value: 's',
  //   label: I18n.t('companyCreation.associates.associatesFilter.out'),
  //   color: 'colorError'
  // }
];

export const subsidiariesFilter = [
  // {
  //   value: 't',
  //   label: I18n.t('companyCreation.subsidiaries.subsidiariesFilter.all'),
  //   color: 'colorError'
  // },
  {
    value: 'a',
    label: I18n.t('companyCreation.subsidiaries.subsidiariesFilter.active')
  }
  // {
  //   value: 's',
  //   label: I18n.t('companyCreation.subsidiaries.subsidiariesFilter.out'),
  //   color: 'colorError'
  // }
];

export const status = [
  {
    label: I18n.t('dadp.status.to_do'),
    value: 'to_do'
  },
  {
    label: I18n.t('dadp.status.to_validate'),
    value: 'to_validate'
  },
  {
    label: I18n.t('dadp.status.running'),
    value: 'running'
  },
  {
    label: I18n.t('dadp.status.ko'),
    value: 'ko'
  },
  {
    label: I18n.t('dadp.status.ok'),
    value: 'ok'
  }
];

export const statusRm = [
  {
    label: I18n.t('dadp.status.ok'),
    value: 'V'
  },
  {
    label: I18n.t('dadp.status.to_validate'),
    value: 'AV'
  }
];

export const docFormats = {
  DOC: {
    format: 'doc',
    color: '#4b8bf5'
  },
  DOC_X: {
    format: 'docx',
    color: '#4b8bf5'
  },
  PDF: {
    format: 'pdf',
    color: '#f06a7d'
  },
  EXCEL: {
    format: 'xlsx',
    color: '#3da240'
  },
  EXCEL_X: {
    format: 'xls',
    color: '#3da240'
  },
  POWER_POINT: {
    format: 'ppt',
    color: '#cb4a32'
  },
  POWER_POINT_X: {
    format: 'pptx',
    color: '#cb4a32'
  },
  PNG: {
    format: 'png',
    color: '#238e11'
  },
  JPEG: {
    format: 'jpeg',
    color: '#238e11'
  },
  JPG: {
    format: 'jpg',
    color: '#238e11'
  },
  GIF: {
    format: 'gif',
    color: '#fa85a8'
  },
  BMP: {
    format: 'bmp',
    color: '#fa85a8'
  },
  TIFF: {
    format: 'tiff',
    color: '#f36f21'
  },
  VIDEO: {
    format: 'mkv',
    color: '#5268b2'
  },
  ZIP: {
    format: 'zip',
    color: '#f7e055'
  },
  RAR: {
    format: 'rar',
    color: '#663111'
  },
  MP3: {
    format: 'mp3',
    color: '#155d9b'
  },
  TXT: {
    format: 'txt',
    color: '#232524'
  }
};
export const GED_TABLE_OPTIONS = {
  COPY: 'copy',
  COPY_LINK: 'copyLink',
  SEND_BY_EMAIL: 'sendByEmail',
  SEND_IN_DISCUSSION: 'sendInDiscussion',
  DEATACH: 'deatach'
};

export const GEDTableMenu = [
  { label: I18n.t('ged.table.menu.copy'), value: GED_TABLE_OPTIONS.COPY },
  { label: I18n.t('ged.table.menu.copyLink'), value: GED_TABLE_OPTIONS.COPY_LINK },
  { label: I18n.t('ged.table.menu.sendByEmail'), value: GED_TABLE_OPTIONS.SEND_BY_EMAIL },
  { label: I18n.t('ged.table.menu.sendInDiscussion'), value: GED_TABLE_OPTIONS.SEND_IN_DISCUSSION },
  { label: I18n.t('ged.table.menu.deatach'), value: GED_TABLE_OPTIONS.DEATACH }
];

export const GEDTabs = [
  { id: 0, label: I18n.t('ged.filter.tabs.general') },
  { id: 1, label: I18n.t('ged.filter.tabs.inProgress') },
  { id: 2, label: I18n.t('ged.filter.tabs.accounts') },
  { id: 3, label: I18n.t('ged.filter.tabs.scriptures') },
  { id: 4, label: I18n.t('ged.filter.tabs.da_dp') },
  { id: 5, label: I18n.t('ged.filter.tabs.discussion') },
  { id: 6, label: I18n.t('ged.filter.tabs.documentDatabase') }
];

export const buyingDiaryAccounts = [
  '2',
  '40',
  '455',
  '471',
  '437800',
  '44',
  '6',
  '75',
  '46',
  '108',
  '19',
  '42',
  '43',
  '47',
  '48',
  '511',
  '53',
  '58',
  '708',
  '76',
  '77',
  '79'
];

export const counterPart40 = [
  '2',
  '6'
];

export const sellingDiaryAccounts = [
  '41',
  '4457',
  '580',
  '7',
  '47',
  '44',
  '46',
  '511',
  '622',
  '165',
  '43',
  '45',
  '48',
  '49',
  '53',
  '58',
  '66',
  '42'
];

export const counterPart41 = [
  '7'
];

export const odDiaryAccounts = ['512', '53'];

export const USER_TYPES = {
  ACCOUNTANT: 'ACCOUNTANT',
  RM: 'RM',
  COLLAB: 'COLLAB'
};

export const CODE_SHEET_GROUPS = {
  ACOMPTE_IS: 'ACOMPTE-IS',
  SOLDE_IS: 'SOLDE-IS',
  ACOMPTE_CVAE: 'ACOMPTE-CVAE',
  SOLDE_CVAE: 'SOLDE-CVAE',
  REMBOURSEMENT_IS: 'REMBOURSEMENT-IS',
  TVA: 'TVA',
  DECLOYER: 'DECLOYER',
  CA12ANNUAL: 'CA12-ANNUAL',
  TIDENTIF: 'T-IDENTIF',
  ANNUAL517SCA12: '3517SCA12',
  CA12ACOMPTE: 'CA12-ACOMPTE',
  ACOMPTE3514: '3514',
  IFU: 'IFU'
};

// Artificial "new room" id (for urls like /rooms/0/getAvailableUsers)
export const NEW_DISCUSSION_ROOM_ID = 0;

export const supervisorList = [
  { role: I18n.t('consulting.comment.validation.vsp') },
  { role: I18n.t('consulting.comment.validation.vcol') },
  { role: I18n.t('consulting.comment.validation.vrm') }
];

export const COMMENT_TYPES = {
  ACCOUNT: '1',
  DA: '0'
};

export const commentTypeList = [
  { value: COMMENT_TYPES.ACCOUNT, label: I18n.t('consulting.comment.accountCommentType'), name: I18n.t('consulting.comment.accountCommentType') },
  { value: COMMENT_TYPES.DA, label: I18n.t('consulting.comment.daCommentType'), name: I18n.t('consulting.comment.daCommentType') }
];

export const permanentOptions = [
  {
    id: 0,
    value: 'timely',
    label: 'Ponctuelle'
  },
  {
    id: 1,
    value: 'permanent',
    label: 'Permanente'
  }
];

export const extensionsType = [
  { label: 'none', value: '' },
  { label: 'PDF', value: 'pdf' },
  { label: 'JPG', value: 'jpg' },
  { label: 'JPEG', value: 'jpeg' },
  { label: 'PNG', value: 'png' },
  { label: 'XLS', value: 'xls' },
  { label: 'XLSX', value: 'xlsx' },
  { label: 'DOC', value: 'doc' },
  { label: 'DOCX', value: 'docx' }
];


/**
 * list of routes where need to stick navigation Bar
 * @type {*[]}
 */
export const STICKY_ROUTES = [
  'declarationTva',
  'advanceCvae',
  'declarationCvae',
  'declarationTvaCaAnnual',
  'declarationTvaCaAdvance',
  'declarationIs',
  'liquidationIs',
  'taxDeclaration',
  'rentDeclarations',
  'CIRefund',
  '2561'
];

export const flagCancelOption = [
  {
    code: 'none',
    flag_id: -1,
    name: I18n.t('newAccounting.flagDialog.none')
  }
];

export const amortissementOptions = [
  { value: 1, label: I18n.t('fixedAssets.table.linear') },
  { value: 2, label: I18n.t('fixedAssets.table.degressive') },
  { value: 3, label: I18n.t('fixedAssets.table.no_amort') }
];

export const dottedMode = [
  { value: 0, label: I18n.t('bankLinkFilter.dottedMode.notDotted') },
  { value: 1, label: I18n.t('bankLinkFilter.dottedMode.dotted') },
  { value: 2, label: I18n.t('bankLinkFilter.dottedMode.all') }
];

export const ASSIGNMENT_TYPES = {
  SAL_US: 'SAL-US', // Salarié utilisateur MyU
  SAL_NON_US: 'SAL-NON-US', // Salarié non utilisateur MyS
  SERVICE: 'SERVICE', // Service
  ASSOC: 'ASSOC' // Associé
};

export const FLAGS_TYPES = {
  IMMO: 'IMMO',
  LEASING: 'LEASING',
  OTHER: 'OTHER',
  CB: 'C-B',
  VEH: 'VEH'
};

export const periodicity_types = [
  { label: I18n.t('newAccounting.flagDialog.periodicity_types.month'), value: 0 },
  { label: I18n.t('newAccounting.flagDialog.periodicity_types.trimester'), value: 1 },
  { label: I18n.t('newAccounting.flagDialog.periodicity_types.semester'), value: 2 },
  { label: I18n.t('newAccounting.flagDialog.periodicity_types.year'), value: 3 }
];

export const typeOptions = [
  { value: 0, name: 'whole', label: I18n.t('imports.typeOptions.whole') },
  { value: 1, name: 'fec', label: I18n.t('imports.typeOptions.fec') },
  { value: 2, name: 'bank', label: I18n.t('imports.typeOptions.bank') },
  // { value: 3, label: I18n.t('imports.typeOptions.other') }
  { value: 4, name: 'assets', label: I18n.t('imports.typeOptions.assets') },
  { value: 5, name: 'excel', label: I18n.t('imports.typeOptions.excel') },
  { value: 6, name: 'trapj', label: I18n.t('imports.typeOptions.trapj') },
  { value: 7, name: 'tra', label: I18n.t('imports.typeOptions.tra') },
  { value: 8, name: 'cegidpj', label: I18n.t('imports.typeOptions.cegidpj') }
];

export const sourceOptions = [
  { value: 0, label: I18n.t('imports.sourceOptions.comptaSa') },
  { value: 1, label: I18n.t('imports.sourceOptions.cegid') }
];

export const writingTypes = [
  { value: 0, label: I18n.t('imports.writingTypes.entryByLine') }
  /* { value: 1, label: I18n.t('imports.writingTypes.entryByEntry') } */
];

export const formats = [
  {
    id: 0,
    label: I18n.t('imports.formats.cegid'),
    value: 0, // 'CEGID'
    disabled: false
  },
  {
    id: 1,
    label: I18n.t('imports.formats.coala'),
    value: 1, // 'COALA'
    disabled: false
  },
  {
    id: 2,
    label: I18n.t('imports.formats.eic'),
    value: 2, // 'EIC'
    disabled: false
  },
  {
    id: 3,
    label: I18n.t('imports.formats.agiris'),
    value: 3, // 'AGIRIS'
    disabled: true,
    color: '#ff8b1f'
  },
  {
    id: 4,
    label: I18n.t('imports.formats.acd'),
    value: 4, // 'ACD'
    disabled: true,
    color: '#ff8b1f'
  },
  {
    id: 5,
    label: I18n.t('imports.typeOptions.quadra'),
    value: 5 // 'QUADRA'
  },
  {
    id: 6,
    label: I18n.t('imports.formats.csvLoop'),
    value: 6 // CSV LOOP
  }
];

export const import_source = [
  {
    id: 0,
    label: I18n.t('imports.import_source.autres'),
    value: 0
  },
  {
    id: 1,
    label: I18n.t('imports.import_source.coala'),
    value: 1
  }
];

export const personalEDocEmployeeSafe = [
  {
    id: 0,
    label: I18n.t('accountingFirmSettings.forms.personalEDocActive'),
    value: 'CAB-DISP'
  },
  {
    id: 1,
    label: I18n.t('accountingFirmSettings.forms.personalEDocInActive'),
    value: 'CAB-NON-DISP'
  }
];

export const TVA_SHIPMENT_DIALOG_OPTIONS = {
  PDF: 'declarationPDF',
  DISCUSSION: 'sendingMessage'
};

export const TVAShipmentDialogOptionList = [
  {
    value: TVA_SHIPMENT_DIALOG_OPTIONS.PDF,
    label: I18n.t('selectEdi.selectors.declarationPDF')
  },
  {
    value: TVA_SHIPMENT_DIALOG_OPTIONS.DISCUSSION,
    label: I18n.t('selectEdi.selectors.sendingMessage')
  }
];

export const BI_MODE = {
  RB: 'RB',
  OCR: 'OCR'
};

export const PASSWORD_PLACEHOLDER = '*****';

export const contentModelCsv = 'JournalCode;EcritureDate;CompteNum;EcritureLib;Piece 1;Piece 2;Debit;Credit;Auxiliaire;PJ; \n'
  + 'AC;20200101;401000;SC PALAIS;;;0;18000;;;\n'
  + 'AC;20200101;613200;SC PALAIS;;;18000;0;;;';

export const calculIS = {
  ISBICN: 'ISBICN',
  ISBICS: 'ISBICS',
  sectionACControle: 'Contrôles',
  ref: 'AC-I-03'
};

export const periodicityTypes = [
  {
    value: 'SITU',
    label: I18n.t('dadp.review.types.SITU')
  },
  {
    value: 'BIL',
    label: I18n.t('dadp.review.types.BIL')
  }
];

export const leasingTypes = [
  {
    value: 'active',
    label: I18n.t('leasing.filters.list.active')
  },
  {
    value: 'all',
    label: I18n.t('leasing.filters.list.all')
  }
];

export const statusOfPayment = [
  {
    value: true,
    label: I18n.t('leasing.modals.leasing.paymentType.statusOfPayment.expired')
  },
  {
    value: false,
    label: I18n.t('leasing.modals.leasing.paymentType.statusOfPayment.noStatus')
  }
];

export const CLOSE_LEASING_TYPES = {
  BY_PLAN: 'byPlan',
  VIOLATION: 'violation',
  END: 'end'
};

export const typeOfCloseLeasing = [
  {
    value: CLOSE_LEASING_TYPES.BY_PLAN,
    label: I18n.t('leasingDetails.modals.closeLeasing.type.byPlan.label')
  },
  {
    value: CLOSE_LEASING_TYPES.VIOLATION,
    label: I18n.t('leasingDetails.modals.closeLeasing.type.violationOfContract.label')
  },
  {
    value: CLOSE_LEASING_TYPES.END,
    label: I18n.t('leasingDetails.modals.closeLeasing.type.endOfContract.label')
  }
];

export const reasonOfCloseLeasingByPlan = [
  {
    value: 'thirdParties',
    label: I18n.t('leasingDetails.modals.closeLeasing.type.byPlan.transferToThirdParties')
  },
  {
    value: 'exercise',
    label: I18n.t('leasingDetails.modals.closeLeasing.type.byPlan.exerciseTheEarlyPurchaseOption')
  }
];

export const reasonOfCloseLeasingEnd = [
  {
    value: 'lift',
    label: I18n.t('leasingDetails.modals.closeLeasing.type.endOfContract.liftThePurchaseOption')
  },
  {
    value: 'vehicle',
    label: I18n.t('leasingDetails.modals.closeLeasing.type.endOfContract.vehicleReturnedToLessor')
  }
];

export const PERIODS = {
  P_1: 1,
  P_2: 3,
  P_3: 6,
  P_4: 12
};

export const lettrageOptions = [
  {
    label: I18n.t('consulting.filter.lettrage'),
    value: null
  }, {
    label: I18n.t('consulting.filter.lettrageOn'),
    value: true
  },
  {
    label: I18n.t('consulting.filter.lettrageOff'),
    value: false
  },
  {
    label: I18n.t('consulting.filter.lettrageOffDate'),
    value: 'date'
  }
];

export const monitoringOptions = {
  history: 0,
  week: 1,
  month: 2,
  year: 3,
  is: 4,
  businessAdministration: 5,
  da: 6,
  expert: 7,
  businessVolume: 8,
  performance: 9
};

export const alertNotificationTypes = {
  unbalancedAccounts: I18n.t('alerts.type.unbalancedAccount')
};

export const worksheetReference = {
  CCA: 1,
  PCA: 2,
  FNP: 3,
  AAR: 4,
  AAE: 5,
  CAP_PER: 6,
  CAP_CS: 7,
  CAP_IT: 8,
  CAP_DIV: 9,
  CAP_INT: 10,
  FAE: 11
};

export const dsnWorksheetSynthesisProperties = {
  contracts: {
    id: 0,
    type: I18n.t('dsn.properties.contracts')
  },
  arrivals: {
    id: 1,
    type: I18n.t('dsn.properties.arrivals')
  },
  departures: {
    id: 2,
    type: I18n.t('dsn.properties.departures')
  },
  dismissals: {
    id: 3,
    type: I18n.t('dsn.properties.dismissals')
  }
};

export const supervisorHeaderSteps = (
  expenseCount, mileageCount, salaryCount, holidaysCount, absenceCount
) => ([
  {
    id: 1,
    label: I18n.t('supervisorDashboard.invoiceType.expense'),
    count: expenseCount
  },
  {
    id: 2,
    label: I18n.t('supervisorDashboard.invoiceType.mileage'),
    count: mileageCount
  },
  {
    id: 3,
    label: I18n.t('supervisorDashboard.invoiceType.salary'),
    count: salaryCount
  },
  {
    id: 4,
    label: I18n.t('supervisorDashboard.invoiceType.holidays'),
    count: holidaysCount
  },
  {
    id: 5,
    label: I18n.t('supervisorDashboard.invoiceType.absence'),
    count: absenceCount
  }
]);

export const MAX_COUNT_NOTIFY = 99;
export const maxCountWithSingleDigit = 9;

export const FixedAssetsModeOptions = [
  { label: I18n.t('fixedAssets.filledAccounts'), value: 'filled' },
  { label: I18n.t('fixedAssets.all'), value: 'all' }
];

export const frequencyOptions = [
  {
    label: I18n.t('dialogAccountingModel.frequencyOptions.week'),
    value: I18n.t('dialogAccountingModel.frequencyOptions.week')
  },
  {
    label: I18n.t('dialogAccountingModel.frequencyOptions.month'),
    value: I18n.t('dialogAccountingModel.frequencyOptions.month')
  },
  {
    label: I18n.t('dialogAccountingModel.frequencyOptions.semester'),
    value: I18n.t('dialogAccountingModel.frequencyOptions.semester')
  },
  {
    label: I18n.t('dialogAccountingModel.frequencyOptions.year'),
    value: I18n.t('dialogAccountingModel.frequencyOptions.year')
  }
];

export const dashboardMonitoringOptions = (isUserAdmin) => [
  {
    value: 0,
    label: I18n.t('companiesMonitoring.displayType.history')
  },
  {
    value: 1,
    label: I18n.t('companiesMonitoring.displayType.week')
  },
  {
    value: 2,
    label: I18n.t('companiesMonitoring.displayType.month')
  },
  {
    value: 3,
    label: I18n.t('companiesMonitoring.displayType.year')
  },
  {
    value: 4,
    label: I18n.t('dashboards.is')
  },
  isUserAdmin && {
    value: 5,
    label: I18n.t('dashboards.businessAdministration')
  },
  {
    value: 6,
    label: I18n.t('dashboards.da')
  },
  isUserAdmin && {
    value: 7,
    label: I18n.t('dashboards.expert')
  },
  {
    value: 8,
    label: I18n.t('dashboard.businessVolume.title')
  },
  {
    value: 9,
    label: I18n.t('dashboards.performance')
  }
];


export const LANGUAGES = {
  EN: 'en',
  FR: 'fr'
};

export const MYDATARHPROFILKEY = 'cli_dirigeant_mydatarh';

export const SSOTYPES = {
  myDataRh: 'toucan',
  evoliz: 'evoliz'
};

export const SSOLIST = [
  'myDataRh',
  'evoliz'
];

export const FILE_TYPE = {
  CSV: 'csv',
  XLSX: 'xlsx',
  PDF: 'Pdf'
};

export const NO_SELECT = 'NO_SELECT';

export const comment_validate_state = {
  toValidate: 'AV',
  toDo: 'AF',
  validate: 'V'
};

export const validation_type = {
  validCollab: 'VCOL',
  validRm: 'VRM',
  validSup: 'VSUP'
};

//Options lists 2072SSD
export const PAOptions = [
  { value: '', label: '' },
  { value: 'U', label: I18n.t('pdfFormsTooltips.form2072S.PAOptions.U') },
  { value: 'R', label: I18n.t('pdfFormsTooltips.form2072S.PAOptions.R') },
  { value: 'IR', label: I18n.t('pdfFormsTooltips.form2072S.PAOptions.IR') },
  { value: 'AP', label: I18n.t('pdfFormsTooltips.form2072S.PAOptions.AP') },
  { value: 'M', label: I18n.t('pdfFormsTooltips.form2072S.PAOptions.M') },
  { value: 'P', label: I18n.t('pdfFormsTooltips.form2072S.PAOptions.P') },
  { value: 'AU', label: I18n.t('pdfFormsTooltips.form2072S.PAOptions.AU') }
];

export const PBOptions  = [
  { value: '', label: '' },
  { value: 'B', label: I18n.t('pdfFormsTooltips.form2072S.PBOptions.B') },
  { value: 'NB', label: I18n.t('pdfFormsTooltips.form2072S.PBOptions.NB') }
];

export const AYOptions = [
  { value: '', label: '' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' }
];

export const INVALIDATE_ACCOUNT_ERROR_CODE = {
  VALID_CAB: 'COMPTE25',
  VALID_RM: 'COMPTE26',
  ERROR: 'GBL10'
};

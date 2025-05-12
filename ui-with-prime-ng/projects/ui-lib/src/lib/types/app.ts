export enum Projects {
  onboarding = 'onboarding',
  uiLibrary = 'ui-library',
}

export interface SidebarItem {
  label: string;
  icon: string;
  routerLink: string;
}

export enum CardTypes {
  basic = 'basic',
  advanced = 'advanced',
}

export enum ButtonTypes {
  variants = 'variants',
  size = 'size',
  state = 'state'
}

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warn = 'warn',
  danger = 'danger',
  info = 'info',
  contrast = 'contrast'
}

export enum ButtonSize {
  small = 'small',
  large = 'large',
}

export enum ButtonState {
  disabled = 'disabled',
  raised = 'raised',
  default = 'default'
}

export enum FieldTypes {
  radio = 'radio',
  checkbox = 'checkbox',
  select = 'select',
  input = 'input',
  textarea = 'textarea'
}

export enum InputTypes {
  text = 'text',
  password = 'password',
  email = 'email',
  number = 'number',
  date = 'date',
  validatable = 'validatable',
  autocomplete = 'autocomplete'
}

export enum CheckboxStyle {
  box = 'box',
  switch = 'switch',
  disabled = 'disabled',
}

export enum RadioStyle {
  vertical = 'vertical',
  horizontal = 'horizontal',
  disabled = 'disabled',
}

export enum SelectStyle {
  basic = 'basic',
  checkmark = 'checkmark',
  editable = 'editable',
  filter = 'filter',
  clearable = 'clearable',
  multiple = 'multiple',
  disabled = 'disabled'
}

export interface Option {
  label: string;
  value: string;
}

export enum Colors {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info'
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle = 'subtitle',
  body = 'body',
  caption = 'caption',
  overline = 'overline',
}

export enum TypographyBackground {
  primary = 'bg-primary',
  secondary = 'bg-secondary',
  success = 'bg-success',
  warning = 'bg-warning',
  danger = 'bg-danger',
  info = 'bg-info',
  grayLight = 'bg-gray-light',
  grayDark = 'bg-gray-dark',
  white = 'bg-white',
}

export enum TypographyColor {
  textPrimary = 'text-primary',
  textSecondary = 'text-secondary',
  textSuccess = 'text-success',
  textWarning = 'text-warning',
  textDanger = 'text-danger',
  textInfo = 'text-info',
  textGrayDark = 'text-gray-dark',
  textWhite = 'text-white'
}

export interface TableData {
  code: string;
  name: string;
  category: string;
  quantity: number;
}


export interface StepType {
  label: string;
  styleClass: string;
}

export enum onBoardingStep {
  signUp = 0,
  personalInformation = 1,
  educationInformation = 2
}

export interface OnBoardingForm {
  signUp: SignUpForm;
  personalInformation: PersonalInformationForm;
  educationInformation: EducationInformationForm[];
}

export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface PersonalInformationForm {
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
}
export interface EducationInformationForm {
  school: string;
  graduationYear: string;
  gpa: string;
  intendedMajor: string;
  secondaryMajor: string;
  extracurricularActivities: string;
}

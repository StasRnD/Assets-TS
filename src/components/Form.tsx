import { BaseDialog } from './BaseDialog';
import { FormProps } from '../utils/types';

const Form = ({
  coins,
  currentDialogType,
  updateCoins,
  openDialog,
}: FormProps) => {
  return currentDialogType ? (
    <BaseDialog
      coins={coins}
      currentDialogType={currentDialogType}
      updateCoins={updateCoins}
      openDialog={openDialog}
    />
  ) : null;
};
export default Form;

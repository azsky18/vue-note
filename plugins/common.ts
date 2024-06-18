import { ModalAlert } from "#components";

interface AlertOption {
  header?: boolean;
  headerText?: string;
  closeButtonText?: string;
  onClose?: (modal: any) => void;
}

export default defineNuxtPlugin((nuxtApp) => {
  const modal = useModal();

  return {
    provide: {
      alert: (message: string, option: AlertOption = {}) => {
        const opt = Object.assign(
          {
            header: true,
            headerText: "Alert",
            closeButtonText: "Confirm",
          },
          option,
          {
            callback: () => {
              if (option?.onClose) {
                option.onClose(modal);
              } else {
                modal.close();
              }
            },
          }
        );

        modal.open(ModalAlert, {
          message,
          option: opt,
        });
      },
    },
  };
});

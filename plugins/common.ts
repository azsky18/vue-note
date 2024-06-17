import { ModalAlert } from "#components";

export default defineNuxtPlugin((nuxtApp) => {
  const modal = useModal();

  // const defaultAlertOption = {
  //   header: true,
  //   headerText: "Alert",
  //   closeButtonText: "Confirm",
  //   callback: (modal: any) => {
  //     modal.close();
  //   },
  // };

  return {
    provide: {
      alert: (message: string, option: AlertOption) => {
        const opt = Object.assign(
          {},
          {
            header: true,
            headerText: "Alert",
            closeButtonText: "Confirm",
            callback: () => {
              if (option?.callback) {
                option.callback(modal);
              } else {
                modal.close();
              }
            },
          },
          option
        );

        modal.open(ModalAlert, {
          message,
          option: opt,
        });
      },
    },
  };
});

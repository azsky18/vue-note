export const useCommonStore = defineStore("common", {
  /* alert 방식을 바꾸면서 필요 없으나 문법 잃어버릴까봐 그냥 냅둠 */
  state: () => {
    return {
      alertOpen: false,
      alertMessage: "",
    };
  },
  actions: {
    alert(msg: string) {
      this.alertOpen = true;
      this.alertMessage = msg;
    },
    closeAlert() {
      this.alertOpen = false;
    },
  },
});

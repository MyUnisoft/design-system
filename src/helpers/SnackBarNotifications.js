export const Notifications = (message, variant) => ({
  message,
  options: {
    persist: true,
    key: new Date().getTime() + Math.random(),
    variant
  }
});

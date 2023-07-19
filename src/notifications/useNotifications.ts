const useNotificaitons = () => {
  const enableNotifications = async () => {
    if (!("Notification" in window)) {
      console.warn("Notifications are not supported");
      return false;
    } else if (
      Notification.permission === "denied" ||
      Notification.permission === "default"
    ) {
      await Notification.requestPermission((permission) => {
        console.log("Permission: " + permission);
      });
    } else if (Notification.permission === "granted") {
      console.log("Already granted");
    }

    return Notification.permission === "granted";
  };

  const checkNotification = () => {
    if ("Notification" in window) {
      return Notification.permission === "granted";
    } else {
      return false;
    }
  };

  const sendNotifications = (message: string) => {
    if (!("Notification" in window)) {
      console.warn("Notifications not supported for sending");
      return;
    }
    const notificaiton = new Notification("Update for flight OC345", {
      icon: "/180.png",
      body: message,
    });
    notificaiton.onclick = () => {
      window.open(window.location.href);
    };
  };

  return { enableNotifications, checkNotification, sendNotifications };
};

export default useNotificaitons;

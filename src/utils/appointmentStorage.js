const STORAGE_KEY = "suna_motors_appointments";

export const APPOINTMENTS_UPDATED_EVENT = "suna-motors-appointments-updated";

export const getAppointments = () => {
  try {
    const storedAppointments = localStorage.getItem(STORAGE_KEY);

    if (storedAppointments === null) {
      return [];
    }

    const parsedAppointments = JSON.parse(storedAppointments);

    return Array.isArray(parsedAppointments) ? parsedAppointments : [];
  } catch (error) {
    console.error("Failed to load appointments:", error);
    return [];
  }
};

export const saveAppointments = (appointments) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(APPOINTMENTS_UPDATED_EVENT));
    }

    return true;
  } catch (error) {
    console.error("Failed to save appointments:", error);
    return false;
  }
};

export const addAppointment = (appointment) => {
  const currentAppointments = getAppointments();

  const newAppointment = {
    ...appointment,
    id: Date.now(),
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  const updatedAppointments = [newAppointment, ...currentAppointments];

  const saved = saveAppointments(updatedAppointments);

  return saved ? newAppointment : null;
};

export const updateAppointment = (appointmentId, updates) => {
  const currentAppointments = getAppointments();

  const updatedAppointments = currentAppointments.map((appointment) =>
    Number(appointment.id) === Number(appointmentId)
      ? {
          ...appointment,
          ...updates,
          id: appointment.id,
        }
      : appointment,
  );

  const saved = saveAppointments(updatedAppointments);

  return saved ? updatedAppointments : currentAppointments;
};

export const deleteAppointment = (appointmentId) => {
  const currentAppointments = getAppointments();

  const updatedAppointments = currentAppointments.filter(
    (appointment) => Number(appointment.id) !== Number(appointmentId),
  );

  const saved = saveAppointments(updatedAppointments);

  return saved ? updatedAppointments : currentAppointments;
};

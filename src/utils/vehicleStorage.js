import defaultVehicles from "../Data/vehicles";

const STORAGE_KEY = "suna_motors_vehicles";
export const VEHICLES_UPDATED_EVENT = "suna-motors-vehicles-updated";

export const getVehicles = () => {
  try {
    const storedVehicles = localStorage.getItem(STORAGE_KEY);

    if (storedVehicles === null) {
      return defaultVehicles;
    }

    const parsedVehicles = JSON.parse(storedVehicles);

    return Array.isArray(parsedVehicles) ? parsedVehicles : defaultVehicles;
  } catch (error) {
    console.error("Failed to load vehicles:", error);
    return defaultVehicles;
  }
};

export const saveVehicles = (vehicles) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(VEHICLES_UPDATED_EVENT));
    }

    return true;
  } catch (error) {
    console.error("Failed to save vehicles:", error);
    return false;
  }
};

export const addVehicle = (vehicle) => {
  const currentVehicles = getVehicles();
  const updatedVehicles = [...currentVehicles, vehicle];

  const saved = saveVehicles(updatedVehicles);

  return saved ? updatedVehicles : currentVehicles;
};

export const updateVehicle = (vehicleId, updatedVehicle) => {
  const currentVehicles = getVehicles();

  const updatedVehicles = currentVehicles.map((vehicle) =>
    Number(vehicle.id) === Number(vehicleId)
      ? {
          ...vehicle,
          ...updatedVehicle,
          id: vehicle.id,
        }
      : vehicle,
  );

  const saved = saveVehicles(updatedVehicles);

  return saved ? updatedVehicles : currentVehicles;
};

export const deleteVehicle = (vehicleId) => {
  const currentVehicles = getVehicles();

  const updatedVehicles = currentVehicles.filter(
    (vehicle) => Number(vehicle.id) !== Number(vehicleId),
  );

  const saved = saveVehicles(updatedVehicles);

  return saved ? updatedVehicles : currentVehicles;
};

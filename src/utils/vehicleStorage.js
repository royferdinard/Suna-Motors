import defaultVehicles from "../Data/vehicles";

const STORAGE_KEY = "suna_motors_vehicles";

export const getVehicles = () => {
  const storedVehicles = localStorage.getItem(STORAGE_KEY);

  if (!storedVehicles) {
    return defaultVehicles;
  }

  try {
    return JSON.parse(storedVehicles);
  } catch (error) {
    console.error("Failed to load vehicles:", error);
    return defaultVehicles;
  }
};

export const saveVehicles = (vehicles) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
};

export const addVehicle = (vehicle) => {
  const currentVehicles = getVehicles();

  const updatedVehicles = [...currentVehicles, vehicle];

  saveVehicles(updatedVehicles);

  return updatedVehicles;
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

  saveVehicles(updatedVehicles);

  return updatedVehicles;
};

export const deleteVehicle = (vehicleId) => {
  const currentVehicles = getVehicles();

  const updatedVehicles = currentVehicles.filter(
    (vehicle) => Number(vehicle.id) !== Number(vehicleId),
  );

  saveVehicles(updatedVehicles);

  return updatedVehicles;
};

import React, { useState } from "react";
import { ArrowLeft, Upload, X, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addVehicle, getVehicles } from "../../utils/vehicleStorage";

const initialForm = {
  brand: "",
  name: "",
  category: "SUVs",
  year: "",
  price: "",
  mileage: "",
  condition: "Used",
  fuel: "Petrol",
  transmission: "Automatic",
  driveType: "FWD",
  bodyType: "SUV",
  color: "",
  engine: "",
  seats: "",
  status: "Available",
  stockNumber: "",
  description: "",
  features: "",
};

const AddVehicle = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);
  const [images, setImages] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((current) => [...current, ...previews]);

    event.target.value = "";
  };

  const removeImage = (index) => {
    setImages((current) => {
      const imageToRemove = current[index];

      if (imageToRemove?.preview) {
        URL.revokeObjectURL(imageToRemove.preview);
      }

      return current.filter((_, i) => i !== index);
    });
  };

  /*
   * Convert an uploaded image into a data URL.
   *
   * Data URLs can be stored inside localStorage.
   */
  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Failed to read image."));

      reader.readAsDataURL(file);
    });
  };

  /*
   * Generate the next vehicle ID.
   */
  const generateVehicleId = () => {
    const vehicles = getVehicles();

    const usedIds = new Set(
      vehicles
        .map((vehicle) => Number(vehicle.id))
        .filter((id) => Number.isSafeInteger(id) && id > 0),
    );

    let newId = 1;

    while (usedIds.has(newId)) {
      newId += 1;
    }

    return newId;
  };

  /*
   * Save vehicle.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    /*
     * Basic validation
     */
    if (!formData.brand.trim()) {
      toast.error("Please enter the vehicle make.");
      return;
    }

    if (!formData.name.trim()) {
      toast.error("Please enter the vehicle model.");
      return;
    }

    if (!formData.year) {
      toast.error("Please enter the vehicle year.");
      return;
    }

    if (!formData.price) {
      toast.error("Please enter the vehicle price.");
      return;
    }

    if (images.length === 0) {
      toast.error("Please upload at least one vehicle image.");
      return;
    }

    try {
      setIsSaving(true);

      /*
       * Convert all uploaded images into persistent data URLs.
       */
      const savedImages = await Promise.all(
        images.map((image) => fileToDataUrl(image.file)),
      );

      /*
       * Convert comma-separated features into an array.
       *
       * Example:
       *
       * "Leather Interior, Reverse Camera, Push Start"
       *
       * becomes:
       *
       * ["Leather Interior", "Reverse Camera", "Push Start"]
       */
      const features = formData.features
        .split(",")
        .map((feature) => feature.trim())
        .filter(Boolean);

      /*
       * Build the vehicle object using the same
       * general structure as Data/vehicles.js.
       */
      const newVehicle = {
        id: generateVehicleId(),

        brand: formData.brand.trim(),
        name: formData.name.trim(),

        category: formData.category,

        year: Number(formData.year),
        price: Number(formData.price),

        mileage: formData.mileage
          ? `${Number(formData.mileage).toLocaleString()} km`
          : "",

        condition: formData.condition,

        fuel: formData.fuel,
        transmission: formData.transmission,
        driveType: formData.driveType,
        bodyType: formData.bodyType,

        color: formData.color.trim(),
        engine: formData.engine.trim(),

        seats: Number(formData.seats) || 0,

        status: formData.status,

        stockNumber: formData.stockNumber.trim(),

        featured,

        images: savedImages,

        description: formData.description.trim(),

        features,
      };

      /*
       * Save into localStorage through vehicleStorage.js
       */
      addVehicle(newVehicle);

      /*
       * Clean temporary preview URLs.
       */
      images.forEach((image) => {
        if (image.preview) {
          URL.revokeObjectURL(image.preview);
        }
      });

      toast.success("Vehicle added successfully!");

      /*
       * Return to Vehicles list.
       */
      navigate("/admin/vehicles");
    } catch (error) {
      console.error("Failed to save vehicle:", error);

      toast.error("Failed to save vehicle. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/admin/vehicles"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-orange-600 dark:text-gray-400"
        >
          <ArrowLeft size={17} />
          Back to Vehicles
        </Link>

        <div>
          <p className="mb-1 text-sm font-medium text-orange-600">Inventory</p>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Add Vehicle
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Add a new vehicle to your Suna Motors inventory.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Basic Information
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Enter the main information about this vehicle.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">Make</label>

              <input
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Toyota"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Model</label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Land Cruiser"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none dark:border-white/10 dark:bg-white/5"
              >
                <option>SUVs</option>
                <option>Sedans</option>
                <option>Luxury</option>
                <option>Pickups</option>
                <option>Hatchbacks</option>
                <option>Coupe</option>
                <option>Vans</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Year</label>

              <input
                name="year"
                value={formData.year}
                onChange={handleChange}
                type="number"
                placeholder="2024"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Price</label>

              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                placeholder="8500000"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Mileage</label>

              <input
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                type="number"
                placeholder="45000"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Condition
              </label>

              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none dark:border-white/10 dark:bg-white/5"
              >
                <option>Used</option>
                <option>New</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Seats</label>

              <input
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                type="number"
                placeholder="5"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
              />
            </div>
          </div>
        </section>

        {/* Vehicle Details */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Vehicle Details
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Add technical specifications and vehicle details.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Fuel Type
              </label>

              <select
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
              >
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Hybrid</option>
                <option>Electric</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Transmission
              </label>

              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
              >
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Drive Type
              </label>

              <select
                name="driveType"
                value={formData.driveType}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
              >
                <option>FWD</option>
                <option>RWD</option>
                <option>AWD</option>
                <option>4WD</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Body Type
              </label>

              <select
                name="bodyType"
                value={formData.bodyType}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
              >
                <option>SUV</option>
                <option>Sedan</option>
                <option>Hatchback</option>
                <option>Pickup</option>
                <option>Coupe</option>
                <option>Van</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Color</label>

              <input
                name="color"
                value={formData.color}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Black"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Engine</label>

              <input
                name="engine"
                value={formData.engine}
                onChange={handleChange}
                type="text"
                placeholder="e.g. 3.0L"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
              />
            </div>
          </div>
        </section>

        {/* Inventory */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Inventory Settings
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
              >
                <option>Available</option>
                <option>Reserved</option>
                <option>Sold</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Stock Number
              </label>

              <input
                name="stockNumber"
                value={formData.stockNumber}
                onChange={handleChange}
                type="text"
                placeholder="e.g. SUNA-001"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setFeatured((current) => !current)}
            className={`mt-5 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition ${
              featured
                ? "border-orange-600 bg-orange-50 text-orange-600 dark:bg-orange-500/10"
                : "border-gray-200 text-gray-600 dark:border-white/10 dark:text-gray-400"
            }`}
          >
            <Star size={18} className={featured ? "fill-orange-600" : ""} />

            {featured ? "Featured Vehicle" : "Mark as Featured"}
          </button>
        </section>

        {/* Images */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Vehicle Images
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Upload one or more images of the vehicle.
            </p>
          </div>

          <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-orange-600 dark:border-white/10 dark:bg-white/5">
            <Upload size={32} className="mb-3 text-gray-400" />

            <p className="text-sm font-medium">
              Click to upload vehicle images
            </p>

            <p className="mt-1 text-xs text-gray-400">PNG, JPG or WEBP</p>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {images.length > 0 && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={image.preview}
                    alt={`Vehicle ${index + 1}`}
                    className="h-40 w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-2 top-2 rounded-lg bg-black/70 p-2 text-white opacity-0 transition group-hover:opacity-100"
                  >
                    <X size={16} />
                  </button>

                  {index === 0 && (
                    <span className="absolute bottom-2 left-2 rounded-lg bg-orange-600 px-2 py-1 text-xs font-semibold text-white">
                      Main Image
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Description */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Description
            </h2>
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="6"
            placeholder="Write a detailed description of the vehicle..."
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
          />

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">Features</label>

            <textarea
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows="4"
              placeholder="Enter features separated by commas, e.g. Leather Interior, Reverse Camera, Push Start"
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-orange-600 dark:border-white/10 dark:bg-white/5"
            />

            <p className="mt-2 text-xs text-gray-400">
              Separate each feature with a comma.
            </p>
          </div>
        </section>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link
            to="/admin/vehicles"
            className="rounded-xl border border-gray-200 px-6 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSaving}
            className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Save Vehicle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getVehicles, updateVehicle } from "../../utils/vehicleStorage";

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    category: "",
    year: "",
    price: "",
    mileage: "",
    condition: "",
    fuel: "",
    transmission: "",
    driveType: "",
    bodyType: "",
    color: "",
    engine: "",
    seats: "",
    status: "Available",
    stockNumber: "",
    description: "",
    features: "",
  });

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const vehicles = getVehicles();

    const vehicle = vehicles.find((item) => Number(item.id) === Number(id));

    if (!vehicle) {
      toast.error("Vehicle not found");
      navigate("/admin/vehicles");
      return;
    }

    setFormData({
      brand: vehicle.brand || "",
      name: vehicle.name || "",
      category: vehicle.category || "",
      year: vehicle.year || "",
      price: vehicle.price || "",
      mileage: vehicle.mileage
        ? String(vehicle.mileage).replace(" km", "").replace(/,/g, "")
        : "",
      condition: vehicle.condition || "",
      fuel: vehicle.fuel || "",
      transmission: vehicle.transmission || "",
      driveType: vehicle.driveType || "",
      bodyType: vehicle.bodyType || "",
      color: vehicle.color || "",
      engine: vehicle.engine || "",
      seats: vehicle.seats || "",
      status: vehicle.status || "Available",
      stockNumber: vehicle.stockNumber || "",
      description: vehicle.description || "",
      features: Array.isArray(vehicle.features)
        ? vehicle.features.join(", ")
        : vehicle.features || "",
    });

    setExistingImages(vehicle.images || []);
    setFeatured(vehicle.featured === true);
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeExistingImage = (index) => {
    setExistingImages((prev) =>
      prev.filter((_, imageIndex) => imageIndex !== index),
    );
  };

  const removeNewImage = (index) => {
    setImages((prev) => {
      const imageToRemove = prev[index];

      if (imageToRemove?.preview) {
        URL.revokeObjectURL(imageToRemove.preview);
      }

      return prev.filter((_, imageIndex) => imageIndex !== index);
    });
  };

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.brand || !formData.name) {
      toast.error("Brand and vehicle name are required");
      return;
    }

    if (!formData.year || !formData.price) {
      toast.error("Year and price are required");
      return;
    }

    if (existingImages.length === 0 && images.length === 0) {
      toast.error("Please keep at least one vehicle image");
      return;
    }

    try {
      setIsSaving(true);

      const newImages = await Promise.all(
        images.map((image) => fileToDataUrl(image.file)),
      );

      const allImages = [...existingImages, ...newImages];

      const updatedVehicle = {
        brand: formData.brand,
        name: formData.name,
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
        color: formData.color,
        engine: formData.engine,
        seats: Number(formData.seats) || 0,
        status: formData.status,
        stockNumber: formData.stockNumber,
        featured,
        images: allImages,
        description: formData.description,
        features: formData.features
          .split(",")
          .map((feature) => feature.trim())
          .filter(Boolean),
      };

      updateVehicle(id, updatedVehicle);

      images.forEach((image) => {
        if (image.preview) {
          URL.revokeObjectURL(image.preview);
        }
      });

      toast.success("Vehicle updated successfully!");

      navigate("/admin/vehicles");
    } catch (error) {
      console.error("Failed to update vehicle:", error);
      toast.error("Failed to update vehicle");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 transition-colors duration-300 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate("/admin/vehicles")}
            className="mb-4 text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            ← Back to Vehicles
          </button>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Edit Vehicle
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update vehicle information and manage its images.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Basic Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Brand</label>
                <input
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Vehicle Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Year</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Mileage
                </label>
                <input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  placeholder="25000"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Condition
                </label>
                <input
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  placeholder="Foreign Used"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Fuel</label>
                <input
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  placeholder="Petrol"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Specifications
            </h2>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <input
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                placeholder="Transmission"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />

              <input
                name="driveType"
                value={formData.driveType}
                onChange={handleChange}
                placeholder="Drive Type"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />

              <input
                name="bodyType"
                value={formData.bodyType}
                onChange={handleChange}
                placeholder="Body Type"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />

              <input
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="Color"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />

              <input
                name="engine"
                value={formData.engine}
                onChange={handleChange}
                placeholder="Engine"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />

              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                placeholder="Seats"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />

              <input
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Status"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />

              <input
                name="stockNumber"
                value={formData.stockNumber}
                onChange={handleChange}
                placeholder="Stock Number"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
              />
            </div>
          </section>

          {/* Images */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Vehicle Images
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Keep existing images or add new ones.
                </p>
              </div>

              <label className="cursor-pointer rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700">
                Add Images
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {(existingImages.length > 0 || images.length > 0) && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {existingImages.map((image, index) => (
                  <div
                    key={`existing-${index}`}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10"
                  >
                    <img
                      src={image}
                      alt={`Vehicle ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeExistingImage(index)}
                      className="absolute right-2 top-2 rounded-lg bg-black/70 px-2 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {images.map((image, index) => (
                  <div
                    key={`new-${index}`}
                    className="group relative overflow-hidden rounded-xl border border-orange-600"
                  >
                    <img
                      src={image.preview}
                      alt={`New vehicle ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute right-2 top-2 rounded-lg bg-black/70 px-2 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Description & Features */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Description & Features
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Features
                </label>

                <input
                  name="features"
                  value={formData.features}
                  onChange={handleChange}
                  placeholder="Sunroof, Leather Seats, Bluetooth"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-600 dark:border-white/10 dark:bg-gray-800"
                />

                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Separate features using commas.
                </p>
              </div>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 accent-orange-600"
                />

                <span className="text-sm font-medium">Featured Vehicle</span>
              </label>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/admin/vehicles")}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVehicle;

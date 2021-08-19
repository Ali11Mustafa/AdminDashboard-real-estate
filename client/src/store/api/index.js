import axios from "axios"

const API = axios.create({ baseUrl: "http://localhost:4000" })

export const createEstate = newEstate =>
  API.post("/api/earth/addEarth", newEstate)

// LOCATIONS
export const getAllCities = () => API.get("/api/earth/cities")
export const getAllCountries = () => API.get("/api/earth/countries")

// DIRECTIONS
export const getAllDirections = () => API.get("/api/earth/directions")

// TYPES
export const getAllEstateTypes = () => API.get("/api/earth/estateTypes")

export const getAllPropertyTypes = () => API.get("/api/earth/propertyTypes")

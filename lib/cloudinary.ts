import { SelectCar } from "@/db/schema"

export const getCarImagePublicId = (bodyStyle: SelectCar["bodyStyle"]) => {
  switch (bodyStyle) {
    case "hatchback":
      return "hatchback_hawhtv"

    case "minivan":
      return "minivan_vlkx4g"

    case "sedan":
      return "sedan_rfl011"

    case "sports-car":
      return "sports-car_hmxtaj"

    case "pickup-truck":
      return "pickup-truck_ihwn41"

    case "suv":
      return "suv_rdgyby"

    default:
      return null
  }
}

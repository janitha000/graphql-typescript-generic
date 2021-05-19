import DataLoader from 'dataloader'
import { VEHICLES } from '../TypeDefs/Vehicle'

const loadBrands = async (brandNames: readonly string[]) => {
    console.log('getting values from the dataloader for brands ' + brandNames)
    const brands = brandNames.map((brand) => {
        return VEHICLES.filter(x => x.type === brand)
    })

    return brands;
}

export const BrandLoader = new DataLoader(loadBrands)


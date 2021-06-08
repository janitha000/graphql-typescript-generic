import * as rp from 'request-promise';
import { } from 'jest'

const API = 'http://localhost:5000/graphql'

describe('Vehicle endpoint testing', () => {
    it('should return correct vehicles', async () => {
        const query = `
        query{
            getAllVehicles{
              name
              year
              type
            }
          }
        `

        const response = await rp({ method: 'POST', uri: API, body: { query }, json: true });
        expect(response).
    })
})
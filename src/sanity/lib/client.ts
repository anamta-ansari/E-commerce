import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectId : "4006jjbr",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  dataset : "production",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  apiVersion : '2023-01-01',
 // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useCdn: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  token: 'skRTjmBlxujt5116CLY3gN2xyZM6hcA7azof4pZX2jxfLhYm9ZjYRJzUc9JYIAaU30qWReXndCpjrKSri0KkbMQ9arRb4wMo7pYytuWhrk3d0qccXfsoOOxe4j581pNkYDFUFx55VQN6EqQmcqlro5sMK3aTffIK9suujD4DL74tRwoGJgPW', // Set to false if statically generating pages, using ISR or tag-based revalidation
})

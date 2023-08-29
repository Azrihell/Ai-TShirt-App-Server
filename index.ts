import cors from 'cors'
import express, { Request, Response } from 'express'
import { DalleRoutes } from './api/routes-dalle'
import pjson from './package.json'
import * as dotenv from 'dotenv'

// AZ: Creating The Express Instance
const server: any = express()

// AZ: Adding Middleware Support
server.use(express.json({ limit: '50mb' }))
server.use(express.urlencoded({ extended: true }))
server.use(cors({ credentials: true, origin: '*' }));
dotenv.config()

// AZ: Creating a base route to provide a server version and to test the API is functional
server.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    version: pjson.version,
    message: 'Hello form Az! This is the API service for my T-Shirt application. Enjoy 🥳',
  })
})

// AZ: Import sub routes
DalleRoutes(server)

// AZ: Start the express server. 
server.listen(process.env.PORT, async () => {
  try {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error)
  }
})


// AZ: Export the `server` instance as required for Vercel support
export default server


// app.use('/api/v1/dalle', dalleRoutes)

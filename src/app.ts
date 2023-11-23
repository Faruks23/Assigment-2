import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { UserRoute } from './app/modulse/user/user.route'


app.use(express.json())
app.use(cors())

// application routes
app.use('/api', UserRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World User!')
})

export default app

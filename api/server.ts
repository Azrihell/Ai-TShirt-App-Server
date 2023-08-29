import { VercelRequest, VercelResponse } from '@vercel/node'
import server from '../index'

export default (req: VercelRequest, res: VercelResponse) => {
  return server(req, res);
}
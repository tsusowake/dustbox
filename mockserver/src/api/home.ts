import { Router } from 'express'
import { APISetUpper } from '.'

export default class HomeAPI implements APISetUpper {
  private router: Router

  constructor(r: Router) {
    this.router = r
  }

  setup(): void {
    this.router.get('/home', (req, res) => {
      res.send('Hello world')
    })
  }
}

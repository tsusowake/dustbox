import { Router } from 'express'
import { SetUpper } from '.'

export default class HomeAPI implements SetUpper {
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

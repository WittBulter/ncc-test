import { Get, JsonController, QueryParam } from 'routing-controllers'
import { SessionsService } from './service'

@JsonController()
export class SessionsController {
  
  constructor(
    private sessionsService: SessionsService,
  ) {
  }
  
  @Get('/sessions')
  async session(@QueryParam('username') username: string): Promise<any> {
    return 'hello'
  }
  
}

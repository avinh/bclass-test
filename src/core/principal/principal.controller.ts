import { Controller } from '@nestjs/common';
import { PrincipalService } from './principal.service';

@Controller('principal')
export class PrincipalController {
  constructor(private readonly principalService: PrincipalService) {}
}

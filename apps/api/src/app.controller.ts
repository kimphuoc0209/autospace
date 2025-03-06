import { Controller, Get } from '@nestjs/common';
import { add } from "@autospace/sample-lib";

@Controller()
export class AppController {


  @Get()
  getHello(): string {
    return `Hello ${add(123, 456)}`;
  }
}
